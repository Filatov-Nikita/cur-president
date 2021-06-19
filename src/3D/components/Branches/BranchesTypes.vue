<template>
  <ul :style="{ 'max-width': wMax }" class="ul">
    <li v-for="type in types" :key="type.value" class="li">
      <button
        class="btn-type"
        :class="{ 'btn-type--active': type.value === value }"
        @click="$emit('input', type.value)"
      >
        <div class="label">{{ type.label }}</div>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    wMax: {
      default: '422px',
      type: String,
    },
    types: {
      required: true,
      type: Array,
    },
    value: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.ul {
  position: absolute;
  z-index: 100;
  right: 300px;
  bottom: 72px;
}

.btn-type {
  font-size: 20px;
  color: theme('colors.white');
  @apply tw-flex tw-items-start;
}

.label {
  opacity: 0.5;
  text-decoration: underline;
  text-align: left;
}

.btn-type--active .label {
  opacity: 1 !important;
  font-size: 22px !important;
  text-decoration: none !important;
}

.btn-type::before {
  content: '';
  border-radius: 50%;
  margin-right: 32px;
  display: block;
  width: 20px;
  height: 20px;
  @apply tw-bg-white;
}

.btn-type--active::before {
  background: #ff0000 !important;
}

.li + .li {
  margin-top: 40px;
}
</style>
