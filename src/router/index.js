import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage'
import ImageList from '../components/ImageList'
import UploadForm from '../components/UploadForm'
import store from '../store'

const routes = [
  {path:'/', component: HomePage},
  {path:'/list', component: ImageList},
  {path:'/upload', component: UploadForm}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  if(!store.getters.isLoggedIn & to.path !== '/') {
    return '/'
  }
})

export default router
