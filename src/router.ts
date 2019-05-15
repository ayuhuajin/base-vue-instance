import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);
console.log('router');

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/es6',
      name: 'ES6',
      component: () => import(/* webpackChunkName: "about" */ './views/ES6.vue')
    },
    {
      path: '/typescript',
      name: 'TypeScript',
      component: () => import(/* webpackChunkName: "about" */ './views/TypeScript.vue')
    },
    {
      path: '/git',
      name: 'Git',
      component: () => import(/* webpackChunkName: "about" */ './views/Git.vue')
    }
  ]
});
router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  next();
});
router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
