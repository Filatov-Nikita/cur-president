<template>
  <svg
    :class="[{ down: !dynamic }, 'size__' + size]"
    width="22"
    height="18"
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 0L21.3923 18L0.607696 18L11 0Z"
      :fill="
        color
          ? themes[theme][color]
          : dynamic
          ? themes[theme].positive
          : themes[theme].negative
      "
    />
  </svg>
</template>

<script>
export default {
  created() {
    this.themes = {
      honeycomb: {
        positive: '#01F859',
        negative: '#8A0000',
      },
      classic: {
        positive: '#01F859',
        negative: '#FF0000',
      },
    };
  },
  props: {
    color: {
      default: undefined,
      type: String,
    },
    dynamic: {
      default: false,
      type: Boolean,
    },
    theme: {
      default: 'classic',
      validator(value) {
        return ['classic', 'honeycomb'].includes(value);
      },
    },
    size: {
      default: 'sm',
      validator(value) {
        return ['sm', 'md', 'md2', 'lg', 'lg2', 'xl'].includes(value);
      },
    },
  },
};
</script>

<style scoped>
.down {
  transform: rotate(180deg);
}

.size__sm {
  width: 24px;
  height: 24px;
}

.size__md {
  width: 24px;
  height: 21px;
}

.size__md2 {
  width: 29px;
  height: 24px;
}

.size__lg {
  width: 48px;
  height: 40px;
}

.size__lg2 {
  width: 98px;
  height: 81px;
}

.size__xl {
  width: 131px;
  height: 110px;
}
</style>
