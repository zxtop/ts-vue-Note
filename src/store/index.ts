import Vue from 'vue';
import Vuex from 'vuex';
import ActionHelper from './ActionHelper';

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        title:'没有感情的机器',
        aHelper:new ActionHelper(),
        isShow:false,
        transMemo:null, //传递数据的中间桥梁
        filterIndex:-1
    },
    mutations:{
        initNewMemo(state:any,newMemo:any){
            state.transMemo = newMemo;
            state.isShow = true;
        },
        showEditdemo(state:any,editMemo:any){
            state.transMemo = editMemo;
            state.isShow = true;
        }
    }
})

export default store;