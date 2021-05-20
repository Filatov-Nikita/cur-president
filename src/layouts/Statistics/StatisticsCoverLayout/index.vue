<template>
  <div class="cover" :style="coverStyle">
    <svg
      class="left"
      width="1432"
      height="2388"
      viewBox="0 0 1432 2388"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.9993 0.677675L49.9992 1563.32L1406.14 2344"
        :stroke="fill"
        stroke-width="100"
      />
    </svg>

    <svg
      class="right"
      width="1430"
      height="2387"
      viewBox="0 0 1430 2387"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1379.86 0L1379.86 1562.64L25 2343.32"
        :stroke="fill"
        stroke-width="100"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    fill: {
      default: '#FF0000',
      type: String,
    },
    width: {
      default: 2711,
      type: Number,
    },
  },
  computed: {
    coverStyle() {
      return {
        '--bg': this.fill,
      };
    },
  },
};
</script>
<style scoped>
.cover::after,
.cover::before {
  content: '';
  position: fixed;
  width: 100px;
  height: calc(100% - 848px);
  background: var(--bg);
  display: block;
  top: 0;
  z-index: 0;
}

.cover::before {
  left: 0;
}

.cover::after {
  right: 1129px;
}

.left,
.right {
  position: fixed;
  bottom: -125px;
  z-index: 0;
}

.left {
  left: 0;
}

.right {
  right: 1129px;
}
</style>
