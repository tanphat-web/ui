module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      options: {
        implementation: require("node-sass"), // Specify the Sass implementation
        sourceMap: true,
        outputStyle: "compressed", // 'nested', 'expanded', 'compact', 'compressed'
      },
      dist: {
        files: {
          "css/main.css": "scss/input.scss",
        },
      },
    },
    watch: {
      sass: {
        files: ["scss/**/*.scss"],
        tasks: ["sass"],
      },
    },
  });

  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["sass", "watch"]);
};
