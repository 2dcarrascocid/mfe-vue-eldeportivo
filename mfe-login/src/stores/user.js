// src/store/user.js
import { reactive } from "vue";

export const userStore = reactive({
  user: null,
  setUser(u) { this.user = u; },
  clearUser() { this.user = null; },
});
