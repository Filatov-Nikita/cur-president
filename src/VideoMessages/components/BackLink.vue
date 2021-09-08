<template>
  <router-link class="back-arrow" v-bind="{ to }">
    <div class="icon"><img src="~assets/icons/back-arrow.svg" alt="" /></div>
    <div class="text"><slot /></div>
  </router-link>
</template>

<script>
import Vue from 'vue';
const RouterLink = Vue.options.components.RouterLink;
export default {
  props: {
    ...RouterLink.extendOptions.props,
  },
};
</script>

<style scoped>
.back-arrow {
  @apply tw-inline-block;
}

.back-arrow .text,
.back-arrow .icon {
  display: inline-block;
  vertical-align: middle;
}

.back-arrow .icon {
  margin-right: 40px;
}

.back-arrow .text {
  @apply tw-underline tw-text-md;
}
</style>
