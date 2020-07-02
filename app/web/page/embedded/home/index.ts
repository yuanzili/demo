'use strict';
import App from '@framework/app';
import createStore from '@store/index';
import createRouter from '@embedded/router/index';
import entry from '@embedded/view/list/index.vue';
export default new App({ entry, createStore, createRouter }).bootstrap();