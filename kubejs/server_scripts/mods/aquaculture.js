//#region - Définition/Suppression/Masquage d'éléments dans JEI
function aquaculture() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "aquaculture:wooden_fillet_knife",
    "aquaculture:stone_fillet_knife",
    "aquaculture:iron_fillet_knife",
    "aquaculture:gold_fillet_knife",
    "aquaculture:diamond_fillet_knife",
    "aquaculture:fish_fillet_raw",
    "aquaculture:fish_fillet_cooked",
    "aquaculture:sushi"
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
aquaculture()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Aquaculture Bounty
  e.remove({ mod: "aquaculture:neptunes_bounty" })
  e.shaped("aquaculture:neptunes_bounty", ["AAA", "ABA", "AAA"], {
    A: "#minecraft:planks",
    B: "aquaculture:neptunium_nugget"
  })
  e.remove({ id: "aquaculture:fish_fillet" })
  //#endregion
  //#region - Neptune's Bounty
  e.remove({ id: "aquaculture:neptunes_bounty" })
  e.blasting("aquaculture:neptunium_nugget", "aquaculture:neptunes_bounty")
  //#endregion
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
