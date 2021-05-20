<template>
  <q-page class="tw-flex tw-flex-col tw-justify-center tw-items-center">
    <div>
      <a href="https://im.gosuslugi.ru" target="_blank" class="link1">
        <img :src="require('./link1.svg')" alt="" />
      </a>
      <a href="https://pos.gosuslugi.ru" target="_blank">
        <img :src="require('./link2.svg')" alt="" />
      </a>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style scoped>
.link1 {
  display: block;
  margin-bottom: 78px;
}
</style>
