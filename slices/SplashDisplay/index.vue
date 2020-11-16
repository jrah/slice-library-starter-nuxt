<template>
  <div :class="slice.slice_type">
    <div class="lg:grid lg:grid-cols-2">
      <prismic-rich-text :field="slice.primary.content" :class="`${slice.slice_type}-content`" class="self-center pb-12 lg:pb-0 lg:pr-12"/>
      <prismic-image v-if="slice.primary.image" :field="slice.primary.image" />
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
<style lang="scss" scoped>
.splash_display {
  &-content {
    /deep/ h3 {
      @apply text-4xl;
      @apply font-extrabold;
      @apply tracking-tight;
      @apply text-gray-800;
    }
  }
}
</style>