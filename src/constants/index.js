const components = require('./components');
const contact = require('./contact');
const page = require('./page');
const paths = require('./paths');
const siteInformation = require('./siteInformation');

module.exports = {
  ...components,
  ...contact,
  ...page,
  ...paths,
  ...siteInformation,
};
