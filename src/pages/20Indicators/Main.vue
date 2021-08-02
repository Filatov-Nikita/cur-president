<template>
  <q-page class="tw-p-14">
    <div class="perspective">
      <div class="items">
        <div class="h-container">
          <HoneycombItem
            v-for="(item, index) in row1"
            :key="index"
            class="h-item"
            v-bind="item"
            :filter="filter"
          />
        </div>
        <div class="h-container row-offset row-top-offset-1">
          <HoneycombItem
            v-for="(item, index) in row2"
            :key="index"
            class="h-item"
            v-bind="item"
            :filter="filter"
          />
        </div>
        <div class="h-container row-top-offset-2">
          <HoneycombItem
            v-for="(item, index) in row3"
            :key="index"
            class="h-item"
            v-bind="item"
            :filter="filter"
          />
        </div>
        <div class="h-container row-offset row-top-offset-3">
          <HoneycombItem
            v-for="(item, index) in row4"
            :key="index"
            class="h-item"
            v-bind="item"
            :filter="filter"
          />
        </div>
      </div>
    </div>
    <MainRightBar>
      <template #bottom>
        <div>
          <button
            @click="changeFilter('positive')"
            v-ripple
            class="filter-btn"
            style="margin-bottom: 17px"
          >
            <div class="icon">
              <img src="~/assets/icons/plus.svg" />
            </div>
            <div class="text">Положительный тренд</div>
          </button>

          <button @click="changeFilter('negative')" v-ripple class="filter-btn">
            <div class="icon">
              <img src="~/assets/icons/minus.svg" />
            </div>
            <div class="text">Отрицательный тренд</div>
          </button>
        </div>
      </template>
    </MainRightBar>
  </q-page>
</template>

<script>
import HoneycombItem from 'src/components/Honeycomb/HoneycombItem';
import MainRightBar from 'src/layouts/MainRightBar';

export default {
  name: 'Main',
  data() {
    return {
      filter: 'all',
      items: [
        {
          to: '/tw/vlast-dov',
          neutral: true,
          dynamic: false,
          icon: 'Goverment',
          title: 'Доверие к власти',
          number: '--%',
          bottom: {
            l: { number: '-', label: 'по РФ' },
            r: { number: '-', label: 'по ПФО' },
          },
        },
        {
          negative: true,
          dynamic: false,
          to: '/tw/nas',
          title: 'Численность населения, чел.',
          icon: 'People',
          number: '4 013 786',
          bottom: {
            l: { number: '7', label: 'по РФ' },
            r: { number: '1', label: 'по ПФО' },
          },
        },
        {
          negative: true,
          dynamic: false,
          icon: 'Calendar',
          to: '/tw/lifespan',
          title: 'Ожидаемая продолжительность жизни, лет',
          number: '70,4',
          bottom: {
            l: { number: '49', label: 'по РФ' },
            r: { number: '11', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/bed',
          negative: true,
          dynamic: false,
          icon: 'Money',
          title: 'Уровень бедности',
          number: '14,7',
          bottom: {
            l: { number: '-', label: 'по РФ' },
            r: { number: '-', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/sport',
          neutral: true,
          dynamic: false,
          icon: 'Sport',
          title: 'Занимаются спортом',
          number: '48,54',
          bottom: {
            l: { number: '-', label: 'по РФ' },
            r: { number: '-', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/edu',
          positive: true,
          dynamic: false,
          icon: 'Book',
          title: 'Уровень образования',
          number: '64,91',
          bottom: {
            l: { number: '34', label: 'по РФ' },
            r: { number: '4', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/tal',
          neutral: true,
          dynamic: false,
          icon: 'Support',
          title: 'Поддержка молодых талантов',
          number: '--%',
          bottom: {
            l: { number: '-', label: 'по РФ' },
            r: { number: '-', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/vol',
          positive: true,
          dynamic: false,
          icon: 'Volonters',
          title: 'Количество волонтеров, чел.',
          number: '17 754',
          bottom: {
            l: { number: '-', label: 'по РФ' },
            r: { number: '-', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/gar',
          positive: true,
          dynamic: false,
          icon: 'SocialProgress',
          title:
            'Условия для воспитания гармонично развитой и ответственной личности',
          number: '--%',
          bottom: {
            l: { number: '-', label: 'по РФ' },
            r: { number: '-', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/kul',
          positive: true,
          dynamic: false,
          icon: 'Culture',
          title: 'Посещения культурных мероприятий, млн. ед.',
          number: '26,254',
          bottom: {
            l: { number: '-', label: 'по РФ' },
            r: { number: '-', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/zhl',
          positive: true,
          dynamic: false,
          icon: 'Home',
          title: 'Улучшение жилищных условий, тыс. ед.',
          number: '225,87',
          bottom: {
            l: { number: '-', label: 'по РФ' },
            r: { number: '-', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/str',
          positive: true,
          dynamic: false,
          icon: 'Building',
          title: 'Объем жилищного строительства, млн. м2',
          number: '2,455',
          bottom: {
            l: { number: '8', label: 'по РФ' },
            r: { number: '2', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/gor',
          positive: true,
          dynamic: false,
          icon: 'Infrasructure',
          title: 'Качество городской среды',
          number: '184',
          bottom: {
            l: { number: '20', label: 'по РФ' },
            r: { number: '4', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/dor',
          positive: true,
          dynamic: false,
          icon: 'Road',
          title: 'Состояние дорожной сети',
          number: '52,3%',
          bottom: {
            l: { number: '-', label: 'по РФ' },
            r: { number: '-', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/okr',
          positive: true,
          dynamic: false,
          icon: 'Enviroment',
          title: 'Качество окружающей среды',
          number: '105,95%',
          bottom: {
            l: { number: '19', label: 'по РФ' },
            r: { number: '5', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/bis',
          positive: true,
          dynamic: true,
          icon: 'Wallet',
          title: 'Темпы роста среднемесячной зарплаты',
          number: '101,7%',
          bottom: {
            l: { number: '55', label: 'по РФ' },
            r: { number: '10', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/doh',
          positive: true,
          dynamic: false,
          icon: 'DynamicState',
          title: 'Темпы роста среднедушевого дохода',
          number: '94,9%',
          bottom: {
            l: { number: '79', label: 'по РФ' },
            r: { number: '12', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/inv',
          positive: true,
          dynamic: false,
          icon: 'GrowIndex',
          title: 'Индекс роста объема инвестиций',
          number: '365,9',
          bottom: {
            l: { number: '-', label: 'по РФ' },
            r: { number: '-', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/bis',
          positive: true,
          dynamic: false,
          icon: 'Shop',
          title: 'Численность СМП и ИП, тыс. ед.',
          number: '472,59',
          bottom: {
            l: { number: '12', label: 'по РФ' },
            r: { number: '4', label: 'по ПФО' },
          },
        },
        {
          to: '/tw/cif',
          neutral: true,
          dynamic: false,
          icon: 'Digital',
          title: 'Цифровая зрелость региональных органов власти',
          number: '--',
          bottom: {
            l: { number: '-', label: 'по РФ' },
            r: { number: '-', label: 'по ПФО' },
          },
        },
      ],
    };
  },
  computed: {
    row1() {
      return this.items.slice(0, 5);
    },
    row2() {
      return this.items.slice(5, 10);
    },
    row3() {
      return this.items.slice(10, 15);
    },
    row4() {
      return this.items.slice(15, 20);
    },
    typeItem() {
      return (item) => {
        if (item.positive) return { positive: true };
        if (item.negative) return { negative: true };
        if (item.neutral) return { neutral: true };
        return {};
      };
    },
  },
  methods: {
    changeFilter(value) {
      if (this.filter === value) return (this.filter = 'all');
      this.filter = value;
    },
  },
  components: {
    HoneycombItem,
    MainRightBar,
  },
};
</script>
<style scoped>
.filter-btn {
  @apply tw-flex tw-items-center tw-relative tw-p-2;
}

.icon {
  width: 77px;
  height: 77px;
  position: relative;
  background: #212b4b;
  border-radius: 50%;
  margin-right: 42px;
}

.icon img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.text {
  @apply tw-underline tw-text-xs;
}

.h-container {
  margin-left: -13px;
  margin-right: -13px;
  @apply tw-flex tw-flex-wrap;
}

.h-item {
  margin-left: 13px;
  margin-right: 13px;
}
.row-offset {
  position: relative;
  left: 231px;
}

.row-top-offset-1,
.row-top-offset-2,
.row-top-offset-3 {
  position: relative;
}

.row-top-offset-1 {
  top: -104px;
}

.row-top-offset-2 {
  top: -208px;
}

.row-top-offset-3 {
  top: -312px;
}

.perspective {
  perspective: 4500px;
  overflow: hidden;
}
.items {
  transform: rotateY(28deg) translateX(300px) translateY(150px);
  max-width: 3500px;
}
</style>
