<template>
  <q-page>
    <StatisticsTitle
      class="title"
      icon="sport"
      text="Доля граждан, систематически занимающихся физической культурой и спортом"
    />
    <component :is="`Sport`" class="slide" />
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '48,54%',
          middle: { l: '-', r: '-' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Sport from 'src/components/Boards/Sport';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {};
  },
  components: {
    Sport,
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
