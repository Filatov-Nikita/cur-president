<template>
  <HoneycombDialog
    v-model="innerValue"
    icon="Diagram"
    title="Показатели социально-экономического развития"
    period="Май 2021 г."
    negative
  >
    <div class="tw-mb-20">
      <NewSubtitle
        text="Объём инвестиций в основной капитал"
        class="tw-mb-10 tw-text-center"
      />
      <NewNumber
        size="lg"
        number="81,2%"
        color="negative"
        center
        class="tw-mb-20"
      />
      <NewTable type="type2">
        <template #col1>
          <NewCaption space="lg" icon="soc-eco1">
            <NewNumber
              size="xs2-5"
              number="101,9%"
              color="positive"
              class="tw-mb-6"
            />
            <p class="cap">Индекс физического объёма ВРП</p>
          </NewCaption>
        </template>
        <template #col2>
          <NewCaption space="lg" icon="soc-eco2">
            <NewNumber
              size="xs2-5"
              number="101,5%"
              color="positive"
              class="tw-mb-6"
            />
            <p class="cap">Индекс промышленного производства</p>
          </NewCaption>
        </template>
        <template #col3>
          <NewCaption space="lg" icon="soc-eco3">
            <NewNumber
              size="xs2-5"
              number="92,1%"
              color="positive"
              class="tw-mb-6"
            />
            <p class="cap">Растениеводство</p>
          </NewCaption>
        </template>
        <template #col4>
          <NewCaption space="lg" icon="soc-eco4">
            <NewNumber
              size="xs2-5"
              number="100,3%"
              color="positive"
              class="tw-mb-6"
            />
            <p class="cap">Животноводство</p>
          </NewCaption>
        </template>
        <template #col5>
          <NewCaption space="lg" icon="soc-eco5">
            <NewNumber
              size="xs2-5"
              number="104,9%"
              color="positive"
              class="tw-mb-6"
            />
            <p class="cap">МП</p>
          </NewCaption>
        </template>

        <template #col6>
          <NewCaption space="lg" icon="soc-eco6">
            <NewNumber
              size="xs2-5"
              number="130,17%"
              color="positive"
              class="tw-mb-6"
            />
            <p class="cap">СП</p>
          </NewCaption>
        </template>
      </NewTable>
    </div>
    <div class="tw-text-center">
      <a
        href="https://cur.bashkortostan.ru/?menukey=4071&type=DASHBOARD"
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
