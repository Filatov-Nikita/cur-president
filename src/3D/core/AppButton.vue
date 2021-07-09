<template>
  <button
    class="app-button"
    v-bind="{ type }"
    :style="{ background: colors[color] }"
    v-on="$listeners"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      default: 'button',
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
    color: {
      default: 'dark-blue',
      type: String,
    },
  },
  created() {
    this.colors = {
      'dark-blue': '#005AE0',
      blue: '#169BD8',
    };
  },
};
</script>

<style scoped>
.app-button {
  display: inline-block;
  font-size: 30px;
  padding: 22px 40px;
  @apply tw-font-semibold tw-text-white;
}
</style>
