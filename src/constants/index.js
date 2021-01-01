const components = require('./components');
const contact = require('./contact');
const page = require('./page');
const paths = require('./paths');

module.exports = {
  ...components,
  ...contact,
  ...page,
  ...paths,
};
