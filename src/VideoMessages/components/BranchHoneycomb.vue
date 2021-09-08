<template>
  <router-link
    :to="{
      name: 'videomess.branch.show',
      params: { branchName },
      query: { branchLabel: label2, branchId },
    }"
    v-bind="link"
    class="tw-cursor-pointer tw-inline-block"
    :style="offsetsStyles"
  >
    <div
      class="honeycomb"
      :class="`honeycomb-${itemStyle}`"
      :style="honeycompStyles"
    >
      <div
        class="honeycomb-inner"
        :class="`honeycomb-inner-${itemStyle}`"
        :style="honeycompStyles"
      >
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
    label2: {
      required: true,
      type: String,
    },
    branchId: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      ratio: 0.866, //(482 / 566) w / h
      pRatio: 1.733, // (482 / 268)
      w: 530,
    };
  },
  computed: {
    h() {
      const { w, ratio } = this;
      return w / ratio;
    },
    triangleH() {
      const { w, pRatio } = this;
      return w / pRatio / 2;
    },
    pH() {
      const { h, triangleH } = this;
      return h - triangleH * 2;
    },
    triangleSide() {
      const { w } = this;
      return w / 2;
    },
    honeycompStyles() {
      const { w: width, triangleSide, triangleH, pH: height, color } = this;
      return {
        width: width + 'px',
        height: height + 'px',
        '--side-g': triangleSide + 'px',
        '--side-h': triangleH + 'px',
      };
    },
    offsetsStyles() {
      const { triangleH } = this;
      return {
        'padding-top': triangleH + 'px',
        'padding-bottom': triangleH + 'px',
      };
    },
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

.honeycomb,
.honeycomb-inner {
  position: relative;
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
  border-left: var(--side-g) solid transparent;
  border-right: var(--side-g) solid transparent;
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
  border-bottom: var(--side-h) solid $positiveColor;
}

.honeycomb-positive::after {
  border-top: var(--side-h) solid $positiveColor;
}

.honeycomb-inner-positive::before {
  border-bottom: var(--side-h) solid #1f2f66;
}

.honeycomb-inner-positive::after {
  border-top: var(--side-h) solid #1f2f66;
}

.middle {
  width: 100%;
}

.honeycomb-body {
  position: relative;
  z-index: 1;
  top: -14px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.label {
  font-size: 50px;
  line-height: 68px;
  @apply tw-font-bold tw-text-center;
}

.label-sm {
  font-size: 38px;
  line-height: 52px;
}

.icon-mb {
  height: 167px;
  margin-bottom: 60px;
}
</style>
