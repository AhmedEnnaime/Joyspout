<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user";
import SearchBar from "./SearchBar.vue";

import {
  Disclosure,
  DisclosureButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";

const url = "http://localhost:8000/api";
const router = useRouter();
const token = sessionStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const user = useAuthStore().state.user;
const clickedUser = useUserStore();

const getUserImage = (fileName) => {
  return "http://localhost:8000/storage/" + fileName;
};
const logout = async () => {
  await axios
    .post(`${url}/logout`)
    .then((res) => {
      if (res.status === 200) {
        sessionStorage.removeItem("token");
        sessionStorage.clear();
        useAuthStore().clearUser();
        router.push("/login");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<template>
  <Disclosure as="nav" class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <!-- <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" /> -->
          </DisclosureButton>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div
            @click="router.push('/')"
            class="flex-shrink-0 flex items-center cursor-pointer"
          >
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
              alt="Workflow"
            />
          </div>
          <SearchBar />
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  :src="getUserImage(user?.img)"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <RouterLink
                    to="/"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
                    ]"
                    >Home</RouterLink
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <RouterLink
                    @click="clickedUser.setUser(user)"
                    to="/settings"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
                    ]"
                    >Settings</RouterLink
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <RouterLink
                    to="/profile"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
                    ]"
                    >My Profile</RouterLink
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    @click="logout"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
                    ]"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </Disclosure>
</template>
