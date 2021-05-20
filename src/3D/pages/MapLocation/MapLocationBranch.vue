<template>
  <q-page class="main">
    <div style="margin-bottom: 93px" class="tw-flex tw-items-center tw-w-full">
      <MapSelect
        style="flex-basis: 709px; margin-right: 124px"
        label="Уфимский район"
      />
      <h1 class="tw-text-md tw-font-semibold">Строительство</h1>
    </div>
    <MapLocationMainTable />

    <div class="points">
      <MapLocationPoint
        v-show="point.filterVal === filter || filter === 'all'"
        v-for="(point, index) in points"
        :key="index"
        :positions="point.positions"
        :type="point.type"
      />
    </div>

    <div class="btn-groups">
      <button
        v-ripple
        class="btn-item btn-item-positive"
        @click="changeFilter('1')"
        :class="filter === '1' ? 'btn-item-active' : ''"
      >
        <p>по плану</p>
      </button>
      <button
        v-ripple
        class="btn-item btn-item-warning"
        :class="filter === '2' ? 'btn-item-active' : ''"
        @click="changeFilter('2')"
      >
        <p>допустимое отклонение</p>
      </button>
      <button
        v-ripple
        class="btn-item btn-item-negative"
        @click="changeFilter('3')"
        :class="filter === '3' ? 'btn-item-active' : ''"
      >
        <p>с нарушением сроков</p>
      </button>
      <button
        v-ripple
        class="btn-item btn-item-neutral"
        @click="changeFilter('all')"
        :class="filter === 'all' ? 'btn-item-active' : ''"
      >
        <p>все объекты</p>
      </button>
    </div>

    <router-link
      class="list-objects"
      :to="{ name: '3D.map-location.slides.building' }"
    >
      <img :src="require('./list-objects.svg')" alt="" />
    </router-link>
  </q-page>
</template>

<script>
import MapSelect from 'src/3D/components/MapSelect';
import MapLocationMainTable from 'src/3D/components/MapLocation/Main/MapLocationMainTable';
import MapLocationPoint from 'src/3D/components/MapLocation/Points/MapLocationPoint';

export default {
  data() {
    return {
      filter: 'all',
      points: [
        {
          filterVal: '1',
          type: 'positive',
          positions: {
            left: '317px',
            top: '200px',
          },
        },
        {
          filterVal: '2',
          type: 'warning',
          positions: {
            left: '417px',
            top: '215px',
          },
        },
        {
          positions: {
            left: '450px',
            top: '315px',
          },
        },
        {
          filterVal: '3',
          type: 'negative',
          positions: {
            left: '817px',
            top: '415px',
          },
        },
        {
          filterVal: '1',
          type: 'positive',
          positions: {
            left: '717px',
            top: '450px',
          },
        },
        {
          filterVal: '1',
          type: 'positive',
          positions: {
            left: '617px',
            top: '415px',
          },
        },
      ],
    };
  },
  methods: {
    changeFilter(value) {
      if (this.filter === value) return (this.filter = 'all');
      this.filter = value;
    },
  },
  components: {
    MapLocationMainTable,
    MapSelect,
    MapLocationPoint,
  },
};
</script>

<style scoped>
.main {
  padding-top: 90px;
  background: url('/images/3D/branch-map.jpg') no-repeat;
  background-size: cover;
  position: relative;
}

.points {
  width: 1205px;
  height: 881px;
  position: absolute;
  left: 1463px;
  top: 613px;
}

.btn-groups {
  position: absolute;
  bottom: 107px;
  left: 1502px;
  max-width: 1256px;
  width: 100%;
  @apply tw-flex;
}

.list-objects {
  position: absolute;
  right: 96px;
  bottom: 87px;
  z-index: 1;
}

.btn-item {
  position: relative;
  text-align: left;
  font-size: 22px;
  background: rgba(0, 7, 47, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  padding: 14px 34px;
  line-height: 100%;
  @apply tw-w-1/3 tw-flex tw-items-center;
}

.btn-item p {
  flex-basis: 210px;
  opacity: 0.5;
}

.btn-item-active p {
  opacity: 1 !important;
}
.btn-item-active {
  color: #081136 !important;
  opacity: 1 !important;
  background: #ffffff !important;
}

.btn-item::before {
  opacity: 1;
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 32px;
}

.btn-item-positive::before {
  background: #01f859;
}

.btn-item-warning::before {
  background: #faff00;
}

.btn-item-negative::before {
  background: #ff4d00;
}

.btn-item-neutral::before {
  background: #081136;
}
</style>
