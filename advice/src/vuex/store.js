import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  advicetypes: JSON.parse(localStorage.getItem(`advicetype`)),
  examples: JSON.parse(localStorage.getItem(`examples`)),
  advices: JSON.parse(localStorage.getItem(`advices`)),
  types:JSON.parse(localStorage.getItem('types')),
};

const mutations = {
  SAVE_ADVICE_TYPE: (state, advicetypes) => {
    localStorage.setItem(`advicetypes`, JSON.stringify(advicetypes));
    state.advicetypes = advicetypes;
  },
  SAVE_EXAMPLES: (state, examples) => {
    localStorage.setItem(`examples`, JSON.stringify(examples));
    state.examples = examples;
  },
  SAVE_ADVICES: (state, advices) => {
    localStorage.setItem(`advices`, JSON.stringify(advices));
    state.advices = advices;
  },
  SAVE_TYPES:(state,types) => {
    localStorage.setItem('types',JSON.stringify('types'));
    state.types = types;
  }
};

export default new Vuex.Store({
  state,
  mutations,
});
