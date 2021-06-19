<template>
  <div>
    <p class="label">{{ label }}</p>
    <div class="tw-flex tw-items-center">
      <div class="num">{{ left }}</div>
      <div class="tw-flex-grow" style="margin-right: 15px; margin-left: 15px">
        <img
          class="tw-w-full"
          style="min-width: 30px;"
          height="19px"
          src="./arrow.svg"
          alt=""
        />
      </div>
      <div class="num tw-text-positive">{{ right }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    left: {
      type: String,
      required: true,
    },
    right: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.num {
  font-size: 40px;
  @apply tw-font-bold;
}

.label {
  font-size: 16px;
}
</style>
