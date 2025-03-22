//#region - Définition/Suppression/Masquage d'éléments dans JEI
function undergarden() {
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
undergarden()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Depthrock Pebble
  e.remove({ id: "undergarden:depthrock_pebble_stonecutting" })
  e.shapeless("9x undergarden:depthrock_pebble", "undergarden:depthrock")
  //#endregion
  //#region - Emptying
  e.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: "undergarden:virulent_mix_bucket"
      }
    ],
    results: [
      {
        fluid: "undergarden:virulent_mix_source",
        amount: 1000
      },
      {
        item: "minecraft:bucket"
      }
    ]
  })
  //#endregion
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
