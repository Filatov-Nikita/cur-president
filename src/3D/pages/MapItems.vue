<template>
  <q-page class="map">
    <section class="tw-flex tw-justify-between section">
      <p class="tw-text-sm">Выберите район</p>
      <router-link
        style="font-size: 30px"
        class="tw-flex tw-items-center"
        to="/3d/home"
      >
        <div class="tw-underline" style="margin-right: 30px">закрыть</div>
        <img src="~/assets/icons/map-close.svg" />
      </router-link>
    </section>
    <section>
      <MapItems />
    </section>
  </q-page>
</template>

<script>
import MapItems from 'src/3D/components/MapItems';

export default {
  components: {
    MapItems,
  },
};
</script>

<style scoped>
.section {
  max-width: 2848px;
  margin-bottom: 121px;
}

.map {
  padding-top: 100px;
}
</style>
