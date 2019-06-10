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
          component: () => import('./components/backEnd/blog/BlogView.vue'),
          meta: { title: '嗨前端' },
          children: [
            {
              path: '/',
              name: 'BlogList',
              component: () => import('./components/backEnd/blog/BlogList.vue'),
              meta: { title: '嗨前端-列表' }
            },
            {
              path: '/backEnd/addBlog',
              name: 'AddBlog',
              component: () => import('./components/backEnd/blog/AddBlog.vue'),
              meta: { title: '嗨前端-列表' }
            }
          ]
        },
        {
          path: '/backEnd/category',
          component: () => import('./components/backEnd/category/CategoryView.vue'),
          meta: { title: '嗨前端-分类' },
          children: [
            {
              path: '/',
              name: 'CateGoryList',
              component: () => import('./components/backEnd/category/CategoryList.vue')
            }
          ]
        },
        {
          path: '/backEnd/user',
          component: () => import('./components/backEnd/user/UserView.vue'),
          meta: { title: '嗨前端-用户' },
          children: [
            {
              path: '/',
              name: 'UserList',
              component: () => import('./components/backEnd/user/UserList.vue')
            }
          ]
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
          meta: { title: '嗨前端-git', requireAuth: true }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '*',
      component: () => import('./components/common/404.vue')
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('./views/Test.vue'),
      meta: { title: '嗨前端-test', requireAuth: true }
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const token = localStorage.getItem('token');
    if (!token) {
      next();
    } else {
      console.log(to.fullPath);
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
    next();
  } else {
    next();
  }
});
router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
