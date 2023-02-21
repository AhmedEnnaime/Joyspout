import { defineStore } from "pinia";
import { reactive } from "vue";

export const useAuthStore = defineStore("authentication", () => {
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
