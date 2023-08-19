module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.html$/,
            use: 'raw-loader', // Use raw-loader to handle HTML files
        })
        return config
    },
}
