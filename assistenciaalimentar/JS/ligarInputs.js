document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll("input, select");
  const btnProximo = document.getElementById("btnProximo");
  const requiredIds = [
      "nome", "cpf", "rg", "estadoCivil", "sexo", "tituloEleitoral",
      "dataEmissaoTitulo", "municipioEmissao", "tempoResidencia", "cep",
      "numero", "celular", "contatoRecado", "cadUnico", "deficiencia",
      "profissao", "rendaFamiliar", "updatesComposicaoFamiliar"
  ];

  function checkInputs() {
      let allFilled = true;
      requiredIds.forEach(id => {
          const input = document.getElementById(id);
          if (input && !input.value) {
              allFilled = false;
          }
      });
      btnProximo.disabled = !allFilled;
  }

  inputs.forEach(input => {
      input.addEventListener("input", function() {
          this.style.borderColor = "#1D4796";
          this.style.backgroundColor = "#cce5ff";
          checkInputs();
      });

      input.addEventListener("change", function() {
          this.style.borderColor = "#1D4796";
          this.style.backgroundColor = "#cce5ff";
          checkInputs();
      });
  });

  // Inicializa o estado do botão
  checkInputs();
});
