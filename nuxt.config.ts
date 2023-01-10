// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "ant-design-vue/dist/antd.css",
    "@/assets/styles/main.less",
    "sweetalert2/dist/sweetalert2.min.css",
  ],
  runtimeConfig: {
    public: {
      env: {
        api_key: process.env.API_KEY,
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "@/assets/styles/_var.less" ;@import "@/assets/styles/_mixins.less" ;`,
        },
      },
    },
  },
});
