<template>
  <div style="max-width: 2801px">
    <BoardHead
      text="Экономика. Инвестпроекты Республики Башкортостан. Заявочная кампания"
    />
    <BoardCover>
      <div class="cont">
        <div class="table-container">
          <table class="big-tabel">
            <thead>
              <tr class="tr-th">
                <th class="th col1">Наименование объекта</th>
                <th class="th col2">Выделено</th>
                <th class="th col3">Генподрядчик</th>
                <th class="th col4">Отрасль</th>
                <th class="th col5">Готовность объекта</th>
              </tr>
            </thead>
            <tbody>
              <tr class="tr" v-for="row in rows">
                <td class="td col1">
                  {{ row.name }}
                </td>
                <td class="td col2 ttext-lg">{{ row.cost }}</td>
                <td class="td col3">{{ row.generalContractor }}</td>
                <td class="td col4">{{ row.department }}</td>
                <td class="td col5">
                  <div class="tw-flex tw-justify-between">
                    <div class="ttext-perc">{{ row.percentDeviation }}%</div>

                    <button
                      @click="
                        $router.push({
                          name: '3D.branches.building.show.object',
                          params: {
                            id: $route.params.id,
                            object_id: row.objectId,
                          },
                        })
                      "
                    >
                      <img src="images/3D/table-btn.svg" alt="" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </BoardCover>
  </div>
</template>

<script>
import BoardCover from 'src/3D/components/Boards/Helpers/BoardCover';
import BoardHead from 'src/3D/components/Boards/Helpers/BoardHead';

export default {
  props: {
    rows: {
      required: true,
      type: Array,
    },
  },
  components: {
    BoardCover,
    BoardHead,
  },
};
</script>

<style scoped>
.col1 {
  width: 20%;
}

.col2 {
  width: 10%;
}

.col2 {
  width: 10%;
}

.col3 {
  width: 10%;
}

.col4 {
  width: 17%;
}

.col5 {
  width: 15%;
}

.col6 {
  width: 17%;
}

.cont {
  padding: 100px;
  padding-right: 56px;
}
.big-tabel {
  width: 100%;
  font-size: 30px;
  display: table;
  background: rgba(0, 7, 47, 0.5);
  border-collapse: collapse;
  table-layout: fixed;
}

.ttext-lg {
  font-size: 50px;
  @apply tw-font-bold;
}

.ttext-sm {
  font-size: 20px;
}

.ttext-perc {
  @apply tw-text-positive tw-font-bold;
}

.ttext-op50 {
  opacity: 0.5;
}

.table-container {
  height: 1240px;
  overflow-y: scroll;
  padding-right: 35px;
}
.td {
  padding: 25px;
}

.tr + .tr {
  border-top: 1px solid #fff;
}

.th {
  font-size: 35px;
  line-height: 100%;
  @apply tw-text-left tw-font-semibold tw-text-white;
}

.tr,
.tr-th {
  width: 100%;
  padding: 20px 30px;
  display: block;
}

.tr-th {
  background: linear-gradient(270deg, #00cd77 0%, #6a7186 41.01%);
}

.td:nth-child(2n) {
  background: rgba(196, 196, 196, 0.05);
}

.table-container::-webkit-scrollbar {
  width: 2px;
  background-color: #fff;
}

.table-container::-webkit-scrollbar-thumb {
  background-color: #01f859;
  /* width: 6px; */
}
</style>
