const Module1 = {
  state : { modcount : 0 },
  mutations : {
    incremod(state, payload) {
      if( payload ) {
          state.modcount = state.modcount + payload;
      } else {
          state.modcount++;
      }
    }
  },
  actions : {
    increModAction({state, commit, rootState}) {
      commit('incremod', rootState.count);
    }
  }
};

export default Module1;
