<template>
  <section class="ticker tw-w-full">
    <div class="left">башинформ.рф</div>
    <div class="right-addWrap">
      <div class="right">
        <div class="right-wrap">
          <p class="item">
            Росприроднадзор взял под особый контроль работу диоритового карьера
            в Учалинском районе
          </p>
          <p class="item">
            Вузам в регионах РФ разрешили перейти на дистанционное обучение с 4
            по 7 мая
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$duration: 30s;

.ticker {
  @apply tw-flex;
  height: 100px;
}

.right-addWrap {
  @apply tw-flex-grow;
  overflow: hidden;
}

.left {
  color: #141b32;
  font-size: 30px;
  line-height: 100px;
  padding-left: 30px;
  padding-right: 30px;
  @apply tw-bg-white tw-font-semibold;
}

.right {
  width: 100%;
  padding-left: 100%;
  line-height: 100px;
  color: #081136;
  font-size: 45px;
  box-sizing: content-box;
  @apply tw-bg-positive  tw-font-semibold;
}

.item {
  display: inline-block;
}

.item:last-child::after {
  display: none;
}

.item::after {
  content: '';
  width: 35px;
  height: 35px;
  display: inline-block;
  margin-left: 90px;
  margin-right: 90px;
  line-height: 100px;
  background: url('~assets/icons/ticker-item.svg') no-repeat center;
}

.right-wrap {
  display: inline-block;
  padding-right: 100%;
  box-sizing: content-box;
  white-space: nowrap;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-name: ticker;
  animation-name: ticker;
  -webkit-animation-duration: $duration;
  animation-duration: $duration;
}

@-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
