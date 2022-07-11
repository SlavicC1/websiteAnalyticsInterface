<template>
  <h1 class="main-header"><span class="lead">Lead</span>Hit</h1>
  <AuthPageForm />
</template>

<script>
import {mapState} from 'vuex';
import AuthPageForm from './AuthPageForm.vue';

export default {
  name: 'AythPage',

  components: {
    AuthPageForm
  },

  beforeMount() {
    this.siteId ? this.$router.push('/analytics') : null;
  },

  computed: mapState({
    siteId: state => state.siteId, 
  }),
}
</script>

<style scoped>
  .main-header {
    text-align: center;
    margin-top: 200px;
    margin-bottom: 100px;
  }

  .lead {
    color: #FF4402;
  }
</style>
