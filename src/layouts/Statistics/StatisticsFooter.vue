<template>
  <q-footer class="footer">
    <router-link
      :to="{ name: 'tw.main' }"
      class="tw-text-xs tw-underline backBtn"
    >
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
      v-if="showCurator"
      class="curatorBlock"
      :fio="curator"
    />
  </q-footer>
</template>

<script>
import HoneycompMaker from 'src/components/Honeycomb/HoneycompMaker';
import StatisticsCuratorName from 'src/components/Statistics/StatisticsCuratorName';

export default {
  created() {
    this.curatorByPath = {
      '/tw/nas': 'Забелин Максим Васильевич',
      '/tw/bed': 'Забелин Максим Васильевич',
      '/tw/doh': 'Забелин Максим Васильевич',
      '/tw/lifespan': 'Забелин Максим Васильевич',
      '/tw/zp': 'Забелин Максим Васильевич',
      '/tw/sport': 'Сагитов Ирек Хайривариевич',
      '/tw/vol': 'Сагитов Ирек Хайривариевич',
      '/tw/edu': 'Бадранов Азат Шамилевич',
      '/tw/tal': 'Бадранов Азат Шамилевич',
      '/tw/gar': 'Бадранов Азат Шамилевич',
      '/tw/kul': 'Бадранов Азат Шамилевич',
      '/tw/zhl': 'Абдрахимов Раиф Рамазанович',
      '/tw/str': 'Абдрахимов Раиф Рамазанович',
      '/tw/dor': 'Абдрахимов Раиф Рамазанович',
      '/tw/gor': 'Марзаев Алан Викторович',
      '/tw/okr': 'Искандаров Урал Салаватович',
      '/tw/inv': 'Муратов Рустам Хамитович',
      '/tw/bis': 'Фазылов Нияз Мансурович',
      '/tw/cif': 'Назаров Андрей Геннадьевич',
    };
  },
  computed: {
    curator() {
      return this.curatorByPath[this.$route.path] || '-';
    },
    showCurator() {
      return !['/tw/vlast-dov'].includes(this.$route.path);
    },
  },
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
