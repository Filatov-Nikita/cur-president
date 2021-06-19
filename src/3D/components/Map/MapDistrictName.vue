<template>
  <div
    @click="push"
    class="name"
    :style="{ left: left + 'px', top: top + 'px' }"
  >
    <span v-html="nameLocal"></span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
    },
    top: {
      default: 0,
      type: Number,
    },
    left: {
      default: 0,
      type: Number,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    nameLocal() {
      const words = this.name.split(' ');
      const firstWord = words[0];
      if (firstWord.length < 3) return this.name;
      else return words.join('<br/>');
    },
  },
  methods: {
    push() {
      return this.$router.push({
        name: '3D.show.district',
        params: { id: this.id },
      });
    },
  },
};
</script>

<style scoped>
.name {
  cursor: pointer;
  position: fixed;
  background: #141d43;
  line-height: 14px;
  font-size: 14px;
  padding: 5px 10px;
  @apply tw-font-semibold tw-text-center tw-inline-block;
}
</style>
