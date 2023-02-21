<script setup>
import { Navbar, NavbarLogo } from "flowbite-vue";
import axios from "axios";
import { useRouter } from "vue-router";

const url = "http://localhost:8000/api";
const router = useRouter();

const logout = async () => {
  await axios
    .post(`${url}/logout`)
    .then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        sessionStorage.removeItem("Authenticated");
        sessionStorage.clear();
        router.push("/login");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<template>
  <Navbar>
    <template #logo>
      <NavbarLogo
        link="https://www.google.com/"
        alt="Flowbite logo"
        image-url="https://flowbite.com/docs/images/logo.svg"
      >
        Joyspout
      </NavbarLogo>
    </template>
    <div class="flex items-center md:order-2">
      <button
        type="button"
        class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="w-10 h-10 rounded-full"
          src="@/assets/img/ait elkadi.jpeg"
          alt="user photo"
        />
      </button>
      <!-- Dropdown menu -->
      <div
        class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        id="user-dropdown"
      >
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white"
            >Bonnie Green</span
          >
          <span
            class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"
            >name@flowbite.com</span
          >
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >My Profile</a
            >
          </li>
          <li>
            <a
              href="#"
              @click="logout"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Sign out</a
            >
          </li>
        </ul>
      </div>
    </div>
  </Navbar>
</template>
