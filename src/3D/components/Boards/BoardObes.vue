<template>
  <board-wrapper wMax="1250px">
    <board-head
      text="Экономика. Обеспеченность населения Республики Башкортостан объектами социальной сферы"
    />
    <board-cover>
      <BoardCells :cols="2">
        <template #cell1>
          <board-offsets :t="53" :b="76" :l="79" :r="73">
            <board-caption
              icon="hospital"
              label="Больницы"
              caption="потребность, коек"
              iconX="40px"
              labelY="9px"
              v-space-m:bottom="'27px'"
            />
            <board-numbers pretty v-bind="hospitals" size="md" />
          </board-offsets>
        </template>
        <template #cell2>
          <board-offsets :t="53" :b="76" :l="79" :r="73">
            <board-caption
              icon="sport"
              label="Спортивные площадки"
              caption="фактическая обеспеченность"
              iconX="40px"
              labelY="9px"
              align="center"
              v-space-m:bottom="'27px'"
            />
            <board-numbers pretty v-bind="sportSquares" size="md" />
          </board-offsets>
        </template>
      </BoardCells>
      <BoardCells :cols="2">
        <template #cell1>
          <board-offsets :t="49" :b="68" :l="79" :r="73">
            <board-caption
              icon="pol"
              label="Поликлиники"
              caption="потребность, посещений в смену"
              iconX="38px"
              labelY="10px"
              v-space-m:bottom="'10px'"
            />
            <board-numbers pretty v-bind="pol" size="md" />
          </board-offsets>
        </template>
        <template #cell2>
          <board-offsets :t="51" :b="76" :l="79" :r="73">
            <board-caption
              icon="sport-zal"
              label="Спортивные залы"
              caption="фактическая обеспеченность"
              iconX="40px"
              labelY="10px"
              v-space-m:bottom="'10px'"
            />
            <board-numbers pretty v-bind="sportZals" size="md" />
          </board-offsets>
        </template>
      </BoardCells>
      <BoardCells :cols="2">
        <template #cell1>
          <board-offsets :t="36" :b="44" :l="79" :r="73">
            <board-caption
              icon="school-org"
              label="Дошкольные организации"
              caption="потребность, мест"
              iconX="38px"
              labelY="16px"
              v-space-m:bottom="'24px'"
            />
            <board-numbers pretty v-bind="schools" size="md" />
          </board-offsets>
        </template>
        <template #cell2>
          <board-offsets :t="36" :b="44" :l="79" :r="73">
            <board-caption
              icon="waterpull"
              label="Бассейны"
              caption="фактическая обеспеченность"
              iconX="36px"
              labelY="14px"
              v-space-m:bottom="'51px'"
            />
            <board-numbers pretty v-bind="waterpools" size="md" />
          </board-offsets>
        </template>
      </BoardCells>
      <BoardCells :cols="2">
        <template #cell1>
          <board-offsets :t="36" :b="44" :l="79" :r="73">
            <board-caption
              icon="edu"
              label="Общеобразовательные организации"
              caption="потребность, мест"
              iconX="45px"
              labelY="13px"
              v-space-m:bottom="'29px'"
            />
            <board-numbers pretty v-bind="org" size="md" />
          </board-offsets>
        </template>
        <template #cell2>
          <board-offsets :t="36" :b="44" :l="79" :r="73">
            <board-caption
              icon="culture"
              label="Культурно-досуговые учреждения"
              caption="потребность, ед."
              iconX="29px"
              labelY="13px"
              v-space-m:bottom="'29px'"
            />
            <board-numbers pretty v-bind="culture" size="md" /> </board-offsets
        ></template>
      </BoardCells>
    </board-cover>
  </board-wrapper>
</template>

<script>
export default {
  props: {
    hospitals: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    sportSquares: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    pol: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    sportZals: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    schools: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    waterpools: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    org: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    culture: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
  },
};
</script>

<style>
</style>
