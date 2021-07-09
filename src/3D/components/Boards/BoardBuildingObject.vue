<template>
  <div style="max-width: 2801px">
    <BoardHead :text="object.name" />
    <board-cover>
      <board-devider leftWidth="50%" rightWidth="50%">
        <template #left>
          <board-offsets
            :width="1152"
            :l="80"
            :t="130"
            :b="53"
            :r="99"
            :toPerc="['l']"
          >
            <div class="tw-flex sections">
              <section class="s1" style="margin-right: 218px">
                <div v-space-m:bottom="'71px'">
                  <p class="caption">Адрес объекта</p>
                  <p>{{ object.address }}</p>
                </div>

                <div v-space-m:bottom="'67px'">
                  <p class="caption">Общая площадь здания</p>
                  <p class="tt-lg">{{ object.s | prettyAmount }} м2</p>
                </div>

                <div v-space-m:bottom="'67px'">
                  <p class="caption">Фактическая стоимость</p>
                  <p class="tt-lg">{{ object.cost | prettyAmount }} ₽</p>
                </div>
              </section>
              <section class="s2">
                <div v-space-m:bottom="'73px'">
                  <p class="caption">Проектная документация</p>
                  <p>{{ object.project }}</p>
                </div>

                <div v-space-m:bottom="'71px'">
                  <p class="caption">Начало строительства</p>
                  <p class="tt-lg">
                    {{ object.dateFrom | prettyDate }}
                  </p>
                </div>
                <div v-space-m:bottom="'82px'">
                  <p class="caption">Окончание строительства</p>
                  <p class="tt-lg">
                    {{ object.dateFrom | prettyDate }}
                  </p>
                </div>
              </section>
            </div>
          </board-offsets>
        </template>
        <template #right>
          <q-img
            v-if="object.photo"
            :src="`images/3D/points/${object.photo}.jpg`"
            width="100%"
            height="100%"
          />
        </template>
      </board-devider>
    </board-cover>
  </div>
</template>

<script>
import BoardDevider from './Helpers/BoardDevider.vue';
import BoardHead from 'src/3D/components/Boards/Helpers/BoardHead';
import moment from 'moment';

export default {
  props: {
    object: {
      required: true,
      type: Object,
    },
  },
  filters: {
    prettyDate(val) {
      if (val === '-') return '-';
      return moment(val).format('DD MMMM YYYY [г.]');
    },
  },
  components: { BoardDevider, BoardHead },
};
</script>

<style scoped>
.s1 {
  flex-basis: 496px;
}

.s2 {
  flex-basis: 507px;
}

.sections {
  font-size: 40px;
}

.caption {
  font-size: 24px;
}

.tt-lg {
  @apply tw-font-bold tw-text-md tw-font-roboto;
}
</style>
