<template>
  <q-footer class="footer">
    <Ticker v-if="$route.name && $route.name.indexOf('3D.branches') !== 0 && $route.name !== 'about'" />
    <div class="menu">
      <BottomMenuItems :items="menuLocal" /> <DateDysplay />
    </div>
  </q-footer>
</template>

<script>
import BottomMenuItems from 'src/3D/components/TheBottomMenu/BottomMenuItems';
import DateDysplay from 'src/components/DateDysplay';
import Ticker from 'src/3D/components/Ticker';

export default {
  // { label: 'Text', icon: 'document' },
  // { label: 'Text', icon: 'bank' },
  // { label: 'Text', icon: 'people' },
  // { label: 'Text', icon: 'garbage' },
  // { label: 'Text', icon: 'cow' }
  // { label: 'Text', icon: 'health' },
  data() {
    return {
      items: [
        {
          label: 'Cтроительство',
          icon: 'building',
          to: { name: '3D.branches.building' },
        },
        {
          label: 'Дороги',
          icon: 'road',
          to: {
            name: '3D.branches.roads',
          },
        },
        {
          label: 'Экономика',
          icon: 'wallet',
          to: {
            name: '3D.branches.new-economic',
          },
        },
        // {
        //   label: 'Экономика',
        //   icon: 'wallet',
        //   to: {
        //     name: '3D.branches.economic',
        //   },
        //   children: [
        //     {
        //       label: 'Обеспеченность',
        //       to: {
        //         name: '3D.branches.economic.obes',
        //       },
        //     },
        //     {
        //       label: 'Инвестиционная поддержка',
        //       to: { name: '3D.branches.economic.invest' },
        //     },
        //     {
        //       label: 'Общественные перевозки',
        //       to: { name: '3D.branches.economic.transport' },
        //     },
        //   ],
        // },
        {
          label: 'Юридическая помощь',
          icon: 'ur-help',
          to: {
            name: '3D.branches.ur-help',
          },
        },
      ],
    };
  },
  computed: {
    menuLocal() {
      let { name = '', params } = this.$route;
      params = Object.keys(params).length <= 0 ? { id: 'bash' } : params;
      return this.calcMenu(this.items, name, params);
    },
  },
  methods: {
    calcMenu(items, name, params) {
      return items.map((item) => {
        if (item.children) {
          return {
            ...item,
            to: { ...item.to, params },
            children: this.calcMenu(item.children, name, params),
          };
        } else {
          if (
            name === '3D.main' ||
            (name.indexOf('3D.branches') !== -1 && params.id === 'bash')
          ) {
            return { ...item, to: { ...item.to, params: { id: 'bash' } } };
          } else {
            return { ...item, to: { ...item.to, params } };
          }
        }
      });
    },
  },
  components: {
    BottomMenuItems,
    DateDysplay,
    Ticker,
  },
};
</script>

<style scoped>
.footer {
  background: transparent;
}

.menu {
  background: #081136;
  padding-right: 170px;
  @apply tw-flex tw-justify-between;
}
</style>
