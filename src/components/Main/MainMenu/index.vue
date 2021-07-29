<template>
  <menu class="tw-flex tw-justify-center items">
    <router-link class="MAIN" :to="{ name: '3D' }">
      <HoneycompMaker contentClass="item item-3d" :w="363" color="positive">
        <Rb />
      </HoneycompMaker>
      <div class="label">3D Республика</div>
    </router-link>

    <router-link class="MAIN" :to="{ name: 'tw.main' }">
      <HoneycompMaker contentClass="item item-tw" :w="363" color="positive">
        <Tw />
      </HoneycompMaker>
      <div class="label">Оценка ВДЛ</div>
    </router-link>

    <a class="MAIN" :href="getDashboardUrl()">
      <HoneycompMaker
        contentClass="item item-dashboards"
        :w="363"
        color="positive"
      >
        <Dashboards />
      </HoneycompMaker>
      <div class="label">Дашборды</div>
    </a>

    <router-link :to="{ name: 'soc' }" class="MAIN">
      <HoneycompMaker contentClass="item item-soc" :w="363" color="positive">
        <Soc />
      </HoneycompMaker>
      <div class="label">Социальные коммуникации</div>
    </router-link>

    <a href="http://cur-rb-os.ru" class="MAIN">
      <HoneycompMaker contentClass="item item-os" :w="363" color="positive">
        <Os />
      </HoneycompMaker>
      <div class="label">Оперативное совещание</div>
    </a>

    <router-link :to="{ name: 'about' }" class="MAIN">
      <HoneycompMaker contentClass="item item-about" :w="363" color="positive">
        <About />
      </HoneycompMaker>
      <div class="label">О Цуре</div>
    </router-link>
  </menu>
</template>

<script>
import HoneycompMaker from 'src/components/Honeycomb/HoneycompMaker';
import Dashboards from './icons/Dashboards';
import Os from './icons/Os';
import Rb from './icons/Rb';
import Soc from './icons/Soc';
import Tw from './icons/Tw';
import About from './icons/About';
import moment from 'moment';

export default {
  methods: {
    getDashboardUrl() {
      const curDate = moment().format('DD.MM.YYYY');
      const hash = window.btoa(curDate);
      return `https://cur.bashkortostan.ru`;
    },
  },
  components: {
    HoneycompMaker,
    Rb,
    Dashboards,
    Os,
    Soc,
    Tw,
    About
  },
};
</script>

<style>
.MAIN {
  flex-basis: 360px;
}
.MAIN .item {
  transition: background 0.3s, border-color 0.3s;
  border-color: rgba(2, 11, 47, 0.9);
  background: rgba(2, 11, 47, 0.9);
  cursor: pointer;
  position: relative;
}

.MAIN .item-3d svg {
  fill: #01de50;
}

.MAIN .item-tw svg {
  fill: #69d0a5;
}

.MAIN .item-os svg {
  fill: #ff4d00;
}

.MAIN .item-soc svg {
  fill: #faff00;
}

.MAIN .item-about svg {
  fill: #0676fa;
}

.MAIN .item-dashboards svg {
  fill: #01aef8;
}

.MAIN:hover .item svg {
  fill: #fff;
}

.MAIN .item svg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.MAIN:hover .item-3d {
  border-color: rgba(1, 222, 80, 0.8);
  background: rgba(1, 222, 80, 0.8);
}

.MAIN:hover .item-tw {
  border-color: rgba(105, 208, 165, 0.8);
  background: rgba(105, 208, 165, 0.8);
}

.MAIN:hover .item-dashboards {
  border-color: rgba(1, 174, 248, 0.8);
  background: rgba(1, 174, 248, 0.8);
}

.MAIN:hover .item-os {
  border-color: rgba(255, 76, 0, 0.8);
  background: rgba(255, 76, 0, 0.8);
}

.MAIN:hover .item-soc {
  border-color: rgba(250, 255, 0, 0.8);
  background: rgba(250, 255, 0, 0.8);
}

.MAIN:hover .item-about {
  border-color: rgba(6, 118, 250, 0.8);
  background: rgba(6, 118, 250, 0.8);
}

.MAIN .item-tw {
  margin-left: 19px;
  margin-right: 24px;
}

.MAIN .item-dashboards {
  margin-left: 15px;
  margin-right: 20px;
}

.MAIN .item-os {
  margin-left: 20px;
}

.MAIN .item-soc {
  margin-left: 20px;
  margin-right: 15px;
}

.MAIN .item-about {
  margin-left: 20px;
  margin-right: 15px;
}

.MAIN .item-3d {
  margin-right: 19px;
}
</style>
<style scoped>
.items {
  margin-left: 368px;
}

.label {
  margin-top: 55px;
  line-height: 40px;
  @apply tw-font-bold tw-text-sm tw-text-center;
}
</style>
