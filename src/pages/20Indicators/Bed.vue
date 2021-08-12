<template>
  <q-page>
    <StatisticsTitle class="title" icon="money" text="Уровень бедности" />
    <BoardsCarousel v-model="currentSlide" :slides="slides">
      <q-carousel-slide
        v-for="(slide, index) in slides"
        :key="slide"
        :name="slide"
      >
        <component :is="`Bed${index + 1}`" class="slide" />
      </q-carousel-slide>
    </BoardsCarousel>
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '11,7%',
          middle: { l: '-', r: '-' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Bed1 from 'src/components/Boards/Bed/Bed1';
import Bed2 from 'src/components/Boards/Bed/Bed2';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {
      currentSlide: 'Bed1',
      slides: ['Bed1', 'Bed2'],
    };
  },
  components: {
    Bed1,
    Bed2,
    StatisticsTitle,
    BoardsCarousel,
    HoneycombLarge,
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 155px;
}
</style>
