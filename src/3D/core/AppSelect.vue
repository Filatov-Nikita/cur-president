<template>
  <ValidationProvider
    tag="div"
    class="select-container"
    ref="provider"
    v-bind="{ vid, name, rules }"
    :style="{ width }"
    v-slot="{ errors, validate }"
  >
    <div
      @click="open = !open"
      class="select"
      :class="{ active: open, error: !!errors[0] }"
    >
      {{ value === null ? label : value.label }}
    </div>
    <div v-click-outside="hide" v-show="open" class="options">
      <div class="options-offset">
        <div
          class="option"
          v-for="option in options"
          @click="change(option, validate)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
    <div v-if="!!errors[0]" class="error-text">{{ errors[0] }}</div>
  </ValidationProvider>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  props: {
    value: {
      default: null,
      type: Object,
    },
    label: {
      default: '',
      type: String,
    },
    options: {
      required: true,
      type: Array,
    },
    width: {
      default: '200px',
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
  mounted() {
    // prevent click outside event with popupItem.
    if (this.value) {
      this.$refs.provider.syncValue(this.value);
    }
    this.popupItem = this.$el;
  },
  directives: {
    ClickOutside,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    async change(option, validate) {
      const valid = await validate(option);
      if (!valid) return;
      this.$emit('input', option);
      this.hide();
    },
    hide() {
      this.open = false;
    },
  },
  watch: {
    value(value) {
      this.$refs.provider.syncValue(value);
    },
  },
};
</script>

<style scoped>
.select {
  display: block;
  padding-left: 40px;
  padding-right: 75px;
  padding-top: 21px;
  padding-bottom: 21px;
  border: 1px solid #7c7c7c;
  background: #151b33;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  @apply tw-text-sm;
}

.select::after {
  content: '';
  width: 40px;
  height: 18px;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  background: url(~assets/icons/map-select.svg);
}

.select.active::after {
  transform: translateY(-50%) rotate(180deg);
}

.options {
  margin-top: -3px;
  position: absolute;
  width: 100%;
  border: 1px solid #7c7c7c;
  border-top: none;
  background: #151b33;
  padding-left: 38px;
  padding-top: 15px;
  padding-bottom: 34px;
  padding-right: 45px;
}

.select-container {
  position: relative;
}

.options-offset {
  overflow-y: scroll;
  height: 350px;
  padding-right: 15px;
}

.option {
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  @apply tw-font-semibold;
}

.option + .option {
  margin-top: 10px;
}

.options-offset::-webkit-scrollbar {
  width: 2px;
  background-color: rgba(255, 255, 255, 0.23);
}

.options-offset::-webkit-scrollbar-thumb {
  background-color: #01f859;
  /* width: 6px; */
}

.error {
  @apply tw-border-negative;
}

.error-text {
  font-size: 20px;
  @apply tw-text-negative;
  margin-top: 10px;
}
</style>
