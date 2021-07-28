<template>
  <HoneycombDialog
    v-model="innerValue"
    icon="SocObes"
    title="Обеспеченность населения объектами социальной сферы"
    negative
  >
    <div class="tw-mb-12">
      <NewSubtitle text="Сводный индекс" class="tw-mb-10 tw-text-center" />

      <div>
        <img src="../images-slides/obes.svg" alt="" />
      </div>
    </div>

    <div class="tw-text-center">
      <a
        href="https://cur.bashkortostan.ru/?menukey=4082&type=DASHBOARD"
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
