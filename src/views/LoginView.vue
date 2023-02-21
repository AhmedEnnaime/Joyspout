<script setup>
import SigninComponent from "@/components/SigninComponent.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(async () => {
  if (sessionStorage.getItem("token")) {
    router.push("/");
  }
});
</script>
<template>
  <div class="flex justify-center mt-52">
    <SigninComponent />
  </div>
</template>
