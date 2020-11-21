<template>
  <div class="slice" :class="slice.slice_type">
    <div class="container">
      <prismic-rich-text
        :field="slice.primary.title"
        class="title text-center text-4xl font-extrabold tracking-tight text-gray-800"
      />
      <prismic-rich-text
        :field="slice.primary.subheading"
        class="subheading mt-3 text-center max-w-4xl mx-auto leading-7 text-gray-700"
      />
      <div class="container mt-12 lg:grid lg:grid-cols-2 lg:gap-8">
        <div
          v-for="(item, i) in slice.items"
          :key="i"
          :class="isFirstInArray(i) ? 'mt-0' : 'mt-6 lg:mt-0'"
        >
          <img
            :src="item.image.url"
            :width="item.image.dimensions.width"
            :height="item.image.dimensions.height"
            :alt="item.image.alt"
          />
          <div class="mt-3">
            <prismic-rich-text
              :field="item.heading"
              class="font-sans text-lg leading-6 font-bold text-primary"
              :class="`${slice.slice_type}` - `${item.heading[0].type}`"
            />
            <prismic-rich-text
              :field="item.paragraph"
              class="mt-3 leading-6 text-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
  methods: {
    isFirstInArray(index) {
      if (index === 0) {
        return true;
      }
    },
  },
};
</script>