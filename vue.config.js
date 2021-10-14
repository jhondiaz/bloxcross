module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    },
   
  },
  devServer: {
    proxy: 'https://bloxcross-dev.appspot.com/',
}

};



