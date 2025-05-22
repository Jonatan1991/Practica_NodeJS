const os = require('node: os')

console.log('Información del sitema:')
console.log('-----------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log('Arquitectira', os.arch())
console.log('Versión del sistema operativo', os.release())
console.log('CPUs', os.cpus())
console.log('Memoria Libre', os.freemem() / 1024)
console.log('Memoria total', os.totalmem() / 1024)