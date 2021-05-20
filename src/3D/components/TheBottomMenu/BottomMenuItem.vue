<template>
  <router-link
    :to="item.to || '/'"
    custom
    v-slot="{ isActive, navigate, href }"
    exact
  >
    <li class="item" :class="{ active: isActive }">
      <a
        :disabled="!item.to"
        :href="href"
        v-on="item.to ? { click: navigate } : { click: prevent }"
        class="link"
      >
        <div class="icon-area">
          <img v-if="isActive" class="icon" :src="require(`./icons/${item.icon}-active.svg`)" />
          <img v-else class="icon" :src="require(`./icons/${item.icon}.svg`)" />
        </div>
        <div class="label">{{ item.label }}</div>
      </a>
    </li>
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
  methods: {
    prevent(e) {
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.item {
  padding: 50px;
  background: #141d43;
  @apply tw-font-semibold tw-text-xs;
}

.item:nth-child(2n) {
  background: transparent;
}

.item.active {
  background: #2790d4;
}

.item.active .label {
  display: block;
}

.label {
  display: none;
  flex-basis: 200px;
  flex-grow: 1;
  margin-left: 84px;
  padding-right: 57px;
}

.icon-area {
  width: 62px;
  height: 62px;
  position: relative;
}

.icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.link {
  opacity: 1 !important;
  @apply tw-flex tw-items-center tw-w-full;
}
</style>
