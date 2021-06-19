<template>
  <q-page>
    <StatisticsTitle class="title" icon="cif" text="Цифровая зрелость региональных органов власти" />
    <StatisticsEmptyData />
    <portal to="hc-large">
      <HoneycombLarge
        v-bind="{
          number: '--%',
          middle: { l: '--', r: '--' },
        }"
      />
    </portal>
  </q-page>
</template>

<script>
import StatisticsTitle from 'src/components/Statistics/StatisticsTitle';
import StatisticsEmptyData from 'src/components/Statistics/StatisticsEmptyData';
import HoneycombLarge from 'src/components/Honeycomb/HoneycombLarge';
export default {
  components: {
    StatisticsTitle,
    StatisticsEmptyData,
    HoneycombLarge,
  },
};
</script>

<style>
</style>
