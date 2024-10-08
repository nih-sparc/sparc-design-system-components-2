<template>
    <div>
      <div v-if="isFilterApplied" class="multilevel-select-filter">
        <filter-applied :height=20 :width=20></filter-applied>
        <div class="placeholder-text">Filter applied</div>
      </div>
      <div v-else class="multilevel-select-filter">
        <div class="placeholder-text">Show all</div>
      </div>
      <el-cascader
        v-model="selectedArray"
        collapse-tags
        @change="onSelectionChange"
        :options="options"
        :popper-class="`${isMultilevel ? 'sparc-design-system-multilevel-select' : 'sparc-design-system-singlelevel-select'}`"
        :props="props"
        ref="cascader"
      >
        <template v-slot="{ node, data }">
          <span :class="`${node.isLeaf ? 'leaf-node-label' : ''}`">{{ data.label }}</span>
          <span v-if="!node.isLeaf && numFiltersApplied(data) != 0"> ({{ numFiltersApplied(data) }}) </span>
        </template>
      </el-cascader>
    </div>
  </template>
  
  <script>
  import FilterApplied from './icons/FilterApplied.vue'
  export default {
    name: 'MultiSelect',
  
    props: {
      options: {
        type: Array,
        default: () => []
      },
      defaultSelectedArray: {
        type: Array,
        default: () => []
      }
    },
    components:{
        FilterApplied
    },
    computed: {
      isMultilevel: function() {
        let multilevel = false;
        this.options.forEach(option => {
            if ((option.children !== undefined) && (option.children.length > 0)) {
              multilevel = true;
            }
        });
        return multilevel
      },
      isFilterApplied: function() {
        if (!this.isMultilevel) {
          // if the value of a selected node is not the value of one of the options then we know 'show all' node is not selected and the results are filtered
          let isFiltered = false;
          this.selectedArray.forEach(node => {
            if (node[0] !== 'showAll') {
              isFiltered = true;
            }
          })
          return isFiltered
        }
        else {
          // if it is multilevel than all show all nodes will have the same value as their parent
          let isFiltered = false;
          this.selectedArray.forEach(node => {
            if (node[0] !== node[1]) {
              isFiltered = true;
            }
          })
          return isFiltered
        }
      },
    },
    watch: {
      options : {
        immediate: true,
        handler() {
          if (!this.isMultilevel) {
            this.addShowAllNode({
              value: 'showAll'
            }, false);
          }
          this.options.forEach(option => {
            if (option.children === undefined || option.children.length === 0) {
              return;
            }
            this.addShowAllNode(option, true)
          })
        }
      }
    },
    data: function() {
      return {
        props: { multiple: true },
        selectedArray: this.defaultSelectedArray,
        previouslyCheckedShowAllNodes: [],
        previouslySelectedArray: this.defaultSelectedArray
      }
    },
    mounted: function() {
      this.previouslySelectedArray = [...this.selectedArray]
    },
    methods:{
      labelClicked(node) {
        if (node.isDisabled || node.hasChildren) {
          return
        }
        const newlySelectedArray = []
        this.previouslySelectedArray = [...this.selectedArray]
        if (this.selectedArray.length) {
          this.selectedArray.forEach(n => {
            newlySelectedArray.push(n)
          })
        }
        if (!node.checked) {
          newlySelectedArray.unshift(node.path)
        } else {
          if (newlySelectedArray.length) {
            const map = newlySelectedArray.map(n => n.join(','))
            const idx = map.findIndex(q => q === node.path.join(','))
            if (idx > -1) {
              newlySelectedArray.splice(idx, 1)
            }
          }
        }
        this.selectedArray = newlySelectedArray
        this.onSelectionChange()
      },
      addShowAllNode(option, isMultilevel) {
        const showAllNode = {
          value: option.value,
          label: 'Show All',
        }
        if (!isMultilevel) {
          if (this.options.filter(option => option.value === showAllNode.value).length > 0) {
            return;
          }
          this.options.unshift(showAllNode)
          this.checkShowAllNode(showAllNode, false)
        }
        else {
          if (option.children.filter(child => child.value === showAllNode.value).length > 0) {
            return;
          }
          option.children.unshift(showAllNode)
          this.checkShowAllNode(showAllNode, true)
        }
      },
      uncheckShowAllNode(showAllNode, isMultilevel) {
        if (!isMultilevel) {
          if (this.selectedArray.filter(node => node[0] === showAllNode.value).length === 0) {
            return
          }
          this.selectedArray = this.selectedArray.filter(selectedComponent => selectedComponent[0] !== showAllNode.value)
          this.previouslyCheckedShowAllNodes = []
        } else {
          if (this.selectedArray.filter(node => node[0] === showAllNode.value && node[1] === showAllNode.value).length === 0) {
            return
          }
          // We need to move the newly checked node to the front of selectedArray to keep the correct sub-menu open
          let newSelectedArray = this.selectedArray.filter(item => {
            return (item[1] !== showAllNode.value)
          })
          let newlyCheckedNode = undefined;
          newSelectedArray.forEach(node => {
            if (node[0] === showAllNode.value) {
              newlyCheckedNode = node
            }
          })
          newSelectedArray = newSelectedArray.filter(item => {
            return (item[0] !== showAllNode.value)
          })
          newSelectedArray.unshift(newlyCheckedNode)
          this.selectedArray = newSelectedArray
  
          this.previouslyCheckedShowAllNodes = this.previouslyCheckedShowAllNodes.filter(node => {
            return (node[0] !== showAllNode.value && node[1] !== showAllNode.value)
          })
        }
      },
      checkShowAllNode(showAllNode, isMultilevel) {
        if (!isMultilevel) {
          this.selectedArray = [[showAllNode.value]]
          this.previouslyCheckedShowAllNodes = [...this.selectedArray]
        } else {
          let newSelectedArray = this.selectedArray.filter(item => item[0] !== showAllNode.value)
          newSelectedArray.unshift([showAllNode.value, showAllNode.value])
          this.selectedArray = newSelectedArray
          if (this.previouslyCheckedShowAllNodes.filter(item => {
            return (item[0] == showAllNode.value && item[1] == showAllNode.value)
          }).length === 0) {
            this.previouslyCheckedShowAllNodes.unshift([showAllNode.value, showAllNode.value])
          }
        }
      },
      onSelectionChange() {
        const option = this.getOptionSelected()
        this.$nextTick(() => {
          this.setShowAllNodeStatus(option)
          this.$emit('selection-changed', this.selectedArray)
          this.previouslySelectedArray = [...this.selectedArray]
        })   
      },
      setShowAllNodeStatus(option) {
        if (!this.isMultilevel) {
          if (this.selectedArray.length === 0) {
            this.checkShowAllNode({value: 'showAll'}, false)
          }
          else if (this.selectedArray.length > 1 && this.selectedArray.length < this.options.length - 1) {
            if (this.selectedArray.length == 2 && this.selectedArray.filter(item => item[0] === 'showAll').length > 0 && this.previouslyCheckedShowAllNodes.length === 0)
            {
              this.checkShowAllNode({value: 'showAll'}, false)
            } 
            else {
              this.uncheckShowAllNode({value: 'showAll'}, false)
            }
          }
          else if (this.selectedArray.length > 1 && this.selectedArray.length === this.options.length - 1) {
            if (this.selectedArray.filter(item => { 
              return (item[0] === 'showAll')
            }).length > 0 && this.previouslyCheckedShowAllNodes.filter(node => {
              return (node[0] === 'showAll')
            }).length > 0){
              this.uncheckShowAllNode({value: 'showAll'}, false)
            }
            else {
              this.checkShowAllNode({value: 'showAll'}, false)
            }
          }
          else if (this.selectedArray.length >= this.options.length) {
            this.checkShowAllNode({value: 'showAll'}, false)
          }
        }
        else {
          const numChildrenSelected = this.numChildrenSelected(option);
          const numChildren = option.children.length
          if (numChildrenSelected === 0) {
            this.checkShowAllNode(option, true)
          }
          else if (numChildrenSelected > 1 && numChildrenSelected < numChildren - 1) {
            if (numChildrenSelected === 2 &&
                this.selectedArray.filter(item => { 
                  return (item[0] === option.value && item[1] === option.value)
                }).length > 0 && 
                this.previouslyCheckedShowAllNodes.filter(node => {
                  return (node[0] === option.value && node[1] === option.value)
                }).length === 0)
            {
              this.checkShowAllNode(option, true)
            } 
            else {
              this.uncheckShowAllNode(option, true)
            }
          }
          else if (numChildrenSelected > 1 && numChildrenSelected === numChildren - 1) {
            if (this.selectedArray.filter(item => { 
              return (item[0] === option.value && item[1] === option.value)
            }).length > 0 && this.previouslyCheckedShowAllNodes.filter(node => {
              return (node[0] === option.value && node[1] === option.value)
            }).length > 0){
              this.uncheckShowAllNode(option, true)
            }
            else {
              this.checkShowAllNode(option, true)
            }
          }
          else if (numChildrenSelected >= numChildren) {
            this.checkShowAllNode(option, true)
          }
        }
      },
      numChildrenSelected(option) {
        let numSelected = 0;
        if (option.children === undefined) { return -1 }
        option.children.forEach(child => {
          this.selectedArray.forEach(item => {
            if (item[1] === child.value) {
              numSelected++
            }
          })
        })
        return numSelected
      },
      getOptionSelected() {
        // find what option was just selected by finding the difference between selectedArray and previouslySelectedArray
        let optionValue = undefined
        this.selectedArray.forEach(item => {
          if (this.previouslySelectedArray.filter(previousItem => {
            return (previousItem[0] === item[0] && previousItem[1] === item[1])
          }).length === 0) {
            optionValue = item[0]
          }
        })
        // if we did not find it yet then that must mean the item was deselected so selectedArray does not have it and we must now check previouslySelectedArray
        if (optionValue === undefined) {
          this.previouslySelectedArray.forEach(previousItem => {
            if (this.selectedArray.filter(item => {
              return (previousItem[0] === item[0] && previousItem[1] === item[1])
            }).length === 0) {
              optionValue = previousItem[0]
            }
          })
        }
        return this.options.filter(option => option.value === optionValue)[0]
      },
      numFiltersApplied: function(data) {
        if (data.children == undefined) {
          return 0
        }
        let numFilters = 0;
        data.children.forEach(child => {
          if (this.selectedArray.filter(node => {
            return (node[1] === child.value && node[0] != child.value)
          }).length == 1) {
            numFilters++
          }
        })
        return numFilters
      }
    },
  }
  </script>
  
  <style lang="scss">
  @import '../assets/_variables.scss';
  .sparc-design-system-singlelevel-select .el-cascader-menu:first-child .el-cascader-node:first-child {
    border-bottom: 1px solid #e4e7ed;
  }
  
  .sparc-design-system-multilevel-select li[aria-haspopup=true] > .el-checkbox {
    display: none;
  }
  .sparc-design-system-multilevel-select li[aria-haspopup=true] > .el-cascader-node__label {
    padding: 0;
  }
  
  .sparc-design-system-multilevel-select .el-cascader-menu:nth-child(2) .el-cascader-node:first-child {
    border-bottom: 1px solid #e4e7ed;
  }
  
  .sparc-design-system-multilevel-select .el-cascader-menu:nth-child(2) .el-cascader-menu__list,
  .sparc-design-system-singlelevel-select .el-cascader-menu:first-child .el-cascader-menu__list {
    padding: 6px;
  }
  
  .sparc-design-system-singlelevel-select, .sparc-design-system-multilevel-select {
    .el-cascader-node .el-checkbox__input.is-focus:not(.is-checked) {
      .el-checkbox__inner {
        border-color: $lineColor1;
      } 
    }
  }
  </style>
  
  <style lang="scss" scoped>
  @import '../assets/_variables.scss';
  .el-cascader-node__label {
    padding: 0;
  }
  .leaf-node-label {
    display: inline-block;
    width: 100%;
  }
  .multilevel-select-filter {
    color: $lightGrey;
    position: absolute;
    z-index: 1;
    padding-left: .5rem;
    padding-top: .25rem;
    margin-bottom: 0;
    margin-right: 2rem;
    white-space: nowrap;
    pointer-events: none;
    display: inline-block;
    svg {
      vertical-align: middle;
      margin-bottom: .25rem;
    }
    .placeholder-text {
      display: inline-block;
      font-size: 1em;
      margin: 0;
      font-weight: normal;
    }
  }
  :deep(.el-cascader__tags){
    span {
      display: none;
    }
  }
  </style>