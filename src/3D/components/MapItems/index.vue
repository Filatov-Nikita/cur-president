<template>
  <router-link
    tag="div"
    class="items"
    :to="{ name: '3D.map-location.main' }"
  ></router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.items {
  /* max-width: 2848px; */
  height: 1409px;
  cursor: pointer;
  background-size: contain;
  background: url(./map-items.svg) no-repeat;
}

.items:hover {
  background: url(./map-items-active.svg) no-repeat;
  background-size: contain;
}
</style>
