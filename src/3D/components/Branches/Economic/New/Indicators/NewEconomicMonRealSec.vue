<template>
  <HoneycombDialog
    v-model="innerValue"
    icon="EconomicSector"
    title="МОНИТОРИНГ РЕАЛЬНОГО СЕКТОРА ЭКОНОМИКИ"
    period="Март 2021 г."
  >
    <div class="tw-mb-20">
      <NewSubtitle
        text="Индекс промышленного производства"
        class="tw-mb-10 tw-text-center"
      />
      <NewNumber
        size="lg2"
        number="101,4%"
        color="white"
        center
        class="tw-mb-20"
      />
      <BoardsCarousel
        v-model="slide"
        :slides="slides"
        height="550px"
        controlClass="_control"
        contentClass="_slide-content"
      >
        <q-carousel-slide name="slide1">
          <NewTable type="type1">
            <template #col1>
              <NewCaption icon="real-sector1" class="tw-mb-7" />
              <NewNumber
                size="xs5"
                number="-"
                color="positive"
                class="tw-mb-6"
              />
              <p class="cap tw-mb-7">
                Индекс физического объема инвестиций в основной капитал к АППГ
              </p>
              <div class="tw-flex tw-items-center">
                <NewRegionNumber
                  region="rf"
                  :number="{ number: '-', dynamic: false, color: 'positive' }"
                  class="tw-mr-10"
                />
                <NewRegionNumber
                  region="pfo"
                  :number="{ number: '-', dynamic: false, color: 'positive' }"
                />
              </div>
            </template>
            <template #col2>
              <NewCaption icon="real-sector2" class="tw-mb-7" />
              <NewNumber
                size="xs5"
                number="101,4%"
                color="positive"
                class="tw-mb-6"
              />
              <p class="cap tw-mb-7">
                Индекс промышленного производства к АППГ
              </p>
              <div class="tw-flex tw-items-center">
                <NewRegionNumber
                  region="rf"
                  :number="{ number: '-', dynamic: false, color: 'positive' }"
                  class="tw-mr-10"
                />
                <NewRegionNumber
                  region="pfo"
                  :number="{ number: '-', dynamic: false, color: 'positive' }"
                />
              </div>
            </template>
            <template #col3>
              <NewCaption icon="real-sector3" class="tw-mb-7" />
              <NewNumber
                size="xs5"
                number="99,3%"
                color="positive"
                class="tw-mb-6"
              />
              <p class="cap tw-mb-7">
                Индекс физического объема оборота розничной торговли к АППГ
              </p>
              <div class="tw-flex tw-items-center">
                <NewRegionNumber
                  region="rf"
                  :number="{ number: '33', dynamic: true, color: 'positive' }"
                  class="tw-mr-10"
                />
                <NewRegionNumber
                  region="pfo"
                  :number="{ number: '3', dynamic: true, color: 'positive' }"
                />
              </div>
            </template>
          </NewTable>
        </q-carousel-slide>
        <q-carousel-slide name="slide2">
          <NewTable type="type1">
            <template #col1>
              <NewCaption icon="real-sector2-1" class="tw-mb-7" />
              <NewNumber
                size="xs5"
                number="-"
                color="positive"
                class="tw-mb-6"
              />
              <p class="cap tw-mb-7">
                Индекс производства продукции сельского хозяйства к АППГ
              </p>
              <div class="tw-flex tw-items-center">
                <NewRegionNumber
                  region="rf"
                  :number="{ number: '-', dynamic: false, color: 'positive' }"
                  class="tw-mr-10"
                />
                <NewRegionNumber
                  region="pfo"
                  :number="{ number: '-', dynamic: false, color: 'positive' }"
                />
              </div>
            </template>
            <template #col2>
              <NewCaption icon="real-sector2-2" class="tw-mb-7" />
              <NewNumber
                size="xs5"
                number="116,8%"
                color="positive"
                class="tw-mb-6"
              />
              <p class="cap tw-mb-7">
                Индекс физического объема работ по ВД Строительство к АППГ
              </p>
              <div class="tw-flex tw-items-center">
                <NewRegionNumber
                  region="rf"
                  :number="{ number: '23', dynamic: true, color: 'positive' }"
                  class="tw-mr-10"
                />
                <NewRegionNumber
                  region="pfo"
                  :number="{ number: '4', dynamic: true, color: 'positive' }"
                />
              </div>
            </template>
            <template #col3>
              <NewCaption icon="real-sector2-3" class="tw-mb-7" />
              <NewNumber
                size="xs5"
                number="111,73%"
                color="positive"
                class="tw-mb-6"
              />
              <p class="cap tw-mb-7">
                Индекс строительства жилых домов с начала года к АППГ
              </p>
              <div class="tw-flex tw-items-center">
                <NewRegionNumber
                  region="rf"
                  :number="{ number: '-', dynamic: true, color: 'positive' }"
                  class="tw-mr-10"
                />
                <NewRegionNumber
                  region="pfo"
                  :number="{ number: '-', dynamic: true, color: 'positive' }"
                />
              </div>
            </template>
          </NewTable>
        </q-carousel-slide>
      </BoardsCarousel>
    </div>
    <div class="tw-text-center">
      <a
        href="https://cur.bashkortostan.ru/?menukey=4077&type=DASHBOARD"
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
import NewRegionNumber from 'src/3D/components/Branches/Economic/New/NewRegionNumber';
import BoardsCarousel from 'src/components/BoardsCarousel';
import SyncValueMixin from 'src/mixins/SyncValueMixin';

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
    NewRegionNumber,
    BoardsCarousel,
  },
};
</script>

<style>
._control {
  margin-top: 57px !important;
}

._slide-content {
  max-width: 100% !important;
}
</style>
<style scoped>
.cap {
  font-size: 20px;
}
</style>
