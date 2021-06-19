<template>
  <svg height="500" width="500" viewBox="0 0 500 500" class="donut-chart">
    <g v-for="(value, index) in sortedValues">
      <circle
        :cx="cx"
        :cy="cy"
        :r="radius"
        :stroke="colors[index]"
        :stroke-width="strokeWidth"
        :stroke-dasharray="adjustedCircumference"
        :stroke-dashoffset="calculateStrokeDashOffset(value, circumference)"
        fill="transparent"
        :transform="returnCircleTransformValue(index)"
      />

      <text
        v-if="middle !== undefined"
        class="text"
        text-anchor="middle"
        dy="3px"
        :x="250"
        :y="260"
      >
        {{middle}}
      </text>
      <text
        v-if="caption !== undefined"
        class="caption"
        text-anchor="middle"
        dy="3px"
        :x="250"
        :y="280"
      >
        {{caption}}
      </text>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    values: {
      default: () => [230, 308, 520, 120, 150, 5, 4, 10],
    },
    middle: {
      default: undefined,
      type: String,
    },
    caption: {
      default: undefined,
      type: String,
    },
  },
  data() {
    return {
      angleOffset: -90,
      chartData: [],
      colors: [
        '#0FDF49',
        '#07C18A',
        '#0F6FDF',
        '#0395FF',
        '#DF410F',
        '#DFD70F',
        '#00952A',
        '#AA007A',
        '#F85992',
        '#009B76',
      ],
      cx: 250,
      cy: 250,
      radius: 160,
      sortedValues: [],
      strokeWidth: 130,
    };
  },
  computed: {
    // adjust the circumference to add small white gaps
    adjustedCircumference() {
      return this.circumference;
    },
    circumference() {
      return 2 * Math.PI * this.radius;
    },
    dataTotal() {
      return this.sortedValues.reduce((acc, val) => acc + val);
    },
    calculateChartData() {
      this.sortedValues.forEach((dataVal, index) => {
        const { x, y } = this.calculateTextCoords(dataVal, this.angleOffset);
        // start at -90deg so that the largest segment is perpendicular to top
        const data = {
          degrees: this.angleOffset,
          textX: x,
          textY: y,
        };
        this.chartData.push(data);
        this.angleOffset =
          this.dataPercentage(dataVal) * 360 + this.angleOffset;
      });
    },
    sortvalues() {
      return (this.sortedValues = this.values.sort((a, b) => b - a));
    },
  },
  methods: {
    calculateStrokeDashOffset(dataVal, circumference) {
      const strokeDiff = this.dataPercentage(dataVal) * circumference;
      return circumference - strokeDiff;
    },
    calculateTextCoords(dataVal, angleOffset) {
      // t must be radians
      // x(t) = r cos(t) + j
      // y(t) = r sin(t) + j

      const angle = (this.dataPercentage(dataVal) * 360) / 2 + angleOffset;
      const radians = this.degreesToRadians(angle);

      const textCoords = {
        x: this.radius * Math.cos(radians) + this.cx,
        y: this.radius * Math.sin(radians) + this.cy,
      };
      return textCoords;
    },
    degreesToRadians(angle) {
      return angle * (Math.PI / 180);
    },
    dataPercentage(dataVal) {
      return dataVal / this.dataTotal;
    },
    percentageString(dataVal) {
      return `${Math.round(this.dataPercentage(dataVal) * 100)}%`;
    },
    returnCircleTransformValue(index) {
      return `rotate(${this.chartData[index].degrees}, ${this.cx}, ${this.cy})`;
    },
    segmentBigEnough(dataVal) {
      return Math.round(this.dataPercentage(dataVal) * 100) > 5;
    },
  },
  mounted() {
    this.sortvalues;
    this.calculateChartData;
  },
};
</script>

<style scoped>
.text {
  font-size: 50px;
  fill: #fff;
  letter-spacing: -1.5px;
  @apply tw-font-bold tw-font-op-sans;
}

.caption {
  font-size: 20px;
  fill: #fff;
  @apply tw-font-op-sans;
}
</style>
