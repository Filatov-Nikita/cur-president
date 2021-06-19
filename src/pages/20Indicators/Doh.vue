<template>
  <q-page>
    <StatisticsTitle
      class="title"
      icon="doh"
      text="Темп роста реального среднедушевого денежного дохода населения"
    />
    <component :is="`Doh`" class="slide" />
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '94,9%',
          middle: { l: '79', r: '12' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Doh from 'src/components/Boards/Doh';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {};
  },
  components: {
    Doh,
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
