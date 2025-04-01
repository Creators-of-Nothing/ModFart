//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Depthrock Pebble
  e.remove({ id: "undergarden:depthrock_pebble_stonecutting" })
  e.shapeless("9x undergarden:depthrock_pebble", "undergarden:depthrock")
  //#endregion
  //#region - Emptying
  e.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: "undergarden:virulent_mix_bucket"
      }
    ],
    results: [
      {
        fluid: "undergarden:virulent_mix_source",
        amount: 1000
      },
      {
        item: "minecraft:bucket"
      }
    ]
  })
  //#endregion
})
//#endregion
