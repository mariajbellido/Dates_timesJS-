const clock = document.querySelector('.clock');

const tickingOfTheClock = () => {

  const now = new Date(); 

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
  
  <span>${h}</span> :
  <span>${m}</span> :
  <span>${s}</span>
  `;

  clock.innerHTML = html;

};


setInterval(tickingOfTheClock, 1000);
// con setInterval llamaremos la función que entra como primer argumento.  Detrás de la coma es cada cuánto, en milisegundos.  
// En este ejemplo, llamará a tickingOfTheClock cada segundo. 
