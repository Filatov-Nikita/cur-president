<template>
  <div class="tw-flex tw-items-center">
    <div class="legend" :style="styles">
      {{ value }}
    </div>
    <p class="name">{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      require: true,
      type: String,
    },
    index: {
      require: true,
      type: Number,
    },
    name: {
      require: true,
      type: String,
    },
  },
  created() {
    this.colors = [
      '#0FDF49',
      '#07C18A',
      '#0F6FDF',
      '#0395FF',
      '#DF410F',
      '#DFD70F',
      '#00952A',
      '#AA007A',
      '#F85992',
      '#009B76',
    ];
  },
  computed: {
    styles() {
      return {
        background: this.colors[this.index],
      };
    },
  },
};
</script>

<style scoped>
.legend {
  width: 70px;
  height: 37px;
  color: theme('colors.white');
  font-size: 20px;
  line-height: 37px;
  margin-right: 24px;
  @apply tw-font-bold tw-text-center;
}

.name {
  font-size: 15px;
  @apply tw-text-white
}
</style>
