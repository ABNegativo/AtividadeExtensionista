// // Função para aplicar a máscara de data
// function applyDateMask(input) {
//     let value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
//     if (value.length > 8) {
//         value = value.substring(0, 8); // Limita a entrada a 8 caracteres
//     }
//     if (value.length > 4) {
//         value = value.replace(/(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
//     } else if (value.length > 2) {
//         value = value.replace(/(\d{2})(\d+)/, '$1/$2');
//     }
//     input.value = value;
// }

// // Função para definir o comprimento máximo do input
// function setInputMaxLength(input, maxLength) {
//     input.addEventListener('input', function() {
//         if (input.value.length > maxLength) {
//             input.value = input.value.substring(0, maxLength);
//         }
//     });
// }

// const inputsConfig = [
//     { id: 'cpf', maxLength: 11 },
//     { id: 'rg', maxLength: 11 },
//     { id: 'celular', maxLength: 11 },
//     { id: 'contatoRecado', maxLength: 11 },
//     { id: 'cpfFamiliar1', maxLength: 11 },
//     { id: 'cpfFamiliar2', maxLength: 11 },
//     { id: 'cpfFamiliar3', maxLength: 11 },
//     { id: 'cpfFamiliar4', maxLength: 11 },
//     { id: 'cpfFamiliar5', maxLength: 11 },
//     { id: 'cpfFamiliar6', maxLength: 11 },
//     { id: 'cpfFamiliar7', maxLength: 11 },
//     { id: 'cpfFamiliar8', maxLength: 11 },
//     { id: 'cpfFamiliar9', maxLength: 11 },
//     { id: 'cpfFamiliar10', maxLength: 11 },
//     { id: 'tituloEleitoral', maxLength: 12 },
//     { id: 'cep', maxLength: 8 },
//     { id: 'dataNascimento', maxLength: 10, isDate: true },
//     { id: 'dataEmissaoTitulo', maxLength: 10, isDate: true },
//     { id: 'dnascimentoFamiliar1', maxLength: 10, isDate: true },
//     { id: 'dnascimentoFamiliar2', maxLength: 10, isDate: true },
//     { id: 'dnascimentoFamiliar3', maxLength: 10, isDate: true },
//     { id: 'dnascimentoFamiliar4', maxLength: 10, isDate: true },
//     { id: 'dnascimentoFamiliar5', maxLength: 10, isDate: true },
//     { id: 'dnascimentoFamiliar6', maxLength: 10, isDate: true },
//     { id: 'dnascimentoFamiliar7', maxLength: 10, isDate: true },
//     { id: 'dnascimentoFamiliar8', maxLength: 10, isDate: true },
//     { id: 'dnascimentoFamiliar9', maxLength: 10, isDate: true },
//     { id: 'dnascimentoFamiliar10', maxLength: 10, isDate: true }
// ];

// function configurarInput(input) {
//     const config = inputsConfig.find(cfg => cfg.id === input.id);
//     if (config) {
//         setInputMaxLength(input, config.maxLength);
//         if (config.isDate) {
//             input.addEventListener('input', function() {
//                 applyDateMask(input);
//             });
//         }
//     }
// }

// function observeInputs() {
//     const observer = new MutationObserver(mutations => {
//         mutations.forEach(mutation => {
//             if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
//                 const target = mutation.target;
//                 if (target.style.display !== 'none') {
//                     configurarInput(target);
//                 }
//             }
//         });
//     });

//     const familiarInputs = document.querySelectorAll('.familiar-input');
//     familiarInputs.forEach(input => {
//         observer.observe(input, { attributes: true });
//     });
// }

// window.onload = function() {
//     inputsConfig.forEach(config => {
//         const input = document.getElementById(config.id);
//         if (input) {
//             configurarInput(input);
//         }
//     });
//     observeInputs();
// };
