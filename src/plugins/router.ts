import NProgress from 'nprogress'
import routes from 'voie-pages'
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

export default (app: App) => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  router.beforeEach(() => { NProgress.start() })
  router.afterEach(() => { NProgress.done() })

  app.use(router)
}
