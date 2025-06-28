// Dados reais da Copa do Mundo de Clubes FIFA 2025

// Times organizados por grupo
const times = {
    'Grupo A': [
        { nome: 'Palmeiras', pais: 'Brasil', grupo: 'A', escudo: '🟢' },
        { nome: 'Inter Miami', pais: 'EUA', grupo: 'A', escudo: '🟣' },
        { nome: 'Porto', pais: 'Portugal', grupo: 'A', escudo: '🔵' },
        { nome: 'Al Ahly', pais: 'Egito', grupo: 'A', escudo: '🔴' }
    ],
    'Grupo B': [
        { nome: 'PSG', pais: 'França', grupo: 'B', escudo: '🔵🔴' },
        { nome: 'Botafogo', pais: 'Brasil', grupo: 'B', escudo: '⚫' },
        { nome: 'Atlético Madrid', pais: 'Espanha', grupo: 'B', escudo: '🔴⚪' },
        { nome: 'Seattle Sounders', pais: 'EUA', grupo: 'B', escudo: '🟢' }
    ],
    'Grupo C': [
        { nome: 'Benfica', pais: 'Portugal', grupo: 'C', escudo: '🦅' },
        { nome: 'Bayern', pais: 'Alemanha', grupo: 'C', escudo: '🔴' },
        { nome: 'Boca Juniors', pais: 'Argentina', grupo: 'C', escudo: '💙💛' },
        { nome: 'Auckland City', pais: 'Nova Zelândia', grupo: 'C', escudo: '🔵' }
    ],
    'Grupo D': [
        { nome: 'Flamengo', pais: 'Brasil', grupo: 'D', escudo: '🔴⚫' },
        { nome: 'Chelsea', pais: 'Inglaterra', grupo: 'D', escudo: '🔵' },
        { nome: 'Espérance', pais: 'Tunísia', grupo: 'D', escudo: '🟡🔴' },
        { nome: 'LAFC', pais: 'EUA', grupo: 'D', escudo: '⚫🟡' }
    ],
    'Grupo E': [
        { nome: 'Inter', pais: 'Itália', grupo: 'E', escudo: '🔵⚫' },
        { nome: 'Monterrey', pais: 'México', grupo: 'E', escudo: '🔵⚪' },
        { nome: 'River Plate', pais: 'Argentina', grupo: 'E', escudo: '🔴⚪' },
        { nome: 'Urawa Reds', pais: 'Japão', grupo: 'E', escudo: '🔴' }
    ],
    'Grupo F': [
        { nome: 'Borussia', pais: 'Alemanha', grupo: 'F', escudo: '🟡⚫' },
        { nome: 'Fluminense', pais: 'Brasil', grupo: 'F', escudo: '🟢⚪🔴' },
        { nome: 'Sundowns', pais: 'África do Sul', grupo: 'F', escudo: '🟡' },
        { nome: 'Ulsan Hyundai', pais: 'Coreia do Sul', grupo: 'F', escudo: '🔵' }
    ],
    'Grupo G': [
        { nome: 'Manchester City', pais: 'Inglaterra', grupo: 'G', escudo: '🔵' },
        { nome: 'Juventus', pais: 'Itália', grupo: 'G', escudo: '⚫⚪' },
        { nome: 'Al Ain', pais: 'Emirados Árabes', grupo: 'G', escudo: '🟣' },
        { nome: 'Wydad AC', pais: 'Marrocos', grupo: 'G', escudo: '🔴' }
    ],
    'Grupo H': [
        { nome: 'Real Madrid', pais: 'Espanha', grupo: 'H', escudo: '⚪' },
        { nome: 'Al-Hilal', pais: 'Arábia Saudita', grupo: 'H', escudo: '🔵⚪' },
        { nome: 'RB Salzburg', pais: 'Áustria', grupo: 'H', escudo: '🔴⚪' },
        { nome: 'Pachuca', pais: 'México', grupo: 'H', escudo: '🟡' }
    ]
};

// Classificação real por grupo
const classificacao = {
    'Grupo A': [
        { time: 'Palmeiras', pts: 5, pj: 3, vit: 1, emp: 2, der: 0, gm: 4, gc: 2, sg: 2, ultimos: ['E', 'V', 'E'] },
        { time: 'Inter Miami', pts: 5, pj: 3, vit: 1, emp: 2, der: 0, gm: 4, gc: 2, sg: 2, ultimos: ['E', 'V', 'E'] },
        { time: 'Porto', pts: 3, pj: 3, vit: 0, emp: 3, der: 0, gm: 4, gc: 4, sg: 0, ultimos: ['E', 'E', 'E'] },
        { time: 'Al Ahly', pts: 2, pj: 3, vit: 0, emp: 2, der: 1, gm: 2, gc: 4, sg: -2, ultimos: ['E', 'D', 'E'] }
    ],
    'Grupo B': [
        { time: 'PSG', pts: 6, pj: 3, vit: 2, emp: 0, der: 1, gm: 6, gc: 3, sg: 3, ultimos: ['D', 'D', 'V'] },
        { time: 'Botafogo', pts: 6, pj: 3, vit: 2, emp: 0, der: 1, gm: 4, gc: 2, sg: 2, ultimos: ['V', 'V', 'V'] },
        { time: 'Atlético Madrid', pts: 6, pj: 3, vit: 2, emp: 0, der: 1, gm: 4, gc: 1, sg: 3, ultimos: ['V', 'V', 'D'] },
        { time: 'Seattle Sounders', pts: 0, pj: 3, vit: 0, emp: 0, der: 3, gm: 3, gc: 8, sg: -5, ultimos: ['D', 'D', 'D'] }
    ],
    'Grupo C': [
        { time: 'Benfica', pts: 7, pj: 3, vit: 2, emp: 1, der: 0, gm: 7, gc: 2, sg: 5, ultimos: ['E', 'V', 'D'] },
        { time: 'Bayern', pts: 6, pj: 3, vit: 2, emp: 0, der: 1, gm: 13, gc: 1, sg: 12, ultimos: ['V', 'V', 'V'] },
        { time: 'Boca Juniors', pts: 2, pj: 3, vit: 0, emp: 2, der: 1, gm: 3, gc: 5, sg: -2, ultimos: ['E', 'E', 'E'] },
        { time: 'Auckland City', pts: 1, pj: 3, vit: 0, emp: 1, der: 2, gm: 1, gc: 15, sg: -14, ultimos: ['D', 'D', 'E'] }
    ],
    'Grupo D': [
        { time: 'Flamengo', pts: 7, pj: 3, vit: 2, emp: 1, der: 0, gm: 7, gc: 4, sg: 3, ultimos: ['E', 'D', 'V'] },
        { time: 'Chelsea', pts: 6, pj: 3, vit: 1, emp: 3, der: 0, gm: 4, gc: 3, sg: 1, ultimos: ['E', 'V', 'E'] },
        { time: 'Espérance', pts: 3, pj: 3, vit: 1, emp: 0, der: 2, gm: 2, gc: 3, sg: -1, ultimos: ['E', 'V', 'D'] },
        { time: 'LAFC', pts: 1, pj: 3, vit: 0, emp: 1, der: 2, gm: 3, gc: 6, sg: -3, ultimos: ['E', 'D', 'D'] }
    ],
    'Grupo E': [
        { time: 'Inter', pts: 7, pj: 3, vit: 2, emp: 1, der: 0, gm: 4, gc: 2, sg: 2, ultimos: ['E', 'V', 'E'] },
        { time: 'Monterrey', pts: 5, pj: 3, vit: 1, emp: 2, der: 0, gm: 3, gc: 3, sg: 0, ultimos: ['E', 'E', 'E'] },
        { time: 'River Plate', pts: 3, pj: 3, vit: 0, emp: 3, der: 0, gm: 5, gc: 5, sg: 0, ultimos: ['V', 'E', 'E'] },
        { time: 'Urawa Reds', pts: 0, pj: 3, vit: 0, emp: 0, der: 3, gm: 3, gc: 7, sg: -4, ultimos: ['D', 'D', 'D'] }
    ],
    'Grupo F': [
        { time: 'Borussia', pts: 7, pj: 3, vit: 2, emp: 1, der: 0, gm: 7, gc: 2, sg: 5, ultimos: ['V', 'V', 'V'] },
        { time: 'Fluminense', pts: 5, pj: 3, vit: 1, emp: 2, der: 0, gm: 6, gc: 4, sg: 2, ultimos: ['D', 'V', 'E'] },
        { time: 'Sundowns', pts: 4, pj: 3, vit: 1, emp: 1, der: 1, gm: 4, gc: 5, sg: -1, ultimos: ['V', 'D', 'E'] },
        { time: 'Ulsan Hyundai', pts: 0, pj: 3, vit: 0, emp: 0, der: 3, gm: 1, gc: 6, sg: -5, ultimos: ['D', 'D', 'D'] }
    ],
    'Grupo G': [
        { time: 'Manchester City', pts: 9, pj: 3, vit: 3, emp: 0, der: 0, gm: 8, gc: 1, sg: 7, ultimos: ['V', 'V', 'V'] },
        { time: 'Juventus', pts: 6, pj: 3, vit: 2, emp: 0, der: 1, gm: 10, gc: 3, sg: 7, ultimos: ['V', 'V', 'V'] },
        { time: 'Al Ain', pts: 3, pj: 3, vit: 1, emp: 0, der: 2, gm: 2, gc: 11, sg: -9, ultimos: ['D', 'D', 'V'] },
        { time: 'Wydad AC', pts: 0, pj: 3, vit: 0, emp: 0, der: 3, gm: 1, gc: 7, sg: -6, ultimos: ['D', 'D', 'D'] }
    ],
    'Grupo H': [
        { time: 'Real Madrid', pts: 7, pj: 3, vit: 2, emp: 1, der: 0, gm: 7, gc: 4, sg: 3, ultimos: ['E', 'E', 'V'] },
        { time: 'Al-Hilal', pts: 6, pj: 3, vit: 1, emp: 3, der: 0, gm: 6, gc: 4, sg: 2, ultimos: ['E', 'E', 'V'] },
        { time: 'RB Salzburg', pts: 3, pj: 3, vit: 1, emp: 0, der: 2, gm: 2, gc: 5, sg: -3, ultimos: ['V', 'E', 'D'] },
        { time: 'Pachuca', pts: 1, pj: 3, vit: 0, emp: 1, der: 2, gm: 4, gc: 6, sg: -2, ultimos: ['D', 'E', 'D'] }
    ]
};

// Calendário real com jogos por rodada
const calendario = {
    'Rodada 1': [
        { data: 'Sáb. 14/06', time1: 'Al Ahly', time2: 'Inter Miami', placar1: 0, placar2: 0, grupo: 'A' },
        { data: 'Dom. 15/06', time1: 'Bayern', time2: 'Auckland City', placar1: 10, placar2: 0, grupo: 'C' },
        { data: 'Dom. 15/06', time1: 'PSG', time2: 'Atlético Madrid', placar1: 0, placar2: 0, grupo: 'B' },
        { data: 'Dom. 15/06', time1: 'Palmeiras', time2: 'Porto', placar1: 0, placar2: 0, grupo: 'A' },
        { data: 'Dom. 15/06', time1: 'Botafogo', time2: 'Seattle Sounders', placar1: 2, placar2: 1, grupo: 'B' },
        { data: 'Dom. 15/06', time1: 'Chelsea', time2: 'LAFC', placar1: 2, placar2: 1, grupo: 'D' },
        { data: 'Seg. 16/06', time1: 'Boca Juniors', time2: 'Benfica', placar1: 2, placar2: 2, grupo: 'C' },
        { data: 'Seg. 16/06', time1: 'Flamengo', time2: 'Espérance', placar1: 2, placar2: 2, grupo: 'D' },
        { data: 'Ter. 17/06', time1: 'Fluminense', time2: 'Borussia', placar1: 0, placar2: 0, grupo: 'F' },
        { data: 'Ter. 17/06', time1: 'River Plate', time2: 'Urawa Reds', placar1: 3, placar2: 1, grupo: 'E' },
        { data: 'Ter. 17/06', time1: 'Ulsan Hyundai', time2: 'Sundowns', placar1: 1, placar2: 1, grupo: 'F' },
        { data: 'Ter. 17/06', time1: 'Monterrey', time2: 'Inter', placar1: 1, placar2: 1, grupo: 'E' },
        { data: 'Qua. 18/06', time1: 'Manchester City', time2: 'Wydad AC', placar1: 2, placar2: 0, grupo: 'G' },
        { data: 'Qua. 18/06', time1: 'Real Madrid', time2: 'Al-Hilal', placar1: 3, placar2: 1, grupo: 'H' },
        { data: 'Qua. 18/06', time1: 'Pachuca', time2: 'RB Salzburg', placar1: 1, placar2: 1, grupo: 'H' },
        { data: 'Qua. 18/06', time1: 'Al Ain', time2: 'Juventus', placar1: 5, placar2: 2, grupo: 'G' }
    ],
    'Rodada 2': [
        { data: 'Qui. 19/06', time1: 'Palmeiras', time2: 'Al Ahly', placar1: 2, placar2: 0, grupo: 'A' },
        { data: 'Qui. 19/06', time1: 'Inter Miami', time2: 'Porto', placar1: 2, placar2: 1, grupo: 'A' },
        { data: 'Qui. 19/06', time1: 'Seattle Sounders', time2: 'Atlético Madrid', placar1: 1, placar2: 0, grupo: 'B' },
        { data: 'Qui. 19/06', time1: 'PSG', time2: 'Botafogo', placar1: 0, placar2: 0, grupo: 'B' },
        { data: 'Sex. 20/06', time1: 'Benfica', time2: 'Auckland City', placar1: 4, placar2: 0, grupo: 'C' },
        { data: 'Sex. 20/06', time1: 'Flamengo', time2: 'Chelsea', placar1: 0, placar2: 1, grupo: 'D' },
        { data: 'Sex. 20/06', time1: 'LAFC', time2: 'Espérance', placar1: 0, placar2: 1, grupo: 'D' },
        { data: 'Sex. 20/06', time1: 'Bayern', time2: 'Boca Juniors', placar1: 2, placar2: 1, grupo: 'C' },
        { data: 'Sáb. 21/06', time1: 'Sundowns', time2: 'Borussia', placar1: 3, placar2: 4, grupo: 'F' },
        { data: 'Sáb. 21/06', time1: 'Inter', time2: 'Urawa Reds', placar1: 2, placar2: 0, grupo: 'E' },
        { data: 'Sáb. 21/06', time1: 'Fluminense', time2: 'Ulsan Hyundai', placar1: 4, placar2: 2, grupo: 'F' },
        { data: 'Sáb. 21/06', time1: 'River Plate', time2: 'Monterrey', placar1: 0, placar2: 1, grupo: 'E' },
        { data: 'Dom. 22/06', time1: 'Juventus', time2: 'Wydad AC', placar1: 4, placar2: 1, grupo: 'G' },
        { data: 'Dom. 22/06', time1: 'Real Madrid', time2: 'Pachuca', placar1: 3, placar2: 1, grupo: 'H' },
        { data: 'Dom. 22/06', time1: 'RB Salzburg', time2: 'Al-Hilal', placar1: 0, placar2: 0, grupo: 'H' },
        { data: 'Dom. 22/06', time1: 'Manchester City', time2: 'Al Ain', placar1: 6, placar2: 0, grupo: 'G' }
    ],
    'Rodada 3': [
        { data: 'Seg. 23/06', time1: 'Seattle Sounders', time2: 'PSG', placar1: 2, placar2: 1, grupo: 'B' },
        { data: 'Seg. 23/06', time1: 'Atlético Madrid', time2: 'Botafogo', placar1: 1, placar2: 0, grupo: 'B' },
        { data: 'Seg. 23/06', time1: 'Porto', time2: 'Al Ahly', placar1: 1, placar2: 1, grupo: 'A' },
        { data: 'Seg. 23/06', time1: 'Inter Miami', time2: 'Palmeiras', placar1: 2, placar2: 2, grupo: 'A' },
        { data: 'Ter. 24/06', time1: 'Auckland City', time2: 'Boca Juniors', placar1: 1, placar2: 2, grupo: 'C' },
        { data: 'Ter. 24/06', time1: 'Benfica', time2: 'Bayern', placar1: 1, placar2: 2, grupo: 'C' },
        { data: 'Ter. 24/06', time1: 'Espérance', time2: 'Chelsea', placar1: 0, placar2: 2, grupo: 'D' },
        { data: 'Ter. 24/06', time1: 'LAFC', time2: 'Flamengo', placar1: 1, placar2: 0, grupo: 'D' },
        { data: 'Qua. 25/06', time1: 'Borussia', time2: 'Ulsan Hyundai', placar1: 2, placar2: 0, grupo: 'F' },
        { data: 'Qua. 25/06', time1: 'Sundowns', time2: 'Fluminense', placar1: 0, placar2: 1, grupo: 'F' },
        { data: 'Qua. 25/06', time1: 'Urawa Reds', time2: 'Monterrey', placar1: 0, placar2: 2, grupo: 'E' },
        { data: 'Qua. 25/06', time1: 'River Plate', time2: 'Inter', placar1: 2, placar2: 1, grupo: 'E' },
        { data: 'Qui. 26/06', time1: 'Juventus', time2: 'Manchester City', placar1: 2, placar2: 1, grupo: 'G' },
        { data: 'Qui. 26/06', time1: 'Wydad AC', time2: 'Al Ain', placar1: 2, placar2: 3, grupo: 'G' },
        { data: 'Qui. 26/06', time1: 'Al-Hilal', time2: 'Pachuca', placar1: 1, placar2: 0, grupo: 'H' },
        { data: 'Qui. 26/06', time1: 'RB Salzburg', time2: 'Real Madrid', placar1: 0, placar2: 3, grupo: 'H' }
    ]
};

// Mata-mata com chaveamento real
const mataMata = {
    'Oitavas de Final': [
        { time1: 'Palmeiras', time2: 'Botafogo', data: '28/06/2025', horario: '13:00', resultado: null },
        { time1: 'Benfica', time2: 'Chelsea', data: '28/06/2025', horario: '17:00', resultado: null },
        { time1: 'Inter', time2: 'Fluminense', data: '30/06/2025', horario: '16:00', resultado: null },
        { time1: 'Manchester City', time2: 'Al-Hilal', data: '30/06/2025', horario: '22:00', resultado: null },
        { time1: 'PSG', time2: 'Inter Miami', data: '29/06/2025', horario: '13:00', resultado: null },
        { time1: 'Flamengo', time2: 'Bayern', data: '29/06/2025', horario: '17:00', resultado: null },
        { time1: 'Real Madrid', time2: 'Juventus', data: '01/07/2025', horario: '16:00', resultado: null },
        { time1: 'Borussia', time2: 'Monterrey', data: '01/07/2025', horario: '22:00', resultado: null }
    ],
    'Quartas de Final': [
        { time1: 'A Confirmar', time2: 'A Confirmar', data: '04/07/2025', horario: '16:00', resultado: null },
        { time1: 'A Confirmar', time2: 'A Confirmar', data: '04/07/2025', horario: '22:00', resultado: null },
        { time1: 'A Confirmar', time2: 'A Confirmar', data: '05/07/2025', horario: '16:00', resultado: null },
        { time1: 'A Confirmar', time2: 'A Confirmar', data: '05/07/2025', horario: '22:00', resultado: null }
    ],
    'Semifinais': [
        { time1: 'A Confirmar', time2: 'A Confirmar', data: '08/07/2025', horario: '16:00', resultado: null },
        { time1: 'A Confirmar', time2: 'A Confirmar', data: '08/07/2025', horario: '22:00', resultado: null }
    ],
    'Final': [
        { time1: 'A Confirmar', time2: 'A Confirmar', data: '12/07/2025', horario: '16:00', resultado: null }
    ]
};

// Função para carregar a aba de times
function carregarTimes() {
    const container = document.getElementById('teamsGrid');
    if (!container) return;
    
    container.innerHTML = '';

    Object.keys(times).forEach(grupo => {
        const grupoDiv = document.createElement('div');
        grupoDiv.className = 'grupo-times';
        
        const tituloGrupo = document.createElement('h3');
        tituloGrupo.textContent = grupo;
        tituloGrupo.className = 'titulo-grupo';
        grupoDiv.appendChild(tituloGrupo);

        const timesGrid = document.createElement('div');
        timesGrid.className = 'times-grid';

        times[grupo].forEach(time => {
            const timeCard = document.createElement('div');
            timeCard.className = 'time-card';
            timeCard.innerHTML = `
                <div class="escudo">${time.escudo}</div>
                <div class="info-time">
                    <h4>${time.nome}</h4>
                    <p>${time.pais}</p>
                </div>
            `;
            timesGrid.appendChild(timeCard);
        });

        grupoDiv.appendChild(timesGrid);
        container.appendChild(grupoDiv);
    });
}

// Função para carregar a classificação
function carregarClassificacao() {
    const container = document.getElementById('standingsContainer');
    if (!container) return;
    
    container.innerHTML = '';

    Object.keys(classificacao).forEach(grupo => {
        const grupoDiv = document.createElement('div');
        grupoDiv.className = 'grupo-classificacao';
        
        const tituloGrupo = document.createElement('h3');
        tituloGrupo.textContent = grupo;
        tituloGrupo.className = 'titulo-grupo';
        grupoDiv.appendChild(tituloGrupo);

        const tabela = document.createElement('table');
        tabela.className = 'tabela-classificacao';
        tabela.innerHTML = `
            <thead>
                <tr>
                    <th>Pos</th>
                    <th>Time</th>
                    <th>PTS</th>
                    <th>PJ</th>
                    <th>VIT</th>
                    <th>E</th>
                    <th>DER</th>
                    <th>GM</th>
                    <th>GC</th>
                    <th>SG</th>
                    <th>Últimos 5</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;

        const tbody = tabela.querySelector('tbody');
        classificacao[grupo].forEach((time, index) => {
            const ultimosJogos = time.ultimos.map(resultado => {
                const cor = resultado === 'V' ? 'verde' : resultado === 'E' ? 'cinza' : 'vermelho';
                return `<span class="resultado ${cor}">●</span>`;
            }).join('');

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${time.time}</td>
                <td><strong>${time.pts}</strong></td>
                <td>${time.pj}</td>
                <td>${time.vit}</td>
                <td>${time.emp}</td>
                <td>${time.der}</td>
                <td>${time.gm}</td>
                <td>${time.gc}</td>
                <td>${time.sg}</td>
                <td class="ultimos-jogos">${ultimosJogos}</td>
            `;
            tbody.appendChild(row);
        });

        grupoDiv.appendChild(tabela);
        container.appendChild(grupoDiv);
    });
}

// Função para carregar o calendário
function carregarCalendario() {
    const container = document.getElementById('matchesContainer');
    if (!container) return;
    
    container.innerHTML = '';

    Object.keys(calendario).forEach(rodada => {
        const rodadaDiv = document.createElement('div');
        rodadaDiv.className = 'rodada-jogos';
        
        const tituloRodada = document.createElement('h3');
        tituloRodada.textContent = rodada;
        tituloRodada.className = 'titulo-rodada';
        rodadaDiv.appendChild(tituloRodada);

        const jogosGrid = document.createElement('div');
        jogosGrid.className = 'jogos-grid';

        calendario[rodada].forEach(jogo => {
            const jogoCard = document.createElement('div');
            jogoCard.className = 'jogo-card';
            jogoCard.innerHTML = `
                <div class="data-jogo">${jogo.data}</div>
                <div class="times-jogo">
                    <span class="time">${jogo.time1}</span>
                    <span class="placar">${jogo.placar1} x ${jogo.placar2}</span>
                    <span class="time">${jogo.time2}</span>
                </div>
                <div class="grupo-jogo">Grupo ${jogo.grupo}</div>
            `;
            jogosGrid.appendChild(jogoCard);
        });

        rodadaDiv.appendChild(jogosGrid);
        container.appendChild(rodadaDiv);
    });
}

// Função para carregar o mata-mata
function carregarMataMata() {
    const container = document.getElementById('mata-mata-container');
    if (!container) return;
    
    container.innerHTML = '';

    Object.keys(mataMata).forEach(fase => {
        const faseDiv = document.createElement('div');
        faseDiv.className = 'fase-mata-mata';
        
        const tituloFase = document.createElement('h3');
        tituloFase.textContent = fase;
        tituloFase.className = 'titulo-fase';
        faseDiv.appendChild(tituloFase);

        const jogosGrid = document.createElement('div');
        jogosGrid.className = 'jogos-mata-mata';

        mataMata[fase].forEach(jogo => {
            const jogoCard = document.createElement('div');
            jogoCard.className = 'jogo-mata-mata-card';
            jogoCard.innerHTML = `
                <div class="data-hora">${jogo.data} - ${jogo.horario}</div>
                <div class="confronto">
                    <span class="time">${jogo.time1}</span>
                    <span class="vs">🆚</span>
                    <span class="time">${jogo.time2}</span>
                </div>
            `;
            jogosGrid.appendChild(jogoCard);
        });

        faseDiv.appendChild(jogosGrid);
        container.appendChild(faseDiv);
    });
}

// Função para alternar entre abas
function mostrarAba(aba) {
    // Esconder todas as seções de conteúdo
    document.querySelectorAll('.tab-content').forEach(conteudo => {
        conteudo.style.display = 'none';
    });

    // Remover classe active de todas as abas
    document.querySelectorAll('.nav-link').forEach(tab => {
        tab.classList.remove('active');
    });

    // Mostrar seção selecionada
    const secaoSelecionada = document.getElementById(aba);
    if (secaoSelecionada) {
        secaoSelecionada.style.display = 'block';
    }

    // Adicionar classe active na aba selecionada
    const abaSelecionada = document.querySelector(`[data-tab="${aba}"]`);
    if (abaSelecionada) {
        abaSelecionada.classList.add('active');
    }

    // Carregar conteúdo específico da aba
    switch(aba) {
        case 'times':
            carregarTimes();
            break;
        case 'classificacao':
            carregarClassificacao();
            break;
        case 'calendario':
            carregarCalendario();
            break;
        case 'mata-mata':
            carregarMataMata();
            break;
    }
}

// Função para verificar se o usuário está logado
function verificarLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userEmail = localStorage.getItem('userEmail');
    
    if (!isLoggedIn || !userEmail) {
        // Se não estiver logado, redirecionar para a página de login
        window.location.href = 'index.html';
        return;
    }
    
    // Exibir o email do usuário no menu
    const userEmailElement = document.getElementById('userEmail');
    if (userEmailElement) {
        userEmailElement.textContent = userEmail;
    }
}

// Função para fazer logout
function logout() {
    // Limpar dados do localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    
    // Redirecionar para a página de login
    window.location.href = 'index.html';
}

// Inicializar a página
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o usuário está logado
    verificarLogin();
    
    // Configurar navegação por abas
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const aba = this.getAttribute('data-tab');
            mostrarAba(aba);
        });
    });

    // Mostrar aba de notícias por padrão (já está ativa no HTML)
    // A seção notícias já está visível por padrão
    
    // Adicionar efeitos de hover nos cards
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.time-card, .jogo-card, .jogo-mata-mata-card')) {
            e.target.closest('.time-card, .jogo-card, .jogo-mata-mata-card').style.transform = 'translateY(-5px)';
        }
    });

    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.time-card, .jogo-card, .jogo-mata-mata-card')) {
            e.target.closest('.time-card, .jogo-card, .jogo-mata-mata-card').style.transform = 'translateY(0)';
        }
    });
}); 