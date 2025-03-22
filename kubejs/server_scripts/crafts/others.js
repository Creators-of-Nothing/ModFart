//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Remove Crafts
  e.remove([
    // Farmer's Delight
    { id: "farmersdelight:cutting/amethyst_block" },

    // Meadow
    { id: "meadow:diamond_from_blasting_alpine_diamond_ore" },
    { id: "meadow:iron_ingot_from_blasting_alpine_iron_ore" },
    { id: "meadow:gold_ingot_from_blasting_alpine_gold_ore" },
    { id: "meadow:emerald_from_blasting_alpine_emerald_ore" },
    { id: "meadow:lapis_lazuli_from_blasting_alpine_lapis_ore" },
    { id: "meadow:redstone_from_blasting_alpine_redstone_ore" },
    { id: "meadow:coal_from_blasting_alpine_coal_ore" },
    { id: "meadow:copper_ingot_from_blasting_alpine_copper_ore" },
    { id: "meadow:diamond_from_smelting_alpine_diamond_ore" },
    { id: "meadow:iron_ingot_from_smelting_alpine_iron_ore" },
    { id: "meadow:gold_ingot_from_smelting_alpine_gold_ore" },
    { id: "meadow:emerald_from_smelting_alpine_emerald_ore" },
    { id: "meadow:lapis_lazuli_from_smelting_alpine_lapis_ore" },
    { id: "meadow:redstone_from_smelting_alpine_redstone_ore" },
    { id: "meadow:coal_from_smelting_alpine_coal_ore" },
    { id: "meadow:copper_ingot_from_smelting_alpine_copper_ore" },

    // Mekanism
    { id: /mekanism:pigment_extracting\// },
    { id: /mekanism:compat\/biomesoplenty\/pigment_extracting\// },
    { id: "mekanism:reaction/wood_gasification/logs" },
    { id: "mekanism:reaction/wood_gasification/planks" },
    { id: /mekanism:reaction\/coal_gasification\// },
    { id: /mekanism:reaction\/wood_gasification\// },

    // Pam's
    { id: "pamhc2crops:bakedsweetpotatoitem_forge" },
    { id: "pamhc2crops:bakedsweetpotatoitem_smoker" },
    { id: "pamhc2foodcore:glowberryjuiceitemitem" },
    { id: "pamhc2foodcore:cookingoilitem_x2_nuts" },
    { id: "pamhc2crops:cookingoil_x4_canola_x2" },
    { id: "pamhc2foodextended:mixedsaladitem" },

    // Portals
    { id: "jamd:portal_block" },
    { id: "jamd:nether_portal_block" },
    { id: "jamd:end_portal_block" },
    { id: "javd:portal_block" },
    { id: "dimdungeons:recipe_block_portal_keyhole" },

    // Sophisticated Backpacks and Storage
    { id: "sophisticatedbackpacks:stack_upgrade_tier_1_from_starter" },
    { id: "sophisticatedstorage:backpack_stack_upgrade_tier_1_from_storage_stack_upgrade_tier_2" },
    { id: "sophisticatedstorage:backpack_stack_upgrade_tier_2_from_storage_stack_upgrade_tier_3" },
    { id: "sophisticatedstorage:backpack_stack_upgrade_tier_3_from_storage_stack_upgrade_tier_4" },
    { id: "sophisticatedstorage:backpack_stack_upgrade_tier_4_from_storage_stack_upgrade_tier_5" },
    { id: "sophisticatedstorage:stack_upgrade_tier_2_from_tier_1_plus" },
    { id: "sophisticatedstorage:storage_stack_upgrade_tier_2_from_backpack_stack_upgrade_tier_1" },
    { id: "sophisticatedstorage:storage_stack_upgrade_tier_3_from_backpack_stack_upgrade_tier_2" },
    { id: "sophisticatedstorage:storage_stack_upgrade_tier_4_from_backpack_stack_upgrade_tier_3" },

    // Stone Recreation
    { id: "twigs:cobblestone_from_pebble" },
    { id: "twigs:rocky_dirt" },

    // Undergarden
    { id: "undergarden:blast_raw_froststeel" },
    { id: "undergarden:smelt_raw_froststeel" },

    // Others
    { id: "mctb:twilight_to_oak_crafting_table" },
    { id: "mctb:chorus_planks_crafting_table" },
    { id: "mctb:chipped_oak_crafting_table" },
    { id: "mctb:archwood_planks_crafting_table" },
    { id: "mctb:echo_planks_crafting_table" },
    { id: "farmersdelight:cake_from_milk_bottle" },
    { id: "waystones:warp_stone" },
    { id: "apotheosis:scrap_tome" },
    { id: "festive_delight:cinnamon_craft_fabric" },
    { id: "ars_elemental:quartz_crush" },
    { id: "enlightened_end:cerulean_planks" }
  ])
  e.replaceInput(
    { input: "cagedmobs:warden_receptor" },
    "cagedmobs:warden_receptor",
    "apotheosis:warden_tendril"
  )
  //#endregion
  //#region - Additionall Lanterns
  e.remove({ id: "dustrial_decor:wrapped_gold_chains" })
  e.shaped("dustrial_decor:wrapped_gold_chains", ["AAA", "AAA", "AAA"], {
    A: "additionallanterns:gold_chain"
  })
  //#endregion
  //#region - Alex's Caves
  e.remove({ id: "alexscaves:furnace/smooth_bone_smelting" })
  e.custom({
    type: "minecraft:blasting",
    ingredient: {
      item: "minecraft:bone_block"
    },
    result: "alexscaves:smooth_bone",
    experience: 0.1,
    cookingtime: 100
  })
  //#endregion
  //#region - Apotheosis Spawner Modifiers
  e.remove([
    { id: "apotheosis:spawner/ignore_conditions" },
    { id: "apotheosis:spawner/ignore_conditions_inverted" }
  ])
  e.custom({
    type: "apotheosis:spawner_modifier",
    conditions: [
      {
        type: "apotheosis:module",
        module: "spawner"
      }
    ],
    mainhand: {
      item: "minecraft:dragon_head"
    },
    stat_changes: [
      {
        id: "ignore_conditions",
        value: true
      }
    ]
  })
  e.custom({
    type: "apotheosis:spawner_modifier",
    conditions: [
      {
        type: "apotheosis:module",
        module: "spawner"
      }
    ],
    mainhand: {
      item: "minecraft:dragon_head"
    },
    offhand: {
      item: "minecraft:quartz"
    },
    consumes_offhand: false,
    stat_changes: [
      {
        id: "ignore_conditions",
        value: false
      }
    ]
  })
  //#endregion
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion

//#region - Catalysts
ServerEvents.recipes(e => {
  let potting = (rod, output) => {
    e.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: "moreplates:black_iron_plate"
      },
      loops: 4,
      results: [
        {
          item: output
        }
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "moreplates:black_iron_plate"
            },
            {
              item: rod
            }
          ],
          results: [
            {
              item: "moreplates:black_iron_plate"
            }
          ]
        }
      ],
      transitionalItem: {
        item: "moreplates:black_iron_plate"
      }
    })
  }
  potting("moreplates:iron_rod", "extendedcrafting:basic_catalyst")
  potting("moreplates:gold_rod", "extendedcrafting:advanced_catalyst")
  potting("moreplates:diamond_rod", "extendedcrafting:elite_catalyst")
  potting("moreplates:emerald_rod", "extendedcrafting:ultimate_catalyst")
  potting("moreplates:redstone_ingot_rod", "extendedcrafting:redstone_catalyst")
  potting("kubejs:enhanced_redstone_rod", "extendedcrafting:enhanced_redstone_catalyst")
  potting("moreplates:ender_rod", "extendedcrafting:ender_catalyst")
  potting("moreplates:enhanced_ender_rod", "extendedcrafting:enhanced_ender_catalyst")
  potting("moreplates:crystaltine_rod", "extendedcrafting:crystaltine_catalyst")
  potting("moreplates:the_ultimate_rod", "extendedcrafting:the_ultimate_catalyst")
})
//#endregion

//#region - Extended Crafting
ServerEvents.recipes(e => {
  let potting = (input, catalyst, output) => {
    e.custom({
      type: "create:item_application",
      ingredients: [
        {
          tag: input
        },
        {
          item: catalyst
        }
      ],
      results: [
        {
          item: output
        }
      ]
    })
  }
  potting("forge:workbench", "extendedcrafting:basic_catalyst", "extendedcrafting:basic_table")
})
ServerEvents.recipes(e => {
  let potting = (input, catalyst, output) => {
    e.custom({
      type: "create:item_application",
      ingredients: [
        {
          item: input
        },
        {
          item: catalyst
        }
      ],
      results: [
        {
          item: output
        }
      ]
    })
  }
  potting(
    "extendedcrafting:basic_table",
    "extendedcrafting:advanced_catalyst",
    "extendedcrafting:advanced_table"
  )
  potting(
    "extendedcrafting:advanced_table",
    "extendedcrafting:elite_catalyst",
    "extendedcrafting:elite_table"
  )
  potting(
    "extendedcrafting:elite_table",
    "extendedcrafting:ultimate_catalyst",
    "extendedcrafting:ultimate_table"
  )
})
ServerEvents.recipes(e => {
  let potting = (input, output) => {
    e.custom({
      type: "createaddition:charging",
      input: {
        item: input
      },
      result: {
        item: output
      },
      energy: 10000,
      maxChargeRate: 1000
    })
  }
  potting("minecraft:nether_star", "extendedcrafting:flux_star")
  potting("extendedcrafting:redstone_ingot", "extendedcrafting:enhanced_redstone_ingot")
})
//#endregion

//#region - Pigment Extracting
ServerEvents.recipes(e => {
  let potting = (dye, pigment) => {
    e.custom({
      type: "mekanism:pigment_extracting",
      input: {
        ingredient: {
          tag: dye
        }
      },
      output: {
        amount: 1024,
        pigment: pigment
      }
    })
  }
  potting("forge:dyes/black", "mekanism:black")
  potting("forge:dyes/blue", "mekanism:blue")
  potting("forge:dyes/brown", "mekanism:brown")
  potting("forge:dyes/cyan", "mekanism:cyan")
  potting("forge:dyes/gray", "mekanism:gray")
  potting("forge:dyes/green", "mekanism:green")
  potting("forge:dyes/light_blue", "mekanism:light_blue")
  potting("forge:dyes/light_gray", "mekanism:light_gray")
  potting("forge:dyes/lime", "mekanism:lime")
  potting("forge:dyes/magenta", "mekanism:magenta")
  potting("forge:dyes/orange", "mekanism:orange")
  potting("forge:dyes/pink", "mekanism:pink")
  potting("forge:dyes/purple", "mekanism:purple")
  potting("forge:dyes/red", "mekanism:red")
  potting("forge:dyes/white", "mekanism:white")
  potting("forge:dyes/yellow", "mekanism:yellow")
})
//#endregion

//#region - Planks
ServerEvents.recipes(e => {
  let potting = (element, output) => {
    e.shaped(output, ["AA", "AA"], {
      A: element
    })
  }
  potting("#modfart/planks/other", "minecraft:crafting_table")
  potting("#modfart/planks/spruce", "vct:spruce_crafting_table")
  potting("#modfart/planks/birch", "vct:birch_crafting_table")
  potting("#modfart/planks/jungle", "vct:jungle_crafting_table")
  potting("#modfart/planks/acacia", "vct:acacia_crafting_table")
  potting("#modfart/planks/dark_oak", "vct:dark_oak_crafting_table")
  potting("#modfart/planks/mangrove", "vct:mangrove_crafting_table")
  potting("#modfart/planks/bamboo", "vct:bamboo_crafting_table")
  potting("#modfart/planks/cherry", "vct:cherry_crafting_table")
  potting("#modfart/planks/crimson", "vct:crimson_crafting_table")
  potting("#modfart/planks/warped", "vct:warped_crafting_table")
})
//#endregion

//#region - Portals
ServerEvents.recipes(e => {
  let potting = (output, plate1, plate2, plate3, plate4) => {
    e.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: "wormhole:portal_frame"
      },
      loops: 1,
      results: [
        {
          item: output
        }
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "wormhole:portal_frame"
            },
            {
              item: plate1
            }
          ],
          results: [
            {
              item: "wormhole:portal_frame"
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "wormhole:portal_frame"
            },
            {
              item: plate2
            }
          ],
          results: [
            {
              item: "wormhole:portal_frame"
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "wormhole:portal_frame"
            },
            {
              item: plate3
            }
          ],
          results: [
            {
              item: "wormhole:portal_frame"
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "wormhole:portal_frame"
            },
            {
              item: plate4
            }
          ],
          results: [
            {
              item: "wormhole:portal_frame"
            }
          ]
        }
      ],
      transitionalItem: {
        item: "wormhole:portal_frame"
      }
    })
  }
  potting(
    "jamd:portal_block",
    "moreplates:diamond_plate",
    "kubejs:dimensional_plate",
    "moreplates:ruby_plate",
    "moreplates:zinc_plate"
  )
  potting(
    "jamd:nether_portal",
    "moreplates:netherite_plate",
    "kubejs:dimensional_plate",
    "moreplates:tungsten_plate",
    "moreplates:nether_quartz_plate"
  )
  potting(
    "jamd:end_portal",
    "kubejs:enderite_plate",
    "kubejs:dimensional_plate",
    "kubejs:malachite_plate",
    "moreplates:bismuth_plate"
  )
  potting(
    "javd:portal_block",
    "kubejs:echo_plate",
    "kubejs:dimensional_plate",
    "moreplates:amethyst_plate",
    "moreplates:paper_plate"
  )
  potting(
    "dimdungeons:block_portal_keyhole",
    "moreplates:gold_plate",
    "kubejs:dimensional_plate",
    "moreplates:ender_plate",
    "moreplates:black_iron_plate"
  )
})
//#endregion

//#region - Stone Recreation
ServerEvents.recipes(e => {
  let potting = (input, output) => {
    e.custom({
      type: "create:crushing",
      ingredients: [
        {
          item: input
        }
      ],
      processingTime: 200,
      results: [
        {
          count: 16,
          item: output
        }
      ]
    })
  }
  potting("minecraft:cobblestone", "twigs:pebble")
})
ServerEvents.recipes(e => {
  e.shaped("minecraft:cobblestone", ["AAA", "A A", "AAA"], {
    A: "twigs:pebble"
  })
})
ServerEvents.recipes(e => {
  let potting = (element, output) => {
    e.shaped(output, ["BBB", "BAB", "BBB"], {
      A: element,
      B: "twigs:pebble"
    })
  }
  potting("minecraft:nether_wart", "minecraft:netherrack")
  potting("minecraft:white_dye", "minecraft:diorite")
  potting("minecraft:gray_dye", "minecraft:andesite")
  potting("minecraft:red_dye", "minecraft:granite")
  potting("minecraft:chorus_fruit", "minecraft:end_stone")
  potting("minecraft:dirt", "twigs:rocky_dirt")
  potting("cyclic:cloud", "aether:holystone")
  potting("mekanism:dust_obsidian", "minecraft:cobbled_deepslate")
  potting("deeperdarker:sculk_tendrils", "deeperdarker:cobbled_sculk_stone")
  potting("twilightforest:thorn_rose", "twilightforest:deadrock")
  potting("minecraft:ice", "undergarden:shiverstone")
  potting("undergarden:depthrock_pebble", "undergarden:depthrock")
})
//#endregion

//#region - Twilight Forest Giant Blocks
ServerEvents.recipes(e => {
  e.remove({ id: "twilightforest:giant_log_to_oak_planks" })
  e.shapeless("64x minecraft:oak_log", "twilightforest:giant_log")
  e.shapeless("64x minecraft:obsidian", "twilightforest:giant_obsidian")
})
//#endregion

//#region - Others
ServerEvents.recipes(e => {
  e.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "minecraft:mycelium"
      },
      {
        amount: 1000,
        fluid: "sliceanddice:fertilizer"
      }
    ],
    results: [
      {
        item: "farmersdelight:rich_soil"
      }
    ]
  })
})
ServerEvents.recipes(e => {
  let potting = (input, output) => {
    e.shapeless(output, input)
  }
  potting("mob_grinding_utils:fan_upgrade_height", "mob_grinding_utils:fan_upgrade_width")
  potting("mob_grinding_utils:fan_upgrade_width", "mob_grinding_utils:fan_upgrade_height")
  potting("minecraft:honeycomb_block", "4x minecraft:honeycomb")
  potting("minecraft:nether_star", "9x cagedmobs:nether_star_fragment")
  potting("minecraft:dragon_egg", "9x cagedmobs:dragon_scale")
  potting("minecraft:sponge", "9x cagedmobs:sponge_fragment")
  potting("create_things_and_misc:powdered_obsidian_block", "9x mekanism:dust_obsidian")
})
ServerEvents.recipes(e => {
  let potting = (element, output) => {
    e.shaped(output, ["AAA", "AAA", "AAA"], {
      A: element
    })
  }
  potting("cagedmobs:nether_star_fragment", "minecraft:nether_star")
})
ServerEvents.recipes(e => {
  let potting = (element1, element2, output) => {
    e.shaped(output, [" A ", "ABA", " A "], {
      A: element1,
      B: element2
    })
  }
  potting(
    "cagedmobs:nether_star_fragment",
    "cyclic:netherite_nugget",
    "cagedmobs:star_infused_netherite_nugget"
  )
  potting(
    "extendedcrafting:nether_star_block",
    "minecraft:netherite_block",
    "cagedmobs:star_infused_netherite_block"
  )
})
ServerEvents.recipes(e => {
  let potting = (input, output) => {
    e.custom({
      type: "mekanism:crushing",
      input: {
        ingredient: {
          item: input
        }
      },
      output: {
        item: output
      }
    })
  }
  potting("minecraft:amethyst_shard", "kubejs:dust_amethyst")
})
ServerEvents.recipes(e => {
  let potting = (A, B, output) => {
    e.shaped(output, ["AAA", " B ", "AAA"], {
      A: A,
      B: B
    })
  }
  potting("kubejs:antimatter_rod", "twilightforest:giant_obsidian", "kubejs:giant_anti_obsidian")
  potting("moreplates:the_ultimate_rod", "kubejs:giant_anti_obsidian", "kubejs:giant_ultimate_obsidian")
})
ServerEvents.recipes(e => {
  let potting = (type, cooktime, input, count, xp, output) => {
    e.custom({
      type: type,
      ingredient: {
        item: input
      },
      result: {
        item: output,
        count: count
      },
      experience: xp,
      cookingtime: cooktime
    })
  }
  potting(
    "minecraft:smelting",
    200,
    "enlightened_end:adamantite_node",
    "8",
    0.7,
    "enlightened_end:adamantite_nugget"
  )
  potting(
    "minecraft:blasting",
    100,
    "enlightened_end:adamantite_node",
    "8",
    0.7,
    "enlightened_end:adamantite_nugget"
  )
})
//#endregion

//#region - Clusters
ServerEvents.recipes(e => {
  let potting = (input, output) => {
    e.custom({
      type: "mekanism:crushing",
      input: {
        ingredient: {
          item: input
        }
      },
      output: {
        item: output
      }
    })
  }
  potting("minecraft:amethyst_cluster", "minecraft:large_amethyst_bud")
  potting("minecraft:large_amethyst_bud", "minecraft:medium_amethyst_bud")
  potting("minecraft:medium_amethyst_bud", "minecraft:small_amethyst_bud")
  potting("alexscaves:sulfur_cluster", "alexscaves:sulfur_bud_large")
  potting("alexscaves:sulfur_bud_large", "alexscaves:sulfur_bud_medium")
  potting("alexscaves:sulfur_bud_medium", "alexscaves:sulfur_bud_small")
  potting("biomesoplenty:rose_quartz_cluster", "biomesoplenty:large_rose_quartz_bud")
  potting("biomesoplenty:large_rose_quartz_bud", "biomesoplenty:medium_rose_quartz_bud")
  potting("biomesoplenty:medium_rose_quartz_bud", "biomesoplenty:small_rose_quartz_bud")
})
//#endregion

//#region - NiftyBlocks
ServerEvents.recipes(e => {
  e.shaped("nifty:letter_a", [" A ", "ABA", "A A"], {
    A: "antiblocksrechiseled:bright_white",
    B: "antiblocksrechiseled:slab_white_bright"
  })
})
ServerEvents.recipes(e => {
  e.shaped("nifty:letter_z", ["AAB", " B ", "BAA"], {
    A: "antiblocksrechiseled:bright_white",
    B: "antiblocksrechiseled:slab_white_bright"
  })
})
ServerEvents.recipes(e => {
  e.shaped("nifty:number_0", ["BAB", "A A", "BAB"], {
    A: "antiblocksrechiseled:bright_white",
    B: "antiblocksrechiseled:slab_white_bright"
  })
})
//#endregion

//#region - Experience
ServerEvents.recipes(e => {
  let potting = (input, amount, fluid) => {
    e.custom({
      type: "create_enchantment_industry:disenchanting",
      ingredients: [
        {
          item: input
        }
      ],
      results: [
        {
          fluid: fluid,
          amount: amount
        }
      ]
    })
  }
  potting("create:experience_nugget", 100, "create_enchantment_industry:experience")
  potting("create_sa:heap_of_experience", 400, "create_enchantment_industry:experience")
  potting("create:experience_block", 900, "create_enchantment_industry:experience")
})
//#endregion
