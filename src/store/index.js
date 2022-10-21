import { createStore } from "vuex";
import basicInformationModule from "./modules/basicInformation";
import covidInformationModule from "./modules/covidInformation";

const store = createStore({
  modules: {
    basicInformation: basicInformationModule,
    covidInformation: covidInformationModule,
  },
});

export default store;
