<template>
  <q-page class="main" :style="bg">
    <MapSelect
      v-bind="districtName ? { label: districtName } : {}"
      style="margin-bottom: 73px"
    />
    <div>
      <BoardUrHelp style="margin-right: 139px; flex-basis: 1250px" />
      <UrHelpPopup
        v-for="center in centers"
        :key="center.id"
        :center="center"
        :districtId="id"
      />
    </div>
    <div>
      <ToTableLink
        class="table-link-2"
        @click="chat = true"
        label="Онлайн - консультация"
      />
      <q-dialog v-model="chat" full-width>
        <q-card>
          <iframe
            width="100%"
            height="1300px"
            src="https://alrfrb.form.one/embed/chat/1"
            frameborder="0"
          ></iframe>
        </q-card>
      </q-dialog>
      <ToTableLink
        class="table-link"
        :to="{
          name: '3D.branches.ur-help.centers',
          params: { id },
          query: $route.query,
        }"
        label="Центры юридической помощи списком"
      />
    </div>
  </q-page>
</template>

<script>
import MapSelect from 'src/3D/components/MapSelect';
import { mapGetters } from 'vuex';
import BoardUrHelp from 'src/3D/components/Boards/BoardUrHelp';
import UrHelpPopup from 'src/3D/components/UrHelp/UrHelpPopup';
import ToTableLink from 'src/3D/components/ToTableLink';

export default {
  props: {
    id: {
      required: true,
      type: [String, Number],
    },
  },
  created() {
    this.isBash ? this.$router.push({ name: '3D.branches.ur-help' }) : null;
  },
  data() {
    return {
      chat: false,
    };
  },
  computed: {
    ...mapGetters('_3D/districts', ['mapDistricts']),
    ...mapGetters('_3D/urHelp', [
      'cityCentersMap',
      'allCenters',
      'cityIdCentersMap',
    ]),
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
    centers() {
      const { city, typePrava } = this.$route.query;
      if (!typePrava) {
        if (this.isBash) return this.allCenters;
        else return this.cityCentersMap[this.districtName];
      }

      let foundCity = this.cityCentersMap[this.$route.query.city];
      if (!foundCity) return [];
      return foundCity.filter((center) => center[typePrava] === 'Да');
    },
    bg() {
      if (this.id === 'bash') {
        return { 'background-image': `url('/images/3D/main-map.jpg')` };
      } else if (this.id == 62) {
        return {
          'background-image': `url('/images/3D/3d-regions/ur-ufa.jpg')`,
        };
      } else {
        const icon = Number(this.id) < 10 ? `0${this.id}` : `${this.id}`;
        return {
          'background-image': `url('/images/3D/3d-regions/${icon}.png')`,
        };
      }
    },
  },
  components: {
    MapSelect,
    BoardUrHelp,
    UrHelpPopup,
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

.table-link-2 {
  position: absolute;
  bottom: 259px;
  right: 96px;
  z-index: 111;
}
</style>
