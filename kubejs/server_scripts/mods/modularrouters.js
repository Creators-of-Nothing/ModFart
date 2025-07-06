//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Creative Module
  e.shaped("modularrouters:creative_module", ["AB", "CD"], {
    A: "modularrouters:blank_module",
    B: "sophisticatedbackpacks:survival_infinity_upgrade",
    C: "sophisticatedstorage:survival_infinity_upgrade",
    D: "mekanism:creative_bin"
  });
  //#endregion
});
//#endregion
