const fases = {
  diagnostico: {
    rotulo: 'Fase 0',
    titulo: 'Entender o ponto de partida',
    texto: 'O diagnóstico de NR-1 mapeia riscos psicossociais e examina como o trabalho é organizado. Essa leitura ajuda o RH a definir as primeiras prioridades.',
    resultado: 'Prioridades para o plano de ação.'
  },
  pensar: {
    rotulo: 'Ato I · Clareza',
    titulo: 'Dar clareza às decisões',
    texto: 'A liderança interpreta o diagnóstico, identifica padrões na equipe e define quais situações merecem atenção primeiro.',
    resultado: 'Direção compartilhada e foco para a atuação.'
  },
  sentir: {
    rotulo: 'Ato II · Presença',
    titulo: 'Escutar o que acontece na equipe',
    texto: 'A liderança observa como escuta, reage e conduz conversas difíceis. Essa leitura ajuda a entender como as relações afetam o trabalho.',
    resultado: 'Situações concretas para desenvolver escuta e presença.'
  },
  agir: {
    rotulo: 'Ato III · Potência',
    titulo: 'Executar o que foi combinado',
    texto: 'As prioridades se tornam ações, com responsáveis e momentos de acompanhamento. A equipe tem clareza sobre o que precisa acontecer.',
    resultado: 'Plano em execução, com responsabilidades registradas.'
  },
  monitorar: {
    rotulo: 'Monitoramento contínuo',
    titulo: 'Medir, comparar e ajustar',
    texto: 'O RH compara indicadores, revisa a execução e identifica o que precisa mudar. A nova medição orienta as prioridades do próximo ciclo.',
    resultado: 'Evolução registrada e ajustes para o próximo ciclo.'
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
