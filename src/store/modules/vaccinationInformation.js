export default {
  namespaced: true,
  state: () => ({
    had_vaccine: null,
    vaccination_stage: null,
    waiting_for: null,
  }),
  mutations: {
    setHadVaccine(state, payload) {
      state.had_vaccine = payload;
      state.vaccination_stage = null;
      state.waiting_for = null;
    },
    setVaccinationStage(state, payload) {
      state.vaccination_stage = payload;
    },
    setWaitingFor(state, payload) {
      state.waiting_for = payload;
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
