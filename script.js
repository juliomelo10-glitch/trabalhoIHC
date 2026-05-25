const db = {
    lg: [
        { nome: "Fallen", foto: "img/fallen.png", time: "LUMINOSITY", hs: 55, kd: 1.2, stats: [90, 85, 95, 70, 80] },
        { nome: "Coldzera", foto: "img/coldzera.png", time: "LUMINOSITY", hs: 50, kd: 1.3, stats: [95, 90, 80, 85, 90] },
        { nome: "fnx", foto: "img/fnx.png", time: "LUMINOSITY", hs: 48, kd: 1.1, stats: [80, 75, 85, 90, 70] }
    ],
    furia: [
        { nome: "Yuurih", foto: "img/yuurih.png", time: "FURIA", hs: 60, kd: 1.15, stats: [88, 92, 70, 80, 85] },
        { nome: "Art", foto: "img/art.png", time: "FURIA", hs: 45, kd: 0.95, stats: [70, 95, 60, 90, 95] }
    ]
};

let radarChart = null;

function selecionarTime(timeId) {
    const grid = document.getElementById('players-grid');
    const jogadores = db[timeId];

    if (!jogadores) return;

    grid.innerHTML = ""; // Limpa o grid

    jogadores.forEach(p => {
        grid.innerHTML += `
            <article class="player-card" onclick="abrirModal('${p.nome}', [${p.stats}])">
                <img src="${p.foto}" alt="${p.nome}" class="player-photo">
                <div class="player-info">
                    <h3>${p.nome}</h3>
                    <span class="team-tag">${p.time}</span>
                    <div class="stats-mini">
                        <p>K/D: ${p.kd}</p>
                        <div class="stat-bar"><div class="progress" style="width: ${p.kd * 50}%;"></div></div>
                        <p>HS%: ${p.hs}%</p>
                        <div class="stat-bar"><div class="progress" style="width: ${p.hs}%;"></div></div>
                    </div>
                </div>
            </article>
        `;
    });
}

function abrirModal(nome, stats) {
    document.getElementById('playerModal').style.display = "block";
    document.getElementById('modalPlayerName').innerText = nome.toUpperCase();

    const ctx = document.getElementById('radarChart').getContext('2d');
    
    if (radarChart) radarChart.destroy();

    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Mira', 'Posicionamento', 'Clutch', 'Utilidade', 'Agressividade'],
            datasets: [{
                label: 'Performance Pro',
                data: stats,
                backgroundColor: 'rgba(255, 70, 85, 0.2)',
                borderColor: '#ff4655',
                pointBackgroundColor: '#ff4655'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: '#333' },
                    grid: { color: '#333' },
                    pointLabels: { color: '#fff', font: { family: 'Oswald' } },
                    ticks: { display: false },
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function fecharModal() {
    document.getElementById('playerModal').style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('playerModal');
    if (event.target == modal) fecharModal();
}