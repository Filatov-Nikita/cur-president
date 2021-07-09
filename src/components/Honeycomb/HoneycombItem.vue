<template>
  <router-link
    tag="div"
    :to="to"
    class="honeycomb-y-offsets tw-cursor-pointer"
    v-if="!hidden"
  >
    <div class="honeycomb" :class="`honeycomb-${itemStyle}`">
      <div class="honeycomb-inner" :class="`honeycomb-inner-${itemStyle}`">
        <section class="tw-text-center tw-mb-4">
          <q-icon size="50px" class="icon">
            <component :is="iconComp" :fill="fillIcon" />
          </q-icon>
          <p class="title">{{ title }}</p>
        </section>
        <section class="tw-text-center">
          <p class="stat">{{ number }}</p>
        </section>
        <section>
          <HoneycompSeparator class="separator" />
          <div class="tw-flex tw-justify-between tw-text-center tw-mt-4">
            <p class="indicatorName tw-w-1/2">
              <span class="tw-font-bold tw-text-lg">{{ bottom.l.number }}</span>
              {{ bottom.l.label }}
            </p>
            <p class="indicatorName tw-w-1/2">
              <span class="tw-font-bold tw-text-lg">{{ bottom.r.number }}</span>
              {{ bottom.r.label }}
            </p>
          </div>
        </section>
        <img
          class="dynamic"
          :class="{ 'dynamic-up': dynamic }"
          src="~/assets/icons/dynamic.svg"
          alt="dynamic"
          width="28px"
          height="28px"
        />
      </div>
    </div>
  </router-link>
  <HoneycombEmpty v-else />
</template>

<script>
import BookIcon from 'src/components/Honeycomb/SVGIcons/icons/BookIcon';
import HoneycompSeparator from 'src/components/Honeycomb/Helpers/HoneycompSeparator';
import HoneycombEmpty from 'src/components/Honeycomb/HoneycombEmpty';

export default {
  props: {
    dynamic: {
      default: false,
      type: Boolean,
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
    bottom: {
      type: Object,
      // required: true
    },
    number: {
      type: String,
      // required: true
    },
    title: {
      type: String,
      // required: true
    },
    icon: {
      default: 'Book',
      type: String,
    },
    filter: {
      default: 'all',
      type: String,
    },
    to: {
      default: '/',
      type: String,
    },
  },
  computed: {
    hidden() {
      if (this.filter === 'all') return false;
      return this.filter !== this.itemStyle;
    },
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
    },
    fillIcon() {
      const fills = {
        positive: '#01F859',
        negative: '#8A0000',
        neutral: '#56718A',
      };
      return fills[this.itemStyle];
    },
  },
  components: {
    BookIcon,
    HoneycompSeparator,
    HoneycombEmpty,
  },
};
</script>
<style scoped lang="scss">
$sideHeight: 124px;
$positiveColor: #01f859;

.honeycomb-y-offsets {
  padding-top: $sideHeight;
  padding-bottom: $sideHeight;
}

.honeycomb,
.honeycomb-inner {
  position: relative;
  width: 432px;
  height: 268px;
}

.honeycomb-inner {
  transform: scale(0.94);
  z-index: 1;
}

.honeycomb::after,
.honeycomb::before,
.honeycomb-inner::after,
.honeycomb-inner::before {
  content: '';
  position: absolute;
  width: 0;
  border-left: 216px solid transparent;
  border-right: 216px solid transparent;
}

.honeycomb::before,
.honeycomb-inner::before {
  bottom: 100%;
}

.honeycomb::after,
.honeycomb-inner::after {
  top: 100%;
  z-index: -1;
}

.honeycomb-positive {
  background: $positiveColor;
}

.honeycomb-inner-positive {
  background: #1b243f;
}

.honeycomb-positive::before {
  border-bottom: $sideHeight solid $positiveColor;
}

.honeycomb-positive::after {
  border-top: $sideHeight solid $positiveColor;
}

.honeycomb-inner-positive::before {
  border-bottom: $sideHeight solid #1b243f;
}

.honeycomb-inner-positive::after {
  border-top: $sideHeight solid #1b243f;
}

.honeycomb-negative {
  @apply tw-bg-negative;
}

.honeycomb-negative::before {
  border-bottom: $sideHeight solid theme('colors.negative');
}

.honeycomb-negative::after {
  border-top: $sideHeight solid theme('colors.negative');
}

.honeycomb-inner-negative {
  @apply tw-bg-negative;
}

.honeycomb-inner-negative::before {
  border-bottom: $sideHeight solid theme('colors.negative');
}

.honeycomb-inner-negative::after {
  border-top: $sideHeight solid theme('colors.negative');
}

.honeycomb-neutral {
  background: #2a3451;
}

.honeycomb-neutral::before {
  border-bottom: $sideHeight solid #2a3451;
}

.honeycomb-neutral::after {
  border-top: $sideHeight solid #2a3451;
}

.honeycomb-inner-neutral {
  background: #2a3451;
}

.honeycomb-inner-neutral::before {
  border-bottom: $sideHeight solid #2a3451;
}

.honeycomb-inner-neutral::after {
  border-top: $sideHeight solid #2a3451;
}

.title {
  line-height: 100%;
  font-size: 23px;
  padding: 0 60px;
}

.stat {
  line-height: 100px;
  font-size: 75px;
  @apply tw-font-bold;
}

.indicatorName {
  font-size: 15px;
}

.dynamic-up {
  transform: rotate(-180deg);
}

.icon {
  top: calc(#{$sideHeight * -1} + 58px);
}

.dynamic,
.icon {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.dynamic {
  bottom: calc(#{$sideHeight * -1} + 38px);
}

.separator {
  max-width: 331px;
  margin-top: 20px;
}
</style>
