<template>
  <q-page>
    <StatisticsTitle
      class="title"
      icon="tal"
      text="Поддержка молодых талантов"
    />
    <!-- <StatisticsEmptyData /> -->
    <component :is="`Tal`" class="slide" />
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '27,45%',
          middle: { l: '-', r: '-' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import Tal from 'src/components/Boards/Tal';
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import StatisticsEmptyData from 'src/components/Statistics/StatisticsEmptyData';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';
export default {
  components: {
    StatisticsTitle,
    StatisticsEmptyData,
    HoneycombLarge,
    Tal,
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 90px;
}
</style>
