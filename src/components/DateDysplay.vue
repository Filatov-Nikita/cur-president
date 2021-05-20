<template>
  <div class="text online-icon tw-flex tw-items-center">
    <p class="tw-font-bold tw-text-md">{{ date }}</p>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'DateDisplay',
  created() {
    // ** погрешность во времени из-за того что создание компонента необязательно произойдет в первую секунду отсчета новой минуты
    this.set();
  },
  data() {
    return {
      date: '',
    };
  },
  methods: {
    set() {
      this.date = moment().format('DD MMMM YYYY [г.]');
    },
  },
};
</script>

<style scoped>
.text {
  @apply tw-font-bold tw-text-md;
}

.text::before {
  width: 16px;
  height: 16px;
  margin-right: 33px;
}

.online-icon::before {
  content: '';
  display: block;
  border-radius: 50%;
  background: theme('colors.positive');
}
</style>
