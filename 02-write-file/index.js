const fs = require('fs');
const path = require('path'); 
const readline = require('readline'); //подключаем модульб, который позволяет построчно читать входной поток. Ввод и чтение вывода, предоставленного пользователем.

const rl = readline.createInterface({ //создаем консольный интерфейс  ( в него передаем 2 параметра - поток ввод и вывода)
    
    input: process.stdin,//поток ввода
    output: process.stdout,//поток вывода (process) -предопределенная переменная. так созхадли интерфейс.

})

const fileWay = path.join(__dirname, 'text.txt'); // путь к файду
const fileText = fs.createWriteStream(fileWay);//создаем поток WriteStream.

readline.emitKeypressEvents(process.stdin);

process.stdin.on('keypress', (ch, key) => {  //выход и остановка записи
    if(key && key.ctrl && key.name === 'c'){
        console.log('Всего доброго. Запись остановлена!')
    }
})

function write(){

    rl.question('Здравствуйте. Напишите текст:', text => {
        console.log(text);
        if(text.toLocaleLowerCase()=== "exit"){
            console.log('Всего доброго. Запись остановлена!');
            rl.close();
            return;
        }
        fileText.write(text, err =>{
            if(err) {
                console.log(err.message);
            }
            else{write()}
        } )
    })
}
write();

