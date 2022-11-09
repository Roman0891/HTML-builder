
const fs = require('fs'); //импортируем/подключаем модуль для работы с файлами копьютера
const path = require('path'); // импортируем/подключаем модуль для работы с путями файлам и каталогами
const file = path.join(__dirname, 'text.txt'); //file - путь к нему. ( ____dirname -путь к текущей папки)
const stream = new fs.createReadStream(file, {encoding: 'utf8'}); //создаем поток ReadStream. кодирование utf8 (чтоб видеть строку)

stream.on('readable', () => {
    let data = stream.read();
    if (data !== null) console.log (data);
})

// const fs = require('fs');
// const path = require('path');
// const fileWay = path.join(__dirname, 'text.txt');
// fs.readFile(fileWay, 'utf8',(err, data)=>{
//     console.log(data);
// });

