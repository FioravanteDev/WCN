// Função para alternar a visibilidade da senha
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.89 1 12C2.27 7.11 6.73 4 12 4C13.41 4 14.77 4.3 16.06 4.84" stroke="#00FF88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.73 10.73A4.12 4.12 0 0 0 12 11C13.66 11 15 12.34 15 14C15 14.27 14.95 14.53 14.87 14.77" stroke="#00FF88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 3L3 21" stroke="#00FF88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.59 10.59A4.082 4.082 0 0 0 12 11C13.66 11 15 12.34 15 14C15 14.27 14.95 14.53 14.87 14.77" stroke="#00FF88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="#00FF88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="#00FF88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }
}

// Função para validar o formulário
function validateForm(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginButton = document.querySelector('.login-button');
    
    // Validação básica
    if (!email || !password) {
        showNotification('Por favor, preencha todos os campos', 'error');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Por favor, insira um e-mail válido', 'error');
        return false;
    }
    
    if (password.length < 6) {
        showNotification('A senha deve ter pelo menos 6 caracteres', 'error');
        return false;
    }
    
    // Simular processo de login
    loginButton.innerHTML = '<span>Entrando...</span>';
    loginButton.disabled = true;
    
    // Simular delay de login
    setTimeout(() => {
        showNotification('Login realizado com sucesso!', 'success');
        loginButton.innerHTML = '<span>Entrar</span><svg class="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        loginButton.disabled = false;
    }, 2000);
    
    return true;
}

// Função para validar e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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

// Função para adicionar efeitos de foco nos inputs
function addInputEffects() {
    const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
        
        input.addEventListener('input', function() {
            if (this.value.length > 0) {
                this.style.borderColor = '#00FF88';
            } else {
                this.style.borderColor = 'rgba(0, 255, 136, 0.2)';
            }
        });
    });
}

// Função para adicionar efeitos nos botões sociais
function addSocialButtonEffects() {
    const socialButtons = document.querySelectorAll('.social-button');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const buttonText = this.textContent.trim();
            showNotification(`Login com ${buttonText} em desenvolvimento`, 'info');
            
            // Efeito de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-1px)';
            }, 150);
        });
    });
}

// Função para adicionar efeitos de hover nos links
function addLinkEffects() {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Função para adicionar animações de entrada
function addEntranceAnimations() {
    const elements = document.querySelectorAll('.input-group, .form-options, .login-button, .divider, .social-login, .signup-link');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
}

// Função para adicionar efeitos de partículas no fundo
function addParticleEffect() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 255, 136, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        container.appendChild(particle);
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
                transform: translateY(-20px) rotate(180deg);
                opacity: 0.8;
            }
        }
    `;
    document.head.appendChild(style);
}

// Função para adicionar efeitos de teclado
function addKeyboardEffects() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const activeElement = document.activeElement;
            if (activeElement.tagName === 'INPUT') {
                const form = activeElement.closest('form');
                if (form) {
                    form.dispatchEvent(new Event('submit'));
                }
            }
        }
    });
}

// Função para adicionar efeitos de loading
function addLoadingEffects() {
    const loginButton = document.querySelector('.login-button');
    
    loginButton.addEventListener('click', function() {
        if (!this.disabled) {
            this.style.background = 'linear-gradient(135deg, #00CC6A, #00AA55)';
        }
    });
}

// Função para inicializar todas as funcionalidades
function initializeApp() {
    // Adicionar event listeners
    document.querySelector('.login-form').addEventListener('submit', validateForm);
    
    // Inicializar efeitos
    addInputEffects();
    addSocialButtonEffects();
    addLinkEffects();
    addEntranceAnimations();
    addParticleEffect();
    addKeyboardEffects();
    addLoadingEffects();
    
    // Adicionar efeito de foco automático no primeiro input
    setTimeout(() => {
        document.getElementById('email').focus();
    }, 1000);
    
    console.log('Sistema de login inicializado com sucesso!');
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initializeApp);

// Função para adicionar efeitos de vibração (para dispositivos móveis)
function addVibrationEffect() {
    if ('vibrate' in navigator) {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                navigator.vibrate(50);
            });
        });
    }
}

// Adicionar efeito de vibração se disponível
if ('vibrate' in navigator) {
    addVibrationEffect();
}

// Função para salvar preferências do usuário
function saveUserPreferences() {
    const rememberMe = document.getElementById('remember');
    const email = document.getElementById('email');
    
    rememberMe.addEventListener('change', function() {
        if (this.checked && email.value) {
            localStorage.setItem('rememberedEmail', email.value);
        } else {
            localStorage.removeItem('rememberedEmail');
        }
    });
    
    // Carregar e-mail salvo se existir
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
        email.value = savedEmail;
        rememberMe.checked = true;
    }
}

// Inicializar preferências do usuário
document.addEventListener('DOMContentLoaded', saveUserPreferences); 