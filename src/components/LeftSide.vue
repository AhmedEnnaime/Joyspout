<template>
  <div
    class="h-3/4 mt-16 mx-12 w-1/4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex items-center py-10 px-10">
      <img
        class="w-16 h-22 mb-3 rounded-full shadow-lg"
        src="@/assets/img/ait elkadi.jpeg"
        alt="Bonnie image"
      />
      <div class="flex flex-col px-8">
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400"
          >ahmedennaime20@gmail.com</span
        >
      </div>
    </div>
    <hr />
    <div class="flex flex-col py-4">
      <div class="flex items-center justify-between px-4">
        <h3 class="text-gray-500 px-6">Your Posts</h3>
        <div
          class="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"
        >
          8
        </div>
      </div>
      <div class="flex flex-col px-16 pt-8 pb-6">
        <h5 class="font-bold pb-2">Joyspout</h5>
        <p class="pl-4">Socials</p>
      </div>
      <div class="flex flex-col px-16 pb-6">
        <h5 class="font-bold pb-2">Theracure</h5>
        <p class="pl-4">Medicals / Socials</p>
      </div>
      <div class="flex flex-col px-16 pb-6">
        <h5 class="font-bold pb-2">Nfts</h5>
        <p class="pl-4">Entertainment</p>
      </div>
      <div class="flex justify-between mt-8 px-8">
        <button class="text-blue-600">view all</button>
      </div>
    </div>
  </div>
</template>
