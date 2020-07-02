import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/embedded/',
    routes: [
      {
        path: '/toRecommend',
        component: () => import('../view/list/index.vue')
      }
    ]
  });
}
