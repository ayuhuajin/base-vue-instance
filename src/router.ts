import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: '嗨前端-首页' },
      children: [
        {
          path: '/',
          name: 'ES6',
          component: () => import('./views/ES6.vue'),
          meta: { title: '嗨前端-es6' }
        },
        {
          path: '/typescript',
          name: 'TypeScript',
          component: () => import('./views/TypeScript.vue'),
          meta: { title: '嗨前端-typescript' }
        },
        {
          path: '/git',
          name: 'Git',
          component: () => import('./views/Git.vue'),
          meta: { title: '嗨前端-git' }
        }
      ]
    },
    // {
    //   path: '/es6',
    //   name: 'ES6',
    //   component: () => import('./views/ES6.vue'),
    //   meta: { title: '嗨前端-es6' }
    // },
    // {
    //   path: '/typescript',
    //   name: 'TypeScript',
    //   component: () => import('./views/TypeScript.vue'),
    //   meta: { title: '嗨前端-typescript' }
    // },
    // {
    //   path: '/git',
    //   name: 'Git',
    //   component: () => import('./views/Git.vue'),
    //   meta: { title: '嗨前端-git' }
    // },
    {
      path: '/test',
      name: 'Test',
      component: () => import('./views/Test.vue'),
      meta: { title: '嗨前端-test' }
    }
  ]
});
router.beforeEach((to, from, next) => {
  next();
});
router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
