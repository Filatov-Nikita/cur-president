<template>
  <div class="tw-text-center empty">
    <img src="~assets/empty-data.svg" alt="empty" class="tw-mx-auto tw-mb-24" />
    <p class="tw-text-md tw-font-semibold">Данные уточняются</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.empty {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
