<template>
  <q-page>
    <PageHead class="head-mb" uppercase>
      <div style="margin-bottom: 23px">Видеобращения</div>
      <div>Радия Хабирова</div>
    </PageHead>
    <BoardsCarousel
      v-model="slide"
      :slides="slideNames"
      contentClass="_VideoMess-slider"
      controlClass="_VideoMess-control"
      class="slider"
      height="1365px"
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
  created() {
    this.$emit('update:background', 'three-h');
  },
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
  watch: {
    slide(value) {
      if (value === '2') this.$emit('update:background', 'two-h');
      else this.$emit('update:background', 'three-h');
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
      label: 'Сельское <br/> хозяйство',
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
  max-width: 2340px;
}

.head-mb {
  line-height: 100%;
  margin-bottom: 195px;
}

.row {
  @apply tw-flex;
}

.row-offset {
  position: relative;
  left: 331px;
}

.row-mt {
  margin-top: -167px;
}

.item {
  margin-left: 15.5px;
  margin-right: 15.5px;
}

.row {
  margin-left: -30px;
  margin-right: -15.5px;
  @apply tw-inline-flex tw-flex-wrap;
}
</style>
