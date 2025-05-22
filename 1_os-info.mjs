import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('Información del sitema:')
console.log('-----------------------')

console.log('Nombre del sistema operativo', platform())
console.log('Versión del sistema operativo', release())
console.log('Arquitectira', arch())
console.log('Versión del sistema operativo', release())
console.log('CPUs', cpus())
console.log('Memoria Libre', freemem() / 1024 / 1024)
console.log('Memoria total', totalmem() / 1024 / 1024)
console.log('uptime', uptime() / 60 / 60)