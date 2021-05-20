<template>
  <button tag="button" @click="$router.go(-1)">
    <img :src="require('./button.svg')" />
  </button>
</template>

<script>
export default {};
</script>

<style>
</style>
