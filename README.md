# Cajuzinho — Distribuidora Oficial Papapá

Sistema web completo, funcional, moderno e focado em vendas desenvolvido especialmente para a **Cajuzinho**.

---

## 🌟 O que foi construído

### 1. Loja Pública (Vendas & Conversão)
- **Design Futurista & Acolhedor**: Paleta com Azul Papapá (#0284c7), branco puro, toques quentes e acabamento moderno (glassmorphism sutil).
- **Hero Comercial**: Apresentação da marca, slogan *"Papapá mais perto de você"* e CTAs para compra e revenda.
- **Catálogo Completo com 12 Itens a Pronta Entrega**:
  - Destaque com selo **"⚡ Pronta Entrega"** (estoque inicial de 11 unidades cada).
  - Papinhas a partir de R$ 10,99.
  - Demais itens exibidos com selo **"📦 Sob Encomenda"** (pausados para compra direta, com botão direto para encomendar via WhatsApp).
- **Kits Promocionais Cajuzinho**: Seção exclusiva com cálculo dinâmico de economia, itens inclusos e adição em 1 clique.
- **Modal de Detalhes com Cross-Selling**: "Combine com" e "Você também pode gostar" para elevar o ticket médio.
- **Carrinho Lateral Reativo**: Cálculo de subtotal, barra de progresso para Frete Grátis e validação de cupons (ex: `CAJU5`).
- **Novo Checkout com Pagamento Inteligente**:
  - **📱 Pagamento via Pix**: Modal dedicado com QR Code oficial de alta resolução, botão de 1 clique para copiar o código Pix Copia e Cola, chave e-mail alternativa (`valinsrp@gmail.com`) e botão direto para envio do comprovante no WhatsApp (`19 98118-9816`).
  - **💳 Cartão de Débito / Crédito na Entrega**: Informa que o motoboy levará a maquininha, com aviso transparente de consulta da taxa da máquina via WhatsApp.
  - **📦 Envio para Outras Cidades/Estados**: Opção de entrega via Correios (PAC/Sedex) com cotação direta pelo WhatsApp com base no CEP.
- **Área B2B para Comerciantes**: Landing e formulário de captação de revendedores conectado diretamente ao CRM administrativo.

### 2. Área Administrativa `/adm`
- **Login Seguro**:
  - **Usuário:** `marcelavalin78@gmail.com`
  - **Senha:** `Musica20@`
  - Validação criptográfica com SHA-256 e proteção de rotas.
- **Dashboard Executivo**: Vendas totais, ticket médio, produtos vendidos, alertas de estoque e gráficos visuais (evolução diária e participação por categoria).
- **Gestor Rápido de Preços, Vitrine & Pronta Entrega**:
  - Tabela com switch **Pronta Entrega** (Sim / Sob Encomenda) para ativar ou pausar qualquer produto com 1 clique.
  - Edição inline de preços por unidade (Un) e estoque com salvamento instantâneo.
- **Montador Manual de Kits**: Seleção de produtos, cálculo automático do valor original, definição do percentual de desconto e publicação direta na loja.
- **Gestão de Estoque, Perdas e Restock**: Registro de movimentações, radar de urgência e log de perdas com cálculo financeiro.
- **Gestão de Pedidos e Cupons**: Mudança de status de pedidos em tempo real e criação de novos cupons.
- **CRM de Leads & Base de Clientes**: Acompanhamento do funil de vendas para revendedores e clientes recorrentes.

---

## 🚀 Como Executar

### Opção 1: Abrir diretamente no Navegador
Basta dar um duplo clique no arquivo `index.html` na pasta do projeto (`c:\Users\caio\Desktop\site papapa\index.html`). O sistema funcionará de imediato com persistência no LocalStorage!

### Opção 2: Servidor Local
Abra o terminal nesta pasta e execute:
```bash
node server.js
```
E acesse `http://localhost:8080` no seu navegador.
