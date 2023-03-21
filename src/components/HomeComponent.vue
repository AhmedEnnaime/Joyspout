<script setup>
import PostComponent from "./PostComponent.vue";
import axios from "axios";
import { onMounted, computed, reactive, watch } from "vue";
import { useSuccessStore } from "@/stores/success";
import SuccessModal from "./utils/SuccessModal.vue";
import { useCategoriesStore } from "@/stores/categories";

const posts = reactive([]);
const success = useSuccessStore();
const categories = useCategoriesStore();

onMounted(async () => {
  await getPosts();
});

const url = "http://localhost:8000/api";
const getPosts = async () => {
  await axios
    .get(`${url}/posts`)
    .then((res) => {
      const data = res.data.data;
      posts.push(...data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const filteredPosts = computed(() => {
  if (categories.state.categories?.length === 0) {
    return posts;
  } else {
    return posts.filter((post) => {
      return post.categories.every((category) => {
        return categories.state.categories.includes(category.id);
      });
    });
  }
});

watch(
  () => categories.state.categories,
  () => {
    if (categories.state.categories?.length === 0) {
      posts.forEach((post) => (post.display = true));
    } else {
      posts.forEach((post) => {
        post.display = post.categories.some((category) =>
          categories.state.categories.includes(category.id)
        );
      });
    }
  }
);
console.log(filteredPosts);
</script>

<template>
  <div v-if="success.state.success">
    <SuccessModal />
  </div>
  <div class="w-full flex flex-col items-center gap-y-4 max-h-full">
    <PostComponent :posts="filteredPosts" />
  </div>
</template>
