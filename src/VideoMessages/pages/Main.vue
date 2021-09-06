<template>
  <q-page>
    <PageHead class="head-mb" uppercase>Прямая линия главы региона</PageHead>
    <BoardsCarousel
      v-model="slide"
      :slides="slideNames"
      contentClass="_VideoMess-slider"
      controlClass="_VideoMess-control"
      class="slider"
      height="1470px"
      onTheLeft
    >
      <q-carousel-slide
        v-for="(slide, index) in slides"
        :name="index.toString()"
        :key="index"
      >
        <div
          class="row"
          v-for="(row, index) in slide"
          :class="{ 'row-offset': isEqualRow(index + 1), 'row-mt': index > 0 }"
          :key="index"
        >
          <BranchHoneycomb
            class="item"
            v-for="item in row"
            :key="item.label"
            :icon="item.icon"
            :label="item.label"
          />
        </div>
      </q-carousel-slide>
    </BoardsCarousel>
  </q-page>
</template>

<script>
import PageHead from 'src/VideoMessages/components/PageHead';
import BranchHoneycomb from 'src/VideoMessages/components/BranchHoneycomb';
import BoardsCarousel from 'src/components/BoardsCarousel';

export default {
  data() {
    return {
      slide: '0',
      slideNames: ['0', '1', '2'],
      items: getItems(),
      specificItems: [
        {
          label: 'Транспорт',
          icon: 'trans',
        },
        {
          label: 'Физическая культура <br/> и спорт',
          icon: 'sport',
        },
        {
          label: 'Экология',
          icon: 'eco',
        },
        {
          label: 'Другие',
          icon: 'other',
        },
      ],
    };
  },
  computed: {
    rows() {
      return this.getRows(this.items);
    },
    specificRows() {
      return this.getRows(this.specificItems, 2);
    },
    slides() {
      return [
        ...this.getRows(this.rows, 2),
        ...this.getRows(this.specificRows, 2),
      ];
    },
  },
  methods: {
    getRows(items, itemsCount = 3) {
      if (items.length <= itemsCount) return [items];
      const row = items.slice(0, itemsCount);
      const rest = items.slice(itemsCount);
      return [row, ...this.getRows(rest)];
    },
    isEqualRow(i) {
      return i % 2 === 0;
    },
  },
  components: {
    PageHead,
    BranchHoneycomb,
    BoardsCarousel,
  },
};

function getItems() {
  return [
    {
      label: 'Благоустройство',
      icon: 'blag',
    },
    {
      label: 'ЖКХ',
      icon: 'zkh',
    },
    {
      label: 'Здравоохранение',
      icon: 'zdrav',
    },
    {
      label: 'Образование',
      icon: 'edu',
    },
    {
      label: 'Предпринимательство <br/> и экономика',
      icon: 'pm',
    },
    {
      label: 'Ремонт дорог',
      icon: 'road',
    },
    {
      label: 'Культура',
      icon: 'kul',
    },
    {
      label: 'Лесное хозяйство',
      icon: 'les',
    },
    {
      label: 'Строительство',
      icon: 'str',
    },
    {
      label: 'Связь <br/> и телевидение',
      icon: 'tv',
    },
    {
      label: 'Сельское хозяйство',
      icon: 'sel',
    },
    {
      label: 'Соц. обслуживание <br/> и защита',
      icon: 'soc',
    },
  ];
}
</script>
<style>
._VideoMess-slider {
  max-width: 100% !important;
}

._VideoMess-control {
  margin-top: 121px !important;
}
</style>
<style scoped>
.slider {
  max-width: 2548px;
}

.head-mb {
  margin-bottom: 125px;
}

.row {
  @apply tw-flex;
}

.row-offset {
  position: relative;
  left: 363px;
}

.row-mt {
  margin-top: -183px;
}

.item {
  margin-left: 15.5px;
  margin-right: 15.5px;
}

.row {
  margin-left: -15.5px;
  margin-right: -15.5px;
  @apply tw-inline-flex tw-flex-wrap;
}
</style>
