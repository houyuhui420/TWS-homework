module.exports = {
    //检测Id
    testId:function(str){
        const re = /^[A-z]+[0-9]+$/g;
        return re.test(str);
    },
    //检测数字
    testNum:function(array) {
        for (let i = 1; i < array.length; i++) {
            if (isNaN(array[i]) === true) {
                return false;
            }else{
                return true;
            }
        }
    },
    //检测坐标
    testCoord:function(signal1,signal2){  //signal1表示为上一条消息，signal2表示当前消息
        if(signal1.length === 4){
            let a2 = Number(signal2[1]);
            let b2 = Number(signal2[2]);
            let c2 = Number(signal2[3]);
            let a1 = Number(signal1[1]);
            let b1 = Number(signal1[2]);
            let c1 = Number(signal1[3]);
            return a1 === a2 && b1 === b2 && c1 === c2 ? true:false;
        }else{
            let a2 = Number(signal2[1]);
            let b2 = Number(signal2[2]);
            let c2 = Number(signal2[3]);
            let a1 = Number(signal1[1]);
            let b1 = Number(signal1[2]);
            let c1 = Number(signal1[3]);
            let e1 = Number(signal1[4]);
            let f1 = Number(signal1[5]);
            let g1 = Number(signal1[6]);
            return a2 === a1 + e1 && b2 === b1 +f1 && c2 === c1 + g1 ? true:false;
        }
    },
    //计算坐标
    count:function(array){
        let obj = {};
        if(array.length === 4){
            obj.a3 = array[1];
            obj.b3 = array[2];
            obj.c3 = array[3];
            return obj;
        }else {
            let a1 = Number(array[1]);
            let b1 = Number(array[2]);
            let c1 = Number(array[3]);
            let a2 = Number(array[4]);
            let b2 = Number(array[5]);
            let c2 = Number(array[6]);
            obj.a3 = a1 + a2;
            obj.b3 = b1 + b2;
            obj.c3 = c1 + c2;
            return obj;
        }

    }

    // //test2
    // case2:function (array) {
    //     let index = array.indexOf('NA');
    //     let newArray = [];
    //     for(let i = 0;i<index;i++){
    //         if(array[i].length === )
    //     }


};