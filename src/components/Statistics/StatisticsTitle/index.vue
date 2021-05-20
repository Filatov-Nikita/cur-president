<template>
  <div class="tw-flex tw-items-start">
    <img class="icon" :src="require(`./icons/${icon}.svg`)" :alt="icon" />
    <div>
      <h1 class="title tw-font-bold tw-uppercase text">{{ text }}</h1>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 65px;
  line-height: 65px;
}

.icon {
  margin-right: 61px;
}
</style>
