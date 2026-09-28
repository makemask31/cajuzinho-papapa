-- ==========================================
-- SCHEMA BANCO DE DADOS SUPABASE: CAJUZINHO PAPAPÁ
-- Projeto: qqxzlbjxgytixnjqfrhd
-- Gerado automaticamente
-- ==========================================

-- 1. TABELA DE PRODUTOS
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  age TEXT NOT NULL,
  price NUMERIC(10,2),
  cost_price NUMERIC(10,2),
  stock INTEGER NOT NULL DEFAULT 0,
  min_stock INTEGER NOT NULL DEFAULT 10,
  image TEXT,
  sku TEXT,
  ean TEXT,
  code TEXT,
  organic BOOLEAN DEFAULT false,
  ready_delivery BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
  sales_count INTEGER DEFAULT 0,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. TABELA DE KITS
CREATE TABLE IF NOT EXISTS public.kits (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  badge TEXT,
  description TEXT,
  image TEXT,
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  discount_percent NUMERIC(5,2) DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TABELA DE CUPONS
CREATE TABLE IF NOT EXISTS public.coupons (
  code TEXT PRIMARY KEY,
  type TEXT NOT NULL, -- 'percent' ou 'fixed'
  value NUMERIC(10,2) NOT NULL,
  min_order_value NUMERIC(10,2) DEFAULT 0,
  active BOOLEAN DEFAULT true,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. TABELA DE PEDIDOS
CREATE TABLE IF NOT EXISTS public.orders (
  id TEXT PRIMARY KEY,
  date TEXT,
  customer TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  city TEXT,
  address TEXT,
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  subtotal NUMERIC(10,2) NOT NULL DEFAULT 0,
  discount NUMERIC(10,2) NOT NULL DEFAULT 0,
  coupon TEXT,
  shipping NUMERIC(10,2) NOT NULL DEFAULT 0,
  total NUMERIC(10,2) NOT NULL DEFAULT 0,
  delivery_type TEXT NOT NULL,
  payment_method TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'NOVO',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. TABELA DE LEADS REVENDEDORES B2B
CREATE TABLE IF NOT EXISTS public.reseller_leads (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  city TEXT NOT NULL,
  type TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'NOVO',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. TABELA DE CONFIGURAÇÕES GERAIS
CREATE TABLE IF NOT EXISTS public.store_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- HABILITAR ROW LEVEL SECURITY (RLS)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.kits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reseller_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_settings ENABLE ROW LEVEL SECURITY;

-- POLÍTICAS DE ACESSO PÚBLICO (ANON)
-- Leitura pública para vitrine
CREATE POLICY "Public read products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Public read kits" ON public.kits FOR SELECT USING (true);
CREATE POLICY "Public read coupons" ON public.coupons FOR SELECT USING (true);
CREATE POLICY "Public read settings" ON public.store_settings FOR SELECT USING (true);

-- Permissões de escrita do cliente público (fazer pedido e cadastrar lead)
CREATE POLICY "Public insert orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert leads" ON public.reseller_leads FOR INSERT WITH CHECK (true);

-- Permissões de gestão (admin/loja)
CREATE POLICY "Allow all on products" ON public.products FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on kits" ON public.kits FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on coupons" ON public.coupons FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on orders" ON public.orders FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on leads" ON public.reseller_leads FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on settings" ON public.store_settings FOR ALL USING (true) WITH CHECK (true);

-- ==========================================
-- DADOS INICIAIS (SEED)
-- ==========================================

-- SEED: PRODUTOS
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_maca_ameixa', 'Papinha Orgânica Maçã e Ameixa 100g', 'Papinhas', 'Papinhas de Fruta', '+6m', 10.99, 4.5, 11, 15, 'images/products/papinha_maca_ameixa.jpg', 'PAP-ORG-01', '7898994908722', '17898994908729', true, true, true, true, 42, '100% fruta orgânica selecionada, sem adição de açúcar, corantes ou conservantes. Prático formato pouch que não precisa de refrigeração antes de abrir.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_banana_mirtilo_quinoa', 'Papinha Orgânica Banana, Mirtilo e Quinoa 100g', 'Papinhas', 'Papinhas de Fruta', '+6m', 10.99, 4.5, 11, 15, 'images/products/papinha_banana_mirtilo_quinoa.jpg', 'PAP-ORG-02', '7898994908739', '17898994908736', true, true, true, true, 68, 'Combinação super nutritiva de banana, mirtilo e grãos ancestrais de quinoa orgânica. Sabor doce natural que os pequenos amam.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_manga', 'Papinha Orgânica Manga 100g', 'Papinhas', 'Papinhas de Fruta', '+6m', 10.99, 4.5, 11, 15, 'images/products/papinha_manga.jpg', 'PAP-ORG-03', '7898994908715', '17898994908712', true, true, true, false, 35, 'Pura manga brasileira orgânica cozida no ponto certo. Textura aveludada ideal para os primeiros momentos da introdução alimentar.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_morango_maca', 'Papinha Orgânica Morango e Maçã 100g', 'Papinhas', 'Papinhas de Fruta', '+6m', NULL, NULL, 0, 12, 'images/products/papinha_morango_maca.jpg', 'PAP-ORG-04', '7898969895309', '5306', true, false, true, false, 14, 'Deliciosa combinação suave de morangos selecionados e maçãs frescas. Sem conservantes e sem adição de açúcares.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_maca_cenoura_batatadoce', 'Papinha Orgânica Maçã, Cenoura e Batata-Doce 100g', 'Papinhas', 'Papinhas de Fruta', '+6m', NULL, NULL, 0, 10, 'images/products/papinha_maca_cenoura_batatadoce.jpg', 'PAP-ORG-05', '7898994908746', '27898994908757', true, false, true, false, 18, 'Equilíbrio perfeito entre legumes doces e fruta da época. Aquece o paladar dos pequenos com vitaminas e fibras naturais.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_pera_espinafre_abobrinha', 'Papinha Orgânica Pera, Espinafre e Abobrinha 100g', 'Papinhas', 'Papinhas de Fruta', '+6m', NULL, NULL, 0, 10, 'images/products/papinha_pera_espinafre_abobrinha.jpg', 'PAP-ORG-06', '7898994908753', '17898994908750', true, false, true, false, 12, 'Introdução consciente aos vegetais verdes combinados à suavidade refrescante da pera orgânica.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_carne_arroz_legumes', 'Papinha Carne, Arroz e Legumes 120g', 'Papinhas', 'Papinhas Salgadas', '+6m', 10.99, 6.8, 11, 15, 'images/products/papinha_carne_arroz_legumes.jpg', 'PAP-CAR-01', '7898969895316', '5313', false, true, true, true, 54, 'Refeição completa pronta para consumo contendo os 4 principais grupos alimentares (proteínas, cereais, grãos e vegetais). Textura cremosa que estimula a mastigação.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_frango_grao_vegetais', 'Papinha Frango, Grão-de-Bico e Vegetais 120g', 'Papinhas', 'Papinhas Salgadas', '+6m', 10.99, 6.8, 11, 15, 'images/products/papinha_frango_grao_vegetais.jpg', 'PAP-CAR-02', '7898969895323', '5320', false, true, true, true, 58, 'Clean label completo: carne de frango de qualidade, grão-de-bico macio e vegetais frescos. Sem glúten, sem lactose e sem adição de sal.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_yoguzinho_amarelas', 'Yoguzinho Frutas Amarelas e Banana 100g', 'Papinhas', 'Yoguzinho', '+12m', 10.99, 4.8, 11, 12, 'images/products/yoguzinho_frutas_amarelas.png', 'PAP-YOG-01', '7898969895569', '5566', false, true, true, true, 47, 'Inovação Papapá: iogurte pasteurizado com frutas amarelas e banana que dispensa geladeira antes de aberto! Apenas 6 ingredientes 100% naturais.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_yoguzinho_vermelhas', 'Yoguzinho Frutas Vermelhas e Banana 100g', 'Papinhas', 'Yoguzinho', '+12m', 6.24, 4.8, 0, 12, 'images/products/yoguzinho_frutas_vermelhas.png', 'PAP-YOG-02', '7898969895576', '5573', false, false, true, true, 49, 'Textura cremosa inconfundível com morangos, amoras e banana fresca. Sem corantes artificiais e sem adição de açúcar.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_sopinha_carne_mandioquinha', 'Sopinha Carne, Mandioquinha e Legumes 240g (2x120g)', 'Papinhas', 'Sopinhas em Bowl', '+6m', NULL, NULL, 0, 8, 'images/products/sopinha_carne_mandioquinha.jpg', 'PAP-SOP-01', '7898969895620', '5627', false, false, true, false, 9, 'Embalagem fracionada moderna em 2 bowls de 120g BPA-free que vão direto ao micro-ondas. Praticidade absoluta para almoço e jantar.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_sopinha_feijao_carne', 'Sopinha Feijão, Carne e Legumes 240g (2x120g)', 'Papinhas', 'Sopinhas em Bowl', '+6m', NULL, NULL, 0, 8, 'images/products/sopinha_feijao_carne.jpg', 'PAP-SOP-02', '7898969895606', '5606', false, false, true, false, 11, 'O sabor clássico da comidinha caseira brasileira em receita balanceada para bebês. Feijão caldoso, legumes e carne macia com pedacinhos suaves.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_sopinha_frango_arroz', 'Sopinha Frango, Arroz e Legumes 240g (2x120g)', 'Papinhas', 'Sopinhas em Bowl', '+6m', NULL, NULL, 0, 8, 'images/products/sopinha_frango_arroz.jpg', 'PAP-SOP-03', '7898969895613', '5610', false, false, true, false, 10, 'Receita leve e altamente digestiva com frango desfiado fino, arroz e seleção de legumes da horta.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_sopinha_carne_macarrao', 'Sopinha Carne, Macarrão e Legumes 240g (2x120g)', 'Papinhas', 'Sopinhas em Bowl', '+12m', NULL, NULL, 0, 8, 'images/products/sopinha_carne_macarrao.jpg', 'PAP-SOP-04', '7898969895637', '5634', false, false, true, false, 8, 'Perfeita para crianças a partir de 1 ano que já apreciam pedacinhos maiores e macarrãozinho macio com molho nutritivo.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_lachef_caseirinho', 'La Chef Caseirinho Arroz, Feijão, Carne e Legumes 180g', 'Papinhas', 'La Chef', '+8m', NULL, NULL, 0, 10, 'images/products/lachef_caseirinho_arroz_feijao.jpg', 'PAP-CHEF-01', '7898969895255', '5252', true, false, true, false, 15, 'Desenvolvida pela chef Luana Wojciechowski: pote de vidro reutilizável com ingredientes 100% orgânicos e azeite de oliva extra virgem.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_lachef_risotinho', 'La Chef Risotinho Arroz, Quinoa, Frango e Legumes 180g', 'Papinhas', 'La Chef', '+8m', NULL, NULL, 0, 10, 'images/products/lachef_risotinho_arroz_quinoa.png', 'PAP-CHEF-02', '7898969895262', '5269', true, false, true, false, 17, 'Experiência gastronômica para os bebês com textura cremosa de quinoa e frango temperado naturalmente com ervas frescas.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_lachef_sopinha_lentilha', 'La Chef Sopinha Lentilha, Carne e Legumes 180g', 'Papinhas', 'La Chef', '+8m', NULL, NULL, 0, 8, 'images/products/lachef_sopinha_lentilha.png', 'PAP-CHEF-03', '7898969895279', '5276', true, false, true, false, 13, 'Rica em ferro e fibras da lentilha orgânica com carne macia e cenoura fresca cozida lentamente.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_biscotti_banana_cacau', 'Biscotti Banana e Cacau 60g', 'Snacks', 'Biscotti', '+10m', 8.99, 6.9, 11, 15, 'images/products/biscotti_banana_cacau.jpg', 'PAP-BIS-01', '7898969895361', '5368', false, true, true, true, 62, 'Biscoito infantil anatômico adoçado apenas com o açúcar natural das frutas. Feito com cacau 100% puro e sem aromatizantes artificiais.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_biscotti_goiaba', 'Biscotti com Goiaba 60g', 'Snacks', 'Biscotti', '+10m', 8.99, 6.9, 11, 15, 'images/products/biscotti_goiaba.jpg', 'PAP-BIS-02', '7898969895590', '5597', false, true, true, true, 51, 'Adoçado naturalmente com polpa de goiaba brasileira. Textura macia que não machuca a boquinha e agrada inclusive aos pais.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_biscotti_laranja_cenoura', 'Biscotti Laranja e Cenoura 60g', 'Snacks', 'Biscotti', '+10m', NULL, NULL, 0, 10, 'images/products/biscotti_laranja_cenoura.jpg', 'PAP-BIS-03', '7898969895378', '5375', false, false, true, false, 20, 'Toque cítrico suave da laranja natural associado à cenoura doce. Perfeito para o lanche da tarde ou na lancheira.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_biscotti_maca_canela', 'Biscotti Maçã e Canela 60g', 'Snacks', 'Biscotti', '+10m', NULL, NULL, 0, 10, 'images/products/biscotti_maca_canela.jpg', 'PAP-BIS-04', '7898969895354', '5351', false, false, true, false, 22, 'Aroma e sabor aconchegante da clássica combinação de maçã desidratada com uma pitada sutil de canela pura.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_biscotti_maracuja_camomila', 'Biscotti Maracujá e Camomila 60g', 'Snacks', 'Biscotti', '+10m', NULL, NULL, 0, 10, 'images/products/biscotti_maracuja_camomila.jpg', 'PAP-BIS-05', '7898969895583', '5580', false, false, true, false, 16, 'Sabor relaxante e delicado com extrato botânico de camomila e maracujá doce. Excelente opção para o pré-soneca.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_denticao_abobora_maca', 'Biscoitinho Dentição Abóbora e Maçã 36g (9 sachês)', 'Snacks', 'Dentição', '+7m', NULL, NULL, 0, 12, 'images/products/denticao_abobora_maca.jpg', 'PAP-DEN-01', '7898994908777', '8774', false, false, true, true, 39, 'Projetado especialmente para aliviar a coceira na gengiva dos dentes nascendo. Textura que dissolve facilmente em contato com a saliva, sem risco de engasgo.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_denticao_vegetais', 'Biscoitinho Dentição Vegetais 36g (9 sachês)', 'Snacks', 'Dentição', '+7m', NULL, NULL, 0, 12, 'images/products/denticao_vegetais.jpg', 'PAP-DEN-02', '7898994908760', '8767', false, false, true, false, 31, 'Farinha de arroz e vegetais naturais em formato achatado que as mãozinhas conseguem segurar com autonomia e segurança.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_palitinho_tomate_manjericao', 'Palitinhos Tomate e Manjericão Orgânico 20g', 'Snacks', 'Palitinhos', '+8m', NULL, NULL, 0, 12, 'images/products/palitinho_tomate_manjericao.jpg', 'PAP-PAL-01', '7898969895064', '5061', true, false, true, true, 44, 'Grande vencedor do Prêmio Naturaltech Award 2024! Assado, aerado e crocante, à base de farinha de arroz, tomate e orégano/manjericão orgânico.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_palitinho_cenoura_grao', 'Palitinhos Cenoura e Grão-de-Bico Orgânico 20g', 'Snacks', 'Palitinhos', '+8m', NULL, NULL, 0, 10, 'images/products/palitinho_cenoura_grao.jpg', 'PAP-PAL-02', '7898969895071', '5078', true, false, true, false, 29, 'Fonte natural de proteínas vegetais e fibras. Snack assado sem adição de sal e livre de corantes artificiais.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_palitinho_beterraba_grao', 'Palitinhos Beterraba e Grão-de-Bico Orgânico 20g', 'Snacks', 'Palitinhos', '+8m', NULL, NULL, 0, 10, 'images/products/palitinho_beterraba_grao.jpg', 'PAP-PAL-03', '7898969895088', '5085', true, false, true, false, 23, 'Cor vibrante vinda diretamente da beterraba pura desidratada. Estimula a curiosidade visual e a alimentação saudável dos pequenos.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_salgadinho_churrasco', 'Salgadinho Orgânico Churrasco Era Uma Vez 40g', 'Snacks', 'Salgadinhos Era Uma Vez', '+12m', 7.65, 5.6, 11, 10, 'images/products/era_uma_vez_line.png', 'PAP-EUV-01', '7898969895673', '5673', true, true, true, true, 37, '77% de ingredientes integrais orgânicos assados. O lanche irresistível para crianças maiores, com sabor churrasco natural sem conservantes químicos.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_salgadinho_queijo', 'Salgadinho Orgânico Queijo Era Uma Vez 40g', 'Snacks', 'Salgadinhos Era Uma Vez', '+12m', 7.65, 5.6, 11, 10, 'images/products/era_uma_vez_line.png', 'PAP-EUV-02', '7898969895670', '5670', true, true, true, false, 33, 'Crocante e levinho com queijo natural ralado. Muito mais saudável que qualquer salgadinho industrializado convencional.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_bebida_morango', 'Bebida de Morango Papapá Era Uma Vez 200ml', 'Bebidas', 'Bebidas Infantis', '+12m', 4.95, 3.5, 11, 12, 'images/products/era_uma_vez_line.png', 'PAP-BEB-01', '7898969895682', '5682', false, true, true, true, 46, 'Feito com suco natural de frutas e água de coco refrescante. Sem adição de açúcares ou corantes.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_bebida_chocolate', 'Bebida Láctea de Chocolate Era Uma Vez 200ml', 'Bebidas', 'Bebidas Lácteas', '+12m', 5.94, 4.2, 11, 12, 'images/products/era_uma_vez_line.png', 'PAP-BEB-02', '7898969895685', '5685', false, true, true, true, 52, 'Bebida láctea UHT feita com cacau de verdade e zero lactose. Deliciosa para a lancheira escolar com nutrição de confiança.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_papapasta_elbow', 'PapaPasta Mini Elbow com Quinoa 200g', 'Massas', 'PapaPasta', '+8m', NULL, NULL, 0, 10, 'images/products/papapasta_mini_elbow.jpg', 'PAP-PAS-01', '7898969895290', '5290', false, false, true, false, 19, 'A primeira linha de macarrão feita para bebês no Brasil! Formato reduzido seguro, tempo de preparo de apenas 3 minutos com farinha enriquecida com quinoa.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_papapasta_fusilli', 'PapaPasta Mini Fusilli Tricolori com Vegetais 200g', 'Massas', 'PapaPasta', '+8m', NULL, NULL, 0, 10, 'images/products/papapasta_mini_fusilli.jpg', 'PAP-PAS-02', '7898969895283', '5283', false, false, true, false, 21, 'Colorido naturalmente com tomate e espinafre desidratados. Sem sal adicionado e testado rigorosamente para alimentação infantil.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_cereal_multicereais_170g', 'Cereal Infantil Multicereais 170g (Sem Açúcar)', 'Cereais', 'Mingaus & Cereais', '+6m', NULL, NULL, 0, 10, 'images/products/cereal_multicereais_170g.jpg', 'PAP-CER-01', '7898969895422', '5429', false, false, true, true, 34, 'Preparo instantâneo: 5 cereais nobres (arroz, milho, cevada, quinoa e aveia). Fonte de cálcio, magnésio e fósforo, ideal para mingau nutritivo.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_cereal_aveia_morango_170g', 'Cereal Infantil Aveia e Morango 170g (Sem Açúcar)', 'Cereais', 'Mingaus & Cereais', '+6m', NULL, NULL, 0, 10, 'images/products/cereal_aveia_morango_170g.jpg', 'PAP-CER-02', '7898969895408', '5402', false, false, true, false, 28, '91% de aveia integral com pedacinhos de morango de verdade. Textura macia que ajuda no desenvolvimento da deglutição.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_cereal_aveia_banana_ameixa_170g', 'Cereal Infantil Aveia, Banana e Ameixa 170g', 'Cereais', 'Mingaus & Cereais', '+6m', NULL, NULL, 0, 10, 'images/products/cereal_aveia_banana_ameixa_170g.jpg', 'PAP-CER-03', '7898969895415', '5419', false, false, true, false, 25, 'Favorece o trânsito intestinal dos pequenos com aveia integral e ameixa selecionada. Sem açúcares refinados.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_cereal_multicereais_500g', 'Cereal Infantil Multicereais Econômica 500g', 'Cereais', 'Mingaus & Cereais', '+6m', NULL, NULL, 0, 8, 'images/products/cereal_multicereais_500g.jpg', 'PAP-CER-04', '7898969895392', '5399', false, false, true, false, 19, 'Versão econômica familiar de 500g para maior rendimento e praticidade no dia a dia da casa.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_acessorio_babador', 'Babador de Silicone Infantil com Bolso Coletor', 'Acessórios', 'Silicone', '+6m', NULL, NULL, 0, 6, 'images/products/acessorio_babador.jpg', 'PAP-ACE-01', '7898969895740', '5740', false, false, true, true, 30, 'Silicone macio com botões reguláveis e bolso profundo que apara restos de comida. Lavável em segundos ou na lava-louças.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_acessorio_pratinho', 'Pratinho Infantil com Ventosa e 3 Divisórias', 'Acessórios', 'Silicone', '+6m', NULL, NULL, 0, 6, 'images/products/acessorio_pratinho.jpg', 'PAP-ACE-02', '7898969895689', '5689', false, false, true, false, 22, 'Ventosa de alta sucção que fixa na mesa e evita quedas. Três divisórias ideais para estimular a autonomia do método BLW.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_acessorio_bowl', 'Bowl de Silicone com Ventosa Anti-Queda', 'Acessórios', 'Silicone', '+6m', NULL, NULL, 0, 6, 'images/products/acessorio_bowl.jpg', 'PAP-ACE-03', '7898969895719', '5719', false, false, true, false, 26, 'Design arredondado perfeito para sopinhas e frutinhas raspadas. Pode ir ao micro-ondas e congelador com total segurança.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;
INSERT INTO public.products (id, name, category, subcategory, age, price, cost_price, stock, min_stock, image, sku, ean, code, organic, ready_delivery, active, featured, sales_count, description)
VALUES ('p_acessorio_kit_talheres', 'Kit Talheres de Treinamento Silicone & Bambu Macio', 'Acessórios', 'Silicone', '+6m', NULL, NULL, 0, 6, 'images/products/acessorio_kit_talheres.jpg', 'PAP-ACE-04', '7898969895658', '5658', false, false, true, false, 27, 'Colher e garfinho ergonômicos com ponta de silicone suave que protege gengivas e dentes sensíveis.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  ready_delivery = EXCLUDED.ready_delivery,
  active = EXCLUDED.active,
  image = EXCLUDED.image;

-- SEED: KITS
INSERT INTO public.kits (id, name, badge, description, image, items, discount_percent, active)
VALUES ('kit_rotina_saudavel', 'Kit Rotina Saudável Cajuzinho', 'Mais Vendido', 'O combo mais amado pelas mães: 2 papinhas salgadas completas + 2 papinhas de frutas orgânicas + 1 snack biscotti para o lanche.', 'images/products/hero_family.jpg', '[{"productId":"p_frango_grao_vegetais","qty":1,"name":"Papinha Frango & Vegetais 120g"},{"productId":"p_carne_arroz_legumes","qty":1,"name":"Papinha Carne & Legumes 120g"},{"productId":"p_banana_mirtilo_quinoa","qty":1,"name":"Papinha Banana Mirtilo Quinoa 100g"},{"productId":"p_maca_ameixa","qty":1,"name":"Papinha Maçã e Ameixa 100g"},{"productId":"p_biscotti_banana_cacau","qty":1,"name":"Biscotti Banana e Cacau 60g"}]'::jsonb, 12, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  items = EXCLUDED.items,
  discount_percent = EXCLUDED.discount_percent,
  active = EXCLUDED.active;
INSERT INTO public.kits (id, name, badge, description, image, items, discount_percent, active)
VALUES ('kit_passeio_pratico', 'Kit Passeio Sem Complicação', 'Praticidade 10/10', 'Leve para a pracinha, viagem ou consulta: alimentos que não precisam de geladeira antes de abrir.', 'images/products/mission_family.jpg', '[{"productId":"p_yoguzinho_amarelas","qty":1,"name":"Yoguzinho Frutas Amarelas 100g"},{"productId":"p_yoguzinho_vermelhas","qty":1,"name":"Yoguzinho Frutas Vermelhas 100g"},{"productId":"p_biscotti_goiaba","qty":1,"name":"Biscotti com Goiaba 60g"},{"productId":"p_bebida_morango","qty":1,"name":"Bebida de Morango 200ml"}]'::jsonb, 10, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  items = EXCLUDED.items,
  discount_percent = EXCLUDED.discount_percent,
  active = EXCLUDED.active;
INSERT INTO public.kits (id, name, badge, description, image, items, discount_percent, active)
VALUES ('kit_lanchinho_escolar', 'Kit Lancheira Divertida Era Uma Vez', 'Sucesso com Crianças', 'Lanches práticos para crianças a partir de 1 ano levarem para a escola com nutrição de verdade.', 'images/products/era_uma_vez_line.png', '[{"productId":"p_salgadinho_churrasco","qty":1,"name":"Salgadinho Orgânico Churrasco 40g"},{"productId":"p_salgadinho_queijo","qty":1,"name":"Salgadinho Orgânico Queijo 40g"},{"productId":"p_bebida_chocolate","qty":1,"name":"Bebida Láctea Chocolate 200ml"},{"productId":"p_bebida_morango","qty":1,"name":"Bebida de Morango 200ml"}]'::jsonb, 10, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  items = EXCLUDED.items,
  discount_percent = EXCLUDED.discount_percent,
  active = EXCLUDED.active;

-- SEED: CUPONS
INSERT INTO public.coupons (code, type, value, min_order_value, active, description)
VALUES ('CAJU5', 'percent', 5, 0, true, '5% de desconto em todo o pedido')
ON CONFLICT (code) DO UPDATE SET
  value = EXCLUDED.value,
  active = EXCLUDED.active;
INSERT INTO public.coupons (code, type, value, min_order_value, active, description)
VALUES ('PRIMEIRACOMPRA', 'fixed', 10, 60, true, 'R$ 10,00 OFF em compras acima de R$ 60')
ON CONFLICT (code) DO UPDATE SET
  value = EXCLUDED.value,
  active = EXCLUDED.active;
INSERT INTO public.coupons (code, type, value, min_order_value, active, description)
VALUES ('REVENDA10', 'percent', 10, 150, true, '10% de desconto para compras comerciais')
ON CONFLICT (code) DO UPDATE SET
  value = EXCLUDED.value,
  active = EXCLUDED.active;

-- SEED: CONFIGURAÇÕES DA LOJA
INSERT INTO public.store_settings (key, value)
VALUES ('general', '{"storeName":"Cajuzinho","slogan":"Papapá mais perto de você.","subheading":"Produtos Papapá para famílias e negócios que querem praticidade, qualidade e uma escolha mais consciente para a rotina.","whatsappNumber":"5519981189816","whatsappFormatted":"(19) 98118-9816","email":"marcelavalin78@gmail.com","instagram":"@cajuzinho.papapa","city":"Amparo","state":"SP","address":"Rua São Sebastião, 89 - Amparo/SP","deliveryFee":7.9,"freeDeliveryThreshold":89,"pixKey":"valinsrp@gmail.com","pixEmail":"valinsrp@gmail.com","pixPayload":"00020101021126400014BR.GOV.BCB.PIX0118valinsrp@gmail.com5204000053039865802BR5920flordemaracujaamparo6008SAOPAULO61080132305062070503***630411E6","pixQrCodeImage":"images/pix_qrcode.jpg","cardMachineNotice":"Pagamento com cartão na entrega (maquininha com motoboy). Taxa da operadora a consultar via WhatsApp.","shippingCorreiosNotice":"Envios para outras cidades e estados via Correios (PAC/Sedex). Valor do frete sob consulta via WhatsApp.","adminEmail":"marcelavalin78@gmail.com","adminPassHash":"921503cba2fc1a5cbb7507eb23668383f982d61996cf8f1174aa485743ea4101"}'::jsonb)
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
