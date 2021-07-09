<template>
  <q-page class="map">
    <section class="tw-flex tw-justify-between section">
      <p class="tw-text-sm">Выберите район</p>
      <button
        style="font-size: 30px"
        class="tw-flex tw-items-center"
        @click="$router.back()"
      >
        <div class="tw-underline" style="margin-right: 30px">закрыть</div>
        <img src="~/assets/icons/map-close.svg" />
      </button>
    </section>
    <section>
      <DistrictMenuItems />
      <!-- <MapItems /> -->
    </section>
  </q-page>
</template>

<script>
import MapItems from 'src/3D/components/MapItems';
import DistrictMenuItems from 'src/3D/components/District/Menu/DistrictMenuItems';

export default {
  data() {
    return {
      from: this.$route.query.from || null,
    };
  },
  components: {
    MapItems,
    DistrictMenuItems,
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
  background: #151b33;
}
</style>
