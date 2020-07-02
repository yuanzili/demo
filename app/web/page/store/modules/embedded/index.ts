import axios from 'axios';
import { Module, GetterTree, ActionTree, MutationTree } from 'vuex';


import RootState from '../../state';
import Embedded from './state';



export default class AdminModule implements Module<Embedded, RootState> {
  state: Embedded;

  getters: GetterTree<Embedded, RootState> = {
    courseTotal(state): number {
      return state.courseTotal||0;
    },
    tabObj(state): [] {
      return state.tabObj ||[];
    },
    courseList(state): [] {
      return state.courseList;
    },
  };

  constructor(initState: Embedded) {
    this.state = {
      courseTotal:0,
      tabObj:[],
      courseList:[],
      ...initState
    };
  }
}