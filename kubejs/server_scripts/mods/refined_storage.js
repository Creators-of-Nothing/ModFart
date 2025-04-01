//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([
    { id: "extradisks:part/infinite_storage_part" },
    { id: "extradisks:part/infinite_fluid_storage_part" },
    { id: /extrastorage:disk\// },
    { id: /extrastorage:storage_block\// },
    { id: /extrastorage:part\// },
    { id: "creativecrafter:creative_crafter" }
  ])
  //#endregion
  //#region - Infinite Storage Parts
  let potting_infinite_parts = (A, output) => {
    e.custom({
      type: "extendedcrafting:combination",
      powerCost: 1000000000,
      powerRate: 1000000,
      input: { item: "extendedcrafting:the_ultimate_catalyst" },
      ingredients: [
        { item: "extradisks:withering_processor" },
        { item: "kubejs:quartz_enriched_gear" },
        { item: "extradisks:withering_processor" },
        { item: "mekanism:qio_drive_supermassive" },
        { item: A },
        { item: "mekanism:qio_drive_supermassive" },
        { item: "extradisks:withering_processor" },
        { item: A },
        { item: "extradisks:withering_processor" },
        { item: "mekanism:qio_drive_supermassive" },
        { item: A },
        { item: "mekanism:qio_drive_supermassive" }
      ],
      result: { item: output }
    })
  }
  potting_infinite_parts("extradisks:4096k_storage_part", "extradisks:infinite_storage_part")
  potting_infinite_parts("refinedstorage:4096k_fluid_storage_part", "extradisks:infinite_fluid_storage_part")
  //#endregion
  //#region - Creative Contraptions
  let potting_creative_contraptions = (A, B, output) => {
    e.custom({
      type: "extendedcrafting:combination",
      powerCost: 1000000000,
      powerRate: 1000000,
      input: { item: "extendedcrafting:the_ultimate_catalyst" },
      ingredients: [
        { item: "extradisks:withering_processor" },
        { item: "kubejs:quartz_enriched_gear" },
        { item: "extradisks:withering_processor" },
        { item: B },
        { item: "extradisks:advanced_machine_casing" },
        { item: B },
        { item: "extradisks:withering_processor" },
        { item: A },
        { item: "extradisks:withering_processor" },
        { item: B },
        { item: "extradisks:advanced_machine_casing" },
        { item: B }
      ],
      result: { item: output }
    })
  }
  potting_creative_contraptions("extrastorage:netherite_crafter", "sophisticatedstorage:crafting_upgrade", "creativecrafter:creative_crafter")
  potting_creative_contraptions("refinedstorage:controller", "kubejs:deep_plate", "refinedstorage:creative_controller")
  potting_creative_contraptions("refinedstorage:portable_grid", "sophisticatedstorage:stack_upgrade_tier_4", "refinedstorage:creative_portable_grid")
  //#endregion
  //#region - Creative Wireless Grids
  let potting_creative_wireless_grids = (A, output) => {
    e.custom({
      type: "extendedcrafting:combination",
      powerCost: 1000000000,
      powerRate: 1000000,
      input: { item: "extendedcrafting:the_ultimate_catalyst" },
      ingredients: [
        { item: "extradisks:withering_processor" },
        { item: "kubejs:quartz_enriched_gear" },
        { item: "extradisks:withering_processor" },
        { item: "kubejs:silicon_plate" },
        { item: "kubejs:ender_plate" },
        { item: "kubejs:silicon_plate" },
        { item: "extradisks:withering_processor" },
        { item: A },
        { item: "extradisks:withering_processor" },
        { item: "kubejs:silicon_plate" },
        { item: "kubejs:ender_plate" },
        { item: "kubejs:silicon_plate" }
      ],
      result: { item: output }
    })
  }
  potting_creative_wireless_grids("refinedstorage:wireless_grid", "refinedstorage:creative_wireless_grid")
  potting_creative_wireless_grids("refinedstorage:wireless_fluid_grid", "refinedstorage:creative_wireless_fluid_grid")
  potting_creative_wireless_grids("refinedstorageaddons:wireless_crafting_grid", "refinedstorageaddons:creative_wireless_crafting_grid")
  potting_creative_wireless_grids("refinedstorage:wireless_crafting_monitor", "refinedstorage:creative_wireless_crafting_monitor")
  //#endregion
  //#region - Creative Wireless Universal Grid
  e.custom({
    type: "extendedcrafting:shaped_table",
    tier: 3,
    pattern: ["AAABAAA", "A  A  A", "C DED C", "FEEGEEF", "C DED C", "A  H  A", "AACFCAA"],
    key: {
      A: {
        item: "kubejs:silicon_plate"
      },
      B: {
        item: "kubejs:deep_gear"
      },
      C: {
        item: "extradisks:withering_processor"
      },
      D: {
        item: "kubejs:diamond_plate"
      },
      E: {
        item: "kubejs:ender_plate"
      },
      F: {
        item: "extendedcrafting:the_ultimate_catalyst"
      },
      G: {
        item: "universalgrid:wireless_universal_grid"
      },
      H: {
        item: "kubejs:crystaltine_gear"
      }
    },
    result: {
      item: "universalgrid:creative_wireless_universal_grid"
    }
  })
  e.custom({
    type: "extendedcrafting:shaped_table",
    tier: 1,
    pattern: ["ABA", "CDE", "AFA"],
    key: {
      A: {
        item: "kubejs:diamond_plate"
      },
      B: {
        item: "kubejs:deep_gear"
      },
      C: {
        item: "refinedstorage:creative_wireless_fluid_grid"
      },
      D: {
        item: "kubejs:crystaltine_gear"
      },
      E: {
        item: "refinedstorageaddons:creative_wireless_crafting_grid"
      },
      F: {
        item: "refinedstorage:creative_wireless_grid"
      }
    },
    result: {
      item: "universalgrid:creative_wireless_universal_grid"
    }
  })
  //#endregion
  //#region - Controller
  e.remove({ id: "refinedstorage:controller" })
  e.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["ABC", "DED", "FGF"],
    key: {
      A: {
        item: "refinedstorage:advanced_processor"
      },
      B: {
        item: "deeperdarker:heart_of_the_deep"
      },
      C: {
        item: "refinedstorage:improved_processor"
      },
      D: {
        item: "refinedstorage:silicon"
      },
      E: {
        item: "refinedstorage:machine_casing"
      },
      F: {
        item: "refinedstorage:quartz_enriched_iron"
      },
      G: {
        item: "extradisks:withering_processor"
      }
    },
    result: {
      item: "refinedstorage:controller"
    }
  })
  //#endregion
})
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function refined_storage() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    /extradisks:16384k_/,
    /extradisks:65536k_/,
    /extradisks:262144k_/,
    /extradisks:1048576k_/,
    /extrastorage:storagepart_/,
    /refinedstorage:creative_fluid_storage/,
    /refinedstorage:creative_storage/
  ]
  let hiding = [
    /refinedstorage:black_/,
    /refinedstorage:blue_/,
    /refinedstorage:brown_/,
    /refinedstorage:cyan_/,
    /refinedstorage:gray_/,
    /refinedstorage:green_/,
    /refinedstorage:light_gray_/,
    /refinedstorage:lime_/,
    /refinedstorage:magenta_/,
    /refinedstorage:orange_/,
    /refinedstorage:pink_/,
    /refinedstorage:purple_/,
    /refinedstorage:red_/,
    /refinedstorage:white_/,
    /refinedstorage:yellow_/
  ]
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
refined_storage()
//#endregion
