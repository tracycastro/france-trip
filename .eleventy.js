module.exports = function (config) {
  config.addPassthroughCopy('./src/images/');
  config.addPassthroughCopy('./src/css/');
  // Returns a collection of blog posts in reverse date order

  config.addCollection('posts', function (collection) {
    return collection.getFilteredByGlob('./src/posts/*.md');
  });
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
