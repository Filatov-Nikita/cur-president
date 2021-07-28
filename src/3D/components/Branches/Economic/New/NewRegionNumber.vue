<template>
  <div
    class="region size-sm"
    :style="{
      backgroundImage: 'url(' + require(`./icons/${region}.svg`) + ')',
      'background-size': bgSizes[region],
      width: width[region],
      height: height[region],
    }"
  >
    <div class="tw-flex container" :style="{ top: top[region] }">
      <NewNumber
        class="tw-self-start tw-mr-3"
        v-bind="{
          ...{
            dynamicSize: 'xs',
            size: 'xxs2',
          },
          ...number,
        }"
      />
      <p class="cap">{{ names[region] }}</p>
    </div>
  </div>
</template>

<script>
import NewNumber from 'src/3D/components/Branches/Economic/New/NewNumber';

export default {
  props: {
    region: {
      required: true,
      validator(value) {
        return ['rb', 'rf', 'pfo'].includes(value);
      },
    },
    number: {
      required: true,
      type: Object,
    },
  },
  created() {
    this.names = {
      rb: 'по РБ',
      rf: 'по РФ',
      pfo: 'по ПФО',
    };

    this.bgSizes = {
      pfo: '82px',
      rf: '156px',
    };

    this.width = {
      pfo: '138px',
      rf: '174px',
    };

    this.height = {
      pfo: '79px',
      rf: '92px',
    };

    this.top = {
      pfo: '28px',
      rf: '35px',
    };
  },
  components: {
    NewNumber,
  },
};
</script>

<style scoped>
.region {
  background-repeat: no-repeat;
  background-position: center;
}

.size-md {
  width: 349px;
  height: 290px;
}

.size-sm {
  width: 174px;
  height: 92px;
}

.cap {
  font-size: 18px;
  @apply tw-self-end;
}

.container {
  position: relative;
  left: -5px;
}
</style>
