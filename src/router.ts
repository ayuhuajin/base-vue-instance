import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);
console.log('router');

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
router.beforeEach((to, from, next) => {
  console.log('beforeEach');
});
router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
