<template>
  <q-page>
    <StatisticsTitle
    style="margin-bottom: 80px"
      class="title"
      icon="wallet"
      text="Темп роста (индекс роста) реальной среднемесячной заработной платы"
    >
      <p class="tw-text-md tw-mt-14">
        Уровень реальной среднемесячной заработной платы (в % к 2017 году)
      </p>
    </StatisticsTitle>
    <BoardsCarousel v-model="currentSlide" :slides="slides">
      <q-carousel-slide
        v-for="(slide, index) in slides"
        :key="slide"
        :name="slide"
      >
        <component :is="`ZP${index + 1}`" class="slide" />
      </q-carousel-slide>
    </BoardsCarousel>
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '101,7%',
          middle: { l: '55', r: '10' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import ZP1 from 'src/components/Boards/ZP/ZP1';
import ZP2 from 'src/components/Boards/ZP/ZP2';

import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {
      currentSlide: 'zp1',
      slides: ['zp1', 'zp2'],
    };
  },
  components: {
    StatisticsTitle,
    BoardsCarousel,
    HoneycombLarge,
    ZP1,
    ZP2,
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 155px;
}
</style>
