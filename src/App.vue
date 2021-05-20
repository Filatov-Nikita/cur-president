<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
const appIcons = {
  // 'a-home': 'img:/svg-icons/home.svg',
  // 'a-favorites': 'img:/svg-icons/favorites.svg',
  // 'a-search': 'img:/svg-icons/search.svg',
  // 'a-sales': 'img:/svg-icons/sales.svg',
  // 'a-shop': 'img:/svg-icons/shop.svg',
  // 'a-profile': 'img:/svg-icons/profile.svg',
  // 'a-menu': 'img:/svg-icons/menu.svg',
  // 'a-arrow': 'img:/svg-icons/arrow.svg',
  // 'a-menu-arrow': 'img:/svg-icons/menu-arrow.svg',
  // 'a-heart': 'img:/svg-icons/heart.svg',
  // 'a-close': 'img:/svg-icons/close.svg',
};

export default {
  name: 'App',
  created() {
    this.$q.iconMapFn = (iconName) => {
      const icon = appIcons[iconName];
      if (icon !== void 0) {
        return { icon };
      }
    };
  },
};
</script>
