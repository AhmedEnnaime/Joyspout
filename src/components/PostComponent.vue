<script setup>
import { ref } from "vue";
import LikesModal from "./modals/LikesModal.vue";
import CommentsModal from "@/components/modals/CommentsModal.vue";
import ButtonOptions from "./ButtonOptions.vue";
import { useAuthStore } from "@/stores/auth";
import { usePostStore } from "@/stores/post";
import axios from "axios";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const router = useRouter();
const user = useAuthStore().state.user;
const clickedUser = useUserStore();
const selectedPost = usePostStore();
const props = defineProps({
  posts: {
    required: true,
  },
});

const url = "http://localhost:8000/api";
const getUserImage = (fileName) => {
  return "http://localhost:8000/storage/" + fileName;
};

const getPostImage = (fileName) => {
  return "http://localhost:8000/storage/" + fileName;
};
const Modal = ref(false);
const CommentModal = ref(false);

const showCommentsModal = () => {
  CommentModal.value = true;
};

const closeCommentsModal = () => {
  CommentModal.value = false;
};

const showModal = () => {
  Modal.value = true;
};

const closeModal = () => {
  Modal.value = false;
};

const likePost = async (post_id) => {
  await axios
    .post(`${url}/like/${post_id}`)
    .then((res) => {
      if (res.status === 201) {
        router.push("/");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const removeLike = async (like_id) => {
  await axios
    .delete(`${url}/like/${like_id}`)
    .then((res) => {
      if (res.status === 202) {
        router.push("/");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
const hasLikedPost = (post) => {
  return post.likes.some((like) => like?.user?.id === user?.id);
};
const toggleLike = (e, post_id, like_id) => {
  if (e.target.classList.contains("text-red-600")) {
    e.target.classList.remove("text-red-600");
    removeLike(like_id);
  } else {
    e.target.classList.add("text-red-600");
    likePost(post_id);
  }
};
let likes = [];
let comments = [];
let selectedPostId = 0;

const getPostId = (post_id) => {
  selectedPostId = post_id;
};

const getPostComments = (items) => {
  comments = [...items];
};

const getPostLikes = (items) => {
  likes = [...items];
};
</script>

<template>
  <div
    v-for="(post, index) in props.posts"
    :key="index"
    class="block max-w-full w-3/4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <div class="flex flex-col gap-y-6 p-4">
      <div class="flex justify-between items-center">
        <div
          @click="
            () => {
              clickedUser.setUser(post.user);
              router.push('/profile');
            }
          "
          class="flex items-center gap-x-4 cursor-pointer"
        >
          <img
            class="w-10 h-10 mb-3 rounded-full shadow-lg"
            :src="getUserImage(post.user.img)"
            alt="Bonnie image"
          />
          <p class="font-semibold">{{ post.user.name }}</p>
        </div>
        <button @click="selectedPost.setPost(post)">
          <ButtonOptions v-if="user?.id === post.user.id" />
        </button>
      </div>

      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ post.description }}
      </p>
      <img
        class="w-full h-96 mb-3 rounded-md shadow-lg"
        :src="getPostImage(post.medias[0].content)"
        alt="post img"
      />
      <div class="flex gap-x-12 items-center">
        <i
          @click="
            toggleLike(
              $event,
              post.id,
              hasLikedPost(post)
                ? post.likes.find((like) => like?.user?.id === user?.id).id
                : 0
            )
          "
          class="like fa-sharp fa-regular fa-heart text-2xl cursor-pointer"
          :class="{ 'text-red-600': hasLikedPost(post) }"
        ></i>
        <i
          @click="
            () => {
              showCommentsModal();
              getPostComments(post.comments);
              getPostId(post.id);
            }
          "
          class="fa-sharp fa-regular fa-comment text-2xl cursor-pointer"
        ></i>
      </div>
      <p
        @click="
          () => {
            showModal();
            getPostLikes(post.likes);
          }
        "
        class="font-bold cursor-pointer"
      >
        {{ post.likes.length }} likes
      </p>
    </div>
  </div>
  <div v-if="Modal">
    <LikesModal :likes="likes" :show-modal="Modal" :close-modal="closeModal" />
  </div>

  <div v-if="CommentModal">
    <CommentsModal
      :show-modal="CommentModal"
      :close-modal="closeCommentsModal"
      :comments="comments"
      :post_id="selectedPostId"
    />
  </div>
</template>
