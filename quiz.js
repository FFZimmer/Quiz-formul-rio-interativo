document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o comportamento padrão de enviar o formulário

  // Captura das respostas
  const answer1 = document.getElementById('q1').value;
  const answer2 = Array.from(document.querySelectorAll('input[name=q2]:checked')).map(input => input.value);
  const answer3 = document.querySelector('input[name=q3]:checked');

  // Validação das respostas
  if (answer1.trim() === '') {
    alert('Por favor, responda a pergunta 1.');
    return;
  }

  if (answer2.length === 0) {
    alert('Por favor, responda a pergunta 2.');
    return;
  }

  if (!answer3) {
    alert('Por favor, responda a pergunta 3.');
    return;
  }

  // Processamento das respostas e exibição do resultado
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = `
    <h2>Resultado:</h2>
    <p>Pergunta 1: Sua resposta - ${answer1}</p>
    <p>Pergunta 2: Suas respostas - ${answer2.join(', ')}</p>
    <p>Pergunta 3: Sua resposta - ${answer3.value}</p>
  `;
});
