<template>
  <q-layout>
    <q-header class="header main-wrapper tw-flex tw-justify-between">
      <img src="~assets/cur-logo.svg" alt="cur-logo" />
      <img src="~assets/bash-logo.svg" alt="bash-logo" />
    </q-header>
    <q-page-container>
      <q-page>
        <!-- <h1 class="title">
          презентация центра <br />
          управления республикой
        </h1> -->
        <MainVideoBackground src="videos/main.mp4" />
      </q-page>
    </q-page-container>
    <q-footer class="footer">
      <MainMenu />
    </q-footer>
  </q-layout>
</template>

<script>
import MainVideoBackground from 'src/components/Main/MainVideoBackground';
import MainMenu from 'src/components/Main/MainMenu';

export default {
  components: {
    MainVideoBackground,
    MainMenu,
  },
};
</script>

<style scoped>
.header {
  background: transparent;
}

.main-wrapper {
  padding-top: 156px;
  padding-left: 167px;
  padding-right: 165px;
}

.title {
  font-size: 140px;
  line-height: 164px;
  font-family: 'Roboto Condensed';
  @apply tw-font-bold tw-uppercase tw-text-center;
}

.footer {
  background: transparent;
  padding-bottom: 165px;
}
</style>
