// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: 'Ant Design Pro',
    locale: true,
    siderWidth: 208,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },

    {
      path: '/welcome',
      name: 'welcome',
      icon: 'smile',
      component: './Welcome',
    },
    {
      path: '/admin',
      name: 'admin',
      icon: 'crown',
      access: 'canAdmin',
      component: './Admin',
      routes: [
        {
          path: '/admin/sub-page',
          name: 'sub-page',
          icon: 'smile',
          component: './Welcome',
        },
      ],
    },
    {
      path: '/empty',
      name: '空页面',
      icon: 'smile',
      component: './Empty',
    },
    {
      path: '/global',
      name: '全局数据流',
      icon: 'smile',
      component: './GlobalData',
    },
    {
      path: '/table',
      name: 'list.table-list',
      icon: 'table',
      routes: [
        {
          path: '/table/basic',
          name: '基础表格',
          icon: 'smile',
          component: './TableBasic',
        },
        {
          path: '/table/userRequest',
          name: '请求数据',
          icon: 'smile',
          component: './TableUseRequest',
        },
        {
          path: '/table/useModel',
          name: '使用模型',
          icon: 'smile',
          component: './TableUseModel',
        },
        {
          path: '/table/form',
          name: 'Form与Table联动',
          icon: 'smile',
          component: './TableUseFormTable',
        },
        {
          path: '/table/search',
          name: '表单搜索',
          icon: 'smile',
          component: './TableSearch',
        },
        {
          path: '/table/pro',
          name: '高级表格',
          icon: 'smile',
          component: './TablePro',
        },
      ],
    },
    {
      path: '/form',
      name: 'form',
      icon: 'form',
      routes: [
        {
          path: '/form/basic',
          name: '基础表单',
          icon: 'smile',
          component: './FormBasic',
        },
        {
          path: '/form/useForm',
          name: '表单方法调用',
          icon: 'smile',
          component: './FormUseForm',
        },
        {
          path: '/form/layout',
          name: '表单布局',
          icon: 'smile',
          component: './FormLayout',
        },
      ],
    },
    {
      path: '/modal',
      name: '对话框',
      icon: 'form',
      routes: [
        {
          path: '/modal/basic',
          name: '基本用法',
          icon: 'smile',
          component: './ModalBasic',
        },
        {
          path: '/modal/async',
          name: '异步提交',
          icon: 'smile',
          component: './ModalAsync',
        },
        {
          path: '/modal/create',
          name: '新增对话框',
          icon: 'smile',
          component: './ModalCreate',
        },
      ],
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  request: {
    dataField: '',
  },
});
