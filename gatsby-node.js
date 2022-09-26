const path = require('path');
const { ContentfulTSGeneratorPlugin } = require('contentful-ts-generator');
const {
  ALBUMS_PATH,
  POSTS_PATH,
} = require('./src/constants');

exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === 'develop' || stage === 'develop-html',
      }),
      new ContentfulTSGeneratorPlugin({
        downloadSchema: true,
        schemaFile: 'lib/contentful-schema.json',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.md$/,
          use: ['html-loader', 'markdown-loader'],
        },
      ],
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const { data, errors } = await graphql(`
    {
      allContentfulBlogPost {
        postEdges: edges {
          node {
            id
            category
            slug
          }
        }
      }
      albums: allContentfulMusicRelease(
        filter: { type: { eq: "album" } }
      ) {
        albumEdges: edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(errors);
    return;
  }

  const {
    allContentfulBlogPost: { postEdges },
    albums: { albumEdges },
  } = data;

  const templates = {
    post: path.resolve('./src/templates/Post.tsx'),
    list: path.resolve('./src/templates/List.tsx'),
    categorizedList: path.resolve('./src/templates/CategorizedList.tsx'),
    albums: path.resolve('./src/templates/Albums.tsx'),
    album: path.resolve('./src/templates/Album.tsx'),
  };

  // MUSIC RELEASE PAGES

  albumEdges.forEach(({ node: { id, slug } }) => {
    createPage({
      path: `/${slug}`,
      component: templates.album,
      context: { id },
    });
  });

  // MUSIC RELEASE COLLECTIONS

  const albumsCount = albumEdges.length;

  if (albumsCount) {
    createPage({
      path: ALBUMS_PATH,
      component: templates.albums,
      context: {},
    });
  }

  // POST PAGES

  const categoryMatrix = [];

  postEdges.forEach(({
    node: {
      id,
      category,
      slug,
    },
  }) => {
    if (typeof category === 'string') {
      categoryMatrix.push(category);
    }

    createPage({
      path: `${POSTS_PATH}/${slug}`,
      component: templates.post,
      context: { id },
    });
  });

  // POST COLLECTIONS

  const postsCount = postEdges.length;

  if (postsCount) {
    createPage({
      path: POSTS_PATH,
      component: templates.list,
      context: {},
    });
  }

  const categories = [...new Set(categoryMatrix)];

  categories.forEach((category) => {
    createPage({
      path: `/categories/${category}`,
      component: templates.categorizedList,
      context: { category },
    });
  });
};
