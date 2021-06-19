<template>
  <q-page>
    <StatisticsTitle
      class="title"
      icon="vol"
      text="Доля граждан, занимающихся добровольческой (волонтерской) деятельностью"
    />
    <component :is="`Vol`" class="slide" />
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '17 754',
          middle: { l: '-', r: '-' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Vol from 'src/components/Boards/Vol';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {};
  },
  components: {
    Vol,
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
