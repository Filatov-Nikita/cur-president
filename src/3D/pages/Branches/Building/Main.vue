<template>
  <q-page class="main" :style="bg">
    <MapSelect
      v-bind="districtName ? { label: districtName } : {}"
      style="margin-bottom: 53px"
    />
    <div class="tw-flex tw-items-start tw-w-full">
      <BoardBuilding style="margin-right: 139px" v-bind="tableData" />
      <Map navigation v-if="isBash" :to="{ name: '3D.branches.building' }" />
      <div class="points" v-if="!isBash">
        <MapLocationPoint
          v-show="point.filterVal === filter || filter === 'all'"
          v-for="(point, index) in points"
          :key="index"
          v-bind="point"
        />
      </div>
      <ToTableLink
        v-if="!isBash"
        class="table-link"
        :to="{ name: '3D.branches.building.objects', params: { id } }"
        label="Список объектов строительства"
      />
      <div class="btn-groups" v-if="!isBash">
        <button
          v-ripple
          class="btn-item btn-item-positive"
          @click="changeFilter('1')"
          :class="filter === '1' ? 'btn-item-active' : ''"
        >
          <p>по плану</p>
        </button>
        <button
          v-ripple
          class="btn-item btn-item-warning"
          :class="filter === '2' ? 'btn-item-active' : ''"
          @click="changeFilter('2')"
        >
          <p>допустимое отклонение</p>
        </button>
        <button
          v-ripple
          class="btn-item btn-item-negative"
          @click="changeFilter('3')"
          :class="filter === '3' ? 'btn-item-active' : ''"
        >
          <p>с нарушением сроков</p>
        </button>
        <button
          v-ripple
          class="btn-item btn-item-neutral"
          @click="changeFilter('all')"
          :class="filter === 'all' ? 'btn-item-active' : ''"
        >
          <p>все объекты</p>
        </button>
      </div>
    </div>
  </q-page>
</template>

<script>
import Map from 'src/3D/components/Map/MapCover';
import BoardBuilding from 'src/3D/components/Boards/BoardBuilding';
import MapSelect from 'src/3D/components/MapSelect';
import { mapGetters } from 'vuex';
import BuildingData from 'src/3D/building.json';
import BuildingRegionsData from './building-regions.json';
import MapLocationPoint from 'src/3D/components/MapLocation/Points/MapLocationPoint';
import ToTableLink from 'src/3D/components/ToTableLink';

export default {
  props: {
    id: {
      required: true,
      type: [String, Number],
    },
  },
  data() {
    return {
      filter: 'all',
    };
  },
  methods: {
    changeFilter(value) {
      if (this.filter === value) return (this.filter = 'all');
      this.filter = value;
    },
    replaceCommas(value) {
      return value.replace(/,/g, '');
    },
  },
  computed: {
    ...mapGetters('_3D/districts', ['mapDistricts']),
    buildingMap() {
      return BuildingData.building.reduce((acc, item) => {
        acc[item.ID] = item;
        return acc;
      }, {});
    },
    // buildingRegionsMap() {
    //   return BuildingRegionsData.regions.reduce((acc, item) => {
    //     acc[item.ID] = item;
    //     return acc;
    //   }, {});
    // },
    points() {
      if (this.isBash) return [];
      const typesColors = {
        красный: 'negative',
        зеленый: 'positive',
        желтый: 'warning',
      };
      const filterColors = {
        красный: '3',
        зеленый: '1',
        желтый: '2',
      };
      return BuildingRegionsData.regions
        .filter((item) => item.ID == this.id)
        .map((item) => {
          return {
            type: typesColors[item.color] || 'positive',
            value: item.percent_deviation || '0',
            title: item.name || '-',
            photo: item.foto || '',
            left: item.x || '0',
            top: item.y || '0',
            filterVal: filterColors[item.color],
          };
        });
    },
    tableData() {
      if (this.isBash) {
        return {
          diagram: {
            values: [28, 7, 9, 56],
            value: 266,
            legends: [
              {
                value: 28,
                label: 'Образование',
              },
              {
                value: 7,
                label: 'Культура',
              },
              {
                value: 9,
                label: 'Спорт',
              },
              {
                value: 56,
                label: 'Не определено',
              },
            ],
          },
          got: {
            color: 'positive',
            value: '36790400000 ₽',
          },
          contract: {
            color: 'negative',
            value: '31370270000 ₽',
          },
          done: {
            color: 'positive',
            value: '24024470000 ₽',
          },
        };
      } else {
        const {
          selected_by_district_rub = '-',
          contracted_by_district_rub = '-',
          executed_by_district_rub = '-',
          education_percent = -1,
          total_number = '-',
          culture_percent = -1,
          not_defined_percent = -1,
          sport_percent = -1,
        } = this.buildingMap[this.id];

        return {
          diagram: {
            values: [
              education_percent,
              culture_percent,
              sport_percent,
              not_defined_percent,
            ]
              .map((item) => (item === -1 ? 0 : item))
              .map((item) => Number(item)),
            value: total_number,
            legends: [
              {
                value: education_percent === -1 ? '-' : education_percent,
                label: 'Образование',
              },
              {
                value: culture_percent === -1 ? '-' : culture_percent,
                label: 'Культура',
              },
              {
                value: sport_percent === -1 ? '-' : sport_percent,
                label: 'Спорт',
              },
              {
                value: not_defined_percent === -1 ? '-' : not_defined_percent,
                label: 'Не определено',
              },
            ],
          },
          got: {
            color: 'positive',
            value: this.replaceCommas(selected_by_district_rub) + ' ₽',
          },
          contract: {
            color: 'negative',
            value: this.replaceCommas(contracted_by_district_rub) + ' ₽',
          },
          done: {
            color: 'positive',
            value: this.replaceCommas(executed_by_district_rub) + ' ₽',
          },
        };
      }
    },
    district() {
      if (this.id === 'bash') return {};
      return this.mapDistricts[this.id];
    },
    bg() {
      if (this.id === 'bash') {
        return { 'background-image': `url('/images/3D/main-map.jpg')` };
      } else {
        const icon = Number(this.id) < 10 ? `0${this.id}` : `${this.id}`;
        return {
          'background-image': `url('/images/3D/3d-regions/${icon}.png')`,
        };
      }
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
    Map,
    BoardBuilding,
    MapSelect,
    MapLocationPoint,
    ToTableLink,
  },
};
</script>

<style scoped>
.main {
  padding-top: 90px;
  padding-bottom: 10px;
  background-repeat: no-repeat;
  background-size: cover;
}

.btn-groups {
  position: absolute;
  bottom: 107px;
  left: 1502px;
  max-width: 1256px;
  width: 100%;
  @apply tw-flex;
}

.btn-item {
  position: relative;
  text-align: left;
  font-size: 22px;
  background: rgba(0, 7, 47, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  padding: 14px 34px;
  line-height: 100%;
  @apply tw-w-1/3 tw-flex tw-items-center;
}

.btn-item p {
  flex-basis: 210px;
  opacity: 0.5;
}

.btn-item-active p {
  opacity: 1 !important;
}

.btn-item-active {
  color: #081136 !important;
  opacity: 1 !important;
  background: #ffffff !important;
}

.btn-item::before {
  opacity: 1;
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 32px;
}

.btn-item-positive::before {
  background: #01f859;
}

.btn-item-warning::before {
  background: #faff00;
}

.btn-item-negative::before {
  background: #ff4d00;
}

.btn-item-neutral::before {
  background: #081136;
}

.table-link {
  position: absolute;
  bottom: 109px;
  right: 96px;
  z-index: 111;
}
</style>
