<script setup>
import PostComponent from "./PostComponent.vue";
import axios from "axios";
import { onMounted, reactive } from "vue";

const posts = reactive([]);

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
  <div class="w-full flex flex-col items-center gap-y-4 max-h-full">
    <PostComponent :posts="posts" />
  </div>
</template>
