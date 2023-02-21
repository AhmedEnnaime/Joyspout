<script setup>
import { RouterLink } from "vue-router";
import axios from "axios";
import { useRouter } from "vue-router";
import { reactive } from "vue";

const credentials = reactive({
  email: "",
  password: "",
});

const url = "http://localhost:8000/api";
const router = useRouter();

const login = async () => {
  await axios
    .post(`${url}/login`, credentials)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        sessionStorage.setItem("Authenticated", true);
        router.push("/");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<template>
  <div
    class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <h5
      class="text-4xl pb-8 text-center font-medium text-gray-900 dark:text-white"
    >
      Joyspout
    </h5>
    <FormKit @submit="login" type="form" :actions="false">
      <div class="pb-4">
        <FormKit
          type="email"
          name="email"
          v-model="credentials.email"
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
          v-model="credentials.password"
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
    </FormKit>
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
