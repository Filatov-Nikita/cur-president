<template>
  <board-wrapper wMax="1250px">
    <board-head text="Строительство. Объекты РАИП, реализуемые ГКУ УКС РБ" />
    <board-cover>
      <BoardCells :cols="1">
        <template #cell1>
          <board-offsets :t="61" :b="20" :l="76" :r="92">
            <board-caption
              icon="building"
              label="Количество строящихся объектов по направлениям:"
              iconX="43px"
              normal
              align="center"
              v-space-m:bottom="'20px'"
            />
            <div class="tw-flex tw-items-center">
              <RoundDiagram
                :values="diagram.values"
                :middle="diagram.value.toString()"
                :colors="['#0FDF49', '#01AEF8', '#FF1F00', '#9C9C9C']"
                style="margin-right: 60px"
              />
              <DiagramLegends2
                :colors="['#0FDF49', '#01AEF8', '#FF1F00', '#9C9C9C']"
                style="flex-basis: 369px"
                :legends="diagram.legends"
              />
            </div>
          </board-offsets>
        </template>
      </BoardCells>
      <BoardCells :cols="1">
        <template #cell1>
          <board-offsets :t="56" :b="67" :l="81" :r="20" justify>
            <div v-space-m:bottom="'62px'">
              <board-caption
                icon="got"
                label="Выделено"
                iconX="40px"
                normal
                align="center"
                v-space-m:bottom="'15px'"
              />
              <board-numbers pretty v-bind="got" />
            </div>
            <div v-space-m:bottom="'62px'">
              <board-caption
                icon="contract"
                label="Законтрактовано"
                iconX="40px"
                normal
                align="center"
                v-space-m:bottom="'15px'"
              />
              <board-numbers pretty v-bind="contract" />
            </div>
            <div>
              <board-caption
                icon="done"
                label="Исполнено"
                iconX="40px"
                normal
                align="center"
                v-space-m:bottom="'15px'"
              />
              <board-numbers pretty v-bind="done" />
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
import DiagramLegends2 from 'src/components/Diagrams/DiagramLegends2';

export default {
  props: {
    got: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    done: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    contract: {
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
        return prop.legends && prop.values && prop.value;
      },
    },
  },
  components: {
    RoundDiagram,
    DiagramLegend,
    DiagramLegends2,
  },
};
</script>

<style>
</style>
