<template>
  <q-page class="main" :style="style">
    <MapSelect style="margin-bottom: 93px" :label="districtName" />
    <div class="tw-flex tw-items-start">
      <BoardMain style="margin-right: 201px" v-bind="tableData" />
      <DistrictInfo
        class="tw-self-end"
        :peopleCol="peopleCol"
        :square="square"
        :include="include"
      />
    </div>
    <div class="avatars">
      <AvatarItem
        style="margin-bottom: 49px"
        :src="chiefPhoto"
        :name="chiefName"
      />
      <AvatarItem
        :src="cityPhoto"
        position="Административный центр"
        :name="adminCenter"
      />
    </div>
  </q-page>
</template>

<script>
import MapSelect from 'src/3D/components/MapSelect';
import BoardMain from 'src/3D/components/Boards/BoardMain';
import AvatarItem from 'src/3D/components/Avatar/AvatarItem';
import DistrictInfo from 'src/3D/components/District/DistrictInfo';
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
      return this.mapDistricts[this.id];
    },
    bg() {
      return `/images/3D/districts-bg/${this.district.City_icon}.png`;
    },
    style() {
      return {
        'background-image': `url(${this.bg})`,
      };
    },
    districtName() {
      return this.district.Municipal_districts;
    },
    chiefName() {
      return this.district.Chief;
    },
    chiefPhoto() {
      return `images/3D/chiefs-photo/${this.district.Chiefs_foto}.jpg`;
    },
    cityPhoto() {
      return `images/3D/cities-photo/${this.district.City_foto}.jpg`;
    },
    adminCenter() {
      return this.district.Administrative_center;
    },
    peopleCol() {
      return this.district.People_man;
    },
    square() {
      return this.district.S_km2;
    },
    include() {
      if(this.districtName.indexOf('г.о') !== -1) return [];

      let cityLabel = 'город(ов)';
      if (this.district.Cities) {
        const num = this.district.Cities % 10;
        if (this.district.Cities === '1') {
          cityLabel = 'город';
        } else if (num > 1 && num < 5) {
          cityLabel = 'города';
        } else {
          cityLabel = 'городов';
        }
      }

      return [
        { label: 'сельских поселений', val: this.district.Village || '-' },
        { label: cityLabel, val: this.district.Cities || '-' },
      ];
    },
    tableData() {
      const {
        Investment_in_capital_IV_quarter_2020_y = '-',
        Dynamics_of_investment_volume_percent = '-',
        Milk_production_ton_April_2021_y = '-',
        Milk_gain_percent = '-',
        Number_of_cows_cow_April_2021_y = '-',
        Childbirth_March_2021_y = '-',
        Birth_rate_growth_percent = '-',
        Unemployment_rate_percent_February_2021_y = '-',
        Dynamics_of_unemployment_percent = '-',
        Average_salary_III_quarter_2020_y = '-',
        Average_salary_IV_quarter_2020_y = '-',
        Change_in_average_salary_persent = '-',
      } = this.district;
      return {
        invest: {
          color: 'positive',
          value: Investment_in_capital_IV_quarter_2020_y,
          it: this.prettyIt(Dynamics_of_investment_volume_percent),
        },
        milk: {
          color: 'positive',
          value: Milk_production_ton_April_2021_y,
          it: this.prettyIt(Milk_gain_percent),
        },
        cow: {
          color: 'positive',
          value: Number_of_cows_cow_April_2021_y,
        },
        born: {
          color: 'positive',
          value: Childbirth_March_2021_y,
          it: this.prettyIt(Birth_rate_growth_percent),
        },
        unwork: {
          color: 'positive',
          value: `${Unemployment_rate_percent_February_2021_y}%`,
          it: this.prettyIt(Dynamics_of_unemployment_percent, true),
        },
        zp: {
          left: {
            color: 'negative',
            value: `${Average_salary_III_quarter_2020_y} ₽`,
          },
          right: {
            color: 'positive',
            value: `${Average_salary_IV_quarter_2020_y} ₽`,
            it: this.prettyIt(Change_in_average_salary_persent),
          },
        },
      };
    },
  },
  methods: {
    prettyIt(it, unsign = false) {
      return it === '-' ? '' : `${!unsign ? '+' : ''}${it}%`;
    },
  },
  components: {
    BoardMain,
    MapSelect,
    AvatarItem,
    DistrictInfo,
  },
};
</script>

<style scoped>
.main {
  padding-top: 90px;
  background-repeat: no-repeat;
  background-size: cover;
}

.avatars {
  position: absolute;
  bottom: 58px;
  right: 72px;
  z-index: 10;
}
</style>
