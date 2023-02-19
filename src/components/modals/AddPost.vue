<script setup>
import { Modal } from "flowbite-vue";
import "@formkit/themes/genesis";
import { reactive } from "vue";

const post = reactive({
  description: "",
  user_id: "",
  content: [],
  category_id: [],
});

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
      <div class="flex items-center text-lg">Share post</div>
    </template>
    <template #body>
      <FormKit type="form" :actions="false" form-class="hide" />
      <FormKit
        name="description"
        type="textarea"
        v-model="post.description"
        placeholder="What's on your mind Samir ?"
      />
      <FormKit
        name="category_id"
        type="checkbox"
        v-model="post.category_id"
        :options="[
          { label: 'Socials', value: 3 },
          { label: 'Entertainment', value: 4 },
          { label: 'Education', value: 6 },
          { label: 'Gaming', value: 8 },
          { label: 'Finance', value: 9 },
          { label: 'Anime', value: 99 },
          { label: 'Movies', value: 66 },
        ]"
      />
      <div
        class="flex justify-between items-center p-4 border-2 border-gray-200 rounded-md"
      >
        <p>Add to your post</p>
        <FormKit
          name="content[]"
          v-model="post.content"
          type="file"
          multiple
          id="attachment"
        />
        <!-- <label for="attachment">
          <i
            class="fa-sharp fa-solid fa-paperclip text-yellow-300 text-2xl cursor-pointer"
          ></i>
        </label> -->
      </div>
    </template>
    <template #footer>
      <pre wrap="">{{ post }}</pre>
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
