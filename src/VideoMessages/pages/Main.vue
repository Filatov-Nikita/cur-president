<template>
  <q-page>
    <PageHead class="head-mb" uppercase>
      Прямая линия главы региона Радия хабирова
    </PageHead>
    <div
      class="row"
      v-for="(row, index) in rows"
      :class="{ 'row-offset': isEqualRow(index + 1), 'row-mt': index > 0 }"
      :key="index"
    >
      <BranchHoneycomb
        class="item"
        v-for="item in row"
        :key="item.label"
        :icon="item.icon"
        :label="item.label"
        :label2="item.label2"
        :branchId="item.id"
      />
    </div>
  </q-page>
</template>

<script>
import PageHead from 'src/VideoMessages/components/PageHead';
import BranchHoneycomb from 'src/VideoMessages/components/BranchHoneycomb';

export default {
  data() {
    return {
      items: getItems(),
      specificItems: [
        {
          label: 'Соц. обслуживание <br/> и защита',
          label2: 'Соц. обслуживание и защита',
          icon: 'soc',
          id: 11,
        },
        {
          label: 'Транспорт',
          label2: 'Транспорт',
          icon: 'trans',
          id: 12,
        },
        {
          label: 'Физическая культура <br/> и спорт',
          label2: 'Физическая культура и спорт',
          icon: 'sport',
          id: 13,
        },
        {
          label: 'Экология',
          label2: 'Экология',
          icon: 'eco',
          id: 14,
        },
        {
          label: 'Строительство',
          label2: 'Строительство',
          icon: 'str',
          id: 15,
        },
        {
          label: 'Другие',
          label2: 'Другие',
          icon: 'other',
          id: 16,
        },
      ],
    };
  },
  computed: {
    rows() {
      return [...this.getRows(this.items, 5), this.specificItems];
    },
  },
  methods: {
    getRows(items, itemsCount = 3) {
      if (items.length <= itemsCount) return [items];
      const row = items.slice(0, itemsCount);
      const rest = items.slice(itemsCount);
      return [row, ...this.getRows(rest, itemsCount)];
    },
    isEqualRow(i) {
      return i % 2 === 0;
    },
  },
  components: {
    PageHead,
    BranchHoneycomb,
  },
};

function getItems() {
  return [
    {
      label: 'Благоустройство',
      label2: 'Благоустройство',
      icon: 'blag',
      id: 1,
    },
    {
      label: 'ЖКХ',
      label2: 'ЖКХ',
      icon: 'zkh',
      id: 2,
    },
    {
      label: 'Здравоохранение',
      label2: 'Здравоохранение',
      icon: 'zdrav',
      id: 3,
    },
    {
      label: 'Культура',
      label2: 'Культура',
      icon: 'kul',
      id: 4,
    },
    {
      label: 'Лесное хозяйство',
      label2: 'Лесное хозяйство',
      icon: 'les',
      id: 5,
    },
    {
      label: 'Образование',
      label2: 'Образование',
      icon: 'edu',
      id: 6,
    },
    {
      label: 'Предпринимательство <br/> и экономика',
      label2: 'Предпринимательство и экономика',
      icon: 'pm',
      id: 7,
    },
    {
      label: 'Ремонт дорог',
      label2: 'Ремонт дорог',
      icon: 'road',
      id: 8,
    },
    {
      label: 'Связь <br/> и телевидение',
      label2: 'Связь и телевидение',
      icon: 'tv',
      id: 9,
    },
    {
      label: 'Сельское <br/> хозяйство',
      label2: 'Сельское хозяйство',
      icon: 'sel',
      id: 10,
    },
  ];
}
</script>
<style scoped>
.head-mb {
  margin-bottom: 140px;
}

.row-offset {
  position: relative;
  left: 277px;
}

.row-mt {
  margin-top: -139px;
}

.item {
  margin-left: 12px;
  margin-right: 12px;
}

.row {
  margin-left: -28px;
  margin-right: -12px;
  @apply tw-inline-flex tw-flex-wrap;
}
</style>
