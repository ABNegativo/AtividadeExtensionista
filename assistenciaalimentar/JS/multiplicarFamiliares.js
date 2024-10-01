document.getElementById("familiaresSelect").addEventListener("change", function() {
  const numFamiliares = parseInt(this.value);
  const familiaresContainer = document.getElementById("familiaresContainer");
  const membroDeficienteDiv = document.getElementById("membroDeficiente");

  // ------------------ID Familiares-----------------------

  let secaoFamiliar = [
      "secaoFamiliarID1",
      "secaoFamiliarID2",
      "secaoFamiliarID3",
      "secaoFamiliarID4",
      "secaoFamiliarID5",
      "secaoFamiliarID6",
      "secaoFamiliarID7",
      "secaoFamiliarID8",
      "secaoFamiliarID9",
      "secaoFamiliarID10",
  ];

  // Oculta todas as seções primeiro
  secaoFamiliar.forEach(id => {
      let secao = document.getElementById(id);
      if (secao) {
          secao.style.display = "none";
      }
  });

  // Exibe as seções correspondentes ao número de familiares selecionado
  for (let i = 0; i < numFamiliares; i++) {
      let secao = document.getElementById(secaoFamiliar[i]);
      if (secao) {
          secao.style.display = "block";
          configurarInputsNaSecao(secao); // Configura os inputs na seção
      } else {
          console.log(`Seção não encontrada: ${secaoFamiliar[i]}`);
      }
  }

  // Mostra ou oculta a div 'membroDeficiente' com base no número de familiares
  membroDeficienteDiv.style.display = numFamiliares > 0 ? "block" : "none";
});

function applyDateMask(input) {
  let value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  if (value.length > 8) {
      value = value.substring(0, 8); // Limita a entrada a 8 caracteres
  }
  if (value.length > 4) {
      value = value.replace(/(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
  } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d+)/, '$1/$2');
  }
  input.value = value;
}

function setInputMaxLength(input, maxLength) {
  input.addEventListener('input', function() {
      if (input.value.length > maxLength) {
          input.value = input.value.substring(0, maxLength);
      }
  });
}

const inputsConfig = [
  { id: 'cpf', maxLength: 11 },
  { id: 'rg', maxLength: 11 },
  { id: 'celular', maxLength: 11 },
  { id: 'contatoRecado', maxLength: 11 },
  { id: 'cpfFamiliar1', maxLength: 11 },
  { id: 'cpfFamiliar2', maxLength: 11 },
  { id: 'cpfFamiliar3', maxLength: 11 },
  { id: 'cpfFamiliar4', maxLength: 11 },
  { id: 'cpfFamiliar5', maxLength: 11 },
  { id: 'cpfFamiliar6', maxLength: 11 },
  { id: 'cpfFamiliar7', maxLength: 11 },
  { id: 'cpfFamiliar8', maxLength: 11 },
  { id: 'cpfFamiliar9', maxLength: 11 },
  { id: 'cpfFamiliar10', maxLength: 11 },
  { id: 'tituloEleitoral', maxLength: 12 },
  { id: 'cep', maxLength: 8 },
  { id: 'dataNascimento', maxLength: 10, isDate: true },
  { id: 'dataEmissaoTitulo', maxLength: 10, isDate: true },
  { id: 'dnascimentoFamiliar1', maxLength: 10, isDate: true },
  { id: 'dnascimentoFamiliar2', maxLength: 10, isDate: true },
  { id: 'dnascimentoFamiliar3', maxLength: 10, isDate: true },
  { id: 'dnascimentoFamiliar4', maxLength: 10, isDate: true },
  { id: 'dnascimentoFamiliar5', maxLength: 10, isDate: true },
  { id: 'dnascimentoFamiliar6', maxLength: 10, isDate: true },
  { id: 'dnascimentoFamiliar7', maxLength: 10, isDate: true },
  { id: 'dnascimentoFamiliar8', maxLength: 10, isDate: true },
  { id: 'dnascimentoFamiliar9', maxLength: 10, isDate: true },
  { id: 'dnascimentoFamiliar10', maxLength: 10, isDate: true }
];

function configurarInputsNaSecao(secao) {
  const inputs = secao.querySelectorAll('input');
  inputs.forEach(input => {
      const config = inputsConfig.find(cfg => cfg.id === input.id);
      if (config) {
          setInputMaxLength(input, config.maxLength);
          if (config.isDate) {
              input.addEventListener('input', function() {
                  applyDateMask(input);
              });
              console.log(`Máscara de data aplicada ao input: ${input.id}`);
          }
      }
  });
}

window.onload = function() {
  inputsConfig.forEach(config => {
      const input = document.getElementById(config.id);
      if (input) {
          setInputMaxLength(input, config.maxLength);
          if (config.isDate) {
              input.addEventListener('input', function() {
                  applyDateMask(input);
              });
              console.log(`Máscara de data aplicada ao input: ${input.id}`);
          }
      }
  });
};
