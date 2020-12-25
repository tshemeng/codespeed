import { App } from 'vue'
import installI18n from './i18n'
import installRouter from './router'

export default (app: App) => {
  installRouter(app)
  installI18n(app)
}
