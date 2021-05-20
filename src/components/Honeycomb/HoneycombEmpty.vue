<template>
  <div class="honeycomb honeycomb-empty"></div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$sideHeight: 124px;

.honeycomb {
  position: relative;
  width: 432px;
  height: 250px;
  margin-top: $sideHeight;
  margin-bottom: $sideHeight;
  background: #1A243F;
}

.honeycomb::after,
.honeycomb::before {
  content: '';
  position: absolute;
  width: 0;
  border-left: 216px solid transparent;
  border-right: 216px solid transparent;
}

.honeycomb::before {
  bottom: 100%;
  border-bottom: $sideHeight solid #1A243F;
}

.honeycomb::after {
  top: 100%;
  border-top: $sideHeight solid #1A243F;
}
</style>
