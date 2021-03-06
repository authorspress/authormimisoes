// next.config.js
const withPlugins = require('next-compose-plugins');

const withSass = require("@zeit/next-sass");
const withOptimizedImages = require("next-optimized-images");

module.exports = withPlugins(
    [
        
        [
            withSass,
            {
                /* plugin config here ... */
            },
        ],
        [
            withOptimizedImages,
            {
                optimizeImages: false,

            },
        ],
    ], {
        /* global config here ... */
    }
);