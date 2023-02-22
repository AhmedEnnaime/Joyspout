<script setup>
import { Modal } from "flowbite-vue";
import ButtonOptions from "../ButtonOptions.vue";

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
      <div class="flex items-center text-lg">Comments</div>
    </template>
    <template #body>
      <div class="flex items-center gap-x-4 pb-4">
        <img
          class="w-10 h-10 rounded-full"
          src="@/assets/img/ait elkadi.jpeg"
          alt="user photo"
        />
        <div class="flex flex-col p-2 rounded-lg bg-gray-200">
          <div class="flex gap-x-4 items-center">
            <p class="font-bold">Samir Ait elkadi</p>
            <ButtonOptions />
          </div>
          <p class="pl-2">I like this post so much</p>
        </div>
      </div>

      <div class="flex items-center gap-x-4 pb-4">
        <img
          class="w-10 h-10 rounded-full"
          src="@/assets/img/ait elkadi.jpeg"
          alt="user photo"
        />
        <div class="flex flex-col gap-y-2 p-2 rounded-lg bg-gray-200">
          <p class="font-bold">Samir Ait elkadi</p>
          <p class="pl-2">I like this post so much</p>
        </div>
      </div>

      <div class="flex items-center gap-x-4 pb-4">
        <img
          class="w-10 h-10 rounded-full"
          src="@/assets/img/ait elkadi.jpeg"
          alt="user photo"
        />
        <div class="flex flex-col gap-y-2 p-2 rounded-lg bg-gray-200">
          <p class="font-bold">Samir Ait elkadi</p>
          <p class="pl-2">I like this post so much</p>
        </div>
      </div>

      <div class="flex items-center gap-x-4 pb-4">
        <img
          class="w-10 h-10 rounded-full"
          src="@/assets/img/ait elkadi.jpeg"
          alt="user photo"
        />
        <div class="flex flex-col gap-y-2 p-2 rounded-lg bg-gray-200">
          <p class="font-bold">Samir Ait elkadi</p>
          <p class="pl-2">I like this post so much</p>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex gap-x-4 w-full">
        <form action="" class="w-3/4">
          <input
            type="text"
            placeholder="Write your comment"
            class="w-full rounded-md"
          />
        </form>
        <button
          @click="props.closeModal"
          type="button"
          class="text-white w-1/4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Post
        </button>
      </div>
    </template>
  </Modal>
</template>
