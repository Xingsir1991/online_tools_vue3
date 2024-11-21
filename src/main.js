import { createApp } from "vue";
import App from "./App.vue";

import pinia from "./store";
import router from "./router";
import VxeUI from "vxe-pc-ui";
import VxeUITable from "vxe-table";
import "@/styles";

const app = createApp(App);

app.use(router).use(pinia).use(VxeUI).use(VxeUITable).mount("#app");
