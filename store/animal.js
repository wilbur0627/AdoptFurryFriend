import { defineStore } from "pinia";
import { TokenKey } from "@/utils/cookie";

export const useAnimalStore = defineStore(`animal${TokenKey}`, {
  state: () => ({
    bodyType: {
      SMALL: "小型",
      MEDIUM: "中型",
      BIG: "大型",
    },
    sexual: {
      M: "公",
      F: "母",
    },
    status: {
      NONE: "未公告",
      OPEN: "開放認養",
      ADOPTED: "已認養",
      OTHER: "其他",
      DEAD: "死亡",
    },
  }),
  actions: {},
  getters: {},
  persist: true,
});
