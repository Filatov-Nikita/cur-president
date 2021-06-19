<template>
  <q-page class="main" :style="bg">
    <MapSelect
      v-bind="districtName ? { label: districtName } : {}"
      style="margin-bottom: 73px"
    />
    <div class="tw-flex tw-items-start tw-w-full">
      <BoardInvest style="margin-right: 139px" v-bind="tableData" />
      <Map
        v-if="isBash"
        :districtsBranch="segmentLevel"
        transparent
        :to="{ name: '3D.branches.economic.invest' }"
      />
    </div>
    <ToTableLink
      class="table-link"
      :to="{ name: '3D.branches.economic.invest.companies', params: { id } }"
      label="Список проектов"
    />
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Map from 'src/3D/components/Map/MapCover';
import BoardInvest from 'src/3D/components/Boards/BoardInvest';
import MapSelect from 'src/3D/components/MapSelect';
import InvestData from 'src/3D/invest.json';
import InvestTableData from './invest-table.json';
import ToTableLink from 'src/3D/components/ToTableLink';

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
    projectsCol() {
      return InvestTableData.table
        .filter((item) => item.ID == this.id)
        .length.toString();
    },
    investMap() {
      return InvestData.invest.reduce((acc, item) => {
        acc[item.ID] = item;
        return acc;
      }, {});
    },
    districtName() {
      if (this.id === 'bash') return null;
      return this.district.Municipal_districts;
    },
    tableData() {
      if (this.id === 'bash') {
        return {
          invest: {
            color: 'positive',
            value: '318 895',
          },
          projects: {
            color: 'positive',
            value: '396',
          },
          workPlaces: {
            color: 'positive',
            value: '17 765',
          },
          diagram1: {
            values: [53, 20, 9, 6, 4, 3, 2, 1, 1, 0],
            value: '318 895',
            caption: 'млн. ₽',
            legends: [
              {
                value: 53,
                name: 'Промышленность',
              },
              {
                value: 20,
                name: 'Cельское хозяйство',
              },
              {
                value: 9,
                name: 'Cтроительство',
              },
              {
                value: 6,
                name: 'ЖКХ и Экология',
              },
              {
                value: 4,
                name: 'Прочие',
              },
              {
                value: 3,
                name: 'Туризм и придорожный сервис',
              },
              {
                value: 2,
                name: 'Торговля',
              },
              {
                value: 1,
                name: 'Здравоохранение',
              },
              {
                value: 1,
                name: 'Культура и спорт',
              },
              {
                value: 0,
                name: 'Траснпорт',
              },
            ],
          },
          diagram2: {
            values: [31, 21, 13, 11, 8, 6, 4, 3, 2, 1],
            value: '396',
            caption: 'проектов',
            legends: [
              {
                value: 31,
                name: 'Промышленность',
              },
              {
                value: 21,
                name: 'Cельское хозяйство',
              },
              {
                value: 13,
                name: 'Туризм и придорожный сервис',
              },
              {
                value: 11,
                name: 'Торговля',
              },
              {
                value: 8,
                name: 'Cтроительство',
              },
              {
                value: 6,
                name: 'ЖКХ и Экология',
              },
              {
                value: 4,
                name: 'Здравоохранение',
              },
              {
                value: 3,
                name: 'Культура и спорт',
              },
              {
                value: 2,
                name: 'Прочие',
              },
              {
                value: 1,
                name: 'Траснпорт',
              },
            ],
          },
        };
      } else {
        const {
          Total_investment_in_the_districts_rub = '0',
          Number_of_jobs_in_the_districts = '0',
          Utilities_sector_and_ecology_percent = '0',
          healthcare_percent = '0',
          culture_and_sports_percent = '0',
          industry_percent = '0',
          other_percent = '0',
          agriculture_and_forestry_percent = '0',
          building_percent = '0',
          trade_percent = '0',
          transport_percent = '0',
          tourism_and_roadside_services_percent = '0',
          Utilities_sector_and_ecology_jobs_percent = '0',
          healthcare_jobs_percent = '0',
          culture_and_sports_jobs_percent = '0',
          industry_jobs_percent = '0',
          other_jobs_percent = '0',
          agriculture_and_forestry_jobs_percent = '0',
          building_jobs_percent = '0',
          trade_jobs_percent = '0',
          transport_jobs_percent = '0',
          tourism_and_roadside_services_jobs_percent = '0',
        } = this.investMap[this.id];

        const values1 = [
          industry_percent,
          agriculture_and_forestry_percent,
          building_percent,
          Utilities_sector_and_ecology_percent,
          other_percent,
          tourism_and_roadside_services_percent,
          trade_percent,
          healthcare_percent,
          culture_and_sports_percent,
          transport_percent,
        ]
          .filter((value) => value.length > 0)
          .map((value) => Number(value));

        const values2 = [
          industry_jobs_percent,
          agriculture_and_forestry_jobs_percent,
          tourism_and_roadside_services_jobs_percent,
          trade_jobs_percent,
          building_jobs_percent,
          Utilities_sector_and_ecology_jobs_percent,
          healthcare_jobs_percent,
          culture_and_sports_jobs_percent,
          other_jobs_percent,
          transport_jobs_percent,
        ]
          .filter((value) => value.length > 0)
          .map((value) => Number(value));

        return {
          invest: {
            color: 'positive',
            value: Total_investment_in_the_districts_rub,
          },
          projects: {
            color: 'positive',
            value: this.projectsCol,
          },
          workPlaces: {
            color: 'positive',
            value: Number_of_jobs_in_the_districts,
          },
          diagram1: {
            values: values1,
            value: Total_investment_in_the_districts_rub,
            caption: 'млн. ₽',
            legends: [
              {
                value: industry_percent,
                name: 'Промышленность',
              },
              {
                value: agriculture_and_forestry_percent,
                name: 'Cельское хозяйство',
              },
              {
                value: building_percent,
                name: 'Cтроительство',
              },
              {
                value: Utilities_sector_and_ecology_percent,
                name: 'ЖКХ и Экология',
              },
              {
                value: other_percent,
                name: 'Прочие',
              },
              {
                value: tourism_and_roadside_services_percent,
                name: 'Туризм и придорожный сервис',
              },
              {
                value: trade_percent,
                name: 'Торговля',
              },
              {
                value: healthcare_percent,
                name: 'Здравоохранение',
              },
              {
                value: culture_and_sports_percent,
                name: 'Культура и спорт',
              },
              {
                value: transport_percent,
                name: 'Траснпорт',
              },
            ],
          },

          diagram2: {
            values: values2,
            value: this.projectsCol,
            caption: 'проектов',
            legends: [
              {
                value: industry_jobs_percent,
                name: 'Промышленность',
              },
              {
                value: agriculture_and_forestry_jobs_percent,
                name: 'Cельское хозяйство',
              },
              {
                value: tourism_and_roadside_services_jobs_percent,
                name: 'Туризм и придорожный сервис',
              },
              {
                value: trade_jobs_percent,
                name: 'Торговля',
              },
              {
                value: building_jobs_percent,
                name: 'Cтроительство',
              },
              {
                value: Utilities_sector_and_ecology_jobs_percent,
                name: 'ЖКХ и Экология',
              },
              {
                value: healthcare_jobs_percent,
                name: 'Здравоохранение',
              },
              {
                value: culture_and_sports_jobs_percent,
                name: 'Культура и спорт',
              },
              {
                value: other_jobs_percent,
                name: 'Прочие',
              },
              {
                value: transport_jobs_percent,
                name: 'Траснпорт',
              },
            ],
          },
        };
      }
    },
    segmentLevel() {
      // const colors = {
      //   g: 'max',
      //   y: 'mid',
      //   r: 'min',
      // };

      return InvestData.invest.reduce((acc, item) => {
        const { Total_investment_in_the_districts_rub = '-' } = item;
        acc[item.ID] = {
          id: item.ID,
          level: 'max',
          value: Total_investment_in_the_districts_rub,
        };
        return acc;
      }, {});
    },
  },
  components: {
    Map,
    MapSelect,
    BoardInvest,
    ToTableLink,
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

.table-link {
  position: absolute;
  bottom: 109px;
  right: 96px;
  z-index: 111;
}
</style>
