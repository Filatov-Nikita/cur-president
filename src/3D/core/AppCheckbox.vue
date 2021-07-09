<template>
  <ValidationProvider
    slim
    v-bind="{ vid, name, rules }"
    v-slot="{ errors, validate }"
  >
    <div
      class="tw-flex tw-items-center tw-cursor-pointer"
      role="checkbox"
      @click="toggle(validate)"
    >
      <div class="app-checkbox" :class="{ error: !!errors[0] }">
        <img
          class="check"
          v-show="innerValue"
          :src="require('./icons/check.svg')"
          alt="check"
        />
      </div>
      <label
        class="tw-cursor-pointer"
        :class="{ 'error-label': !!errors[0] }"
        >{{ label }}</label
      >
    </div>
    <div v-if="!!errors[0]" class="error-text">{{ errors[0] }}</div>
  </ValidationProvider>
</template>

<script>
import SyncValueMixin from 'src/mixins/SyncValueMixin';

export default {
  props: {
    value: {
      default: false,
      type: Boolean,
    },
    label: {
      default: '',
      type: String,
    },
    rules: {
      default: undefined,
      type: String,
    },
    vid: {
      default: undefined,
      type: String,
    },
    name: {
      default: undefined,
      type: String,
    },
  },
  mixins: [SyncValueMixin],
  methods: {
    async toggle(validate) {
      const valid = await validate(!this.innerValue);
      if (!valid) return;
      this.innerValue = !this.innerValue;
    },
  },
};
</script>

<style scoped>
.app-checkbox {
  width: 21px;
  height: 21px;
  border: 1px solid #7c7c7c;
  text-align: center;
  margin-right: 32px;
  position: relative;
}

.check {
  width: 13px;
  height: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.error {
  @apply tw-border-negative;
}

.error-label {
  @apply tw-text-negative;
}

.error-text {
  font-size: 20px;
  margin-top: 10px;
  @apply tw-text-negative;
}
</style>
