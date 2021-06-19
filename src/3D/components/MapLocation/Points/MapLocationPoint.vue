<template>
  <div v-click-outside="hide" @click="toggle" class="point" :style="position">
    <img :src="require(`./icons/${type}.svg`)" />

    <div class="popup" v-if="show">
      <div class="label" :class="`label-${type}`">
        <p>{{ title }}</p>
      </div>
      <div class="tw-flex">
        <div class="left">
          <p class="subtitle">отклонение от графика</p>
          <p :class="`text-${type}`">{{ `${value}%` }}</p>
        </div>
        <q-img v-if="photo !== ''" :src="`images/3D/points/${photo}.jpg`" />
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },

  // do not forget this section
  directives: {
    ClickOutside,
  },
  props: {
    title: {
      required: true,
      type: String,
    },
    value: {
      required: true,
      type: [String, Number],
    },
    photo: {
      required: true,
      type: String,
    },
    left: {
      required: true,
      type: String,
    },
    top: {
      required: true,
      type: String,
    },
    type: {
      default: 'positive',
      type: String,
    },
    positions: {
      type: Object,
      default() {
        return {
          left: '0px',
          top: '0px',
        };
      },
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    position() {
      const left = `${(this.left / 3840) * 100}%`;
      const top = `${(this.top / 2160) * 100}%`;
      return {
        left,
        top,
      };
    },
  },
  methods: {
    hide() {
      this.show = false;
    },
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.point {
  width: 70px;
  height: 92px;
  position: absolute;
  cursor: pointer;
}

.popup {
  background: rgba(0, 7, 47, 0.86);
  backdrop-filter: blur(20px);
  position: absolute;
  padding-top: 48px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 28px;
  min-width: 675px;
  width: 100%;
  z-index: 10;
}

.left {
  margin-right: 63px;
}

.label {
  font-size: 30px;
  display: flex;
  margin-bottom: 40px;
}

.label p {
  flex-basis: 503px;
}

.label::before {
  content: '';
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 35px;
  margin-top: 15px;
}

.label-positive::before {
  background: #01f859;
}

.label-warning::before {
  background: #faff00;
}

.label-negative::before {
  background: #ff4d00;
}

.text-positive {
  color: #01f859;
  font-size: 100px;
  @apply tw-font-bold;
}

.text-warning {
  color: #faff00;
  font-size: 100px;
  @apply tw-font-bold;
}

.text-negative {
  color: #ff4d00;
  font-size: 100px;
  @apply tw-font-bold;
}

.subtitle {
  font-size: 30px;
}
</style>
