//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Spice Rack
  e.remove({ id: "cookingforblockheads:spice_rack" });
  e.shaped("cookingforblockheads:spice_rack", ["AA"], { A: "#minecraft:wooden_slabs" });
  //#endregion
});
//#endregion
