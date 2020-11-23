<template>
  <div class="slice" :class="slice.slice_type">
    <div class="container">
      <div
        class="flex flex-col-reverse sm:flex-row relative max-w-6xl mx-auto shadow-md rounded-md"
      >
        <button
          :disabled="this.maxPrevElementArray"
          class="cursor-pointer focus:outline-none w-12 h-12 absolute inset-y-1/2 left-0 bg-primary text-white rounded-full -ml-6 -mt-6"
          @click="showPrevElement()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div class="w-full sm:w-1/2 flex">
          <prismic-rich-text
            :class="`${slice.slice_type}-content`"
            class="self-center pl-12"
            :field="currentElement.content"
            :htmlSerializer="htmlSerializer"
          ></prismic-rich-text>
        </div>
        <div class="w-full sm:w-1/2">
          <prismic-image
            class="object-cover h-96 w-96 ml-auto rounded-r-md"
            :field="currentElement.image"
            :height="currentElement.image.dimensions.height"
            :width="currentElement.image.dimensions.width"
          ></prismic-image>
        </div>
        <button
          :disabled="this.maxNextElementArray"
          class="cursor-pointer focus:outline-none w-12 h-12 absolute inset-y-1/2 right-0 bg-primary rounded-full -mr-6 -mt-6 shadow-md text-white"
          @click="showNextElement()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import prismicDOM from "prismic-dom";

const Elements = prismicDOM.RichText.Elements;

const htmlSerializer = function (type, element, content, children) {
  // Add a class to paragraph elements
  // console.log(1,type,2, element.text, 3, content, 4, children)
  if (type === Elements.paragraph) {
    if (element.text.includes("/a*")) {
      const divideText = element.text.split("/a*");
      return `<span class="block font-bold mt-6">${divideText[1]}</span>`;
    }
    if (element.text.includes("/j*")) {
      const divideText = element.text.split("/j*");
      return `<span class="block text-gray-500">${divideText[1]}</span>`;
    }
    return `<p class="no-special">${children.join("")}</p>`;
  }

  // Return null to stick with the default behavior for everything else
  return null;
};

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
  data() {
    return {
      currentElementIndex: 0,
      htmlSerializer,
    };
  },
  computed: {
    currentElement() {
      return this.slice.items[this.currentElementIndex];
    },
    maxPrevElementArray() {
      return this.currentElementIndex === 0;
    },
    maxNextElementArray() {
      return this.currentElementIndex === this.slice.items.length - 1;
    },
  },
  methods: {
    showNextElement() {
      this.currentElementIndex++;
    },
    showPrevElement() {
      this.currentElementIndex--;
    },
  },
};
</script>

<style lang="scss">
.carousel_display {
  :disabled {
    @apply opacity-25;
  }
  /deep/ h3 {
    @apply text-2xl;
    @apply font-extrabold;
    @apply tracking-tight;
    @apply mb-2;
  }
}
</style>