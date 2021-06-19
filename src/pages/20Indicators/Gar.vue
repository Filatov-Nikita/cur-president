<template>
  <q-page>
    <StatisticsTitle
      class="title"
      icon="gar"
      text="Условия для воспитания гармонично развитой и социально ответственной личности"
    />
    <component :is="`Gar`" class="slide" />
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '100%',
          middle: { l: '-', r: '-' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Gar from 'src/components/Boards/Gar';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {};
  },
  components: {
    Gar,
    StatisticsTitle,
    BoardsCarousel,
    HoneycombLarge,
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 162px;
}
</style>
