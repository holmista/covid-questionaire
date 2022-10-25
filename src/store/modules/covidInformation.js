export default {
  namespaced: true,
  state: {
    had_covid: null,
    had_antibody_test: null,
    covid_sickness_date: null,
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
    covid_sickness_date(state) {
      return state.covid_sickness_date;
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
      state.covid_sickness_date = null;
      state.antibodies_test_date = null;
      state.antibodies_test_number = null;
    },
    setHadAntibodyTest(state, payload) {
      state.had_antibody_test = payload;
      state.covid_sickness_date = null;
      state.antibodies_test_date = null;
      state.antibodies_test_number = null;
    },

    setHadCovidDate(state, payload) {
      const padTo2Digits = (num) => num.toString().padStart(2, "0");
      const date = new Date(payload);
      const formated = [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear().toString().substring(2),
      ].join("/");

      state.covid_sickness_date = formated;
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
