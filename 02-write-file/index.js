const fs = require('fs');
const path = require('path');
// const fileWay = path.join(__dirname, 'text02.txt')

fs.writeFile('02-write-file/text02.txt', ' не пойму нахера пригодиться', (err)=>{ // создаю фай. параметры. путь/название, что написано в файле/ функция
    if(err) console.log(err);
});
