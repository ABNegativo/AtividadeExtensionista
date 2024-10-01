const botaoProximo = document.getElementById ("btnProximo");
const botaoVoltar = document.getElementById ("btnVoltar");

// JS/mudarSecao.js

botaoProximo.addEventListener('click', botaoProximo => {

    // Esconde a seção de Cadastro de Aluguel Social
    document.getElementById('aluguelSocial').style.display = 'none';
  
    // Mostra a seção de Composição Familiar
    document.getElementById('composicaoFamiliar').style.display = 'block';

  })
  botaoVoltar.addEventListener('click', botaoVoltar => {
    // Esconde a seção de Cadastro de Aluguel Social
    document.getElementById('aluguelSocial').style.display = 'block';
  
    // Mostra a seção de Composição Familiar
    document.getElementById('composicaoFamiliar').style.display = 'none';
})

//   --------------------------------------------------------------------------

  