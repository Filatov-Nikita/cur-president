<template>
  <board-wrapper wMax="1250px">
    <board-cover>
      <BoardCells :cols="1">
        <template #cell1>
          <board-offsets :t="53" :b="76" :l="79" :r="73">
            <board-caption
              icon="inv"
              label="Объем инвестиций в основной капитал"
              caption="тыс. руб., IV квартал 2020 г."
              iconX="44px"
              labelY="9px"
              v-space-m:bottom="'40px'"
            />
            <board-numbers size="md" numberOffset="44px" v-bind="invest" />
          </board-offsets>
        </template>
      </BoardCells>
      <BoardCells :cols="2">
        <template #cell1>
          <board-offsets :t="49" :b="68" :l="74" :r="22" justify>
            <board-caption
              icon="milk"
              label="Производство молока в сельскохозяйственных организациях"
              caption="тонн, апрель 2021 г."
              iconX="44px"
              labelY="20px"
              v-space-m:bottom="'24px'"
            />
            <board-numbers v-bind="milk" numberOffset="24px" />
          </board-offsets>
        </template>
        <template #cell2>
          <board-offsets :t="51" :b="76" :l="79" :r="73" justify>
            <board-caption
              icon="cow"
              label="Поголовье коров в сельскохозяйственных организациях"
              caption="голов, апрель 2021 г."
              iconX="46px"
              labelY="14px"
              v-space-m:bottom="'24px'"
            />
            <board-numbers v-bind="cow" />
          </board-offsets>
        </template>
      </BoardCells>
      <BoardCells :cols="2">
        <template #cell1>
          <board-offsets :t="36" :b="81" :l="79" :r="73" justify>
            <board-caption
              icon="born"
              label="Рождаемость"
              caption="март 2021 г."
              iconX="38px"
              labelY="16px"
              v-space-m:bottom="'24px'"
            />
            <board-numbers v-bind="born" />
          </board-offsets>
        </template>
        <template #cell2>
          <board-offsets :t="36" :b="81" :l="79" :r="73" justify>
            <board-caption
              icon="unwork"
              label="Уровень зарегистрированной безработицы"
              caption="февраль 2021 г."
              iconX="36px"
              labelY="14px"
              v-space-m:bottom="'33px'"
            />
            <board-numbers v-bind="unwork" />
          </board-offsets>
        </template>
      </BoardCells>
      <BoardCells :cols="1">
        <template #cell1>
          <board-offsets :t="33" :b="76" :l="74" :r="20">
            <board-caption
              icon="zp"
              label="Среднемесячная номинальная начисленная заработная плата работников крупных и средних предприятий"
              iconX="51px"
              labelWMax="973px"
              v-space-m:bottom="'66px'"
            />
            <board-mapping-numbers
              :left="{
                ...zp.left,
                size: 'sm',
              }"
              :right="{
                ...zp.right,
                size: 'sm',
              }"
            />
          </board-offsets>
        </template>
      </BoardCells>
    </board-cover>
  </board-wrapper>
</template>

<script>
export default {
  props: {
    invest: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color && typeof prop.it === 'string';
      },
    },
    milk: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color && typeof prop.it === 'string';
      },
    },
    cow: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color;
      },
    },
    born: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color && typeof prop.it === 'string';
      },
    },
    unwork: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.value && prop.color && typeof prop.it === 'string';
      },
    },
    zp: {
      required: true,
      type: Object,
      validator(prop) {
        return prop.left && prop.right;
      },
    },
  },
};
</script>

<style>
</style>
