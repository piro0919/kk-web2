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
              date
              slug
              title
            }
          }
        }
      }
    }
  `);
  const component = path.resolve(`src/pages/blog/_date/index.tsx`);

  edges.forEach(
    (
      {
        node: {
          frontmatter: { slug },
        },
      },
      index
    ) => {
      createPage({
        component,
        context: {
          next: edges.find((_, edgeIndex) => index === edgeIndex - 1),
          prev: edges.find((_, edgeIndex) => index === edgeIndex + 1),
        },
        path: slug,
      });
    }
  );
};
