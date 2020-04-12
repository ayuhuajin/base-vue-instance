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
          component: () => import('./components/frondEnd/FrontEnd.vue'),
          meta: { title: '嗨前端' },
          children: [
            {
              path: '/',
              name: 'FuserList',
              component: () => import('./components/frondEnd/BlogList.vue'),
              meta: { title: '嗨前端' }
            },
            {
              path: '/detail',
              name: 'UserDetail',
              component: () => import('./components/frondEnd/BlogDetail.vue'),
              meta: { title: '嗨前端-详情' }
            },
            {
              path: '/categoryList',
              name: 'UserCategoryList',
              component: () => import('./components/frondEnd/CategoryList.vue'),
              meta: { title: '嗨前端-分类' }
            },
            {
              path: '/uiFrame',
              name: 'uiFrame',
              component: () => import('./components/frondEnd/UiFrame.vue'),
              meta: { title: '嗨前端-UI框架' }
            },
            {
              path: '/friendLinks',
              name: 'friendLinks',
              component: () => import('./components/frondEnd/FriendLinks.vue'),
              meta: { title: '嗨前端-友情链接' }
            },
            {
              path: '/tools',
              name: 'tools',
              component: () => import('./components/frondEnd/BaseTools.vue'),
              meta: { title: '嗨前端-工具' }
            },
            {
              path: '/myProject',
              name: 'myProject',
              component: () => import('./components/frondEnd/MyProject.vue'),
              meta: { title: '嗨前端-项目' }
            },
            {
              path: '/baseSkill',
              name: 'baseSkill',
              component: () => import('./components/frondEnd/BaseSkill.vue'),
              meta: { title: '嗨前端-技能' }
            }
          ]
        }
      ]
    },
    //后台路由
    {
      path: '/backEnd',
      component: AdminHome,
      meta: { title: '嗨前端-后台', requireAuth: true },
      children: [
        {
          path: '/',
          component: () => import('./components/backEnd/blog/BlogView.vue'),
          meta: { title: '嗨前端', requireAuth: true },
          children: [
            {
              path: '/',
              name: 'BlogList',
              component: () => import('./components/backEnd/blog/BlogList.vue'),
              meta: { title: '嗨前端-列表', requireAuth: true }
            },
            {
              path: '/backEnd/addBlog',
              name: 'AddBlog',
              component: () => import('./components/backEnd/blog/AddBlog.vue'),
              meta: { title: '嗨前端-列表', requireAuth: true }
            }
          ]
        },
        {
          path: '/backEnd/category',
          component: () => import('./components/backEnd/category/CategoryView.vue'),
          meta: { title: '嗨前端-分类', requireAuth: true },
          children: [
            {
              path: '/',
              name: 'CateGoryList',
              component: () => import('./components/backEnd/category/CategoryList.vue'),
              meta: { title: '嗨前端-分类', requireAuth: true }
            }
          ]
        },
        {
          path: '/backEnd/user',
          component: () => import('./components/backEnd/user/UserView.vue'),
          meta: { title: '嗨前端-用户', requireAuth: true },
          children: [
            {
              path: '/',
              name: 'UserList',
              component: () => import('./components/backEnd/user/UserList.vue'),
              meta: { title: '嗨前端-用户', requireAuth: true }
            }
          ]
        },
        {
          path: '/backEnd/toolType',
          component: () => import('./components/backEnd/tools/toolType/TypeView.vue'),
          meta: { title: '嗨前端-工具', requireAuth: true },
          children: [
            {
              path: '/',
              name: 'toolTypeList',
              component: () => import('./components/backEnd/tools/toolType/ToolType.vue'),
              meta: { title: '嗨前端-工具类型', requireAuth: true }
            }
          ]
        },
        {
          path: '/backEnd/tools',
          component: () => import('./components/backEnd/tools/tools/ToolView.vue'),
          meta: { title: '嗨前端-工具', requireAuth: true },
          children: [
            {
              path: '/',
              name: 'toolList',
              component: () => import('./components/backEnd/tools/tools/ToolList.vue'),
              meta: { title: '嗨前端-工具', requireAuth: true }
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
      meta: { title: '嗨前端-test' }
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      next();
    } else {
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
