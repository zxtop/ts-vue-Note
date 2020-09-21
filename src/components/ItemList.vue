<template>
    <div id="memos" class="container">
        <MemoItem v-for="(item,index) in filiterMermoList()" :key="index" :memo="item">
            {{item.title}}
        </MemoItem>
    </div>
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator';
import ItemData from '../model/ItemData';
import MemoItem from './MemoItem.vue';
@Component({
    components: {
        MemoItem
    }
})
export default class ItemList extends Vue{
    memoArr:Array<ItemData> = (this as any).$store.state.aHelper.memoList;
    constructor(){
        super();
        console.log(this.memoArr.length);
    }

    filiterMermoList(){
        if(this['$store'].state.filterIndex == -1){
            return this.memoArr;
        }else{
            return this['$store'].state.aHelper.memoList.filter((ele:any)=>{
                return ele.categoryId == this['$store'].state.filterIndex
            })
        }
    }
}
</script>