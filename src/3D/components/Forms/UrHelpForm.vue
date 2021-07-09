<template>
  <ValidationObserver tag="form" ref="form" @submit.prevent="submit">
    <p class="tw-text-md tw-font-bold title">Запись на консультацию</p>
    <div class="s" v-space-m:bottom="'117px'">
      <section class="s1">
        <AppInput
          v-space-m:bottom="'64px'"
          label="Имя"
          placeholder="Иван"
          v-model="name"
          rules="required"
          name="имя"
        />
        <AppInput
          v-mask="'+7 (###) ###-##-##'"
          label="Телефон"
          placeholder="+ 7 (___) ___-__-__"
          v-model="phone"
          rules="required"
          name="телефон"
          v-space-m:bottom="'108px'"
        />
        <AppSelect
          v-model="typePrava"
          :options="typePravaOptions"
          label="Выбрать вид права"
          width="100%"
          name="вид права"
          style="max-width: 515px"
          rules="required"
        />
      </section>
      <section class="s2">
        <AppInput
          v-space-m:bottom="'64px'"
          label="Фамилия"
          placeholder="Иванов"
          rules="required"
          name="фамилия"
          v-model="secondName"
        />
        <AppInput
          v-space-m:bottom="'108px'"
          label="E-mail"
          rules="required|email"
          name="email"
          placeholder="mail@mail.ru"
          v-model="email"
        />
        <AppCheckbox
          rules="required"
          name="cогласие на обработку персональных данных"
          v-model="agree"
          label="Согласие на обработку персональных данных"
        />
      </section>
    </div>
    <AppButton label="Записаться" type="submit" />
  </ValidationObserver>
</template>

<script>
import { VueMaskDirective } from 'v-mask';

export default {
  data() {
    return {
      name: '',
      phone: '',
      secondName: '',
      email: '',
      agree: false,
      typePravaOptions: [
        {
          label: 'Административные правоотношения',
          value: '1',
        },
        {
          label: 'Гражданские правоотношения',
          value: '2',
        },
        {
          label: 'Жилищные правоотношения',
          value: '3',
        },

        {
          label: 'Защита прав потребителей',
          value: '4',
        },
        {
          label: 'Земельные правоотношения',
          value: '5',
        },
        {
          label: 'Наследственные правоотношения',
          value: '6',
        },
        {
          label: 'Налоговые правоотношения',
          value: '7',
        },
        {
          label: 'Право социального обеспечения',
          value: '8',
        },
        {
          label: 'Семейные правоотношения',
          value: '9',
        },
        {
          label: 'Трудовые правоотношения',
          value: '10',
        },
        {
          label: 'Банкротство физических и юридических лиц',
          value: '11',
        },
        {
          label: 'Уголовные правоотношения',
          value: '12',
        },
      ],
      typePrava: null,
    };
  },
  directives: {
    mask: VueMaskDirective,
  },
  methods: {
    async submit() {
      const valid = await this.$refs.form.validate();
      if (!valid) return;
      this.$emit('submit');
    },
  },
};
</script>

<style scoped>
.s1 {
  flex-basis: 515px;
  margin-right: 66px;
}

.s2 {
  flex-basis: 515px;
}

.s {
  @apply tw-flex;
}

.title {
  margin-bottom: 82px;
}
</style>
