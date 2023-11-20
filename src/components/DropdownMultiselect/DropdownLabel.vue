<template>
  <div :class="{ disabled: disabled }">
    <div @click="onArrowClicked" :class="showCollapsibleArrow ? 'label-header-clickable' : ''" class="label-header">
      <span>
        <span class="label-title">{{ label }}</span>
        <el-tooltip placement="top-start" transition="none">
          <template v-slot:content>
            <div v-html="tooltip"></div>
          </template>
          <help-icon v-if="showHelpIcon" class="ml-4 help-icon" width="20" height="20" />
        </el-tooltip>
      </span>
      <arrow-icon
        v-show="showCollapsibleArrow"
        :class="showContent ? 'arrow-down' : 'arrow-up'"
        class="ml-8"
        height="15"
        width="15"
      />
    </div>
    <div v-show="showContent" class="label-content-container">
      <slot />
    </div>
  </div>
</template>

<script>
import { isEmpty } from 'ramda'
import HelpIcon from '../icons/Help.vue'
import ArrowIcon from '../icons/Arrow.vue'
export default {
  name: 'DropdownLabel',

  components: {
    HelpIcon,
    ArrowIcon
  },

  props: {
    label: {
      type: String,
      default: ''
    },
    collapseByDefault: {
      type: Boolean,
      default: false
    },
    showCollapsibleArrow: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      collapsed: this.collapseByDefault
    }
  },
  computed: {
    showContent: function() {
      return !(this.collapsed || this.disabled)
    },
    showHelpIcon: function() {
      return !isEmpty(this.tooltip)
    }
  },
  methods: {
    onArrowClicked() {
      if (this.showCollapsibleArrow && !this.disabled) {
        this.collapsed = !this.collapsed
      }
      return this.collapsed
    },
    setCollapsed(isCollapsed) {
      this.collapsed = isCollapsed
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/_variables.scss';
.label-content-container {
  background-color: #FAFBFC
}

.arrow-down {
  transform: rotate(180deg);
}

.label-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  margin-top: 0;
  padding: 0.5rem 1rem;
  align-items: center;
  text-transform: uppercase;
  cursor: default;
  svg {
    cursor: pointer
  }
}

.label-header-clickable {
  cursor: pointer;
}

.label-title {
  font-size: 1em;
  line-height: 1.5rem;
  font-weight: 500;
}

.help-icon {
  fill: $purple;
  vertical-align: text-top;
}

:deep(hr) {
  border: none;
  border-bottom: 1px solid $lineColor2;
  margin: 0;
}

.disabled {
  opacity: 0.5;
  background-color: #FAFBFC;
}
</style>
