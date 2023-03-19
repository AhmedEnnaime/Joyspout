<script setup>
import axios from "axios";
import PostComponent from "@/components/PostComponent.vue";
import { reactive } from "vue";
import { useUserStore } from "@/stores/user";
import { onMounted } from "vue";
import NavbarComponent from "@/components/NavbarComponent.vue";

const posts = reactive([]);
const user = useUserStore();

onMounted(async () => {
  await getPosts();
});

const url = "http://localhost:8000/api";
const getPosts = async () => {
  await axios
    .get(`${url}/profile/${user.state.user?.id}`)
    .then((res) => {
      const data = res.data.data;
      posts.push(...data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getUserImage = (fileName) => {
  return "http://localhost:8000/storage/" + fileName;
};
</script>
<template>
  <div class="h-screen overflow-hidden">
    <NavbarComponent />
    <div class="flex w-full px-10 mt-10 max-h-screen h-screen">
      <div
        class="pt-12 px-8 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0"
      >
        <h2 class="text-2xl font-medium text-gray-700" aria-hidden="true">
          {{ user.state.user?.name }}
        </h2>
        <div class="mt-1 lg:hidden">
          <div class="flex items-center">
            <div
              class="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
              aria-hidden="true"
            >
              <img class="rounded-full h-full w-full" alt="" />
            </div>
            <div class="ml-5 rounded-md shadow-sm">
              <div
                class="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500"
              >
                <label
                  for="mobile-user-photo"
                  class="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
                >
                  <span class="sr-only"> user photo</span>
                </label>
                <input
                  id="mobile-user-photo"
                  name="user-photo"
                  type="file"
                  class="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="hidden relative rounded-full overflow-hidden lg:block">
          <img
            class="relative rounded-full w-40 h-40"
            :src="getUserImage(user.state.user?.img)"
            alt=""
          />
          <label
            for="desktop-user-photo"
            class="absolute inset-0 w-full h-full bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
          >
            <span class="sr-only"> user photo</span>
            <input
              type="file"
              disabled
              id="desktop-user-photo"
              name="user-photo"
              class="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
            />
          </label>
        </div>
      </div>
      <div
        class="flex items-center flex-col w-full gap-y-12 h-4/5 mt-12 overflow-y-scroll"
      >
        <PostComponent :posts="posts" />
      </div>
    </div>
  </div>
</template>
