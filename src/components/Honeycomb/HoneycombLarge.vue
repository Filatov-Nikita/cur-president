<template>
  <HoneycompMaker :color="color" :w="1229">
    <!-- :class="{ 'dynamic-up': dynamic }" -->
    <img
      class="dynamic"
      src="~/assets/icons/dynamic.svg"
      alt="dynamic"
      width="65px"
      height="65px"
    />
    <div class="tw-text-center tw-relative container">
      <p
        class="tw-font-bold"
        style="font-size: 180px; line-height: 180px; margin-bottom: 30px"
      >
        {{ number }}
      </p>
      <p v-if="subtitle" class="tw-text-sm">{{ subtitle }}</p>
      <HoneycompSeparator class="hc-separator" stroke="2" opacity="1" />

      <div class="tw-flex tw-justify-between tw-text-center tw-mt-4">
        <p class="indicatorName tw-w-1/2">
          <span class="numbers-md">{{ middle.l }}</span> по РФ
        </p>
        <p class="indicatorName tw-w-1/2">
          <span class="numbers-md">{{ middle.r }}</span> по ПФО
        </p>
      </div>
      <p v-if="bottom" class="tw-text-sm bottom">{{ bottom }}</p>
    </div>
  </HoneycompMaker>
</template>

<script>
import HoneycompMaker from 'src/components/Honeycomb/HoneycompMaker';
import HoneycompSeparator from 'src/components/Honeycomb/Helpers/HoneycompSeparator';

export default {
  props: ['number', 'middle', 'bottom', 'subtitle'],
  computed: {
    color() {
      if (this.neutral) return 'st-bigHC-color-neutral';
      return this.positive ? 'st-bigHC-color-positive' : 'st-bigHC-color';
    },
    positive() {
      return [
        '/tw/zp',
        '/tw/bis',
        '/tw/inv',
        '/tw/doh',
        '/tw/okr',
        '/tw/dor',
        '/tw/gor',
        '/tw/str',
        '/tw/zhl',
        '/tw/kul',
        '/tw/gar',
        '/tw/vol',
        '/tw/edu',
      ].includes(this.$route.path);
    },
    neutral() {
      return ['/tw/vlast-dov', '/tw/sport', '/tw/tal', '/tw/cif'].includes(
        this.$route.path
      );
    },
  },
  components: {
    HoneycompMaker,
    HoneycompSeparator,
  },
};
</script>
<style>
.tw-bg-st-bigHC-color {
  background: #d40000;
}
.tw-border-st-bigHC-color {
  border-color: #d40000;
}

.tw-bg-st-bigHC-color-positive {
  background: #00cd77;
}
.tw-border-st-bigHC-color-positive {
  border-color: #00cd77;
}

.tw-bg-st-bigHC-color-neutral {
  background: #324272;
}
.tw-border-st-bigHC-color-neutral {
  border-color: #324272;
}
</style>

<style scoped>
.dynamic {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.dynamic {
  top: -235px;
}

.indicatorName {
  @apply tw-text-sm;
}

.hc-separator {
  margin: 30px 0;
}

.container {
  top: -80px;
  padding: 0 130px;
}

.numbers-md {
  font-size: 200px;
  line-height: 200px;
  @apply tw-font-bold;
}

.bottom {
  margin-top: 80px;
}
</style>
