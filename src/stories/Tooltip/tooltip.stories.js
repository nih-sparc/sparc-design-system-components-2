import SparcTooltip from '@/components/SparcTooltip.vue'
import './demo-styles.scss';

export default {
  title: 'Components/Tooltip'
}

export const Primary = () => ({
  components: {
    SparcTooltip
  },

  data() {
    return {
      tooltipDirs: [
        [
          'top-left',
          'top-center',
          'top-right'
        ],
        [
          'left-top',
          'left-center',
          'left-bottom'
        ],
        [
          'bottom-left',
          'bottom-center',
          'bottom-right'
        ],
        [
          'right-top',
          'right-center',
          'right-bottom'
        ]
      ]
    }
  },

  template: `
    <div>
    <sparc-tooltip v-for="dir in tooltipDirs" :key="dir" :placement="dir">
          <el-button slot="item">{{ dir }}</el-button>
        </sparc-tooltip>
    </div>
  `
})

export const SingleContent = () => ({
  components: {
    SparcTooltip,
  },

  template: `
    <div>
    <sparc-tooltip v-for="dir in tooltipDirs" :key="dir" placement="top-center" content="Sample content text">
          <el-button slot="item">Hover over me!</el-button>
        </sparc-tooltip>
    </div>
  `
})

export const MoreContent = () => ({
  components: {
    SparcTooltip,
  },

  template: `
    <div>
      <el-row type="flex" class="tooltip-container" justify="center">
      <sparc-tooltip v-for="dir in tooltipDirs" :key="dir" :placement="dir">
        <template v-slot:data>
        <div>
          {{ dir }}<br/>THIS IS <a href="#">ALOT</a> OF TEXT
        </div>
      </template>
        <template v-slot:item>
          <el-button>{{ dir }}</el-button>
        </template>
        </sparc-tooltip>
      </el-row>
    </div>
  `
})

export const Item = () => ({
  components: {
    SparcTooltip,
  },

  template: `
    <div>
      <el-row type="flex" class="tooltip-container" justify="center">
        <sparc-tooltip placement="top-center" content="top-center">
          <el-button slot="item">Hover over me!</el-button>
        </sparc-tooltip>
      </el-row>
    </div>
  `
})

export const LinkContent = () => ({
  components: {
    SparcTooltip,
  },

  template: `
    <div>
      <el-row type="flex" class="tooltip-container" justify="center">
        <sparc-tooltip placement="top-center">
          <div slot="data">Content with <a href="#">link</a></div>
          <el-button slot="item">Hover over me!</el-button>
        </sparc-tooltip>
      </el-row>
    </div>
  `
})