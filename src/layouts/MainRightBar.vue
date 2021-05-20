<template>
  <div class="bar">
    <RightBar class="menu" />

    <div class="bottom">
      <slot name="bottom" />
      <DateDysplay class="date" />
    </div>
  </div>
</template>

<script>
import RightBar from './Statistics/RightBar';
import DateDysplay from 'src/components/DateDysplay';

export default {
  components: {
    RightBar,
    DateDysplay,
  },
};
</script>

<style scoped>
.bar {
  position: fixed;
  width: 734px;
  height: 100%;
  right: 0;
  top: 0;
  padding-top: 132px;
}

.menu {
  max-width: 582px;
}

.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: 72px;
}

.date {
  padding-top: 110px;
}
</style>
