//#region - Définition/Suppression/Masquage d'éléments dans JEI
function jamd() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = []
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
jamd()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.add("forge:jamd/holystone", "aether:holystone")
  e.add("forge:jamd/stone", "minecraft:stone")
  e.add("forge:jamd/deepslate", "minecraft:deepslate")
  e.add("forge:jamd/radrock", "alexscaves:radrock")
  e.add("forge:jamd/coprolith", "alexscaves:coprolith")
  e.add("forge:jamd/galena", "alexscaves:galena")
  e.add("forge:jamd/guanostone", "alexscaves:guanostone")
  e.add("forge:jamd/depthrock", "undergarden:depthrock")
  e.add("forge:jamd/shiverstone", "undergarden:shiverstone")
  e.add("forge:jamd/netherrack", "minecraft:netherrack")
  e.add("forge:jamd/sculk_stone", "deeperdarker:sculk_stone")
  e.add("forge:jamd/gloomslate", "deeperdarker:gloomslate")
  e.add("forge:jamd/soul_bricks", "stalwart_dungeons:soul_bricks")
  e.add("forge:jamd/end_stone", "minecraft:end_stone")
  e.add("forge:jamd/purpur_bricks", "stalwart_dungeons:purpur_bricks")
})
//#endregion
