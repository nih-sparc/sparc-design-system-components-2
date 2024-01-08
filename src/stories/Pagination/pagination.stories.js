import Pagination from '@/components/Pagination.vue'
import PaginationMenuComp from '@/components/PaginationMenu.vue'
import ElementPlus from 'element-plus';

export default {
  title: 'Components/Pagination',
  component:Pagination,
  tags:['autodocs'],
}

const createDemo = (selected, totalCount, pageSize, background=false) => {
    return {
        components: { Pagination, ElementPlus },
        data() {
            return {
                selected: selected,
                totalCount: totalCount,
                pageSize: pageSize,
                background: background
            }
        },
        parameters: {
            layout: 'fullscreen',
        },
        template: `
            <div>
                <pagination :total-count="totalCount" :selected="selected" :page-size="pageSize" :background="background"/>
            </div>
        `
    }
    
}

export const VisiblePager = () => createDemo(3, 100, 20)

export const CollapsedPager = () => createDemo(10, 1000, 20)

export const PaginationMenu = () => createDemo(10, 1000, 20, true)

export const Menu = () => ({
    components: { PaginationMenuComp },
    data() {
        return { pageSize: 10 }
    },
    template:`
        <div>
            <pagination-menu :page-size="pageSize" />
        </div>
    `
})