<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted, reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const user = useAuthStore().state.user;
const router = useRouter();
const navigate = () => {
  router.push("/profile");
};
const getUserImage = (fileName) => {
  return "http://localhost:8000/storage/" + fileName;
};

onMounted(async () => {
  await getPosts();
});

const posts = reactive([]);

const url = "http://localhost:8000/api";
const getPosts = async () => {
  await axios
    .get(`${url}/authPosts`)
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
  <div
    class="h-fit mt-16 mx-12 w-1/4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div @click="navigate" class="flex items-center py-4 px-10 cursor-pointer">
      <img
        class="w-16 h-22 mb-3 rounded-full shadow-lg"
        :src="getUserImage(user?.img)"
        alt="User image"
      />
      <div class="flex flex-col px-8">
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {{ user?.name }}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{
          user?.email
        }}</span>
      </div>
    </div>
    <hr />
    <div class="flex flex-col py-4">
      <div class="flex items-center justify-between px-4">
        <h3 class="text-gray-500 px-6">Your Posts</h3>
        <div
          class="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"
        >
          {{ posts.length }}
        </div>
      </div>
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="flex flex-col px-8 pt-8"
      >
        <h5 class="font-bold pb-2">{{ post.description }}</h5>
        <div class="flex gap-x-2 pl-4 items-center">
          <p v-for="(category, index) in post.categories" :key="index" class="">
            {{ category.name }}
          </p>
        </div>
      </div>

      <div class="flex justify-between mt-8 px-8">
        <button class="text-blue-600">view all</button>
      </div>
    </div>
  </div>
</template>
