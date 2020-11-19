<template>
  <div
    :class="slice.slice_type"
    :style="`background-color:${slice.primary.backgroundcolor}`"
  >
    <div class="container">
      <div
        v-if="isImageExist(slice.primary.image)"
        class="lg:flex lg:items-center lg:justify-between flex-col lg:flex-row -mx-8 md:-mx-12 lg:mx-0"
        :class="childOrderReverse ? 'lg:flex-row-reverse' : false"
      >
        <div
          :class="childOrderReverse ? 'lg:pl-4' : 'lg:pr-4'"
          class="lg:w-1/2 w-full"
        >
          <prismic-image
            :field="slice.primary.image"
            class="object-cover h-32 lg:h-full w-full overflow-hidden"
          />
        </div>
        <div
          class="w-full lg:w-1/2 flex items-center justify-center mb-6 lg:mb-0"
        >
          <div class="m-auto relative z-20 w-full h-full">
            <prismic-rich-text
              :field="slice.primary.content"
              :class="[
                `${slice.slice_type}-content`,
                fontShade(slice.primary.fontcolor),
              ]"
              class="w-full"
            />
          </div>
        </div>
      </div>
      <div v-else class="max-w-2xl m-auto text-center py-16">
        <prismic-rich-text
          :field="slice.primary.content"
          :class="[
            `${slice.slice_type}-content`,
            fontShade(slice.primary.fontcolor),
          ]"
          class="w-full"
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
  methods: {
    isImageExist(imageObj) {
      if (imageObj && imageObj.length > 0) {
        return true;
      }
      return false;
    },
    fontShade(color, factor = 0) {
      if (color == "dark") {
        return `text-gray-${7 + factor}00`;
      }
      return `text-gray-100`;
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
      @apply text-xl;
      @apply font-extrabold;
      @apply tracking-tight;
    }
    /deep/ p {
      @apply mt-3;
    }
  }
}
</style>