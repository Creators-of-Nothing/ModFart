//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Remove Crafts
  e.remove([
    { id: "sophisticatedbackpacks:stack_upgrade_tier_1" },
    { id: "sophisticatedbackpacks:stack_upgrade_tier_2" },
    { id: "sophisticatedbackpacks:stack_upgrade_tier_3" },
    { id: "sophisticatedbackpacks:stack_upgrade_tier_4" },
    { id: "sophisticatedstorage:stack_upgrade_tier_1" },
    { id: "sophisticatedstorage:stack_upgrade_tier_2" },
    { id: "sophisticatedstorage:stack_upgrade_tier_3" },
    { id: "sophisticatedstorage:stack_upgrade_tier_4" },
    { id: "sophisticatedbackpacks:stack_upgrade_tier_1_from_starter" },
    { id: "sophisticatedstorage:backpack_stack_upgrade_tier_1_from_storage_stack_upgrade_tier_2" },
    { id: "sophisticatedstorage:backpack_stack_upgrade_tier_2_from_storage_stack_upgrade_tier_3" },
    { id: "sophisticatedstorage:backpack_stack_upgrade_tier_3_from_storage_stack_upgrade_tier_4" },
    { id: "sophisticatedstorage:backpack_stack_upgrade_tier_4_from_storage_stack_upgrade_tier_5" },
    { id: "sophisticatedstorage:stack_upgrade_tier_2_from_tier_1_plus" },
    { id: "sophisticatedstorage:storage_stack_upgrade_tier_2_from_backpack_stack_upgrade_tier_1" },
    { id: "sophisticatedstorage:storage_stack_upgrade_tier_3_from_backpack_stack_upgrade_tier_2" },
    { id: "sophisticatedstorage:storage_stack_upgrade_tier_4_from_backpack_stack_upgrade_tier_3" }
  ])
  //#endregion
  //#region - Backpacks
  let potting_backpacks_upgrades_basic = (output, input, element) => {
    e.shaped(output, ["BBB", "BAB", "BBB"], {
      A: input,
      B: element
    })
  }
  potting_backpacks_upgrades_basic("sophisticatedbackpacks:stack_upgrade_tier_1", "sophisticatedbackpacks:upgrade_base", "minecraft:iron_ingot")
  potting_backpacks_upgrades_basic("sophisticatedbackpacks:stack_upgrade_tier_2", "sophisticatedbackpacks:stack_upgrade_tier_1", "minecraft:gold_ingot")
  potting_backpacks_upgrades_basic("sophisticatedbackpacks:stack_upgrade_tier_3", "sophisticatedbackpacks:stack_upgrade_tier_2", "minecraft:diamond")
  potting_backpacks_upgrades_basic("sophisticatedbackpacks:stack_upgrade_tier_4", "sophisticatedbackpacks:stack_upgrade_tier_3", "minecraft:netherite_ingot")
  let potting_backpacks_upgrades_plates = (output, input, plate) => {
    e.shaped(output, [" B ", "BAB", " B "], {
      A: input,
      B: plate
    })
  }
  potting_backpacks_upgrades_plates("sophisticatedbackpacks:stack_upgrade_tier_1", "sophisticatedbackpacks:upgrade_base", "kubejs:iron_plate")
  potting_backpacks_upgrades_plates("sophisticatedbackpacks:stack_upgrade_tier_2", "sophisticatedbackpacks:stack_upgrade_tier_1", "kubejs:gold_plate")
  potting_backpacks_upgrades_plates("sophisticatedbackpacks:stack_upgrade_tier_3", "sophisticatedbackpacks:stack_upgrade_tier_2", "kubejs:diamond_plate")
  potting_backpacks_upgrades_plates("sophisticatedbackpacks:stack_upgrade_tier_4", "sophisticatedbackpacks:stack_upgrade_tier_3", "kubejs:netherite_plate")
  let potting_backpacks_upgrades_optimal = (output, input, plate) => {
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
  potting_backpacks_upgrades_optimal("sophisticatedbackpacks:stack_upgrade_tier_1", "sophisticatedbackpacks:upgrade_base", "kubejs:iron_plate")
  potting_backpacks_upgrades_optimal("sophisticatedbackpacks:stack_upgrade_tier_2", "sophisticatedbackpacks:stack_upgrade_tier_1", "kubejs:gold_plate")
  potting_backpacks_upgrades_optimal("sophisticatedbackpacks:stack_upgrade_tier_3", "sophisticatedbackpacks:stack_upgrade_tier_2", "kubejs:diamond_plate")
  potting_backpacks_upgrades_optimal("sophisticatedbackpacks:stack_upgrade_tier_4", "sophisticatedbackpacks:stack_upgrade_tier_3", "kubejs:netherite_plate")
  //#endregion
  //#region - Storages
  let potting_storages_upgrades_basic = (output, input, element) => {
    e.shaped(output, ["BBB", "BAB", "BBB"], {
      A: input,
      B: element
    })
  }
  potting_storages_upgrades_basic("sophisticatedstorage:stack_upgrade_tier_1", "sophisticatedstorage:upgrade_base", "minecraft:iron_ingot")
  potting_storages_upgrades_basic("sophisticatedstorage:stack_upgrade_tier_2", "sophisticatedstorage:stack_upgrade_tier_1", "minecraft:gold_ingot")
  potting_storages_upgrades_basic("sophisticatedstorage:stack_upgrade_tier_3", "sophisticatedstorage:stack_upgrade_tier_2", "minecraft:diamond")
  potting_storages_upgrades_basic("sophisticatedstorage:stack_upgrade_tier_4", "sophisticatedstorage:stack_upgrade_tier_3", "minecraft:netherite_ingot")
  let potting_storages_upgrades_plates = (output, input, plate) => {
    e.shaped(output, [" B ", "BAB", " B "], {
      A: input,
      B: plate
    })
  }
  potting_storages_upgrades_plates("sophisticatedstorage:stack_upgrade_tier_1", "sophisticatedstorage:upgrade_base", "kubejs:iron_plate")
  potting_storages_upgrades_plates("sophisticatedstorage:stack_upgrade_tier_2", "sophisticatedstorage:stack_upgrade_tier_1", "kubejs:gold_plate")
  potting_storages_upgrades_plates("sophisticatedstorage:stack_upgrade_tier_3", "sophisticatedstorage:stack_upgrade_tier_2", "kubejs:diamond_plate")
  potting_storages_upgrades_plates("sophisticatedstorage:stack_upgrade_tier_4", "sophisticatedstorage:stack_upgrade_tier_3", "kubejs:netherite_plate")
  let potting_storages_upgrades_optimal = (output, input, plate) => {
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
  potting_storages_upgrades_optimal("sophisticatedstorage:stack_upgrade_tier_1", "sophisticatedstorage:upgrade_base", "kubejs:iron_plate")
  potting_storages_upgrades_optimal("sophisticatedstorage:stack_upgrade_tier_2", "sophisticatedstorage:stack_upgrade_tier_1", "kubejs:gold_plate")
  potting_storages_upgrades_optimal("sophisticatedstorage:stack_upgrade_tier_3", "sophisticatedstorage:stack_upgrade_tier_2", "kubejs:diamond_plate")
  potting_storages_upgrades_optimal("sophisticatedstorage:stack_upgrade_tier_4", "sophisticatedstorage:stack_upgrade_tier_3", "kubejs:netherite_plate")
  //#endregion
  //#region - Pump Upgrades
  e.shaped("sophisticatedstorage:pump_upgrade", ["ABA", "CDC", "EEE"], {
    A: "#forge:glass",
    B: "minecraft:bucket",
    C: "minecraft:piston",
    D: "sophisticatedstorage:upgrade_base",
    E: "minecraft:sticky_piston"
  })
  e.shaped("sophisticatedstorage:advanced_pump_upgrade", ["ABA", "CDC", "EEE"], {
    A: "minecraft:diamond",
    B: "minecraft:dispenser",
    C: "minecraft:gold_ingot",
    D: "sophisticatedstorage:pump_upgrade",
    E: "minecraft:redstone"
  })
  e.shaped("sophisticatedstorage:xp_pump_upgrade", ["ABA", "CDC", "ABA"], {
    A: "minecraft:redstone",
    B: "minecraft:ender_eye",
    C: "minecraft:experience_bottle",
    D: "sophisticatedstorage:advanced_pump_upgrade"
  })
  //#endregion
  //#region - Link Between Storage and Backpacks Upgrades
  e.remove([{ id: /sophisticatedstorage:storage_.*_upgrade_from_backpack_.*_upgrade/ }, { id: /sophisticatedstorage:backpack_.*_upgrade_from_storage_.*_upgrade/ }])
  let potting_link = (base, result) => {
    e.shapeless(result, base)
  }
  //#region - Backpacks to Storages
  potting_link("sophisticatedbackpacks:pickup_upgrade", "sophisticatedstorage:pickup_upgrade")
  potting_link("sophisticatedbackpacks:advanced_pickup_upgrade", "sophisticatedstorage:advanced_pickup_upgrade")
  potting_link("sophisticatedbackpacks:filter_upgrade", "sophisticatedstorage:filter_upgrade")
  potting_link("sophisticatedbackpacks:advanced_filter_upgrade", "sophisticatedstorage:advanced_filter_upgrade")
  potting_link("sophisticatedbackpacks:magnet_upgrade", "sophisticatedstorage:magnet_upgrade")
  potting_link("sophisticatedbackpacks:advanced_magnet_upgrade", "sophisticatedstorage:advanced_magnet_upgrade")
  potting_link("sophisticatedbackpacks:feeding_upgrade", "sophisticatedstorage:feeding_upgrade")
  potting_link("sophisticatedbackpacks:advanced_feeding_upgrade", "sophisticatedstorage:advanced_feeding_upgrade")
  potting_link("sophisticatedbackpacks:compacting_upgrade", "sophisticatedstorage:compacting_upgrade")
  potting_link("sophisticatedbackpacks:advanced_compacting_upgrade", "sophisticatedstorage:advanced_compacting_upgrade")
  potting_link("sophisticatedbackpacks:void_upgrade", "sophisticatedstorage:void_upgrade")
  potting_link("sophisticatedbackpacks:advanced_void_upgrade", "sophisticatedstorage:advanced_void_upgrade")
  potting_link("sophisticatedbackpacks:smelting_upgrade", "sophisticatedstorage:smelting_upgrade")
  potting_link("sophisticatedbackpacks:auto_smelting_upgrade", "sophisticatedstorage:auto_smelting_upgrade")
  potting_link("sophisticatedbackpacks:smoking_upgrade", "sophisticatedstorage:smoking_upgrade")
  potting_link("sophisticatedbackpacks:auto_smoking_upgrade", "sophisticatedstorage:auto_smoking_upgrade")
  potting_link("sophisticatedbackpacks:blasting_upgrade", "sophisticatedstorage:blasting_upgrade")
  potting_link("sophisticatedbackpacks:auto_blasting_upgrade", "sophisticatedstorage:auto_blasting_upgrade")
  potting_link("sophisticatedbackpacks:crafting_upgrade", "sophisticatedstorage:crafting_upgrade")
  potting_link("sophisticatedbackpacks:stonecutter_upgrade", "sophisticatedstorage:stonecutter_upgrade")
  potting_link("sophisticatedbackpacks:stack_upgrade_tier_1", "sophisticatedstorage:stack_upgrade_tier_1")
  potting_link("sophisticatedbackpacks:stack_upgrade_tier_2", "sophisticatedstorage:stack_upgrade_tier_2")
  potting_link("sophisticatedbackpacks:stack_upgrade_tier_3", "sophisticatedstorage:stack_upgrade_tier_3")
  potting_link("sophisticatedbackpacks:stack_upgrade_tier_4", "sophisticatedstorage:stack_upgrade_tier_4")
  potting_link("sophisticatedbackpacks:jukebox_upgrade", "sophisticatedstorage:jukebox_upgrade")
  potting_link("sophisticatedbackpacks:pump_upgrade", "sophisticatedstorage:pump_upgrade")
  potting_link("sophisticatedbackpacks:advanced_pump_upgrade", "sophisticatedstorage:advanced_pump_upgrade")
  potting_link("sophisticatedbackpacks:xp_pump_upgrade", "sophisticatedstorage:xp_pump_upgrade")
  potting_link("sophisticatedbackpacks:chipped/botanist_workbench_upgrade", "sophisticatedstorage:chipped/botanist_workbench_upgrade")
  potting_link("sophisticatedbackpacks:chipped/glassblower_upgrade", "sophisticatedstorage:chipped/glassblower_upgrade")
  potting_link("sophisticatedbackpacks:chipped/carpenters_table_upgrade", "sophisticatedstorage:chipped/carpenters_table_upgrade")
  potting_link("sophisticatedbackpacks:chipped/loom_table_upgrade", "sophisticatedstorage:chipped/loom_table_upgrade")
  potting_link("sophisticatedbackpacks:chipped/mason_table_upgrade", "sophisticatedstorage:chipped/mason_table_upgrade")
  potting_link("sophisticatedbackpacks:chipped/alchemy_bench_upgrade", "sophisticatedstorage:chipped/alchemy_bench_upgrade")
  potting_link("sophisticatedbackpacks:chipped/tinkering_table_upgrade", "sophisticatedstorage:chipped/tinkering_table_upgrade")
  //#endregion
  //#region - Storages to Backpacks
  potting_link("sophisticatedstorage:pickup_upgrade", "sophisticatedbackpacks:pickup_upgrade")
  potting_link("sophisticatedstorage:advanced_pickup_upgrade", "sophisticatedbackpacks:advanced_pickup_upgrade")
  potting_link("sophisticatedstorage:filter_upgrade", "sophisticatedbackpacks:filter_upgrade")
  potting_link("sophisticatedstorage:advanced_filter_upgrade", "sophisticatedbackpacks:advanced_filter_upgrade")
  potting_link("sophisticatedstorage:magnet_upgrade", "sophisticatedbackpacks:magnet_upgrade")
  potting_link("sophisticatedstorage:advanced_magnet_upgrade", "sophisticatedbackpacks:advanced_magnet_upgrade")
  potting_link("sophisticatedstorage:feeding_upgrade", "sophisticatedbackpacks:feeding_upgrade")
  potting_link("sophisticatedstorage:advanced_feeding_upgrade", "sophisticatedbackpacks:advanced_feeding_upgrade")
  potting_link("sophisticatedstorage:compacting_upgrade", "sophisticatedbackpacks:compacting_upgrade")
  potting_link("sophisticatedstorage:advanced_compacting_upgrade", "sophisticatedbackpacks:advanced_compacting_upgrade")
  potting_link("sophisticatedstorage:void_upgrade", "sophisticatedbackpacks:void_upgrade")
  potting_link("sophisticatedstorage:advanced_void_upgrade", "sophisticatedbackpacks:advanced_void_upgrade")
  potting_link("sophisticatedstorage:smelting_upgrade", "sophisticatedbackpacks:smelting_upgrade")
  potting_link("sophisticatedstorage:auto_smelting_upgrade", "sophisticatedbackpacks:auto_smelting_upgrade")
  potting_link("sophisticatedstorage:smoking_upgrade", "sophisticatedbackpacks:smoking_upgrade")
  potting_link("sophisticatedstorage:auto_smoking_upgrade", "sophisticatedbackpacks:auto_smoking_upgrade")
  potting_link("sophisticatedstorage:blasting_upgrade", "sophisticatedbackpacks:blasting_upgrade")
  potting_link("sophisticatedstorage:auto_blasting_upgrade", "sophisticatedbackpacks:auto_blasting_upgrade")
  potting_link("sophisticatedstorage:crafting_upgrade", "sophisticatedbackpacks:crafting_upgrade")
  potting_link("sophisticatedstorage:stonecutter_upgrade", "sophisticatedbackpacks:stonecutter_upgrade")
  potting_link("sophisticatedstorage:stack_upgrade_tier_1", "sophisticatedbackpacks:stack_upgrade_tier_1")
  potting_link("sophisticatedstorage:stack_upgrade_tier_2", "sophisticatedbackpacks:stack_upgrade_tier_2")
  potting_link("sophisticatedstorage:stack_upgrade_tier_3", "sophisticatedbackpacks:stack_upgrade_tier_3")
  potting_link("sophisticatedstorage:stack_upgrade_tier_4", "sophisticatedbackpacks:stack_upgrade_tier_4")
  potting_link("sophisticatedstorage:jukebox_upgrade", "sophisticatedbackpacks:jukebox_upgrade")
  potting_link("sophisticatedstorage:pump_upgrade", "sophisticatedbackpacks:pump_upgrade")
  potting_link("sophisticatedstorage:advanced_pump_upgrade", "sophisticatedbackpacks:advanced_pump_upgrade")
  potting_link("sophisticatedstorage:xp_pump_upgrade", "sophisticatedbackpacks:xp_pump_upgrade")
  potting_link("sophisticatedstorage:chipped/botanist_workbench_upgrade", "sophisticatedbackpacks:chipped/botanist_workbench_upgrade")
  potting_link("sophisticatedstorage:chipped/glassblower_upgrade", "sophisticatedbackpacks:chipped/glassblower_upgrade")
  potting_link("sophisticatedstorage:chipped/carpenters_table_upgrade", "sophisticatedbackpacks:chipped/carpenters_table_upgrade")
  potting_link("sophisticatedstorage:chipped/loom_table_upgrade", "sophisticatedbackpacks:chipped/loom_table_upgrade")
  potting_link("sophisticatedstorage:chipped/mason_table_upgrade", "sophisticatedbackpacks:chipped/mason_table_upgrade")
  potting_link("sophisticatedstorage:chipped/alchemy_bench_upgrade", "sophisticatedbackpacks:chipped/alchemy_bench_upgrade")
  potting_link("sophisticatedstorage:chipped/tinkering_table_upgrade", "sophisticatedbackpacks:chipped/tinkering_table_upgrade")
  //#endregion
  //#endregion
})
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function sophisticated() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = []
  let hiding = [
    /sophisticatedbackpacks:backpack/,
    /sophisticatedstorage:barrel/,
    /sophisticatedstorage:chest/,
    /sophisticatedstorage:diamond_barrel/,
    /sophisticatedstorage:diamond_chest/,
    /sophisticatedstorage:diamond_shulker_box/,
    /sophisticatedstorage:gold_barrel/,
    /sophisticatedstorage:gold_chest/,
    /sophisticatedstorage:gold_shulker_box/,
    /sophisticatedstorage:iron_barrel/,
    /sophisticatedstorage:iron_chest/,
    /sophisticatedstorage:iron_shulker_box/,
    /sophisticatedstorage:limited_barrel_1/,
    /sophisticatedstorage:limited_barrel_2/,
    /sophisticatedstorage:limited_barrel_3/,
    /sophisticatedstorage:limited_barrel_4/,
    /sophisticatedstorage:limited_diamond_barrel_1/,
    /sophisticatedstorage:limited_diamond_barrel_2/,
    /sophisticatedstorage:limited_diamond_barrel_3/,
    /sophisticatedstorage:limited_diamond_barrel_4/,
    /sophisticatedstorage:limited_gold_barrel_1/,
    /sophisticatedstorage:limited_gold_barrel_2/,
    /sophisticatedstorage:limited_gold_barrel_3/,
    /sophisticatedstorage:limited_gold_barrel_4/,
    /sophisticatedstorage:limited_iron_barrel_1/,
    /sophisticatedstorage:limited_iron_barrel_2/,
    /sophisticatedstorage:limited_iron_barrel_3/,
    /sophisticatedstorage:limited_iron_barrel_4/,
    /sophisticatedstorage:limited_netherite_barrel_1/,
    /sophisticatedstorage:limited_netherite_barrel_2/,
    /sophisticatedstorage:limited_netherite_barrel_3/,
    /sophisticatedstorage:limited_netherite_barrel_4/,
    /sophisticatedstorage:netherite_barrel/,
    /sophisticatedstorage:netherite_chest/,
    /sophisticatedstorage:netherite_shulker_box/,
    /sophisticatedstorage:shulker_box/
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
sophisticated()
//#endregion
