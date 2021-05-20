<template>
  <q-page class="main">
    <MapSelect style="margin-bottom: 93px" label="Уфимский район" />
    <MainTable />
    <div class="avatars">
      <AvatarItem style="margin-bottom: 49px" src="images/3D/ministr.jpg" />
      <AvatarItem
        src="images/3D/ufa.jpg"
        position="Административный центр"
        name="г. Уфа"
      />
    </div>
  </q-page>
</template>

<script>
import MapSelect from 'src/3D/components/MapSelect';
import MainTable from 'src/3D/components/Main/MainTable';
import AvatarItem from 'src/3D/components/Avatar/AvatarItem';

export default {
  components: {
    MainTable,
    MapSelect,
    AvatarItem,
  },
};
</script>

<style scoped>
.main {
  padding-top: 90px;
  background: url('/images/3D/ufa-map.jpg') no-repeat;
  background-size: cover;
}

.avatars {
  position: absolute;
  bottom: 118px;
  right: 72px;
  z-index: 10;
}
</style>
