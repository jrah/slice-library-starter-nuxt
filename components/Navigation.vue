<template>
  <div class="container">
    <div
      class="relative flex items-center justify-between sm:h-16 md:justify-center"
    >
      <div class="flex items-center flex-1">
        <nuxt-link
          to="/"
          class="flex items-center justify-between w-full md:w-auto"
        >
          <span class="sr-only">{{ "slice.primary.title" }}</span>
          <img
            src="~/assets/images/sample/svg/logo-123.svg"
            class="h-8 w-auto sm:h-12"
            alt="logo"
          />
        </nuxt-link>
        <div class="-mr-2 flex items-center md:hidden">
          <burger />
        </div>
        <div class="hidden space-x-10 md:flex md:ml-10">
          <nuxt-link
            v-for="(item, i) in links"
            :key="i"
            to="/"
            class="font-medium text-gray-500 hover:text-gray-700"
          >
            {{ item }}</nuxt-link
          >
        </div>
        <div
          class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
        >
          <div class="inline-flex rounded-md shadow">
            <nuxt-link
              to="/"
              class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded md text-indigo-600 bg-white hover:bg-gray-50"
            >
              Create account
            </nuxt-link>
          </div>
        </div>
        <mobile-menu>
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            role="menuitem"
            v-for="(item, i) in links"
            :key="i"
            >{{ item }}</a
          ></mobile-menu
        >
      </div>
    </div>
  </div>
</template>
<script>
import mobileMenu from "~/components/menu/MobileMenu.vue";
import burger from "~/components/menu/Burger.vue";

export default {
  data() {
    return {
      links: ["Products", "Earn", "Borrow"],
    };
  },
  components: {
    mobileMenu,
    burger,
  },
};
</script>
