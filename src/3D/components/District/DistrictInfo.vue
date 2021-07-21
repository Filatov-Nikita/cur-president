<template>
  <div class="info">
    <div class="item item-1">
      <div class="label">
        <img :src="require('./icons/people.svg')" alt="people" />
        <p class="caption">Население, чел.</p>
      </div>
      <div class="number">{{ peopleCol | prettyAmount }}</div>
    </div>

    <div class="item item-2">
      <div class="label">
        <img :src="require('./icons/rb.svg')" alt="rb" />
        <p class="caption">Площадь, кв. км</p>
      </div>
      <div class="number">{{ square | prettyAmount }}</div>
    </div>

    <div class="item item-3" v-if="include.length > 0">
      <div class="label">
        <img :src="require('./icons/include.svg')" alt="include" />
        <p class="caption">Включает</p>
      </div>

      <div>
        <div class="include-item" v-for="(item, index) in include" :key="index">
          <div class="include-val">{{ item.val | prettyAmount}}</div>
          <div class="include-label">{{ item.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    peopleCol: {
      required: true,
      type: String,
    },
    square: {
      required: true,
      type: String,
    },
    include: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style scoped>
.info {
  max-width: 1577px;
  @apply tw-flex tw-text-white;
}

.number {
  font-size: 95px;
  line-height: 130px;
  @apply tw-font-bold;
}

.caption {
  font-size: 30px;
  line-height: 30px;
}

.label {
  margin-bottom: 17px;
  @apply tw-flex tw-items-center;
}

.label img {
  margin-right: 28px;
}

.include-item {
  @apply tw-flex tw-items-end;
}

.include-label {
  font-size: 30px;
  @apply tw-font-semibold;
}
.include-val {
  margin-right: 37px;
  line-height: 50px;
  @apply tw-font-bold tw-text-md;
}

.include-item + .include-item {
  margin-top: 4px;
}

.item + .item {
  border-left: 1px solid theme('colors.white');
}

.item-1 {
  padding-right: 20px;
}

.item-2 {
  padding-left: 51px;
  padding-right: 72px;
}

.item-3 {
  padding-left: 60px;
}
</style>
