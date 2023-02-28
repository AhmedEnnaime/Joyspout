import { reactive } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const state = reactive({
    user: null,
  });

  const setUser = (user: any) => {
    state.user = user;
  };
  const clearUser = () => {
    state.user = null;
  };

  return {
    state,
    setUser,
    clearUser,
  };
});
