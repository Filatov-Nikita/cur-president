<template>
  <q-page>
    <PageHead class="head-mb" uppercase> Видеобращения </PageHead>

    <div class="branch">
      <div class="branch-icon">
        <img
          :src="
            require('src/VideoMessages/components/icons/' + branchIcon + '.svg')
          "
          alt=""
        />
      </div>
      <div class="branch-name">{{ $route.query.branchLabel }}</div>
    </div>
    <div v-if="items && items.length <= 0" style="height: 1450px">
      <div class="empty">Нет видеороликов</div>
    </div>
    <template v-else>
      <BoardsCarousel
        v-model="currentSlide"
        :slides="slideIndexes"
        contentClass="_VideoMess-slider"
        controlClass="_VideoMess-control"
        class="slider"
        height="1450px"
        onTheLeft
      >
        <q-carousel-slide
          v-for="(slide, index) in slides"
          :key="index"
          :name="index.toString()"
        >
          <div class="bg">
            <div class="tw-flex tw-flex-wrap row">
              <BranchItem
                v-for="(item, i) in slide"
                :key="i"
                class="branchItem"
                :name="item.Name"
                :districtName="item.Municipal_districts"
                :filename="item.fileName"
                :icon="mapDistricts[item.ID].icon"
                v-bind="{ cityDistrictName: item.raion || undefined }"
              >
                <template #index>{{ index * 5 + i + 1 }}</template>
              </BranchItem>
            </div>
          </div>
        </q-carousel-slide>
      </BoardsCarousel>
    </template>
    <BackLink class="back-btn" :to="{ name: 'videomess.main' }">
      Назад к категориям</BackLink
    >
  </q-page>
</template>

<script>
import PageHead from 'src/VideoMessages/components/PageHead';
import BranchItem from 'src/VideoMessages/components/BranchItem';
import BackLink from 'src/VideoMessages/components/BackLink';
import BoardsCarousel from 'src/components/BoardsCarousel';
import BranchData from 'src/VideoMessages/data';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      currentSlide: '0',
    };
  },
  computed: {
    items() {
      if (!this.$route.query.branchId) return [];
      return BranchData.data.filter(
        (item) => item.Category_id === String(this.$route.query.branchId)
      );
    },
    slideIndexes() {
      return this.slides.map((el, index) => index.toString());
    },
    slides() {
      return this.getRows(this.items, 10);
    },
    branchIcon() {
      return this.$route.params.branchName;
    },
    ...mapGetters('_3D/districts', ['mapDistricts']),
  },
  methods: {
    getRows(items, itemsCount = 3) {
      if (items.length <= itemsCount) return [items];
      const row = items.slice(0, itemsCount);
      const rest = items.slice(itemsCount);
      return [row, ...this.getRows(rest, itemsCount)];
    },
  },
  components: {
    PageHead,
    BranchItem,
    BackLink,
    BoardsCarousel,
  },
};
</script>
<style>
._VideoMess-slider {
  max-width: 100% !important;
}

._VideoMess-control {
  margin-top: 60px !important;
}
</style>
<style scoped>
.branchItem + .branchItem {
  margin-top: -1px;
  margin-left: -1px;
}

.head-mb {
  margin-bottom: 60px;
}

.back-btn {
  margin-top: 48px;
}

.row {
  /* margin-left: -16px; */
  position: relative;
  z-index: 10;
}

.bg {
  position: relative;
  z-index: 0;
  max-width: 3565px;
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
  width: calc(100% + 10px);
  @apply tw-absolute tw-top-0 tw-h-full;
}

.branch {
  padding: 37px 66px;
  background: #02dd75;
  margin-bottom: 60px;
  @apply tw-inline-block;
}

.branch-icon,
.branch-name {
  display: inline-block;
  vertical-align: middle;
}

.branch-icon {
  margin-right: 48px;
}

.branch-icon img {
  height: 88px;
}

.branch-name {
  @apply tw-text-lg tw-uppercase tw-font-bold;
}

.back-btn {
  position: absolute;
  transform: translateY(-110px);
}

.empty {
  font-size: 100px;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  @apply tw-font-medium tw-absolute;
}
</style>
