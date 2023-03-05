<!-- <script setup>
import { ref } from "vue";
import { useSearch } from "@/components/useSearch";

const url = "http://localhost:8000/api";
const userName = ref("");
const searchResults = useSearch(userName, url);
</script> -->

<template>
  <div class="lg:w-2/4 sm:ml-6 sm:flex sm:space-x-8">
    <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
      <div
        class="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0"
      >
        <div class="w-full">
          <label for="search" class="sr-only">Search</label>
          <div class="relative">
            <div
              class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
            >
              <i
                aria-hidden="true"
                class="fa-sharp fa-solid fa-magnifying-glass h-5 w-5 text-gray-400"
              ></i>
            </div>
            <input
              id="search"
              name="search"
              class="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search"
              type="search"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
