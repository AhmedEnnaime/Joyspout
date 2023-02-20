<script setup>
import { RouterLink } from "vue-router";
import "@formkit/themes/genesis";
</script>
<template>
  <div
    class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <h5
      class="text-2xl pb-4 text-center font-medium text-gray-900 dark:text-white"
    >
      Joyspout
    </h5>
    <FormKit type="form" :actions="false" />
    <div class="pb-4">
      <FormKit
        type="email"
        name="email"
        id="email"
        label="Your email"
        validation="required|email"
        placeholder="name@company.com"
      />
    </div>
    <div class="pb-4">
      <FormKit
        type="password"
        name="password"
        id="password"
        label="Your password"
        placeholder="Enter password"
        validation="required"
      />
    </div>
    <button
      type="submit"
      class="w-full mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Login to your account
    </button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered?
      <RouterLink
        to="/register"
        class="text-blue-700 hover:underline dark:text-blue-500"
        >Create account</RouterLink
      >
    </div>
  </div>
</template>
