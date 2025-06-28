# 🏆 DEMO - Copa do Mundo de Clubes FIFA 2025

## 📋 Visão Geral
Este é um sistema completo de informações sobre a **Copa do Mundo de Clubes FIFA 2025**, com dados reais dos 32 clubes participantes, classificação atualizada, calendário completo e chaveamento do mata-mata.

## 🎯 Funcionalidades Principais

### 🔐 Sistema de Login
- **Página inicial**: `index.html`
- **Design**: Menu preto com detalhes verdes e letras brancas
- **Validação**: Formulário com validação de campos obrigatórios
- **Segurança**: Toggle para mostrar/ocultar senha
- **Feedback**: Notificações visuais para sucesso/erro

### 📰 Página de Notícias: `worldcup-news.html`
Após o login bem-sucedido, o usuário é redirecionado para a página principal com **4 abas funcionais**:

#### 1️⃣ **ABA TIMES** 
- **32 clubes reais** organizados em 8 grupos (A-H)
- **Informações completas**: Nome, país, escudo e grupo
- **Layout responsivo** com cards visuais
- **Filtros por grupo** disponíveis

**Times Participantes Reais:**
- **Grupo A**: Palmeiras (BRA), Inter Miami (EUA), Porto (POR), Al Ahly (EGY)
- **Grupo B**: PSG (FRA), Botafogo (BRA), Atlético Madrid (ESP), Seattle Sounders (EUA)
- **Grupo C**: Benfica (POR), Bayern (ALE), Boca Juniors (ARG), Auckland City (NZL)
- **Grupo D**: Flamengo (BRA), Chelsea (ING), Espérance (TUN), LAFC (EUA)
- **Grupo E**: Inter (ITA), Monterrey (MEX), River Plate (ARG), Urawa Reds (JAP)
- **Grupo F**: Borussia (ALE), Fluminense (BRA), Sundowns (AFS), Ulsan Hyundai (COR)
- **Grupo G**: Manchester City (ING), Juventus (ITA), Al Ain (EAU), Wydad AC (MAR)
- **Grupo H**: Real Madrid (ESP), Al-Hilal (ARA), RB Salzburg (AUT), Pachuca (MEX)

#### 2️⃣ **ABA CLASSIFICAÇÃO**
- **Dados reais** da fase de grupos
- **Colunas completas**: PTS, PJ, VIT, E, DER, GM, GC, SG
- **Últimos 5 jogos** com bolinhas coloridas:
  - 🟢 Verde = Vitória
  - ⚫ Cinza = Empate  
  - 🔴 Vermelho = Derrota
- **Classificação atualizada** por grupo

#### 3️⃣ **ABA CALENDÁRIO**
- **3 rodadas completas** da fase de grupos
- **48 jogos** com datas e placares reais
- **Estrutura correta**: 8 grupos × 4 times × 3 jogos = 24 jogos por rodada
- **Filtros por rodada** disponíveis
- **Layout organizado** por fases

**Rodadas Disponíveis:**
- **Rodada 1**: 15/06/2025 (16 jogos)
- **Rodada 2**: 18/06/2025 (16 jogos)  
- **Rodada 3**: 21/06/2025 (16 jogos)

#### 4️⃣ **ABA MATA-MATA**
- **Chaveamento completo** a partir das Oitavas de Final
- **8 jogos das Oitavas** com datas e horários reais
- **Estrutura de árvore** para Quartas, Semis e Final
- **Campos "A Confirmar"** para fases futuras
- **Layout visual** com linhas conectando as fases

**Fases do Mata-Mata:**
- **Oitavas de Final**: 28/06 a 01/07/2025
- **Quartas de Final**: 04-05/07/2025
- **Semifinais**: 08/07/2025
- **Final**: 12/07/2025

## 🎨 Design e UX

### **Tema Visual**
- **Cores**: Preto, verde (#00ff88) e branco
- **Layout**: Moderno e responsivo
- **Tipografia**: Clean e legível
- **Efeitos**: Hover, transições suaves

### **Responsividade**
- **Desktop**: Layout completo com todas as informações
- **Tablet**: Adaptação automática dos elementos
- **Mobile**: Versão otimizada com navegação simplificada

### **Interatividade**
- **Abas funcionais** com transições suaves
- **Cards com hover effects**
- **Filtros dinâmicos** por grupo/rodada
- **Feedback visual** em todas as ações

## 🚀 Como Usar

### **1. Acesso Inicial**
```bash
# Abra o arquivo index.html no navegador
# Ou use um servidor local:
python -m http.server 8000
# Acesse: http://localhost:8000
```

### **2. Login**
- **Usuário**: Qualquer valor (campo obrigatório)
- **Senha**: Qualquer valor (campo obrigatório)
- **Clique**: "Entrar" para acessar o sistema

### **3. Navegação**
- **Clique nas abas** para alternar entre seções
- **Use os filtros** para encontrar informações específicas
- **Explore os dados** de cada grupo/time

### **4. Funcionalidades Específicas**

#### **Aba Times**
- Visualize todos os 32 clubes participantes
- Informações organizadas por grupo
- Design com escudos e cores dos times

#### **Aba Classificação**  
- Acompanhe a pontuação real dos times
- Veja estatísticas completas (vitórias, empates, derrotas)
- Últimos resultados com código de cores

#### **Aba Calendário**
- Todos os jogos da fase de grupos
- Placares reais e datas específicas
- Organização por rodadas

#### **Aba Mata-Mata**
- Chaveamento completo do torneio
- Datas e horários das eliminatórias
- Estrutura visual da competição

## 📊 Dados Reais Incluídos

### **Classificação Atualizada**
- **Grupo A**: Palmeiras e Inter Miami lideram com 5 pontos
- **Grupo B**: PSG, Botafogo e Atlético Madrid com 6 pontos
- **Grupo C**: Benfica lidera com 7 pontos, Bayern em 2º
- **Grupo D**: Flamengo lidera com 7 pontos
- **Grupo E**: Inter lidera com 7 pontos
- **Grupo F**: Borussia lidera com 7 pontos
- **Grupo G**: Manchester City lidera com 9 pontos
- **Grupo H**: Real Madrid lidera com 7 pontos

### **Jogos Realizados**
- **Rodada 1**: 15/06/2025 - 16 jogos
- **Rodada 2**: 18/06/2025 - 16 jogos  
- **Rodada 3**: 21/06/2025 - 16 jogos

### **Mata-Mata Confirmado**
- **Oitavas**: 8 confrontos definidos
- **Quartas**: Aguardando resultados
- **Semis**: Aguardando resultados
- **Final**: 12/07/2025

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos e responsivos
- **JavaScript**: Funcionalidades interativas
- **Design**: Interface esportiva profissional

## 📱 Compatibilidade

- ✅ **Chrome/Edge**: Funcionamento completo
- ✅ **Firefox**: Funcionamento completo  
- ✅ **Safari**: Funcionamento completo
- ✅ **Mobile**: Responsivo em todos os dispositivos

## 🎯 Objetivo

Este sistema oferece uma **experiência completa e realista** para acompanhar a Copa do Mundo de Clubes FIFA 2025, com dados atualizados, interface moderna e funcionalidades interativas que simulam um portal esportivo profissional.

---

**🏆 Sistema atualizado com dados reais da Copa do Mundo de Clubes FIFA 2025!** 