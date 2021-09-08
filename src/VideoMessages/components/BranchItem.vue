<template>
  <div style="flex-basis: 713px">
    <div class="item" @click="dialog = true">
      <div class="index"><slot name="index" /></div>
      <button class="play"><img :src="require('./icons/play.svg')" /></button>
      <div class="icon tw-mx-auto">
        <img
          class="tw-mx-auto tw-w-full tw-h-full"
          :src="require('src/3D/components/District/Menu/Svg/' + icon + '.svg')"
          alt=""
        />
      </div>
      <div class="district-name" v-html="districtPretty"></div>
      <div class="name tw-mb-1">{{ name }}</div>
      <div class="city-dist-name" v-if="cityDistrictName">
        ({{ cityDistrictName }})
      </div>
    </div>
    <q-dialog v-model="dialog">
      <div style="width: 3500px; max-width: 100%">
        <q-btn
          class="close tw-text-secondary"
          size="100px"
          dense
          flat
          icon="close"
          v-close-popup
        >
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
        <q-card style="width: 3500px; max-width: 100%; background: transparent">
          <video
            class="video"
            :src="'/videos/videomess/' + filename + '.mp4'"
            controls
            autoplay
          ></video>
        </q-card>
      </div>
    </q-dialog>
  </div>
</template>

<script>
export default {
  props: {
    name: {},
    icon: {},
    districtName: {},
    cityDistrictName: {
      default: undefined,
      type: String,
    },
    filename: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    districtPretty() {
      if (this.districtName.indexOf('район') !== -1) {
        const parts = this.districtName.split(' ');
        return parts[0] + ' <br/> ' + parts[1];
      }
      return this.districtName;
    },
  },
};
</script>

<style scoped>
.district-name {
  font-size: 60px;
  margin-bottom: 24px;
  line-height: 114.5%;
  min-height: 136px;
  @apply tw-font-bold tw-flex tw-flex-col tw-justify-center;
}

.item {
  border: 1px solid hsla(201, 42%, 59%, 1);
  padding: 50px 12px 35px 12px;
  @apply tw-text-center tw-relative tw-h-full;
}

.name {
  font-size: 48px;
}

.index {
  width: 76px;
  height: 76px;
  background: #6aa3c2;
  color: #00092e;
  line-height: 76px;
  font-size: 48px;
  top: -1px;
  left: -1px;
  @apply tw-text-center tw-font-semibold tw-absolute;
}

.play {
  width: 120px;
  height: 120px;
  right: 50px;
  top: 50px;
  @apply tw-absolute;
}

.icon {
  width: 272px;
  height: 240px;
  margin-bottom: 48px;
}

.close {
  top: 0;
  right: 0;
  @apply tw-absolute tw-z-50;
}

.video {
  width: 100%;
  height: 1700px;
}

.city-dist-name {
  font-size: 36px;
}
</style>
