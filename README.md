# WORLD CUP NEWS - Copa do Mundo de Clubes 2025

Um sistema completo de notícias e acompanhamento da Copa do Mundo de Clubes FIFA 2025, com design moderno e funcionalidades interativas.

## 🏆 Sobre o Projeto

Este projeto é um portal completo para acompanhar a Copa do Mundo de Clubes FIFA 2025, oferecendo:

- **Sistema de Login Seguro**: Autenticação com validação de formulário
- **Notícias em Tempo Real**: Cobertura completa da competição
- **Times Participantes**: Informações detalhadas de todos os clubes
- **Calendário de Jogos**: Cronograma completo da competição
- **Classificação**: Tabelas de todos os grupos
- **Jogos ao Vivo**: Acompanhamento em tempo real
- **Design Responsivo**: Interface moderna e adaptável

## 🚀 Funcionalidades

### 🔐 Sistema de Autenticação
- Login com e-mail e senha
- Validação de formulário em tempo real
- Toggle de visibilidade da senha
- Notificações de sucesso/erro
- Logout seguro
- Persistência de sessão

### 📰 Seção de Notícias
- Notícias em destaque com layout especial
- Lista de últimas notícias
- Categorização por temas
- Efeitos visuais interativos
- Links para leitura completa

### ⚽ Seção de Times
- **32 times participantes** organizados por continente
- Filtros por região geográfica:
  - Europa (8 times)
  - América do Sul (6 times)
  - América do Norte (2 times)
  - África (4 times)
  - Ásia (4 times)
- Estatísticas detalhadas de cada time:
  - Pontos na competição
  - Vitórias, empates e derrotas
  - Gols pró e contra
- Cards interativos com efeitos hover

### 📅 Calendário de Jogos
- **Cronograma completo** de todas as fases:
  - Fase de Grupos (24 jogos)
  - Oitavas de Final (8 jogos)
  - Quartas de Final (4 jogos)
  - Semifinal (2 jogos)
  - Final (1 jogo)
- Filtros por fase da competição
- Informações detalhadas de cada jogo:
  - Times participantes
  - Placar final
  - Data e horário
  - Status do jogo

### 📊 Classificação
- **Tabelas completas** de todos os 8 grupos (A-H)
- Filtros por grupo específico
- Critérios de desempate:
  1. Pontos
  2. Saldo de gols
  3. Gols pró
- Estatísticas detalhadas:
  - Posição
  - Pontos
  - Jogos disputados
  - Vitórias, empates, derrotas
  - Gols pró e contra
  - Saldo de gols

### 🔴 Jogos ao Vivo
- **Acompanhamento em tempo real** de jogos
- Placar atualizado
- Tempo de jogo
- Indicador visual "AO VIVO"
- Próximos jogos agendados
- Efeitos visuais especiais para jogos ao vivo

## 🎨 Design e Interface

### Tema Visual
- **Cores principais**: Preto (#0a0a0a) e Verde (#00FF88)
- **Tipografia**: Inter (Google Fonts)
- **Gradientes**: Efeitos visuais modernos
- **Glassmorphism**: Elementos com transparência e blur

### Responsividade
- **Mobile-first**: Design otimizado para dispositivos móveis
- **Tablet**: Layout adaptado para telas médias
- **Desktop**: Interface completa para telas grandes
- **Breakpoints**: 768px, 1024px

### Animações e Efeitos
- **Entrada suave**: Elementos aparecem com animação
- **Hover effects**: Interações visuais nos elementos
- **Parallax**: Efeito de profundidade no scroll
- **Transições**: Movimentos fluidos entre estados
- **Partículas**: Efeitos de fundo dinâmicos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript ES6+**: Funcionalidades interativas
- **LocalStorage**: Persistência de dados
- **Google Fonts**: Tipografia web
- **SVG**: Ícones vetoriais

## 📁 Estrutura do Projeto

```
projeto git/
├── index.html              # Página de login
├── script.js               # JavaScript do login
├── styles.css              # Estilos do login
├── worldcup-news.html      # Página principal do sistema
├── worldcup-script.js      # JavaScript completo do sistema
├── worldcup-styles.css     # Estilos completos do sistema
└── README.md               # Documentação
```

## 🚀 Como Usar

### 1. Acesso Inicial
1. Abra o arquivo `index.html` no navegador
2. Faça login com qualquer e-mail e senha (sistema de demonstração)
3. Clique em "Entrar" para acessar o sistema

### 2. Navegação
- **Notícias**: Visualize as últimas notícias da competição
- **Times**: Explore todos os times participantes com filtros
- **Calendário**: Veja o cronograma completo de jogos
- **Classificação**: Acompanhe as tabelas de todos os grupos
- **Jogos ao Vivo**: Acompanhe jogos em tempo real

### 3. Funcionalidades Interativas
- **Filtros**: Use os botões de filtro para navegar entre categorias
- **Cards**: Clique nos cards para interagir
- **Hover**: Passe o mouse sobre elementos para ver efeitos
- **Scroll**: Role a página para ver animações

## 📊 Dados da Competição

### Times Participantes (32)
- **Europa**: Manchester City, Real Madrid, Bayern Munich, PSG, Inter Milan, Porto, Ajax, Benfica
- **América do Sul**: Flamengo, Palmeiras, River Plate, Boca Juniors, Peñarol, Colo-Colo
- **América do Norte**: Club América, LAFC
- **África**: Al Ahly, Wydad Casablanca, Mamelodi Sundowns, Esperance
- **Ásia**: Urawa Red Diamonds, Al Hilal, Jeonbuk Hyundai, Melbourne City

### Estrutura da Competição
- **Fase de Grupos**: 8 grupos com 4 times cada
- **Mata-mata**: Oitavas, quartas, semifinal e final
- **Total de Jogos**: 64 partidas

## 🎯 Características Técnicas

### Performance
- **Carregamento rápido**: Otimizado para velocidade
- **Animações suaves**: 60fps em dispositivos modernos
- **Responsivo**: Adaptação automática ao dispositivo

### Acessibilidade
- **Navegação por teclado**: Suporte completo
- **Contraste adequado**: Legibilidade garantida
- **Semântica HTML**: Estrutura acessível

### Compatibilidade
- **Navegadores modernos**: Chrome, Firefox, Safari, Edge
- **Dispositivos móveis**: iOS e Android
- **Versões antigas**: Fallbacks implementados

## 🔧 Personalização

### Cores
As cores podem ser alteradas editando as variáveis CSS:
```css
--primary-color: #00FF88;
--background-color: #0a0a0a;
--text-color: #ffffff;
```

### Dados
Os dados dos times e jogos estão no arquivo `worldcup-script.js` e podem ser facilmente atualizados.

## 📱 Funcionalidades Mobile

- **Touch-friendly**: Botões e elementos otimizados para toque
- **Swipe gestures**: Navegação por gestos
- **Viewport responsivo**: Adaptação automática
- **Performance otimizada**: Carregamento rápido em 3G/4G

## 🎨 Efeitos Visuais

### Animações CSS
- **@keyframes**: Animações personalizadas
- **Transitions**: Transições suaves
- **Transforms**: Transformações 3D
- **Filters**: Efeitos visuais avançados

### JavaScript
- **Intersection Observer**: Animações no scroll
- **RequestAnimationFrame**: Animações otimizadas
- **Event listeners**: Interações responsivas

## 🔒 Segurança

- **Validação client-side**: Verificação de formulários
- **Sanitização**: Prevenção de XSS
- **LocalStorage seguro**: Dados protegidos

## 📈 Próximas Atualizações

- [ ] Integração com APIs reais de dados esportivos
- [ ] Sistema de notificações push
- [ ] Modo escuro/claro
- [ ] PWA (Progressive Web App)
- [ ] Chat em tempo real
- [ ] Apostas virtuais
- [ ] Galeria de fotos
- [ ] Vídeos dos jogos

## 🤝 Contribuição

Este é um projeto de demonstração criado para mostrar as capacidades de desenvolvimento web moderno. Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do e-mail: contato@worldcupnews.com

---

**Desenvolvido com ❤️ para os amantes do futebol mundial** 