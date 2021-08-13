/* eslint-disable sort-keys-shorthand/sort-keys-shorthand */
module.exports = {
  siteMetadata: {
    description: "Freelance front-end programmer piro's website",
    siteUrl: "https://kk-web.link",
    title: "kk-web",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: ["src"],
        },
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-59624553-5",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        jsxPragma: "jsx",
        allExtensions: true,
      },
    },
    "gatsby-plugin-resolve-src",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Muli", "Poiret+One"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        emitSchema: {
          "src/__generated__/gatsby-introspection.json": true,
        },
        emitPluginDocuments: {
          "src/__generated__/gatsby-plugin-documents.graphql": true,
        },
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://6ec9f8995629456e90b28ee823dae6ef@o924040.ingest.sentry.io/5871944",
        sampleRate: 0.7,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NVKSTRC",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: "gatsby-plugin-mixpanel",
      options: {
        apiToken: "21ddd8b89e954ea21013dff62ec7ec2c",
        enableOnDevMode: false,
      },
    },
    "gatsby-plugin-why-did-you-render",
    "gatsby-plugin-remove-trailing-slashes",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        // background_color: "#323446",
        // description: "Freelance front-end programmer piro's website",
        // display: "standalone",
        icon: "src/images/icon.png",
        // name: "kk-web",
        // short_name: "kk-web",
        // start_url: "/",
        // theme_color: "#323446",
      },
    },
    // "gatsby-plugin-offline",
  ],
};
