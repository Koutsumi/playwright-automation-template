import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"docs/referencias","description":"","frontmatter":{},"headers":[],"relativePath":"referencias/README.md","filePath":"referencias/README.md"}');
const _sfc_main = { name: "referencias/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="docs-referencias" tabindex="-1">docs/referencias <a class="header-anchor" href="#docs-referencias" aria-label="Permalink to “docs/referencias”">​</a></h1><p>Esta pasta guarda referências técnicas e exemplos de apoio.</p><h2 id="o-que-deve-conter" tabindex="-1">O que deve conter <a class="header-anchor" href="#o-que-deve-conter" aria-label="Permalink to “O que deve conter”">​</a></h2><ul><li>documentação de helpers compartilhados;</li><li>exemplos de integração com banco;</li><li>padrões de headers, autenticação e utilitários;</li><li>instruções para módulos reutilizáveis.</li></ul><h2 id="quando-usar-esta-pasta" tabindex="-1">Quando usar esta pasta <a class="header-anchor" href="#quando-usar-esta-pasta" aria-label="Permalink to “Quando usar esta pasta”">​</a></h2><p>Use <code>docs/referencias</code> quando o assunto for técnico e específico demais para ficar em <code>docs/guia</code>, mas ainda precise ficar documentado para reuso do time.</p><h2 id="padrao" tabindex="-1">Padrão <a class="header-anchor" href="#padrao" aria-label="Permalink to “Padrão”">​</a></h2><ul><li>um arquivo por tema;</li><li>nomes de arquivos descritivos em <code>kebab-case</code>;</li><li>exemplos curtos com contexto de uso;</li><li>sempre indique em que pasta do projeto o código relacionado deve ficar.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("referencias/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
