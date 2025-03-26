//#region - Définition/Suppression/Masquage d'éléments dans JEI
function pipez() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = []
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
pipez()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Remove Crafts
  e.remove([
    { id: "pipez:basic_upgrade" },
    { id: "pipez:improved_upgrade" },
    { id: "pipez:advanced_upgrade" },
    { id: "pipez:ultimate_upgrade" }
  ])
  //#endregion
  //#region - Pipes
  let potting_pipes_basic = (output, input, element) => {
    e.shaped(output, ["BBB", "BAB", "BBB"], {
      A: input,
      B: element
    })
  }
  potting_pipes_basic("pipez:basic_upgrade", "kubejs:redstone_plate", "minecraft:iron_ingot")
  potting_pipes_basic("pipez:improved_upgrade", "pipez:basic_upgrade", "minecraft:gold_ingot")
  potting_pipes_basic("pipez:advanced_upgrade", "pipez:improved_upgrade", "minecraft:diamond")
  potting_pipes_basic("pipez:ultimate_upgrade", "pipez:advanced_upgrade", "minecraft:netherite_ingot")
  potting_pipes_basic(
    "pipez:infinity_upgrade",
    "pipez:ultimate_upgrade",
    "extendedcrafting:the_ultimate_ingot"
  )
  let potting_pipes_plates = (output, input, plate) => {
    e.shaped(output, [" B ", "BAB", " B "], {
      A: input,
      B: plate
    })
  }
  potting_pipes_plates("pipez:basic_upgrade", "kubejs:redstone_plate", "kubejs:iron_plate")
  potting_pipes_plates("pipez:improved_upgrade", "pipez:basic_upgrade", "kubejs:gold_plate")
  potting_pipes_plates("pipez:advanced_upgrade", "pipez:improved_upgrade", "kubejs:diamond_plate")
  potting_pipes_plates("pipez:ultimate_upgrade", "pipez:advanced_upgrade", "kubejs:netherite_plate")
  potting_pipes_plates(
    "pipez:infinity_upgrade",
    "pipez:ultimate_upgrade",
    "extendedcrafting:the_ultimate_catalyst"
  )
  let potting_pipes_deploying = (output, input, plate) => {
    e.custom({
      type: "create:deploying",
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
  potting_pipes_deploying("pipez:basic_upgrade", "kubejs:redstone_plate", "kubejs:iron_plate")
  potting_pipes_deploying("pipez:improved_upgrade", "pipez:basic_upgrade", "kubejs:gold_plate")
  potting_pipes_deploying("pipez:advanced_upgrade", "pipez:improved_upgrade", "kubejs:diamond_plate")
  potting_pipes_deploying("pipez:ultimate_upgrade", "pipez:advanced_upgrade", "kubejs:netherite_plate")
  potting_pipes_deploying(
    "pipez:infinity_upgrade",
    "pipez:ultimate_upgrade",
    "extendedcrafting:the_ultimate_catalyst"
  )
  //#endregion
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
