![Playwright](https://img.shields.io/badge/tests-playwright-blue)
#  Testes de API com Playwright - Dog CEO

Este projeto demonstra a automação de testes de API utilizando Playwright, com foco na validação dos endpoints públicos da Dog CEO API.

---

##  Tecnologias Utilizadas

* Playwright
* JavaScript (Node.js)
* GitHub Actions (CI configurado)

---

##  Cobertura de Testes

###  Cenários Positivos

* Listagem de todas as raças de cachorro
* Busca de imagens por raça específica
* Busca de imagens utilizando raça dinâmica (aleatória)
* Retorno de imagem aleatória

###  Cenários Negativos

* Requisição com raça inválida
* Validação de tratamento de erro da API

---

##  Validações Implementadas

* Validação de status HTTP (200, 404)
* Validação da estrutura da resposta
* Verificação de tipos de dados (object, array)
* Garantia de respostas não vazias
* Validação de formato de URL das imagens
* Validação de mensagens de erro

---

##  Abordagem de Teste

Os testes foram desenvolvidos simulando cenários reais de validação de APIs, com foco em:

* Uso de dados dinâmicos
* Validação de contrato da API
* Testes negativos
* Estrutura limpa e de fácil manutenção

---

##  Estrutura do Projeto

```bash id="1i0nh3"
.
├── .github/
│   └── workflows/
│       └── playwright.yml        # Pipeline de CI (GitHub Actions)
│
├── tests/
│   └── api.spec.js              # Suite principal de testes de API
│
├── playwright.config.js         # Configuração do Playwright
├── package.json                 # Dependências do projeto
├── package-lock.json
├── .gitignore
└── README.md
```

---

##  Como Executar

### Instalar dependências

```bash id="2mwhzk"
npm install
```

### Rodar os testes

```bash id="8pd1e2"
npx playwright test
```

### Visualizar relatório

```bash id="hprz2y"
npx playwright show-report
```

---

##  Relatório de Testes

O Playwright gera automaticamente um relatório HTML contendo:

* Resultados dos testes (sucesso/falha)
* Tempo de execução
* Detalhamento de erros

---

##  Integração Contínua

O projeto possui integração com GitHub Actions para execução automática dos testes.

---

##  Autor

Gustavo Aquino
