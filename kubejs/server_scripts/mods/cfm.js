//#region - Définition/Suppression/Masquage d'éléments dans JEI
function cfm() {
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
cfm()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  e.remove([
    { id: "cfm:light_gray_picket_fence" },
    { id: "cfm:gray_picket_fence" },
    { id: "cfm:black_picket_fence" },
    { id: "cfm:brown_picket_fence" },
    { id: "cfm:red_picket_fence" },
    { id: "cfm:orange_picket_fence" },
    { id: "cfm:yellow_picket_fence" },
    { id: "cfm:lime_picket_fence" },
    { id: "cfm:green_picket_fence" },
    { id: "cfm:cyan_picket_fence" },
    { id: "cfm:light_blue_picket_fence" },
    { id: "cfm:blue_picket_fence" },
    { id: "cfm:purple_picket_fence" },
    { id: "cfm:magenta_picket_fence" },
    { id: "cfm:pink_picket_fence" }
  ])
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
