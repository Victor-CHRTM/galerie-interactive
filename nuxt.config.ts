// Configuration principale de Nuxt 3
// Ce fichier définit les paramètres du projet

export default defineNuxtConfig({
  // Active la compatibilité avec les dernières fonctionnalités
  compatibilityDate: "2025-12-18",

  // Mode de développement avec source maps pour le débogage
  devtools: { enabled: true },

  // Variables d'environnement accessibles côté client (préfixe NUXT_PUBLIC_)
  runtimeConfig: {
    public: {
      // injectées automatiquement par Nuxt
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    },
  },

  // CSS globale
  css: ["~/assets/css/main.css"],

  // Métadonnées de la page
  app: {
    head: {
      title: "Galerie Interactive - CHRISTMANN Victor",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Projet pédagogique de galerie d'images avec gestion de contenu version modifiée",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
