/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

exports.onInitialClientRender = () => {
  // Load the Lato font asynchronously
  const latoFont = document.createElement("link");
  latoFont.href = "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap";
  latoFont.rel = "stylesheet";
  document.head.appendChild(latoFont);
};