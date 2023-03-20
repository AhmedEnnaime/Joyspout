import { reactive } from "vue";
import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", () => {
  const state = reactive({
    categories: [],
  });

  const setCategories = (categories: any) => {
    state.categories = categories;
  };
  const clearCategories = () => {
    state.categories = [];
  };

  return {
    state,
    setCategories,
    clearCategories,
  };
});
