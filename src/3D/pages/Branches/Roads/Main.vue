<template>
  <q-page class="main" :style="bg">
    <MapSelect
      v-bind="districtName ? { label: districtName } : {}"
      style="margin-bottom: 73px"
    />
    <div class="tw-flex tw-items-start tw-w-full">
      <BoardRoad style="margin-right: 139px" v-bind="tableData" />
      <div v-if="isBash">
        <Map
          :districtsBranch="segmentLevel"
          :to="{ name: '3D.branches.roads' }"
        />
        <BranchesLevels />
      </div>
    </div>
    <BranchesTypes v-if="isBash" :types="types" v-model="selectedSegment" />
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Map from 'src/3D/components/Map/MapCover';
import RoadData from 'src/3D/road.json';
import BoardRoad from 'src/3D/components/Boards/BoardRoad';
import MapSelect from 'src/3D/components/MapSelect';
import BranchesTypes from 'src/3D/components/Branches/BranchesTypes';
import BranchesLevels from 'src/3D/components/Branches/BranchesLevels';

export default {
  props: {
    id: {
      required: true,
      type: [String, Number],
    },
  },
  data() {
    return {
      selectedSegment: 'defects',
      types: [
        {
          label: 'Дефекты: асфальтобетон',
          value: 'defects',
        },
        {
          label: 'Выполненные работы: асфальтобетон',
          value: 'complete',
        },
      ],
    };
  },
  computed: {
    ...mapGetters('_3D/districts', ['mapDistricts']),
    roadMap() {
      return RoadData.road.reduce((acc, item) => {
        acc[item.ID] = item;
        return acc;
      }, {});
    },
    bg() {
      if (this.id === 'bash') {
        return { 'background-image': `url('/images/3D/main-map.jpg') ` };
      } else {
        return {
          'background-image': `url(/images/3D/districts-bg/${this.district.City_icon}.png)`,
        };
      }
    },
    isBash() {
      return this.id === 'bash';
    },
    district() {
      if (this.id === 'bash') return {};
      return this.mapDistricts[this.id];
    },
    districtName() {
      if (this.id === 'bash') return null;
      return this.district.Municipal_districts;
    },
    tableData() {
      if (this.id === 'bash') {
        return {
          roadLength: {
            color: 'positive',
            value: '48078',
          },
          beton: {
            color: 'positive',
            value: '57.91%',
          },
          roadType: {
            color: 'negative',
            value: '42.09%',
          },
          roadBroke: {
            color: 'positive',
            value: '4.38%',
          },
          roadBrokeDone: {
            color: 'negative',
            value: '58.15%',
          },
          diagram: {
            values: [57, 43],
          },
        };
      } else {
        const {
          Road_length_km = '-',
          Asphalt_percent = '-',
          S_defects_asphalt_m2 = '-',
          Part_defects_asphalt_percent = '-',
          Amount_of_works_asphalt_percent = '-',
        } = this.roadMap[this.id];

        return {
          roadLength: {
            color: 'positive',
            value: this.replaceCommas(`${Road_length_km}`),
          },
          beton: {
            color: 'positive',
            value: this.replaceCommas(`${Asphalt_percent}%`),
          },
          roadType: {
            color: 'negative',
            value: this.replaceCommas(`${S_defects_asphalt_m2}%`),
          },
          roadBroke: {
            color: 'positive',
            value: this.replaceCommas(`${Part_defects_asphalt_percent}%`),
          },
          roadBrokeDone: {
            color: 'negative',
            value: this.replaceCommas(`${Amount_of_works_asphalt_percent}%`),
          },
          diagram: {
            values: [57, 43],
          },
        };
      }
    },
    segmentLevel() {
      const colors = {
        g: 'max',
        y: 'mid',
        r: 'min',
      };
      const segmentsFields = {
        defects: 'Part_defects_asphalt_percent',
        complete: 'Amount_of_works_asphalt_percent',
      };

      return RoadData.road.reduce((acc, item) => {
        acc[item.ID] = {
          id: item.ID,
          level: colors[item[segmentsFields[this.selectedSegment] + '_color']],
          value: item[segmentsFields[this.selectedSegment]],
        };

        return acc;
      }, {});
    },
  },
  methods: {
    replaceCommas(value) {
      return value.replace(/,/g, '');
    },
  },
  components: {
    Map,
    BoardRoad,
    MapSelect,
    BranchesTypes,
    BranchesLevels,
  },
};
</script>

<style scoped>
.main {
  padding-top: 90px;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;
}
</style>
