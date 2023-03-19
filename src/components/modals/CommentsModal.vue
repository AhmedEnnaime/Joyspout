<script setup>
import { Modal } from "flowbite-vue";
import OptionsButton from "../OptionsButton.vue";
import { useAuthStore } from "@/stores/auth";
import axios from "axios";
import { ref } from "vue";
import { useCommentStore } from "@/stores/comment";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const user = useAuthStore().state.user;
const clickedUser = useUserStore();
const selectedComment = useCommentStore();
const content = ref("");
const router = useRouter();
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
  comments: {
    required: true,
    type: Array,
  },
  post_id: {
    required: true,
    type: Number,
  },
});

const getUserImage = (fileName) => {
  return "http://localhost:8000/storage/" + fileName;
};
const url = "http://localhost:8000/api";
const writeComment = async (post_id) => {
  const formData = new FormData();
  formData.append("content", content.value);
  await axios
    .post(`${url}/comment/${post_id}`, formData)
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
      <div class="flex items-center text-lg">Comments</div>
    </template>
    <template #body>
      <div v-if="props.comments.length == 0">
        <h1 class="text-center text-2xl">No comments available yet</h1>
      </div>
      <div
        v-else
        v-for="(comment, index) in props.comments"
        :key="index"
        class="flex items-center gap-x-4 pb-4 cursor-pointer"
      >
        <img
          @click="
            () => {
              clickedUser.setUser(comment.user);
              router.push('/profile');
            }
          "
          class="w-10 h-10 rounded-full"
          :src="getUserImage(comment.user.img)"
          alt="user photo"
        />
        <div class="flex flex-col p-2 rounded-lg bg-gray-200">
          <div class="flex gap-x-4 items-center">
            <p class="font-bold">{{ comment.user.name }}</p>
            <button @click="selectedComment.setComment(comment)">
              <OptionsButton v-if="user.id === comment.user.id" />
            </button>
          </div>
          <p class="pl-2">{{ comment.content }}</p>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex gap-x-4 w-full">
        <form
          action=""
          @submit.prevent="writeComment(props.post_id)"
          class="w-full flex gap-x-4"
        >
          <input
            type="text"
            placeholder="Write your comment"
            class="w-3/4 rounded-md"
            v-model="content"
          />
          <button
            type="submit"
            class="text-white w-1/4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Post
          </button>
        </form>
      </div>
    </template>
  </Modal>
</template>
