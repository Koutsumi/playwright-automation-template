import { _ as _export_sfc, o as openBlock, c as createElementBlock, ai as createStaticVNode } from "./chunks/framework.DqyrCGwr.js";
const __pageData = JSON.parse('{"title":"Headers","description":"","frontmatter":{},"headers":[],"relativePath":"referencias/headers.md","filePath":"referencias/headers.md"}');
const _sfc_main = { name: "referencias/headers.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="headers" tabindex="-1">Headers <a class="header-anchor" href="#headers" aria-label="Permalink to “Headers”">​</a></h1><p>O arquivo <code>shared/headers.ts</code> centraliza os headers base usados pelos modulos de API.</p><h2 id="estrutura-atual" tabindex="-1">Estrutura atual <a class="header-anchor" href="#estrutura-atual" aria-label="Permalink to “Estrutura atual”">​</a></h2><p>O template ja considera uma estrutura simples:</p><ul><li><code>Content-Type: application/json</code></li><li><code>origin</code> baseado em <code>BASE_API_URL</code></li></ul><h2 id="objetivo" tabindex="-1">Objetivo <a class="header-anchor" href="#objetivo" aria-label="Permalink to “Objetivo”">​</a></h2><p>Evitar repeticao de headers em cada service ou client de API.</p><h2 id="quando-adaptar" tabindex="-1">Quando adaptar <a class="header-anchor" href="#quando-adaptar" aria-label="Permalink to “Quando adaptar”">​</a></h2><p>Cada projeto pode complementar esse arquivo com:</p><ul><li><code>Authorization</code></li><li>headers de tenant</li><li>headers de idioma</li><li>headers de versao da API</li></ul><h2 id="regra-pratica" tabindex="-1">Regra pratica <a class="header-anchor" href="#regra-pratica" aria-label="Permalink to “Regra pratica”">​</a></h2><p>Se um header for comum a varias chamadas, ele deve nascer em <code>shared/headers.ts</code>.</p><p>Se ele existir apenas para um endpoint muito especifico, pode ser montado localmente no modulo.</p>', 13)
  ])]);
}
const headers = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  headers as default
};
