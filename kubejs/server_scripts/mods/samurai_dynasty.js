//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Samurai Leggings Conflicts
  e.remove([{ id: "samurai_dynasty:blue_samurai_leggings_master" }, { id: "samurai_dynasty:white_samurai_leggings_master" }])
  let potting_samurai_leggings = (material, leggings) => {
    e.shaped(leggings, ["AAA", "B B", "B B"], {
      A: "mekanism:ingot_steel",
      B: material
    })
  }
  potting_samurai_leggings("samurai_dynasty:silver_ingot", "samurai_dynasty:white_samurai_leggings_master")
  potting_samurai_leggings("samurai_dynasty:aquamarine", "samurai_dynasty:blue_samurai_leggings_master")
  //#endregion
})
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function samurai_dynasty() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [/samurai_dynasty:steel_block/, /samurai_dynasty:steel_ingot/, /samurai_dynasty:steel_nugget/]
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
samurai_dynasty()
//#endregion
