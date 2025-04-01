//#region - Crafts
ServerEvents.recipes(e => {
  e.remove({ id: "candlelight:rose" })
  e.shapeless("3x candlelight:rose", ["minecraft:poppy", "minecraft:poppy", "minecraft:poppy"])
})
//#endregion
