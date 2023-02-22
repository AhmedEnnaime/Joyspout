<script setup>
import NavbarComponent from "@/components/NavbarComponent.vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const token = sessionStorage.getItem("token");
const router = useRouter();
const user = useAuthStore();

onMounted(async () => {
  if (!token) {
    router.push("/login");
  }
  await user.getAuthUser();
});
const myArr = user.state.user?.created_at.split("T");
let created_at = myArr[0];
</script>

<template>
  <NavbarComponent />
  <div>
    <main class="relative mt-24">
      <div class="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
        <div class="bg-gray-100 rounded-lg shadow w-fit overflow-hidden h-full">
          <div
            class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x"
          >
            <form
              class="divide-y divide-gray-200 lg:col-span-9"
              action="#"
              method="POST"
            >
              <!-- Profile section -->
              <div class="py-6 px-4 sm:p-6 lg:pb-8">
                <div>
                  <h2 class="text-lg leading-6 font-medium text-gray-900">
                    Profile
                  </h2>
                </div>

                <div class="mt-6 flex flex-col justify-between lg:flex-row">
                  <div class="mt-6 grid grid-cols-12 mr-36 gap-6">
                    <div class="col-span-12 sm:col-span-6">
                      <label
                        for="first-name"
                        class="block text-sm font-medium text-gray-700"
                        >Username</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        :value="user.state.user.name"
                        autocomplete="given-name"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label
                        for="birthday"
                        class="block text-sm font-medium text-gray-700"
                        >Date</label
                      >
                      <input
                        type="date"
                        name="birthday"
                        id="birthday"
                        :value="user.state.user.birthday"
                        autocomplete="family-name"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div>

                    <div class="col-span-12">
                      <label
                        for="url"
                        class="block text-sm font-medium text-gray-700"
                        >Email</label
                      >
                      <input
                        type="email"
                        name="email"
                        id="email"
                        :value="user.state.user.email"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label
                        for="phone"
                        class="block text-sm font-medium text-gray-700"
                        >Phone number</label
                      >
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        :value="user.state.user.phone"
                        autocomplete="organization"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label
                        for="created_at"
                        class="block text-sm font-medium text-gray-700"
                        >Date of account creation</label
                      >
                      <input
                        type="text"
                        name="created_at"
                        id="created_at"
                        :value="created_at"
                        readonly
                        autocomplete="organization"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div
                    class="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0"
                  >
                    <p
                      class="text-sm font-medium text-gray-700"
                      aria-hidden="true"
                    >
                      Photo
                    </p>
                    <div class="mt-1 lg:hidden">
                      <div class="flex items-center">
                        <div
                          class="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                          aria-hidden="true"
                        >
                          <img class="rounded-full h-full w-full" alt="" />
                        </div>
                        <div class="ml-5 rounded-md shadow-sm">
                          <div
                            class="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500"
                          >
                            <label
                              for="mobile-user-photo"
                              class="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
                            >
                              <span>Change</span>
                              <span class="sr-only"> user photo</span>
                            </label>
                            <input
                              id="mobile-user-photo"
                              name="user-photo"
                              type="file"
                              class="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="hidden relative rounded-full overflow-hidden lg:block"
                    >
                      <img
                        class="relative rounded-full w-40 h-40"
                        :src="user.imageUrl"
                        alt=""
                      />
                      <label
                        for="desktop-user-photo"
                        class="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                      >
                        <span>Change</span>
                        <span class="sr-only"> user photo</span>
                        <input
                          type="file"
                          id="desktop-user-photo"
                          name="user-photo"
                          class="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="text-white mt-10 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
