<script setup>
import axios from "axios";
import { reactive, onMounted } from "vue";

onMounted(async () => {
  await getCategories();
});
const categories = reactive([]);
const url = "http://localhost:8000/api";
const getCategories = async () => {
  await axios
    .get(`${url}/categories`)
    .then((res) => {
      const data = res.data.data;
      categories.push(...data);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<template>
  <div class="flex justify-center">
    <a
      href="#"
      class="block w-3/4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div class="flex mb-6 gap-x-6">
        <form action="" class="flex items-center justify-center w-full">
          <div
            class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center pt-12"
          >
            <div
              v-for="(category, index) in categories"
              :key="index"
              class="flex gap-x-2 items-center"
            >
              <input
                type="checkbox"
                :id="category.id"
                name="categories"
                :value="category.id"
              />
              <label for="category">{{ category.name }}</label>
            </div>
          </div>
        </form>
      </div>
    </a>
  </div>
</template>
