<template>
  <q-footer class="footer">
    <router-link :to="{ name: 'main' }" class="tw-text-xs tw-underline backBtn">
      <HoneycompMaker contentClass="backBtn-content" color="blue" :w="482">
        <div class="tw-relative back-text">
          <img
            src="~/assets/icons/back-arrow.svg"
            alt="back-arrow"
            class="tw-mb-12"
          />
          <div class="back-link">
            Назад <br />
            к данным
          </div>
        </div>
      </HoneycompMaker>
    </router-link>
    <StatisticsCuratorName
      class="curatorBlock"
      fio="Антонов Никита Вячеславович"
    />
  </q-footer>
</template>

<script>
import HoneycompMaker from 'src/components/Honeycomb/HoneycompMaker';
import StatisticsCuratorName from 'src/components/Statistics/StatisticsCuratorName';

export default {
  components: {
    HoneycompMaker,
    StatisticsCuratorName,
  },
};
</script>
<style>
.backBtn-content {
  padding-left: 221px;
}
</style>
<style scoped>
.footer {
  background: transparent;
  padding-left: 397px;
  padding-bottom: 44px;
}

.backBtn {
  position: fixed;
  left: -96px;
  bottom: -170px;
}

.back-link {
  display: block;
  max-width: 164px;
}
.back-text {
  top: -20px;
}
.curatorBlock {
  margin-left: 169px;
}
</style>
