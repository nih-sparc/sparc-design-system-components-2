import '../assets/styles.scss';

import ElementPlus from 'element-plus'

import SparcLogo from './SparcLogo.vue';
import LargeModal from './LargeModal.vue'
import SparcTooltip from './SparcTooltip.vue'
import SparcRadio from './SparcRadio.vue';
import DropdownMultiselect from './DropdownMultiselect/DropdownMultiselect.vue'

export default {
  install(app) {
    app.use(ElementPlus)
    app.component('SparcLogo', SparcLogo);
    app.component('LargeModal', LargeModal);
    app.component('SparcTooltip', SparcTooltip);
    app.component('SparcRadio', SparcRadio);
    app.component('DropdownMultiselect', DropdownMultiselect);
  },
};
