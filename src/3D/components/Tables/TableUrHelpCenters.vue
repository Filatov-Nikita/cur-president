<template>
  <div
    v-if="centers.length <= 0"
    class="tw-text-lg tw-font-bold tw-text-cente"
    style="
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    "
  >
    Ничего не найдено
  </div>
  <div class="cont" v-else>
    <div class="table-container">
      <table class="big-tabel">
        <thead>
          <tr class="tr-th">
            <th class="th col1">Название центра</th>
            <th class="th col2">Адрес</th>
            <th class="th col3">Телефон</th>
          </tr>
        </thead>
        <tbody>
          <!-- v-for="row in rows" -->
          <tr class="tr" v-for="center in centers" :key="center.id">
            <td class="td col1">{{ center.nane }}</td>
            <td class="td col2">{{ center.address }}</td>
            <td class="td col3">
              <div class="tw-flex tw-justify-between">
                <div>{{ center.phone1 }}</div>
                <button
                  class="tw-cursor-pointer"
                  style="width: 60px; height: 60px"
                  @click="
                    $router.push({
                      name: '3D.branches.ur-help.show.center',
                      params: {
                        id: $route.params.id,
                        center_id: center.id,
                      },
                      query: $route.query,
                    })
                  "
                >
                  <img src="images/3D/table-btn.svg" alt="" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import BoardCover from 'src/3D/components/Boards/Helpers/BoardCover';
import BoardHead from 'src/3D/components/Boards/Helpers/BoardHead';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('_3D/districts', ['mapDistricts']),
    ...mapGetters('_3D/urHelp', ['cityCentersMap', 'allCenters']),
    isBash() {
      return this.$route.params.id === 'bash';
    },
    district() {
      if (this.$route.params.id === 'bash') return {};
      return this.mapDistricts[this.$route.params.id];
    },
    districtName() {
      if (this.id === 'bash') return null;
      return this.district.Municipal_districts;
    },
    centers() {
      let { city = '', typePrava = '' } = this.$route.query;
      city = city.trim();
      if (!typePrava) {
        if (this.isBash) return this.allCenters;
        else return this.cityCentersMap[this.districtName];
      }

      let foundCity = this.cityCentersMap[city];
      if (!foundCity) return [];
      return foundCity.filter((center) => center[typePrava] === 'Да');
    },
  },
  components: {
    BoardCover,
    BoardHead,
  },
};
</script>

<style scoped>
.col1 {
  width: 500px;
}

.col2 {
  width: 500px;
}

.col3 {
  width: 500px;
}

.cont {
  padding: 55px 52px 101px 77px;
  height: 100%;
}
.big-tabel {
  width: 100%;
  font-size: 30px;
  display: table;
  background: rgba(0, 7, 47, 0.5);
  border-collapse: collapse;
  table-layout: fixed;
}

.ttext-lg {
  font-size: 50px;
  @apply tw-font-bold;
}

.ttext-sm {
  font-size: 20px;
}

.ttext-perc {
  @apply tw-text-positive tw-font-bold;
}

.ttext-op50 {
  opacity: 0.5;
}

.table-container {
  height: 1359px;
  overflow-y: scroll;
  padding-right: 35px;
}
.td {
  padding: 25px;
}

.tr + .tr {
  border-top: 1px solid #fff;
}

.th {
  font-size: 35px;
  line-height: 100%;
  @apply tw-text-left tw-font-semibold tw-text-white;
}

.tr,
.tr-th {
  width: 100%;
  padding: 20px 30px;
  display: block;
}

.tr-th {
  background: linear-gradient(270deg, #00cd77 0%, #6a7186 41.01%);
}

.td:nth-child(2n) {
  background: rgba(196, 196, 196, 0.05);
}

.table-container::-webkit-scrollbar {
  width: 2px;
  background-color: #fff;
}

.table-container::-webkit-scrollbar-thumb {
  background-color: #01f859;
  /* width: 6px; */
}
</style>
