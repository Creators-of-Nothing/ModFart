//#region - Définition/Suppression/Masquage d'éléments dans JEI
function stalwart_dungeons() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "stalwart_dungeons:awful_dungeon_spawner",
    "stalwart_dungeons:end_dungeon_spawner",
    "stalwart_dungeons:keeping_castle_spawner"
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
stalwart_dungeons()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
