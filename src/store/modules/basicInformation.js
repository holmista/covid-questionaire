export default {
  namespaced: true,
  state: () => ({
    first_name: "",
    last_name: "",
    email: "",
  }),
  mutations: {
    setFirstName(state, payload) {
      state.first_name = payload;
    },
    setLastName(state, payload) {
      state.last_name = payload;
    },
    email(state, payload) {
      state.email = payload;
    },
  },
  actions: {
    setFirstName(context, payload) {
      context.commit("setFirstName", payload);
    },
    setLastName(context, payload) {
      context.commit("setLastName", payload);
    },
    setEmail(context, payload) {
      context.commit("email", payload);
    },
  },
};