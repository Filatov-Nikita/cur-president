<template>
  <!-- <q-carousel
    v-model="currentTable"
    class="carousel"
    height="1947px"
    animated
    navigation
  >
    <template v-slot:control> <div>1</div> </template>
    <template v-slot:navigation-icon="{ active, btnProps, onClick }">
      <q-btn
        v-if="active"
        size="lg"
        icon="home"
        color="yellow"
        flat
        round
        dense
        @click="onClick"
      />
      <q-btn
        v-else
        size="sm"
        :icon="btnProps.icon"
        color="white"
        flat
        round
        dense
        @click="onClick"
      />
    </template> -->
  <!-- <q-carousel-slide name="1"> -->
  <table class="table">
    <tr class="th-row">
      <th class="th">2018</th>
      <th class="th">2019</th>
      <th class="th">2020</th>
    </tr>
    <tr>
      <td class="td">4 051 005</td>
      <td class="td">4 051 005</td>

      <td class="td">4 051 005</td>
    </tr>
    <tr>
      <td class="caption" colspan="3">Миграционный прирост</td>
    </tr>
    <tr>
      <td class="td">- 4 051</td>
      <td class="td">- 4 051</td>
      <td class="td">- 4 051</td>
    </tr>
    <tr>
      <td class="caption" colspan="3">Естественный прирост</td>
    </tr>
    <tr>
      <td class="td">- 4 051</td>
      <td class="td">- 4 051</td>
      <td class="td">- 4 051</td>
    </tr>
  </table>
  <!-- </q-carousel-slide> -->
  <!-- <q-carousel-slide name="2">
      <table class="table">
        <tr class="th-row">
          <th class="th">2018</th>
          <th class="th">2019</th>
          <th class="th">2020</th>
        </tr>
        <tr>
          <td class="td">4 051 005</td>
          <td class="td">4 051 005</td>

          <td class="td">4 051 005</td>
        </tr>
        <tr>
          <td class="caption" colspan="3">Миграционный прирост</td>
        </tr>
        <tr>
          <td class="td">- 4 051</td>
          <td class="td">- 4 051</td>
          <td class="td">- 4 051</td>
        </tr>
        <tr>
          <td class="caption" colspan="3">Естественный прирост</td>
        </tr>
        <tr>
          <td class="td">- 4 051</td>
          <td class="td">- 4 051</td>
          <td class="td">- 4 051</td>
        </tr>
      </table>
    </q-carousel-slide>
  </q-carousel> -->
</template>

<script>
export default {
  data() {
    return {
      currentTable: '1',
    };
  },
};
</script>
<style scoped>
.table {
  @apply tw-w-full;
}

.th {
  font-size: 50px;
  @apply tw-font-bold tw-text-left;
}

.td {
  color: #01f859;
  font-size: 110px;
  @apply tw-font-bold;
}

.caption {
  font-size: 40px;
  background: linear-gradient(270deg, #00cd77 0%, #6a7186 41.01%);
  @apply tw-text-left tw-w-full;
}

.td:nth-child(2n),
th:nth-child(2n) {
  background: rgba(196, 196, 196, 0.05);
}

.th-row {
  border-bottom: 4px solid #6a7186;
}

/* carousel */
.carousel {
  background: transparent;
}
</style>
