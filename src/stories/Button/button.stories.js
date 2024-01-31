import {} from '@storybook/addon-controls'

import V2horpanel from '../../components/icons/2horpanel.vue';
import V2vertpanel from '../../components/icons/2vertpanel.vue'
import V3panel from '../../components/icons/3panel.vue'
import V4panel from '../../components/icons/4panel.vue'
import ChangeBckgd from '../../components/icons/changeBckgd.vue';
import Close from '../../components/icons/close.vue';
import CloseFullScreen from '../../components/icons/closeFullScreen.vue';
import Dock from '../../components/icons/dock.vue';
import FullScreen from '../../components/icons/fullScreen.vue';
import Pause from '../../components/icons/pause.vue';
import Permalink from '../../components/icons/permalink.vue';
import Play from '../../components/icons/play.vue';
import ResetZoom from '../../components/icons/resetZoom.vue';
import Singlepanel from '../../components/icons/singlepanel.vue';
import Tooltips from '../../components/icons/tooltips.vue';
import Undock from '../../components/icons/undock.vue';
import ZoomIn from '../../components/icons/zoomIn.vue';
import ZoomOut from '../../components/icons/zoomout.vue';
import ElementButton from 'element-plus';

const defaultProps = () => ({
  isDisabled: {
    default: {'Disabled':true}
  },
  text: {
    default: 'Submit'
  }
})

export default {
  title: 'Components/Button',
  component: ElementButton,
  //decorators: [withKnobs]
}

export const Primary = () => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button>{{ text }}</el-button>
      <el-button :disabled="isDisabled">Disabled Button</el-button>
    </div>
  `
})

export const Secondary = () => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button class="secondary">{{ text }}</el-button>
      <el-button class="secondary" :disabled="isDisabled">Disabled Button</el-button>
    </div>
  `
})
export const SecondaryAlt = () => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button class="secondary alt">{{ text }}</el-button>
      <el-button class="secondary alt" :disabled="isDisabled">Disabled Button</el-button>
    </div>
  `
})
export const Danger = () => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button class="danger">{{ text }}</el-button>
      <el-button class="danger" :disabled="isDisabled">Disabled Button</el-button>
    </div>
  `
})

export const LargeButton = () => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button class="large">Large Button</el-button>
    </div>
  `
})
export const MediumButton = () => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button>Medium Button</el-button>
    </div>
  `
})
export const SmallButton = () => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button class="small">SmallButton</el-button>
    </div>
  `
})
export const ExtraSmallButton = () => ({
  props: defaultProps(),
  template: `
    <div>
      <el-button class="extra-small">Extra Small Button</el-button>
    </div>
  `
})
const icons = [
  'V2horpanel',
  'V2vertpanel',
  'V3panel',
  'V4panel',
  'changeBckgd',
  'close',
  'closeFullScreen',
  'dock',
  'fullScreen',
  'pause',
  'permalink',
  'play',
  'resetZoom',
  'singlepanel',
  'tooltips',
  'undock',
  'zoomIn',
  'zoomOut'
]

export const Icons = () => ({
  data() {
    return {
      icons
    }
  },
  props: defaultProps(),
  components:{V2horpanel,V2vertpanel,V3panel,V4panel, ChangeBckgd, Close, CloseFullScreen, Dock, 
    FullScreen, Pause, Permalink, Play, ResetZoom, Singlepanel, Tooltips, Undock, ZoomIn, ZoomOut},
  template: `
    <div>
      <el-button
        v-for="icon in icons"
        :key="icon"
        circle
      >
        <component :is="icon"
        color="#FFF"
        />
      </el-button>
    </div>
  `
})