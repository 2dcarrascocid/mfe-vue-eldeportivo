import { defineStore } from "pinia";

export const useLoginStore = defineStore("loginLocal", {
  state: () => ({
    loading: false,
    error: null,
  }),

  actions: {
    startLoading() {
      this.loading = true;
      this.error = null;
    },

    stopLoading() {
      this.loading = false;
    },

    setError(msg) {
      this.error = msg;
      this.loading = false;
    },
  },
});

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    provider: null,      // 'facebook', 'google', 'basic', etc.
    accessToken: null,   // token de provider (cuando lo tengas)
  }),
  actions: {
    setUserFromFacebook(payload) {
      // Por ahora payload será lo que tengamos de Facebook (inicialmente casi nada)
      this.user = payload.user || null;
      this.provider = 'facebook';
      this.accessToken = payload.accessToken || null;
    },
    clearSession() {
      this.user = null;
      this.provider = null;
      this.accessToken = null;
    },
  },
});
