//#region - Définition/Suppression/Masquage d'éléments dans JEI
function extendedcrafting() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "extendedcrafting:advanced_component",
    "extendedcrafting:basic_component",
    "extendedcrafting:crystaltine_component",
    "extendedcrafting:elite_component",
    "extendedcrafting:ender_component",
    "extendedcrafting:enhanced_ender_component",
    "extendedcrafting:enhanced_redstone_component",
    "extendedcrafting:flux_alternator",
    "extendedcrafting:flux_crafter",
    "extendedcrafting:redstone_component",
    "extendedcrafting:the_ultimate_component",
    "extendedcrafting:ultimate_component"
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
extendedcrafting()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([
    { id: "extendedcrafting:basic_table" },
    { id: "extendedcrafting:advanced_table" },
    { id: "extendedcrafting:elite_table" },
    { id: "extendedcrafting:ultimate_table" },
    { id: "extendedcrafting:enhanced_redstone_ingot" },
    { id: "extendedcrafting:flux_star" }
  ])
  //#endregion
  //#region - Crystaltine Ingot
  e.remove({ id: "extendedcrafting:crystaltine_ingot" })
  e.custom({
    type: "cyclic:solidifier",
    ingredients: [
      {
        item: "minecraft:netherite_ingot"
      },
      {
        item: "cyclic:gem_obsidian"
      },
      {
        item: "cagedmobs:star_infused_netherite_block"
      }
    ],
    energy: {
      rfpertick: 5000,
      ticks: 1000
    },
    mix: {
      fluid: "create_enchantment_industry:hyper_experience",
      count: 1000
    },
    result: {
      item: "extendedcrafting:crystaltine_ingot",
      count: 1
    }
  })
  //#endregion
  //#region - The Ultimate Ingot
  e.custom({
    type: "ars_nouveau:enchanting_apparatus",
    count: 1,
    reagent: [{ item: "alexsmobs:rainbow_jelly" }],
    pedestalItems: [
      { item: { item: "kubejs:basical_apparatus" } },
      { item: { item: "kubejs:magical_apparatus" } },
      { item: { item: "kubejs:mechanical_apparatus" } },
      { item: { item: "kubejs:vital_apparatus" } }
    ],
    output: { item: "extendedcrafting:the_ultimate_ingot" },
    sourceCost: 2000
  })
  //#endregion
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
