# UNESC Bot

Chatbot desenvolvido como TCC (Trabalho de Conclusão de Curso) em Ciência da Computação na UNESC. O sistema oferece duas implementações de bot para atender dúvidas de alunos sobre cursos e informações institucionais da universidade.

## Visão Geral

O projeto conta com duas implementações independentes:

- **bot-framwork**: Bot utilizando Microsoft Bot Framework v3 com integração ao LUIS (reconhecimento de intenções) e QnA Maker (base de conhecimento)
- **bot-telegram**: Bot para Telegram utilizando Telegraf, integrado a uma API Watson externa

## Tecnologias

- Node.js
- [Microsoft Bot Framework v3](https://github.com/Microsoft/BotBuilder)
- [Telegraf](https://telegraf.js.org/) (Telegram)
- Azure Cognitive Services (LUIS, QnA Maker)
- Docker / Kubernetes
- GitHub Actions (CI/CD)

## Estrutura do Projeto

```
├── bot-framwork/       # Implementação com Microsoft Bot Framework
├── bot-telegram/       # Implementação para Telegram
├── k8s/                # Manifests Kubernetes
└── Dockerfile          # Containerização
```

## Instalação e Execução

### Bot Telegram

```bash
cd bot-telegram
npm install
```

Crie um arquivo `.env` com base no `.env.example`:

```env
TELEGRAM_API_KEY=seu_token_aqui
```

```bash
npm start
```

### Bot Framework

```bash
cd bot-framwork
npm install
```

Configure as variáveis de ambiente (veja `env.txt`):

```env
MICROSOFT_APP_ID=
MICROSOFT_APP_PASSWORD=
QNA_ENDPOINT=
QNA_KNOWLEDGE_BASE_ID=
QNA_SUBSCRIPTION_KEY=
LUIS_MODEL_URL=
```

```bash
npm start
```

O servidor ficará disponível em `http://localhost:3000/api/messages`.

## Docker

```bash
docker build -t uniedubot .
docker run -e TELEGRAM_API_KEY=<token> uniedubot
```

## Funcionalidades

### Bot Framework
- Reconhecimento de intenções via LUIS (cursos, institucional)
- Respostas a perguntas frequentes via QnA Maker
- Diálogos em cascata com gerenciamento de estado
- Suporte ao português brasileiro

### Bot Telegram
- Gerenciamento de sessões por usuário
- Integração com API Watson
- Respostas com botões de sugestão
- Notificação de usuários

## CI/CD

O pipeline de CI/CD via GitHub Actions automatiza o build da imagem Docker e o deploy no Kubernetes a cada push na branch principal.

## Sobre

Projeto acadêmico — TCC de Ciência da Computação, UNESC.
