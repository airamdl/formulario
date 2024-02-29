const formulario = document.getElementById('miFormulario');
const inputs = formulario.querySelectorAll('input, textarea');

inputs.forEach(input => {
  input.addEventListener('keyup', validarFormulario);
});

function validarFormulario(evento) {
  const input = evento.target;
  const valor = input.value.trim();
  const tipo = input.type;

  switch (tipo) {
    case 'text':
      validarTexto(input, valor);
      break;
    case 'email':
      validarEmail(input, valor);
      break;
    case 'textarea':
      validarMensaje(input, valor);
      break;
  }
}

function validarTexto(input, valor) {
  const regex = /^[a-zA-Z\s]+$/;
  if (regex.test(valor)) {
    marcarCorrecto(input);
  } else {
    marcarError(input);
  }
}

function validarEmail(input, valor) {
  const regex = /\S+@\S+\.\S+/;
  if (regex.test(valor)) {
    marcarCorrecto(input);
  } else {
    marcarError(input);
  }
}

function validarMensaje(input, valor) {
  if (valor.length > 0) {
    marcarCorrecto(input);
  } else {
    marcarError(input);
  }
}

function marcarCorrecto(input) {
  input.classList.remove('error');
  input.classList.add('correcto');
}

function marcarError(input) {
  input.classList.remove('correcto');
  input.classList.add('error');
}

function enviarFormulario(evento) {
  evento.preventDefault(); 
  
  const formularioValido = Array.from(inputs).every(input => input.classList.contains('correcto'));
  if (formularioValido) {
 
    alert('Formulario válido. ¡Se enviará ahora!');
    formulario.submit(); 
  } else {
    alert('Hay errores en el formulario. Por favor, corrígelos antes de enviar.');
  }
}

formulario.addEventListener('submit', enviarFormulario);
