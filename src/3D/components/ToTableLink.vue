<template>
  <router-link v-if="to" v-on="$listeners" class="link" :to="to">
    <img class="icon" src="./table-link.svg" alt="" />
    <div>
      {{ label }}
    </div>
  </router-link>
  <button v-else v-on="$listeners" class="link">
    <img class="icon" src="./ur-chat.svg" alt="" />
    <div>
      {{ label }}
    </div>
  </button>
</template>

<script>
export default {
  props: {
    to: {
      default: undefined,
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
