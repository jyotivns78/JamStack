module.exports = function(config) {

  // Return your Object options:
  config.addPassthroughCopy("src/js");
  config.addPassthroughCopy("src/css");
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}