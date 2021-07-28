<template>
  <HoneycombDialog
    v-model="innerValue"
    icon="Oaz"
    title="ТОСЭР и ОЭЗ"
    period="-"
  >
    <div class="tw-mb-28">
      <BoardsCarousel
        v-model="slide"
        :slides="slides"
        height="850px"
        controlClass="_control"
        contentClass="_slide-content"
      >
        <q-carousel-slide name="slide1">
          <div>
            <img class="tw-mx-auto" src="../images-slides/toser1.svg" alt="" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="slide2">
          <div>
            <img src="../images-slides/toser2.svg" alt="" />
          </div>
        </q-carousel-slide>
      </BoardsCarousel>
    </div>

    <div class="tw-text-center">
      <AppButton
        icon="raiting"
        size="lg"
        label="Подробнее к дашбордам"
        color="light-blue"
      />
    </div>
  </HoneycombDialog>
</template>

<script>
import HoneycombDialog from 'src/3D/components/Branches/Economic/New/HoneycombDialog';
import NewSubtitle from 'src/3D/components/Branches/Economic/New/NewSubtitle';
import NewNumber from 'src/3D/components/Branches/Economic/New/NewNumber';
import NewTable from 'src/3D/components/Branches/Economic/New/NewTable';
import NewCaption from 'src/3D/components/Branches/Economic/New/NewCaption';
import SyncValueMixin from 'src/mixins/SyncValueMixin';
import BoardsCarousel from 'src/components/BoardsCarousel';

export default {
  props: {
    value: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      innerValue: false,
      slide: 'slide1',
      slides: ['slide1', 'slide2'],
    };
  },
  mixins: [SyncValueMixin],
  components: {
    HoneycombDialog,
    NewSubtitle,
    NewNumber,
    NewTable,
    NewCaption,
    BoardsCarousel,
  },
};
</script>

<style scoped>
.cap {
  font-size: 18px;
  margin-left: 20px;
}
</style>
