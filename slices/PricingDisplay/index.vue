<template>
  <div class="slice bg-gray-100" :class="slice.slice_type">
    <prismic-rich-text
      :field="slice.primary.title"
      class="title text-center text-4xl font-extrabold tracking-tight text-gray-800"
    />
    <prismic-rich-text
      :field="slice.primary.subheading"
      class="subheading mt-3 text-center max-w-5xl mx-auto leading-7 text-gray-700"
    />
    <div class="relative bg-white px-3">
      <div class="absolute inset-0 h-64 bg-gray-100"></div>
      <div
        class="mt-12 pb-12 lg:grid space-y-3 lg:space-y-0 lg:grid-cols-3 lg:gap-8 relative max-w-md lg:max-w-4xl mx-auto overflow-hidden"
      >
        <div
          v-for="(item, i) in slice.items"
          :key="i"
          class="rounded-lg shadow-lg"
        >
          <div class="bg-white pt-6 px-6">
            <prismic-rich-text
              :field="item.heading"
              class="text-xs uppercase font-bold text-center max-w-4xl mx-auto leading-7 text-gray-700"
            />
            <prismic-rich-text
              :field="item.subheading"
              :htmlSerializer="pricingHtmlSerializer"
              class="subheading mt-3 text-center max-w-4xl mx-auto leading-7 text-gray-700"
            />
          </div>
          <ul class="bg-white pb-6 pt-3 px-6">
            <li
              v-for="(tick, j) in item.list"
              :key="j"
              class="flex items-center"
            >
              <svg
                class="h-8 w-8 text-green-500 fill-current"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                />
              </svg>
              <span class="py-3 text-gray-700">{{ tick.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import prismicDOM from "prismic-dom";

const Elements = prismicDOM.RichText.Elements;

const pricingHtmlSerializer = function (type, element, content, children) {
  // Add a class to paragraph elements
  // console.log(1,type,2, element.text, 3, content, 4, children)
  if (type === Elements.paragraph) {
    if(element.text.includes("*/")) {
    const divideText = element.text.split("*/");
    console.log(divideText[0])
    return `<div><span class="text-3xl mb-6 block">${divideText[0]}</span> ${divideText[1]}</div>`;
    }
    return `<p class="no-special">${children.join("")}</p>`;
  }

  // Return null to stick with the default behavior for everything else
  return null;
};

export default {
  data() {
    return {
      pricingHtmlSerializer,
    };
  },
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
