<template>
  <q-page class="main">
    <MapSelect
      v-bind="districtName ? { label: districtName } : {}"
      style="margin-bottom: 53px"
    />
    <TableBuildingObjects :rows="rows" style="margin-bottom: 60px" />
    <router-link
      class="back"
      :to="{ name: '3D.branches.building', params: { id: $route.params.id } }"
      >Назад к данным</router-link
    >
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import MapSelect from 'src/3D/components/MapSelect';
import TableBuildingObjects from 'src/3D/components/Tables/TableBuildingObjects';
import BuildingRegionsData from './building-regions.json';

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
    districtName() {
      if (this.id === 'bash') return null;
      return this.district.Municipal_districts;
    },
    rows() {
      return BuildingRegionsData.regions
        .filter((item) => item.ID == this.id)
        .map((item) => {
          const {
            cost = '-',
            name = '-',
            general_contractor: generalContractor = '-',
            department = '-',
            percent_deviation: percentDeviation = '-',
            id: objectId
          } = item;
          return {
            cost,
            name,
            generalContractor,
            department,
            percentDeviation,
            objectId
          };
        });
    },
  },
  components: {
    MapSelect,
    TableBuildingObjects,
  },
};
</script>

<style scoped>
.main {
  padding-top: 90px;
  padding-bottom: 10px;
}

.back {
  font-size: 35px;
}
</style>
