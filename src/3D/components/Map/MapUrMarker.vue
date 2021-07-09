<template>
  <router-link
    :to="{
      name: '3D.branches.ur-help.centers.map',
      params: { id: districtId },
      query: $route.query,
    }"
    class="marker"
    :style="{ left, top }"
  >
    <div v-if="col > 1" class="col" :class="`col-${size}`">
      {{ col }}
    </div>
    <svg
      v-if="size === 'sm'"
      width="42"
      height="55"
      :viewBox="`0 0 42 55`"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M21.1471 8.66666C14.4419 8.66666 9 14.0822 9 20.7587C9 27.4352 14.4581 32.8831 21.1471 32.8831C27.836 32.8831 33.2941 27.4352 33.2941 20.7587C33.2941 14.0822 27.836 8.66666 21.1471 8.66666Z"
          fill="#01F859"
        />
        <path
          d="M40.9772 14.2959C39.0392 8.03322 33.9252 2.94142 27.6591 0.997085C21.0162 -1.05467 13.9426 0.0839988 8.54858 4.05861C3.19764 7.99025 0 14.2959 0 20.9238C0 25.5 1.45347 29.8399 4.18816 33.4815L21.0054 54.9981L37.8119 33.4922C41.9139 28.0352 43.0659 21.0313 40.9772 14.2959ZM21.0054 32.2139C14.7716 32.2139 9.70059 27.1543 9.70059 20.9346C9.70059 14.7149 14.7716 9.65529 21.0054 9.65529C27.2392 9.65529 32.3102 14.7149 32.3102 20.9346C32.3102 27.1543 27.2392 32.2139 21.0054 32.2139Z"
          fill="#00092E"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="42" height="55" fill="white" />
        </clipPath>
      </defs>
    </svg>

    <svg
      v-else-if="size === 'lg'"
      width="126"
      height="165"
      viewBox="0 0 126 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M63.4412 26C43.3257 26 27 42.2467 27 62.2761C27 82.3056 43.3742 98.6493 63.4412 98.6493C83.5081 98.6493 99.8824 82.3056 99.8824 62.2761C99.8824 42.2467 83.5081 26 63.4412 26Z"
          fill="#01F859"
        />
        <path
          d="M122.932 42.8915C117.118 24.1034 101.775 8.82805 82.9772 2.99504C63.0485 -3.16024 41.8277 0.255781 25.6457 12.1796C9.59293 23.9745 0 42.8915 0 62.7753C0 76.5038 4.36042 89.5234 12.5645 100.448L63.0162 164.998L113.436 100.48C125.742 84.1093 129.198 63.0976 122.932 42.8915ZM63.0162 96.6454C44.3148 96.6454 29.1018 81.4667 29.1018 62.8075C29.1018 44.1484 44.3148 28.9697 63.0162 28.9697C81.7175 28.9697 96.9305 44.1484 96.9305 62.8075C96.9305 81.4667 81.7175 96.6454 63.0162 96.6454Z"
          fill="#00092E"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="126" height="165" fill="white" />
        </clipPath>
      </defs>
    </svg>

    <svg
      v-else-if="size === 'md'"
      width="68"
      height="90"
      viewBox="0 0 68 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.2404 14.0383C23.3836 14.0383 14.5723 22.807 14.5723 33.6174C14.5723 44.4278 23.4098 53.2489 34.2404 53.2489C45.071 53.2489 53.9086 44.4278 53.9086 33.6174C53.9086 22.807 45.071 14.0383 34.2404 14.0383Z"
        fill="#01F859"
      />
      <path
        d="M66.3491 23.1551C63.2112 13.0147 54.9306 4.77018 44.7848 1.62196C34.0288 -1.70019 22.5754 0.143519 13.8416 6.57909C5.17753 12.9451 0 23.1551 0 33.8868C0 41.2964 2.35342 48.3234 6.78134 54.2198L34.0113 89.0588L61.2239 54.2371C67.8657 45.4013 69.731 34.0607 66.3491 23.1551ZM34.0113 52.1673C23.9178 52.1673 15.7069 43.975 15.7069 33.9042C15.7069 23.8334 23.9178 15.6411 34.0113 15.6411C44.1049 15.6411 52.3157 23.8334 52.3157 33.9042C52.3157 43.975 44.1049 52.1673 34.0113 52.1673Z"
        fill="#00092E"
      />
    </svg>
  </router-link>
</template>

<script>
export default {
  props: {
    col: {
      required: true,
      type: Number,
    },
    centers: {
      required: true,
      type: Array,
    },
    districtId: {
      required: true,
      type: [String, Number],
    },
  },
  computed: {
    size() {
      const { col } = this;
      return col > 1 ? (col > 10 ? 'lg' : 'md') : 'sm';
    },
    svgSize() {
      if (this.size === 'lg') {
        return { width: '126', height: '165' };
      } else if (this.size === 'md') {
        return { width: '68', height: '90' };
      } else if (this.size === 'sm') {
        return { width: '42', height: '55' };
      }
    },
    left() {
      return this.centers[0].xall + 'px';
    },
    top() {
      return this.centers[0].yall + 'px';
    },
  },
};
</script>

<style scoped>
.marker {
  position: fixed;
  display: block;
  z-index: 1;
  font-size: 30px;
}

.col {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #081136;
  z-index: 2;
  @apply tw-font-bold;
}

.col-sm {
  font-size: 13px;
  top: 11px;
}

.col-md {
  top: 22px;
  font-size: 16px;
}

.col-lg {
  top: 38px;
  font-size: 30px;
}
</style>
