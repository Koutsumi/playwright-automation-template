import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Próximos Passos","description":"","frontmatter":{},"headers":[],"relativePath":"guia/proximos-passos.md","filePath":"guia/proximos-passos.md"}');
const _sfc_main = { name: "guia/proximos-passos.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="proximos-passos" tabindex="-1">Próximos Passos <a class="header-anchor" href="#proximos-passos" aria-label="Permalink to “Próximos Passos”">​</a></h1><p>Depois de iniciar um projeto com este template:</p><ol><li>definir os módulos reais do domínio;</li><li>configurar <code>.env</code> e credenciais;</li><li>criar o setup global e os setups por módulo;</li><li>escolher a estratégia de banco em <code>shared/database</code>;</li><li>documentar particularidades do projeto sem quebrar o padrão base.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guia/proximos-passos.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const proximosPassos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  proximosPassos as default
};
