<template>
  <div class="marker" :style="{ left: left + 15 + 'px', top: top + 15 + 'px' }">
    <div class="name">
      {{ districtName }}
    </div>
    <div class="value" :style="{ background: levelColors[level] }">
      <p>{{ value }}</p>
    </div>
    <MarkerTrg class="trg" />
  </div>
</template>

<script>
import MarkerTrg from './MarkerTrg';

export default {
  created() {
    this.levelColors = {
      min: '#A30000',
      max: '#009640',
      mid: '#EF8F00',
    };
  },
  props: {
    districtName: {
      required: true,
      type: String,
    },
    top: {
      default: 0,
      type: Number,
    },
    left: {
      default: 0,
      type: Number,
    },
    level: { type: String, required: true },
    value: {
      required: true,
      type: String,
    },
  },
  components: {
    MarkerTrg,
  },
};
</script>

<style scoped>
.marker {
  width: 165px;
  position: fixed;
  z-index: 999;
}

.trg {
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
}

.name {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 11px;
  padding-right: 7px;
  font-size: 16px;
  line-height: 100%;
  background: #141d43;
  @apply tw-font-semibold tw-text-white;
}

.value {
  line-height: 55px;
  font-size: 55px;
  padding: 11px 5px;
  @apply tw-text-center tw-font-bold tw-text-white;
}
</style>
