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
      <div class="flex flex-col gap-y-2">
        <div class="flex items-center gap-x-4 pb-4">
          <img
            class="w-10 h-10 rounded-full"
            src="@/assets/img/ait elkadi.jpeg"
            alt="user photo"
          />
          <p>Samir Ait elkadi</p>
        </div>
        <p>I like this post so much</p>
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
    <template #footer>
      <div class="flex gap-x-2 w-full">
        <FormKit type="form" />
        <FormKit
          name="comment"
          validation="required"
          placeholder="Enter you comment"
          type="text"
        />
        <button
          @click="props.closeModal"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Post
        </button>
      </div>
    </template>
  </Modal>
</template>
