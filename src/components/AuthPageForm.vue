<template>
  <form class="form" @submit="onSubmit">
    <label class="form-input-block">
      <div class="form-input-block-text">id сайта</div>
      <input 
        @input="onInput"
        type="text" 
        class="form-input" 
        v-model="siteId">
    </label>
    <button 
      type="submit" 
      class="form-submit">
        Войти
        <div :class="invalid ? 'form-error' : 'none'">
          id сайта должен содержать 24 символа
        </div>
        <div :class="notOk ? 'form-error' : 'none'">
          ответ сервера не ок
        </div>
    </button>
  </form>
</template>

<script>
import api from '@/api';
import {mapActions} from 'vuex';

export default {
  name: 'AythPageForm',

  data() {
    return {
      siteId:'',
      invalid: false,
      notOk: false,
    };
  },

  methods: {
    async onSubmit(e) {
      e.preventDefault();
      this.invalid = this.siteId.length != 24;
      if(!this.invalid && !this.notOk){
        if( await api.fetchIsAllOK(this.siteId)) {
          this.saveSiteId({siteId: this.siteId});
          this.$router.push('/analytics');
        } else {
          this.notOk = true;
        }
      }
    },

    onInput(e) {
      e.preventDefault();
      this.invalid = false;
      this.notOk = false;
    },
    
    ...mapActions(['saveSiteId'])
  }
}
</script>

<style scoped>
  .form {
    display: block;
    width: 400px;
    margin: auto;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.1);
  }

  .form-input-block {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .form-input-block-text {
    display: block;
    width: 80px;
  }

  .form-input {
    flex: 1;
    padding: 5px 10px;
    border-radius: 3px;
    border: 1px solid black;
    outline: none;
  }

  .form-submit {
    display: block;
    width: 100%;
    margin-top: 10px;
    height: 30px;
    border-radius: 3px;
    border: none;
    outline: none;
    position: relative;
    background: #FF4402;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
  }

  .form-submit:hover {
    background: #FF3302;
  }

  .form-submit:active {
    background: #FF4402;
  }

  .form-error {
    text-align: center;
    width: 100%;
    font-size: 10px;
    display: block;
    color: red;
    position: absolute;
    bottom: -15px;
    text-transform: none;
  }

  .none {
    display: none;
  }

</style>
