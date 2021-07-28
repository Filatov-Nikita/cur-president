<template>
  <HoneycombDialog
    v-model="innerValue"
    icon="Invest"
    title="Инвестиции в основной капитал"
    period="I квартал 2021 г."
  >
    <div class="tw-mb-20">
      <NewSubtitle text="Всего инвестиций" class="tw-mb-10 tw-text-center" />
      <NewNumber
        size="xl"
        number="47,69"
        color="positive"
        tail="млрд ₽"
        center
        class="tw-mb-20"
      />
      <NewNumber
        dynamic
        number="81,2%"
        color="white"
        center
        size="xs1-5"
        class="tw-mb-12"
      />
      <NewTable type="type1">
        <template #col1>
          <NewCaption
            size="sm"
            icon="invest-capital1"
            type="type2"
            caption2="млрд ₽"
            text="Инвестиции по крупным и средним предприятиям"
          />
          <NewNumber
            size="sm2"
            number="25,67"
            color="positive"
            class="tw-mb-10"
          />
          <NewNumber
            size="xxs"
            dynamicSize="md3"
            dynamic
            number="81,9%"
            color="white"
          />
        </template>
        <template #col2>
          <NewCaption
            size="sm"
            icon="invest-capital2"
            type="type2"
            caption2="млрд ₽"
            text="Инвестиции малого и среднего предпринимательства"
          />
          <NewNumber
            size="sm2"
            number="19,64"
            color="positive"
            class="tw-mb-10"
          />
          <NewNumber
            size="xxs"
            dynamicSize="md3"
            dynamic
            number="80,13%"
            color="white"
          />
        </template>
        <template #col3>
          <NewCaption
            size="sm"
            icon="invest-capital3"
            type="type2"
            caption2="млрд ₽"
            text="Бюджетные инвестициии"
          />
          <NewNumber
            size="sm2"
            number="2,38"
            color="positive"
            class="tw-mb-10"
          />
          <NewNumber
            size="xxs"
            dynamicSize="md3"
            dynamic
            number="82,14%"
            color="white"
          />
        </template>
      </NewTable>
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
</style>
