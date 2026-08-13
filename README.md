<div align="center">

# Spoiler

**Framework de desenvolvimento orientado por contexto para IDEs de IA.**

[O que e o Spoiler?](AGENTS.md) &#8226; [Get Started](#get-started) &#8226; [Atualizar](#atualizar--sincronizar) &#8226; [GitHub](https://github.com/phelipperibeiro/spoiler)

</div>

---

## Get Started

Por enquanto o Spoiler **não está no npm registry**. Clone o repo e instale a partir do path local.

### 1. Clone

```bash
git clone https://github.com/phelipperibeiro/spoiler.git
```

Ou baixe o ZIP e extraia. O path da pasta clonada é o que você usa no passo seguinte.

### 2. Instale

Global (comando `spoiler` no PATH, como o da Frota era):

```bash
npm install -g /caminho/para/spoiler
```

**Só neste workspace** (não sobe no PATH):

```bash
cd workspace-squad/
npm install /caminho/para/spoiler --save-dev
```

**`npm link`** (útil se você altera o clone e quer refletir na hora):

```bash
cd /caminho/para/spoiler
npm link
```

Isso já registra o comando `spoiler` no global. Opcional, para o workspace resolver o pacote:

```bash
cd workspace-squad/
npm link spoiler-framework
```

Confira **onde** o binário ficou no PATH (útil se houver mais de uma instalação):

```bash
which spoiler
spoiler --version
```

### 3. Bootstrap da IDE

```bash
spoiler init --ide cursor
```

Se instalou só com `--save-dev` (sem `-g` / `npm link`), use `npx spoiler init --ide cursor`.

IDEs: `windsurf` · `claude` · `cursor` · `codex` · `opencode` · `gemini` · `kiro`

### 4. No chat da IDE

```
/init-spoiler
```

Siga o guia do seu papel. Sem `/init-spoiler`, o `ENV.md` não existe e o resto dos comandos não tem contexto.

---

## Atualizar / sincronizar

Quando o repo no GitHub ganhar commits novos (skills, agents, workflows…), sincronize assim:

### 1. Atualizar o clone

```bash
cd /caminho/para/spoiler
git pull
```

### 2. Atualizar o pacote instalado

**Global:**
```bash
npm install -g /caminho/para/spoiler
```

**Só no workspace (`--save-dev`):**
```bash
cd workspace-squad/
npm install /caminho/para/spoiler --save-dev
```

**Com `npm link`:** o `git pull` no clone já basta — o link aponta para a pasta.

Antes de seguir, confira se o `spoiler` do PATH é o que você acabou de atualizar:

```bash
which spoiler
spoiler --version
```

### 3. Espelhar assets na pasta da IDE

No **workspace** (onde roda o projeto / squad):

```bash
cd workspace-squad/
spoiler init --ide cursor
# confirme com "s" se a pasta .cursor/ (ou equivalente) já existir
```

Isso copia de novo `agents/`, `skills/`, `workflows/`, `rules/`, `templates/` para `.$IDE/` e atualiza o `spoiler-lock.json`.

Se o workspace usa `--save-dev` e já tem `spoiler-lock.json`, o `npm install` do passo 2 também dispara o **postinstall** e sincroniza sozinho para a IDE do lock.

### 4. ENV.md (só se houver variáveis novas)

No chat da IDE:

```
/init-spoiler
```

Escolha **Upgrade (C)** — adiciona chaves novas do template sem apagar os valores atuais.

### O que cada passo atualiza

| Passo | O que muda |
|-------|------------|
| `git pull` | Código do framework no clone |
| `npm install -g` / `--save-dev` | Binário `spoiler` + pacote que o `init` lê |
| `spoiler init` (ou postinstall com lock) | Arquivos em `.$IDE/` (skills, agents, workflows…) |
| `/init-spoiler` Upgrade | Só `$IDE/ENV.md` (variáveis faltantes) |

`ENV.md`, `.spoiler/sessions/` e o `.gitignore` do workspace **não** são sobrescritos pelo sync de assets.

| Papel | Descricao | Link |
|-------|-----------|------|
| **Produto** | Especificacoes, PRDs e gestao de requisitos | `workflows/product/` |
| **TechLead** | Arquitetura, tech specs e revisao tecnica | `workflows/engineering/` |
| **Developer** | Implementacao, testes e entrega de codigo | `workflows/engineering/` |
| **QA** | Testes E2E, exploratórios, quality gates e relatórios de qualidade | `workflows/engineering/qa/` |

| Recurso | Descricao | Link |
|---------|-----------|------|
| **Skills** | Playbooks executaveis (`eng-backend`, `eng-frontend`, `eng-pr`, …) | `skills/` |
| **Identidade** | `USER=` no ENV.md (fallback: git / SO). `spoiler whoami` | — |
| **Documentacao** | Geracao e organizacao de docs tecnica e de negocio | `templates/` |
| **Troubleshooting** | Configuracao e uso | `/init-spoiler` |

---

## Camadas

O Spoiler e organizado em 5 camadas.

| Camada | O que faz |
|--------|-----------|
| **Agents** | Agentes especializados de IA para engenharia, QA e produto |
| **Skills** | Playbooks executaveis com logica autonoma |
| **Templates** | Modelos de documentos (ARD, RFC, Tech Spec, PRD, Epic) |
| **Rules** | Regras de dominio filtradas por perfil (HUB, POSITION, AREA, SQUAD) no `/init-spoiler` |
| **Workflows** | Fluxos de execucao dos comandos slash |

---

## Suporte

Precisa de ajuda?

- **Documentacao completa** &mdash; `AGENTS.md`
- **Issues/Feedback** &mdash; skill `report-issue`
- **Duvidas sobre comandos** &mdash; Pergunte diretamente ao agent:
  `"Como funciona /eng.start?"` | `"Qual a diferenca entre /eng.work e /pr?"` | `"O que e CDD?"`
