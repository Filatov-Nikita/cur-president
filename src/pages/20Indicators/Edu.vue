<template>
  <q-page>
    <StatisticsTitle
      class="title"
      icon="book"
      text="Уровень образования"
    />
    <component :is="`Edu`" class="slide" />
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '64,91%',
          middle: { l: '34', r: '4' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Edu from 'src/components/Boards/Edu';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {};
  },
  components: {
    Edu,
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
