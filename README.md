# ryantoddgarza.com

Ongoing iteration of [ryantoddgarza.com](https://ryantoddgarza.com) built with [Gatsby](https://www.gatsbyjs.org/) and hosted with [Netlify](https://www.netlify.com/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/af1c0c64-61f0-46d3-aece-c0a64bf6dfbe/deploy-status)](https://app.netlify.com/sites/ryantoddgarza/deploys)

## Running Locally

### Step 1: Clone the API

```shell
# Clone the repo
git clone https://github.com/ryantoddgarza/ryantoddgarza.git

# Move into the project
cd ryantoddgarza

# Bootstrap project
npm run bootstrap
```

### Step 2: Configure `env` variables

| Name                          | Description                                          |
| ----------------------------- | ---------------------------------------------------- |
| `CONTENTFUL_ENVIRONMENT`      | The Contentful API key environment.                  |
| `CONTENTFUL_ACCESS_TOKEN`     | The Contentful Content API access token.             |
| `CONTENTFUL_SPACE_ID`         | The Contentful Space ID.                             |
| `CONTENTFUL_MANAGEMENT_TOKEN` | Your Contentful Content Management API access token. |
