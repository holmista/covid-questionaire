export default {
  namespaced: true,
  state: () => ({
    had_covid: "",
    had_antibody_test: null,
    antibodies: {},
  }),
  mutations: {
    setHadCovid(state, payload) {
      state.had_covid = payload;
    },
    setHadAntibodyTest(state, payload) {
      state.had_antibody_test = payload;
    },
    setAntibodies(state, payload) {
      state.antibodies = payload;
    },
  },
  actions: {
    setHadCovid(context, payload) {
      context.commit("setHadCovid", payload);
    },
    setHadAntibodyTest(context, payload) {
      context.commit("setHadAntibodyTest", payload);
    },
    setAntibodies(context, payload) {
      context.commit("setAntibodies", payload);
    },
  },
};
