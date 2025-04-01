//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.add("forge:juices/applejuice", "minecraft:apple")
  e.add("forge:juices/melonjuice", "minecraft:melon_slice")
  e.add("forge:juices/glowberryjuice", "minecraft:glow_berries")
  e.add("forge:juices/sweetberryjuice", "minecraft:sweet_berries")
  e.add("forge:juices/chorusjuice", "minecraft:chorus_fruit")
})
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([
    { id: "pamhc2crops:bakedsweetpotatoitem_forge" },
    { id: "pamhc2crops:bakedsweetpotatoitem_smoker" },
    { id: "pamhc2foodcore:glowberryjuiceitemitem" },
    { id: "pamhc2foodcore:cookingoilitem_x2_nuts" },
    { id: "pamhc2crops:cookingoil_x4_canola_x2" },
    { id: "pamhc2foodextended:mixedsaladitem" }
  ])
  //#endregion
})
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function pamhc2() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "pamhc2crops:aridgarden",
    "pamhc2crops:frostgarden",
    "pamhc2crops:shadedgarden",
    "pamhc2crops:soggygarden",
    "pamhc2crops:tropicalgarden",
    "pamhc2crops:windygarden",
    "pamhc2foodcore:applejuiceitem",
    "pamhc2foodcore:chorusjuiceitem",
    "pamhc2foodcore:glowberryjuiceitem",
    "pamhc2foodcore:melonjuiceitem",
    "pamhc2foodcore:p8juiceitem",
    "pamhc2foodcore:sweetberryjuiceitem",
    "pamhc2foodextended:blackberrycobbleritem",
    "pamhc2foodextended:peachcobbleritem",
    /pamhc2trees:pam/
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
pamhc2()
//#endregion
