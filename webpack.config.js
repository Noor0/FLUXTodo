module.exports = {

 entry: "./js/source/app.js",
 output: {
   filename: "./js/build/bundle.js"
 },
 module: {
   loaders: [
     {
       test: /\.js?$/,
       exclude: /node_modules/,
       loader: 'babel',
       query: {
         presets: ['react', 'es2015']
       }
     }
   ]
 },
 devtool:"eval-source-map"
};

//testing (-)