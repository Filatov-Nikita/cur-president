<template>
  <q-footer class="footer">
    <Ticker />
    <div class="menu"><BottomMenuItems :items="items" /> <DateDysplay /></div>
  </q-footer>
</template>

<script>
import BottomMenuItems from 'src/3D/components/TheBottomMenu/BottomMenuItems';
import DateDysplay from 'src/components/DateDysplay';
import Ticker from 'src/3D/components/Ticker';

export default {
  data() {
    return {
      items: [
        { label: 'Text', icon: 'garbage' },
        { label: 'Cтроительство', icon: 'building', active: true, to: {name: '3D.map-location.branch'} },
        { label: 'Text', icon: 'road' },
        { label: 'Text', icon: 'cow' },
        { label: 'Text', icon: 'document' },
        { label: 'Text', icon: 'bank' },
        { label: 'Text', icon: 'health' },
        { label: 'Text', icon: 'wallet' },
        { label: 'Text', icon: 'people' },
      ],
    };
  },
  components: {
    BottomMenuItems,
    DateDysplay,
    Ticker,
  },
};
</script>

<style scoped>
.footer {
  background: transparent;
}

.menu {
  background: #081136;
  padding-right: 170px;
  @apply tw-flex tw-justify-between;
}
</style>
