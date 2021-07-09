<template>
  <q-page class="main">
    <MapSelect
      v-bind="districtName ? { label: districtName } : {}"
      style="margin-bottom: 73px"
    />

    <div class="tw-flex tw-items-start tw-w-full">
      <BoardUrHelp style="margin-right: 139px; flex-basis: 1250px" />
      <div>
        <Map urMap v-bind="{ urDistrictsMarkers }" />
      </div>
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
        }"
        label="Центры юридической помощи списком"
      />
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Map from 'src/3D/components/Map/MapCover';
import BoardUrHelp from 'src/3D/components/Boards/BoardUrHelp';
import MapSelect from 'src/3D/components/MapSelect';
import UrData from 'src/3D/ur.json';
import DistrictsData from 'src/3D/data.json';
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
    districtsNameMap() {
      return DistrictsData['districts'].reduce((acc, item) => {
        acc[item.Municipal_districts] = item;
        return acc;
      }, {});
    },
    urDistrictsMarkers() {
      return UrData['ur-help'].reduce((acc, item) => {
        if (!acc[item.raion]) {
          acc[item.raion] = {
            districtId: this.districtsNameMap[item.raion].ID,
            centers: [item],
          };
        } else {
          acc[item.raion].centers.push(item);
        }
        return acc;
      }, {});
    },
  },
  components: {
    Map,
    BoardUrHelp,
    MapSelect,
    ToTableLink,
  },
};
</script>

<style scoped>
.main {
  padding-top: 90px;
  background-size: cover;
  padding-bottom: 50px;
  background: url('/images/3D/main-map.jpg') no-repeat;
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
