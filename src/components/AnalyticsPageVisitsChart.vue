<template>
  <h2 class="title">Аналитика по визитам</h2>
  <div class="chart" ref="chartdiv"></div>
</template>

<script>
const chartDataExample = [
  {"date":"2020-07-01","visits":213},
  {"date":"2020-07-02","visits":249},
  {"date":"2020-07-03","visits":179},
  {"date":"2020-07-04","visits":170},
  {"date":"2020-07-05","visits":184},
  {"date":"2020-07-06","visits":202},
  {"date":"2020-07-07","visits":198},
  {"date":"2020-07-08","visits":168},
  {"date":"2020-07-09","visits":176},
  {"date":"2020-07-10","visits":171},
  {"date":"2020-07-11","visits":190},
  {"date":"2020-07-12","visits":154},
  {"date":"2020-07-13","visits":246},
  {"date":"2020-07-14","visits":250},
  {"date":"2020-07-15","visits":227},
  {"date":"2020-07-16","visits":140},
  {"date":"2020-07-17","visits":170},
  {"date":"2020-07-18","visits":125},
  {"date":"2020-07-19","visits":106},
  {"date":"2020-07-20","visits":207},
  {"date":"2020-07-21","visits":222},
  {"date":"2020-07-22","visits":198},
  {"date":"2020-07-23","visits":204},
  {"date":"2020-07-24","visits":213},
  {"date":"2020-07-25","visits":145},
  {"date":"2020-07-26","visits":166},
  {"date":"2020-07-27","visits":163},
  {"date":"2020-07-28","visits":135},
  {"date":"2020-07-29","visits":45}
];

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4lang_ru_RU from "@amcharts/amcharts4/lang/ru_RU";

am4core.useTheme(am4themes_animated);

export default {
  name: 'AnalyticsPageVisitsChart',

  data() {
    return {
      chartData: chartDataExample.map((el) => ({
        date: new Date(el.date).getTime(),
        value: el.visits,
      }))
    };
  },

  mounted() {
    const color = am4core.color('#FF4402');
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

    chart.language.locale = am4lang_ru_RU;
    chart.data = this.chartData;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.minLabelPosition = 0.01;
    dateAxis.renderer.maxLabelPosition = 0.9;
    dateAxis.dateFormatter.dateFormat = "dd-mm";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.min = 0;
    valueAxis.extraMax = 0.2; 
    valueAxis.renderer.minGridDistance = 50;

    let range = dateAxis.axisRanges.create();
    range.value = chart.data[0].date;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    series.fillOpacity = 0.3;
    series.stroke = color;
    series.fill = color;

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    chart.scrollbarX = null;

    let bullet = series.bullets.push(new am4charts.Bullet());
    let circle = bullet.createChild(am4core.Circle);
    circle.radius = 5;

    this.chart = chart;
  },

  beforeUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
</script>

<style scoped>
  .chart {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    height: 700px;
  }

  .title {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
