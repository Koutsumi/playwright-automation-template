import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Banco de Dados","description":"","frontmatter":{},"headers":[],"relativePath":"guia/banco-de-dados.md","filePath":"guia/banco-de-dados.md"}');
const _sfc_main = { name: "guia/banco-de-dados.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="banco-de-dados" tabindex="-1">Banco de Dados <a class="header-anchor" href="#banco-de-dados" aria-label="Permalink to “Banco de Dados”">​</a></h1><p>Cada projeto pode usar um banco diferente. O template não obriga MongoDB nem SQL.</p><p>A regra é simples: a configuração de banco deve ficar em <code>shared/database</code>.</p><h2 id="convencao" tabindex="-1">Convenção <a class="header-anchor" href="#convencao" aria-label="Permalink to “Convenção”">​</a></h2><p>Use <code>shared/database</code> para centralizar:</p><ul><li>client de conexão;</li><li>leitura de variáveis de ambiente;</li><li>factories;</li><li>helpers de cleanup;</li><li>queries ou repositórios compartilhados.</li></ul><h2 id="quando-usar-mongodb" tabindex="-1">Quando usar MongoDB <a class="header-anchor" href="#quando-usar-mongodb" aria-label="Permalink to “Quando usar MongoDB”">​</a></h2><p>Se o projeto usa MongoDB, a recomendação é usar a biblioteca oficial <code>mongodb</code>.</p><p>Casos comuns:</p><ul><li>seed e cleanup de massa;</li><li>consulta direta para validação de estado;</li><li>atualização de registros de apoio para preparar cenários.</li></ul><p>Veja a referência em <a href="/referencias/mongodb.html">MongoDB</a>.</p><h2 id="quando-usar-sql" tabindex="-1">Quando usar SQL <a class="header-anchor" href="#quando-usar-sql" aria-label="Permalink to “Quando usar SQL”">​</a></h2><p>Se o projeto usa banco relacional, a recomendação é usar <code>knex</code>.</p><p>Casos comuns:</p><ul><li>consultas de apoio para validação;</li><li>inserts e deletes controlados para massa de teste;</li><li>transações para preparar e desfazer cenários;</li><li>padronização de acesso entre diferentes bancos SQL.</li></ul><p>Veja a referência em <a href="/referencias/knex.html">SQL com Knex</a>.</p><h2 id="o-que-evitar" tabindex="-1">O que evitar <a class="header-anchor" href="#o-que-evitar" aria-label="Permalink to “O que evitar”">​</a></h2><ul><li>abrir conexão diretamente dentro do teste;</li><li>duplicar configuração em vários módulos;</li><li>misturar lógica de query com assertions do teste quando isso dificultar manutenção;</li><li>usar uma biblioteca diferente em cada projeto sem necessidade.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guia/banco-de-dados.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bancoDeDados = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bancoDeDados as default
};
