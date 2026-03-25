import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Page Objects","description":"","frontmatter":{},"headers":[],"relativePath":"referencias/page-objects.md","filePath":"referencias/page-objects.md"}');
const _sfc_main = { name: "referencias/page-objects.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="page-objects" tabindex="-1">Page Objects <a class="header-anchor" href="#page-objects" aria-label="Permalink to “Page Objects”">​</a></h1><p>Os testes E2E do template devem seguir o padrao de <code>Page Object</code>.</p><h2 id="regra-principal" tabindex="-1">Regra principal <a class="header-anchor" href="#regra-principal" aria-label="Permalink to “Regra principal”">​</a></h2><p>Cada pagina deve ter sua propria classe.</p><p>Exemplo:</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({ "--shiki-light": "#24292e", "--shiki-dark": "#e1e4e8", "--shiki-light-bg": "#fff", "--shiki-dark-bg": "#24292e" })}" tabindex="0" dir="ltr"><code><span class="line"><span>pages/</span></span>
<span class="line"><span>└─ auth/</span></span>
<span class="line"><span>   └─ login.page.ts</span></span></code></pre></div><h2 id="locators" tabindex="-1">Locators <a class="header-anchor" href="#locators" aria-label="Permalink to “Locators”">​</a></h2><ul><li>se o locator se repete em mais de um metodo, ele deve virar propriedade da classe;</li><li>se o locator for usado uma unica vez e fizer mais sentido localmente, ele pode ficar dentro do metodo.</li></ul><h2 id="o-que-fica-no-page-object" tabindex="-1">O que fica no Page Object <a class="header-anchor" href="#o-que-fica-no-page-object" aria-label="Permalink to “O que fica no Page Object”">​</a></h2><ul><li>seletores;</li><li>acoes da pagina;</li><li>validacoes de interface fortemente ligadas a essa pagina.</li></ul><h2 id="o-que-nao-fica-no-page-object" tabindex="-1">O que nao fica no Page Object <a class="header-anchor" href="#o-que-nao-fica-no-page-object" aria-label="Permalink to “O que nao fica no Page Object”">​</a></h2><ul><li>regra de negocio da API;</li><li>massa de dados;</li><li>preparacao de banco;</li><li>asserts de alto nivel que pertencem ao objetivo do teste.</li></ul><h2 id="exemplo-do-template" tabindex="-1">Exemplo do template <a class="header-anchor" href="#exemplo-do-template" aria-label="Permalink to “Exemplo do template”">​</a></h2><p>O arquivo <code>pages/auth/login.page.ts</code> mostra a estrutura minima esperada para o fluxo de login.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("referencias/page-objects.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pageObjects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pageObjects as default
};
