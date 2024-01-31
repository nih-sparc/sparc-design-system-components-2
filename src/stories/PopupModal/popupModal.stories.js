export default {
    title: 'Components/PopupModal',
  }


  
export const Primary = () => ({
    data() {
      return {
        trigger: 'hover',
        modalPlacements: [
          [
            'top-start',
            'top',
            'top-end'
          ],
          [
            'left-start',
            'left',
            'left-end'
          ],
          [
            'bottom-start',
            'bottom',
            'bottom-end'
          ],
          [
            'right-start',
            'right',
            'right-end'
          ]
        ]
      }
    },
    template: `
    <div>
      <el-row  class="mb-16" type="flex" justify="center">
      <el-popover
        title="How do filters work?"
        width="190"
        trigger="hover"
        :append-to-body=false
        class="popover"
        >
        <template v-slot:reference>
          <el-button>Hover to show popover</el-button>
        </template>
        <div>
          <strong>Within categories:</strong> OR 
          <br/>
          example: 'heart' OR 'colon'
          <br/>
          <br/>
          <strong>Between categories:</strong> AND
          <br/>
          example: 'rat' AND 'lung'
        </div>
      </el-popover>
      </el-row>
    </div>
    `
  })