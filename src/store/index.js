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
            localStorage.setItem('leadhit-site-id', siteId);
        }
    },
    
    actions: {
        async saveSiteId(state, {siteId}) {
            state.commit('setSiteId',{siteId});
        }
    }
});