<template>
  <q-page>
    <StatisticsTitle
      class="title"
      icon="bis"
      text="Численность занятых в сфере малого и среднего предпринимательства"
    />
    <BoardsCarousel v-model="currentSlide" :slides="slides">
      <q-carousel-slide
        v-for="(slide, index) in slides"
        :key="slide"
        :name="slide"
      >
        <component :is="`Bis${index + 1}`" class="slide" />
      </q-carousel-slide>
    </BoardsCarousel>
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '472,59%',
          middle: { l: '12', r: '4' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Bis1 from 'src/components/Boards/Bis/Bis1';
import Bis2 from 'src/components/Boards/Bis/Bis2';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {
      currentSlide: 'Bis1',
      slides: ['Bis1', 'Bis2'],
    };
  },
  components: {
    Bis1,
    Bis2,
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
