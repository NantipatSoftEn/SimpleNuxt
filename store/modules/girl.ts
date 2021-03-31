import firebaseAPI from "../../constants/firebaseAPI";

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  loadData: []
});

const getters = {
  getAllGirls: (state: any) => {
    return state.loadData;
  }
};

const actions = {
  nuxtServerInit: async (vuexContext: any) => {
    console.log(`nuxtServerInit`, vuexContext);

    let data = await fetch(firebaseAPI).then(res => res.json());
    vuexContext.commit("setGirlState", data);
  }
};

const mutations = {
  setGirlState(state: any, payload: any) {
    state.loadData = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
