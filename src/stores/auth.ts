import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";
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
  const url = "http://localhost:8000/api";
  const token = sessionStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const getAuthUser = async () => {
    await axios
      .get(`${url}/userAuth`)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    state,
    setUser,
    clearUser,
    getAuthUser,
  };
});
