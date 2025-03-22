//#region - Remove Ores (Credit to XenoArea)
WorldgenEvents.remove(e => {
  e.removeOres(p => {
    p.blocks = ["create_unbreakable:luminarchy_block", "create_unbreakable:philolite_block"]
  })
})
//#endregion
