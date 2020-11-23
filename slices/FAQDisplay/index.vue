<template>
  <div class="container">
    <prismic-rich-text
      :field="slice.primary.title"
        class="text-center text-4xl font-extrabold tracking-tight text-gray-800"
    />
    <div class=" container mt-12 flex flex-wrap">
      <div v-for="(item, i) in slice.items" :key="i" class="w-1/3 p-4">
        <prismic-rich-text
          :field="item.heading"
          class="font-sans text-lg leading-6 font-bold text-primary"
        />
        <prismic-rich-text
          :field="item.paragraph"
          class="mt-3 leading-6 text-gray-700"
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

