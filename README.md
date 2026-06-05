# PGATS - Exercicios de Integracao Continua

Repositorio dedicado aos exercicios da disciplina **04 - Integracao Continua para Automacao de Testes**.

---

## Exercicios

### Exercicio 1: Pipeline em outra ferramenta
- **Plataforma:** GitLab CI
- **Repositorio:** https://gitlab.com/jeffmonteiroo/servicodepagamento
- **O que foi feito:** Pipeline com testes automatizados usando GitLab CI

### Exercicio 2: Action do Marketplace
- **Plataforma:** GitHub Actions
- **Action utilizada:** `actions/upload-artifact@v4`
- **O que faz:** Salva os resultados dos testes como artefato para download
- **Arquivo:** `.github/workflows/01-pipeline-com-artifact.yml`

### Exercicio 3: Self-hosted Runner
- **Plataforma:** GitHub Actions
- **O que eh:** Runner instalado na maquina local que executa os jobs
- **Arquivo:** `.github/workflows/02-self-hosted-runner.yml`

---

## Como rodar localmente

```bash
npm install
npm test
```

---

## Tecnologias

- Node.js
- Mocha
- Node Assert
