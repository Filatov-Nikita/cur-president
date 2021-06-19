<template>
  <router-link
    :to="item.to || '/unknown'"
    custom
    v-slot="{ isActive, navigate, href }"
  >
    <li class="tw-flex">
      <div class="item" :class="{ active: isActive }">
        <a
          :disabled="!item.to"
          :href="href"
          v-on="
            item.to && !item.children ? { click: navigate } : { click: prevent }
          "
          class="link"
        >
          <div class="icon-area">
            <img
              v-if="isActive"
              class="icon"
              :src="require(`./icons/${item.icon}-active.svg`)"
            />
            <img
              v-else
              class="icon"
              :src="require(`./icons/${item.icon}.svg`)"
            />
          </div>
          <div class="label">{{ item.label }}</div>
        </a>

        <ul class="children" v-if="item.children && item.children.length">
          <li
            class="child"
            v-for="(child, index) in item.children"
            :key="index"
          >
            <router-link class="child-a" :to="child.to">{{
              child.label
            }}</router-link>
          </li>
        </ul>
      </div>

      <router-link
        v-for="child in item.children"
        :to="child.to"
        :key="child.label"
        custom
        exact
        v-slot="{ isActive, navigate, href }"
      >
        <a v-if="isActive" class="sublink" :href="href" @click="navigate">{{
          child.label
        }}</a>
      </router-link>
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
  position: relative;
  transition: background, 0.3s;
  background: #141d43;
  @apply tw-font-semibold tw-text-xs;
}

.sublink {
  background: #2278af;
  padding-left: 56px;
  padding-right: 56px;
}

.child {
  background: rgba(33, 105, 151, 0.95);
}

.child-a,
.sublink {
  display: flex;
  align-items: center;
  font-size: 29px;
  line-height: 94%;
  @apply tw-font-semibold;
}

.child-a {
  width: 100%;
  padding-left: 56px;
  padding-right: 21px;
  min-height: 160px;
}

.child-a::before,
.sublink::before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  background: #fff;
  margin-right: 29px;
  border-radius: 50%;
}

.children {
  display: none;
  position: absolute;
  top: 0;
}

.item:hover .children {
  display: block;
  width: 100%;
  transform: translateY(-100%);
}

.item:nth-child(2n) {
  background: transparent;
}

.item.active,
.item:hover {
  background: #2790d4;
}

.item.active .label,
.item:hover .label {
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
  padding: 50px;
  opacity: 1 !important;
  @apply tw-flex tw-items-center tw-w-full;
}
</style>
