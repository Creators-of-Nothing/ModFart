//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Smooth Bone Block
  e.remove({ id: "alexscaves:furnace/smooth_bone_smelting" })
  e.custom({
    type: "minecraft:blasting",
    ingredient: {
      item: "minecraft:bone_block"
    },
    result: "alexscaves:smooth_bone",
    experience: 0.1,
    cookingtime: 100
  })
  //#endregion
})
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function alexscaves() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["alexscaves:block_of_uranium", "alexscaves:nuclear_furnace_component", "alexscaves:uranium_shard", "alexscaves:uranium"]
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
alexscaves()
//#endregion
