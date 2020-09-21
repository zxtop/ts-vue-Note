class DataHelper{

    dataKey:string;
    primaryKey:string;
    
    //let dh=new DataHelper('plData','id')
    constructor(dataKey:string,primaryKey:string){
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }

    //读取本地数据 返回数组
    readData():any{
        //1.读取本地数据 根据datakey
        let strData:string|null=localStorage.getItem(this.dataKey);

        //2.转成数组对象返回
        let arr:any=[];
        if(strData!==null){
            arr = JSON.parse(strData);
        }
        //3.返回数组对象
        return arr;
    }

    //存入本地数据
    saveData(arrData:Array<Object>):void{
        //1.将数组对象转变成字符串
        let str:string=JSON.stringify(arrData);

        //2.存入localstorage中
        localStorage.setItem(this.dataKey,str);
    }
    

    //新增数据
    addData(conStr:any):number{
        let arr :any= this.readData();
        let obj:any={
            content:conStr
        };
        let newIndex = arr.length>0?arr[arr.length-1][this.primaryKey]+1:1;
        obj[this.primaryKey] = newIndex;

        arr.push(obj);
        this.saveData(arr);
        return newIndex;
    }

    //删除数据
    removeDataId(id:number|string):boolean{
        let arr = this.readData();
        let index = arr.findIndex((ele:any)=>{
            return ele[this.primaryKey] == id;
        });
        if(index>-1){
            arr.splice(index,1);
            this.saveData(arr);
            return true;
        }
        return false;
    }

    //清空数据
    removeDataAll():void{
        localStorage.clear();
    }
}
export default DataHelper;