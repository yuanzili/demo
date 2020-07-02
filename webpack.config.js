'use strict';
const path = require('path');
const resolve = filepath => path.resolve(__dirname, filepath);
module.exports = {
  entry: {
    'admin/login': 'app/web/page/admin/login/login.vue',
    'admin/home': 'app/web/page/admin/home/index.ts',
    'embedded/home': 'app/web/page/embedded/home/index.ts'
  },
  resolve: {
    extensions: [ '.ts', '.js', '.vue','.scss' ],
    alias:{
      '@asset': resolve('app/web/asset'),
      '@framework': resolve('app/web/framework'),
      '@component': resolve('app/web/component'),
      '@store': resolve('app/web/page/store'),
      '@embedded':resolve('app/web/page/embedded/home'),
      '@router': resolve('app/web/page/admin/home/router'),        
      '@view': resolve('app/web/page/admin/home/view'),
      
    }
  },
  module:{
    rules:[
      { babel: false },
      { typescript: true },
      { test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    { imagemini: false },
    {
      copy: [{
        from: 'app/web/asset',
        to: 'asset'
      }]
    }
  ]
};