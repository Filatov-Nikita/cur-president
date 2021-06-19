<template>
  <div :class="classes" class="row">
    <div class="col" v-for="col in cols" :key="col" :class="cellClasses">
      <slot :name="`cell${col}`" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cols: {
      default: 1,
      type: Number,
    },
  },
  computed: {
    cellClasses() {
      return `tw-w-1/${this.cols}`;
    },
    classes() {
      if (this.cols === 1) return '';
      return ['tw-flex'];
    },
  },
};
</script>

<style scoped>
.col {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
.col + .col {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
}
</style>
