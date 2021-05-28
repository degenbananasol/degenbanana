require('dotenv').config();

module.exports = {
    purge: {
        enabled: process.env.MODE === 'development' ? false : true,
        content: ['*.html','./src/**/*.html']
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': ['Open Sans', 'sans-serif']
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
