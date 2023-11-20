<template>
  <el-dropdown
    trigger="click"
    placement="bottom-start"
    @command="$emit('update-page-size', $event)"
    @visible-change="isMenuOpen = $event"
  >
    <button class="filter-dropdown el-dropdown-link">
      <span class="el-dropdown-text-link">
        {{ pageSize }}
      </span>
      <arrow-icon
        :class="isMenuOpen ? 'arrow-up' : 'arrow-down'"
        class="ml-8"
        height="10"
        width="10"
      />
    </button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="option in pageSizeOptions"
          :key="option"
          class="icon-item"
          :command="option"
        >
          {{ option }}
          <check-icon
            v-if="pageSize === option"
            class="item-icon-check"
            width="15"
            height="15"
          />
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import ArrowIcon from './icons/Arrow.vue'
import CheckIcon from './icons/Check.vue'
export default {
  name: 'PaginationMenu',
  components: {
    ArrowIcon,
    CheckIcon
  },
  props: {
    paginationItemLabel: {
      type: String,
      default: 'Items'
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizeOptions: {
      type: Array,
      default: () => {
        return [10, 20, 50, 'View All']
      }
    }
  },

  data: function() {
    return {
      isMenuOpen: false
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.filter-dropdown {
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: solid 1px $mediumGrey;
  background-color: transparent;
  font-size: 14px;
  font-weight: normal;
  color: $purple;
  margin-left: 5px;
}

.icon-arrow {
  color: $mediumGrey;
  height: 5px;
  width: 8px;
}

.el-dropdown-link {
  cursor: pointer;
  outline: none;
}

.el-dropdown-text-link {
  margin-right: -6px;
  padding-top: 3px;
  padding-bottom: 3px;
}
.arrow-down {
  transform: rotate(180deg);
}
</style>
