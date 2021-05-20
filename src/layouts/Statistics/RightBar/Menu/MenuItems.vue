<template>
  <ul>
    <MenuItem v-for="(item, index) in items" :key="index" :item="item" />
  </ul>
</template>

<script>
import MenuItem from './MenuItem';

export default {
  props: {
    items: {
      required: true,
      type: Array,
    },
  },
  components: {
    MenuItem,
  },
};
</script>

<style>
</style>
