<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { useCommentStore } from "@/stores/comment";
import axios from "axios";

const comment = useCommentStore();

const url = "http://localhost:8000/api";

const deleteComment = async () => {
  await axios
    .delete(`${url}/comment/${comment.state.comment?.id}`)
    .then((res) => {
      if (res.status === 202) {
        comment.clearComment();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<template>
  <div
    class="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start"
  >
    <Menu as="div" class="ml-3 relative inline-block text-left">
      <div>
        <MenuButton
          class="-my-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <span class="sr-only">Open options</span>
          <i class="fa-solid fa-ellipsis h-5 w-5" aria-hidden="true"></i>
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <button
                @click="deleteComment"
                type="button"
                :class="[
                  active ? 'bg-gray-100 text-red-600' : 'text-gray-700',
                  'w-full flex justify-between px-4 py-2 text-sm',
                ]"
              >
                <span>Delete</span>
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
