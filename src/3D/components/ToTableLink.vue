<template>
  <router-link class="link" :to="to">
    <img class="icon" src="./table-link.svg" alt="" />
    <div>
      {{ label }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      required: true,
      type: Object,
    },
    label: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.icon {
  margin-right: 57px;
}

.link {
  max-width: 634px;
  width: 100%;
  font-size: 35px;
  line-height: 35px;
  @apply tw-flex tw-items-center tw-font-semibold;
}
</style>
