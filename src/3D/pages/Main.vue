<template>
  <q-page class="main">
    <MapSelect style="margin-bottom: 93px" />
    <div class="tw-flex tw-items-start tw-w-full">
      <BoardMain style="margin-right: 139px" v-bind="mainData" />
      <Map navigation />
    </div>
  </q-page>
</template>

<script>
import BoardMain from 'src/3D/components/Boards/BoardMain';
import MapSelect from 'src/3D/components/MapSelect';
import Map from 'src/3D/components/Map/MapCover';
import DataRoad from 'src/3D/road.json';

export default {
  data() {
    return {
      mainData: {
        invest: {
          color: 'positive',
          value: '168 634 747',
          it: '+90%',
        },
        milk: {
          color: 'positive',
          value: '167 526',
          it: '+37%',
        },
        cow: {
          color: 'positive',
          value: '104 129',
        },
        born: {
          color: 'positive',
          value: '9 757',
          it: '+66%',
        },
        unwork: {
          color: 'positive',
          value: '3,5%',
          it: '+6,5%',
        },
        zp: {
          left: {
            color: 'negative',
            value: '34 154 ₽',
          },
          right: {
            color: 'positive',
            value: '35 069 ₽',
            it: '+2,81%',
          },
        },
      },
    };
  },
  computed: {
    distsBranchMap() {
      const colors = {
        g: 'max',
        y: 'mid',
        r: 'min',
      };
      return DataRoad.road.map((district) => {
        return {
          id: district.ID,
          level1: colors[district.Part_defects_asphalt_percent_color],
          value1: district.Part_defects_asphalt_percent,
          level2: colors[district.Amount_of_works_asphalt_percent_color],
          value2: district.Amount_of_works_asphalt_percent,
        };
      });
    },
    levels1() {
      return this.distsBranchMap.reduce((acc, item) => {
        acc[item.id] = {
          id: item.id,
          level: item.level1,
          value: item.value1,
        };
        return acc;
      }, {});
    },
    levels2() {
      return this.distsBranchMap.reduce((acc, item) => {
        acc[item.id] = {
          id: item.id,
          level: item.level2,
          value: item.value2,
        };
        return acc;
      }, {});
    },
  },
  components: {
    BoardMain,
    MapSelect,
    Map,
  },
};
</script>

<style scoped>
.main {
  padding-top: 90px;
  background: url('/images/3D/main-map.jpg') no-repeat;
  background-size: cover;
}
</style>
