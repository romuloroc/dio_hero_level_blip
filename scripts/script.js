// VARIÁVEIS - Array com múltiplos heróis (nome e XP)
let herois = [
  { nome: "Thor", xp: 500 },
  { nome: "Merlin", xp: 1500 },
  { nome: "Athena", xp: 3500 },
  { nome: "Hércules", xp: 6000 },
  { nome: "Zeus", xp: 7800 },
  { nome: "Odin", xp: 8500 },
  { nome: "Loki", xp: 9500 },
  { nome: "Freya", xp: 12000 },
  { nome: "Ares", xp: 800 },
  { nome: "Poseidon", xp: 4200 }
];

function classificarHerois() {
  // VARIÁVEIS
  let corpoTabela = document.getElementById('corpoTabela');
  let tabelaContainer = document.getElementById('tabelaContainer');
  let totalHerois = document.getElementById('totalHerois');

  // Limpar tabela
  corpoTabela.innerHTML = '';

  // LAÇO DE REPETIÇÃO - for para percorrer todos os heróis
  for (let i = 0; i < herois.length; i++) {
    // VARIÁVEIS
    let nomeHeroi = herois[i].nome;
    let xpHeroi = herois[i].xp;
    let nivel = "";
    let classeNivel = "";

    // ESTRUTURAS DE DECISÃO - if/else if/else para classificar o nível
    // OPERADORES - comparação (<, >=, <=, &&)
    if (xpHeroi < 1000) {
      nivel = "Ferro";
      classeNivel = "nivel-ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
      nivel = "Bronze";
      classeNivel = "nivel-bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
      nivel = "Prata";
      classeNivel = "nivel-prata";
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
      nivel = "Ouro";
      classeNivel = "nivel-ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
      nivel = "Platina";
      classeNivel = "nivel-platina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
      nivel = "Ascendente";
      classeNivel = "nivel-ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
      nivel = "Imortal";
      classeNivel = "nivel-imortal";
    } else {
      nivel = "Radiante";
      classeNivel = "nivel-radiante";
    }

    // OPERADORES - concatenação (+) e aritméticos
    let numeroLinha = i + 1;

    // Criar linha da tabela
    let linha = document.createElement('tr');
    linha.innerHTML = '<td>' + numeroLinha + '</td>' +
      '<td><strong>' + nomeHeroi + '</strong></td>' +
      '<td><span class="xp-valor">' + xpHeroi + '</span> XP</td>' +
      '<td><span class="nivel ' + classeNivel + '">' + nivel + '</span></td>';

    corpoTabela.appendChild(linha);

    // Exibir mensagem no console
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);
  }

  // Atualizar total de heróis
  totalHerois.textContent = herois.length;

  // Exibir tabela
  tabelaContainer.classList.add('show');
}