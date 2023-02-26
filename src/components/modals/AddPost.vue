<script setup>
import { Modal } from "flowbite-vue";
import "@formkit/themes/genesis";
import { reactive, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import axios from "axios";

const user = useAuthStore().state.user;

onMounted(async () => {
  await getCategories();
});
const post = reactive({
  description: "",
  user_id: user?.id,
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
const url = "http://localhost:8000/api";

const handleImageUpload = (event) => {
  post.content = event.target.files;
};

const categories = reactive([]);

const getCategories = async () => {
  await axios
    .get(`${url}/categories`)
    .then((res) => {
      console.log(res.data);
      const data = res.data.data;
      categories.push(...data);
    })
    .catch((err) => {
      console.log(err);
    });
};
console.log(categories);

const sharePost = async () => {
  const formData = new FormData();
  formData.append("description", post.description);
  formData.append("user_id", post.user_id);
  for (let i = 0; i < post.category_id.length; i++) {
    formData.append(`category_id[${i}]`, post.category_id[i]);
  }
  for (let j = 0; j < post.content.length; j++) {
    formData.append(`content[${j}]`, post.content[j]);
  }

  await axios
    .post(`${url}/posts`, formData)
    .then((res) => {
      if (res.status === 201) {
        props.closeModal();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
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
      <FormKit type="form" :actions="false" />
      <FormKit
        name="description"
        type="textarea"
        v-model="post.description"
        validation="required"
        placeholder="What's on your mind Samir ?"
      />
      <FormKit
        name="category_id"
        type="checkbox"
        validation="required"
        v-model="post.category_id"
        :options="[
          { label: 'Socials', value: 3 },
          { label: 'Entertainment', value: 4 },
          { label: 'Education', value: 6 },
          { label: 'Gaming', value: 8 },
          { label: 'Finance', value: 1 },
          { label: 'Anime', value: 2 },
          { label: 'Movies', value: 5 },
        ]"
      />
      <div
        class="flex justify-between items-center p-4 border-2 border-gray-200 rounded-md"
      >
        <p>Add to your post</p>
        <FormKit
          name="content[]"
          @change="handleImageUpload"
          type="file"
          accept=".jpg,.png,.pdf"
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
      <div class="flex w-full">
        <button
          @click="sharePost"
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
        >
          Post
        </button>
      </div>
    </template>
  </Modal>
</template>
