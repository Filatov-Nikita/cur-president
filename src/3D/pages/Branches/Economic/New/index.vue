<template>
  <q-page class="main">
    <div class="row row1">
      <EconomicHoneycomb
        class="item"
        positive
        icon="Invest"
        componentName="Invest"
        period="I квартал 2021 г."
        number="47,69"
        title="Инвестиции в основной капитал"
        subtitle="Млрд ₽"
        dynamic
      />
      <EconomicHoneycomb
        class="item"
        positive
        icon="Diagram"
        componentName="SocEco"
        period="Май 2021 г."
        number="101,5%"
        title="Показатели социально-экономического развития"
        subtitle="Индекс промышленного производства"
        dynamic
      />
      <EconomicHoneycomb
        class="item"
        positive
        icon="EconomicSector"
        componentName="MonRealSec"
        period="Май 2021 г."
        number="101,4%"
        title="Мониторинг реального сектора экономики"
        subtitle="Индекс промышленного производства"
        dynamic
      />
    </div>
    <div class="row row2">
      <EconomicHoneycomb
        class="item"
        positive
        icon="InvestCompanies"
        componentName="Zayav"
        period="I квартал 2021 г."
        number="396"
        title="Инвестпроекты. Заявочная компания"
        subtitle="Проектов"
        dynamic
        :subtitle2="{ number: '318 895', label: 'млн ₽' }"
      />
      <EconomicHoneycomb
        class="item"
        positive
        icon="InvestMonitor"
        componentName="MonRealize"
        period="IV квартал 2020 г."
        number="173 351"
        title="Инвестпроекты. Мониторинг реализации"
        subtitle="Млн ₽"
        :subtitle2="{ number: '1 234', label: 'проекта' }"
      />
      <EconomicHoneycomb
        class="item"
        positive
        icon="InvestDynamic"
        componentName="InvestDynamic"
        period="2020"
        number="9 место"
        title="Динамика развития инвестиционной деятельности"
        subtitle="В рейтинге регионов"
        dynamic
        :subtitle2="{ number: '+7', label: 'к АППГ' }"
      />
      <EconomicHoneycomb
        class="item"
        positive
        icon="InvestPromo"
        componentName="InvestPromo"
        period="-"
        number="312 673"
        title="Привлечение инвестиций"
        subtitle="Объём заявленных инвестиций, млн ₽"
      />
      <EconomicHoneycomb
        class="item"
        positive
        type="indicators"
        icon="InvestRaiting"
        componentName="InvestRaiting"
        period="IV квартал 2020 г."
        :indicators="[
          { label: 'Уфа', dynamic: true },
          { label: 'Межгорье', dynamic: false },
        ]"
        title="Рейтинг инвестиционной активности МО"
        subtitle="Объём заявленных инвестиций, млн ₽"
        dynamic
      />

      <EconomicHoneycomb
        class="item"
        positive
        icon="InvestProgram"
        componentName="InvestProgram"
        period="2020 г."
        number="70 906"
        title="Объекты республиканской адресной инвестиционной программы"
        subtitle="Общий объём инвестиций, млн ₽"
        :subtitle2="{ number: '+166%', label: 'к АППГ' }"
        dynamic
      />
    </div>
    <div class="row row3">
      <EconomicHoneycomb
        class="item"
        positive
        icon="SocActive"
        componentName="SocActivity"
        period="Апрель 2021 г."
        number="16 221,65"
        title="Благосостояние и социальная активность населения"
        subtitle="Продуктовая корзина, ₽"
        dynamic
        :subtitle2="{ number: '38 818,6', label: 'Номинальная ЗП, ₽' }"
      />
      <EconomicHoneycomb
        class="item"
        negative
        icon="PriceIndex"
        componentName="PriceIndex"
        period="Начало года - Май 2021 г."
        number="105,99%"
        title="Индекс потребительских цен "
        subtitle="Индекс цен на товары и услуги"
        dynamic
      />
      <EconomicHoneycomb
        class="item"
        negative
        icon="SocMonitor"
        componentName="MonSoc"
        period="IV квартал 2021 г."
        number="94,7%"
        title="Мониторинг социальной сферы"
        subtitle="Динамика реальных денежных доходов"
        dynamic
      />
      <EconomicHoneycomb
        class="item"
        negative
        icon="SocObes"
        componentName="SocObes"
        period="-"
        number="82,06%"
        title="Обеспеченность населения объектами социальной сферы"
        subtitle="Сводный индекс обеспеченности"
        dynamic
      />
      <!-- <EconomicHoneycomb
        class="item"
        positive
        icon="SchoolFood"
        period="I квартал 2021 г."
        number="457"
        title="Качество школьного питания"
        subtitle="Школы"
      /> -->
    </div>
    <div class="row row4">
      <EconomicHoneycomb
        class="item"
        positive
        icon="Federal"
        componentName="FederalProgram"
        period="II квартал 2020 г."
        number="84"
        title="Федеральные программы. Заявки"
        subtitle="Заявки"
        :subtitle2="{ number: '38 503', label: 'Млн ₽' }"
      />

      <EconomicHoneycomb
        class="item"
        positive
        icon="FederalFinance"
        componentName="FederalFinance"
        period="IV квартал 2020 г."
        number="125 958"
        title="Федеральные программы. Финансирование"
        subtitle="Предусмотрено, млн ₽"
      />

      <EconomicHoneycomb
        class="item"
        positive
        type="2stat"
        icon="Oaz"
        componentName="Toser"
        period="-"
        :_2stat="{
          left: { number: '5', label: 'ТОСЭР' },
          right: { number: '1', label: 'ОЭЗ' },
        }"
        title="ТОСЭР и ОЭЗ"
        dynamic
      />

      <EconomicHoneycomb
        class="item"
        positive
        icon="FailedBuilading"
        componentName="FailedBuilding"
        period="2020 г."
        number="2 075"
        subtitle="Всего объектов"
        title="Незавершенное строительство"
      />
      <EconomicHoneycomb
        class="item"
        positive
        icon="SetPlan"
        componentName="Plan"
        period="-"
        number="8"
        subtitle="Проекты в работе"
        title="Сетевое планирование приоритетных направлений деятельности"
      />
    </div>
    <div class="row row5">
      <EconomicHoneycomb
        class="item"
        positive
        icon="Buisiness"
        componentName="MP"
        period="Март 2021 г."
        number="28%"
        subtitle="Доля МП"
        title="Малое и среднее предпринимательство"
        dynamic
      />
      <EconomicHoneycomb
        class="item"
        positive
        icon="Callback"
        componentName="Callback"
        period="С начала года"
        number="137"
        subtitle="Всего звонков"
        title="Горячая линия «Обратная связь» от бизнеса»"
        dynamic
      />
      <div class="space item"></div>
      <EconomicHoneycomb
        class="item"
        positive
        icon="Alfa"
        componentName="Alga"
        period="на 20 июня 2021 г."
        number="40%"
        subtitle="Доля использования карт"
        title="Транспортная карта АЛГА"
      />
      <EconomicHoneycomb
        class="item"
        positive
        icon="Bus"
        componentName="Transport"
        period="на 20 июня 2021 г."
        number="73"
        subtitle="Млн поездок"
        title="Общественные перевозки"
        :subtitle2="{ number: '1 849', label: 'Млн ₽' }"
        dynamic
      />
    </div>
  </q-page>
</template>

<script>
import EconomicHoneycomb from 'src/3D/components/Branches/Economic/New/EconomicHoneycomb';

export default {
  components: {
    EconomicHoneycomb,
  },
};
</script>

<style scoped>
.main {
  padding-top: 90px;
  background: url('/images/3D/main-map.jpg') no-repeat;
  background-size: cover;
  padding-bottom: 50px;
}

.item {
  margin-left: 11.5px;
  margin-right: 11.5px;
}

.row {
  margin-left: -11.5px;
  margin-right: -11.5px;
  @apply tw-flex tw-flex-wrap;
}

.row1,
.row2,
.row3,
.row4,
.row5 {
  position: relative;
}

.row2,
.row4 {
  left: 192px;
}

.row2,
.row3,
.row4,
.row5 {
  margin-top: -88px;
}

.space {
  width: 362px;
  height: 418px;
}
</style>
