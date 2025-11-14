import { defineStore } from 'pinia';

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null
  }),

  actions: {
    setUser(data) {
      this.user = {
        name: data.name,
        email: data.email,
        picture: data.picture,
        sub: data.sub, // ID de Google
      };

      console.log("🟢 Usuario guardado en Pinia:", this.user);
    }
  }
});
