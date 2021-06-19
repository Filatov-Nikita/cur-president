<template>
  <q-page>
    <StatisticsTitle
      class="title"
      icon="dor"
      text="Доля дорожной сети в крупнейших городских агломерациях, соответствующая нормативам"
    />
    <component :is="`Dor`" class="slide" />
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '52,3%',
          middle: { l: '-', r: '-' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Dor from 'src/components/Boards/Dor';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {};
  },
  components: {
    Dor,
    StatisticsTitle,
    BoardsCarousel,
    HoneycombLarge,
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 80px;
}
</style>
