<template>
  <button
    type="button"
    class="burger bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    id="main-menu"
    aria-haspopup="true"
    :class="{ 'active': isBurgerActive }"
    @click.prevent="toggle"
  >
    <span class="sr-only">Open main menu</span>
    <!-- Heroicon name: menu -->
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
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
</template>

<script>
import { store, mutations } from "~/store/index.js";
export default {
  methods: {
    toggle() {
      mutations.toggleNav();
    },
  },
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    },
  },
};
</script>

<style>
</style>