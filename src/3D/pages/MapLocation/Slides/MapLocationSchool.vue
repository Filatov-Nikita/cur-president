<template>
  <q-page class="main">
    <div style="margin-bottom: 93px" class="tw-flex tw-items-center tw-w-full">
      <MapSelect
        style="flex-basis: 709px; margin-right: 124px"
        label="Уфимский район"
      />
      <h1 style="flex-basis: 1156px; line-height: 100%" class="tw-text-md tw-font-semibold">
        Средняя школа на 640 учащихся, совмещенная с детским садом на 160 мест
      </h1>
    </div>
    <img :src="require('./icons/map-school-table.svg')" />
    <BackToData style="margin-top: 67px" />
  </q-page>
</template>

<script>
import MapSelect from 'src/3D/components/MapSelect';
import BackToData from 'src/3D/components/Buttons/BackToData';

export default {
  components: {
    MapSelect,
    BackToData,
  },
};
</script>

<style scoped>
.main {
  padding-top: 90px;
  padding-bottom: 40px;
}
</style>
