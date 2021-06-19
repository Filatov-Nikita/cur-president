<template>
  <path
    class="map-item"
    v-click-outside="hide"
    :d="d"
    :fill="fillLocal"
    :fill-opacity="opacityLocal"
    @click="onClick"
  />
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  created() {
    this.levelColors = {
      min: '#F82D01',
      mid: '#F3F801',
      max: '#01F859',
    };
  },
  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },
  props: {
    d: {
      required: true,
      type: String,
    },
    to: {
      type: Object,
      default: undefined,
    },
    id: {
      type: Number,
      required: true,
    },
    navigation: {
      default: false,
      type: Boolean,
    },
    transparent: {
      default: false,
      type: Boolean,
    },
    level: {
      default: undefined,
      type: String,
      validator(value) {
        return ['min', 'mid', 'max'].includes(value);
      },
    },
    value: {
      default: undefined,
      type: String,
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  computed: {
    fillLocal() {
      return this.navigation
        ? this.levelColors.max
        : this.levelColors[this.level];
    },
    opacityLocal() {
      if (this.navigation) {
        return this.selected ? 0.6 : 0;
      } else if (this.transparent) {
        return this.selected ? 0.6 : 0;
      } else {
        return 0.6;
      }
    },
  },
  methods: {
    hide(e) {
      if (this.navigation) {
        if (this.selected) {
          this.selected = false;
          this.$emit('show:name', { hide: true });
        }
      } else {
        if (this.transparent) {
          this.selected = false;
        }
        this.$emit('show:marker', { hide: true });
      }
    },
    onClick(e) {
      if (this.navigation) {
        if (this.selected) {
          this.$router.push({
            name: (this.to && this.to.name) || '3D.show.district',
            params: { id: this.id },
          });
        }
        setTimeout(() => {
          this.selected = !this.selected;
          this.$emit('show:name', { e, id: this.id });
        }, 0);
      } else {
        if (this.transparent) {
          const { level, value, id } = this;
          setTimeout(() => {
            if (!this.selected) {
              this.$emit('show:marker', { e, id, level, value });
            } else {
              this.$router.push({
                name: (this.to && this.to.name) || '3D.show.district',
                params: { id: this.id },
              });
            }
            this.selected = !this.selected;
          }, 0);
        } else {
          const { level, value, id } = this;
          if (this.selected) {
            this.$router.push({
              name: (this.to && this.to.name) || '3D.show.district',
              params: { id: this.id },
            });
          }
          this.selected = !this.selected;
          setTimeout(() => {
            this.$emit('show:marker', { e, id, level, value });
          }, 0);
        }
      }
    },
    toggleMarker(e) {
      const marker = {
        left: e.clientX,
        top: e.clientY,
      };
      this.$emit('marker', {
        ...marker,
      });
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style scoped>
.map-item {
  cursor: pointer;
}
</style>
