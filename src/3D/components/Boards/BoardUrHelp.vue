<template>
  <board-wrapper wMax="1250px">
    <board-cover>
      <BoardCells :cols="2">
        <template #cell1>
          <board-offsets :t="37" :b="61" :l="64" :r="22">
            <board-caption
              icon="year"
              label="Обращений с начала года"
              iconX="39px"
              labelWMax="250px"
              v-space-m:bottom="'45px'"
            />
            <board-numbers value="443" color="positive" size="xl" />
          </board-offsets>
        </template>
        <template #cell2>
          <board-offsets :t="55" :b="76" :l="61" :r="40">
            <board-caption
              icon="sue"
              label="Получили юридическую помощь"
              iconX="28px"
              v-space-m:bottom="'24px'"
            />
            <board-numbers value="100%" color="positive" size="xl" />
          </board-offsets>
        </template>
      </BoardCells>
      <BoardCells :cols="2">
        <template #cell1>
          <board-offsets :t="37" :b="59" :l="61" :r="40">
            <board-caption
              icon="week"
              label="Обращений за последнюю неделю"
              iconX="28px"
              v-space-m:bottom="'24px'"
            />
            <board-numbers value="19" color="positive" size="xl" />
          </board-offsets>
        </template>
        <template #cell2>
          <board-offsets :t="37" :b="59" :l="61" :r="40">
            <board-caption
              icon="bank"
              label="Центров оказания бесплатной юридической помощи"
              iconX="28px"
              v-space-m:bottom="'24px'"
            />
            <board-numbers value="58" color="positive" size="xl" />
          </board-offsets>
        </template>
      </BoardCells>
      <BoardCells>
        <template #cell1>
          <board-offsets :t="61" :b="130" :l="87" :r="74">
            <board-caption
              icon="search"
              label="Поиск центров оказания бесплатной юридической помощи"
              iconX="35px"
              labelWMax="573px"
              v-space-m:bottom="'92px'"
            />
            <ValidationObserver
              tag="form"
              ref="form"
              @submit.prevent="lookingFor"
            >
              <div
                class="tw-flex tw-justify-between"
                style="margin-bottom: 153px"
              >
                <AppSelect
                  width="515px"
                  style="margin-right: 59px"
                  v-model="city"
                  label="Выбрать город"
                  :options="citiesOptions"
                  rules="required"
                  name="город"
                />
                <AppSelect
                  width="515px"
                  v-model="typePrava"
                  label="Выбрать вид права"
                  :options="typePravaOptions"
                  name="вид права"
                />
              </div>
              <div class="tw-text-center">
                <AppButton
                  type="submit"
                  color="dark-blue"
                  label="Найти центр"
                />
              </div>
            </ValidationObserver>
          </board-offsets>
        </template>
      </BoardCells>
    </board-cover>
  </board-wrapper>
</template>
<script>
import { mapGetters } from 'vuex';
const typePravaOptions = [
  {
    label: 'Административные правоотношения',
    value: 'admprav',
  },
  {
    label: 'Банковские правоотношения',
    value: 'bank',
  },
  {
    label: 'Гражданские правоотношения',
    value: 'grad',
  },
  {
    label: 'Жилищные правоотношения',
    value: 'shilish',
  },

  {
    label: 'Защита прав потребителей',
    value: 'zpp',
  },
  {
    label: 'Земельные правоотношения',
    value: 'zemel',
  },
  {
    label: 'Наследственные правоотношения',
    value: 'nasled',
  },
  {
    label: 'Налоговые правоотношения',
    value: 'nalog',
  },
  {
    label: 'Право социального обеспечения',
    value: 'social',
  },
  {
    label: 'Семейные правоотношения',
    value: 'family',
  },
  {
    label: 'Трудовые правоотношения',
    value: 'trud',
  },
  {
    label: 'Банкротство физических и юридических лиц',
    value: 'bankrot',
  },
  {
    label: 'Уголовные правоотношения',
    value: 'ugolov',
  },
];

function getPravaLabel(typePrava) {
  const map = typePravaOptions.reduce((acc, item) => {
    acc[item.value] = item;
    return acc;
  }, {});
  return map[typePrava] && map[typePrava].label;
}

export default {
  props: {},
  created() {
    const { city = null } = this.$route.query;
    const { id } = this.$route.params;
    let cityCur = null;
    if (id !== 'bash') {
      cityCur = this.mapDistricts[id].Municipal_districts;
    } else {
      cityCur = city;
    }
    this.city = cityCur ? { label: cityCur, value: cityCur } : null;
  },
  data() {
    const { typePrava = null } = this.$route.query;
    const values = {
      city: null,
      typePrava: typePrava
        ? { label: getPravaLabel(typePrava), value: typePrava }
        : null,
    };
    return {
      ...values,
      typePravaOptions,
    };
  },
  computed: {
    ...mapGetters('_3D/districts', ['mapDistricts']),
    ...mapGetters('_3D/urHelp', ['districtsNameMap']),
    citiesOptions() {
      return Object.values(this.mapDistricts).map((district) => ({
        label: district.Municipal_districts,
        value: district.Municipal_districts,
      }));
    },
  },
  methods: {
    async lookingFor() {
      const valid = await this.$refs.form.validate();
      if (!valid) return;

      if (
        this.$route.name === '3D.branches.ur-help.centers' ||
        this.$route.name === '3D.branches.ur-help.centers.map'
      ) {
        this.$q.loading.show();
        setTimeout(() => {
          this.$q.loading.hide();
          this.$q.notify({
            type: 'positive',
            message: 'Поиск завершен',
            classes: 'app-ur-notify',
          });
        }, 500);
        this.$router.push({
          params: { id: this.districtsNameMap[this.city.value].ID },
          query: {
            city: this.city.value,
            typePrava: this.typePrava && this.typePrava.value,
          },
        });
      } else {
        this.$router.push({
          name: '3D.branches.ur-help.centers',
          params: { id: this.districtsNameMap[this.city.value].ID },
          query: {
            city: this.city.value,
            typePrava: this.typePrava && this.typePrava.value,
          },
        });
      }
    },
  },
};
</script>

<style>
.app-ur-notify {
  font-size: 30px;
}
</style>
