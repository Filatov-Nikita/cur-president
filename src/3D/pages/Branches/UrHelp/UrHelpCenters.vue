<template>
  <q-page class="main" :style="bg">
    <MapSelect
      v-bind="districtName ? { label: districtName } : {}"
      style="margin-bottom: 53px"
    />
    <div class="tw-flex" style="position: relative; z-index: 99999999">
      <BoardUrHelp style="flex-basis: 1250px; position: relative; z-index: 1" />
      <BoardUrHelpCenters
        style="flex-basis: 1722px; position: relative; z-index: 0; left: -50px"
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
          name: '3D.branches.ur-help.centers.map',
          params: { id },
          query: $route.query,
        }"
        label="Центры юридической помощи на карте"
      />
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import BoardUrHelp from 'src/3D/components/Boards/BoardUrHelp';
import BoardUrHelpCenters from 'src/3D/components/Boards/BoardUrHelpCenters';
import MapSelect from 'src/3D/components/MapSelect';
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
      chat: false,
    };
  },
  computed: {
    ...mapGetters('_3D/districts', ['mapDistricts']),
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
  },
  components: {
    BoardUrHelp,
    MapSelect,
    BoardUrHelpCenters,
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
