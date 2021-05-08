import Vue from 'vue';
import Router from 'vue-router';
import UserHome from './views/UserHome.vue';
import AdminHome from './views/AdminHome.vue';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

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
            },
            {
              path: '/backEnd/addTool',
              name: 'AddTool',
              component: () => import('./components/backEnd/tools/tools/AddTool.vue'),
              meta: { title: '嗨前端-添加工具', requireAuth: true }
            }
          ]
        },
        {
          path: '/backEnd/testBank',
          component: () => import('./components/backEnd/testBank/BankView.vue'),
          meta: { title: '嗨前端-题库', requireAuth: true },
          children: [
            {
              path: '/',
              name: 'Banklist',
              component: () => import('./components/backEnd/testBank/BankList.vue'),
              meta: { title: '嗨前端-试卷列表', requireAuth: true }
            },
            {
              path: '/backEnd/bankDetail',
              name: 'BankDetail',
              component: () => import('./components/backEnd/testBank/BankDetail.vue'),
              meta: { title: '嗨前端-添加试卷', requireAuth: true }
            }
          ]
        },
        {
          path: '/backEnd/questionManage',
          meta: { title: '试题' },
          component: () => import('./components/backEnd/questionManage/QuestionView.vue'),
          children: [
            {
              path: '/',
              name: 'QuestionList',
              component: () => import('./components/backEnd/questionManage/QuestionList.vue'),
              meta: { title: '题库' }
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
      path: '/testBank',
      meta: { title: '题库' },
      component: () => import('./components/frondEnd/testBank/index.vue'),
      children: [
        {
          path: '/',
          name: 'testBank',
          component: () => import('./components/frondEnd/testBank/TestBank.vue'),
          meta: { title: '题库' }
        },
        {
          path: '/testBank/question',
          name: 'testQuestion',
          component: () => import('./components/frondEnd/testBank/TestQuestion.vue'),
          meta: { title: '题库' }
        },
        {
          path: '/testBank/testHistory',
          name: 'testHistory',
          component: () => import('./components/frondEnd/testBank/TestHistory.vue'),
          meta: { title: '历史记录' }
        },
        {
          path: '/testBank/testResult',
          name: 'testResult',
          component: () => import('./components/frondEnd/testBank/TestResult.vue'),
          meta: { title: '题库' }
        }
      ]
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/Demo.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('./views/Test.vue'),
      meta: { title: '嗨前端-test' }
    },
    {
      path: '/ali',
      name: 'Ali',
      component: () => import('./views/Ali.vue'),
      meta: { title: '嗨前端-阿里' }
    },
    {
      path: '/ali/hai',
      name: 'PayCallback',
      component: () => import('./components/ali/PayCallback.vue'),
      meta: { title: '嗨前端-支付回调' }
    },
    {
      path: '/maps',
      name: 'ExportMapsData',
      component: () => import('./views/ExportMapsData.vue'),
      meta: { title: '地图数据' }
    },
    {
      path: '/payDemo',
      name: 'payDemo',
      component: () => import('./views/PayDemo.vue'),
      meta: { title: '支付demo' }
    },
    {
      path: '/websocket',
      name: 'websocket',
      component: () => import('./components/websocket/WebScoket.vue'),
      meta: { title: 'socket' }
    },
    {
      path: '*',
      component: () => import('./components/common/404.vue')
    }
  ]
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.meta.requireAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      NProgress.done();
      next();
    } else {
      NProgress.done();
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
    NProgress.done();
    next();
  } else {
    NProgress.done();
    next();
  }
});
router.afterEach((to, from) => {
  NProgress.done();
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
