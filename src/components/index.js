import '../assets/styles.scss';

import SparcLogo from './SparcLogo.vue';
import LargeModal from './LargeModal.vue'
import SparcTooltip from './SparcTooltip.vue'
import SparcRadio from './SparcRadio.vue';

export default {
  install(app) {
    app.component('SparcLogo', SparcLogo);
    app.component('LargeModal', LargeModal);
    app.component('SparcTooltip', SparcTooltip);
    app.component('SparcRadio', SparcRadio);
  },
};
