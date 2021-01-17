<template>
  <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
  <transition
    enter-active-class="duration-150 ease-out"
    enter-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="duration-100 ease-in"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right"
      v-show="isMenuOpen"
    >
      <div
        class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
      >
        <div class="px-5 pt-4 flex items-center justify-between">
          <div>
            <span class="sr-only">{{ "slice.primary.title" }}</span>
            <img
              src="~/assets/images/sample/svg/logo-123.svg"
              class="h-8 w-auto sm:h-12"
              alt="logo"
            />
          </div>
          <div class="-mr-2">
            <button
              type="button"
              @click="closeMenu"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Close main menu</span>
              <!-- Heroicon name: x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="main-menu"
        >
          <div class="px-2 pt-2 pb-3 space-y-1" role="none">
            <slot></slot>
          </div>
          <div role="none">
            <a
              href="#"
              class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
              role="menuitem"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { store, mutations } from "~/store/index.js";
export default {
  methods: {
    closeMenu: mutations.toggleNav,
  },
  computed: {
    isMenuOpen() {
      return store.isNavOpen;
    },
  },
  data() {
    return {
      list: ["Product", "Marketplace", "Features", "Company"],
      // isMenuOpen: true,
    };
  },
};
</script>

<style>
</style>