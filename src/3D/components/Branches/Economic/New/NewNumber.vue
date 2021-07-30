<template>
  <div
    :class="[
      tail || dynamic !== undefined
        ? `tw-flex ${center ? 'tw-justify-center' : ''}`
        : center
        ? 'tw-text-center'
        : 'tw-text-left',
    ]"
  >
    <DynamicArrow
      v-if="dynamic !== undefined"
      class="tw-self-end"
      :class="`dynamic-right-${dynamicSize}`"
      :color="
        color === 'white'
          ? 'positive'
          : color === 'positive'
          ? color
          : 'negative'
      "
      :size="dynamicSize"
      :dynamic="dynamic"
    />
    <div
      :class="`tw-text-${color} number size-${size} tw-font-${weight}`"
      :style="[tail ? { 'margin-right': tailLeft } : {}]"
    >
      {{ number }}
    </div>
    <div class="tail" :class="`tail-size-${tailSize} tw-font-${tailWeight}`">
      {{ tail }}
    </div>
  </div>
</template>

<script>
import DynamicArrow from './DynamicArrow';

export default {
  props: {
    size: {
      default: 'lg',
      type: String,
    },
    color: {
      default: 'white',
      type: String,
    },
    weight: {
      default: 'bold',
      type: String,
    },
    number: {
      required: true,
      type: String,
    },
    tail: {
      default: undefined,
      type: String,
    },
    tailSize: {
      default: 'md',
      type: String,
    },
    tailWeight: {
      default: 'bold',
      type: String,
    },
    tailLeft: {
      default: '20px',
      type: String,
    },
    dynamic: {
      default: undefined,
      type: Boolean,
    },
    center: {
      default: false,
      type: Boolean,
    },
    dynamicSize: {
      default: 'lg',
      type: String,
    },
  },
  components: {
    DynamicArrow,
  },
};
</script>

<style scoped>
.size-xxs {
  font-size: 36px;
}

.size-xxs2 {
  font-size: 48px;
}

.size-xs {
  font-size: 60px;
}

.size-xs1-5 {
  font-size: 64px;
}

.size-xs2 {
  font-size: 80px;
}

.size-xs2-5 {
  font-size: 90px;
}

.size-xs3 {
  font-size: 96px;
}

.size-xs4 {
  font-size: 100px;
}

.size-xs5 {
  font-size: 110px;
}

.size-sm {
  font-size: 120px;
}

.size-sm2 {
  font-size: 140px;
}

.size-sm3 {
  font-size: 160px;
}

.size-sm4 {
  font-size: 180px;
}

.size-sm4 {
  font-size: 200px;
}

.size-md {
  font-size: 215px;
}

.size-md2 {
  font-size: 220px;
}

.size-md3 {
  font-size: 230px;
}

.size-lg {
  font-size: 240px;
}

.size-lg2 {
  font-size: 260px;
}

.size-lg3 {
  font-size: 280px;
}

.size-lg4 {
  font-size: 300px;
}

.size-xl {
  font-size: 320px;
}

.number {
  line-height: 80%;
}
  /* @apply tw-font-roboto; */

.tail {
  line-height: 200%;
  @apply tw-self-end;
}

.tail-size-md {
  font-size: 48px;
}

.tail-size-lg {
  font-size: 64px;
}

.dynamic-right-xs {
  margin-right: 6px;
}

.dynamic-right-md2 {
  margin-right: 16px;
}

.dynamic-right-md3 {
  margin-right: 20px;
}

.dynamic-right-lg {
  margin-right: 24px;
}

.dynamic-right-lg2 {
  margin-right: 30px;
}

.dynamic-right-xl {
  margin-right: 19px;
}
</style>
