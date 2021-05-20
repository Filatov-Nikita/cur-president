<template>
  <q-page>
    <StatisticsTitle class="title" icon="people" text="Численность населения" />
    <BoardsCarousel v-model="currentSlide" :slides="slides">
      <q-carousel-slide
        v-for="(slide, index) in slides"
        :key="slide"
        :name="slide"
      >
        <component :is="`Nas${index + 1}`" class="slide" />
      </q-carousel-slide>
    </BoardsCarousel>
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '4 013 786',
          subtitle: 'человек',
          bottom: 'по состоянию на 01.01.2021г.',
          middle: { l: '7', r: '1' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Nas1 from 'src/components/Boards/Nas/Nas1';
import Nas2 from 'src/components/Boards/Nas/Nas2';
import Nas3 from 'src/components/Boards/Nas/Nas3';
import Nas4 from 'src/components/Boards/Nas/Nas4';
import Nas5 from 'src/components/Boards/Nas/Nas5';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {
      currentSlide: 'nas1',
      slides: ['nas1', 'nas2', 'nas3', 'nas4', 'nas5'],
    };
  },
  components: {
    Nas1,
    Nas2,
    Nas3,
    Nas4,
    Nas5,
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
