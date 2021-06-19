<template>
  <div class="board-head">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.board-head {
  background: #169bd8;
  color: theme('colors.white');
  font-size: 43px;
  padding: 20px 16px 31px 46px;
  @apply tw-font-semibold;
}
</style>
