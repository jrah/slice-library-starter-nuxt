<template>
  <div class="slice" :class="slice.slice_type">
    <prismic-rich-text
      :field="slice.primary.title"
      class="title text-center text-4xl font-extrabold tracking-tight text-gray-800"
    />
    <prismic-rich-text
      :field="slice.primary.subheading"
      class="subheading mt-3 text-center max-w-4xl mx-auto"
    />
    <div class="mt-6 flex">
      <div v-for="(item, i) in slice.items" :key="i" class="item">
        <prismic-rich-text :field="item.subheading" class="subheading" />
        <img :src="item.image.url" :alt="item.image.alt" />
        <prismic-rich-text
          :field="item.heading"
          :class="`${slice.slice_type}` - `${item.heading[0].type}`"
        />
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
};
</script>