<template>
  <q-dialog
    :value="value"
    @input="close"
    :contentClass="`_honeycomb-dialog ${
      contentClass !== undefined ? contentClass : ''
    }`"
    maximized
  >
    <div class="inner">
      <div class="tw-absolute">
        <HoneycompMaker
          :w="135"
          :color="itemStyle"
          class="close"
          @click="close"
        >
          <img class="close-icon" src="./close.svg" alt="" />
        </HoneycompMaker>
        <HoneycombDialogCover :color="itemStyle" class="honeycomb-cover">
          <div class="top">
            <div class="tw-text-center">
              <q-icon class="icon">
                <component :is="iconComp" :fill="fillIcon" />
              </q-icon>
            </div>
            <div class="title tw-text-center" v-html="title">{{ title }}</div>
            <div
              class="period tw-text-center tw-mb-5"
              :style="{ 'margin-bottom': tb }"
              :class="{ 'tw-invisible': period === undefined }"
            >
              {{ period === undefined ? '-' : period }}
            </div>
            <div class="container">
              <slot />
            </div>
          </div>
        </HoneycombDialogCover>
      </div>
    </div>
  </q-dialog>
</template>

<script>
import HoneycombDialogCover from './HoneycombDialogCover';
import HoneycompMaker from 'src/components/Honeycomb/HoneycompMaker';

export default {
  props: {
    value: {
      default: false,
      type: Boolean,
    },
    title: {
      required: true,
      type: String,
    },
    period: {
      default: undefined,
      type: String,
    },
    negative: {
      default: false,
      type: Boolean,
    },
    positive: {
      default: false,
      type: Boolean,
    },
    neutral: {
      default: false,
      type: Boolean,
    },
    icon: {
      required: true,
      type: String,
    },
    tb: {
      default: '60px',
      type: String,
    },
    contentClass: {
      default: undefined,
      type: String,
    },
  },
  computed: {
    iconComp() {
      const { icon } = this;
      return () =>
        import('src/components/Honeycomb/SVGIcons/icons/' + `${icon}Icon`);
    },
    itemStyle() {
      const { positive, negative, neutral } = this;
      if (positive) return 'positive';
      if (negative) return 'negative';
      if (neutral) return 'neutral';
      return 'positive';
    },
    fillIcon() {
      const fills = {
        positive: '#01F859',
        negative: '#FF0000',
        neutral: '#56718A',
      };
      return fills[this.itemStyle];
    },
  },
  methods: {
    close() {
      this.$emit('input', false);
    },
  },
  components: {
    HoneycombDialogCover,
    HoneycompMaker,
  },
};
</script>
<style>
._honeycomb-dialog .q-dialog__backdrop {
  background: rgba(0, 7, 47, 0.5);
  backdrop-filter: blur(20px);
}

._honeycomb-dialog .q-dialog__inner {
  display: block !important;
  padding: 21px 326px;
}
</style>
<style scoped>
.close {
  position: absolute;
  z-index: 999999;
  right: -98px;
  top: 150px;
  cursor: pointer;
}
.close-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.inner {
  width: 1839px;
}

.top {
  position: relative;
  top: 252px;
  @apply tw-w-full tw-z-10;
}

.period {
  font-size: 36px;
}

.icon {
  width: 110px;
  height: 100px;
  margin-bottom: 30px;
}

.title {
  max-width: 1185px;
  font-size: 48px;
  line-height: 120%;
  padding-left: 75px;
  padding-right: 75px;
  @apply tw-font-bold tw-mb-5 tw-mx-auto tw-uppercase;
}

.container {
  padding-left: 85px;
  padding-right: 85px;
}
</style>
