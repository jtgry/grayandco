module.exports = {
    plugins: [
        require('autoprefixer')({
            overrideBrowserslist: ['ie >= 8', 'last 3 versions']
        })
    ]
};
