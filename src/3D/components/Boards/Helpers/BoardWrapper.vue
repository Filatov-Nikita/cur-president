<template>
  <div :style="{ 'max-width': wMax }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    wMax: {
      default: '100%',
      type: String,
    },
  },
};
</script>

<style>
</style>
