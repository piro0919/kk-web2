const path = require(`path`);

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  const component = path.resolve(`src/pages/blog/_date/index.tsx`);

  edges.forEach(
    ({
      node: {
        frontmatter: { slug },
      },
    }) => {
      createPage({
        component,
        path: slug,
      });
    }
  );
};
