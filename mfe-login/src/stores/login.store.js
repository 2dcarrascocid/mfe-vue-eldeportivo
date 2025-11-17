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
