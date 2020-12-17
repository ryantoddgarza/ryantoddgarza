require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const {
  CONTENT_PER_PAGE,
  ALBUM,
  PORTFOLIO,
  POST,
  ALBUMS_PATH,
  PORTFOLIOS_PATH,
  POSTS_PATH,
} = require('./src/constants');

exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  actions.setWebpackConfig({
    externals: {
      document: true,
      discus_config: true,
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === 'develop' || stage === 'develop-html',
      }),
    ],
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allProjectsJson(filter: { hide: { ne: true } }) {
        edges {
          node {
            path
            type
          }
        }
      }
      allMarkdownRemark(
        limit: 10000
        filter: { frontmatter: { hide: { ne: true } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              category
              tags
              type
            }
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(errors);
    return;
  }

  const { allProjectsJson, allMarkdownRemark } = data;
  const postEdges = allMarkdownRemark.edges;
  const projectEdges = allProjectsJson.edges;

  const post = path.resolve('./src/templates/Post.jsx');
  const list = path.resolve('./src/templates/List.jsx');
  const taggedList = path.resolve('./src/templates/TaggedList.jsx');
  const categorizedList = path.resolve('./src/templates/CategorizedList.jsx');
  const portfolios = path.resolve('./src/templates/Portfolios.jsx');
  const portfolio = path.resolve('./src/templates/Portfolio.jsx');
  const albums = path.resolve('./src/templates/Albums.jsx');
  const album = path.resolve('./src/templates/Album.jsx');

  projectEdges.forEach(({ node: { path, type } }) => {
    let component = null;
    switch (type) {
      case ALBUM:
        component = album;
        break;
      default:
        break;
    }

    if (component !== null) {
      createPage({
        path,
        component,
        context: {},
      });
    }
  });

  const tagMatrix = [];
  const categoryMatrix = [];

  postEdges.forEach(({ node: { frontmatter: { path, tags, category, type } } }) => {
    if (Array.isArray(tags)) {
      tagMatrix.push(tags);
    }

    if (typeof category === 'string') {
      categoryMatrix.push(category);
    }

    let component = null;
    switch (type) {
      case PORTFOLIO:
        component = portfolio;
        break;
      default:
      case POST:
        component = post;
        break;
    }

    if (component !== null) {
      createPage({
        path,
        component,
        context: {},
      });
    }
  });

  const albumsCount = projectEdges.filter(({ node: { type } }) =>
    type === ALBUM).length;

  if (albumsCount) {
    createPage({
      path: ALBUMS_PATH,
      component: albums,
      context: {},
    });
  }

  const portfoliosCount = postEdges.filter(({ node: { frontmatter: { type } } }) =>
    type === PORTFOLIO).length;

  if (portfoliosCount) {
    createPage({
      path: PORTFOLIOS_PATH,
      component: portfolios,
      context: {},
    });
  }

  const separatePages = (total) => (total ? Math.ceil(total / CONTENT_PER_PAGE + 1) : 1);
  const numberOfPages = (count) => Array.from(new Array(count), (el, i) => i + 1);

  const postsCount = postEdges.filter(({ node: { frontmatter: { type } } }) =>
    (type || POST) === POST).length;
  const pagesCount = separatePages(postsCount);
  const pages = numberOfPages(pagesCount);

  pages.forEach((page) => {
    createPage({
      path: `${POSTS_PATH}/${page}`,
      component: list,
      context: {},
    });
  });

  const tags = [
    ...new Set(
      tagMatrix.reduce((prev, curr) => (
        curr !== null ? [...prev, ...curr] : prev
      ), [])
    ),
  ];

  tags.forEach((tag) => {
    const taggedPostCount = postEdges.reduce((count, { node: { frontmatter: { tags: postTags } } }) => {
      if (postTags !== null && postTags.includes(tag)) {
        return count + 1;
      }

      return count;
    }, 0);
    const taggedListCount = separatePages(taggedPostCount);
    const taggedListPages = numberOfPages(taggedListCount);

    taggedListPages.forEach((taggedListPage) => {
      createPage({
        path: `/tags/${tag}/${taggedListPage}`,
        component: taggedList,
        context: {},
      });
    });
  });

  const categories = [...new Set(categoryMatrix)];

  categories.forEach((category) => {
    const categorizedPostCount = postEdges.reduce((count, { node: { frontmatter: { category: postCategory } } }) => {
      if (postCategory !== null && postCategory.includes(category)) {
        return count + 1;
      }

      return count;
    }, 0);
    const categorizedListCount = separatePages(categorizedPostCount);
    const categorizedListPages = numberOfPages(categorizedListCount);

    categorizedListPages.forEach((categorizedListPage) => {
      createPage({
        path: `/categories/${category}/${categorizedListPage}`,
        component: categorizedList,
        context: {},
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: 'slug',
      value,
    });
  }
};
