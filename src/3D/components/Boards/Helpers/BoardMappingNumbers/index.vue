<template>
  <div>
    <div class="mapnumbers">
      <BoardNumbers v-bind="left" />
      <div
        class="tw-flex tw-items-center"
        :class="`tw-self-${align}`"
        :style="{ 'padding-bottom': bottomSpace }"
      >
        <q-img
          width="71px"
          class="arrow"
          src="./arrows/arrow-lg.svg"
          :style="{
            'margin-left': offset,
            'margin-right': offset,
          }"
          :position="position"
        />
        <BoardNumbers v-bind="right" />
      </div>
    </div>
  </div>
</template>

<script>
import BoardNumbers from '../BoardNumbers';

export default {
  name: 'BoardMappingNumbers',
  props: {
    offset: {
      default: '35px',
      type: String,
    },
    align: {
      default: 'center',
      type: String,
    },
    bottomSpace: {
      default: '0px',
      type: String,
    },
    left: {
      required: true,
      validator(left) {
        return left.value && left.color && left.size;
      },
    },
    right: {
      required: true,
      validator(left) {
        return left.value && left.color && left.size;
      },
    },
    label: {
      default: undefined,
      type: String,
    },
  },
  computed: {
    position() {
      if (this.arrowSize >= 640) return '-100% 50%';
      return '100% 50%';
    },
  },
  components: {
    BoardNumbers,
  },
};
</script>

<style scoped>
.mapnumbers {
  @apply tw-flex tw-items-end;
}

.arrow {
  align-self: center;
}
</style>
