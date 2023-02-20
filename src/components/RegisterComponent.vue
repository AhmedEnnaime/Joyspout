<script setup>
import { RouterLink } from "vue-router";
import { reactive } from "vue";

const user = reactive({
  name: "",
  birthday: "",
  phone: "",
  email: "",
  password: "",
  c_password: "",
  img: "",
});
</script>
<template>
  <div
    class="w-2/4 max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <h5
      class="text-2xl pb-6 text-center font-medium text-gray-900 dark:text-white"
    >
      Joyspout
    </h5>
    <FormKit type="form" :actions="false" />
    <div class="flex gap-x-4 w-full">
      <div class="w-1/2">
        <FormKit
          type="text"
          name="name"
          id="name"
          v-model="user.name"
          label="Your Name"
          validation="required"
          placeholder="Enter your name"
        />
      </div>

      <div class="w-1/2">
        <FormKit
          type="date"
          name="birthday"
          label="Your birthday"
          v-model="user.birthday"
          id="birthday"
          validation="required"
        />
      </div>
    </div>
    <div class="flex gap-x-4">
      <div class="w-1/2">
        <FormKit
          type="text"
          name="phone"
          v-model="user.phone"
          id="phone"
          label="Your phone number"
          validation="required|min:10"
          placeholder="Enter phone number"
        />
      </div>

      <div class="w-1/2">
        <FormKit
          type="email"
          name="email"
          label="Your email"
          id="email"
          v-model="user.email"
          validation="required|email"
          placeholder="name@company.com"
        />
      </div>
    </div>

    <div class="w-full">
      <FormKit
        type="file"
        name="img"
        id="img"
        label="Image"
        v-model="user.img"
        placeholder="Upload image"
        validation="required"
      />
    </div>
    <FormKit type="group">
      <div class="flex gap-x-4">
        <div class="w-1/2">
          <FormKit
            type="password"
            name="password"
            label="Your password"
            v-model="user.password"
            id="password"
            placeholder="Enter password"
            validation="required|matches:/[0-9]/"
            :validation-messages="{
              matches: 'Passwords must include a number.',
            }"
          />
        </div>

        <div class="w-1/2">
          <FormKit
            type="password"
            name="password_confirm"
            id="c_password"
            v-model="user.c_password"
            label="Confirm password"
            placeholder="Confirm password"
            validation="required|confirm"
            validation-label="Password confirmation"
            validation-visibility="live"
          />
        </div>
      </div>
    </FormKit>

    <button
      type="submit"
      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Create your account
    </button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Already have an account?
      <RouterLink
        to="/login"
        class="text-blue-700 hover:underline dark:text-blue-500"
        >Log in</RouterLink
      >
    </div>
  </div>
</template>
