//#region - Définition/Suppression/Masquage d'éléments dans JEI
function minecraft() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["minecraft:debug_stick", "minecraft:structure_void"]
  let hiding = [/minecraft:tipped_arrow/]
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
minecraft()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Crafting Table
  e.remove({ id: "minecraft:crafting_table" })
  e.replaceInput({ input: "minecraft:crafting_table" }, "minecraft:crafting_table", "#forge:workbench")
  //#endregion
  //#region - Red Sand
  e.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {
        item: "minecraft:granite"
      }
    },
    output: {
      item: "minecraft:red_sand"
    }
  })
  //#endregion
  //#region - Ice Conversion
  e.shapeless("9x minecraft:ice", "minecraft:packed_ice")
  //#endregion
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
