<template>
  <div style="max-width: 2848px">
    <div class="tw-flex">
      <DistrictMenuItem
        class="item-of"
        v-for="(item, index) in row1"
        :key="index"
        :icon="item.icon"
        :name="item.Municipal_districts"
        :id="item.ID"
      />
    </div>
    <div class="tw-flex offset-row" style="margin-top: -60px">
      <DistrictMenuItem
        class="item-of"
        v-for="(item, index) in row2"
        :key="index"
        :icon="item.icon"
        :name="item.Municipal_districts"
        :id="item.ID"
      />
    </div>
    <div class="tw-flex" style="margin-top: -60px">
      <DistrictMenuItem
        class="item-of"
        v-for="(item, index) in row3"
        :key="index"
        :icon="item.icon"
        :name="item.Municipal_districts"
        :id="item.ID"
      />
    </div>
    <div class="tw-flex offset-row" style="margin-top: -60px">
      <DistrictMenuItem
        class="item-of"
        v-for="(item, index) in row4"
        :key="index"
        :icon="item.icon"
        :name="item.Municipal_districts"
        :id="item.ID"
      />
    </div>
    <div class="tw-flex" style="margin-top: -60px">
      <DistrictMenuItem
        class="item-of"
        v-for="(item, index) in row5"
        :key="index"
        :icon="item.icon"
        :name="item.Municipal_districts"
        :id="item.ID"
      />
    </div>
    <div class="tw-flex offset-row" style="margin-top: -60px">
      <DistrictMenuItem
        class="item-of"
        v-for="(item, index) in row6"
        :key="index"
        :icon="item.icon"
        :name="item.Municipal_districts"
        :id="item.ID"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DistrictMenuItem from './DistrictMenuItem';

export default {
  computed: {
    ...mapGetters('_3D/districts', ['mapDistricts']),
    row1() {
      return Object.values(this.mapDistricts).slice(0, 11);
    },
    row2() {
      return Object.values(this.mapDistricts).slice(11, 21);
    },
    row3() {
      return Object.values(this.mapDistricts).slice(21, 32);
    },
    row4() {
      return Object.values(this.mapDistricts).slice(32, 42);
    },
    row5() {
      return Object.values(this.mapDistricts).slice(42, 53);
    },
    row6() {
      return Object.values(this.mapDistricts).slice(53, 63);
    },
  },
  components: {
    DistrictMenuItem,
  },
};
</script>

<style scoped>
.offset-row {
  margin-left: 130px;
  margin-top: -67px;
}

.item-of + .item-of {
  margin-left: 13px;
}
</style>
