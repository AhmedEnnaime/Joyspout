<script setup lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue";
import LeftSide from "@/components/LeftSide.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import SharePost from "@/components/SharePost.vue";
import axios from "axios";
import { onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const url = "http://localhost:8000/api";
const token = sessionStorage.getItem("token");
const router = useRouter();

onMounted(async () => {
  if (!token) {
    router.push("/login");
  }
  getAuthUser();
});

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const getAuthUser = async () => {
  await axios
    .get(`${url}/userAuth`)
    .then((res) => {
      if (res.status === 200) {
        useAuthStore().setUser(res.data.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
const user = computed(() => useAuthStore().state.user);
</script>

<template>
  <div class="h-screen overflow-hidden">
    <NavbarComponent />
    <div class="flex w-full px-10 mt-10 max-h-screen h-screen">
      <LeftSide />
      <div class="flex flex-col w-full gap-y-12 h-4/5 mt-12 overflow-y-scroll">
        <SharePost />
        <HomeComponent />
      </div>
    </div>
  </div>
</template>
