import ElementPlus from 'element-plus';
import { ID_INJECTION_KEY } from 'element-plus'
import '../assets/styles.scss';

import SparcLogo from './SparcLogo.vue';

export default {
  install(app) {
    app.provide(ID_INJECTION_KEY, {
      prefix: 1024,
      current: 0,
    });
    app.use(ElementPlus);
    app.component('SparcLogo', SparcLogo);
  },
};
