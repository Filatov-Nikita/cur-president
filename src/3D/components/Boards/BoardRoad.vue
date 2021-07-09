<template>
  <board-wrapper wMax="1250px">
    <board-head text="Содержание автомобильных дорог Республики Башкортостан" />
    <board-cover>
      <BoardCells :cols="1">
        <template #cell1>
          <board-offsets :t="53" :b="74" :l="79" :r="23">
            <board-caption
              icon="road-length"
              label="Протяженность дорог"
              caption="км"
              iconX="34px"
              labelY="10px"
              v-space-m:bottom="'20px'"
            />
            <board-numbers pretty size="xl" v-bind="roadLength" />
          </board-offsets>
        </template>
      </BoardCells>
      <BoardCells :cols="1">
        <template #cell1>
          <board-offsets :t="80" :b="100" :l="49" :r="25">
            <div class="tw-flex tw-justify-between">
              <div style="max-width: 680px">
                <div v-space-m:bottom="'92px'">
                  <board-caption
                    icon="road-beton"
                    label="Асфальтобетон"
                    align="center"
                    iconX="34px"
                    v-space-m:bottom="'19px'"
                  />
                  <board-numbers pretty size="sm" v-bind="beton" />
                </div>
                <div>
                  <board-caption
                    icon="road-type"
                    label="Переходный тип покрытия"
                    align="center"
                    iconX="34px"
                    v-space-m:bottom="'19px'"
                  />
                  <board-numbers
                    pretty
                    class="tw-break-all"
                    size="sm"
                    v-bind="roadType"
                  />
                </div>
              </div>
              <div>
                <RoundDiagram
                  :colors="['#FF0000', '#0FDF49']"
                  v-bind="diagram"
                />
              </div>
            </div>
          </board-offsets>
        </template>
      </BoardCells>
      <BoardCells :cols="1">
        <template #cell1>
          <board-offsets :t="55" :b="102" :l="79" :r="52">
            <div class="tw-flex tw-justify-between">
              <div
                class="tw-flex tw-flex-col tw-justify-between"
                style="flex-basis: 516px"
              >
                <board-caption
                  icon="road-broke"
                  label="Доля дефектов дорог асфальтобетонного типа"
                  align="center"
                  iconX="34px"
                  v-space-m:bottom="'35px'"
                />
                <board-numbers pretty size="sm2" v-bind="roadBroke" />
              </div>
              <div
                class="tw-flex tw-flex-col tw-justify-between"
                style="flex-basis: 516px"
              >
                <board-caption
                  icon="road-broke-done"
                  label="Доля устраненных дефектов дорог асфальтобетонного типа"
                  align="center"
                  iconX="34px"
                  v-space-m:bottom="'35px'"
                />
                <board-numbers pretty size="sm2" v-bind="roadBrokeDone" />
              </div>
            </div>
          </board-offsets>
        </template>
      </BoardCells>
    </board-cover>
  </board-wrapper>
</template>

<script>
import RoundDiagram from 'src/components/Diagrams/RoundDiagram';
import DiagramLegend from 'src/components/Diagrams/DiagramLegend';

export default {
  props: {
    roadLength: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    beton: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    roadType: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    roadBroke: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    roadBrokeDone: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    diagram: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.values;
      },
    },
  },
  components: {
    RoundDiagram,
    DiagramLegend,
  },
};
</script>

<style>
</style>
