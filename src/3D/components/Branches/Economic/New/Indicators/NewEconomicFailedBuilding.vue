<template>
  <HoneycombDialog
    v-model="innerValue"
    icon="FailedBuilading"
    title="Незавершенное строительство"
    period="2020 г."
    tb="40px"
    negative
  >
    <div class="tw-mb-12">
      <NewSubtitle text="Объектов" class="tw-mb-1 tw-text-center" />

      <BoardsCarousel
        v-model="slide"
        :slides="slides"
        height="940px"
        controlClass="_control"
        contentClass="_slide-content"
      >
        <q-carousel-slide name="slide1">
          <div>
            <img class="tw-mx-auto" src="../images-slides/build1.svg" alt="" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="slide2">
          <div>
            <img src="../images-slides/build2.svg" alt="" />
          </div>
        </q-carousel-slide>
      </BoardsCarousel>
    </div>

    <div class="tw-text-center">
      <a
        href="https://cur.bashkortostan.ru/?menukey=4084&type=DASHBOARD"
        target="_blank"
      >
        <AppButton
          icon="diagram"
          size="lg"
          label="Подробнее к дашбордам"
          color="light-blue"
        />
      </a>
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
