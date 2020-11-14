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
     <div class="mt-6 flex justify-around flex-wrap -mx-3">
      <div v-for="(item, i) in slice.items" :key="i" class="flex-1 mx-3">
        <img
          :src="item.image.url"
          :width="item.image.dimensions.width"
          :height="item.image.dimensions.height"
          :alt="item.image.alt"
        />
        <div class="mt-3">
          <prismic-rich-text
            :field="item.heading"
            class="text-lg leading-6 font-medium"
            :class="`${slice.slice_type}` - `${item.heading[0].type}`"
          />
          <prismic-rich-text :field="item.paragraph" class="mt-3" />
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
};
</script>

<style lang="css">
.container {
  @apply max-w-4xl;
  @apply mx-auto;
}
</style>