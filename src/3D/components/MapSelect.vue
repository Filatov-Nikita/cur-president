<template>
  <a @click.prevent="push" class="select">
    <span>{{ label ? label : 'Выбрать район' }}</span>
  </a>
</template>

<script>
export default {
  props: {
    label: {
      default: undefined,
      type: String,
    },
  },
  methods: {
    push() {
      const { name, params, query } = this.$route;
      this.$router.push({ name: '3D.map-items' });
      this.$store.commit('_3D/setFrom', { name, params, query });
    },
  },
};
</script>

<style scoped>
.select {
  display: block;
  padding-left: 40px;
  padding-right: 30px;
  padding-top: 21px;
  padding-bottom: 21px;
  border: 1px solid #7c7c7c;
  background: #151b33;
  position: relative;
  max-width: 709px;
  @apply tw-text-sm;
}

.select::after {
  content: '';
  width: 38px;
  height: 16px;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  background: url(~assets/icons/map-select.svg);
}
</style>
