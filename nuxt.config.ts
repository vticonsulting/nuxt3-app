import { defineNuxtConfig } from 'nuxt'
// import { IntlifyModuleOptions } from '@intlify/nuxt3'
// import UnpluginComponentsVite from 'unplugin-vue-components/vite'
// import IconsResolver from 'unplugin-icons/resolver'

// declare module '@nuxt/schema' {
//   interface NuxtConfig {
//     intlify?: IntlifyModuleOptions
//   }
// }

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  // app
  // app: {
  //   head: {
  //     title: 'Nuxt 3 Awesome Starter',
  //     titleTemplate: '%s - Nuxt 3 Awesome Starter',
  //     meta: [
  //       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: 'Nuxt 3 Awesome Starter',
  //       },
  //     ],
  //     link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  //   },
  // },

  // build
  // build: {
  //   transpile: ['@headlessui/vue'],
  // },

  // // build modules
  // buildModules: [
  //   '@nuxtjs/eslint-module',
  //   'unplugin-icons/nuxt',
  //   '@pinia/nuxt',
  //   '@nuxtjs/svg',
  //   '@intlify/nuxt3',
  //   '@vueuse/nuxt',
  // ],

  colorMode: {
    classSuffix: '',
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  // css
  // css: [
  //   'virtual:windi-base.css',
  //   'virtual:windi-components.css',
  //   'virtual:windi-utilities.css',
  // ],

  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'id', 'ja'],
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',

    '@pinia/nuxt',
    // '@unocss/nuxt',
    'nuxt-graphql-client',
    '@vueuse/nuxt',
    // 'nuxt-windicss',
  ],

  // plugins
  // plugins: ['~/plugins/navbar.ts'],
  ssr: false,

  runtimeConfig: {
    public: {
      'graphql-client': {
        clients: {
          default: {
            host: process.env.SHOPIFY_DOMAIN,
            token: {
              name: 'X-Shopify-Storefront-Access-Token',
              value: process.env.SHOPIFY_STOREFRONT_TOKEN,
              type: null,
            },
            retainToken: true,
          },
        },
      },
    },
  },

  typescript: {
    shim: false,
  },

  unocss: {
    preflight: true,
  },

  // // vite plugins
  // vite: {
  //   plugins: [
  //     UnpluginComponentsVite({
  //       dts: true,
  //       resolvers: [
  //         IconsResolver({
  //           prefix: 'Icon',
  //         }),
  //       ],
  //     }),
  //   ],
  // },

  // vueuse
  // vueuse: {
  //   ssrHandlers: true,
  // },

  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },
})
