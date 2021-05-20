<template>
  <div class="tw-relative">
    <svg
      v-if="!active"
      width="110"
      height="128"
      viewBox="0 0 110 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M110 95.4675L110 31.8052L55.0259 -2.40299e-06L-1.39025e-06 31.8052L-4.17302e-06 95.4675L55.0259 127.273L110 95.4675Z"
        fill="#2C3147"
      />
    </svg>
    <svg
      v-else
      width="110"
      height="128"
      viewBox="0 0 110 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55.0253 2.88791L107.5 33.2471L107.5 94.0257L55.0253 124.385L2.5 94.025L2.5 33.2477L55.0253 2.88791Z"
        stroke="#494F69"
        stroke-width="5"
      />
    </svg>
    <div class="icon">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
