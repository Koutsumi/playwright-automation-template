export default {
  title: 'Playwright Docs',
  description: 'Documentação dos testes',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Guia',
        items: [
          { text: '👩‍🎨 FASE PRO', link: '/' },
          { text: '1️⃣ Getting started', link: '/guia/getting-started' },
          { text: '🏗️ Estrutura do projeto', link: '/guia/estrutura-do-projeto' },
          { text: '🧭 Boas práticas', link: '/guia/boas-praticas' },
          { text: '🚶‍♀️‍➡️ Próximos passos', link: '/guia/proximos-passos' },
        ],
      },
      {
        text: 'Referências',
        items: [
          { text: '🌎 setup', link: '/referencias/setup-modules',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '🌎 setup global', link: '/referencias/auth-setup.md' },
              { text: '🍪 loginAndStoreSession', link: '/referencias/loginAndStoreSession.md' },
            ],
          },
          { text: '🏦 mongoActions', link: '/referencias/mongoActions' },
          {
            text: '🌎 Funções Globais',
            link: '/referencias/funcoes-globais', // 👈 continua sendo página clicável
            collapsible: true,
            collapsed: false,
            items: [
              { text: '🌐 headers', link: '/referencias/headers' },
              { text: '🔐 encryptPassword', link: '/referencias/encryptPassword' },
              { text: '💁 insertUser', link: '/referencias/insertUser' },
              { text: '💁 insertProponent', link: '/referencias/insertProponent' },
              { text: '📂 userId', link: '/referencias/userId' },
              { text: '🔢 generateCpf', link: '/referencias/generateCpf' },
              { text: '🔢 generateCnpj', link: '/referencias/generateCnpj' },
            ],
          },
        ],
      },
      {
        text: 'API',
        items: [
          {
            text: 'Plataforma',
            collapsible: true,
            collapsed: false,
            items:[
              {
                text: '🔐 Authentication',
                collapsible: true,
                collapsed: false,
                items: [
                  { text: 'POST', link: '/api/plataforma/auth/post.md' },
                ],
              },
              {
                text: '💁 User',
                collapsible: true,
                collapsed: false,
                items: [
                  { text: 'POST', link: '/api/plataforma/user/post.md' },
                ],
              },
            ]
          },
          {
            text: 'Direto',
            collapsible: true,
            collapsed: false,
            items:[
              
            ]
          },
          {
            text: 'Indireto',
            collapsible: true,
            collapsed: false,
            items:[
              {
                text: '⌛ Submission Legacy',
                collapsible: true,
                collapsed: false,
                items: [
                  { text: 'POST', link: '/api/indireto/submissionLegacy/post.md' },
                  { text: 'PUT', link: '/api/indireto/submissionLegacy/put.md' },
                ],
              },
            ]
          },
        ],
      },
    ],
  },
};
