//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Beach Towel
  e.remove({ id: "beachparty:beach_towel" });
  e.shaped("2x beachparty:beach_towel", ["AA ", "AAB", "AA "], { A: "#minecraft:wool", B: "supplementaries:rope" });
});
//#endregion
