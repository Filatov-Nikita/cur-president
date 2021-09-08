<template>
  <q-layout class="layout" style="height: 2160px; overflow: hidden">
    <q-page-container class="tw-z-10 tw-relative">
      <router-view class="wrapper main-py" />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.layout {
  background: url('/images/3D/main-map.jpg') no-repeat;
  background-size: cover;
}

.wrapper {
  padding-left: 112px;
  padding-right: 112px;
}

.main-py {
  padding-top: 140px;
  padding-bottom: 80px;
}
</style>
