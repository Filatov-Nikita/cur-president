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
        <div class="name tw-mt-auto">
          <p>{{ nameParts[0] }}</p>
          <p>{{ nameParts[1] }}</p>
        </div>
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
    nameParts() {
      return this.name.split(' ');
    },
    to() {
      // const { name = '' } = this.$route;
      const { id } = this;
      if (
        this.$store.getters['_3D/from'] &&
        this.$store.getters['_3D/from'].name !== '3D.main'
      ) {
        return {
          ...this.$store.getters['_3D/from'],
          params: { ...this.$store.getters['_3D/from'].params, id },
        };
      }
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
  font-size: 23px;
  line-height: 114.5%;
  @apply tw-font-semibold tw-text-center;
}

.chc {
  margin-top: -13px;
  padding: 0px 5px;
  @apply tw-flex tw-flex-col  tw-h-full;
}
</style>
