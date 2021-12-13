<template>
  <q-page>
    <PageHead class="head-mb" uppercase>
      <div style="margin-bottom: 23px">Видеобращения</div>
      <div>Радия Хабирова</div>
    </PageHead>

    <BoardsCarousel
      v-model="currentSlide"
      :slides="slideIndexes"
      contentClass="_VideoMess-slider"
      controlClass="_VideoMess-control"
      class="slider"
      height="1470px"
      onTheLeft
    >
      <q-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :name="index.toString()"
      >
        <div class="bg">
          <div class="tw-inline-flex tw-flex-wrap row">
            <BranchItem
              class="branchItem"
              :name="item.name"
              :districtName="item.districtName"
              :icon="mapDistricts[item.districtId].icon"
              v-bind="{ cityDistrictName: item.cityDistrictName || undefined }"
              v-for="(item, i) in slide"
              :key="i"
            >
              <template #index>{{ index * 6 + i + 1 }}</template>
            </BranchItem>
          </div>
        </div>
      </q-carousel-slide>
    </BoardsCarousel>
    <BackLink class="back-btn" :to="{ name: 'videomess.main' }">
      Назад к категориям</BackLink
    >
  </q-page>
</template>

<script>
import PageHead from 'src/VideoMessages/components/PageHead';
import BoardsCarousel from 'src/components/BoardsCarousel';
import BranchItem from 'src/VideoMessages/components/BranchItem';
import BackLink from 'src/VideoMessages/components/BackLink';
import { mapGetters } from 'vuex';

export default {
  created() {
    this.$emit('update:background', 'standart');
  },
  data() {
    return {
      items: getItems(),
      currentSlide: '0',
    };
  },
  computed: {
    slideIndexes() {
      return this.slides.map((el, index) => index.toString());
    },
    slides() {
      return this.getRows(this.items, 6);
    },
    ...mapGetters('_3D/districts', ['mapDistricts']),
  },
  methods: {
    getRows(items, itemsCount = 3) {
      if (items.length <= itemsCount) return [items];
      const row = items.slice(0, itemsCount);
      const rest = items.slice(itemsCount);
      return [row, ...this.getRows(rest)];
    },
  },
  components: {
    PageHead,
    BoardsCarousel,
    BranchItem,
    BackLink,
  },
};

function getItems() {
  return [
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      districtId: 1,
    },
    {
      name: 'Ягудин Д. С.',
      districtName: 'Уфа г.о',
      districtId: 62,
      cityDistrictName: 'Кировский район',
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      districtId: 10,
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      districtId: 10,
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      districtId: 10,
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      districtId: 10,
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      districtId: 10,
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      districtId: 10,
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      districtId: 10,
    },
  ];
}
</script>
<style>
._VideoMess-slider {
  max-width: 100% !important;
}

._VideoMess-control {
  margin-top: 121px !important;
}
</style>
<style scoped>
.branchItem + .branchItem {
  margin-top: -1px;
  margin-left: -1px;
}
.slider {
  max-width: 2178px;
}

.head-mb {
  margin-bottom: 99px;
  line-height: 100%;
}

.back-btn {
  position: absolute;
  transform: translateY(-50px);
}

.row {
  margin-left: -16px;
  position: relative;
  z-index: 10;
}

.bg {
  position: relative;
  z-index: 0;
}

.bg::after {
  content: '';
  background: linear-gradient(
    270.01deg,
    rgba(1, 5, 28, 0.8) 0.01%,
    rgba(4, 13, 55, 0.8) 45.31%,
    rgba(13, 70, 158, 0.8) 99.99%
  );
  mix-blend-mode: normal;
  opacity: 0.8;
  backdrop-filter: blur(80px);
  left: -16px;
  width: calc(100% + 10px);
  @apply tw-absolute tw-top-0 tw-h-full;
}
</style>
