<template>
  <div v-if="type === 'type1'" class="type1">
    <div v-for="i in 3" class="type1-col tw-w-1/3 type1-col--selected">
      <slot :name="`col${i}`" />
    </div>
  </div>
  <div v-else-if="type === 'type2'">
    <div class="type2-row">
      <div class="tw-w-1/2 type2-col">
        <slot :name="`col1`" />
      </div>
      <div class="tw-w-1/2 type2-col">
        <slot :name="`col2`" />
      </div>
    </div>
    <div class="type2-row">
      <div class="tw-w-1/2 type2-col">
        <slot :name="`col3`" />
      </div>
      <div class="tw-w-1/2 type2-col">
        <slot :name="`col4`" />
      </div>
    </div>
    <div class="type2-row">
      <div class="tw-w-1/2 type2-col">
        <slot :name="`col5`" />
      </div>
      <div class="tw-w-1/2 type2-col">
        <slot :name="`col6`" />
      </div>
    </div>
  </div>
  <div v-else-if="type === 'type3'" class="tw-flex">
    <div>
      <slot name="col main" />
    </div>
    <div>
      <div v-for="i in 2">
        <slot :name="`col${i}`" />
      </div>
    </div>
  </div>
  <div v-else-if="type === 'type4'"></div>
</template>

<script>
export default {
  props: {
    type: {
      default: 'type1',
      validator(value) {
        return ['type1', 'type2', 'type3', 'type4'].includes(value);
      },
    },
  },
};
</script>

<style scoped>
.type1 {
  border-top: 2px solid #275d81;
  @apply tw-flex;
}

.type1-col {
  padding: 64px;
}

.type1-col + .type1-col {
  border-left: 2px solid #275d81;
}

.type1-col--selected:nth-child(2n) {
  background: rgba(196, 196, 196, 0.05);
}

.type2-col:nth-child(2n) {
  border-left: 2px solid #275d81;
}

.type2-col + .type2-col {
  border-left: 2px solid #275d81;
}

.type2-row {
  border-top: 2px solid #275d81;
  @apply tw-flex;
}

.type2-row:nth-child(2n - 1) {
  background: rgba(196, 196, 196, 0.05);
}

.type2-col {
  padding: 31px 10px 31px 108px;
}
</style>
