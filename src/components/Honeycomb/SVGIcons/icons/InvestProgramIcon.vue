<template>
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 34C12.4183 34 16 30.4183 16 26C16 21.5817 12.4183 18 8 18C3.58172 18 0 21.5817 0 26C0 30.4183 3.58172 34 8 34Z"
      :fill="fill"
    />
    <path
      d="M27 40C29.7614 40 32 37.7614 32 35C32 32.2386 29.7614 30 27 30C24.2386 30 22 32.2386 22 35C22 37.7614 24.2386 40 27 40Z"
      :fill="fill"
    />
    <path
      d="M28 24C34.6274 24 40 18.6274 40 12C40 5.37258 34.6274 0 28 0C21.3726 0 16 5.37258 16 12C16 18.6274 21.3726 24 28 24Z"
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
