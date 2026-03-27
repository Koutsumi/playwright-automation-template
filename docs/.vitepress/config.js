export default {
  base: process.env.VITEPRESS_BASE || '/',
  title: 'PlayPattern',
  description: 'Template de padrões para projetos de automação com Playwright',
  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
    ],
    sidebar: [
      {
        text: 'Guia',
        items: [
          { text: 'Visão Geral', link: '/' },
          { text: 'Getting Started', link: '/guia/getting-started' },
          { text: 'Estrutura do Projeto', link: '/guia/estrutura-do-projeto' },
          { text: 'Banco de Dados', link: '/guia/banco-de-dados' },
          { text: 'Boas Práticas', link: '/guia/boas-praticas' },
          { text: 'Próximos Passos', link: '/guia/proximos-passos' },
        ],
      },
      {
        text: 'Referências',
        items: [
          { text: 'Setup por Módulo', link: '/referencias/setup-modules' },
          { text: 'Headers', link: '/referencias/headers' },
          { text: 'Page Objects', link: '/referencias/page-objects' },
          { text: 'Fixture de Usuários', link: '/referencias/fixtures-users' },
          { text: 'shared/database', link: '/referencias/shared-database' },
          { text: 'MongoDB', link: '/referencias/mongodb' },
          { text: 'SQL com Knex', link: '/referencias/knex' },
        ],
      },
    ],
  },
};
