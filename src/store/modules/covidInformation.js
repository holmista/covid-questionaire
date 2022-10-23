export default {
  namespaced: true,
  state: {
    had_covid: null,
    had_antibody_test: null,
    antibodies: {},
    had_covid_date: null,
    antibodies_test_date: null,
    antibodies_test_number: null,
  },
  getters: {
    had_covid(state) {
      return state.had_covid;
    },
    had_antibody_test(state) {
      return state.had_antibody_test;
    },
    antibodies(state) {
      return state.antibodies;
    },
    had_covid_date(state) {
      return state.had_covid_date;
    },
    antibodies_test_date(state) {
      return state.antibodies_test_date;
    },
    antibodies_test_number(state) {
      return state.antibodies_test_number;
    },
  },
  mutations: {
    setHadCovid(state, payload) {
      state.had_covid = payload;
      state.had_antibody_test = null;
      state.antibodies = {};
      state.had_covid_date = null;
      state.antibodies_test_date = null;
      state.antibodies_test_number = null;
    },
    setHadAntibodyTest(state, payload) {
      state.had_antibody_test = payload;
      state.antibodies = {};
      state.had_covid_date = null;
      state.antibodies_test_date = null;
      state.antibodies_test_number = null;
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
