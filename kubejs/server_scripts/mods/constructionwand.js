//#region - Crafts
ServerEvents.recipes(e => {
  e.remove([{ id: "constructionwand:stone_wand" }, { id: "constructionwand:iron_wand" }, { id: "constructionwand:diamond_wand" }, { id: "constructionwand:infinity_wand" }])
  let potting_wand = (material, wand) => {
    e.shaped(wand, [" A", "B "], { A: material, B: "kubejs:wood_rod" })
  }
  potting_wand("#forge:cobblestone", "constructionwand:stone_wand")
  potting_wand("minecraft:iron_ingot", "constructionwand:iron_wand")
  potting_wand("minecraft:diamond", "constructionwand:diamond_wand")
  potting_wand("minecraft:nether_star", "constructionwand:infinity_wand")
})
//#endregion
