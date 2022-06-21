<template>
  <h1 class="page-header">Аналитика</h1>
  <AnalyticsPageVisitsChart />
</template>

<script>
import {mapState} from 'vuex';
import AnalyticsPageVisitsChart from './AnalyticsPageVisitsChart.vue';

export default {
  name: 'AnalyticsPage',

  components: {
    AnalyticsPageVisitsChart
  },

  beforeMount() {
    this.siteId ? null : this.$router.push('/');
  },

  computed: mapState({
    siteId: state => state.siteId, 
  }),
}
</script>

<style scoped>
.page-header{
  text-align: center;
  width:100%;
  padding-top: 50px;
  padding-bottom: 10px;
  margin-bottom: 50px;
  box-shadow: 0 0 5px 5px rgba(0,0,0,0.1);
}
</style>
