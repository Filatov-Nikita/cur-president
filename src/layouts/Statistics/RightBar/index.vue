<template>
  <div>
    <router-link :to="{ name: 'main' }">
      <img
        class="logo"
        src="~/assets/cur-logo.svg"
        alt="cur-logo"
        width="582"
        height="222"
      />
    </router-link>
    <MenuItems :items="items" />
  </div>
</template>

<script>
import MenuItems from './Menu/MenuItems';
import moment from 'moment';

function getDashboardUrl() {
  const curDate = moment().format('DD.MM.YYYY');
  const hash = window.btoa(curDate);
  return `https://cur.bashkortostan.ru`;
}

export default {
  data() {
    return {
      items: [
        { label: 'Оценка ВДЛ', icon: 'TW', to: { name: 'tw' } },
        {
          label: '3D Республика',
          icon: 'Respublic',
          to: { name: '3D' },
        },
        {
          label: 'Дашборды',
          icon: 'Dashboards',
          external: true,
          to: getDashboardUrl(),
        },
        {
          label: 'Оперативное совещание',
          icon: 'Sovet',
          external: true,
          to: 'http://cur-rb-os.ru',
        },
        {
          label: 'Социальные коммуникации',
          icon: 'Communications',
          to: { name: 'soc' },
        },
        {
          label: 'О Цуре',
          icon: 'About',
          to: { name: 'about' },
        },
      ],
    };
  },
  components: {
    MenuItems,
  },
};
</script>

<style scoped>
.logo {
  margin-bottom: 118px;
}
</style>
