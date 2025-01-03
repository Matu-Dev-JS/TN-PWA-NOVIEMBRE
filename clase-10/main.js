const filesystem = require('fs') //Es un import pero antiguo (CommonJS)

//FS es el modulo nativo de nodejs para manipular el sistema de archivos

filesystem.writeFileSync('test.txt', 'hola mundo', {encoding: 'utf-8'})