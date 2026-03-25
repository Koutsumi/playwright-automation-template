import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"docs","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md"}');
const _sfc_main = { name: "README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="docs" tabindex="-1">docs <a class="header-anchor" href="#docs" aria-label="Permalink to “docs”">​</a></h1><p>Esta pasta concentra a documentação oficial do template.</p><h2 id="o-que-deve-existir-aqui" tabindex="-1">O que deve existir aqui <a class="header-anchor" href="#o-que-deve-existir-aqui" aria-label="Permalink to “O que deve existir aqui”">​</a></h2><ul><li>guias de onboarding;</li><li>explicações sobre a estrutura do projeto;</li><li>padrões de código e organização;</li><li>referências técnicas reutilizáveis pelo time.</li></ul><h2 id="organizacao-esperada" tabindex="-1">Organização esperada <a class="header-anchor" href="#organizacao-esperada" aria-label="Permalink to “Organização esperada”">​</a></h2><ul><li><code>guia/</code>: conteúdos de entrada, visão geral e regras de uso do template;</li><li><code>referencias/</code>: tópicos técnicos mais específicos;</li><li><code>.vitepress/</code>: configuração da documentação.</li></ul><h2 id="regras" tabindex="-1">Regras <a class="header-anchor" href="#regras" aria-label="Permalink to “Regras”">​</a></h2><ul><li>escreva em português claro e direto;</li><li>prefira instruções copiáveis pelo QA;</li><li>mantenha a documentação coerente com a estrutura real do repositório;</li><li>atualize a doc sempre que uma pasta, convenção ou fluxo mudar.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
