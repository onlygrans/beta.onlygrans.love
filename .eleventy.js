module.exports = function(eleventyConfig) {
  // Watch CSS files for changes
  eleventyConfig.addPassthroughCopy("assets");
  return {
    passthroughFileCopy: true
  }
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });
};