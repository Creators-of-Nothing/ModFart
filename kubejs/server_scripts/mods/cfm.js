//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
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
  ]);
  //#endregion
  //#region - White Picket Fence
  e.remove({ id: "cfm:white_picket_fence" });
  e.shaped("12x cfm:white_picket_fence", ["ABA", "ABA", "ABA"], { A: "minecraft:white_concrete", B: "#forge:rods/wooden" });
});
//#endregion
