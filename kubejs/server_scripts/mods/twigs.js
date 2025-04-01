//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([{ id: "twigs:cobblestone_from_pebble" }, { id: "twigs:rocky_dirt" }])
  //#endregion
  //#region - Pebble
  e.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "minecraft:cobblestone"
      }
    ],
    processingTime: 200,
    results: [
      {
        count: 64,
        item: "twigs:pebble"
      }
    ]
  })
  //#endregion
})
//#endregion
