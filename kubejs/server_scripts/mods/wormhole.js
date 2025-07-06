//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Creative Energy Cell
  e.shaped("wormhole:creative_energy_cell", ["ABA", "CDC", "ABA"], {
    A: "kubejs:the_ultimate_plate",
    B: "create:rose_quartz",
    C: "create:pulse_repeater",
    D: "wormhole:advanced_energy_cell"
  });
  //#endregion
});
//#endregion
