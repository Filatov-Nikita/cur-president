<template>
  <q-page class="main">
    <MapSelect style="margin-bottom: 93px" />
    <MainTable />
    <MainMapEvent class="event" />
  </q-page>
</template>

<script>
import MainTable from 'src/3D/components/Main/MainTable';
import MapSelect from 'src/3D/components/MapSelect';
import MainMapEvent from 'src/3D/components/Main/MainMapEvent';

export default {
  components: {
    MainTable,
    MapSelect,
    MainMapEvent,
  },
};
</script>

<style scoped>
.main {
  padding-top: 90px;
  background: url('/images/3D/main-map.jpg') no-repeat;
  background-size: cover;
}

.event {
  position: absolute;
  left: 1425px;
  bottom: 963px;
}
</style>
