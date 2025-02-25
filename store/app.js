import { defineStore } from "pinia";
import { TokenKey } from "@/utils/cookie";

export const useAppStore = defineStore(`app${TokenKey}`, {
  state: () => ({}),
  actions: {},
  getters: {},
  persist: true,
});
