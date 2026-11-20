const fases = {
  "diagnostico": {
    "rotulo": "Momento 1",
    "titulo": "Ouvir líderes e equipes",
    "texto": "Líderes e colaboradores relatam como o trabalho acontece. O diagnóstico identifica fatores de risco e áreas que merecem atenção.",
    "resultado": "Relatório do diagnóstico."
  },
  "devolutiva": {
    "rotulo": "Momento 2",
    "titulo": "Discutir os achados",
    "texto": "A PATRYX apresenta o relatório e o orçamento do plano. Liderança e RH conversam sobre os achados e decidem quais prioridades levar adiante.",
    "resultado": "Prioridades para o plano."
  },
  "plano": {
    "rotulo": "Momento 3",
    "titulo": "Escolher as ações do ciclo",
    "texto": "Liderança e RH escolhem a duração do plano, as ações e os públicos. Em cada ação, Pensar, Sentir e Agir são trabalhados em conjunto.",
    "resultado": "Cronograma na plataforma."
  },
  "acoes": {
    "rotulo": "Momento 4",
    "titulo": "Trabalhar os três eixos juntos",
    "texto": "Em cada encontro, as pessoas refletem sobre uma situação, expressam como a vivem e combinam o que fazer na rotina. Ao final de cada ação, os participantes registram sua avaliação de satisfação por QR code.",
    "resultado": "Combinados para aplicar no trabalho."
  },
  "remedicao": {
    "rotulo": "Momento 5",
    "titulo": "Comparar os dois momentos",
    "texto": "Ao fim do ciclo, a PATRYX reaplica o diagnóstico NR-1. RH e liderança comparam os resultados e discutem o que manter ou ajustar.",
    "resultado": "Leitura da evolução e novas prioridades."
  }
};
const botoes = Array.from(document.querySelectorAll('.step'));
const detalhe = document.getElementById('fase-detalhe');
const retorno = document.querySelector('.return');
const fluxoVertical = window.matchMedia('(max-width: 760px)');

function posicionarDetalhe() {
  if (fluxoVertical.matches) {
    const selecionado = botoes.find(botao => botao.getAttribute('aria-pressed') === 'true');
    selecionado.parentElement.append(detalhe);
  } else {
    retorno.after(detalhe);
  }
}
fluxoVertical.addEventListener('change', posicionarDetalhe);
posicionarDetalhe();
function selecionar(botao) {
  const fase = fases[botao.dataset.phase];
  botoes.forEach(item => item.setAttribute('aria-pressed', String(item === botao)));
  for (const campo of ['rotulo', 'titulo', 'texto', 'resultado']) {
    document.getElementById('fase-' + campo).textContent = fase[campo];
  }
  posicionarDetalhe();
}
botoes.forEach(botao => botao.addEventListener('click', () => selecionar(botao)));
document.getElementById('retorno').addEventListener('click', () => {
  selecionar(botoes[0]);
  botoes[0].focus();
});
