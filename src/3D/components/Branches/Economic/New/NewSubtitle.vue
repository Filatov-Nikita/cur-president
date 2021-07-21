<template>
  <p class="subtitle">{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.subtitle {
  font-size: 48px;
  line-height: 48px;
  @apply tw-font-bold;
}
</style>
