<template>
  <prismic-link
    class="font-bold py-2 px-4 rounded flex justify-center"
    :field="url"
    :class="variantDisplay"
    >{{ text }}</prismic-link
  >
</template>

<script>
export default {
  props: {
    url: {
      type: Object,
      required: true,
      default: () => {},
    },
    text: {
      type: String,
      required: true,
      default: "",
    },
    variant: {
      type: String,
      required: true,
      default: "primary",
    },
  },
  computed: {
    variantDisplay() {
      if (this.variant != "primary") {
        return "bg-secondary text-gray-700";
      }
      return "bg-primary text-gray-100";
    },
  },
};
</script>

<style>
</style>