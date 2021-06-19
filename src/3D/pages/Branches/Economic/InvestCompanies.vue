<template>
  <q-page class="main">
    <MapSelect
      v-bind="districtName ? { label: districtName } : {}"
      style="margin-bottom: 73px"
    />
    <TablesInvestCompanies :rows="rows" style="margin-bottom: 50px" />
    <router-link
      class="back"
      :to="{ name: '3D.branches.economic.invest', params: { id: $route.params.id } }"
      >Назад к данным</router-link
    >
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import TablesInvestCompanies from 'src/3D/components/Tables/TablesInvestCompanies';
import investTableData from './invest-table.json';
import MapSelect from 'src/3D/components/MapSelect';

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
      return investTableData.table
        .filter((item) => item.ID == this.id)
        .map((item) => {
          const {
            Application_name: name = '-',
            Municipal_districts: district = '-',
            Investor: investor = '-',
            Industry: industry = '-',
            Total_investment_amount: total = '-',
            Number_of_jobs: jobs = '-',
            Own_funds_mln_rub = '-',
            Borrowed_funds_mln_rub = '-',
            Budget_funds_mln_rub = '-',
            Own_funds_percent = '-',
            Borrowed_funds_percent = '-',
            Budget_funds_percent = '-',
          } = item;
          return {
            name,
            district,
            investor,
            industry,
            total,
            jobs,
            Own_funds_mln_rub,
            Borrowed_funds_mln_rub,
            Budget_funds_mln_rub,
            Own_funds_percent,
            Borrowed_funds_percent,
            Budget_funds_percent,
          };
        });
    },
  },
  components: {
    TablesInvestCompanies,
    MapSelect,
  },
};
</script>
<style scoped>
.main {
  padding-top: 90px;
  background: url('/images/3D/main-map.jpg') no-repeat;
  background-size: cover;
}

.back {
  font-size: 35px;
}
</style>
