const valor_digitado = document.querySelector('.valor');
const btn_1 = document.querySelector('.botao-resultado');
let resultado = document.querySelector('.resultado');


/*4 pedras_4, 6 pedras_5, 7 pedras_6 == pedra_10*/
btn_1.addEventListener('click', ()=>{
    let valor = valor_digitado.value;
    const pedras_4 = valor * 4;
    const pedras_5 = valor * 6;
    const pedras_6 = valor * 7;
    const pedras_7 = valor * 4;
    const pedras_8 = valor * 2;
    const pedras_9 = valor * 1;

    resultado.innerText =`
    Pérolas Nível_4 = ${pedras_4} Pérolas,
    Pérolas Nível_5 = ${pedras_5} Pérolas,
    Pérolas Nível_6 = ${pedras_6} Pérolas,

    Assim criando:

    ${pedras_7} Pérolas Nível_7, 
    ${pedras_8} Pérolas Nível_8,
    ${pedras_9} Pérolas Nível_9,

    ${valor} Pérola Oceânica `;
});
