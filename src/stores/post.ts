import { reactive } from "vue";
import { defineStore } from "pinia";

export const usePostStore = defineStore("post", () => {
  const state = reactive({
    post: null,
  });

  const setPost = (post: any) => {
    state.post = post;
  };
  const clearPost = () => {
    state.post = null;
  };

  return {
    state,
    setPost,
    clearPost,
  };
});
