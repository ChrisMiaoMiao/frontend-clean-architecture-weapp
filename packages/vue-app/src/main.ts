import { createApp } from 'vue'
import App from './App.vue'
import { dependenciesLocator } from "@todolist/core"

console.log(dependenciesLocator, 123)
createApp(App).mount('#app')
