<template>
  <div class="h-row">
    <HoneycombItem
      class="h-col"
      v-for="i in 10"
      :key="i"
      positive
      icon="GrowIndex"
    />
  </div>
</template>

<script>
import HoneycombItem from 'src/components/Honeycomb/HoneycombItem';

export default {
  components: {
    HoneycombItem,
  },
  created() {
    var align = function () {
      var isoddlen = function (i) {
        return i % 2;
      };
      var cells = document.querySelectorAll('.h-col');
      var lastLeft = -500;
      var is_odd = false;
      var rows = [[]];
      var j = 0;
      for (var i = 0; i < cells.length; i++) {
        var pos = cells[i].getBoundingClientRect();
        if (pos.left < lastLeft) {
          is_odd = !is_odd;
          j++;
          rows[j] = [];
        }
        rows[j].push(cells[i]);
        lastLeft = pos.left;
        if (is_odd) {
          cells[i].classList.add('odd-row');
        } else {
          cells[i].classList.remove('odd-row');
        }
      }
      for (var i = 0; i < rows.length - 1; i++) {
        if (isoddlen(rows[i].length) !== isoddlen(rows[i + 1].length)) {
          for (var j = 0; j < rows[i + 1].length; j++) {
            rows[i + 1][j].classList.toggle('odd-row');
          }
        }
      }
    };
    align();
    window.addEventListener('resize', align, false);
  },
};
</script>

<style scoped lang="scss">
.h-row {
  margin-left: -13px;
  margin-right: -13px;
  @apply tw-flex tw-flex-wrap;
}

.h-col {
  margin-left: 13px;
  margin-right: 13px;
  position: relative;
}

.h-col.odd-row {
  top: -100px;
  left: 230px;
}
</style>
