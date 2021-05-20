<template>
  <ul class="tw-flex">
    <BottomMenuItem v-for="(item, index) in items" :key="index" :item="item" />
  </ul>
</template>

<script>
import BottomMenuItem from './BottomMenuItem';

export default {
  props: {
    items: {
      required: true,
      type: Array,
    },
  },
  components: {
    BottomMenuItem,
  },
};
</script>

<style>
</style>
