<script setup>
import { Modal } from "flowbite-vue";
import "@formkit/themes/genesis";

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
});
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
      <div class="flex items-center gap-x-4 pb-4">
        <img
          class="w-10 h-10 rounded-full"
          src="@/assets/img/ait elkadi.jpeg"
          alt="user photo"
        />
        <p>Samir Ait elkadi</p>
      </div>

      <div class="flex items-center gap-x-4 pb-4">
        <img
          class="w-10 h-10 rounded-full"
          src="@/assets/img/ait elkadi.jpeg"
          alt="user photo"
        />
        <p>Samir Ait elkadi</p>
      </div>

      <div class="flex items-center gap-x-4 pb-4">
        <img
          class="w-10 h-10 rounded-full"
          src="@/assets/img/ait elkadi.jpeg"
          alt="user photo"
        />
        <p>Samir Ait elkadi</p>
      </div>

      <div class="flex items-center gap-x-4 pb-4">
        <img
          class="w-10 h-10 rounded-full"
          src="@/assets/img/ait elkadi.jpeg"
          alt="user photo"
        />
        <p>Samir Ait elkadi</p>
      </div>
    </template>
  </Modal>
</template>
