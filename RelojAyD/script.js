const deg = 6;

const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

setInterval(()=>{
    let tiempo = new Date();

    let hr = tiempo.getHours()*30;
    let min = tiempo.getMinutes()*deg;
    let seg = tiempo.getSeconds()*deg;

    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;

    let hora = tiempo.getHours()
    let minuto = tiempo.getMinutes()
    let segundo = tiempo.getSeconds()
    let ampm = hora >= 12 ? 'pm' : 'am';
    hora = hora - 12;
    hora = hora ? hora : 12;

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    let pantallaReloj = hora + ":" + minuto + ":" + segundo + "" + ampm;
    let relojdigital = document.querySelector("#relojdigital");
    relojdigital.innerHTML = pantallaReloj
    

})