module.exports = function (grunt) {

    grunt.initConfig({

        browserify: {
            development: {
                src: [
                    "./js/main-home.js",
                    "./js/main-products.js"
                ],
                dest: './dist/js/common.js',
                options: {
                    browserifyOptions: { debug: true },
                    transform: [["babelify", { "presets": ["es2015"] }]],
                    plugin: [
                      ["factor-bundle", { outputs: [
                            "./dist/js/main-home.js",
                            "./dist/js/main-products.js"
                        ] }]
                    ],
                    watch: true,
                    keepAlive: true,
                }
            },
            production: {
                src: [
                    "./js/main-home.js",
                    "./js/main-products.js"
                ],
                dest: './dist/js/common.min.js',
                options: {
                    browserifyOptions: { debug: true },
                    transform: [["babelify", { "presets": ["es2015"] }]],
                    plugin: [
                      ["factor-bundle", { outputs: [
                            "./dist/js/main-home.min.js",
                            "./dist/js/main-products.min.js"
                        ] }],
                      ["minifyify", { map: false }]
                    ]
                }
            }
        },

    });
    
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask("buildDev", ['browserify:development']);
    grunt.registerTask("buildProd", ['browserify:production']);

};