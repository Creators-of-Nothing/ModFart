//#region - Définition/Suppression/Masquage d'éléments dans JEI
function eidolon() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "eidolon:lead_block",
    "eidolon:lead_ingot",
    "eidolon:lead_nugget",
    "eidolon:raw_lead_block",
    "eidolon:raw_lead",
    "eidolon:raw_silver_block",
    "eidolon:raw_silver",
    "eidolon:silver_block",
    "eidolon:silver_ingot",
    "eidolon:silver_nugget",
    "eidolon:scriptorium"
  ]
  let hiding = [/eidolon:spawn_/]
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
eidolon()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
