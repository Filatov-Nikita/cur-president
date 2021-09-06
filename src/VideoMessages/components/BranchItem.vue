<template>
  <div>
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
      <div class="district-name">{{ districtName }}</div>
      <div class="name">{{ name }}</div>
    </div>
    <q-dialog v-model="dialog">1</q-dialog>
  </div>
</template>

<script>
export default {
  props: {
    name: {},
    icon: {},
    districtName: {},
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.district-name {
  font-size: 60px;
  margin-bottom: 24px;
  line-height: 114.5%;
  @apply tw-font-bold;
}

.item {
  border: 1px solid hsla(201, 42%, 59%, 1);
  padding: 110px 12px 92px 12px;
  max-width: 720px;
  @apply tw-text-center tw-relative;
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
</style>
