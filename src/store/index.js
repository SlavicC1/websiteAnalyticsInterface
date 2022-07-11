import {createStore} from 'vuex';

export default createStore({
    state() {
        return {
            siteId: localStorage.getItem('leadhit-site-id'),
        };
    },

    mutations: {
        setSiteId(state, {siteId}){
            state.siteId = siteId;
        }
    },
    
    actions: {
        saveSiteId(state, {siteId}) {
            localStorage.setItem('leadhit-site-id', siteId);
            state.commit('setSiteId',{siteId});
        }
    }
});