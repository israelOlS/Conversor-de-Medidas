//declaração de var. para selecionar elementos

const elemento_entrada=document.querySelector("#input")//Valor dígitado pelo usuario
const elemento_from=document.querySelector("#from")//Medida inicial do valor digitado para a converção
const elemento_to=document.querySelector("#to")//Medida que será convertida, na qual o usuario queira converter
const elemento_saida=document.querySelector("#output")//Resultado da conveção
const convert_button=document.querySelector("#converter")//botão que inicirá a converção
const elemento_mensagem=document.querySelector("#mensagem")//Mensagem que vai aparecer após a converção


//Função para caso seja a mesma media, não aparecer a mensagem
function convert(){
    const mediada_inic =elemento_from.value;
    const medida_final = elemento_to.value;

    if(mediada_inic===medida_final){
        elemento_saida.value= elemento_entrada.value;
        elemento_mensagem.textContent="";
        return;
    }

    //unidade padrão será metro, assim a converção pode ser feita de forma mais simples
    // o switch vai pegar a medida original selecionada e transf em metro
    let metros
    switch(mediada_inic){
        case "m":
            metros = elemento_entrada.value
            break
        case "km":
            metros = elemento_entrada.value*1000
            break
        case "cm":
            metros = elemento_entrada.value/100
            break
        case "mm":
            metros = elemento_entrada.value/1000
            break
    }
// converter metros para outras medias desejadas
    let resultado;
    switch(medida_final){
        case "m":
            resultado = metros
            break
        case "km":
            resultado = metros/1000
            break
        case "cm":
            resultado = metros*100
            break
        case "mm":
            resultado = metros*1000
            break
    }
//mostrar resultados das converções na aba de resultado
    elemento_saida.value = resultado

// elemento para concatenar os valores iniciais e os convertidos na mensagem
    const mensagemDe = elemento_from.options[elemento_from.selectedIndex].text;
    const mensagemPara = elemento_to.options[elemento_to.selectedIndex].text;

//mensagem
    const mensagemtext=`${elemento_entrada.value} ${mensagemDe} convertido em ${mensagemPara} é igual ${resultado} ${mensagemPara}`;
    elemento_mensagem.textContent = mensagemtext;
return;

}
//botão funcional
convert_button.addEventListener("click",convert)

//elementos adicionados para estilização e melhoria visual do ususario 
const input_valido_entr = document.getElementById('input');//variavel para valor dig
const select_valido_entr = document.getElementById('from');//variavel para a medida orig
const select_valido_said = document.getElementById('to');//variavel para a medida final


//função para altera o cor do input de entr quando digitado conectando com elemento css
input_valido_entr.addEventListener('input', function() {
    if (this.value.trim() !== '') 
    { 
        this.classList.add('inputValidoEnt');
    } else {
        this.classList.remove('inputValidoEnt');
    }
});

// as funções abaixo tem o mesmo proposito de mudar a cor para a medida selecionada

//select da medida original 
select_valido_entr.addEventListener('change', function() {
    if (this.value.trim() !== '') 
    { 
        this.classList.add('myselect');
    } else {
        this.classList.remove('myselect');
    }
});

//select da medida final 
select_valido_said.addEventListener('change', function() {
    if (this.value.trim() !== '') 
    { 
        this.classList.add('myselect');
    } else {
        this.classList.remove('myselect');
    }
});