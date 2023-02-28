import { reactive } from "vue";
import { defineStore } from "pinia";

export const useCommentStore = defineStore("comment", () => {
  const state = reactive({
    comment: null,
  });

  const setComment = (comment: any) => {
    state.comment = comment;
  };
  const clearComment = () => {
    state.comment = null;
  };

  return {
    state,
    setComment,
    clearComment,
  };
});
