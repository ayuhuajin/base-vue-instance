import Vue from 'vue';
import Router from 'vue-router';
import UserHome from './views/UserHome.vue';
import AdminHome from './views/AdminHome.vue';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    //博客路由
    {
      path: '/',
      component: UserHome,
      meta: { title: '嗨前端-首页' },
      children: [
        {
          path: '/',
          name: 'UserHome',
          component: () => import('./components/frondEnd/BHeader.vue'),
          meta: { title: 'UserHome' }
        }
      ]
    },
    //后台路由
    {
      path: '/backEnd',
      component: AdminHome,
      meta: { title: '嗨前端-后台' },
      children: [
        {
          path: '/',
          name: 'ES6',
          component: () => import('./components/backEnd/ES6.vue'),
          meta: { title: '嗨前端-es6' }
        },
        {
          path: '/backEnd/typeScript',
          name: 'TypeScript',
          component: () => import('./components/backEnd/TypeScript.vue'),
          meta: { title: '嗨前端-typescript' }
        },
        {
          path: '/backEnd/git',
          name: 'Git',
          component: () => import('./components/backEnd/Git.vue'),
          meta: { title: '嗨前端-git' }
        }
      ]
    },
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
