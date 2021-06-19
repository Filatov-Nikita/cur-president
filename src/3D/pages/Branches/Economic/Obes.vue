<template>
  <q-page class="main" :style="bg">
    <MapSelect
      v-bind="districtName ? { label: districtName } : {}"
      style="margin-bottom: 73px"
    />
    <div class="tw-flex tw-items-start tw-w-full">
      <BoardObes style="margin-right: 139px" v-bind="tableData" />
      <div v-if="isBash">
        <Map
          :districtsBranch="segmentLevel"
          :to="{ name: '3D.branches.economic.obes' }"
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
import CulturesData from './segments/cultures.json';
import EduData from './segments/edu.json';
import SportAreasData from './segments/sport-areas.json';
import SportSquaresData from './segments/sport-squares.json';
import WaterpoolsData from './segments/waterpools.json';
import SchoolData from './segments/school.json';
import PolicliniksData from './segments/policliniks.json';
import HospitalsData from './segments/hospitals.json';
import BoardObes from 'src/3D/components/Boards/BoardObes';
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
  created() {
    this.segments = {
      hospitals: HospitalsData,
      policliniks: PolicliniksData,
      school: SchoolData,
      waterpools: WaterpoolsData,
      sportSquares: SportSquaresData,
      sportAreas: SportAreasData,
      edu: EduData,
      cultures: CulturesData,
    };
  },
  data() {
    return {
      selectedSegment: 'hospitals',
      types: [
        {
          label: 'Больницы',
          value: 'hospitals',
        },
        {
          label: 'Поликлиники',
          value: 'policliniks',
        },
        {
          label: 'Дошкольные организации',
          value: 'school',
        },
        {
          label: 'Общеобразовательные',
          value: 'edu',
        },
        {
          label: 'Спортивные площадки',
          value: 'sportSquares',
        },
        {
          label: 'Спортивные залы',
          value: 'sportAreas',
        },
        {
          label: 'Бассейны',
          value: 'waterpools',
        },
        {
          label: 'Культурно-досуговые учреждения',
          value: 'cultures',
        },
      ],
    };
  },
  methods: {
    typeMap(type) {
      return this.segments[type][type].reduce((acc, item) => {
        acc[item.ID] = item;
        return acc;
      }, {});
    },
  },
  computed: {
    ...mapGetters('_3D/districts', ['mapDistricts']),
    bg() {
      if (this.id === 'bash') {
        return { 'background-image': `url('/images/3D/main-map.jpg') ` };
      } else {
        return {
          'background-image': `url(/images/3D/districts-bg/${this.district.City_icon}.png)`,
        };
      }
    },
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
    hospitals() {
      return this.typeMap('hospitals');
    },
    policliniks() {
      return this.typeMap('policliniks');
    },
    school() {
      return this.typeMap('school');
    },
    waterpools() {
      return this.typeMap('waterpools');
    },
    sportSquares() {
      return this.typeMap('sportSquares');
    },
    sportAreas() {
      return this.typeMap('sportAreas');
    },
    edu() {
      return this.typeMap('edu');
    },
    cultures() {
      return this.typeMap('cultures');
    },
    tableData() {
      if (this.id === 'bash') {
        return {
          hospitals: {
            color: 'negative',
            value: '23 387',
          },
          sportSquares: {
            color: 'positive',
            value: '105%',
          },
          pol: {
            color: 'negative',
            value: '3 118',
          },
          sportZals: {
            color: 'negative',
            value: '50%',
          },
          schools: {
            color: 'negative',
            value: '35 952',
          },
          waterpools: {
            color: 'negative',
            value: '15%',
          },
          org: {
            color: 'negative',
            value: '32 452',
          },
          culture: {
            color: 'negative',
            value: '5%',
          },
        };
      } else {
        const { cultures_need_point = '-' } = this.cultures[this.id];
        const { school_need_seats = '-' } = this.edu[this.id];
        const { sports_gyms_fact_percent = '-' } = this.sportAreas[this.id];
        const { sports_grounds_fact_percent = '-' } = this.sportSquares[
          this.id
        ];
        const { swimming_pools_fact_percent = '-' } = this.waterpools[this.id];
        const { infant_school_need_seats_for_100_children = '-' } = this.school[
          this.id
        ];
        const {
          infant_school_need_seats_for_100_children: pol_need = '-',
        } = this.policliniks[this.id];
        const { deficit_beds_bed = '-' } = this.hospitals[this.id];

        return {
          hospitals: {
            color: 'negative',
            value: deficit_beds_bed,
          },
          sportSquares: {
            color: 'positive',
            value: sports_grounds_fact_percent,
          },
          pol: {
            color: 'negative',
            value: pol_need,
          },
          sportZals: {
            color: 'negative',
            value: sports_gyms_fact_percent,
          },
          schools: {
            color: 'negative',
            value: school_need_seats,
          },
          waterpools: {
            color: 'negative',
            value: swimming_pools_fact_percent,
          },
          org: {
            color: 'negative',
            value: infant_school_need_seats_for_100_children,
          },
          culture: {
            color: 'negative',
            value: cultures_need_point,
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
        hospitals: 'hospitals_fact_beds_percent',
        policliniks: 'infant_school_fact_seats_for_100_children_percent',
        school: 'infant_school_fact_seats_for_100_children_percent',
        waterpools: 'swimming_pools_fact_percent',
        sportSquares: 'sports_grounds_fact_percent',
        sportAreas: 'sports_gyms_fact_percent',
        eduData: 'school_fact_seats',
        cultures: 'cultures_need_point',
      };

      return this.segments[this.selectedSegment][this.selectedSegment].reduce(
        (acc, item) => {
          acc[item.ID] = {
            id: item.ID,
            level: colors[item.color],
            value: item[segmentsFields[this.selectedSegment]],
          };

          return acc;
        },
        {}
      );
    },
  },
  components: {
    Map,
    BoardObes,
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
