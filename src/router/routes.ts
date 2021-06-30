import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        redirect: '/inbox',
        children: [
          {
            path: 'starred',
            component: () => import('src/pages/Starred.vue'),
          },
          {
            path: ':folder',
            component: () => import('src/pages/Folder.vue'),
          },
          {
            path: ':folder/:branch',
            component: () => import('pages/Branch.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
