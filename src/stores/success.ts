import { reactive } from "vue";
import { defineStore } from "pinia";

export const useSuccessStore = defineStore("success", () => {
  const state = reactive({
    success: false,
  });

  const setSuccess = (success: any) => {
    state.success = success;
  };
  const clearSuccess = () => {
    state.success = false;
  };

  return {
    state,
    setSuccess,
    clearSuccess,
  };
});
