
import IconsDemo from "./IconsDemo.vue";
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

import Facebook from '../../components/icons/facebook.vue'
import Linkedin from '../../components/icons/linkedin.vue'
import Twitter from '../../components/icons/twitter.vue'


import './icons-demo-style.scss'

export default {
    title: 'Components/Icons',
    component:IconsDemo
  }
  
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
  
  const social = [
    'facebook',
    'linkedin',
    'twitter'
  ]
  
  const createDemo = (icons, colors, background) => {
    return {
      components:{V2horpanel,V2vertpanel,V3panel,V4panel, ChangeBckgd, Close, CloseFullScreen, Dock, 
        FullScreen, Pause, Permalink, Play, ResetZoom, Singlepanel, Tooltips, Undock, ZoomIn, ZoomOut,
      Facebook, Twitter, Linkedin},
      data() {
        return {
          icons,
          colors,
          background
        }
      },
      template: `
        <div class="icon-demo-styles">
          <div class="bx--grid">
            <div class="bx--row mb-32">
              <div class="bx--col">
                <strong>Name</strong>
              </div>
            </div>
            <div
              style="display: flex;
              flex-wrap:wrap"
              v-for="icon in icons"
              :key="icon"
            >
              <div style="flex-basis: 0;
              flex-grow: 1;
              max-width: 100%">
                {{ icon }}
              </div>
              <div style="flex-basis: 0;
              flex-grow: 1;
              max-width: 100%">
                <component :is="icon"
                  :background="background"
                  width="36"
                  height="36"
                  :color="colors"
                />
              </div>
            </div>
          </div>
        </div>
      `
    }
  }
  //icon, line color, background
  export const Background = () => createDemo(icons, '#FFFFFF', "#8300BF")
  export const NoBackground = () => createDemo(icons)
  export const Social = () => createDemo(social, '#8300BF')