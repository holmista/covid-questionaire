export default {
  namespaced: true,
  state: () => ({
    had_covid: "",
    had_antibody_test: null,
    antibodies: {},
    had_covid_date: null,
    antibodies_test_date: null,
    antibodies_test_number: null,
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
    setHadCovidDate(state, payload) {
      state.had_covid_date = payload;
    },
    setAntibodiesTestDate(state, payload) {
      state.antibodies_test_date = payload;
    },
    setAntibodiesTestNumber(state, payload) {
      state.antibodies_test_number = payload;
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
    setHadCovidDate(context, payload) {
      context.commit("setHadCovidDate", payload);
    },
    setAntibodiesTestDate(context, payload) {
      context.commit("setAntibodiesTestDate", payload);
    },
    setAntibodiesTestNumber(context, payload) {
      context.commit("setAntibodiesTestNumber", payload);
    },
  },
};
