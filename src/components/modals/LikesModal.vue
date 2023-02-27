<script setup>
import { Modal } from "flowbite-vue";

const props = defineProps({
  showModal: {
    required: true,
    type: Boolean,
    default: false,
  },
  closeModal: {
    required: true,
    type: Function,
  },
  likes: {
    required: true,
    type: Array,
  },
});

const getUserImage = (fileName) => {
  return "http://localhost:8000/storage/" + fileName;
};
</script>

<template>
  <Modal
    class="overflow-y-scroll"
    v-if="props.showModal"
    @close="props.closeModal"
  >
    <template #header>
      <div class="flex items-center text-lg">Likes</div>
    </template>
    <template #body>
      <div
        v-for="(like, index) in props.likes"
        :key="index"
        class="flex items-center gap-x-4 pb-4"
      >
        <img
          class="w-10 h-10 rounded-full"
          :src="getUserImage(like.user.img)"
          alt="user photo"
        />
        <p>{{ like.user.name }}</p>
      </div>
    </template>
  </Modal>
</template>
