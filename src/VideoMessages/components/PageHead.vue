<template>
  <h1 class="h1" :class="{ 'tw-uppercase': uppercase }">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  props: {
    uppercase: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.h1 {
  font-size: 65px;
  @apply tw-font-bold;
}
</style>
