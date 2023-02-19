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
  <Modal v-if="props.showModal" @close="props.closeModal">
    <template #header>
      <div class="flex items-center text-lg">Share post</div>
    </template>
    <template #body>
      <FormKit
        name="content"
        type="textarea"
        placeholder="What's on your mind Samir ?"
      />
      <div
        class="flex justify-between items-center p-4 border-2 border-gray-200 rounded-md"
      >
        <p>Add to your post</p>
        <FormKit
          name="attachment[]"
          type="file"
          style="display: none"
          id="attachment"
        />
        <label for="attachment">
          <i
            class="fa-sharp fa-solid fa-paperclip text-yellow-300 text-2xl cursor-pointer"
          ></i>
        </label>
      </div>
    </template>
    <template #footer>
      <div class="flex w-full">
        <button
          @click="props.closeModal"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
        >
          Post
        </button>
      </div>
    </template>
  </Modal>
</template>
