import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// adding global components
const components = import.meta.glob('@/components/*/**.vue', { import: 'default', eager: true })
Object.entries(components).forEach(([path, component]) => {
  const name = path.split('/').pop()?.split('.')[0]

  if (name) app.component(name, component)
})

app.mount('#app')
