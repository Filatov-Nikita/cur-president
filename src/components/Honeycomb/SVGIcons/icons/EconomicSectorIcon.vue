<template>
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 14.32V0C8 1 0 9.58 0 20C0 30.42 8 39 18 40V25.68C16 24.86 14 22.64 14 20C14 17.36 16 15.14 18 14.32ZM25.72 18H40C39.04 8.5 32 0.94 22 0V14.32C24 14.92 25.04 16.28 25.72 18ZM22 25.68V40C32 39.06 39.04 31.5 40 22H25.72C25.04 23.72 24 25.08 22 25.68Z"
      :fill="fill"
    />
  </svg>
</template>

<script>
import IconsMixin from 'src/components/Honeycomb/SVGIcons/IconsMixin';

export default {
  mixins: [IconsMixin],
};
</script>

<style>
</style>
