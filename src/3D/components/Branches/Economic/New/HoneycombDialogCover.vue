<template>
  <div class="cover">
    <div class="slot"><slot /></div>
    <svg
      class="svg"
      width="1839"
      height="2120"
      viewBox="0 0 1839 2120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b)">
        <path
          d="M1839 1590.22L1839 529.784L919.934 -4.01737e-05L9.89127e-05 529.784L5.25597e-05 1590.22L919.934 2120L1839 1590.22Z"
          fill="url(#paint0_linear)"
          fill-opacity="0.8"
        />
        <path
          d="M919.929 23.0821L1819 541.34L1819 1578.66L919.929 2096.92L20.0001 1578.65L20.0001 541.345L919.929 23.0821Z"
          :stroke="colors[color]"
          stroke-width="40"
        />
      </g>
      <defs>
        <filter
          id="filter0_b"
          x="-80"
          y="-80"
          width="1999"
          height="2280"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="40" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="919.5"
          y1="2120"
          x2="919.839"
          y2="-7.98215e-06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#01051C" />
          <stop offset="0.453125" stop-color="#040D37" />
          <stop offset="1" stop-color="#0D469E" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      default: 'positive',
      type: String,
    },
  },
  created() {
    this.colors = {
      positive: '#01F859',
      negative: '#FF0000'
    }
  }
};
</script>

<style scoped>
.cover {
  position: relative;
  width: 1839px;
  height: 2120px;
}

.svg {
  position: absolute;
  left: 0;
  top: 0;
}

.slot {
  position: absolute;
  width: 100%;
  height: 100%;
  padding-right: 40px;
  padding-left: 40px;
}
</style>
