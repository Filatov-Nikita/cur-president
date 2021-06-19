<template>
  <div class="caption" :class="`tw-items-${align}`">
    <img
      class="icon"
      :src="require('./icons/' + icon + '.svg')"
      :style="{ 'margin-right': iconX }"
    />
    <div>
      <p
        class="caption-label"
        :class="normal ? '' : 'tw-font-bold'"
        :style="{ 'max-width': labelWMax, 'margin-bottom': labelY }"
      >
        {{ label }}
      </p>
      <p v-if="hasCaption">{{ caption }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardCaption',
  props: {
    label: {
      required: true,
      type: String,
    },
    caption: {
      default: undefined,
      type: String,
    },
    labelY: {
      default: '0px',
      type: String,
    },
    labelWMax: {
      default: '100%',
      type: String,
    },
    normal: {
      default: false,
      type: Boolean,
    },
    align: {
      default: 'start',
      type: String,
    },
    icon: {
      required: true,
      type: String,
    },
    iconX: {
      default: '40px',
      type: String,
    },
  },
  computed: {
    hasCaption() {
      return this.caption !== undefined;
    },
  },
};
</script>
<style scoped>
.caption {
  @apply tw-flex;
}

.caption-label {
  line-height: 100%;
  font-size: 30px;
  @apply tw-text-white;
}
</style>
