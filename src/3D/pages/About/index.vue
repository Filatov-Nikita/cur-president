<template>
  <q-page class="main">
    <div class="main-container">
      <div class="fullpage-wp" v-fullpage="opts">
        <div>
          <h1 class="eco-h1">Видео о центре управления республикой</h1>
          <div class="video">
            <video
              class="tw-block"
              style="width: 2547px"
              autoplay
              playsinline
              src="videos/about.mp4"
              controls
            >
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
            </video>
            <!-- poster="~assets/bg-main.jpg" -->
          </div>
          <div class="tw-text-center">
            <AppButton
              class="tw-mx-auto"
              label="Видео о платформе ЦУР"
              color="blue"
              size="lg"
            />
          </div>
        </div>

        <div>
          <h1 class="eco-h1">здание цур. интерактивный план</h1>
          <div class="tw-relative">
            <div class="tw-text-md tw-absolute tw-top-0 tw-left-0 tw-z-50">
              {{ levelNames[slide] }}
            </div>
            <BoardsCarousel
              v-model="slide"
              onTheLeft
              :slides="slides"
              height="1553px"
              wFull
              style="width: 2761px"
              controlClass="_About-control"
            >
              <q-carousel-slide name="slide1" class="tw-relative slide">
                <img
                  src="./1.png"
                  alt=""
                  class="tw-absolute tw-left-0 tw-top-0 tw-z-0"
                />
                <template v-for="(level, index) in levels">
                  <div
                    :key="'layer' + index"
                    class="tw-text-xxl tw-absolute svg"
                    :style="{
                      top: level1XY[index].top,
                      left: level1XY[index].left,
                      'z-index': 50 + index,
                    }"
                  >
                    <LevelPopup
                      v-if="page === 1"
                      class="popup"
                      :class="`popup-${level.size || 'md'}`"
                      :size="level.size || 'md'"
                      :text="level.name"
                      :key="'popup' + index"
                    />
                    <img
                      :src="require('./level1/' + level.svg + '.svg')"
                      alt=""
                    />
                  </div>
                </template>
              </q-carousel-slide>
              <q-carousel-slide name="slide2" class="tw-relative slide">
                <img
                  src="./-1.png"
                  alt=""
                  class="tw-absolute tw-left-0 tw-top-0 tw-z-0"
                />
                <template v-for="(level, index) in levels2">
                  <div
                    :key="'layer' + index"
                    class="tw-text-xxl tw-absolute svg"
                    :style="{
                      top: level2XY[index].top,
                      left: level2XY[index].left,
                      'z-index': 50 + index,
                    }"
                  >
                    <LevelPopup
                      v-if="page === 1"
                      class="popup"
                      :class="`popup1-${level.size || 'md'}`"
                      :size="level.size || 'md'"
                      :text="level.name"
                      :key="'popup' + index"
                    />
                    <img
                      :src="require('./level2/' + level.svg + '.svg')"
                      alt=""
                    />
                  </div>
                </template>
              </q-carousel-slide>
              <q-carousel-slide name="slide3" class="tw-relative slide">
                <img
                  src="./-2.png"
                  alt=""
                  class="tw-absolute tw-left-0 tw-top-0 tw-z-0"
                />
                <template v-for="(level, index) in level3">
                  <div
                    :key="'layer' + index"
                    class="tw-text-xxl tw-absolute svg"
                    :style="{
                      top: level3XY[index].top,
                      left: level3XY[index].left,
                      'z-index': 50 + index,
                    }"
                  >
                    <LevelPopup
                      v-if="page === 1"
                      class="popup"
                      :class="`popup1-${level.size || 'md'}`"
                      :size="level.size || 'md'"
                      :text="level.name"
                      :key="'popup' + index"
                    />
                    <img
                      :src="require('./level3/' + level.svg + '.svg')"
                      alt=""
                    />
                  </div>
                </template>
              </q-carousel-slide>
            </BoardsCarousel>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import BoardsCarousel from 'src/components/BoardsCarousel';
import LevelPopup from 'src/3D/components/About/LevelPopup';

export default {
  created() {
    this.level1XY = level1XY;
    this.level2XY = level2XY;
    this.level3XY = level3XY;

    this.levelNames = {
      slide1: 'Уровень 1',
      slide2: 'Уровень -1',
      slide3: 'Уровень -2',
    };
  },
  data() {
    return {
      opts: {
        afterChange: (currentSlideEl, currenIndex) => {
          this.page = currenIndex;
        },
      },
      page: 0,
      slide: 'slide1',
      slides: ['slide1', 'slide2', 'slide3'],
      levels: [
        {
          name: 'Зал кафе',
          svg: 1,
        },
        {
          name: 'ТВ-студия',
          svg: 2,
        },
        {
          name: 'Телепроект "Республика Live"',
          svg: 3,
        },
        {
          name: 'АО "Корпорация развития Республики Башкортостан"',
          svg: 4,
          size: 'lg',
        },
        {
          name: 'АНО "Центр стратегических разработок Республики Башкортостан"',
          svg: 5,
          size: 'lg',
        },
        {
          name: 'Второй свет Ситуационного центра',
          svg: 6,
        },
        {
          name: 'Кабинет Премьер-министра Республики Башкортостан',
          svg: 7,
          size: 'lg',
        },
        {
          name: 'Антиковидный контактный центр',
          svg: 8,
        },
        {
          name: 'Coffee-point и зона отдыха',
          svg: 9,
        },
      ],
      levels2: [
        {
          name: 'Второй свет ТВ-студии',
          svg: 1,
        },
        {
          name: 'Ситуационный центр',
          svg: 2,
        },
        {
          name: 'Центр управления Республики Башкортостан',
          svg: 3,
        },
        {
          name: 'Операторская',
          svg: 4,
        },
        {
          name: 'Кабинет Главы Республики Башкортостан',
          svg: 5,
        },
        {
          name: 'Переговорная ЗВКС',
          svg: 6,
        },
        {
          name: 'Радиостудия',
          svg: 7,
        },
        {
          name: 'Переговорная комната',
          svg: 8,
        },
        {
          name: 'Coffee-point',
          svg: 9,
        },
        {
          name: 'Министерство экономического развития и инвестиционной политики Республики Башкортостан',
          svg: 10,
          size: 'lg',
        },
        {
          name: 'Переговорный зал',
          svg: 11,
        },
        {
          name: 'Зона отдыха',
          svg: 12,
        },
        {
          name: 'Министерство цифрового развития государственного управления Республики Башкортостан',
          svg: 13,
          size: 'lg',
        },
        {
          name: 'Пресс-центр',
          svg: 14,
        },
      ],
      level3: [
        {
          name: 'Электрощитовая',
          svg: 1,
        },
        {
          name: 'Сервер СКС, IT',
          svg: 2,
        },
        {
          name: 'Котельная установка',
          svg: 3,
        },
        {
          name: 'Центр стратегических разработок',
          svg: 4,
        },
        {
          name: 'АО "Корпорация развития Республики Башкортостан"',
          svg: 5,
          size: 'lg',
        },
        {
          name: 'Серверная',
          svg: 6,
        },
        {
          name: 'Министерство экономического развития и инвестиционной политики',
          svg: 7,
          size: 'lg',
        },
        {
          name: 'Кроссовый узел',
          svg: 8,
        },
        {
          name: 'Переговорный зал',
          svg: 9,
        },
        {
          name: 'Информационное агентство АО "Башинформ"',
          svg: 10,
        },
        {
          name: 'Специальная серверная АТС ОГВ',
          svg: 11,
        },
      ],
    };
  },
  components: {
    BoardsCarousel,
    LevelPopup,
  },
};

const level1XY = [
  {
    left: '66px',
    top: '366px',
  },
  {
    left: '560px',
    top: '433px',
  },
  {
    left: '1503px',
    top: '666px',
  },
  {
    left: '1727px',
    top: '663px',
  },
  {
    left: '963px',
    top: '947px',
  },
  {
    left: '228px',
    top: '666px',
  },
  {
    left: '663px',
    top: '828px',
  },
  {
    left: '1534px',
    top: '555px',
  },
  {
    left: '2049px',
    top: '930px',
  },
];

const level2XY = [
  {
    top: '210px',
    left: '264px',
  },
  {
    top: '323px',
    left: '73px',
  },
  {
    top: '447px',
    left: '450px',
  },
  {
    top: '329px',
    left: '275px',
  },
  {
    top: '440px',
    left: '243px',
  },
  {
    top: '443px',
    left: '285px',
  },
  {
    top: '294px',
    left: '483px',
  },
  {
    top: '671px',
    left: '1295px',
  },
  {
    top: '698px',
    left: '1475px',
  },
  {
    top: '778px',
    left: '1571px',
  },
  {
    top: '906px',
    left: '1898px',
  },
  {
    top: '1136px',
    left: '2569px',
  },
  {
    top: '1121px',
    left: '2449px',
  },
  {
    top: '369px',
    left: '776px',
  },
];

const level3XY = [
  {
    top: '345px',
    left: '412px',
  },
  {
    top: '371px',
    left: '481px',
  },
  {
    top: '403px',
    left: '741px',
  },
  {
    top: '475px',
    left: '534px',
  },
  {
    top: '587px',
    left: '875px',
  },
  {
    top: '762px',
    left: '1389px',
  },
  {
    top: '837px',
    left: '1568px',
  },
  {
    top: '883px',
    left: '1687px',
  },
  {
    top: '1054px',
    left: '2122px',
  },
  {
    top: '1123px',
    left: '2284px',
  },
  {
    top: '406px',
    left: '311px',
  },
];
</script>

<style>
._About-control {
  margin-top: 56px !important;
}
</style>
<style scoped>
.main {
  padding-top: 90px;
  padding-bottom: 90px;
  background: url('/images/3D/main-map.jpg') no-repeat;
  background-size: cover;
}

.eco-h1 {
  font-size: 65px;
  margin-bottom: 55px;
  @apply tw-uppercase tw-font-bold;
}

.svg {
  opacity: 0;
}

.svg:hover {
  opacity: 1;
}

.svg:hover .popup {
  display: block;
}

.popup {
  position: fixed;
  display: none;
}

.popup-lg {
  top: 1850px;
  left: 1500px;
}

.popup-md {
  top: 1950px;
  left: 1650px;
}

.popup1-md {
  top: 2100px;
  left: 1550px;
}

.popup1-lg {
  top: 1950px;
  left: 1500px;
}

.main-container {
  height: 1805px;
  overflow-x: hidden;
  max-width: 2800px;
}

.fullpage-wp {
  max-width: 2800px;
}

.main-container::-webkit-scrollbar {
  width: 4px;
  background-color: #fff;
}

.main-container::-webkit-scrollbar-thumb {
  background-color: #01f859;
}

.video {
  margin-bottom: 80px;
}
</style>
