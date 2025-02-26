import { defineStore } from "pinia";
import { TokenKey } from "@/utils/cookie";

export const useAppStore = defineStore(`app${TokenKey}`, {
  state: () => ({
    loading: false,
  }),
  actions: {
    setLoading(bool) {
      this.loading = bool;
    },
  },
  getters: {},
  persist: true,
});
