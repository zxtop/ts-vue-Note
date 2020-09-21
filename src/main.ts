import Vue from 'vue'
import App from './App.vue'

import store from './store'
import ActionHelper from './store/ActionHelper';
import ItemData from './model/ItemData';

import CateEnum from './model/CateEnum';

// let ad = new ActionHelper();
// ad.removeAll();
// console.log(ad.memoList,"dddd");

//测试新增加
// let newItem1 = new ItemData(-1,CateEnum.Study,'什么狗屁喜欢','滚。。。。');
// newItem1.id = ad.add(newItem1);
// console.log(newItem1,ad.memoList,"dddd")


//测试修改
// let newItem = new ItemData(1,CateEnum.Life,'什么狗屁喜欢','滚。。。。');
// ad.edit(newItem);
// console.log(ad.memoList);

//测试删除
// ad.remove(1);
// console.log(ad.memoList);


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store:store
}).$mount('#app')
