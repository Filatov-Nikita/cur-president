<template>
  <q-page class="main" :style="bg">
    <MapSelect
      v-bind="districtName ? { label: districtName } : {}"
      style="margin-bottom: 53px"
    />
    <BoardUrHelpCenter style="margin-bottom: 50px" />
    <button class="back" @click="$router.back()">Назад к данным</button>
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
import BoardUrHelpCenter from 'src/3D/components/Boards/BoardUrHelpCenter';
import MapSelect from 'src/3D/components/MapSelect';
import ToTableLink from 'src/3D/components/ToTableLink';
import { mapGetters } from 'vuex';

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
    MapSelect,
    BoardUrHelpCenter,
    ToTableLink,
  },
};
</script>

<style scoped>
.back {
  font-size: 35px;
}
.main {
  padding-top: 90px;
  padding-bottom: 10px;
  background-size: cover;
  background-repeat: no-repeat;
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
