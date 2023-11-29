import './assets/styles.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'

const app = createApp(App)
const routes = []
const router = createRouter({history:createWebHashHistory(), routes})

app.use(router)
app.use(ElementPlus)
app.mount('#app')
