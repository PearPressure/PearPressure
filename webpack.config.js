module.exports = {
    //mode: 'development',
    entry: './renderer.js',
    output: {
        filename: './renderer-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react'],
                    },
                },

            },
        ],
    },
};
