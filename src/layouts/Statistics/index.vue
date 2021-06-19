<template>
  <q-layout class="app-main-bg">
    <q-page-container class="tw-flex tw-w-full">
      <StatisticsCoverLayout :fill="fill" />
      <portal-target class="bigHC" name="hc-large" />
      <router-view class="left" :style="leftBarStyles" />
      <section :style="rightBarStyles" class="right">
        <RightBar class="bar" />
      </section>
    </q-page-container>
    <StatisticsFooter />
  </q-layout>
</template>

<script>
import RightBar from './RightBar';
import StatisticsCoverLayout from './StatisticsCoverLayout';
import StatisticsFooter from './StatisticsFooter';

export default {
  data() {
    const leftWidth = 70.598;
    return {
      leftWidth,
      rightWidth: 100 - leftWidth,
    };
  },
  computed: {
    leftBarStyles() {
      let { leftWidth: width } = this;
      width += '%';
      return {
        width,
      };
    },
    fill() {
      if (this.neutral) return '#2A3451';
      return this.positive ? '#01F859' : '#FF0000';
    },
    positive() {
      return [
        '/tw/zp',
        '/tw/bis',
        '/tw/inv',
        '/tw/doh',
        '/tw/okr',
        '/tw/dor',
        '/tw/gor',
        '/tw/str',
        '/tw/zhl',
        '/tw/kul',
        '/tw/gar',
        '/tw/vol',
        '/tw/edu',
      ].includes(this.$route.path);
    },
    neutral() {
      return ['/tw/vlast-dov', '/tw/sport', '/tw/tal', '/tw/cif'].includes(
        this.$route.path
      );
    },
    rightBarStyles() {
      let { rightWidth: width } = this;
      width += '%';
      return {
        width,
      };
    },
  },
  components: {
    RightBar,
    StatisticsCoverLayout,
    StatisticsFooter,
  },
};
</script>
<style scoped>
.left {
  position: relative;
  z-index: 2;
  padding-left: 161px;
  padding-top: 89px;
  padding-right: 169px;
}

.left::after {
  content: '';
  display: block;
  width: 100%;
  height: 853px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: -1;
  background: linear-gradient(0deg, #141b32 12.24%, rgba(20, 27, 50, 0) 100%);
}

.right {
  padding-top: 132px;
  padding-right: 138px;
}

.bigHC {
  position: fixed;
  bottom: -450px;
  right: 0;
  z-index: 3;
}

.bar {
  max-width: 582px;
  margin-left: auto;
}
</style>
