//#region - Définition/Suppression/Masquage d'éléments dans JEI
function wormhole() {
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
wormhole()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Creative Energy Cell
  e.shaped("wormhole:creative_energy_cell", ["ABA", "CDC", "ABA"], {
    A: "kubejs:the_ultimate_plate",
    B: "create:rose_quartz",
    C: "create:pulse_repeater",
    D: "wormhole:advanced_energy_cell"
  })
  //#endregion
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
