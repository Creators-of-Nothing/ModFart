//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Replace Inputs
  e.replaceInput({ input: "manyideas_core:plate_copper" }, "manyideas_core:plate_copper", "kubejs:copper_plate");
  e.replaceInput({ input: "manyideas_core:plate_gold" }, "manyideas_core:plate_gold", "kubejs:gold_plate");
  e.replaceInput({ input: "manyideas_core:plate_iron" }, "manyideas_core:plate_iron", "kubejs:iron_plate");
  e.replaceInput({ input: "manyideas_core:plate_quartz" }, "manyideas_core:plate_quartz", "kubejs:nether_quartz_plate");
  //#endregion
  //#region - Copper Barrel Door
  e.remove({ id: "manyideas_doors:doors/copper/door_copper_barrel___crafting" });
  e.shaped("manyideas_doors:door_copper_barrel", ["AA", "BB", "AA"], { A: "kubejs:copper_plate", B: "minecraft:barrel" });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function manyideas() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["manyideas_core:plate_copper", "manyideas_core:plate_gold", "manyideas_core:plate_iron", "manyideas_core:plate_quartz"];
  let hiding = [];
  // Fonctions pour supprimer les tags et les crafts des éléments définis juste au dessus
  function handle_Tags(e) {
    e.removeAllTagsFrom(unused);
    e.add("forge:hiding", [unused, hiding]);
  }
  function handle_Recipes(e) {
    e.remove([{ input: unused }, { output: unused }]);
  }
  ServerEvents.tags(["item", "block"], handle_Tags);
  ServerEvents.recipes(handle_Recipes);
}
manyideas();
//#endregion
