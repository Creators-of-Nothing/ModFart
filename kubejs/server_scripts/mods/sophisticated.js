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
    { id: "sophisticatedstorage:stack_upgrade_tier_4" }
  ])
  //#endregion
  //#region - Backpacks
  let potting_backpacks_upgrades_basic = (output, input, element) => {
    e.shaped(output, ["BBB", "BAB", "BBB"], {
      A: input,
      B: element
    })
  }
  potting_backpacks_upgrades_basic(
    "sophisticatedbackpacks:stack_upgrade_tier_1",
    "sophisticatedbackpacks:upgrade_base",
    "minecraft:iron_ingot"
  )
  potting_backpacks_upgrades_basic(
    "sophisticatedbackpacks:stack_upgrade_tier_2",
    "sophisticatedbackpacks:stack_upgrade_tier_1",
    "minecraft:gold_ingot"
  )
  potting_backpacks_upgrades_basic(
    "sophisticatedbackpacks:stack_upgrade_tier_3",
    "sophisticatedbackpacks:stack_upgrade_tier_2",
    "minecraft:diamond"
  )
  potting_backpacks_upgrades_basic(
    "sophisticatedbackpacks:stack_upgrade_tier_4",
    "sophisticatedbackpacks:stack_upgrade_tier_3",
    "minecraft:netherite_ingot"
  )
  let potting_backpacks_upgrades_plates = (output, input, plate) => {
    e.shaped(output, [" B ", "BAB", " B "], {
      A: input,
      B: plate
    })
  }
  potting_backpacks_upgrades_plates(
    "sophisticatedbackpacks:stack_upgrade_tier_1",
    "sophisticatedbackpacks:upgrade_base",
    "kubejs:iron_plate"
  )
  potting_backpacks_upgrades_plates(
    "sophisticatedbackpacks:stack_upgrade_tier_2",
    "sophisticatedbackpacks:stack_upgrade_tier_1",
    "kubejs:gold_plate"
  )
  potting_backpacks_upgrades_plates(
    "sophisticatedbackpacks:stack_upgrade_tier_3",
    "sophisticatedbackpacks:stack_upgrade_tier_2",
    "kubejs:diamond_plate"
  )
  potting_backpacks_upgrades_plates(
    "sophisticatedbackpacks:stack_upgrade_tier_4",
    "sophisticatedbackpacks:stack_upgrade_tier_3",
    "kubejs:netherite_plate"
  )
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
  potting_backpacks_upgrades_optimal(
    "sophisticatedbackpacks:stack_upgrade_tier_1",
    "sophisticatedbackpacks:upgrade_base",
    "kubejs:iron_plate"
  )
  potting_backpacks_upgrades_optimal(
    "sophisticatedbackpacks:stack_upgrade_tier_2",
    "sophisticatedbackpacks:stack_upgrade_tier_1",
    "kubejs:gold_plate"
  )
  potting_backpacks_upgrades_optimal(
    "sophisticatedbackpacks:stack_upgrade_tier_3",
    "sophisticatedbackpacks:stack_upgrade_tier_2",
    "kubejs:diamond_plate"
  )
  potting_backpacks_upgrades_optimal(
    "sophisticatedbackpacks:stack_upgrade_tier_4",
    "sophisticatedbackpacks:stack_upgrade_tier_3",
    "kubejs:netherite_plate"
  )
  //#endregion
  //#region - Storages
  let potting_storages_upgrades_basic = (output, input, element) => {
    e.shaped(output, ["BBB", "BAB", "BBB"], {
      A: input,
      B: element
    })
  }
  potting_storages_upgrades_basic(
    "sophisticatedstorage:stack_upgrade_tier_1",
    "sophisticatedstorage:upgrade_base",
    "minecraft:iron_ingot"
  )
  potting_storages_upgrades_basic(
    "sophisticatedstorage:stack_upgrade_tier_2",
    "sophisticatedstorage:stack_upgrade_tier_1",
    "minecraft:gold_ingot"
  )
  potting_storages_upgrades_basic(
    "sophisticatedstorage:stack_upgrade_tier_3",
    "sophisticatedstorage:stack_upgrade_tier_2",
    "minecraft:diamond"
  )
  potting_storages_upgrades_basic(
    "sophisticatedstorage:stack_upgrade_tier_4",
    "sophisticatedstorage:stack_upgrade_tier_3",
    "minecraft:netherite_ingot"
  )
  let potting_storages_upgrades_plates = (output, input, plate) => {
    e.shaped(output, [" B ", "BAB", " B "], {
      A: input,
      B: plate
    })
  }
  potting_storages_upgrades_plates(
    "sophisticatedstorage:stack_upgrade_tier_1",
    "sophisticatedstorage:upgrade_base",
    "kubejs:iron_plate"
  )
  potting_storages_upgrades_plates(
    "sophisticatedstorage:stack_upgrade_tier_2",
    "sophisticatedstorage:stack_upgrade_tier_1",
    "kubejs:gold_plate"
  )
  potting_storages_upgrades_plates(
    "sophisticatedstorage:stack_upgrade_tier_3",
    "sophisticatedstorage:stack_upgrade_tier_2",
    "kubejs:diamond_plate"
  )
  potting_storages_upgrades_plates(
    "sophisticatedstorage:stack_upgrade_tier_4",
    "sophisticatedstorage:stack_upgrade_tier_3",
    "kubejs:netherite_plate"
  )
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
  potting_storages_upgrades_optimal(
    "sophisticatedstorage:stack_upgrade_tier_1",
    "sophisticatedstorage:upgrade_base",
    "kubejs:iron_plate"
  )
  potting_storages_upgrades_optimal(
    "sophisticatedstorage:stack_upgrade_tier_2",
    "sophisticatedstorage:stack_upgrade_tier_1",
    "kubejs:gold_plate"
  )
  potting_storages_upgrades_optimal(
    "sophisticatedstorage:stack_upgrade_tier_3",
    "sophisticatedstorage:stack_upgrade_tier_2",
    "kubejs:diamond_plate"
  )
  potting_storages_upgrades_optimal(
    "sophisticatedstorage:stack_upgrade_tier_4",
    "sophisticatedstorage:stack_upgrade_tier_3",
    "kubejs:netherite_plate"
  )
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
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
