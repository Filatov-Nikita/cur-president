<template>
  <board-wrapper wMax="1250px">
    <board-head
      text="Экономика. Инвестпроекты Республики Башкортостан. Заявочная кампания"
    />
    <board-cover>
      <BoardCells :cols="1">
        <template #cell1>
          <board-offsets :t="41" :b="50" :l="67" :r="23">
            <board-caption
              icon="wallet"
              label="Объем инвестиций"
              caption="млн ₽"
              iconX="34px"
              labelY="10px"
              v-space-m:bottom="'20px'"
            />
            <board-numbers pretty size="lg" v-bind="invest" />
          </board-offsets>
        </template>
      </BoardCells>
      <BoardCells :cols="2">
        <template #cell1>
          <board-offsets :t="33" :b="29" :l="68" :r="53" justify>
            <board-caption
              icon="projects"
              label="Количество проектов"
              caption="единиц"
              iconX="38px"
              labelY="10px"
              v-space-m:bottom="'25px'"
            />
            <board-numbers pretty v-bind="projects" />
          </board-offsets>
        </template>
        <template #cell2>
          <board-offsets :t="33" :b="29" :l="68" :r="53" justify>
            <board-caption
              icon="people"
              label="Количество рабочих мест"
              caption="единиц"
              iconX="40px"
              labelY="10px"
              v-space-m:bottom="'25px'"
            />
            <board-numbers pretty v-bind="workPlaces" />
          </board-offsets>
        </template>
      </BoardCells>
      <BoardCells :cols="2">
        <template #cell1>
          <board-offsets :t="40" :b="56" :l="59" :r="23">
            <RoundDiagram
              :values="diagram1.values"
              :caption="diagram1.caption"
              :middle="diagram1.value"
              v-space-m:bottom="'60px'"
            />
            <div
              class="tw-flex-col tw-flex tw-flex-wrap tw-items-start"
              style="height: 187px"
            >
              <DiagramLegend
                v-for="(item, i) in diagram1.legends"
                :index="i"
                :value="`${item.value}%`"
                :name="item.name"
              />
            </div>
          </board-offsets>
        </template>
        <template #cell2>
          <board-offsets :t="40" :b="56" :l="59" :r="62">
            <RoundDiagram
              :values="diagram2.values"
              :caption="diagram2.caption"
              :middle="diagram2.value"
              v-space-m:bottom="'60px'"
            />
            <div
              class="tw-flex-col tw-flex tw-flex-wrap tw-items-start"
              style="height: 187px"
            >
              <DiagramLegend
                v-for="(item, i) in diagram2.legends"
                :index="i"
                :value="`${item.value}%`"
                :name="item.name"
              />
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
    invest: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    projects: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    workPlaces: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    diagram1: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.legends && prop.values && prop.value && prop.caption;
      },
    },
    diagram2: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.legends && prop.values && prop.value && prop.caption;
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
