<template>
  <div class="tw-flex tw-items-center">
    <q-img :src="src" class="img" />
    <div class="right">
      <div class="pos">{{ position }}</div>
      <div class="name">{{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      required: true,
      type: String,
    },
    position: {
      default: 'Глава администрации',
      type: String,
    },
    name: {
      default: 'Угаров Вилорий Петрович',
      type: String,
    },
  },
};
</script>

<style scoped>
.img {
  border-radius: 50%;
  /* border: 6px solid #ffffff; */
  width: 220px;
  height: 220px;
}

.pos {
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 7px;
}

.right {
  margin-left: 50px;
  max-width: 386px
}

.name {
  @apply tw-font-bold tw-text-sm;
}
</style>
