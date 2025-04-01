//#region - Définition/Suppression/Masquage d'éléments dans JEI
function farmingforblockheads() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [/farmingforblockheads:fertilized_farmland_/, "farmingforblockheads:green_fertilizer", "farmingforblockheads:red_fertilizer", "farmingforblockheads:yellow_fertilizer"]
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
farmingforblockheads()
//#endregion
