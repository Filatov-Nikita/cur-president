<template>
  <q-page class="main">
    <MapSelect
      v-bind="districtName ? { label: districtName } : {}"
      style="margin-bottom: 73px"
    />
    <img :src="require('src/3D/transport.svg')" alt="" />
  </q-page>
</template>

<script>
import MapSelect from 'src/3D/components/MapSelect';
import { mapGetters } from 'vuex';

export default {
  props: {
    id: {
      required: true,
      type: [String, Number],
    },
  },
  computed: {
    ...mapGetters('_3D/districts', ['mapDistricts']),
    district() {
      if (this.id === 'bash') return {};
      return this.mapDistricts[this.id];
    },
    isBash() {
      return this.id === 'bash';
    },
    districtName() {
      if (this.id === 'bash') return null;
      return this.district.Municipal_districts;
    },
  },
  components: {
    MapSelect,
  },
};
</script>

<style scoped>
.main {
  padding-top: 90px;
  background: url('/images/3D/main-map.jpg') no-repeat;
  background-size: cover;
  padding-bottom: 50px;
}
</style>
