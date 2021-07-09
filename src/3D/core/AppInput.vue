<template>
  <ValidationProvider
    tag="div"
    v-bind="{ vid, name, rules }"
    v-slot="{ errors }"
  >
    <label class="app-label" :for="_uid">{{ label }}</label>
    <input
      class="app-input"
      :class="{ error: !!errors[0] }"
      :id="_uid"
      v-bind="{ type, placeholder }"
      v-model="innerValue"
    />
    <div class="error-text" v-if="!!errors[0]">{{ errors[0] }}</div>
  </ValidationProvider>
</template>

<script>
import SyncValueMixin from 'src/mixins/SyncValueMixin';

export default {
  props: {
    type: {
      default: 'text',
      type: String,
    },
    placeholder: {
      default: '',
      type: String,
    },
    label: {
      required: true,
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
};
</script>

<style scoped>
.app-input {
  display: block;
  border: 1px solid #7c7c7c;
  height: 80px;
  width: 100%;
  padding: 20px 40px;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.4);
  background: transparent;
}

.error {
  @apply tw-border-negative;
}

.app-label {
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
  display: inline-block;
}

.error-text {
  margin-top: 10px;
  font-size: 20px;
  @apply tw-text-negative;
}
</style>
