import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";
import "@themesberg/flowbite";
import "./index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(plugin, defaultConfig);

app.mount("#app");
