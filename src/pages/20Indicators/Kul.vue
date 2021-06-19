<template>
  <q-page>
    <StatisticsTitle
      class="title"
      icon="kul"
      text="Число посещений культурных мероприятий"
    />
    <component :is="`Kul`" class="slide" />
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '26,254',
          middle: { l: '-', r: '-' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Kul from 'src/components/Boards/Kul';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {};
  },
  components: {
    Kul,
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
