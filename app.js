const main = require('./main.js');
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

rl.setPrompt('<-----------请输入指定消息的ID,退出请按E-------------->\n');
rl.prompt();
rl.on('line',(line)=>{
    if(line === "E"){
        rl.close();
    }else{
        if(!isNaN(line)){
            main(Number(line));
        }else{
            console.log('请正确输入ID');
        }
    }
});

rl.on('close',function(){
    console.log('<---------------结束!--------------->');
    process.exit(0);
});