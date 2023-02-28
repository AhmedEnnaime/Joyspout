<script setup>
import { Modal } from "flowbite-vue";
import "@formkit/themes/genesis";
import { reactive, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import axios from "axios";
import { usePostStore } from "@/stores/post";

const user = useAuthStore().state.user;
const selectedPost = usePostStore();

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
      const data = res.data.data;
      categories.push(...data);
    })
    .catch((err) => {
      console.log(err);
    });
};

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
        :placeholder="`What's on your mind ${user?.name} ?`"
      />
      <FormKit
        name="category_id"
        type="checkbox"
        validation="required"
        v-model="post.category_id"
        :options="
          categories.map((category) => ({
            label: category.name,
            value: category.id,
          }))
        "
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
      </div>
    </template>
    <template #footer>
      <div class="flex w-full">
        <button
          v-if="!selectedPost.state.post?.id"
          @click="sharePost"
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
        >
          Post
        </button>

        <button
          v-else
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
        >
          Update Post
        </button>
      </div>
    </template>
  </Modal>
</template>
