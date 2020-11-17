<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/utils/mixins";

.container {
  @apply px-8;
  @include mq(sm) {
    @apply px-24;
  }
  @extend %mwc;
}
</style>
