import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"docs/guia","description":"","frontmatter":{},"headers":[],"relativePath":"guia/README.md","filePath":"guia/README.md"}');
const _sfc_main = { name: "guia/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="docs-guia" tabindex="-1">docs/guia <a class="header-anchor" href="#docs-guia" aria-label="Permalink to “docs/guia”">​</a></h1><p>Esta pasta reúne a documentação de uso do template.</p><h2 id="o-que-deve-conter" tabindex="-1">O que deve conter <a class="header-anchor" href="#o-que-deve-conter" aria-label="Permalink to “O que deve conter”">​</a></h2><ul><li>passo a passo para começar um novo projeto;</li><li>explicação da estrutura de pastas;</li><li>boas práticas obrigatórias do template;</li><li>decisões arquiteturais que todo QA precisa conhecer antes de automatizar.</li></ul><h2 id="estilo-recomendado" tabindex="-1">Estilo recomendado <a class="header-anchor" href="#estilo-recomendado" aria-label="Permalink to “Estilo recomendado”">​</a></h2><ul><li>textos curtos e objetivos;</li><li>exemplos com caminhos reais do projeto;</li><li>orientação voltada para quem acabou de clonar o repositório;</li><li>conteúdo introdutório antes de detalhes técnicos.</li></ul><h2 id="o-que-evitar" tabindex="-1">O que evitar <a class="header-anchor" href="#o-que-evitar" aria-label="Permalink to “O que evitar”">​</a></h2><ul><li>duplicar documentação técnica profunda que já exista em <code>docs/referencias</code>;</li><li>criar guia genérico sem relação com a estrutura atual do projeto.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guia/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
