//#region - Définition/Suppression/Masquage d'éléments dans JEI
function manyideas() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "manyideas_core:plate_copper",
    "manyideas_core:plate_gold",
    "manyideas_core:plate_iron",
    "manyideas_core:plate_quartz"
  ]
  let hiding = []
  // Fonctions pour supprimer les tags et les crafts des éléments définis juste au dessus
  function handle_Tags(e) {
    e.removeAllTagsFrom(unused)
    e.add("forge:hiding", [unused, hiding])
  }
  function handle_Recipes(e) {
    e.remove([{ input: unused }, { output: unused }])
  }
  ServerEvents.tags(["item", "block"], handle_Tags)
  ServerEvents.recipes(handle_Recipes)
}
manyideas()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
