// Dados dos times participantes
const teamsData = [
    // Europa
    { id: 1, name: "Manchester City", continent: "europa", country: "Inglaterra", group: "A", points: 9, wins: 3, draws: 0, losses: 0, goalsFor: 8, goalsAgainst: 2 },
    { id: 2, name: "Real Madrid", continent: "europa", country: "Espanha", group: "A", points: 6, wins: 2, draws: 0, losses: 1, goalsFor: 6, goalsAgainst: 3 },
    { id: 3, name: "Bayern Munich", continent: "europa", country: "Alemanha", group: "B", points: 9, wins: 3, draws: 0, losses: 0, goalsFor: 9, goalsAgainst: 1 },
    { id: 4, name: "PSG", continent: "europa", country: "França", group: "B", points: 6, wins: 2, draws: 0, losses: 1, goalsFor: 5, goalsAgainst: 4 },
    { id: 5, name: "Inter Milan", continent: "europa", country: "Itália", group: "C", points: 7, wins: 2, draws: 1, losses: 0, goalsFor: 7, goalsAgainst: 3 },
    { id: 6, name: "Porto", continent: "europa", country: "Portugal", group: "C", points: 4, wins: 1, draws: 1, losses: 1, goalsFor: 4, goalsAgainst: 5 },
    { id: 7, name: "Ajax", continent: "europa", country: "Holanda", group: "D", points: 6, wins: 2, draws: 0, losses: 1, goalsFor: 6, goalsAgainst: 4 },
    { id: 8, name: "Benfica", continent: "europa", country: "Portugal", group: "D", points: 3, wins: 1, draws: 0, losses: 2, goalsFor: 3, goalsAgainst: 6 },
    
    // América do Sul
    { id: 9, name: "Flamengo", continent: "america-sul", country: "Brasil", group: "E", points: 9, wins: 3, draws: 0, losses: 0, goalsFor: 8, goalsAgainst: 2 },
    { id: 10, name: "Palmeiras", continent: "america-sul", country: "Brasil", group: "E", points: 6, wins: 2, draws: 0, losses: 1, goalsFor: 6, goalsAgainst: 3 },
    { id: 11, name: "River Plate", continent: "america-sul", country: "Argentina", group: "F", points: 7, wins: 2, draws: 1, losses: 0, goalsFor: 7, goalsAgainst: 3 },
    { id: 12, name: "Boca Juniors", continent: "america-sul", country: "Argentina", group: "F", points: 4, wins: 1, draws: 1, losses: 1, goalsFor: 4, goalsAgainst: 5 },
    { id: 13, name: "Peñarol", continent: "america-sul", country: "Uruguai", group: "G", points: 6, wins: 2, draws: 0, losses: 1, goalsFor: 5, goalsAgainst: 4 },
    { id: 14, name: "Colo-Colo", continent: "america-sul", country: "Chile", group: "G", points: 3, wins: 1, draws: 0, losses: 2, goalsFor: 3, goalsAgainst: 6 },
    
    // América do Norte
    { id: 15, name: "Club América", continent: "america-norte", country: "México", group: "H", points: 6, wins: 2, draws: 0, losses: 1, goalsFor: 5, goalsAgainst: 4 },
    { id: 16, name: "LAFC", continent: "america-norte", country: "Estados Unidos", group: "H", points: 3, wins: 1, draws: 0, losses: 2, goalsFor: 3, goalsAgainst: 6 },
    
    // África
    { id: 17, name: "Al Ahly", continent: "africa", country: "Egito", group: "A", points: 3, wins: 1, draws: 0, losses: 2, goalsFor: 3, goalsAgainst: 6 },
    { id: 18, name: "Wydad Casablanca", continent: "africa", country: "Marrocos", group: "B", points: 3, wins: 1, draws: 0, losses: 2, goalsFor: 3, goalsAgainst: 6 },
    { id: 19, name: "Mamelodi Sundowns", continent: "africa", country: "África do Sul", group: "C", points: 3, wins: 1, draws: 0, losses: 2, goalsFor: 3, goalsAgainst: 6 },
    { id: 20, name: "Esperance", continent: "africa", country: "Tunísia", group: "D", points: 3, wins: 1, draws: 0, losses: 2, goalsFor: 3, goalsAgainst: 6 },
    
    // Ásia
    { id: 21, name: "Urawa Red Diamonds", continent: "asia", country: "Japão", group: "E", points: 3, wins: 1, draws: 0, losses: 2, goalsFor: 3, goalsAgainst: 6 },
    { id: 22, name: "Al Hilal", continent: "asia", country: "Arábia Saudita", group: "F", points: 3, wins: 1, draws: 0, losses: 2, goalsFor: 3, goalsAgainst: 6 },
    { id: 23, name: "Jeonbuk Hyundai", continent: "asia", country: "Coreia do Sul", group: "G", points: 3, wins: 1, draws: 0, losses: 2, goalsFor: 3, goalsAgainst: 6 },
    { id: 24, name: "Melbourne City", continent: "asia", country: "Austrália", group: "H", points: 3, wins: 1, draws: 0, losses: 2, goalsFor: 3, goalsAgainst: 6 }
];

// Dados dos jogos - ESTRUTURA CORRETA DA COPA DO MUNDO DE CLUBES
const matchesData = [
    // ===== FASE DE GRUPOS (24 jogos) =====
    // GRUPO A - 3 jogos
    { id: 1, phase: "grupos", group: "A", team1: "Manchester City", team2: "Real Madrid", score1: 2, score2: 1, date: "2025-01-15", time: "20:00", status: "Finalizado" },
    { id: 2, phase: "grupos", group: "A", team1: "Al Ahly", team2: "Manchester City", score1: 0, score2: 3, date: "2025-01-18", time: "17:00", status: "Finalizado" },
    { id: 3, phase: "grupos", group: "A", team1: "Real Madrid", team2: "Al Ahly", score1: 2, score2: 0, date: "2025-01-21", time: "20:00", status: "Finalizado" },
    
    // GRUPO B - 3 jogos
    { id: 4, phase: "grupos", group: "B", team1: "Bayern Munich", team2: "PSG", score1: 3, score2: 1, date: "2025-01-16", time: "20:00", status: "Finalizado" },
    { id: 5, phase: "grupos", group: "B", team1: "Wydad Casablanca", team2: "Bayern Munich", score1: 0, score2: 4, date: "2025-01-19", time: "17:00", status: "Finalizado" },
    { id: 6, phase: "grupos", group: "B", team1: "PSG", team2: "Wydad Casablanca", score1: 2, score2: 1, date: "2025-01-22", time: "20:00", status: "Finalizado" },
    
    // GRUPO C - 3 jogos
    { id: 7, phase: "grupos", group: "C", team1: "Inter Milan", team2: "Porto", score1: 2, score2: 1, date: "2025-01-17", time: "20:00", status: "Finalizado" },
    { id: 8, phase: "grupos", group: "C", team1: "Mamelodi Sundowns", team2: "Inter Milan", score1: 1, score2: 2, date: "2025-01-20", time: "17:00", status: "Finalizado" },
    { id: 9, phase: "grupos", group: "C", team1: "Porto", team2: "Mamelodi Sundowns", score1: 1, score2: 1, date: "2025-01-23", time: "20:00", status: "Finalizado" },
    
    // GRUPO D - 3 jogos
    { id: 10, phase: "grupos", group: "D", team1: "Ajax", team2: "Benfica", score1: 2, score2: 0, date: "2025-01-18", time: "20:00", status: "Finalizado" },
    { id: 11, phase: "grupos", group: "D", team1: "Esperance", team2: "Ajax", score1: 1, score2: 2, date: "2025-01-21", time: "17:00", status: "Finalizado" },
    { id: 12, phase: "grupos", group: "D", team1: "Benfica", team2: "Esperance", score1: 1, score2: 0, date: "2025-01-24", time: "20:00", status: "Finalizado" },
    
    // GRUPO E - 3 jogos
    { id: 13, phase: "grupos", group: "E", team1: "Flamengo", team2: "Palmeiras", score1: 2, score2: 1, date: "2025-01-19", time: "20:00", status: "Finalizado" },
    { id: 14, phase: "grupos", group: "E", team1: "Urawa Red Diamonds", team2: "Flamengo", score1: 0, score2: 3, date: "2025-01-22", time: "17:00", status: "Finalizado" },
    { id: 15, phase: "grupos", group: "E", team1: "Palmeiras", team2: "Urawa Red Diamonds", score1: 2, score2: 0, date: "2025-01-25", time: "20:00", status: "Finalizado" },
    
    // GRUPO F - 3 jogos
    { id: 16, phase: "grupos", group: "F", team1: "River Plate", team2: "Boca Juniors", score1: 2, score2: 1, date: "2025-01-20", time: "20:00", status: "Finalizado" },
    { id: 17, phase: "grupos", group: "F", team1: "Al Hilal", team2: "River Plate", score1: 1, score2: 2, date: "2025-01-23", time: "17:00", status: "Finalizado" },
    { id: 18, phase: "grupos", group: "F", team1: "Boca Juniors", team2: "Al Hilal", score1: 1, score2: 1, date: "2025-01-26", time: "20:00", status: "Finalizado" },
    
    // GRUPO G - 3 jogos
    { id: 19, phase: "grupos", group: "G", team1: "Peñarol", team2: "Colo-Colo", score1: 2, score2: 0, date: "2025-01-21", time: "20:00", status: "Finalizado" },
    { id: 20, phase: "grupos", group: "G", team1: "Jeonbuk Hyundai", team2: "Peñarol", score1: 1, score2: 2, date: "2025-01-24", time: "17:00", status: "Finalizado" },
    { id: 21, phase: "grupos", group: "G", team1: "Colo-Colo", team2: "Jeonbuk Hyundai", score1: 1, score2: 0, date: "2025-01-27", time: "20:00", status: "Finalizado" },
    
    // GRUPO H - 3 jogos
    { id: 22, phase: "grupos", group: "H", team1: "Club América", team2: "LAFC", score1: 2, score2: 0, date: "2025-01-22", time: "20:00", status: "Finalizado" },
    { id: 23, phase: "grupos", group: "H", team1: "Melbourne City", team2: "Club América", score1: 1, score2: 2, date: "2025-01-25", time: "17:00", status: "Finalizado" },
    { id: 24, phase: "grupos", group: "H", team1: "LAFC", team2: "Melbourne City", score1: 1, score2: 0, date: "2025-01-28", time: "20:00", status: "Finalizado" },
    
    // ===== OITAVAS DE FINAL (8 jogos) =====
    { id: 25, phase: "oitavas", team1: "Manchester City", team2: "PSG", score1: 2, score2: 1, date: "2025-02-01", time: "20:00", status: "Finalizado" },
    { id: 26, phase: "oitavas", team1: "Bayern Munich", team2: "Real Madrid", score1: 3, score2: 2, date: "2025-02-02", time: "20:00", status: "Finalizado" },
    { id: 27, phase: "oitavas", team1: "Inter Milan", team2: "Ajax", score1: 1, score2: 0, date: "2025-02-03", time: "20:00", status: "Finalizado" },
    { id: 28, phase: "oitavas", team1: "Benfica", team2: "Porto", score1: 0, score2: 2, date: "2025-02-04", time: "20:00", status: "Finalizado" },
    { id: 29, phase: "oitavas", team1: "Flamengo", team2: "River Plate", score1: 2, score2: 1, date: "2025-02-05", time: "20:00", status: "Finalizado" },
    { id: 30, phase: "oitavas", team1: "Palmeiras", team2: "Boca Juniors", score1: 1, score2: 0, date: "2025-02-06", time: "20:00", status: "Finalizado" },
    { id: 31, phase: "oitavas", team1: "Peñarol", team2: "Club América", score1: 2, score2: 1, date: "2025-02-07", time: "20:00", status: "Finalizado" },
    { id: 32, phase: "oitavas", team1: "Colo-Colo", team2: "LAFC", score1: 0, score2: 1, date: "2025-02-08", time: "20:00", status: "Finalizado" },
    
    // ===== QUARTAS DE FINAL (4 jogos) =====
    { id: 33, phase: "quartas", team1: "Manchester City", team2: "Bayern Munich", score1: 2, score2: 2, date: "2025-02-12", time: "20:00", status: "Finalizado" },
    { id: 34, phase: "quartas", team1: "Inter Milan", team2: "Porto", score1: 1, score2: 0, date: "2025-02-13", time: "20:00", status: "Finalizado" },
    { id: 35, phase: "quartas", team1: "Flamengo", team2: "Palmeiras", score1: 1, score2: 1, date: "2025-02-14", time: "20:00", status: "Finalizado" },
    { id: 36, phase: "quartas", team1: "Peñarol", team2: "LAFC", score1: 2, score2: 0, date: "2025-02-15", time: "20:00", status: "Finalizado" },
    
    // ===== SEMIFINAL (2 jogos) =====
    { id: 37, phase: "semifinal", team1: "Manchester City", team2: "Inter Milan", score1: 3, score2: 1, date: "2025-02-19", time: "20:00", status: "Finalizado" },
    { id: 38, phase: "semifinal", team1: "Flamengo", team2: "Peñarol", score1: 2, score2: 0, date: "2025-02-20", time: "20:00", status: "Finalizado" },
    
    // ===== FINAL (1 jogo) =====
    { id: 39, phase: "final", team1: "Manchester City", team2: "Flamengo", score1: 2, score2: 1, date: "2025-02-25", time: "20:00", status: "Finalizado" }
];

// Jogos ao vivo simulados
const liveMatches = [
    { id: 40, team1: "Real Madrid", team2: "Bayern Munich", score1: 1, score2: 1, time: "67'", status: "Ao Vivo" },
    { id: 41, team1: "PSG", team2: "Inter Milan", score1: 0, score2: 2, time: "23'", status: "Ao Vivo" }
];

// Próximos jogos
const upcomingMatches = [
    { id: 42, team1: "Manchester City", team2: "Flamengo", date: "2025-03-01", time: "20:00", phase: "Amistoso" },
    { id: 43, team1: "Real Madrid", team2: "Barcelona", date: "2025-03-05", time: "21:00", phase: "Amistoso" },
    { id: 44, team1: "Bayern Munich", team2: "Borussia Dortmund", date: "2025-03-08", time: "19:30", phase: "Amistoso" }
];

// Função para verificar se o usuário está logado
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userEmail = localStorage.getItem('userEmail');
    
    if (isLoggedIn !== 'true' || !userEmail) {
        // Se não estiver logado, redirecionar para a página de login
        window.location.href = 'index.html';
        return;
    }
    
    // Exibir o e-mail do usuário
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
    
    // Mostrar notificação
    showNotification('Logout realizado com sucesso!', 'success');
    
    // Redirecionar para a página de login após 2 segundos
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// Função para mostrar notificações
function showNotification(message, type = 'info') {
    // Remover notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Adicionar estilos CSS dinamicamente
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(0, 255, 136, 0.9)' : type === 'error' ? 'rgba(255, 59, 48, 0.9)' : 'rgba(0, 255, 136, 0.9)'};
        color: ${type === 'success' ? '#000000' : '#ffffff'};
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        border: 1px solid ${type === 'success' ? 'rgba(0, 255, 136, 0.3)' : type === 'error' ? 'rgba(255, 59, 48, 0.3)' : 'rgba(0, 255, 136, 0.3)'};
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Função para adicionar efeitos de hover nos links de navegação
function addNavigationEffects() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover classe active de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adicionar classe active ao link clicado
            this.classList.add('active');
            
            // Mostrar notificação
            const linkText = this.textContent.trim();
            showNotification(`Navegando para ${linkText}`, 'info');
        });
    });
}

// Função para adicionar efeitos nos cards de notícias
function addNewsCardEffects() {
    const newsCards = document.querySelectorAll('.news-card, .news-item');
    
    newsCards.forEach(card => {
        card.addEventListener('click', function() {
            // Efeito de clique
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Mostrar notificação
            const title = this.querySelector('.news-title, .news-item-title');
            if (title) {
                showNotification(`Lendo: ${title.textContent}`, 'info');
            }
        });
    });
}

// Função para adicionar efeitos nos links "Ler mais"
function addReadMoreEffects() {
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Mostrar notificação
            const card = this.closest('.news-card');
            const title = card.querySelector('.news-title');
            if (title) {
                showNotification(`Abrindo notícia completa: ${title.textContent}`, 'info');
            }
        });
    });
}

// Função para adicionar animações de entrada
function addEntranceAnimations() {
    const elements = document.querySelectorAll('.news-card, .news-item');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
}

// Função para adicionar efeitos de partículas no fundo
function addParticleEffect() {
    const body = document.body;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: rgba(0, 255, 136, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 3}s;
            z-index: -1;
        `;
        
        body.appendChild(particle);
    }
    
    // Adicionar keyframes para animação de partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
                opacity: 0.3;
            }
            50% {
                transform: translateY(-30px) rotate(180deg);
                opacity: 0.8;
            }
        }
    `;
    document.head.appendChild(style);
}

// Função para adicionar efeitos de scroll
function addScrollEffects() {
    let ticking = false;
    
    function updateOnScroll() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Função para adicionar efeitos de teclado
function addKeyboardEffects() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Pressionar ESC para fazer logout
            logout();
        }
        
        if (e.key === 'h' || e.key === 'H') {
            // Pressionar H para ir para o início
            document.querySelector('.nav-link').click();
        }
    });
}

// Função para adicionar efeitos de loading
function addLoadingEffects() {
    // Simular carregamento de dados
    const loadingIndicator = document.createElement('div');
    loadingIndicator.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            backdrop-filter: blur(10px);
        ">
            <div style="
                text-align: center;
                color: #00FF88;
            ">
                <div style="
                    width: 50px;
                    height: 50px;
                    border: 3px solid rgba(0, 255, 136, 0.3);
                    border-top: 3px solid #00FF88;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 20px;
                "></div>
                <p>Carregando WORLD CUP NEWS...</p>
            </div>
        </div>
    `;
    
    // Adicionar keyframes para animação de loading
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(loadingIndicator);
    
    // Remover loading após 2 segundos
    setTimeout(() => {
        loadingIndicator.style.opacity = '0';
        loadingIndicator.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            if (loadingIndicator.parentElement) {
                loadingIndicator.remove();
            }
        }, 500);
    }, 2000);
}

// Função para adicionar efeitos de vibração (para dispositivos móveis)
function addVibrationEffect() {
    if ('vibrate' in navigator) {
        const clickableElements = document.querySelectorAll('.nav-link, .news-card, .news-item, .logout-btn');
        clickableElements.forEach(element => {
            element.addEventListener('click', function() {
                navigator.vibrate(50);
            });
        });
    }
}

// Função para adicionar efeitos de hover nos elementos
function addHoverEffects() {
    const hoverElements = document.querySelectorAll('.nav-link, .news-card, .news-item, .logout-btn, .read-more');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform + ' scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace(' scale(1.02)', '');
        });
    });
}

// Função para inicializar todas as funcionalidades
function initializeApp() {
    // Verificar autenticação
    checkAuth();
    
    // Adicionar loading inicial
    addLoadingEffects();
    
    // Inicializar efeitos após o loading
    setTimeout(() => {
        addNavigationEffects();
        addNewsCardEffects();
        addReadMoreEffects();
        addEntranceAnimations();
        addParticleEffect();
        addScrollEffects();
        addKeyboardEffects();
        addVibrationEffect();
        addHoverEffects();
        
        // Mostrar notificação de boas-vindas
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            showNotification(`Bem-vindo de volta, ${userEmail}!`, 'success');
        }
        
        console.log('WORLD CUP NEWS inicializado com sucesso!');
    }, 2500);
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initializeApp);

// Função para atualizar estatísticas em tempo real
function updateStats() {
    const stats = [
        { number: 32, label: 'Times' },
        { number: 64, label: 'Jogos' },
        { number: 5, label: 'Continentes' }
    ];
    
    const statElements = document.querySelectorAll('.stat-number');
    
    statElements.forEach((element, index) => {
        const targetNumber = stats[index].number;
        let currentNumber = 0;
        const increment = targetNumber / 50;
        
        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(timer);
            }
            element.textContent = Math.floor(currentNumber);
        }, 50);
    });
}

// Atualizar estatísticas quando a página carregar
window.addEventListener('load', () => {
    setTimeout(updateStats, 3000);
});

// Função para adicionar efeitos de tema dinâmico
function addDynamicTheme() {
    const colors = [
        '#00FF88', // Verde original
        '#00CC6A', // Verde escuro
        '#00AA55', // Verde mais escuro
        '#008844'  // Verde muito escuro
    ];
    
    let currentColorIndex = 0;
    
    setInterval(() => {
        const currentColor = colors[currentColorIndex];
        const nextColor = colors[(currentColorIndex + 1) % colors.length];
        
        // Aplicar transição suave de cor
        document.documentElement.style.setProperty('--accent-color', currentColor);
        
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }, 10000); // Mudar a cada 10 segundos
}

// Inicializar tema dinâmico
document.addEventListener('DOMContentLoaded', addDynamicTheme);

// Sistema de abas
function initializeTabs() {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetTab = this.getAttribute('data-tab');
            
            // Remover classe active de todos os links e conteúdos
            navLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(t => t.classList.remove('active'));
            
            // Adicionar classe active ao link clicado e conteúdo correspondente
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Carregar conteúdo específico da aba
            loadTabContent(targetTab);
            
            showNotification(`Navegando para ${this.textContent}`, 'info');
        });
    });
}

// Carregar conteúdo específico da aba
function loadTabContent(tabName) {
    switch(tabName) {
        case 'times':
            loadTeams();
            break;
        case 'calendario':
            loadMatches();
            break;
        case 'classificacao':
            loadStandings();
            break;
        case 'jogos':
            loadLiveMatches();
            break;
    }
}

// Carregar times
function loadTeams() {
    const teamsGrid = document.getElementById('teamsGrid');
    if (!teamsGrid) return;
    
    teamsGrid.innerHTML = '';
    
    teamsData.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        teamCard.innerHTML = `
            <div class="team-header">
                <div class="team-logo">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#00FF88" stroke-width="2"/>
                        <path d="M8 12L11 15L16 9" stroke="#00FF88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="team-info">
                    <h4>${team.name}</h4>
                    <span class="continent">${getContinentName(team.continent)}</span>
                </div>
            </div>
            <div class="team-stats">
                <div class="team-stat">
                    <div class="value">${team.points}</div>
                    <div class="label">Pontos</div>
                </div>
                <div class="team-stat">
                    <div class="value">${team.wins}</div>
                    <div class="label">Vitórias</div>
                </div>
                <div class="team-stat">
                    <div class="value">${team.goalsFor}</div>
                    <div class="label">Gols Pró</div>
                </div>
                <div class="team-stat">
                    <div class="value">${team.goalsAgainst}</div>
                    <div class="label">Gols Contra</div>
                </div>
            </div>
        `;
        
        teamCard.addEventListener('click', () => {
            showNotification(`Visualizando informações do ${team.name}`, 'info');
        });
        
        teamsGrid.appendChild(teamCard);
    });
    
    // Adicionar filtros de continente
    const filterButtons = document.querySelectorAll('.teams-filter .filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const continent = this.getAttribute('data-continent');
            filterTeams(continent);
        });
    });
}

// Filtrar times por continente
function filterTeams(continent) {
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        const teamName = card.querySelector('h4').textContent;
        const team = teamsData.find(t => t.name === teamName);
        
        if (continent === 'todos' || team.continent === continent) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Carregar jogos
function loadMatches() {
    const matchesContainer = document.getElementById('matchesContainer');
    if (!matchesContainer) return;
    
    matchesContainer.innerHTML = '';
    
    // Agrupar jogos por fase
    const matchesByPhase = {
        grupos: matchesData.filter(match => match.phase === 'grupos'),
        oitavas: matchesData.filter(match => match.phase === 'oitavas'),
        quartas: matchesData.filter(match => match.phase === 'quartas'),
        semifinal: matchesData.filter(match => match.phase === 'semifinal'),
        final: matchesData.filter(match => match.phase === 'final')
    };
    
    // Criar seções para cada fase
    Object.keys(matchesByPhase).forEach(phase => {
        const phaseMatches = matchesByPhase[phase];
        if (phaseMatches.length === 0) return;
        
        // Criar cabeçalho da fase
        const phaseHeader = document.createElement('div');
        phaseHeader.className = 'phase-header';
        phaseHeader.innerHTML = `
            <h3 class="phase-title">${getPhaseName(phase)}</h3>
            <span class="phase-count">${phaseMatches.length} ${phaseMatches.length === 1 ? 'jogo' : 'jogos'}</span>
        `;
        matchesContainer.appendChild(phaseHeader);
        
        // Criar jogos da fase
        phaseMatches.forEach(match => {
            const matchCard = document.createElement('div');
            matchCard.className = 'match-card';
            matchCard.innerHTML = `
                <div class="match-header">
                    <span class="match-phase">${getPhaseName(match.phase)}${match.group ? ` - Grupo ${match.group}` : ''}</span>
                    <span class="match-date">${formatDate(match.date)} - ${match.time}</span>
                </div>
                <div class="match-teams">
                    <div class="team">
                        <div class="team-logo">
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#00FF88" stroke-width="2"/>
                            </svg>
                        </div>
                        <span class="team-name">${match.team1}</span>
                    </div>
                    <div class="match-score">
                        <span>${match.score1}</span>
                        <span>-</span>
                        <span>${match.score2}</span>
                    </div>
                    <div class="team logo">
                        <span class="team-name">${match.team2}</span>
                        <div class="team-logo">
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#00FF88" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="match-status">${match.status}</div>
            `;
            
            matchesContainer.appendChild(matchCard);
        });
    });
    
    // Adicionar filtros de fase
    const filterButtons = document.querySelectorAll('.calendar-filter .filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const phase = this.getAttribute('data-phase');
            filterMatches(phase);
        });
    });
}

// Filtrar jogos por fase
function filterMatches(phase) {
    const matchCards = document.querySelectorAll('.match-card');
    const phaseHeaders = document.querySelectorAll('.phase-header');
    
    if (phase === 'todos') {
        matchCards.forEach(card => card.style.display = 'block');
        phaseHeaders.forEach(header => header.style.display = 'block');
    } else {
        matchCards.forEach(card => {
            const phaseElement = card.querySelector('.match-phase');
            const matchPhase = phaseElement.textContent.toLowerCase();
            
            if (matchPhase.includes(phase)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        phaseHeaders.forEach(header => {
            const phaseTitle = header.querySelector('.phase-title').textContent.toLowerCase();
            if (phaseTitle.includes(phase)) {
                header.style.display = 'block';
            } else {
                header.style.display = 'none';
            }
        });
    }
}

// Carregar classificação
function loadStandings() {
    const standingsContainer = document.getElementById('standingsContainer');
    if (!standingsContainer) return;
    
    standingsContainer.innerHTML = '';
    
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    
    groups.forEach(group => {
        const groupTeams = teamsData.filter(team => team.group === group);
        groupTeams.sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if ((b.goalsFor - b.goalsAgainst) !== (a.goalsFor - a.goalsAgainst)) {
                return (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst);
            }
            return b.goalsFor - a.goalsFor;
        });
        
        const groupStandings = document.createElement('div');
        groupStandings.className = 'group-standings';
        groupStandings.innerHTML = `
            <div class="group-header">
                <h4>Grupo ${group}</h4>
            </div>
            <table class="standings-table">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Time</th>
                        <th>P</th>
                        <th>J</th>
                        <th>V</th>
                        <th>E</th>
                        <th>D</th>
                        <th>GP</th>
                        <th>GC</th>
                        <th>SG</th>
                    </tr>
                </thead>
                <tbody>
                    ${groupTeams.map((team, index) => `
                        <tr>
                            <td class="team-position">${index + 1}</td>
                            <td class="team-name-cell">
                                <div class="team-logo">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="#00FF88" stroke-width="2"/>
                                    </svg>
                                </div>
                                <span class="team-name">${team.name}</span>
                            </td>
                            <td>${team.points}</td>
                            <td>${team.wins + team.draws + team.losses}</td>
                            <td>${team.wins}</td>
                            <td>${team.draws}</td>
                            <td>${team.losses}</td>
                            <td>${team.goalsFor}</td>
                            <td>${team.goalsAgainst}</td>
                            <td>${team.goalsFor - team.goalsAgainst}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        
        standingsContainer.appendChild(groupStandings);
    });
    
    // Adicionar filtros de grupo
    const filterButtons = document.querySelectorAll('.standings-filter .filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const group = this.getAttribute('data-group');
            filterStandings(group);
        });
    });
}

// Filtrar classificação por grupo
function filterStandings(group) {
    const groupStandings = document.querySelectorAll('.group-standings');
    
    groupStandings.forEach(standing => {
        const groupHeader = standing.querySelector('.group-header h4');
        const groupLetter = groupHeader.textContent.split(' ')[1];
        
        if (group === 'todos' || groupLetter === group) {
            standing.style.display = 'block';
        } else {
            standing.style.display = 'none';
        }
    });
}

// Carregar jogos ao vivo
function loadLiveMatches() {
    const liveMatchesContainer = document.getElementById('liveMatches');
    const upcomingContainer = document.getElementById('upcomingContainer');
    
    if (liveMatchesContainer) {
        liveMatchesContainer.innerHTML = '';
        
        liveMatches.forEach(match => {
            const liveMatchCard = document.createElement('div');
            liveMatchCard.className = 'live-match-card';
            liveMatchCard.innerHTML = `
                <div class="live-badge">AO VIVO</div>
                <div class="live-match-teams">
                    <div class="live-team">
                        <div class="team-logo">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#FF3B30" stroke-width="2"/>
                            </svg>
                        </div>
                        <span class="team-name">${match.team1}</span>
                    </div>
                    <div class="live-score">
                        <span>${match.score1}</span>
                        <span>-</span>
                        <span>${match.score2}</span>
                    </div>
                    <div class="live-team logo">
                        <span class="team-name">${match.team2}</span>
                        <div class="team-logo">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#FF3B30" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="match-time">${match.time}</div>
            `;
            
            liveMatchesContainer.appendChild(liveMatchCard);
        });
    }
    
    if (upcomingContainer) {
        upcomingContainer.innerHTML = '';
        
        upcomingMatches.forEach(match => {
            const upcomingMatch = document.createElement('div');
            upcomingMatch.className = 'upcoming-match';
            upcomingMatch.innerHTML = `
                <div class="match-header">
                    <span class="match-phase">${match.phase}</span>
                    <span class="match-date">${formatDate(match.date)} - ${match.time}</span>
                </div>
                <div class="match-teams">
                    <div class="team">
                        <div class="team-logo">
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#00FF88" stroke-width="2"/>
                            </svg>
                        </div>
                        <span class="team-name">${match.team1}</span>
                    </div>
                    <div class="match-score">
                        <span>vs</span>
                    </div>
                    <div class="team logo">
                        <span class="team-name">${match.team2}</span>
                        <div class="team-logo">
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#00FF88" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                </div>
            `;
            
            upcomingContainer.appendChild(upcomingMatch);
        });
    }
}

// Funções auxiliares
function getContinentName(continent) {
    const names = {
        'europa': 'Europa',
        'america-sul': 'América do Sul',
        'america-norte': 'América do Norte',
        'africa': 'África',
        'asia': 'Ásia'
    };
    return names[continent] || continent;
}

function getPhaseName(phase) {
    const names = {
        'grupos': 'Fase de Grupos',
        'oitavas': 'Oitavas de Final',
        'quartas': 'Quartas de Final',
        'semifinal': 'Semifinal',
        'final': 'Final'
    };
    return names[phase] || phase;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

// Inicializar aplicação
function initializeApp() {
    checkAuth();
    initializeTabs();
    loadTabContent('noticias');
    
    // Adicionar efeitos visuais
    addEntranceAnimations();
    addHoverEffects();
    addScrollEffects();
    
    // Atualizar estatísticas em tempo real
    setInterval(updateLiveStats, 30000);
}

// Adicionar animações de entrada
function addEntranceAnimations() {
    const elements = document.querySelectorAll('.news-card, .news-item, .team-card, .match-card');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
}

// Adicionar efeitos de hover
function addHoverEffects() {
    const interactiveElements = document.querySelectorAll('.team-card, .match-card, .news-card, .news-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Adicionar efeitos de scroll
function addScrollEffects() {
    let ticking = false;
    
    function updateOnScroll() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Atualizar estatísticas em tempo real
function updateLiveStats() {
    // Simular atualizações de estatísticas
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const currentValue = parseInt(stat.textContent);
        const newValue = currentValue + Math.floor(Math.random() * 3);
        stat.textContent = newValue;
    });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initializeApp); 