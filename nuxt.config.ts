// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "/assets/styles/variables.scss";'
        }
      }
    }
  },

  modules: ['@pinia/nuxt'],

  runtimeConfig: {
    apiKey: '11a9dc1dfde4276d7491305c8d37dc07',
    public: {
      externalApiBaseUrl: 'http://api.openweathermap.org'
    }
  }
})
