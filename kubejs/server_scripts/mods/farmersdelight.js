//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([{ id: "farmersdelight:cutting/amethyst_block" }, { id: "farmersdelight:cake_from_milk_bottle" }, { id: "festive_delight:cinnamon_craft_fabric" }])
  //#endregion
  //#region - Rich Soil
  e.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "minecraft:mycelium"
      },
      {
        amount: 1000,
        fluid: "sliceanddice:fertilizer"
      }
    ],
    results: [
      {
        item: "farmersdelight:rich_soil"
      }
    ]
  })
  //#endregion
})
//#endregion
