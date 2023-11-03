import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import '../assets/styles.scss';

import SparcLogo from './SparcLogo.vue'

const installYourPlugin = (app) => {
  app.use(ElementPlus);
  // Register and expose your custom components and logic here
  // For example:
  // app.component('CustomComponent', CustomComponent);
  app.component('SparcLogo', SparcLogo)
};

export default {
  install(app) {
    const vue3App = createApp(app);
    installYourPlugin(vue3App);
    // Add any custom components or logic here
    // For example:
    // vue3App.component('CustomComponent', CustomComponent);
  },
};
