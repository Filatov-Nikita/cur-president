<template>
  <q-page class="main">
    <MapSelect
      v-bind="districtName ? { label: districtName } : {}"
      style="margin-bottom: 53px"
    />
    <BoardBuildingObject style="margin-bottom: 50px" :object="object" />
    <button class="back" @click="$router.back()">Назад к данным</button>
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
        address = 'Данных нет',
        s = 'Данных нет',
        cost = 'Данных нет',
        foto: photo = '',
        date_start: dateFrom = 'Данных нет',
        date_fin: dateTo = 'Данных нет',
        general_contractor: generalContractor = 'Данных нет',
        client = 'Данных нет',
        name = 'Данных нет',
        project = 'Данных нет',
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
