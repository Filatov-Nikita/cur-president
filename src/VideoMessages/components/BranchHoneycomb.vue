<template>
  <router-link
    :to="{ name: 'videomess.branch.show', params: { branchName } }"
    v-bind="link"
    class="honeycomb-y-offsets tw-cursor-pointer tw-inline-block"
  >
    <div class="honeycomb" :class="`honeycomb-${itemStyle}`">
      <div class="honeycomb-inner" :class="`honeycomb-inner-${itemStyle}`">
        <div class="honeycomb-body">
          <!-- top -->
          <section class="top">
            <img
              class="tw-mx-auto icon-mb"
              :src="require('./icons/' + icon + '.svg')"
              alt=""
            />
          </section>

          <!-- middle -->
          <section class="middle">
            <div
              class="label"
              :class="{ 'label-sm': smallLabel }"
              v-html="label"
            ></div>
          </section>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      default: undefined,
      type: String,
    },
    link: {
      default() {
        return {};
      },
      type: Object,
    },
    icon: {
      required: true,
      type: String,
    },
    positive: {
      default: true,
      type: Boolean,
    },
    label: {
      required: true,
      type: String,
    },
  },
  computed: {
    branchName() {
      return this.icon;
    },
    smallLabel() {
      return this.label
        .split(' ')
        .some((word, i, words) => word.length >= 17 || words.length >= 3);
    },
    itemStyle() {
      const { positive } = this;
      if (positive) return 'positive';
    },
  },
};
</script>
<style scoped lang="scss">
$sideHeight: 200.5px;
$positiveColor: #02dd74;

.honeycomb-inner:hover {
  background: #02dd74;
}

.honeycomb-inner:hover::after {
  border-top-color: #02dd74;
}

.honeycomb-inner:hover::before {
  border-bottom-color: #02dd74;
}

.honeycomb-y-offsets {
  padding-top: $sideHeight;
  padding-bottom: $sideHeight;
}

.honeycomb,
.honeycomb-inner {
  position: relative;
  width: 695px;
  height: 390px;
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
  border-left: 347.5px solid transparent;
  border-right: 347.5px solid transparent;
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
  background: #1f2f66;
}

.honeycomb-positive::before {
  border-bottom: $sideHeight solid $positiveColor;
}

.honeycomb-positive::after {
  border-top: $sideHeight solid $positiveColor;
}

.honeycomb-inner-positive::before {
  border-bottom: $sideHeight solid #1f2f66;
}

.honeycomb-inner-positive::after {
  border-top: $sideHeight solid #1f2f66;
}

.title {
  line-height: 120%;
  font-size: 20px;
  padding-left: 25px;
  padding-right: 25px;
  height: 47px;
}

.middle {
  width: 100%;
}

.honeycomb-body {
  position: relative;
  z-index: 1;
  top: -16px;
}

.label {
  font-size: 60px;
  line-height: 68px;
  @apply tw-font-bold tw-text-center;
}

.label-sm {
  font-size: 50px;
}

.icon-mb {
  margin-bottom: 65px;
}
</style>
