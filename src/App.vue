<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>

    <div class="tooltip">
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
    </div>
    <sparc-tooltip placement="top-center" is-repeating-item-content>
      <template v-slot:data><div>Only show this tooltip if content is cutoff</div></template>
      <template v-slot:item><div class="tooltip-item">Only show tooltip when this has ellipsis</div></template>
    </sparc-tooltip>
    <el-button class="primary">Primary Button</el-button>
    <el-button class="secondary">Secondary Button</el-button>
    <el-button
      @click="openSuccessMessage">
      Show Success Notification
    </el-button>
    <el-button
      @click="openInfoMessage">
      Show Info Notification
    </el-button>
    <el-button
      @click="openFailMessage">
      Show Failure Notification
    </el-button>
    <el-button
      @click="openNotification">
      Show Notification
    </el-button>
    <el-button
      @click="openNotificationWithIcon">
      Show Notification with Icon
    </el-button>
  </main>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import SparcTooltip from './components/SparcTooltip.vue'
  import { ref } from 'vue'

  import { successMessage, infoMessage, failMessage, informationNotification, iconInformationNotification } from "../utils/notificationMessages"

  export default {
    components: {
      HelloWorld,
      SparcTooltip,
    },
    name: 'App',
    setup() {
      const tooltipDirs = ref([
        'top-left',
        'top-center',
        'top-right',
        'left-top',
        'left-center',
        'left-bottom',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'right-top',
        'right-center',
        'right-bottom'
      ])

      return {
        tooltipDirs
      }
    },
    methods: {
      openSuccessMessage() {
        successMessage(`Success!`)
      },
      openFailMessage() {
        failMessage(`Failure.`)
      },
      openInfoMessage() {
        infoMessage(`Information`)
      },
      openNotification() {
        informationNotification('Notification Title', 'This is a notification.')
      },
      openNotificationWithIcon() {
        iconInformationNotification('Notification Title', 'This is a notification with an icon.')
      }
    }
  }
</script>

<style scoped lang="scss">
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.tooltip {
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
}

.tooltip-item {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
