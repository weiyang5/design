const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  devServer: {
    host: '127.0.0.1',
    // https:true,
    port: 6103,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  transpileDependencies: true

})
