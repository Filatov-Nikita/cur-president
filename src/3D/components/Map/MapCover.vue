<template>
  <div class="cover">
    <Map
      class="map"
      :navigation="navigation"
      :to="to"
      v-bind="districtsBranch ? { districtsBranch, transparent } : {}"
      @show:name="showName"
      @show:marker="toggleMarker"
    />
    <MapMarker
      v-if="showMarker"
      :left="marker.left"
      :top="marker.top"
      :districtName="mapDistricts[marker.id].Municipal_districts"
      :value="marker.value"
      :level="marker.level"
    />
    <MapDistrictName
      v-if="showDistName"
      :left="name.left"
      :top="name.top"
      :id="name.id"
      :name="mapDistricts[name.id].Municipal_districts"
    />
  </div>
</template>

<script>
import Map from './Index';
import MapMarker from './MapMarker';
import MapDistrictName from './MapDistrictName';
import { mapGetters } from 'vuex';

export default {
  props: {
    navigation: {
      default: false,
      type: Boolean,
    },
    to: {
      type: Object,
      default: undefined,
    },
    districtsBranch: {
      type: Object,
      default: undefined,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showMarker: false,
      showDistName: false,
      marker: {
        left: 0,
        top: 0,
        id: null,
        value: '',
        level: null,
      },
      name: {
        left: 0,
        top: 0,
        id: null,
      },
    };
  },
  computed: {
    ...mapGetters('_3D/districts', ['mapDistricts']),
  },
  methods: {
    showName(obj) {
      if (obj.hide) {
        return (this.showDistName = false);
      }
      const { e, id } = obj;
      this.name.id = id;
      (this.showDistName = !this.showDistName), (this.name.left = e.clientX);
      this.name.top = e.clientY;
    },
    toggleMarker(obj) {
      if (obj.hide) {
        return (this.showMarker = false);
      }
      const { e, id, value, level } = obj;
      this.marker.id = id;
      this.marker.value = value;
      this.marker.level = level;
      (this.showMarker = true), (this.marker.left = e.clientX);
      this.marker.top = e.clientY;
    },
  },
  components: {
    Map,
    MapMarker,
    MapDistrictName,
  },
};
</script>

<style scoped>
.cover {
  margin-top: -140px;
  width: 1440px;
  height: 1665px;
  background: url(./map-cover.png) no-repeat;
  position: relative;
}

.map {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
