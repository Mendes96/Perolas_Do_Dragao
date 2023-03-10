const valor_digitado = document.querySelector('.valor');
const btn_1 = document.querySelector('.botao-resultado');
let resultado = document.querySelector('.resultado');
const box1 = document.querySelector('.perolas-456');
const box2 = document.querySelector('.perolas-789');
const box3 = document.querySelector('.perola-10');


//PEROLA LV7 :   910 000
//PEROLA LV8 : 1.050 000
//PEROLA LV9 : 1.190 000
//PEROLA LV10: 1.330 000
const res_din = document.querySelector('.dinheiro')




/*4 pedras_4, 6 pedras_5, 7 pedras_6 == pedra_10*/
btn_1.addEventListener('click', ()=>{
    let valor = valor_digitado.value;
    const pedras_4 = valor * 4;
    const pedras_5 = valor * 6;
    const pedras_6 = valor * 7;
    const pedras_7 = valor * 4;
    const pedras_8 = valor * 2;
    const pedras_9 = valor * 1;

    let dinheiro = valor * 8260000;

    box1.innerText =`
    Pérolas Nível_4 = ${pedras_4} Pérolas,
    Pérolas Nível_5 = ${pedras_5} Pérolas,
    Pérolas Nível_6 = ${pedras_6} Pérolas,`;

    box2.innerText = `Assim criando: 
    ${pedras_7} Pérolas Nível_7, 
    ${pedras_8} Pérolas Nível_8,
    ${pedras_9} Pérolas Nível_9,`;

    box3.innerText = `${valor} Pérola Oceânica `;

    res_din.innerText = `KK's: ${dinheiro.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}`;
});



