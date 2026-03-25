import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Setup por Modulo","description":"","frontmatter":{},"headers":[],"relativePath":"referencias/setup-modules.md","filePath":"referencias/setup-modules.md"}');
const _sfc_main = { name: "referencias/setup-modules.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="setup-por-modulo" tabindex="-1">Setup por Modulo <a class="header-anchor" href="#setup-por-modulo" aria-label="Permalink to “Setup por Modulo”">​</a></h1><p>Cada modulo pode ter seu proprio arquivo de setup para preparar dados, autenticacao e cookies antes da execucao dos testes.</p><p>No template atual, o exemplo principal esta em <code>tests/api/auth/auth.setup.ts</code> e foi inspirado no fluxo do repositório <code>padrao</code>.</p><h2 id="estrutura-esperada" tabindex="-1">Estrutura esperada <a class="header-anchor" href="#estrutura-esperada" aria-label="Permalink to “Estrutura esperada”">​</a></h2><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({ "--shiki-light": "#24292e", "--shiki-dark": "#e1e4e8", "--shiki-light-bg": "#fff", "--shiki-dark-bg": "#24292e" })}" tabindex="0" dir="ltr"><code><span class="line"><span>tests/</span></span>
<span class="line"><span>├─ api/</span></span>
<span class="line"><span>│  └─ auth/</span></span>
<span class="line"><span>│     ├─ auth.setup.ts</span></span>
<span class="line"><span>│     ├─ success.spec.ts</span></span>
<span class="line"><span>│     └─ errors.spec.ts</span></span>
<span class="line"><span>└─ e2e/</span></span>
<span class="line"><span>   └─ auth/</span></span>
<span class="line"><span>      ├─ auth.setup.ts</span></span>
<span class="line"><span>      ├─ success.spec.ts</span></span>
<span class="line"><span>      └─ errors.spec.ts</span></span></code></pre></div><h2 id="fluxo-logico-recomendado" tabindex="-1">Fluxo logico recomendado <a class="header-anchor" href="#fluxo-logico-recomendado" aria-label="Permalink to “Fluxo logico recomendado”">​</a></h2><ol><li>identificar o usuario que a suite precisa;</li><li>limpar dados antigos no banco, se necessario;</li><li>recriar esse usuario via camada de banco;</li><li>executar login quando a suite depender de sessao autenticada;</li><li>salvar <code>storageState</code> em <code>.auth/</code> apenas para suites que precisem começar autenticadas.</li></ol><h2 id="quando-usar-storagestate" tabindex="-1">Quando usar storageState <a class="header-anchor" href="#quando-usar-storagestate" aria-label="Permalink to “Quando usar storageState”">​</a></h2><p>Use <code>storageState</code> em suites de area autenticada, como dashboard, listagens internas ou fluxos administrativos.</p><p>Evite <code>storageState</code> em testes de login, porque nesses casos o proprio login e o comportamento que esta sendo validado.</p><h2 id="boas-praticas" tabindex="-1">Boas praticas <a class="header-anchor" href="#boas-praticas" aria-label="Permalink to “Boas praticas”">​</a></h2><ul><li>mantenha o setup no mesmo modulo dos testes que dependem dele;</li><li>concentre a logica de banco em <code>shared/database</code>;</li><li>centralize o login em helpers de modulo, como <code>modules/auth/helpers/</code>;</li><li>use fixtures para definir perfis previsiveis, como <code>admin()</code>.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("referencias/setup-modules.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const setupModules = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  setupModules as default
};
