//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([{ id: "nifty:hammer/plate_from/copper_ingot" }, { id: "nifty:hammer/plate_from/iron_ingot" }, { id: "nifty:iron_rod" }])
  //#endregion
  //#region - Replace Inputs
  e.replaceInput({ input: "nifty:plate_copper" }, "nifty:plate_copper", "kubejs:copper_plate")
  e.replaceInput({ input: "nifty:plate_iron" }, "nifty:plate_iron", "kubejs:iron_plate")
  e.replaceInput({ input: "nifty:iron_rod" }, "nifty:iron_rod", "kubejs:iron_rod")
  //#endregion
  //#region - Symbols
  e.shaped("nifty:letter_a", [" A ", "ABA", "A A"], {
    A: "antiblocksrechiseled:bright_white",
    B: "antiblocksrechiseled:slab_white_bright"
  })
  e.shaped("nifty:letter_z", ["AAB", " B ", "BAA"], {
    A: "antiblocksrechiseled:bright_white",
    B: "antiblocksrechiseled:slab_white_bright"
  })
  e.shaped("nifty:number_0", ["BAB", "A A", "BAB"], {
    A: "antiblocksrechiseled:bright_white",
    B: "antiblocksrechiseled:slab_white_bright"
  })
  //#endregion
})
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function nifty() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["nifty:iron_rod", "nifty:plate_copper", "nifty:plate_iron"]
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
nifty()
//#endregion
