import { _ as __nuxt_component_0 } from "./nuxt-link-D0A62-pK.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import { u as useImages } from "./useImages-Db6qBGOn.js";
import { u as useHead, _ as _export_sfc } from "./_plugin-vue_export-helper-DORlaVx_.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    useImages();
    const images = ref([]);
    const loading = ref(true);
    const uploading = ref(false);
    const successMessage = ref("");
    const errorMessage = ref("");
    ref(null);
    const newImage = ref({
      title: "",
      description: "",
      position: 0
    });
    const editingId = ref(null);
    const editForm = ref({
      title: "",
      description: "",
      position: 0
    });
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    };
    useHead({
      title: "Administration - Galerie Interactive",
      meta: [
        {
          name: "robots",
          content: "noindex, nofollow"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-page" }, _attrs))} data-v-60fc0ca8><header class="admin-header" data-v-60fc0ca8><div class="header-content" data-v-60fc0ca8><h1 data-v-60fc0ca8>🎨 Interface d&#39;Administration</h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "back-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ← Retour à la galerie `);
          } else {
            return [
              createTextVNode(" ← Retour à la galerie ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><main class="admin-content" data-v-60fc0ca8><section class="add-section card" data-v-60fc0ca8><h2 data-v-60fc0ca8>➕ Ajouter une nouvelle image</h2><form class="add-form" data-v-60fc0ca8><div class="form-group" data-v-60fc0ca8><label for="file-input" data-v-60fc0ca8>Fichier image *</label><input id="file-input" type="file" accept="image/*" required class="file-input" data-v-60fc0ca8><p class="help-text" data-v-60fc0ca8>JPG, PNG, GIF ou WebP - Max 5 MB</p></div><div class="form-group" data-v-60fc0ca8><label for="title-input" data-v-60fc0ca8>Titre *</label><input id="title-input"${ssrRenderAttr("value", newImage.value.title)} type="text" placeholder="Ex: Architecture moderne" required class="text-input" data-v-60fc0ca8></div><div class="form-group" data-v-60fc0ca8><label for="description-input" data-v-60fc0ca8>Description</label><textarea id="description-input" placeholder="Décrivez brièvement l&#39;image..." rows="3" class="text-input" data-v-60fc0ca8>${ssrInterpolate(newImage.value.description)}</textarea></div><div class="form-group" data-v-60fc0ca8><label for="position-input" data-v-60fc0ca8>Position d&#39;affichage *</label><input id="position-input"${ssrRenderAttr("value", newImage.value.position)} type="number" min="0" required class="text-input" data-v-60fc0ca8><p class="help-text" data-v-60fc0ca8> Ordre d&#39;affichage (0 = premier, 1 = deuxième, etc.) </p></div><button type="submit"${ssrIncludeBooleanAttr(uploading.value) ? " disabled" : ""} class="submit-button" data-v-60fc0ca8>${ssrInterpolate(uploading.value ? "⏳ Upload en cours..." : "✓ Ajouter l'image")}</button>`);
      if (successMessage.value) {
        _push(`<p class="success-message" data-v-60fc0ca8> ✓ ${ssrInterpolate(successMessage.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<p class="error-message" data-v-60fc0ca8> ❌ ${ssrInterpolate(errorMessage.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></section><section class="list-section card" data-v-60fc0ca8><h2 data-v-60fc0ca8>📋 Images existantes (${ssrInterpolate(images.value.length)})</h2>`);
      if (loading.value) {
        _push(`<div class="loading" data-v-60fc0ca8><div class="loader" data-v-60fc0ca8></div><p data-v-60fc0ca8>Chargement...</p></div>`);
      } else if (images.value.length > 0) {
        _push(`<div class="images-list" data-v-60fc0ca8><!--[-->`);
        ssrRenderList(images.value, (image) => {
          _push(`<div class="image-card" data-v-60fc0ca8><div class="image-preview" data-v-60fc0ca8><img${ssrRenderAttr("src", image.image_url)}${ssrRenderAttr("alt", image.title)} data-v-60fc0ca8></div><div class="image-info" data-v-60fc0ca8>`);
          if (editingId.value === image.id) {
            _push(`<div class="edit-mode" data-v-60fc0ca8><input${ssrRenderAttr("value", editForm.value.title)} type="text" placeholder="Titre" class="edit-input" data-v-60fc0ca8><textarea placeholder="Description" rows="2" class="edit-input" data-v-60fc0ca8>${ssrInterpolate(editForm.value.description)}</textarea><input${ssrRenderAttr("value", editForm.value.position)} type="number" placeholder="Position" class="edit-input small" data-v-60fc0ca8><div class="edit-actions" data-v-60fc0ca8><button class="save-button" data-v-60fc0ca8> ✓ Enregistrer </button><button class="cancel-button" data-v-60fc0ca8> ✕ Annuler </button></div></div>`);
          } else {
            _push(`<div class="view-mode" data-v-60fc0ca8><h3 data-v-60fc0ca8>${ssrInterpolate(image.title)}</h3><p class="description" data-v-60fc0ca8>${ssrInterpolate(image.description || "Aucune description")}</p><p class="metadata" data-v-60fc0ca8> Position: ${ssrInterpolate(image.position)} • Créée le ${ssrInterpolate(formatDate(image.created_at))}</p><div class="actions" data-v-60fc0ca8><button class="edit-button" data-v-60fc0ca8> ✏️ Modifier </button><button class="delete-button" data-v-60fc0ca8> 🗑️ Supprimer </button></div></div>`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="empty" data-v-60fc0ca8><p data-v-60fc0ca8>Aucune image pour le moment. Ajoutez-en une ci-dessus !</p></div>`);
      }
      _push(`</section></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-60fc0ca8"]]);
export {
  admin as default
};
//# sourceMappingURL=admin-CHsO1N1f.js.map
