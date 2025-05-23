import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// import the fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas, faTrash, faPencil, faPlus, faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(fas, faTrash, faPencil, faPlus, faBars)

createApp(App)
  .use(store, axios)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')