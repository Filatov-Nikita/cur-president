<template>
  <ul :class="{ 'menu-scroll': menuScroll }">
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
  computed: {
    menuScroll() {
      return [
        '/tw/nas',
        '/tw/lifespan',
        '/tw/zp',
        '/tw/vlast-dov',
        '/tw/bed',
        '/tw/bis',
        '/tw/doh',
        '/tw/dor',
        '/tw/edu',
        '/tw/gar',
        '/tw/gor',
        '/tw/inv',
        '/tw/kul',
        '/tw/okr',
        '/tw/sport',
        '/tw/str',
        '/tw/vol',
        '/tw/zhl',
        '/tw/tal',
        '/tw/cif',
      ].includes(this.$route.path);
    },
  },
  components: {
    MenuItem,
  },
};
</script>

<style scoped>
.menu-scroll {
  height: 700px;
  overflow-x: hidden;
}

.menu-scroll::-webkit-scrollbar {
  width: 4px;
  background-color: #fff;
}

.menu-scroll::-webkit-scrollbar-thumb {
  background-color: #01f859;
}
</style>
