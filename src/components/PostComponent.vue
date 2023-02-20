<script setup>
import OptionsButton from "@/components/OptionsButton.vue";

const toggleLike = () => {
  const likes = document.querySelectorAll(".like");
  for (let like of likes) {
    like.classList.toggle("text-red-600");
  }
};
</script>
<template>
  <div
    class="block max-w-full w-3/4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <div class="flex flex-col gap-y-6 p-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-x-4">
          <img
            class="w-10 h-10 mb-3 rounded-full shadow-lg"
            src="@/assets/img/ait elkadi.jpeg"
            alt="Bonnie image"
          />
          <p class="font-semibold">Samir Ait el kadi</p>
        </div>
        <OptionsButton />
      </div>

      <p class="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <img
        class="w-full h-96 mb-3 rounded-md shadow-lg"
        src="@/assets/img/poster.jpeg"
        alt="post img"
      />
      <div class="flex gap-x-12 items-center">
        <i
          @click="toggleLike"
          class="like fa-sharp fa-regular fa-heart text-2xl cursor-pointer"
        ></i>
        <i class="fa-sharp fa-regular fa-comment text-2xl cursor-pointer"></i>
      </div>
      <p class="font-bold cursor-pointer">120 likes</p>
    </div>
  </div>
</template>
