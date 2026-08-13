# Como ficou o fork

Snapshot do Spoiler depois de sair da Frota. Não é mais uma lista de “o que remover” — é o **estado atual**.

```
Spoiler (fork)
├── Identidade
│   ├── pacote npm .............. spoiler-framework  (era @frota162/...)
│   ├── runtime npm ............. removido (era event bus Redis)
│   ├── author .................. Spoiler
│   ├── CLI_NAME ................ spoiler-framework
│   ├── banner .................. SPOILER, sem FROTA 162
│   ├── registry 75570233 ....... removido
│   └── DOMAIN .................. vazio (sem e-mail corporativo)
│
├── Integrações (ENV escolhe; adapters executam)
│   ├── Chat .................... slack | discord | teams  → MESSAGE_COMUNICATOR
│   ├── Git ..................... gitlab | github | bitbucket → bin/lib/vcs
│   └── Tasks ................... jira | linear | github | asana → eng-task-comment
│
├── Org
│   ├── squads .................. CORE + SUPPORT
│   ├── hubs .................... AI, FRONTEND, BACKEND, QA, DATA
│   ├── members.md .............. zerado
│   └── channel_id / board_code . vazios
│
├── Skills / agentes técnicos (ficaram)
│   ├── RPA ..................... @eng.rpa, eng.rpa.robot (não é mais squad)
│   ├── Data / QA / Backend ..... hubs + skills iguais
│   └── warm-up engenharia ...... opção I = robô RPA
│
├── Rules — autonomia
│   ├── Dev / TL / PM ........... podem conduzir o card ponta-a-ponta
│   ├── tech spec / breakdown ... abertos a qualquer POSITION
│   ├── prod-rules .............. abertos a qualquer POSITION
│   └── TL e PM ................. apoiam; não são gate
│
└── Sem ritual diário / login
    ├── USER= no ENV.md ......... identidade
    ├── git / SO ................ fallback
    └── checkin/daily/task-log/sync  removidos do CLI
```

---

## O que mudou no código

### Identidade

| Antes | Agora |
|-------|--------|
| `@frota162/spoiler-framework` | `spoiler-framework` |
| `@frota162/spoiler-runtime` | removido |
| author Frota162 Engineering Team | `Spoiler` |
| publishConfig GitLab project `75570233` | removido |
| repository `gitlab.com/frota162/all/...` | removido (aponta o remote do seu fork quando tiver) |
| Banner `FROTA 162` | ASCII Spoiler, labels vazios |
| `DOMAIN: frota162.com.br` | `DOMAIN:` vazio |
| `spoiler login` (Google/GitLab OAuth) | removido — `USER=` no ENV.md, git ou SO |
| `checkin` / `checkout` / `daily` / `task-log` / `sync` | removidos (ritual de time + re-sync CLI) |

### Segredos

`templates/ENV-template.md` está **sem** tokens e **sem** ferramenta pré-escolhida (`TASK_MANAGER`, `VERSION_CONTROL`, `MESSAGE_COMUNICATOR` são listas `[escolha]`).  
`USER=` é a identidade. `members.md` zerado. Sem event bus / Redis / runtime Fastify.

Rotacionar na origem os tokens que já tinham vazado neste clone.

### Squads

| Saiu | Ficou |
|------|--------|
| VEICULOS, DRIVERS, RPA (time), PGI, PARCERIAS, PAYMENTS, ENGINEERING-CORE, DATA-squad | `CORE`, `SUPPORT` |
| Menu warm-up `SQUAD=RPA` | Opção I no menu de engenharia (skill, não time) |
| Wiki/Jira hardcoded no roadmap (VIP, CIEC, PGI, filter 12500) | Lê `taxonomy.md` + o que o usuário informar |

Skills/agentes **RPA, Data, QA** continuam. RPA não é mais um squad.

Times novos: `/taxonomy add SQUADS NOME "descrição"`.

### Rules (autonomia)

Quem assumiu o card conduz: puxar → implementar → MR → merge → validar → aceite → deploy.

- Dev, Tech Lead e Produto **podem fazer tudo** no próprio card.
- TL/PM revisam e desbloqueiam — não precisam clicar para o trabalho andar.
- Tech spec, breakdown e prod-rules: `POSITION: all` (não são mais exclusivas de TL/PM).

---

## O que ainda é seu (não está no git)

| Item | Por quê |
|------|---------|
| `git config user.email` | ainda `@frota162` até você mudar — identidade cai no git se `USER=` estiver vazio |
| Nome com scope (`@voce/spoiler-framework`) | Pacote ficou unscoped de propósito |
| Remote GitLab do fork | `package.json` sem `repository` |
| Squads da sua org | Taxonomy só tem CORE + SUPPORT |
| Preencher ENV (chat/git/tasks seus) | Template com `[escolha]`, sem vendor default |

---

## Manter (é o framework)

- Chat / Git / Tasks como capacidade — escolhidos no ENV, sem default de vendor
- CLI (`init`, `whoami`, `list`, `docs`)
- Adapters: `bin/lib/vcs`, `bin/lib/tasks/comment.js`
- Agents, skills, workflows, templates ARD/RFC/PRD
- Hubs AI / Frontend / Backend / QA / Data
- `spoiler init` copia assets da IDE (não precisa de `spoiler sync`)

---

## Próximo passo sugerido

1. `/taxonomy add` dos seus times
2. `/init-spoiler` com o perfil novo (`USER=` no ENV)
