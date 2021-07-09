<template>
  <div class="tw-flex">
    <p
      class="tw-font-roboto"
      :class="[colorClass, textSize]"
      :style="hasIt ? { 'margin-right': numberOffset } : {}"
    >
      <animated-number
        :round="0"
        v-if="!replaceValue"
        :value="cleanValue"
        :duration="400"
        :complete="complete"
        :formatValue="formatToPrice"
      />
      <span v-else-if="pretty">
        {{ value | prettyAmount }}
      </span>
      <span v-else>{{ value }}</span>
    </p>
    <p class="it" v-if="hasIt">
      {{ it }}
    </p>
  </div>
</template>

<script>
import AnimatedNumber from 'animated-number-vue';

export default {
  name: 'BoardNumbers',
  inheritAttrs: false,
  props: {
    it: {
      default: undefined,
      type: String,
    },
    numberOffset: {
      default: '29px',
      type: String,
    },
    color: {
      default: 'white',
      type: String,
    },
    value: {
      default: undefined,
      type: String,
    },
    pretty: {
      default: false,
      type: Boolean,
    },
    size: {
      default: 'sm',
      type: String,
    },
  },
  data() {
    return {
      replaceValue: false,
    };
  },
  computed: {
    hasIt() {
      return this.it !== undefined;
    },
    colorClass() {
      return 'tw-text-' + this.color;
    },
    textSize() {
      return 'slide-text-' + this.size;
    },
    cleanValue() {
      return this.value.replace(/[^0-9.]/g, '');
    },
  },
  methods: {
    formatToPrice(value) {
      return `${Math.round(Number(value))}`;
    },
    complete(a) {
      this.replaceValue = true;
    },
  },
  components: {
    AnimatedNumber,
  },
};
</script>

<style scoped>
.down::after {
  transform: rotate(180deg);
}

.numbers::after {
  content: '';
  display: inline-block;
  width: 60px;
  height: 60px;
  background: url(../icons/position-arrow.svg) no-repeat;
}

.numbers {
  white-space: nowrap;
}

.value {
  display: inline-block;
}

.it {
  line-height: 130%;
  font-size: 48px;
  @apply tw-font-bold tw-text-white tw-self-start;
}
</style>
