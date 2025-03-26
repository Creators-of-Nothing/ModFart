//#region - Définition/Suppression/Masquage d'éléments dans JEI
function ironfurnaces() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "ironfurnaces:crystal_furnace",
    "ironfurnaces:rainbow_core",
    "ironfurnaces:rainbow_plating",
    /ironfurnaces:upgrade_/
  ]
  let hiding = []
  // Fonctions pour supprimer les tags et les crafts des éléments définis juste au dessus
  function handle_Tags(e) {
    e.removeAllTagsFrom(unused)
    e.add("forge:hiding", [unused, hiding])
  }
  function handle_Recipes(e) {
    e.remove([{ input: unused }, { output: unused }])
  }
  ServerEvents.tags(["item", "block"], handle_Tags)
  ServerEvents.recipes(handle_Recipes)
}
ironfurnaces()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Remove Crafts
  e.remove([
    { id: "ironfurnaces:furnaces/copper_furnace" },
    { id: "ironfurnaces:furnaces/iron_furnace" },
    { id: "ironfurnaces:furnaces/iron_furnace2" },
    { id: "ironfurnaces:furnaces/gold_furnace" },
    { id: "ironfurnaces:furnaces/gold_furnace2" },
    { id: "ironfurnaces:furnaces/silver_furnace" },
    { id: "ironfurnaces:furnaces/silver_furnace2" },
    { id: "ironfurnaces:furnaces/diamond_furnace" },
    { id: "ironfurnaces:furnaces/obsidian_furnace" },
    { id: "ironfurnaces:furnaces/obsidian_furnace2" },
    { id: "ironfurnaces:furnaces/emerald_furnace" },
    { id: "ironfurnaces:furnaces/netherite_furnace" }
  ])
  //#endregion
  //#region - Coal
  e.custom({
    type: "create:deploying",
    ingredients: [
      {
        item: "morecoal:omni_coal"
      },
      {
        item: "createchromaticreturn:creative_flour"
      }
    ],
    results: [
      {
        item: "ironfurnaces:rainbow_coal"
      }
    ]
  })
  //#endregion
  //#region - Furnaces
  let potting_furnaces = (output, input, plate) => {
    e.custom({
      type: "create:item_application",
      ingredients: [
        {
          item: input
        },
        {
          item: plate
        }
      ],
      results: [
        {
          item: output
        }
      ]
    })
  }
  potting_furnaces("ironfurnaces:copper_furnace", "minecraft:furnace", "kubejs:copper_plate")
  potting_furnaces("ironfurnaces:silver_furnace", "ironfurnaces:copper_furnace", "kubejs:silver_plate")
  potting_furnaces("ironfurnaces:iron_furnace", "ironfurnaces:silver_furnace", "kubejs:iron_plate")
  potting_furnaces("ironfurnaces:gold_furnace", "ironfurnaces:iron_furnace", "kubejs:gold_plate")
  potting_furnaces("ironfurnaces:diamond_furnace", "ironfurnaces:gold_furnace", "kubejs:diamond_plate")
  potting_furnaces("ironfurnaces:obsidian_furnace", "ironfurnaces:diamond_furnace", "kubejs:obsidian_plate")
  potting_furnaces(
    "ironfurnaces:emerald_furnace",
    "ironfurnaces:obsidian_furnace",
    "kubejs:emerald_plate"
  )
  potting_furnaces(
    "ironfurnaces:netherite_furnace",
    "ironfurnaces:emerald_furnace",
    "kubejs:netherite_plate"
  )
  potting_furnaces(
    "ironfurnaces:million_furnace",
    "ironfurnaces:netherite_furnace",
    "extendedcrafting:the_ultimate_catalyst"
  )
  //#endregion
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
