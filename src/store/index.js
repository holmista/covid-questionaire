import { createStore } from "vuex";
import basicInformationModule from "./modules/basicInformation";
import covidInformationModule from "./modules/covidInformation";
import vaccinationInformationModule from "./modules/vaccinationInformation";
import officeInformationModule from "./modules/officeInformation";

const store = createStore({
  modules: {
    basicInformation: basicInformationModule,
    covidInformation: covidInformationModule,
    vaccinationInformation: vaccinationInformationModule,
    officeInformation: officeInformationModule,
  },
});

export default store;
