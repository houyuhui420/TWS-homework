const fs = require('fs');
const fun = require('./function.js');
const data = fs.readFileSync('./Signal.txt');
const stringData = data.toString();
const arrayData = stringData.split('\r\n');  //换行实则应该叫做回车换行(\r\n)
const idNum = arrayData.length;

let startData = [];
for(let i of arrayData){
    startData.push(i.split(' '));
}

let normalData = [];
for(let i = 0;i < startData.length;i++){
    if(startData.indexOf(startData[i]) === 0 && fun.testId(startData[i][0]) && fun.testNum(startData[i]) && startData[i].length === 4){
        normalData.push(startData[i]);
    }else if(fun.testId(startData[i][0]) && fun.testNum(startData[i]) && startData[i].length === 7 && normalData[i-1] != 'NA'){
        if(fun.testCoord(startData[i-1],startData[i])){
            normalData.push(startData[i]);
        }else{
            normalData.push('NA');
        }
    }else{
        normalData.push('NA');
    }
}

const main = function(id){
    if(id > idNum-1){
        console.log('Cannot find ' + id);
    }else if(normalData[id] === 'NA'){
       console.log('Error: ' + id)
    }else{
        let obj = fun.count(normalData[id]);
        console.log(normalData[id][0] + ' ' + id + ' ' + obj.a3 + ' ' + obj.b3 + ' ' + obj.c3);
    }
};

// const test1 = function(normalData){
//     for(let i = 0;i <normalData.length;i++){
//         if(normalData.indexOf('NA') === i){
//             console.log(i);
//         }
//     }
// };
//
// //test1(normalData);
//
//
//
// console.log(normalData)

module.exports = main;



