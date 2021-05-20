<template>
  <svg
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M31.8635 33.976C30.225 35.1813 28.2073 35.8854 26.0135 35.8854C20.5427 35.8854 16.101 31.4438 16.101 25.9729C16.101 21.0167 19.7302 16.9135 24.4833 16.1823V0C10.8469 0.785417 0 12.1198 0 25.9729C0 40.3406 11.6594 52 26.0271 52C32.6625 52 38.7156 49.5083 43.3198 45.4188L31.8635 33.976Z"
        :fill="fill"
      />
      <path
        d="M35.8188 27.5029C35.575 29.1008 34.9385 30.5769 34.0312 31.8227L45.474 43.2654C49.2521 39.0269 51.6625 33.529 52.0146 27.5029H35.8188Z"
        :fill="fill"
      />
      <path
        d="M27.543 16.1823C31.795 16.8323 35.1534 20.2042 35.8169 24.4563H51.9992C51.2409 11.3073 40.6919 0.758333 27.543 0V16.1823Z"
        :fill="fill"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="52" height="52" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  props: {
    active: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    fill() {
      return this.active ? '#494F69' : '#01AEF8';
    },
  },
};
</script>

<style>
</style>
