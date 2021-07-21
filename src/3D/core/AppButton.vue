<template>
  <button
    class="app-button"
    :class="`app-button-${size}`"
    v-bind="{ type }"
    :style="{ background: colors[color] }"
    v-on="$listeners"
  >
    <div v-if="icon" class="icon">
      <img :src="require('./icons/' + icon + '.svg')" alt="" />
    </div>
    <div :class="{ 'tw-inline-block tw-align-middle': !!icon }">
      {{ label }}
    </div>
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
    size: {
      default: 'md',
      type: String,
    },
    icon: {
      default: undefined,
      type: String,
    },
  },
  created() {
    this.colors = {
      'dark-blue': '#005AE0',
      'light-blue': '#2790D4',
      blue: '#169BD8',
    };
  },
};
</script>

<style scoped>
.app-button {
  @apply tw-font-semibold tw-text-white tw-inline-block;
}

.app-button-md {
  font-size: 30px;
  padding: 22px 40px;
}

.app-button-lg {
  font-size: 35px;
  padding: 39px 59px;
}

.icon {
  width: 52px;
  height: 52px;
  margin-right: 30px;
  @apply tw-inline-block tw-align-middle;
}
</style>
