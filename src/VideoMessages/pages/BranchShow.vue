<template>
  <q-page>
    <PageHead class="head-mb" uppercase>Прямая линия главы региона</PageHead>

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
        <div class="tw-flex tw-flex-wrap">
          <BranchItem
            class="branchItem"
            :name="item.name"
            :districtName="item.districtName"
            :icon="mapDistricts[item.districtId].icon"
            v-for="(item, i) in slide"
            :key="i"
          >
            <template #index>{{ i + 1 }}</template>
          </BranchItem>
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
      icon: 'abz',
      districtId: 1,
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      icon: 'abz',
      districtId: 10,
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      icon: 'abz',
      districtId: 10,
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      icon: 'abz',
      districtId: 10
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      icon: 'abz',
      districtId: 10,
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      icon: 'abz',
      districtId: 10,
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      icon: 'abz',
      districtId: 10,
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      icon: 'abz',
      districtId: 10,
    },
    {
      name: 'Сидоров П. П.',
      districtName: 'Абзелиловский район',
      icon: 'abz',
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
  max-width: 2548px;
}

.head-mb {
  margin-bottom: 125px;
}

.back-btn {
  position: absolute;
  transform: translateY(-50px);
}
</style>
