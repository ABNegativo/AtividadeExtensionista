// const botaoEnvio = document.getElementById("btnEnviar");
// const delay = Math.random() * (3000 - 1500) + 1500;

// const TrocaGifPredio = document.getElementById("gifPredio");
// const TrocaGifCarregamento = document.getElementById("gifCarregamento");
// const TrocaGifEnviado = document.getElementById("gifEnviado");

// botaoEnvio.addEventListener('click', botaoEnvio => {

//     console.log ("Qual o peso de todas as verdades?");
//     // TrocaGifPredio.style.display ="none";
//     TrocaGifEnviado.style.display ="none";
//     TrocaGifEnviado.style.display ="block";
//     TrocaGifCarregamento.style.display ="block";

//     const delay = Math.random() * (3000 - 1500) + 1500;
//     setTimeout(() => {
//         TrocaGifCarregamento.style.display ="none";
        
//     }, delay);

// })


//   -------------------Habilitar o botão quando tudo for preenchido no cadastro de aluguel social----------------------------


document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão pelo id
    const botaoProximo = document.getElementById("btnProximo");

    // Seleciona o checkbox pelo id
    const checkbox = document.getElementById("updatesComposicaoFamiliar");

    // Função para verificar se o checkbox está marcado e habilitar o botão
    function checkCheckbox() {
        botaoProximo.disabled = !checkbox.checked;
    }

    // Adiciona um evento de mudança ao checkbox
    checkbox.addEventListener("change", checkCheckbox);

    // Verifica o checkbox ao carregar a página (caso já esteja marcado)
    checkCheckbox();
});

//   -------------------Habilitar o botão quando tudo for preenchido no Composição Familiar----------------------------

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão "Enviar" pelo id
    const botaoEnviar = document.getElementById("btnEnviar");

    // Seleciona o checkbox pelo id
    const checkbox = document.getElementById("updates");

    // Função para verificar se o checkbox está marcado e habilitar o botão "Enviar"
    function checkCheckbox() {
        botaoEnviar.disabled = !checkbox.checked;
    }

    // Adiciona um evento de mudança ao checkbox
    checkbox.addEventListener("change", checkCheckbox);

    // Verifica o checkbox ao carregar a página (caso já esteja marcado)
    checkCheckbox();
});
