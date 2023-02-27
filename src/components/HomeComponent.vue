<script setup>
import PostComponent from "./PostComponent.vue";
import axios from "axios";
import { onMounted } from "vue";
import { reactive } from "vue";

// let posts = reactive([
//   {
//     id: 0,
//     description: "",
//     user_id: 0,
//     created_at: "",
//     user: {
//       id: 0,
//       name: "",
//       birthday: "",
//       phone: "",
//       email: "",
//       img: "",
//     },
//   },
// ]);

const posts = reactive([]);

// const comments = reactive([
//   {
//     id: 0,
//     content: "",
//     post_id: 0,
//     created_at: "",
//     user: {
//       id: 0,
//       name: "",
//       birthday: "",
//       phone: "",
//       email: "",
//       img: "",
//     },
//   },
// ]);

// const likes = reactive([
//   {
//     id: 0,
//     post_id: 0,
//     user_id: 0,
//     user: {
//       id: 0,
//       name: "",
//       birthday: "",
//       phone: "",
//       email: "",
//       img: "",
//     },
//   },
// ]);

// const medias = reactive([
//   {
//     id: 0,
//     content: "",
//     post_id: 0,
//   },
// ]);

// const categories = reactive([
//   {
//     id: 0,
//     name: "",
//   },
// ]);
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
