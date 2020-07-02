'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import RootState from './state';
import Admin from './modules/admin';
import Embedded from './modules/embedded';

Vue.use(Vuex);

export default function createStore(initState: any = {}) {
  const { title, url, origin, locale, csrf, admin ,embedded} = initState;
  const state = { title, url, origin, locale, csrf };
  // console.log('title',title);
  // console.log('url',url);
  // console.log('origin',origin);
  // console.log('locale',locale);
  // console.log('csrf',csrf);
  // console.log('admin',admin);
  // console.log('embedded',embedded);
  return new Vuex.Store<RootState>({
    state,
    modules: {
      admin: new Admin(admin),
      embedded:new Embedded(embedded)
    }
  });
}