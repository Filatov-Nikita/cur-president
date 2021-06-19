<template>
  <router-link
    :to="item.to || '/'"
    v-slot="{ isActive, navigate, href }"
    custom
  >
    <li class="li">
      <a
        class="a"
        :href="item.external ? item.to : href"
        v-on="item.external ? {} : { click: navigate }"
        v-bind="item.blank ? { target: '_blank' } : {}"
      >
        <MenuIcon :icon="item.icon" class="item-icon" :active="isActive" />
        <p class="tw-font-semibold tw-text-sm" :class="{ active: isActive }">
          {{ item.label }}
        </p>
      </a>
    </li>
  </router-link>
</template>

<script>
import MenuIcon from './MenuIcon';

export default {
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
  components: {
    MenuIcon,
  },
};
</script>

<style scoped>
.item-icon {
  margin-right: 54px;
}
.li {
  margin-bottom: 14px;
}

.a {
  @apply tw-flex tw-items-center;
}

.active {
  color: #494f69;
}
</style>
