<template>
  <div>
    <div class="tw-text-xs tw-mb-5 tw-flex">
      <img src="~/assets/icons/curator.svg" alt="curator" class="tw-mr-6" />
      <p>Куратор направления:</p>
    </div>
    <p class="tw-text-md tw-font-bold tw-underline">{{ fio }}</p>
  </div>
</template>

<script>
export default {
  props: {
    fio: {
      required: true,
      type: String,
    },
  },
};
</script>

<style>
</style>
