<template>
  <q-page class="main">
    <MapSelect
      v-bind="districtName ? { label: districtName } : {}"
      style="margin-bottom: 53px"
    />
    <BoardBuildingObject style="margin-bottom: 50px" :object="object" />
    <router-link
      class="back"
      :to="{
        name: '3D.branches.building.objects',
        params: { id: $route.params.id },
      }"
      >Назад к данным</router-link
    >
  </q-page>
</template>

<script>
import BoardBuildingObject from 'src/3D/components/Boards/BoardBuildingObject';
import BuildingRegionsData from './building-regions.json';
import MapSelect from 'src/3D/components/MapSelect';
import { mapGetters } from 'vuex';

export default {
  props: {
    object_id: {
      required: true,
      type: [String, Number],
    },
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
    object() {
      let data = BuildingRegionsData.regions.filter(
        (item) => this.id == item.ID && this.object_id == item.id
      )[0];
      if (!data) data = {};
      const {
        address = '-',
        s = '-',
        cost = '-',
        foto: photo = '',
        date_start: dateFrom = '-',
        date_fin_fact: dateTo = '-',
        general_contractor: generalContractor = '-',
        client = '-',
        name = '-',
        project = '-',
      } = data;

      return {
        address,
        s,
        cost,
        photo,
        dateFrom,
        dateTo,
        generalContractor,
        client,
        project,
        name,
      };
    },
  },
  components: {
    MapSelect,
    BoardBuildingObject,
  },
};
</script>

<style scoped>
.back {
  font-size: 35px;
}
.main {
  padding-top: 90px;
  padding-bottom: 10px;
}
</style>
