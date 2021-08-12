<template>
  <q-page>
    <StatisticsTitle
      class="title"
      icon="zhl"
      text="Количество семей, улучшивших жилищные условия"
    />
    <BoardsCarousel v-model="currentSlide" :slides="slides">
      <q-carousel-slide
        v-for="(slide, index) in slides"
        :key="slide"
        :name="slide"
      >
        <component :is="`Zhl${index + 1}`" class="slide" />
      </q-carousel-slide>
    </BoardsCarousel>
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '112,25',
          middle: { l: '7', r: '2' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Zhl1 from 'src/components/Boards/Zhl/Zhl1';
import Zhl2 from 'src/components/Boards/Zhl/Zhl2';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import BoardsCarousel from 'src/components/BoardsCarousel';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';

export default {
  data() {
    return {
      currentSlide: 'Zhl1',
      slides: ['Zhl1', 'Zhl2'],
    };
  },
  components: {
    Zhl1,
    Zhl2,
    StatisticsTitle,
    BoardsCarousel,
    HoneycombLarge,
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 0px;
}
</style>
