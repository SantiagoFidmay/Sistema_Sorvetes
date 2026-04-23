# 🍦 Gelateria Geométrica — Calculadora de Produção Pistache

> **Sistema de Controle de Produção Industrial para Sorvetes Artesanais**  
> Desenvolvido como PWA (Progressive Web App) com foco em precisão industrial e usabilidade mobile.

---

## 👥 Identificação da Equipe

| Papel | Nome |
|---|---|
| Dev 1 — Calculadora de Produção | Bernardo Jacomelli Rodrigues |
| Dev 2 — Modelagem do Pote | Enzo dos Santos Hipólito |
| Dev 3 — Interface & Integração | Matheus Orsi Reis |

---

## 📋 Visão Geral do Sistema

A **Gelateria Geométrica** é um sistema web desenvolvido para auxiliar o gerente de produção de uma sorveteria artesanal em expansão industrial. O aplicativo funciona como o **"Cérebro da Fábrica"**: o mestre sorveteiro informa a meta de produção e as dimensões do pote, e o sistema entrega:

- 📦 Cálculo do **volume cilíndrico** do pote com base em raio e altura
- ⚖️ Estimativa de **peso por pote** usando a densidade do sorvete (0.6 g/cm³)
- 🔢 Quantidade de **potes inteiros** que a produção vai gerar
- 🛒 **Lista de compras** de ingredientes escalonada para a tonelagem escolhida
- 💰 **Custo total** de produção com precisão financeira

---

## ⚙️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| `HTML5` | Estrutura da interface |
| `CSS3` | Estilização e layout responsivo |
| `JavaScript ES Modules` | Lógica de negócio e integração |
| `Jest` | Testes unitários automatizados |
| `Node.js` | Ambiente de execução dos testes |

- **Resolução alvo:** iPhone 14 — `390 × 844 px`
- **Arquitetura:** Classes ES6 com separação de responsabilidades (`Pote.js`, `calculadoraProducao.js`)

---

## ✅ Requisitos Funcionais

| ID | Descrição |
|---|---|
| **RF01** | O sistema permite a escolha entre 3 tamanhos de potes cilíndricos: **400g**, **900g** e **1700g** |
| **RF02** | O sistema calcula o **volume do pote** (cm³) com base no raio e altura informados pelo usuário |
| **RF03** | O sistema gera a **lista de compras de ingredientes** proporcional à tonelagem selecionada (1, 5 ou 12 ton.) |
| **RF04** | O sistema exibe o **Custo Total de Produção** a partir de preços de mercado configuráveis |

---

## 🚫 Requisitos Não Funcionais (ISO 25010)

| ID | Categoria | Descrição |
|---|---|---|
| **RNF01** | Portabilidade / Adaptabilidade | Código desenvolvido com **JavaScript ES Modules** (`import/export`), sem necessidade de transpilação |
| **RNF02** | Usabilidade / Estética | Interface projetada exclusivamente para **iPhone 14 (390 × 844 px)**, com layout responsivo sem cortes |
| **RNF03** | Eficiência de Desempenho | Tempo de resposta dos cálculos industriais **≤ 2 segundos** |
| **RNF04** | Manutenibilidade / Testabilidade | Cobertura de **100% dos métodos** das classes com testes Jest. Nenhum commit sem testes em estado "pass" |
| **RNF05** | Proteção contra Erro | Validação de inputs em **< 0.5 segundos**, bloqueando valores nulos, negativos ou não numéricos com alerta visual |

---

## 📐 Regras de Negócio

### 🔵 RN01 — Densidade do Sorvete
O sorvete tem **ar incorporado**, o que faz seu volume ser maior que seu peso.  
Todo cálculo de peso/volume usa obrigatoriamente a constante:

```
Peso (g) = Volume (cm³) × 0.6
```

### 🔵 RN02 — Arredondamento de Potes
A quantidade de potes produzidos é sempre **arredondada para baixo** (`Math.floor`).  
Potes incompletos não são contabilizados — a massa excedente retorna ao tanque.

```js
quantosPotesCabem(toneladas) {
    const pesoTotal = toneladas * 1_000_000  // converte ton → gramas
    return Math.floor(pesoTotal / pesoPorPote)
}
```

### 🔵 RN03 — Escalabilidade da Receita
A receita base é formulada para potes de **900g** e escalada proporcionalmente para as metas de:

| Meta | Equivalente |
|---|---|
| 1 tonelada | 1.000 kg |
| 5 toneladas | 5.000 kg |
| 12 toneladas | 12.000 kg |

Exemplo de escalonamento de ingredientes:
```
leite = metaKg × (480 / tamanhoPote)
```

### 🔵 RN04 / RN05 — Precisão Financeira
Todos os valores monetários são exibidos com **duas casas decimais**, no formato `R$ 0.000,00`.

---

## 🏗️ Modelagem das Classes

```
┌─────────────────────────────┐      ┌──────────────────────────────┐
│         Pote                │      │    CalculadoraProducao       │
├─────────────────────────────┤      ├──────────────────────────────┤
│ - raio: number              │      │ - metaToneladas: number      │
│ - altura: number            │      │ - metaKg: number             │
│ - densidade: 0.6            │      │ - custoLeiteKg: 4.50         │
├─────────────────────────────┤      │ - custoCremeKg: 12.00        │
│ + calcularVolume(): number  │      │ - custoAcucarKg: 3.80        │
│ + calcularPeso(): number    │      │ - custoPastaPistacheKg: 140  │
│ + quantosPotesCabem(t)      │      │ - custoPistacheInteiroKg: 95 │
│ + resumo(): void            │      ├──────────────────────────────┤
└─────────────────────────────┘      │ + calcularIngredientes(t)    │
                                     │ + calcularCustos()           │
                                     │ + gerarResumo(t): object     │
                                     └──────────────────────────────┘
```

---

## 🚀 Instalação e Execução

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/gelateria-geometrica.git
cd gelateria-geometrica
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Executar os testes
```bash
npm test
```

### 4. Rodar o projeto
Abra o arquivo `index.html` diretamente no navegador, ou use uma extensão como **Live Server** no VS Code para servir localmente.

### 5. Deploy em produção
🔗 **[Acesse o sistema no Vercel](https://sistema-sorvetes.vercel.app/)** *(atualizar link)*

---

## 🧪 Cobertura de Testes

Os testes unitários cobrem **100% dos métodos** das classes principais:

| Classe | Métodos Testados |
|---|---|
| `Pote` | `calcularVolume()`, `calcularPeso()`, `quantosPotesCabem()` |
| `CalculadoraProducao` | `calcularIngredientes()`, `calcularCustos()`, `gerarResumo()` |

**O que foi validado:**
- ✅ Regra de arredondamento de potes (`Math.floor`) — nunca são contabilizados potes incompletos
- ✅ Cálculo de volume com a fórmula `π × r² × h`
- ✅ Aplicação correta da densidade `0.6 g/cm³`
- ✅ Escalonamento proporcional dos ingredientes para 1, 5 e 12 toneladas
- ✅ Precisão financeira com duas casas decimais

```
 PASS  models/Pote.test.js
 PASS  models/calculadoraProducao.test.js

Test Suites: 2 passed, 2 total
Tests:       X passed, X total
```
*(substituir com print real do terminal)*

---

## 📁 Estrutura do Projeto

```
gelateria-geometrica/
├── index.html
├── index.js
├── style.css
├── package.json
├── models/
│   ├── Pote.js
│   └── calculadoraProducao.js
└── img/
    ├── pistache.png
    └── sorvete_icon.png
```

---

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais. Todos os direitos reservados à equipe.

---

<div align="center">
  <sub>Feito com 🍦 e muita matemática por <strong>Gelateria Geométrica Dev Team</strong></sub>
</div>
