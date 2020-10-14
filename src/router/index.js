import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue' 
import UserInfo from '../views/UserInfo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId/:feedText',
    name: 'UserInfo',
    component: UserInfo
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta : {
      isAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async(to, from, next) => {
  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.isAdmin);

  if(requiresAdmin && !isAdmin) next({name: 'Home'});
  else next();
})

export default router
