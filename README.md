# 🎨 Galerie Interactive – Projet pédagogique M1

## Premier pas (ce que j'ai réussi)

- Récupération des fichiers et sauvegarde des fichiers sur Github
- Importation du dossier Github sur Vercel sans soucis
- Après avoir changer l'URL, mon site est déployé sur : galerie-interactive-victor-christmann.vercel.app

## Premier pas (ce avec quoi j'ai galéré)

- Import sur la base de données de la Table : images

> Solution trouvée via le SQL Editor (importation de la table)

![Import du site via Nuxt & Supabase & Vercel](assets/captures/Etape1-Nuxt.png)

## Site fonctionnel test de plusieurs modifications (Titre / CSS)

- Dans un premier temps je modifie mon 'index.vue'

> Je change le titre et le CSS du bouton 'Interface d'administration' afin d'effectuer un premier changement mineur

- Ensuite je créé un nouveau commit pour envoyer mes modifitions sur Github

> git add . / git commit -m "Amélioration du design & changement du titre" / git push

- Je regarde dans mon Github que les fichiers sont bien remplacés puis que mon Build s'effectue bien sur Vercel

![Constatation des changements sur le site live (Vercel)](assets/captures/Etape2-Nuxt.png)

## Ajout d'une image (Test Supabase)

- Je me rend dans l'interface d'administration puis entre de nouvelles données (sur les chats)

> Lors du clique sur : Ajouter l'image, celle ci s'ajoute bien à ma liste sur le site et dans ma base Supabase

- Remarque : La position de l'image peut être la même pour 2 images ce qui influ sur l'ajout d'une image

![Ajout d'une nouvelle images avec un problème de positionnement](assets/captures/Etape3-Nuxt.png)

## Gérer le positionnement des images d'une meilleure façon (pas de doublon de positionnement) lors de la création d'un élément

- Dans un premier temps le but est de penser lors de l'ajout à décaler chaque positionnement d'image

> Pour cela lors de l'ajout d'une image, si une image se trouver à la même position il faudra décaler celle-ci !

```javascript
// 2. Vérification des positions existantes (valeur unique pour chaque image)
const positionExists = images.value.some(
  (img) => img.position === newImage.value.position
);
// 3. Réajuster les positions (si nécéssaire => si la position choisie existe déjà)
if (positionExists) {
  newImage.value.position;
  images.value.forEach(async (img) => {
    if (img.position >= newImage.value.position) {
      await updateImage(img.id, { position: img.position + 1 });
    }
  });
}
```

- Ainsi j'obtiens bien le réajustement des positions dans le cas où il y aurait un conflit

![Avant l'ajout de l'image d'un chien - les positions sont toutes différentes](assets/captures/Etape4.1-Nuxt.png)

> Je créé un nouvel élément avec la photo d'un chien et la position à '1'

![Après l'ajout de l'image d'un chien - les positions sont bien modifiées](assets/captures/Etape4.2-Nuxt.png)

## Modifications CSS

- Ensuite j'ai voulu donner ma pâte au site en changeant des propriétés CSS (filter / color / transform...)
- J'ai aussi réglé un légé soucis de centrage en mode mobile du bouton 'Retour à la Galerie'...

## Dernier problème : Changer l'odre d'affichage en modification

> Pour cela ce que je vais faire c'est simplement gérer le fait de monter / descendre les positions des images que cela impacte

```javascript
const handleSaveEdit = async (id: string) => {
  try {
    const imageToEdit = images.value.find((img) => img.id === id);
    if (!imageToEdit) return;

    const oldPosition = imageToEdit.position;
    const newPosition = editForm.value.position;

    // Si la position ne change pas → update
    if (oldPosition === newPosition) {
      await updateImage(id, editForm.value);
      await loadImages();
      cancelEdit();
      return;
    }

    // Faire descendre une position
    if (oldPosition < newPosition) {
      for (const img of images.value) {
        if (
          img.id !== id &&
          img.position > oldPosition &&
          img.position <= newPosition
        ) {
          await updateImage(img.id, {
            position: img.position - 1,
          });
        }
      }
    }

    // Faire remonter une position
    if (oldPosition > newPosition) {
      for (const img of images.value) {
        if (
          img.id !== id &&
          img.position >= newPosition &&
          img.position < oldPosition
        ) {
          await updateImage(img.id, {
            position: img.position + 1,
          });
        }
      }
    }

    // Mise à jour finale de l'image éditée
    await updateImage(id, {
      ...editForm.value,
      position: newPosition,
    });

    await loadImages();
    cancelEdit();
  } catch (error) {
    console.error("Erreur handleSaveEdit:", error);
    alert("Erreur lors de la modification");
  }
};
```

- Ainsi j'obtiens bien le réajustement des positions dans le cas où il y aurait un conflit...

![Avant la modification de la position de l'image du chien](assets/captures/Etape5.1-Nuxt.png)

![Après la modification de la position de l'image du chien](assets/captures/Etape5.2-Nuxt.png)
