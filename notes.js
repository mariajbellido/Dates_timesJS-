// Fechas y horas en JS *** 


const now = new Date(); 

console.log(now);
// 2021-02-18T11:18:42.064Z

console.log(typeof now);
// Object 

// Métodos de Date() ****

now.getFullYear(); 

console.log('año: ' + now.getFullYear()); 
//2021

now.getMonth; 
console.log('mes: ' + now.getMonth());
// 1 = Febrero 
// índice cero, lo que significa que Enero es 0 y febrero es 1, marzo 2 y así sucesivamente. 

now.getDate(); 
console.log('día: ' + now.getDate());
// 18 (integer)

now.getDay(); 
console.log('día semana: ' + now.getDay());
// 4 
// índice cero y empezando por Sunday
// Sunday 0, Monday 1, Tuesday 2, Wednesday 3, Thursday 4, Friday 5, Saturday 6

now.getSeconds(); 
console.log('segundos: ' + now.getSeconds());
// los segundos en ese momento, se actualiza con cada F5 

// TIMESTAMPS *** 
// Pueden ser de utilidad para comparar unas fechas con otras. 

now.getTime();
console.log('timestamp: ' + now.getTime());
// 1613647612076 (por ejemplo)

now.toDateString(); 
console.log('string fecha: ' + now.toDateString()); 
// Thu Feb 18 2021

now.toTimeString(); 
console.log('string hora: ' + now.toTimeString());
// 12:30:03 GMT+0100 (hora estándar de Europa central)

now.toLocaleString(); 
console.log('string fecha y hora ' + now.toLocaleString()); 
// 18/2/2021 12:31:59

// Otras variantes de este último: 

now.toLocaleDateString; //solo fecha  
now.toLocaleTimeString; //solo hora 


// COMPARACIÓN CON TIMESTAMP 

const before = new Date('February 1 2021 7:30:59');
const now = new Date(); 


// Si no le pasamos algo a la variable before se generaría la hora actual tanto en now como en before. 

// Formatos 

// 'February 1 2021 7:30:59'


console.log(now.getTime(), before.getTime()); 

// 1613648230452 1612161059000 
// (Resultado en consola entre "ahora", en el momento de ejecutar el código y el "antes" que hemos mencionado en la variable before)

const diff = now.getTime() - before.getTime(); 
console.log(diff); 
// 1487857413 (por ejemplo); 

const mins = Math.round(diff / 1000 / 60);
console.log(mins);

// 24799 (por ejemplo); 

// Para convertir en minutos.  La diferencia la dividimos por 1000 milisegundos en cada segundo y a su vez, tendríamos que dividir por 60 segundos en cada minuto.  Ya obtendríamos los minutos. 

// Calculando y convirtiendo las diferencias podríamos mencionar en una web cuánto tiempo hace de algo (de una entrada de blog, pej)

const hours = Math.round(mins / 60);
console.log(hours);
//413 (por ejemplo, de nuevo)

const days = Math.round(hours / 24);
console.log(days);
// 17

console.log(mins, hours, days);
// 24804 413 17 (los segundos variarán dependiendo de cuando se ejecute el código)

console.log(`El post fue escrito hace ${days} días`)
// El post fue escrito hace 17 días


// Coonvertir timestamps en date objects (objetos fecha)

const timestamp = 1675938474990;
// Esto sería simplemente un número y no podríamos aplicar métodos directamente, habría que convertirlo. 

console.log(new Date(timestamp))
// 2023-02-09T10:27:54.990Z

// Podríamos almacenar esta conversión en una variable para ya trabajar con los métodos. 

