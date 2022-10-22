import { createStore } from "vuex";
import basicInformationModule from "./modules/basicInformation";
import covidInformationModule from "./modules/covidInformation";
import vaccinationInformationModule from "./modules/vaccinationInformation";

const store = createStore({
  modules: {
    basicInformation: basicInformationModule,
    covidInformation: covidInformationModule,
    vaccinationInformation: vaccinationInformationModule,
  },
});

export default store;
