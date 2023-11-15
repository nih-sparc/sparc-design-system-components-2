import ElementPlus from 'element-plus';
import '../assets/styles.scss';

import SparcLogo from './SparcLogo.vue';

export default {
  install(app) {
    app.use(ElementPlus);
    app.component('SparcLogo', SparcLogo);
  },
};
