//#region - Crafts
ServerEvents.recipes(e => {
  e.remove([{ id: /waystones:.*_waystone/ }, { id: "waystones:warp_stone" }])
  let potting_waystones = (material, waystone) => {
    e.shaped(waystone, [" A ", "ABA", "CCC"], { A: material, B: "waystones:warp_dust", C: "minecraft:obsidian" })
  }
  potting_waystones("minecraft:stone_bricks", "waystones:waystone")
  potting_waystones("minecraft:mossy_stone_bricks", "waystones:mossy_waystone")
  potting_waystones("minecraft:chiseled_sandstone", "waystones:sandy_waystone")
})
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function waystones() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["waystones:warp_stone"]
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
waystones()
//#endregion
