import { createApp } from "vue";
import App from "./App.vue";
import ForwardButton from "@/components/layout/ForwardButton.vue";
import BaseHeader from "@/components/layout/BaseHeader.vue";

import router from "./router";
import "./index.css";
import "./config/vee-validate/rules";
import "./config/vee-validate/messages";

const app = createApp(App);

app.component("ForwardButton", ForwardButton);
app.component("BaseHeader", BaseHeader);
app.use(router);

app.mount("#app");
