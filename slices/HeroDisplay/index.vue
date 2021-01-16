<template>
  <section class="container flex">
    <div class="relative z-10 w-full sm:w-1/2 mt-32 sm:mt-0 lg:mt-2">
      <div class="max-w-lg">
        <prismic-rich-text
          :field="slice.primary.title"
          class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
        />
        <prismic-rich-text
          :field="slice.primary.richtext"
          class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
        />
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div
            v-for="(item, i) in slice.items"
            :key="i"
            class="rounded-md shadow"
          >
            <anchor
              :url="item.link"
              :class="buttonSpacing(i)"
              :text="item.linktext"
            />
          </div>
        </div>
      </div>
    </div>
    <img
      class="w-full sm:w-1/2 sm:mt-0"
      :src="slice.primary.image.url"
      :width="slice.primary.image.dimensions.width"
      :height="slice.primary.image.dimensions.height"
      :alt="slice.primary.image.alt"
    />
  </section>
</template>

<script>
import anchor from "~/components/Button.vue";

export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  components: {
    anchor,
  },
  methods: {
    buttonSpacing(index) {
      if (index === 0) {
      return false;
      }
      return `ml-2`;
    },
  },
};
</script>