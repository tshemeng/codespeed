import { createApp } from 'vue'
import App from './App.vue'
import './main.postcss'
import installPlugins from './plugins'


const app = createApp(App)

installPlugins(app)

// true for hydrate
app.mount('#app', true)
