//#region - Définition/Suppression/Masquage d'éléments dans JEI
function fluxnetworks() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = []
  let hiding = ["fluxnetworks:admin_configurator"]
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
fluxnetworks()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Flux Dust
  let potting_flux_dust_from_deploying = (input, deploy, count) => {
    e.custom({
      type: "create:deploying",
      ingredients: [
        {
          item: input
        },
        {
          item: deploy
        }
      ],
      keepHeldItem: true,
      results: [
        {
          item: "fluxnetworks:flux_dust",
          count: count
        }
      ]
    })
  }
  potting_flux_dust_from_deploying("minecraft:redstone", "twilightforest:giant_obsidian", 1)
  potting_flux_dust_from_deploying("minecraft:redstone", "kubejs:giant_anti_obsidian", 4)
  potting_flux_dust_from_deploying("kubejs:dust_amethyst", "kubejs:giant_anti_obsidian", 16)
  potting_flux_dust_from_deploying("kubejs:dust_amethyst", "kubejs:giant_ultimate_obsidian", 64)
  e.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "alexsmobs:farseer_arm"
      }
    ],
    processingTime: 200,
    results: [
      {
        item: "fluxnetworks:flux_dust"
      }
    ]
  })
  //#endregion
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
