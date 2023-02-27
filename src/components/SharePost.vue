<script setup>
import { ref } from "vue";
import AddPost from "./modals/AddPost.vue";
import { useAuthStore } from "@/stores/auth";

const user = useAuthStore().state.user;

const getUserImage = (fileName) => {
  return "http://localhost:8000/storage/" + fileName;
};
const Modal = ref(false);

const showModal = () => {
  Modal.value = true;
};

const closeModal = () => {
  Modal.value = false;
};
</script>
<template>
  <div class="flex justify-center">
    <a
      href="#"
      class="block w-3/4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div class="flex mb-6 gap-x-6">
        <img
          class="w-12 h-12 mb-3 rounded-full shadow-lg"
          :src="getUserImage(user?.img)"
          alt="Bonnie image"
        />
        <input
          type="text"
          id="default-input"
          :placeholder="`What's on your mind, ${user?.name} ?`"
          :onfocus="showModal"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </a>
  </div>
  <div v-if="Modal">
    <AddPost :show-modal="Modal" :close-modal="closeModal" />
  </div>
</template>
