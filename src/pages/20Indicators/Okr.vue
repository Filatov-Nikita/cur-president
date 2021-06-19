<template>
  <q-page>
    <StatisticsTitle
      class="title"
      icon="okr"
      text="Качество окружающей среды"
    />
    <BoardsCarousel height="1550px" v-model="currentSlide" :slides="slides">
      <q-carousel-slide
        v-for="(slide, index) in slides"
        :key="slide"
        :name="slide"
      >
        <component :is="`Okr${index + 1}`" class="slide" />
      </q-carousel-slide>
    </BoardsCarousel>
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '105,95%',
          middle: { l: '19', r: '5' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Okr1 from 'src/components/Boards/Okr/Okr1';
import Okr2 from 'src/components/Boards/Okr/Okr2';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {
      currentSlide: 'Okr1',
      slides: ['Okr1', 'Okr2'],
    };
  },
  components: {
    Okr1,
    Okr2,
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
