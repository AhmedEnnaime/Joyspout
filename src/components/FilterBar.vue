<script setup>
import axios from "axios";
import { reactive, ref, onMounted } from "vue";

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

const categories_id = ref([]);
console.log(categories_id);
</script>

<template>
  <div
    class="h-fit mt-16 w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex mb-6 gap-x-6">
      <div class="flex flex-col items-center justify-center w-full p-4 h-full">
        <h2 class="text-2xl text-center pb-4">Filter by categories</h2>

        <FormKit type="form" :actions="false" />
        <FormKit
          name="categories"
          type="checkbox"
          v-model="categories_id"
          :options="
            categories.map((category) => ({
              label: category.name,
              value: category.id,
            }))
          "
        />
      </div>
    </div>
  </div>
</template>
