<template>
  <q-page>
    <StatisticsTitle
      class="title"
      icon="gor"
      text="Качество городской среды"
    />
    <component :is="`Gor`" class="slide" />
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '184',
          middle: { l: '-', r: '-' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Gor from 'src/components/Boards/Gor';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {};
  },
  components: {
    Gor,
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
