<template>
  <div :class="containerClasses">
    <div v-if="hasIcon" class="tw-mb-5" :class="`space-${space}`">
      <img :src="require(`./icons/${icon}.svg`)" alt="" />
    </div>
    <div class="caption">
      <slot>
        <p v-if="text" :class="`caption-${size}`">{{ text }}</p>
      </slot>
    </div>
    <div v-if="caption2" class="caption2">
      {{ caption2 }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      default: undefined,
      type: String,
    },
    text: {
      default: undefined,
      type: String,
    },
    caption2: {
      default: undefined,
      type: String,
    },
    size: {
      default: 'md',
      type: String,
    },
    space: {
      default: 'md',
      type: String,
    },
    type: {
      default: 'type1',
      validator(value) {
        return ['type1', 'type2'].includes(value);
      },
    },
  },
  computed: {
    hasIcon() {
      return this.icon !== undefined;
    },
    containerClasses() {
      return `${this.hasIcon && this.type === 'type1' ? 'tw-flex' : ''}`;
    },
  },
};
</script>

<style scoped>
.caption {
  @apply tw-font-bold;
}

.caption-sm {
  font-size: 26px;
}

.caption-md {
  font-size: 30px;
}

.caption-lg {
  font-size: 48px;
}

.caption2 {
  font-size: 25px;
  @apply tw-font-roboto;
}

.space-lg {
  margin-right: 41px;
}

.space-md {
  margin-right: 24px;
}
</style>
