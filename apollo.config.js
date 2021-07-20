/* eslint-disable sort-keys-shorthand/sort-keys-shorthand */
module.exports = {
  client: {
    name: "kk-web2",
    tagName: "graphql",
    includes: [
      "./src/**/*.{ts,tsx}",
      "./src/__generated__/gatsby-plugin-documents.graphql",
    ],
    service: {
      name: "GatsbyJS",
      localSchemaFile: "./src/__generated__/gatsby-schema.graphql",
    },
  },
};
