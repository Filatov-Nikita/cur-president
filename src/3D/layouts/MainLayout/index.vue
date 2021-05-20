<template>
  <q-layout class="app-main-bg">
    <q-page-container>
      <router-view class="container" />
    </q-page-container>
    <section class="bar">
      <RightBar class="menu" />
    </section>
    <MainFooter />
  </q-layout>
</template>

<script>
import MainFooter from './MainFooter';
import RightBar from 'src/layouts/Statistics/RightBar';

export default {
  components: {
    MainFooter,
    RightBar,
  },
};
</script>

<style scoped>
.bar {
  position: fixed;
  right: 0;
  top: 0;
  width: 1002px;
  height: 100%;
  padding-top: 132px;
  padding-right: 74px;
  background: linear-gradient(270deg, #141b32 12.24%, rgba(20, 27, 50, 0) 100%);
}

.menu {
  margin-left: auto;
  max-width: 648px;
}

.container {
  padding-left: 102px;
}
</style>
