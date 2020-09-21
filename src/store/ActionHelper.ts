//将本地数据转换成 itemData 类型的数据结构
import ItemData from '../model/ItemData';
import DataHelper from './DataHelper';
import Category from '@/model/CateEnum';
class ActionHelper{
    //1.负责数据处理
    datahelper:DataHelper = new DataHelper('memoData','id');

    //1.1 笔记数组
    memoList!:Array<ItemData>;

    //2.返回需要的数据结构
    constructor(){
        this.memoList = this.readData();
    }

    readData():Array<ItemData>{
        let arrObj:any = this.datahelper.readData();

        let arrItem = arrObj.map((ele:any)=>{
            let item = new ItemData();
            item.id = ele.id;
            item.categoryId = ele.categoryId;
            item.title = ele.title;
            item.createTime = ele.createTime;
            item.content = ele.content;
            return item;
        });

        return arrItem;
    }

    getCategoryName(category:Category):string{
        const arr=['工作','生活','学习'];
        return arr[category];
    }
    //业务逻辑方法
    
    //新增笔记
    add(item:ItemData):number{
        item.id = this.datahelper.addData(item);
        this.memoList.push(item);
        this.datahelper.saveData(this.memoList);
        return item.id;
    }

    //编辑笔记
    edit(item:ItemData):void{
        let editItem:ItemData|undefined = this.memoList.find((ele)=>{
            return ele.id === item.id;
        });
        
        if(editItem){
            editItem.categoryId = item.categoryId;
            editItem.title = item.title;
            editItem.content = item.content;

            this.datahelper.saveData(this.memoList);
        }
    }

    //删除笔记
    remove(id:number):void{
        let index:number = this.memoList.findIndex((ele)=>{
            return ele.id === id;
        });

        if(index>-1){
            this.memoList.splice(index,1);
            this.datahelper.saveData(this.memoList);
        }
    }

    //清空数据
    removeAll():void{
        this.memoList = [];
        this.datahelper.removeDataAll();
    }
}

export default ActionHelper;