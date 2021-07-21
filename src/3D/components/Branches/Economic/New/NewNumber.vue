<template>
  <div :class="[tail || dynamic !== undefined ? 'tw-flex' : '']">
    <DynamicArrow
      class="tw-self-end"
      :class="`dynamic-right-${dynamicSize}`"
      :color="color === 'positive' ? color : 'negative'"
      :size="dynamicSize"
      :dynamic="dynamic"
    />
    <div
      :class="`tw-text-${color} number size-${size}`"
      :style="[tail ? { 'margin-right': tailLeft } : {}]"
    >
      {{ number }}
    </div>
    <div class="tail" :class="`tail-size-${tailSize}`">{{ tail }}</div>
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
    tailLeft: {
      default: '20px',
      type: String,
    },
    dynamic: {
      default: undefined,
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
.size-xs {
  font-size: 60px;
}

.size-xs2 {
  font-size: 80px;
}

.size-xs3 {
  font-size: 96px;
}

.size-xs4 {
  font-size: 100px;
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
  @apply tw-font-bold tw-font-roboto;
}

.tail {
  line-height: 120%;
  @apply tw-font-bold tw-self-end tw-font-roboto;
}

.tail-size-md {
  font-size: 48px;
}

.tail-size-lg {
  font-size: 64px;
}

.dynamic-right-md2 {
  margin-right: 16px;
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
