import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue' 
import UserInfo from '../views/UserInfo.vue'
import Oops from '../views/Oops.vue'
import {users} from '../assets/users.js'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserInfo',
    component: UserInfo
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    props : 'userId'
  },
  {
    path: '/:catchAll(.*)',
    component: Oops
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async(to, from, next) => {
  const user = store.state.User.user;
  const userId = Number(to.params.userId);
  if(!user || !users[userId]) {
   // await store.dispatch('User/setUser', users[0]);
  }

 // const requiresAdmin = to.matched.some(record => record.meta.isAdmin);
 console.log(users)
 console.log(users.filter(user => user.id==userId))
  if(userId && users.filter(user => user.id==userId).length == 0) next({name: 'Admin', query: {userId:userId}});
  else next();
})

export default router
