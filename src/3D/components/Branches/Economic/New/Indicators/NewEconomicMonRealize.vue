<template>
  <HoneycombDialog
    v-model="innerValue"
    icon="InvestMonitor"
    title="Инвестпроекты. Мониторинг реализации"
    period="IV квартал 2020 г."
  >
    <div class="tw-mb-20">
      <NewSubtitle text="Объём инвестиций" class="tw-mb-10 tw-text-center" />

      <div>
        <img src="../images-slides/invest-mon-real.svg" alt="" />
      </div>
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
    };
  },
  mixins: [SyncValueMixin],
  components: {
    HoneycombDialog,
    NewSubtitle,
    NewNumber,
    NewTable,
    NewCaption,
  },
};
</script>

<style scoped>
.cap {
  font-size: 18px;
  margin-left: 20px;
}
</style>
