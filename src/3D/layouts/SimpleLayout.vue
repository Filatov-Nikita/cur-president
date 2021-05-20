<template>
  <q-layout class="bg">
    <q-page-container>
      <router-view />
    </q-page-container>
    <section class="bar">
      <RightBar class="menu" />
    </section>
    <q-footer class="footer">
      <div class="tw-flex-grow"></div>
      <DateDysplay />
    </q-footer>
  </q-layout>
</template>

<script>
import DateDysplay from 'src/components/DateDysplay';
import RightBar from 'src/layouts/Statistics/RightBar';

export default {
  components: {
    DateDysplay,
    RightBar,
  },
};
</script>

<style scoped>
.bg {
  background: url(/images/3D/simple-cover.jpg) no-repeat;
  background-size: cover;
}

.footer {
  display: flex;
  background: transparent;
}

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
</style>
