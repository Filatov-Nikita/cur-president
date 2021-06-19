<template>
  <ul>
    <li v-for="(legend, index) in legends" :key="index" class="legend">
      <div class="value" :style="{ background: colors[index] }">
        {{ legend.value }}
      </div>
      <div class="label">{{ legend.label }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    legends: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      colors: ['#0FDF49', '#07C18A', '#0F6FDF', '#0395FF'],
    };
  },
};
</script>

<style scoped>
.legend + .legend {
  margin-top: 24px;
}

.value {
  min-width: 81px;
  height: 81px;
  line-height: 81px;
  font-size: 47px;
  margin-right: 36px;
  @apply tw-font-bold tw-text-center;
}

.legend {
  @apply tw-flex tw-items-center;
}

.label {
  font-size: 23px;
}
</style>
