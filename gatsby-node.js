const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const {
  ALBUM,
  ALBUMS_PATH,
  POSTS_PATH,
} = require('./src/constants');

exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === 'develop' || stage === 'develop-html',
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
      allProjectsJson(filter: { hide: { ne: true } }) {
        projectEdges: edges {
          node {
            type
            fields {
              path
            }
          }
        }
      }
      allContentfulBlogPost {
        postEdges: edges {
          node {
            id
            category {
              name
            }
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
    allProjectsJson: { projectEdges },
    allContentfulBlogPost: { postEdges },
  } = data;

  const templates = {
    post: path.resolve('./src/templates/Post.tsx'),
    list: path.resolve('./src/templates/List.tsx'),
    categorizedList: path.resolve('./src/templates/CategorizedList.tsx'),
    albums: path.resolve('./src/templates/Albums.tsx'),
    album: path.resolve('./src/templates/Album.tsx'),
  };

  // PROJECT PAGES

  projectEdges.forEach(({ node: { type, fields: { path } } }) => {
    const projectComponents = {
      default: null,
      album: templates.album,
    };

    let component = type ? projectComponents[type] : projectComponents.default;

    if (component !== null) {
      createPage({
        path,
        component,
        context: {},
      });
    }
  });

  // PROJECT COLLECTIONS

  const albumsCount = projectEdges.filter(({ node: { type } }) =>
    type === ALBUM).length;

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
    if (typeof category.name === 'string') {
      categoryMatrix.push(category.name);
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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  const createPathField = (basePath) => {
    const path = createFilePath({
      node,
      getNode,
      basePath,
      trailingSlash: false,
    });

    createNodeField({
      node,
      name: 'path',
      value: path,
    });
  }

  const baseNames = {
    project: 'projects',
    page: undefined,
  };

  const main = () => {
    const isProject = node.internal.type === 'ProjectsJson';
    const isMarkdown = node.internal.type === 'MarkdownRemark';
    const isPortfolio = isMarkdown && node.frontmatter.type === 'portfolio';
    const isContent = isMarkdown && node.frontmatter.type === 'content';

    if (isProject) {
      createPathField(baseNames.project);
    }

    if (isPortfolio || isContent) {
      createPathField(baseNames.page);
    }
  }

  main();
};
