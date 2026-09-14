# Cajuzinho — Distribuidora Oficial Papapá

Sistema web completo, funcional, moderno e focado em vendas desenvolvido especialmente para a **Cajuzinho**.

---

## 🌟 O que foi construído

### 1. Loja Pública (Vendas & Conversão)
- **Design Futurista & Acolhedor**: Paleta com Azul Papapá (#0284c7), branco puro, toques quentes e acabamento moderno (glassmorphism sutil).
- **Hero Comercial**: Apresentação da marca, slogan *"Papapá mais perto de você"* e CTAs para compra e revenda.
- **Catálogo Completo com Fotos Reais**: Todas as fotos oficiais extraídas do catálogo da Papapá em alta resolução.
- **Filtros Inteligentes**: Por categorias (Papinhas, Snacks, Mingaus, Massas, Bebidas, Acessórios) e faixas etárias (+6m, +7m, +8m, +10m, +12m).
- **Kits Promocionais Cajuzinho**: Seção exclusiva com cálculo dinâmico de economia, itens inclusos e adição em 1 clique.
- **Modal de Detalhes com Cross-Selling**: "Combine com" e "Você também pode gostar" para elevar o ticket médio.
- **Carrinho Lateral Reativo**: Cálculo de subtotal, barra de progresso para Frete Grátis e validação de cupons (ex: `CAJU5`).
- **Checkout Integrado ao WhatsApp**: Geração automática da mensagem completa com cliente, itens, subtotal, cupom, frete e endereço formatado.
- **Área B2B para Comerciantes**: Landing e formulário de captação de revendedores conectado diretamente ao CRM administrativo.

### 2. Área Administrativa `/adm`
- **Login Seguro**:
  - **Usuário:** `marcelavalin78@gmail.com`
  - **Senha:** `Musica20@`
  - Validação criptográfica com SHA-256 e proteção de rotas.
- **Dashboard Executivo**: Vendas totais, ticket médio, produtos vendidos, alertas de estoque e gráficos visuais (evolução diária e participação por categoria).
- **Insights da Cajuzinho (Inteligência Comercial)**: Motor de heurísticas de negócio que identifica o produto carro-chefe, oportunidades de novos kits, produtos com baixo giro e riscos de ruptura de estoque.
- **Gestor Rápido de Preços & Vitrine**: Tabela com edição inline de preços por unidade (Un), reatribuição de categorias ("papinhas com papinhas, mingau com mingau") e chave liga/desliga de produtos na vitrine com salvamento instantâneo.
- **Montador Manual de Kits**: Seleção de produtos, cálculo automático do valor original, definição do percentual de desconto e publicação direta na loja.
- **Gestão de Estoque, Perdas e Restock**: Registro de movimentações, radar de urgência (Urgente, Repor em breve, Adequado) e log de perdas com cálculo financeiro.
- **Gestão de Pedidos e Cupons**: Mudança de status de pedidos em tempo real e criação de novos cupons.
- **CRM de Leads & Base de Clientes**: Acompanhamento do funil de vendas para revendedores e clientes recorrentes.

---

## 🚀 Como Executar

### Opção 1: Abrir diretamente no Navegador
Basta dar um duplo clique no arquivo `index.html` na pasta do projeto (`c:\Users\caio\Desktop\site papapa\index.html`). O sistema funcionará de imediato com persistência no LocalStorage!

### Opção 2: Servidor Local
Abra o terminal nesta pasta e execute:
```bash
npm start
```
E acesse `http://localhost:3000` no seu navegador.
