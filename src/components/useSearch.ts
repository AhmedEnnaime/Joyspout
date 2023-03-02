import { reactive, watchEffect } from "vue";
import axios from "axios";

export function useSearch(query: any, endpoint: string) {
  const state = reactive({
    results: [],
    loading: false,
    error: null,
  });

  watchEffect(() => {
    state.loading = true;

    axios
      .get(endpoint, {
        params: { q: query.value },
      })
      .then((response) => {
        state.results = response.data;
        state.loading = false;
      })
      .catch((error) => {
        state.error = error;
        state.loading = false;
      });
  });

  return state;
}
