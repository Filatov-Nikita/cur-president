<template>
  <div>
    <q-carousel
      ref="slider"
      class="carousel"
      :class="[
        contentClass,
        { 'carousel-center': !onTheLeft, 'carousel-standart': !wFull },
      ]"
      v-model="innerValue"
      :height="height"
      animated
    >
      <slot />
    </q-carousel>
    <div
      class="tw-flex tw-items-center tw-justify-center controls"
      :class="controlClass"
    >
      <button
        @click="previousSlide"
        class="slider-button tw-mr-12"
        :class="{
          'tw-invisible': innerValue === slides[0],
        }"
      ></button>
      <HoneycompMaker
        class="tw-mx-4 tw-cursor-pointer"
        @click="innerValue = item"
        v-for="item in slides"
        :key="item"
        :color="innerValue === item ? 'positive' : 'white'"
        :w="26"
      />
      <button
        @click="nextSlide"
        class="slider-button slider-button-right tw-ml-12"
        :class="{
          'tw-invisible': innerValue === slides[slides.length - 1],
        }"
      ></button>
    </div>
  </div>
</template>

<script>
import HoneycompMaker from 'src/components/Honeycomb/HoneycompMaker';

export default {
  props: {
    value: {
      required: true,
      type: String,
    },
    slides: {
      required: true,
      type: Array,
    },
    height: {
      default: '1351px',
      type: String,
    },
    onTheLeft: {
      default: false,
      type: Boolean,
    },
    controlClass: {
      default: '',
      type: String,
    },
    contentClass: {
      default: '',
      type: String,
    },
    wFull: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      innerValue: '',
    };
  },
  created() {
    this.innerValue = this.value;
  },
  methods: {
    nextSlide() {
      this.$refs.slider.next();
    },
    previousSlide() {
      this.$refs.slider.previous();
    },
  },
  watch: {
    value(newVal) {
      if (newVal !== this.innerValue) this.innerValue = newVal;
    },
    innerValue(value) {
      this.$emit('input', value);
    },
  },
  components: {
    HoneycompMaker,
  },
};
</script>

<style scoped>
.carousel {
  background: transparent;
}

.carousel-standart {
  max-width: 86%;
}

.carousel-center {
  @apply tw-mx-auto;
}

.slider-button {
  width: 140px;
  height: 42px;
  background: url(~assets/icons/slider-arrow.svg);
}

.slider-button-right {
  transform: rotate(180deg);
}

.controls {
  margin-top: 100px;
}
</style>
