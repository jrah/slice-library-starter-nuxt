<template>
  <div :class="slice.slice_type">
    <div class="container">
      <div
        class="sm:flex sm:items-center sm:justify-between"
        :class="childOrderReverse ? 'flex-row-reverse' : false"
      >
        <prismic-rich-text
          :field="slice.primary.content"
          :class="`${slice.slice_type}-content`"
          class="sm:w-1/2 w-full"
        />
        <div
          :class="childOrderReverse ? 'sm:pr-4' : 'sm:pl-4'"
          class="sm:w-1/2 w-full"
        >
          <prismic-image
            v-if="slice.primary.image"
            :field="slice.primary.image"
          />
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
  computed: {
    childOrderReverse() {
      if (this.slice.primary.direction === "default") {
        return false;
      }
      return true;
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
    /deep/ p {
      @apply mt-3;
      @apply text-gray-700;
    }
  }
}
</style>