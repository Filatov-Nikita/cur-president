<template>
  <div>
    <div
      v-click-outside="hide"
      class="popup"
      v-if="show"
      :style="{ left, top }"
    >
      <p class="name">{{ center.nane }}</p>
      <div class="address">
        <img style="margin-right: 31px" src="./geo-ur.svg" alt="" />
        <p>{{ center.address }}</p>
      </div>
      <div class="phone">
        <img style="margin-right: 31px" src="./phone-ur.svg" alt="" />
        <p v-html="center.phone1"></p>
      </div>
      <div class="tw-text-center">
        <AppButton
          label="Подробнее"
          color="blue"
          @click="
            $router.push({
              name: '3D.branches.ur-help.show.center',
              params: { center_id: center.id, id: districtId },
              query: $route.query,
            })
          "
        />
      </div>
    </div>

    <div class="marker" :style="{ left, top }">
      <svg
        @click="show = !show"
        width="53"
        height="69"
        viewBox="0 0 53 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M26.6859 10.8728C18.2246 10.8728 11.3574 17.6669 11.3574 26.0428C11.3574 34.4188 18.245 41.2534 26.6859 41.2534C35.1267 41.2534 42.0143 34.4188 42.0143 26.0428C42.0143 17.6669 35.1267 10.8728 26.6859 10.8728Z"
            fill="#01F859"
          />
          <path
            d="M51.7093 17.9361C49.2638 10.0792 42.8103 3.69133 34.9031 1.25207C26.5204 -1.32195 17.5942 0.106561 10.7875 5.09289C4.03512 10.0253 0 17.9361 0 26.2511C0 31.9921 1.83415 37.4366 5.28506 42.0052L26.5068 68.9988L47.715 42.0187C52.8913 35.1726 54.345 26.3859 51.7093 17.9361ZM26.5068 40.415C18.6404 40.415 12.2412 34.0675 12.2412 26.2646C12.2412 18.4616 18.6404 12.1142 26.5068 12.1142C34.3732 12.1142 40.7724 18.4616 40.7724 26.2646C40.7724 34.0675 34.3732 40.415 26.5068 40.415Z"
            fill="#00092E"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="53" height="69" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  props: {
    center: {
      required: true,
      type: Object,
    },
    districtId: {
      required: true,
      type: [String, Number],
    },
  },
  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    left() {
      return this.center.x + 'px';
    },
    top() {
      return this.center.y + 'px';
    },
  },
  methods: {
    hide() {
      this.show = false;
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style scoped>
.marker {
  position: fixed;
  z-index: 0;
}

.popup {
  width: 528px;
  padding: 39px;
  background: rgba(0, 7, 47, 0.86);
  backdrop-filter: blur(20px);
  position: fixed;
  z-index: 9;
}

.name {
  font-size: 30px;
  margin-bottom: 45px;
  @apply tw-font-bold;
}

.address,
.phone {
  font-size: 30px;
  display: flex;
  align-items: center;
}

.phone {
  margin-bottom: 49px;
}

.address {
  margin-bottom: 37px;
}
</style>
