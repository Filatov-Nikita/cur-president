<template>
  <div
    class="separator"
    :style="{
      'border-bottom-width': stroke + 'px',
      opacity: opacity,
    }"
  ></div>
</template>

<script>
export default {
  props: {
    stroke: {
      default: '1',
      type: String,
    },
    opacity: {
      default: '0.5',
      type: String,
    },
  },
};
</script>

<style scoped>
.separator {
  border-bottom-style: solid;
  border-bottom-color: theme('colors.white');
  opacity: 0.5;
  @apply tw-mx-auto;
}
</style>
