# 🌎 Funções Globais

As funções globais são utilitários genéricos que podem ser usados em qualquer parte do projeto — seja em testes, módulos ou configurações.
Elas ajudam a padronizar comportamentos, reduzir duplicação de código e centralizar lógicas comuns.

### 📘 Resumo

| Conceito        | Descrição                              |
| --------------- | -------------------------------------- |
| **Localização** | `shared/helpers/`                      |
| **Uso**         | Reutilizável em todo o projeto         |
| **Objetivo**    | Padronizar comportamentos comuns       |
| **Benefícios**  | Reduz duplicação e facilita manutenção |


## 🧠 Conceito

Em projetos de automação (como este com Playwright), chamamos de função global toda função que:

🔁 É reutilizável por diferentes módulos ou testes;

🌍 Não pertence a um domínio funcional específico (como “auth” ou “user”);

⚙️ Fornece comportamentos de infraestrutura, configuração ou utilidade;

🧩 Pode ser usada por scripts, fixtures ou setups de teste.

Exemplo clássico: funções que constroem headers, tokens, payloads padrão, ou validações genéricas.

## 📂 Onde ficam

No projeto, todas as funções globais são centralizadas dentro do diretório:

```bash
shared/
├── helpers/
│   └── headers.ts       # Exemplo de função global
└── ...
```


Essas funções podem ser importadas de qualquer lugar do projeto, garantindo consistência e organização.

## 🧭 Boas Práticas

::: tip 💡 Recomendação

- Todas as funções globais devem ser puras (sem dependência de estado global);

- Mantenha nomes descritivos (getAuthToken(), buildRequestPayload());

- Tipagem obrigatória — defina sempre o tipo de entrada e retorno (.ts);

:::