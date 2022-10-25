export default {
  namespaced: true,
  state: () => ({
    had_vaccine: null,
    vaccination_stage: null,
    i_am_waiting: null,
  }),
  mutations: {
    setHadVaccine(state, payload) {
      state.had_vaccine = payload;
      state.vaccination_stage = null;
      state.i_am_waiting = null;
    },
    setVaccinationStage(state, payload) {
      state.vaccination_stage = payload;
    },
    setWaitingFor(state, payload) {
      state.i_am_waiting = payload;
    },
  },
  actions: {
    setHadVaccine(context, payload) {
      context.commit("setHadVaccine", payload);
    },
    setVaccinationStage(context, payload) {
      context.commit("setVaccinationStage", payload);
    },
    setWaitingFor(context, payload) {
      context.commit("setWaitingFor", payload);
    },
  },
};
