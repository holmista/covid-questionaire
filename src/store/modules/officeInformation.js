export default {
  namespaced: true,
  state: () => ({
    non_formal_meetings: null,
    number_of_days_from_office: null,
    what_about_meetings_in_live: null,
    tell_us_your_opinion_about_us: null,
  }),
  mutations: {
    setNonFormalMeetings(state, payload) {
      state.non_formal_meetings = payload;
    },
    setNumberOfDaysFromOffice(state, payload) {
      state.number_of_days_from_office = payload;
    },
    setWhatAboutMeetingsInLive(state, payload) {
      state.what_about_meetings_in_live = payload;
    },
    setTellUsYourOpinionAboutUs(state, payload) {
      state.tell_us_your_opinion_about_us = payload;
    },
  },
  actions: {
    setNonFormalMeetings(context, payload) {
      context.commit("setNonFormalMeetings", payload);
    },
    setNumberOfDaysFromOffice(context, payload) {
      context.commit("setNumberOfDaysFromOffice", payload);
    },
    setWhatAboutMeetingsInLive(context, payload) {
      context.commit("setWhatAboutMeetingsInLive", payload);
    },
    setTellUsYourOpinionAboutUs(context, payload) {
      context.commit("setTellUsYourOpinionAboutUs", payload);
    },
  },
};
