// BANCO DE DADOS GLOBAL ADAPTADO PARA REQUISITOS ACADÊMICOS
const bancoDados = {
    cs: {
        nomeJogo: "Counter-Strike",
        labels: ['MIRA', 'POSICIONAMENTO', 'CLUTCH', 'UTILITÁRIOS', 'AGRESSIVIDADE'],
        statsLabels: { stat1: "K/D Ratio", stat2: "HS%" },
        times: {
            lg: [
                { 
                    nome: "Fallen", role: "AWPer / IGL", stat1: "1.20", stat2: "45%", stats: [95, 98, 92, 85, 75], 
                    foto: "https://prosettings.net/wp-content/uploads/fallen.png",
                    timeline: [
                        { ano: "2015", evento: "Entrada na Luminosity Gaming e consolidação internacional." },
                        { ano: "2016", evento: "Campeão do MLG Major Columbus e ESL One Cologne (MVP de liderança)." },
                        { ano: "2017", evento: "Eleito um dos melhores IGLs do mundo pela HLTV pela SK Gaming." }
                    ]
                },
                { 
                    nome: "Coldzera", role: "Rifler / Lurker", stat1: "1.35", stat2: "52%", stats: [99, 94, 96, 80, 70], 
                    foto: "https://prosettings.net/wp-content/uploads/coldzera.png",
                    timeline: [
                        { ano: "2016", evento: "Bicampeão de Major e eleito o Melhor Jogador do Mundo (Rank 1 HLTV)." },
                        { ano: "2017", evento: "Mantém a coroa: Eleito pela segunda vez consecutiva o número 1 do mundo." },
                        { ano: "2019", evento: "Transferência histórica para a equipe europeia da FaZe Clan." }
                    ]
                }
            ],
            furia: [
                { 
                    nome: "Kscerato", role: "Rifler", stat1: "1.22", stat2: "49%", stats: [95, 92, 94, 85, 75], 
                    foto: "https://prosettings.net/wp-content/uploads/kscerato.png",
                    timeline: [
                        { ano: "2019", evento: "Vice-campeão da ECS Season 7 Finals estreando no cenário global." },
                        { ano: "2022", evento: "Semifinalista do IEM Rio Major com apoio massivo da torcida brasileira." },
                        { ano: "2023", evento: "Eleito repetidamente no Top 20 mundial da HLTV." }
                    ]
                }
            ]
        }
    },
    valorant: {
        nomeJogo: "Valorant",
        labels: ['MECÂNICA', 'MINIMAPA/NOÇÃO', 'RETAKE/CLUTCH', 'USO DE HABILIDADES', 'FIRST BLOOD'],
        statsLabels: { stat1: "K/D", stat2: "ACS (Combate)" },
        times: {
            loud: [
                { 
                    nome: "Aspas", role: "Duelista", stat1: "1.30", stat2: "265", stats: [98, 88, 90, 70, 97], 
                    foto: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7699d9136151f66c/62df6972e3a1f9104062432e/aspas.png",
                    timeline: [
                        { ano: "2022", evento: "Campeão do Valorant Champions em Istambul pela LOUD." },
                        { ano: "2023", evento: "Finalista do VCT LOCK//IN em São Paulo e MVP do VCT Americas." },
                        { ano: "2024", evento: "Contratação global de elite pela equipe da Leviatán." }
                    ]
                },
                { 
                    nome: "Saadhak", role: "IGL / Iniciador", stat1: "1.08", stat2: "210", stats: [88, 98, 92, 95, 78], 
                    foto: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9978a3c87498c471/62df697274f88e10469b6f84/saadhak.png",
                    timeline: [
                        { ano: "2021", evento: "Consolidação regional na Team Vikings ao lado de Sacy." },
                        { ano: "2022", evento: "Ergue a taça de campeão mundial liderando taticamente a LOUD." },
                        { ano: "2023", evento: "Top 3 no Champions Los Angeles, provando a resiliência da capitania." }
                    ]
                }
            ]
        }
    },
    lol: {
        nomeJogo: "League of Legends",
        labels: ['FARM/MINUTO', 'VISÃO DE MAPA', 'TEAMFIGHT', 'CONTROLE DE WAVE', 'AGRESSIVIDADE'],
        statsLabels: { stat1: "KDA Médio", stat2: "CS/Min" },
        times: {
            t1: [
                { 
                    nome: "Faker", role: "Mid Laner", stat1: "4.8", stat2: "9.2", stats: [92, 99, 98, 95, 85], 
                    foto: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c9/T1_Faker_2024_Split_1.png",
                    timeline: [
                        { ano: "2013", evento: "Estreia avassaladora e primeiro título do Worlds com o icônico outplay de Zed." },
                        { ano: "2015-16", evento: "Bicampeonato consecutivo dominando a era de ouro da SKT T1." },
                        { ano: "2023", evento: "Retorno do Rei: Conquista o tetracampeonato mundial em solo coreano." }
                    ]
                }
            ],
            pain: [
                { 
                    nome: "brTT", role: "ADC", stat1: "4.2", stat2: "8.9", stats: [95, 85, 95, 88, 98], 
                    foto: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a6/PNG_brTT_2021_Split_2.png",
                    timeline: [
                        { ano: "2014", evento: "Primeiro título do CBLOL com a Keyd Stars mudando o paradigma nacional." },
                        { ano: "2015", evento: "Campeão do CBLOL pela paiN e campanha histórica no Worlds na Europa." },
                        { ano: "2021", evento: "Conquista o hexacampeonato nacional antes de anunciar pausa na carreira." }
                    ]
                }
            ]
        }
    }
};

let meuGrafico = null; 

// CARREGAR JOGADORES NA TELA (MÓDULO JOGADORES)
function carregarTime(timeId) {
    const grid = document.getElementById('players-grid');
    const titulo = document.getElementById('time-selecionado');
    if (!grid) return; 

    grid.innerHTML = "";
    let jogadores = [];
    let jogoChave = "";

    for (let jogo in bancoDados) {
        if (bancoDados[jogo].times[timeId]) {
            jogadores = bancoDados[jogo].times[timeId];
            jogoChave = jogo;
            break;
        }
    }

    titulo.innerHTML = `TIME: <span>${timeId.toUpperCase()}</span>`;

    jogadores.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.onclick = () => abrirModal(player, jogoChave);
        card.innerHTML = `
            <img src="${player.foto}" alt="${player.nome}" onerror="this.src='https://via.placeholder.com/200x250/222/fff?text=${player.nome}'">
            <div class="player-info">
                <h3>${player.nome}</h3>
                <p>${player.role}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// MODAL MULTIFUNCIONAL COM ABAS: GRÁFICO E HISTÓRICO/TIMELINE
function abrirModal(player, jogoChave) {
    const modal = document.getElementById('playerModal');
    const configJogo = bancoDados[jogoChave];

    document.getElementById('modalPlayerName').innerText = player.nome;
    document.getElementById('modalPlayerRole').innerText = player.role;
    document.getElementById('lblStat1').innerText = configJogo.statsLabels.stat1 + ":";
    document.getElementById('lblStat2').innerText = configJogo.statsLabels.stat2 + ":";
    document.getElementById('modalKD').innerText = player.stat1;
    document.getElementById('modalHS').innerText = player.stat2;

    // GERAR O GERADOR DE HISTÓRICO / TIMELINE COMPACTO
    const timelineContainer = document.getElementById('timeline-box');
    timelineContainer.innerHTML = "";
    if (player.timeline && player.timeline.length > 0) {
        player.timeline.forEach(item => {
            timelineContainer.innerHTML += `
                <div class="timeline-item" style="margin-bottom:12px; padding-left:10px; border-left:2px solid #ff4655;">
                    <strong style="color:#ff4655; font-family:'Oswald';">${item.ano}</strong> - <span style="font-size:13px; color:#ddd;">${item.evento}</span>
                </div>
            `;
        });
    } else {
        timelineContainer.innerHTML = "<p style='color:#666; font-size:12px;'>Nenhum histórico mapeado para este jogador.</p>";
    }

    modal.style.display = "flex";
    const ctx = document.getElementById('radarChart').getContext('2d');
    if (meuGrafico) meuGrafico.destroy();

    meuGrafico = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: configJogo.labels,
            datasets: [{
                label: 'Performance',
                data: player.stats,
                backgroundColor: 'rgba(255, 70, 85, 0.2)',
                borderColor: '#ff4655',
                borderWidth: 2,
                pointBackgroundColor: '#fff'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: '#333' },
                    grid: { color: '#333' },
                    pointLabels: { color: '#fff', font: { size: 10, family: 'Oswald' } },
                    ticks: { display: false },
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

function fecharModal() {
    document.getElementById('playerModal').style.display = "none";
}