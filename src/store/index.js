import { createStore } from "vuex";
import basicInformationModule from "./modules/basicInformation";

const store = createStore({
  modules: {
    basicInformation: basicInformationModule,
  },
});

export default store;
