import { createApp } from 'vue'
import NavBar from './components/NavBar.vue'
import router from './router'

createApp(NavBar).use(router).mount('#app')
