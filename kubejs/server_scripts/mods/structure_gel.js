//#region - Définition/Suppression/Masquage d'éléments dans JEI
function structure_gel() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [];
  let hiding = [/structure_gel:/];
  // Fonctions pour supprimer les tags et les crafts des éléments définis juste au dessus
  function handle_Tags(e) {
    e.removeAllTagsFrom(unused);
    e.add("forge:hiding", [unused, hiding]);
  }
  function handle_Recipes(e) {
    e.remove([{ input: unused }, { output: unused }]);
  }
  ServerEvents.tags(["item", "block"], handle_Tags);
  ServerEvents.recipes(handle_Recipes);
}
structure_gel();
//#endregion
