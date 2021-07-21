<template>
  <button class="honeycomb-y-offsets tw-cursor-pointer" v-on="$listeners">
    <div class="honeycomb" :class="`honeycomb-${itemStyle}`">
      <div class="honeycomb-inner" :class="`honeycomb-inner-${itemStyle}`">
        <!-- top -->
        <section class="top">
          <q-icon size="40px" class="icon">
            <component :is="iconComp" :fill="fillIcon" />
          </q-icon>
          <slot name="title">
            <p class="title" v-if="title">{{ title }}</p>
          </slot>
        </section>

        <!-- middle -->
        <section class="middle">
          <slot name="middle">
            <template v-if="type === 'classic'">
              <p v-if="number" class="number">{{ number }}</p>
              <p v-if="subtitle" class="subtitle tw-mb-2">{{ subtitle }}</p>
              <div
                class="tw-flex tw-justify-center tw-items-end"
                v-if="subtitle2"
              >
                <div class="subtitle2__number tw-mr-2">
                  {{ subtitle2.number }}
                </div>
                <div class="subtitle2__label tw-mb-1">
                  {{ subtitle2.label }}
                </div>
              </div>
            </template>
            <template v-else-if="type === 'indicators'">
              <!-- indicators -->
              <template v-if="indicators">
                <div
                  v-for="(indicator, i) in indicators"
                  :key="i"
                  class="tw-flex tw-justify-center indicator"
                >
                  <DynamicArrow
                    class="tw-mr-3 tw-self-end tw-mb-3"
                    size="md"
                    :dynamic="indicator.dynamic"
                  />
                  <p class="indicators__label">{{ indicator.label }}</p>
                </div>
              </template>
            </template>
            <template v-else-if="type === '2stat'">
              <div class="tw-flex tw-justify-center" v-if="_2stat">
                <div class="tw-mr-10">
                  <p class="_2stat__label">{{ _2stat.left.number }}</p>
                  <p>{{ _2stat.left.label }}</p>
                </div>
                <div>
                  <p class="_2stat__label">{{ _2stat.right.number }}</p>
                  <p>{{ _2stat.right.label }}</p>
                </div>
              </div>
            </template>
          </slot>
        </section>

        <!-- period -->
        <slot name="period">
          <section class="period" v-if="period">{{ period }}</section>
        </slot>

        <!-- dynamic -->
        <div class="dynamic" v-if="dynamic">
          <DynamicArrow
            :color="negative ? 'negative' : 'positive'"
            theme="honeycomb"
            size="sm"
            :dynamic="dynamic"
          />
        </div>
      </div>
    </div>
  </button>
</template>

<script>
import DynamicArrow from './DynamicArrow';

export default {
  props: {
    dynamic: {
      default: undefined,
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
    type: {
      default: 'classic',
      validator(value) {
        return ['classic', 'indicators', '2stat'].includes(value);
      },
    },
    _2stat: {
      default: undefined,
      type: Object,
    },
    indicators: {
      default: undefined,
      type: Array,
    },
    number: {
      type: String,
      default: undefined,
    },
    period: {
      type: String,
      default: undefined,
    },
    subtitle: {
      type: String,
      default: undefined,
    },
    subtitle2: {
      type: Object,
      default: undefined,
    },
    title: {
      default: undefined,
      type: String,
    },
    icon: {
      default: 'Book',
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
    DynamicArrow,
  },
};
</script>
<style scoped lang="scss">
$sideHeight: 104px;
$positiveColor: #01f859;

.honeycomb-y-offsets {
  padding-top: $sideHeight;
  padding-bottom: $sideHeight;
}

.honeycomb,
.honeycomb-inner {
  position: relative;
  width: 362px;
  height: 210px;
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
  left: 0;
  border-left: 181px solid transparent;
  border-right: 181px solid transparent;
}

.honeycomb::before,
.honeycomb-inner::before {
  bottom: 100%;
}

.honeycomb::after,
.honeycomb-inner::after {
  top: 100%;
  // z-index: -1;
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
  line-height: 120%;
  font-size: 20px;
}

.stat {
  line-height: 100px;
  font-size: 75px;
  @apply tw-font-bold;
}

.indicatorName {
  font-size: 15px;
}

.icon {
  margin-bottom: 16px;
}

.dynamic,
.period {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.dynamic {
  bottom: calc(#{$sideHeight * -1} + 32px);
}

.separator {
  max-width: 331px;
  margin-top: 20px;
}

._2stat__label {
  font-size: 120px;
  line-height: 90px;
  @apply tw-font-bold tw-mb-5;
}

.indicator + .indicator {
  margin-top: 6px;
}

.indicators__label {
  font-size: 36px;
  @apply tw-font-bold;
}

.number {
  font-size: 70px;
  line-height: 90px;
  @apply tw-font-bold;
}

.subtitle {
  font-size: 16px;
}

.subtitle2__label {
  font-size: 12px;
}

.subtitle2__number {
  font-size: 20px;
  @apply tw-font-bold;
}

.period {
  font-size: 12px;
  bottom: calc(#{$sideHeight * -1} + 70px);
}

.top {
  position: absolute;
  width: 100%;
  top: calc(#{$sideHeight * -1} + 36px);
}

.middle {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
</style>
