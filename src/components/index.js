import '../assets/styles.scss';

import ElementPlus from 'element-plus'

import SparcLogo from './SparcLogo.vue';
import LargeModal from './LargeModal.vue'
import SparcTooltip from './SparcTooltip.vue'
import SparcRadio from './SparcRadio.vue';
import SparcCheckbox from './SparcCheckbox.vue';
import DropdownMultiselect from './DropdownMultiselect/DropdownMultiselect.vue'
import MultiSelect from './MultiSelect.vue'
import Pagination from './Pagination.vue'
import PaginationMenu from './PaginationMenu.vue'
import Breadcrumb from './BreadcrumbTrail.vue'
import IconCard from './IconCard.vue'
import ContentTabCard from './ContentTabCard.vue'
import ContentOverviewCard from './ContentOverviewCard.vue'
import EventCard from './EventCard.vue'
import SparcHeader from './SparcHeader.vue'


export default {
  install(app) {
    app.use(ElementPlus)
    app.component('SparcLogo', SparcLogo);
    app.component('LargeModal', LargeModal);
    app.component('SparcTooltip', SparcTooltip);
    app.component('SparcRadio', SparcRadio);
    app.component('SparcCheckbox',SparcCheckbox);
    app.component('DropdownMultiselect', DropdownMultiselect);
    app.component('Pagination', Pagination);
    app.component('PaginationMenu', PaginationMenu);
    app.component('EventCard',EventCard);
    app.component('ContentOverviewCard', ContentOverviewCard);
    app.component('SparcHeader',SparcHeader);
    app.component('MultiSelect',MultiSelect);
    app.component('Breadcrumb', Breadcrumb);
    app.component('IconCard', IconCard);
    app.component('ContentTabCard', ContentTabCard);

  },
};
