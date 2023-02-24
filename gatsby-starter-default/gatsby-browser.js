/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

exports.onInitialClientRender = () => {
  // Load the Lato font asynchronously
  const latoFont = document.createElement("link");
  latoFont.href = "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap";
  latoFont.rel = "stylesheet";
  document.head.appendChild(latoFont);
};