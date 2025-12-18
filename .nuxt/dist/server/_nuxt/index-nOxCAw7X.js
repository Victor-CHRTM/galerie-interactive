import { _ as __nuxt_component_0$1 } from "./nuxt-link-D0A62-pK.js";
import { defineComponent, mergeProps, useSSRContext, ref, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-DORlaVx_.js";
import { u as useImages } from "./useImages-Db6qBGOn.js";
import "C:/Users/wetin/Desktop/DesignInterfaces/TD_Nuxt-Starter/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "C:/Users/wetin/Desktop/DesignInterfaces/TD_Nuxt-Starter/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/wetin/Desktop/DesignInterfaces/TD_Nuxt-Starter/node_modules/hookable/dist/index.mjs";
import "C:/Users/wetin/Desktop/DesignInterfaces/TD_Nuxt-Starter/node_modules/unctx/dist/index.mjs";
import "C:/Users/wetin/Desktop/DesignInterfaces/TD_Nuxt-Starter/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/wetin/Desktop/DesignInterfaces/TD_Nuxt-Starter/node_modules/radix3/dist/index.mjs";
import "C:/Users/wetin/Desktop/DesignInterfaces/TD_Nuxt-Starter/node_modules/defu/dist/defu.mjs";
import "C:/Users/wetin/Desktop/DesignInterfaces/TD_Nuxt-Starter/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GalleryItem",
  __ssrInlineRender: true,
  props: {
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gallery-item" }, _attrs))} data-v-c6025c16><div class="image-container" data-v-c6025c16><img${ssrRenderAttr("src", __props.image.image_url)}${ssrRenderAttr("alt", __props.image.title)} class="gallery-image" loading="lazy" data-v-c6025c16><div class="image-overlay" data-v-c6025c16><h3 class="image-title" data-v-c6025c16>${ssrInterpolate(__props.image.title)}</h3>`);
      if (__props.image.description) {
        _push(`<p class="image-description" data-v-c6025c16>${ssrInterpolate(__props.image.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GalleryItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c6025c16"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GalleryGrid",
  __ssrInlineRender: true,
  props: {
    images: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GalleryItem = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gallery-grid" }, _attrs))} data-v-790b10ab>`);
      if (__props.images.length === 0) {
        _push(`<div class="empty-state" data-v-790b10ab><p data-v-790b10ab>Aucune image dans la galerie pour le moment.</p><p class="empty-hint" data-v-790b10ab> Utilisez l&#39;interface d&#39;administration pour ajouter des images. </p></div>`);
      } else {
        _push(`<div class="grid-container" data-v-790b10ab><!--[-->`);
        ssrRenderList(__props.images, (image) => {
          _push(ssrRenderComponent(_component_GalleryItem, {
            key: image.id,
            image
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GalleryGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-790b10ab"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const images = ref([]);
    const loading = ref(true);
    const error = ref(false);
    useImages();
    useHead({
      title: "Galerie Interactive - M1 Paris 8",
      meta: [
        {
          name: "description",
          content: "Galerie d'images interactive - Projet pédagogique Master 1 Design d'interfaces"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_GalleryGrid = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-8b2ef62a><header class="page-header" data-v-8b2ef62a><div class="header-content" data-v-8b2ef62a><h1 class="main-title" data-v-8b2ef62a>Galerie Interactive</h1><p class="subtitle" data-v-8b2ef62a> Projet pédagogique M1 - Design d&#39;interfaces interactives </p><p class="university" data-v-8b2ef62a>Université Paris 8</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "admin-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Interface d&#39;administration → `);
          } else {
            return [
              createTextVNode(" Interface d'administration → ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><main class="main-content" data-v-8b2ef62a>`);
      if (loading.value) {
        _push(`<div class="loading-state" data-v-8b2ef62a><div class="loader" data-v-8b2ef62a></div><p data-v-8b2ef62a>Chargement de la galerie...</p></div>`);
      } else if (error.value) {
        _push(`<div class="error-state" data-v-8b2ef62a><p data-v-8b2ef62a>❌ Erreur lors du chargement des images</p><button class="retry-button" data-v-8b2ef62a> Réessayer </button></div>`);
      } else {
        _push(ssrRenderComponent(_component_GalleryGrid, { images: images.value }, null, _parent));
      }
      _push(`</main><footer class="page-footer" data-v-8b2ef62a><p data-v-8b2ef62a> Propulsé par <a href="https://nuxt.com" target="_blank" rel="noopener" data-v-8b2ef62a>Nuxt 3</a>, <a href="https://supabase.com" target="_blank" rel="noopener" data-v-8b2ef62a>Supabase</a> &amp; <a href="https://vercel.com" target="_blank" rel="noopener" data-v-8b2ef62a>Vercel</a></p></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b2ef62a"]]);
export {
  index as default
};
//# sourceMappingURL=index-nOxCAw7X.js.map
