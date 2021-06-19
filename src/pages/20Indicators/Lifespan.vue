<template>
  <q-page>
    <StatisticsTitle
      class="title"
      icon="calendar"
      text="Продолжительность жизни"
    />
    <BoardsCarousel v-model="currentSlide" :slides="slides">
      <q-carousel-slide
        v-for="(slide, index) in slides"
        :key="slide"
        :name="slide"
      >
        <component :is="`Lifespan${index + 1}`" class="slide" />
      </q-carousel-slide>
    </BoardsCarousel>
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '70,4',
          subtitle: 'года',
          bottom: 'по состоянию на 01.01.2021г.',
          middle: { l: '49', r: '11' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Lifespan1 from 'src/components/Boards/Lifespan/Lifespan1';
import Lifespan2 from 'src/components/Boards/Lifespan/Lifespan2';
import Lifespan3 from 'src/components/Boards/Lifespan/Lifespan3';
import Lifespan4 from 'src/components/Boards/Lifespan/Lifespan4';
import Lifespan5 from 'src/components/Boards/Lifespan/Lifespan5';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {
      currentSlide: 'lifespan1',
      slides: ['lifespan1', 'lifespan2', 'lifespan3', 'lifespan4', 'lifespan5'],
    };
  },
  components: {
    Lifespan1,
    Lifespan2,
    Lifespan3,
    Lifespan4,
    Lifespan5,
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
