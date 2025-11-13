import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import vue3GoogleLogin from "vue3-google-login";
import "./style.css";

const app = createApp(App); // <-- guardamos la instancia
app.use(router);

app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
});

app.mount("#app"); // <-- solo un mount al final
