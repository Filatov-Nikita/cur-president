<template>
  <MenuIconCover :active="active">
    <component :is="iconName" :active="active" />
  </MenuIconCover>
</template>

<script>
import MenuIconCover from './MenuIconCover';
import TWIcon from './icons/TWIcon';
import CommunicationsIcon from './icons/CommunicationsIcon';
import DashboardsIcon from './icons/DashboardsIcon';
import RespublicIcon from './icons/RespublicIcon';
import SovetIcon from './icons/SovetIcon';
import AboutIcon from './icons/AboutIcon';

export default {
  props: {
    icon: {
      required: true,
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconName() {
      return this.icon + 'Icon';
    },
  },
  components: {
    MenuIconCover,
    TWIcon,
    CommunicationsIcon,
    DashboardsIcon,
    RespublicIcon,
    SovetIcon,
    AboutIcon
  },
};
</script>

<style>
</style>
