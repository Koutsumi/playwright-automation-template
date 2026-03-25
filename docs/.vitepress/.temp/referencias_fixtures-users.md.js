import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fixture de Usuarios","description":"","frontmatter":{},"headers":[],"relativePath":"referencias/fixtures-users.md","filePath":"referencias/fixtures-users.md"}');
const _sfc_main = { name: "referencias/fixtures-users.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fixture-de-usuarios" tabindex="-1">Fixture de Usuarios <a class="header-anchor" href="#fixture-de-usuarios" aria-label="Permalink to “Fixture de Usuarios”">​</a></h1><p>O arquivo <code>fixtures/users.ts</code> segue o mesmo espirito do repositório <code>padrao</code>.</p><h2 id="estrutura-recomendada" tabindex="-1">Estrutura recomendada <a class="header-anchor" href="#estrutura-recomendada" aria-label="Permalink to “Estrutura recomendada”">​</a></h2><ul><li><code>admin()</code> para perfis fixos e previsiveis;</li><li><code>user(...)</code> para gerar usuarios dinamicos por execucao;</li><li>tipos compartilhados vindo do modulo correspondente.</li></ul><h2 id="objetivo" tabindex="-1">Objetivo <a class="header-anchor" href="#objetivo" aria-label="Permalink to “Objetivo”">​</a></h2><p>Centralizar a definicao de usuarios usados em setup, API e E2E.</p><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to “Beneficios”">​</a></h2><ul><li>reduz duplicacao;</li><li>facilita manutencao de credenciais;</li><li>deixa claro quais perfis existem no projeto.</li></ul><h2 id="adaptacoes-esperadas" tabindex="-1">Adaptacoes esperadas <a class="header-anchor" href="#adaptacoes-esperadas" aria-label="Permalink to “Adaptacoes esperadas”">​</a></h2><p>Cada projeto deve ajustar:</p><ul><li>dominio de email;</li><li>senha padrao;</li><li>nomes de perfis;</li><li>roles reais da aplicacao.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("referencias/fixtures-users.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fixturesUsers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fixturesUsers as default
};
