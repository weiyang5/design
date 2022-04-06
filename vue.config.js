const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host: '127.0.0.1',
    // https:true,
    port: 6103,
    client: {
      webSocketURL: 'ws://172.21.7.247:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  transpileDependencies: true

})
