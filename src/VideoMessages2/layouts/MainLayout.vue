<template>
  <q-layout
    class="layout"
    style="height: 2160px; overflow: hidden"
    :style="{
      'background-image': `url(${require(`assets/video-messages/` +
        bg +
        '.jpg')})`,
    }"
  >
    <q-page-container class="tw-z-10 tw-relative">
      <!-- <div class="logo">
        <img src="~/assets/cur-logo.svg" alt="" />
      </div> -->
      <router-view @update:background="changeBg" class="wrapper main-py" />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      bgName: 'standart',
    };
  },
  computed: {
    bg() {
      switch (this.bgName) {
        case 'two-h':
          return 'main-cover-3';
        case 'three-h':
          return 'main-cover-2';
        default:
          return 'main-cover-4';
      }
    },
  },
  methods: {
    changeBg(value) {
      this.bgName = value;
    },
  },
};
</script>

<style scoped>
.layout {
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position-x: -303px; */
}

/* .layout::after {
  content: '';
  background: rgba(4, 16, 61, 0.92);
  backdrop-filter: blur(42px);
  @apply tw-block tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0 tw-z-0;
} */

.logo {
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 133px;
  padding-right: 138px;
  max-width: 583px;
  box-sizing: content-box;
}

.wrapper {
  padding-left: 243px;
  padding-right: 243px;
}

.main-py {
  padding-top: 143px;
  padding-bottom: 130px;
}
</style>
