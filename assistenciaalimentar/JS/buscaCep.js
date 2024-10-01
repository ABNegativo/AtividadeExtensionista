document.getElementById('cep').addEventListener('blur', function() {
  const cep = this.value.replace(/\D/g, '');

  if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then(response => response.json())
          .then(data => {
              if (!data.erro) {
                  const enderecoCompleto = document.getElementById('enderecoCompleto');
                  const bairro = document.getElementById('bairro');
                  const municipio = document.getElementById('municipio');
                  const UF = document.getElementById('UF');

                  enderecoCompleto.value = data.logradouro;
                  bairro.value = data.bairro;
                  municipio.value = data.localidade;
                  UF.value = data.uf;

                  highlightInput(enderecoCompleto);
                  highlightInput(bairro);
                  highlightInput(municipio);
                  highlightInput(UF);
              } else {
                  alert('CEP não encontrado.');
              }
          })
          .catch(error => {
              console.error('Erro ao buscar o CEP:', error);
              alert('Erro ao buscar o CEP. Tente novamente.');
          });
  } else {
      alert('CEP inválido.');
  }
});

function highlightInput(input) {
  input.classList.add('highlighted');
  // setTimeout(() => {
  //     input.classList.remove('highlighted');
  // }, 10000);
}
