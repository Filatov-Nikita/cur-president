<template>
  <div class="cover" :class="`cover-${size}`">
    <div class="content" :class="`content-${size}`">
      <p class="text" :class="`text-${size}`" v-html="text"></p>
    </div>
    <div class="corners">
      <div class="corners-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      default: 'md',
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.cover {
  background: linear-gradient(90deg, #12906031 0%, #12555f38 99.99%);
  position: relative;
  z-index: 3;
}

.cover-md {
  padding: 70px 78px;
  width: 954px;
}

.cover-lg {
  padding: 104px 94px;
  width: 1274px;
}

.corners::after,
.corners::before,
.corners-bottom::after,
.corners-bottom::before {
  content: '';
  display: block;
  width: 37px;
  height: 34px;
  background: url('~assets/board-corner.svg');
  position: absolute;
}

.corners::after {
  left: -5px;
  top: -1px;
}
.corners::before {
  right: -1px;
  top: -5px;
  transform: rotate(90deg);
}

.corners-bottom::after {
  left: -1px;
  bottom: -5px;
  transform: rotate(270deg);
}
.corners-bottom::before {
  right: -5px;
  bottom: -1px;
  transform: rotate(180deg);
}
.corners {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

.content-md {
  min-height: 354px;
}

.content-lg {
  min-height: 470px;
}

.content {
  background: linear-gradient(90deg, #129060b6 0%, #003b53b4 99.99%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 50px 20px;
}

.text {
  line-height: 91px;
  @apply tw-font-bold tw-text-center;
}

.text-md {
  font-size: 70px;
}

.text-lg {
  font-size: 60px;
}
</style>
