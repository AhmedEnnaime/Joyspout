<script setup>
import PostComponent from "./PostComponent.vue";
import axios from "axios";
import { onMounted } from "vue";
import { reactive } from "vue";
import { useSuccessStore } from "@/stores/success";
import SuccessModal from "./utils/SuccessModal.vue";

const posts = reactive([]);
const success = useSuccessStore();

onMounted(async () => {
  await getPosts();
});

const url = "http://localhost:8000/api";
const getPosts = async () => {
  await axios
    .get(`${url}/posts`)
    .then((res) => {
      const data = res.data.data;
      posts.push(...data);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<template>
  <div v-if="success.state.success">
    <SuccessModal />
  </div>
  <div class="w-full flex flex-col items-center gap-y-4 max-h-full">
    <PostComponent :posts="posts" />
  </div>
</template>
