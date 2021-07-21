<template>
  <q-page>
    <StatisticsTitle
      class="title"
      icon="inv"
      text="Индекс роста объема инвестиций"
    />
    <component :is="`Inv`" class="slide" />
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '365,9',
          middle: { l: '-', r: '-' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Inv from 'src/components/Boards/Inv';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {};
  },
  components: {
    Inv,
    StatisticsTitle,
    BoardsCarousel,
    HoneycombLarge,
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 40px;
}
</style>
