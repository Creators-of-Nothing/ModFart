//#region - Définition/Suppression/Masquage d'éléments dans JEI
function twilightforest() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "twilightforest:alpha_yeti_boss_spawner",
    "twilightforest:final_boss_boss_spawner",
    "twilightforest:hydra_boss_spawner",
    "twilightforest:knight_phantom_boss_spawner",
    "twilightforest:lich_boss_spawner",
    "twilightforest:minoshroom_boss_spawner",
    "twilightforest:naga_boss_spawner",
    "twilightforest:raven_feather",
    "twilightforest:snow_queen_boss_spawner",
    "twilightforest:uncrafting_table",
    "twilightforest:ur_ghast_boss_spawner",
    "twilightforest:candelabra",
    "twilightforest:wrought_iron_fence",
    "twilightforest:keepsake_casket",
    "twilightforest:brittle_potion_flask",
    "twilightforest:greater_potion_flask",
    "twilightforest:cube_of_annihilation"
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
twilightforest()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.remove("modfart/planks/mangrove", /twilightforest:/)
  e.remove("modfart/planks/other", [
    "twilightforest:canopy_planks",
    "twilightforest:dark_planks",
    "twilightforest:mangrove_planks",
    "twilightforest:mining_planks",
    "twilightforest:sorting_planks",
    "twilightforest:time_planks",
    "twilightforest:transformation_planks",
    "twilightforest:twilight_oak_planks"
  ])
})
//#endregion
