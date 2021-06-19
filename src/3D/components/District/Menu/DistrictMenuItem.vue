<template>
  <router-link :to="to">
    <HoneycompMaker
      @mouseenter="color = 'blue'"
      @mouseleave="color = 'eDark'"
      :w="247"
      :color="color"
    >
      <div class="chc">
        <img
          class="tw-mx-auto"
          :src="require('./Svg/' + icon + '.svg')"
          alt=""
        />
        <div class="name tw-mt-auto">{{ name }}</div>
      </div>
    </HoneycompMaker>
  </router-link>
</template>

<script>
import HoneycompMaker from 'src/components/Honeycomb/HoneycompMaker';

export default {
  beforeRouteEnter() {},
  props: {
    icon: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    id: {
      required: true,
      type: [String, Number],
    },
  },
  data() {
    return {
      color: 'eDark',
    };
  },
  computed: {
    to() {
      // const { name = '' } = this.$route;
      const { id } = this;
      // if (name.indexOf('3D.branches')) {
      //   return { params: { id } };
      // } else {
      return { name: '3D.show.district', params: { id } };
      // }
    },
  },
  components: {
    HoneycompMaker,
  },
};
</script>

<style scoped>
.name {
  font-size: 24px;
  @apply tw-font-semibold tw-text-center;
}

.chc {
  padding: 0px 25px;
  @apply tw-flex tw-flex-col  tw-h-full;
}
</style>
