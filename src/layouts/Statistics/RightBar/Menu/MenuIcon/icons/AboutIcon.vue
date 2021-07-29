<template>
  <svg
    width="45"
    height="45"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM26.8945 13.2715C26.8945 15.6499 24.9664 17.5781 22.5879 17.5781C20.2094 17.5781 18.2812 15.6499 18.2812 13.2715C18.2812 10.893 20.2094 8.96484 22.5879 8.96484C24.9664 8.96484 26.8945 10.893 26.8945 13.2715ZM26.543 19.8633V33.0469H28.6523V35.8594H26.543H23.3789H21.7969H18.6328H16.5234V33.0469H18.6328V22.6758H16.5234V19.8633H18.6328H21.7969H26.543Z"
      :fill="fill"
    />
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
      return this.active ? '#494F69' : '#0676FA';
    },
  },
};
</script>
<style>
</style>
