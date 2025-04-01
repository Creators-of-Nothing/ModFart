//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Remove Crafts
  e.remove([
    { id: "morecoal:copper_coal_from_coal" },
    { id: "morecoal:iron_coal_from_copper_coal" },
    { id: "morecoal:lapis_coal_from_iron_coal" },
    { id: "morecoal:redstone_coal_from_lapis_coal" },
    { id: "morecoal:gold_coal_from_redstone_coal" },
    { id: "morecoal:amethyst_coal_from_gold_coal" },
    { id: "morecoal:emerald_coal_from_amethyst_coal" },
    { id: "morecoal:diamond_coal_from_emerald_coal" },
    { id: "morecoal:netherite_coal_from_diamond_coal" },
    { id: "morecoal:omni_coal" }
  ])
  //#endregion
  //#region - Coals
  e.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "morecoal:amethyst_coal"
      },
      {
        item: "morecoal:diamond_coal"
      },
      {
        item: "morecoal:iron_coal"
      },
      {
        item: "morecoal:emerald_coal"
      },
      {
        item: "morecoal:copper_coal"
      },
      {
        item: "morecoal:redstone_coal"
      },
      {
        item: "morecoal:gold_coal"
      },
      {
        item: "morecoal:lapis_coal"
      },
      {
        item: "morecoal:netherite_coal"
      }
    ],
    results: [
      {
        item: "morecoal:omni_coal"
      }
    ]
  })
  let potting_coals = (output, input, dust) => {
    e.custom({
      type: "create:deploying",
      ingredients: [
        {
          item: input
        },
        {
          item: dust
        }
      ],
      results: [
        {
          item: output
        }
      ]
    })
  }
  potting_coals("morecoal:copper_coal", "minecraft:coal", "mekanism:dust_copper")
  potting_coals("morecoal:iron_coal", "morecoal:copper_coal", "mekanism:dust_iron")
  potting_coals("morecoal:lapis_coal", "morecoal:iron_coal", "mekanism:dust_lapis_lazuli")
  potting_coals("morecoal:redstone_coal", "morecoal:lapis_coal", "minecraft:redstone")
  potting_coals("morecoal:gold_coal", "morecoal:redstone_coal", "mekanism:dust_gold")
  potting_coals("morecoal:amethyst_coal", "morecoal:gold_coal", "mekanism:dust_obsidian")
  potting_coals("morecoal:emerald_coal", "morecoal:amethyst_coal", "mekanism:dust_emerald")
  potting_coals("morecoal:diamond_coal", "morecoal:emerald_coal", "mekanism:dust_diamond")
  potting_coals("morecoal:netherite_coal", "morecoal:diamond_coal", "mekanism:dust_netherite")
  //#endregion
})
//#endregion
