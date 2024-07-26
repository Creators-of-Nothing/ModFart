// Changed crafts
ServerEvents.recipes(e => {
    //--- Global Suppression
    e.remove({ input: '#forge:unused' })
    e.remove({ output: '#forge:unused' })

    // Aether
    e.remove({ id: 'aether:skyroot_tripwire_hook' })
    e.remove({ id: 'aether:skyroot_grindstone' })
    e.remove({ id: 'aether:wood_zanite_vanilla_shield' })
    e.remove({ id: 'aether:skyroot_iron_vanilla_shield' })
    e.remove({ id: 'aether:skyroot_zanite_vanilla_shield' })
    e.remove({ id: 'aether:skyroot_crafting_table' })
    e.remove({ id: 'aether:skyroot_fletching_table' })
    e.remove({ id: 'aether:skyroot_barrel' })
    e.remove({ id: 'aether:skyroot_loom' })
    e.remove({ id: 'aether:skyroot_beehive' })
    e.remove({ id: 'aether:skyroot_cartography_table' })
    e.remove({ id: 'aether:skyroot_chest' })
    e.remove({ id: 'aether:skyroot_jukebox' })
    e.remove({ id: 'aether:skyroot_gravitite_jukebox' })
    e.remove({ id: 'aether:skyroot_smithing_table' })
    e.remove({ id: 'aether:skyroot_note_block' })
    e.remove({ id: 'aether:skyroot_piston' })
    e.remove({ id: 'aether:skyroot_grindstone_holystone_slab' })
    e.remove({ id: 'aether:skyroot_milk_bucket_cake' })
    e.remove({ id: 'aether:moa_egg_cake' })
    e.remove({ id: 'aether:skyroot_milk_bucket_moa_egg_cake' })
    e.remove({ id: 'ancient_aether:valkyrum' })

    // Crafting Tables
    e.remove({ id: 'minecraft:crafting_table' })
    e.remove({ id: 'vct:spruce_crafting_table' })
    e.remove({ id: 'vct:birch_crafting_table' })
    e.remove({ id: 'vct:jungle_crafting_table' })
    e.remove({ id: 'vct:acacia_crafting_table' })
    e.remove({ id: 'vct:dark_oak_crafting_table' })
    e.remove({ id: 'vct:mangrove_crafting_table' })
    e.remove({ id: 'vct:cherry_crafting_table' })
    e.remove({ id: 'vct:bamboo_crafting_table' })
    e.remove({ id: 'vct:crimson_crafting_table' })
    e.remove({ id: 'vct:warped_crafting_table' })

    // Crayfish
    e.remove({ id: 'cfm:light_gray_picket_fence' })
    e.remove({ id: 'cfm:gray_picket_fence' })
    e.remove({ id: 'cfm:black_picket_fence' })
    e.remove({ id: 'cfm:brown_picket_fence' })
    e.remove({ id: 'cfm:red_picket_fence' })
    e.remove({ id: 'cfm:orange_picket_fence' })
    e.remove({ id: 'cfm:yellow_picket_fence' })
    e.remove({ id: 'cfm:lime_picket_fence' })
    e.remove({ id: 'cfm:green_picket_fence' })
    e.remove({ id: 'cfm:cyan_picket_fence' })
    e.remove({ id: 'cfm:light_blue_picket_fence' })
    e.remove({ id: 'cfm:blue_picket_fence' })
    e.remove({ id: 'cfm:purple_picket_fence' })
    e.remove({ id: 'cfm:magenta_picket_fence' })
    e.remove({ id: 'cfm:pink_picket_fence' })

    // Create
    e.remove({ id: 'create_jetpack:netherite_jetpack' })

    // Create - Alloy
    e.remove({ id: 'mekanism:enriching/conversion/andesite/to_polished' })

    // Cyclic
    e.remove({ id: 'cyclic:netherite_ingot' })
    e.remove({ id: 'cyclic:crafting/amethyst' })

    // Extended Crafting
    e.remove({ id: 'extendedcrafting:basic_table' })
    e.remove({ id: 'extendedcrafting:advanced_table' })
    e.remove({ id: 'extendedcrafting:elite_table' })
    e.remove({ id: 'extendedcrafting:ultimate_table' })
    e.remove({ id: 'extendedcrafting:enhanced_redstone_ingot' })
    e.remove({ id: 'extendedcrafting:flux_star' })

    // Farmer's Delight
    e.remove({ id: 'farmersdelight:cutting/amethyst_block' })

    // Meadow
    e.remove({ id: 'meadow:diamond_from_blasting_alpine_diamond_ore' })
    e.remove({ id: 'meadow:iron_ingot_from_blasting_alpine_iron_ore' })
    e.remove({ id: 'meadow:gold_ingot_from_blasting_alpine_gold_ore' })
    e.remove({ id: 'meadow:emerald_from_blasting_alpine_emerald_ore' })
    e.remove({ id: 'meadow:lapis_lazuli_from_blasting_alpine_lapis_ore' })
    e.remove({ id: 'meadow:redstone_from_blasting_alpine_redstone_ore' })
    e.remove({ id: 'meadow:coal_from_blasting_alpine_coal_ore' })
    e.remove({ id: 'meadow:copper_ingot_from_blasting_alpine_copper_ore' })
    e.remove({ id: 'meadow:diamond_from_smelting_alpine_diamond_ore' })
    e.remove({ id: 'meadow:iron_ingot_from_smelting_alpine_iron_ore' })
    e.remove({ id: 'meadow:gold_ingot_from_smelting_alpine_gold_ore' })
    e.remove({ id: 'meadow:emerald_from_smelting_alpine_emerald_ore' })
    e.remove({ id: 'meadow:lapis_lazuli_from_smelting_alpine_lapis_ore' })
    e.remove({ id: 'meadow:redstone_from_smelting_alpine_redstone_ore' })
    e.remove({ id: 'meadow:coal_from_smelting_alpine_coal_ore' })
    e.remove({ id: 'meadow:copper_ingot_from_smelting_alpine_copper_ore' })

    // Mekanism
    e.remove({ id: /mekanism:pigment_extracting\// })
    e.remove({ id: /mekanism:compat\/biomesoplenty\/pigment_extracting\// })
    e.remove({ id: 'mekanism:reaction/wood_gasification/logs' })
    e.remove({ id: 'mekanism:reaction/wood_gasification/planks' })

    // Pam's
    e.remove({ id: 'pamhc2crops:bakedsweetpotatoitem_forge' })
    e.remove({ id: 'pamhc2crops:bakedsweetpotatoitem_smoker' })
    e.remove({ id: 'pamhc2foodcore:glowberryjuiceitemitem' })
    e.remove({ id: "pamhc2foodcore:cookingoilitem_x2_nuts" })
    e.remove({ id: "pamhc2crops:cookingoil_x4_canola_x2" })
    e.remove({ id: "pamhc2foodextended:mixedsaladitem" })

    // Phantasmic
    e.remove({ id: 'nourished_nether:smelt_soul_sand' })

    // Portals
    e.remove({ id: 'jamd:portal_block' })
    e.remove({ id: 'jamd:nether_portal_block' })
    e.remove({ id: 'jamd:end_portal_block' })
    e.remove({ id: 'javd:portal_block' })
    e.remove({ id: 'dimdungeons:recipe_block_portal_keyhole' })

    // Refined Storage
    e.remove({ id: /extrastorage:disk\// })
    e.remove({ id: /extrastorage:storage_block\// })
    e.remove({ id: /extrastorage:part\// })

    // Sophisticated Backpacks and Storage
    e.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_1_from_starter' })
    e.remove({ id: 'sophisticatedstorage:backpack_stack_upgrade_tier_1_from_storage_stack_upgrade_tier_2' })
    e.remove({ id: 'sophisticatedstorage:backpack_stack_upgrade_tier_2_from_storage_stack_upgrade_tier_3' })
    e.remove({ id: 'sophisticatedstorage:backpack_stack_upgrade_tier_3_from_storage_stack_upgrade_tier_4' })
    e.remove({ id: 'sophisticatedstorage:backpack_stack_upgrade_tier_4_from_storage_stack_upgrade_tier_5' })
    e.remove({ id: 'sophisticatedstorage:stack_upgrade_tier_2_from_tier_1_plus' })
    e.remove({ id: 'sophisticatedstorage:storage_stack_upgrade_tier_2_from_backpack_stack_upgrade_tier_1' })
    e.remove({ id: 'sophisticatedstorage:storage_stack_upgrade_tier_3_from_backpack_stack_upgrade_tier_2' })
    e.remove({ id: 'sophisticatedstorage:storage_stack_upgrade_tier_4_from_backpack_stack_upgrade_tier_3' })

    // Stone Recreation
    e.remove({ id: 'twigs:cobblestone_from_pebble' })
    e.remove({ id: 'twigs:rocky_dirt' })

    // Undergarden
    e.remove({ id: 'undergarden:blast_raw_froststeel' })
    e.remove({ id: 'undergarden:smelt_raw_froststeel' })

    // Others
    e.remove({ id: 'mctb:twilight_to_oak_crafting_table' })
    e.remove({ id: 'mctb:chorus_planks_crafting_table' })
    e.remove({ id: 'mctb:chipped_oak_crafting_table' })
    e.remove({ id: 'mctb:archwood_planks_crafting_table' })
    e.remove({ id: 'mctb:echo_planks_crafting_table' })
    e.remove({ id: 'farmersdelight:cake_from_milk_bottle' })
    e.remove({ id: 'create:create/curiosities/cake' })
    e.remove({ id: 'waystones:warp_stone' })
    e.remove({ id: 'apotheosis:scrap_tome' })
    e.remove({ id: 'createchromaticreturn:antimatter_recipe' })
    e.remove({ id: 'createchromaticreturn:basic_induction_cell' })
    e.remove({ id: 'createchromaticreturn:basic_induction_provider' })
    e.remove({ id: 'createchromaticreturn:plutonium_nugget_recipe' })
    e.remove({ id: 'createchromaticreturn:plutonium_pellet_recipe' })
    e.remove({ id: 'createchromaticreturn:polonium_nugget_recipe' })
    e.remove({ id: 'createchromaticreturn:polonium_pellet' })
    e.remove({ id: 'creativecrafter:creative_crafter' })
    e.remove({ id: 'cagedmobs:crafting/nether_star_from_fragments' })
    e.remove({ id: 'cagedmobs:crafting/nether_star_from_fragments' })
    e.remove({ id: 'festive_delight:cinnamon_craft_fabric' })
    e.remove({ id: 'ars_elemental:quartz_crush' })
    e.remove({ id: 'enlightened_end:cerulean_planks' })
    e.replaceInput({ input: 'minecraft:crafting_table' }, 'minecraft:crafting_table', '#forge:workbench')
    e.replaceInput({ input: 'cagedmobs:warden_receptor' }, 'cagedmobs:warden_receptor', 'apotheosis:warden_tendril')
})


// Catalysts
ServerEvents.recipes(e => {
    let potting = (rod, output) => {
        e.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "moreplates:black_iron_plate"
            },
            "loops": 4,
            "results": [
                {
                    "item": output
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "moreplates:black_iron_plate"
                        },
                        {
                            "item": rod
                        }
                    ],
                    "results": [
                        {
                            "item": "moreplates:black_iron_plate"
                        }
                    ]
                }
            ],
            "transitionalItem": {
                "item": "moreplates:black_iron_plate"
            }
        })
    }
    potting('moreplates:iron_rod', 'extendedcrafting:basic_catalyst')
    potting('moreplates:gold_rod', 'extendedcrafting:advanced_catalyst')
    potting('moreplates:diamond_rod', 'extendedcrafting:elite_catalyst')
    potting('moreplates:emerald_rod', 'extendedcrafting:ultimate_catalyst')
    potting('moreplates:redstone_ingot_rod', 'extendedcrafting:redstone_catalyst')
    potting('kubejs:enhanced_redstone_rod', 'extendedcrafting:enhanced_redstone_catalyst')
    potting('moreplates:ender_rod', 'extendedcrafting:ender_catalyst')
    potting('moreplates:enhanced_ender_rod', 'extendedcrafting:enhanced_ender_catalyst')
    potting('moreplates:crystaltine_rod', 'extendedcrafting:crystaltine_catalyst')
    potting('moreplates:the_ultimate_rod', 'extendedcrafting:the_ultimate_catalyst')
})


// Create - Alloy
ServerEvents.recipes(e => {
    let potting = (input, output) => {
        e.custom({
            "type": "create:sandpaper_polishing",
            "ingredients": [
                {
                    "item": input
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('minecraft:andesite', 'create:andesite_alloy')
})
ServerEvents.recipes(e => {
    let potting = (input, output) => {
        e.custom({
            "type": "mekanism:enriching",
            "input": {
                "ingredient": {
                    "item": input
                }
            },
            "output": {
                "item": output
            }
        })
    }
    potting('minecraft:andesite', 'create:andesite_alloy')
    potting('minecraft:amethyst_shard', 'createutilities:polished_amethyst')
})


// Extended Crafting
ServerEvents.recipes(e => {
    let potting = (input, catalyst, output) => {
        e.custom({
            "type": "create:item_application",
            "ingredients": [
                {
                    "tag": input
                },
                {
                    "item": catalyst
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('forge:workbench', 'extendedcrafting:basic_catalyst', 'extendedcrafting:basic_table')
})
ServerEvents.recipes(e => {
    let potting = (input, catalyst, output) => {
        e.custom({
            "type": "create:item_application",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": catalyst
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('extendedcrafting:basic_table', 'extendedcrafting:advanced_catalyst', 'extendedcrafting:advanced_table')
    potting('extendedcrafting:advanced_table', 'extendedcrafting:elite_catalyst', 'extendedcrafting:elite_table')
    potting('extendedcrafting:elite_table', 'extendedcrafting:ultimate_catalyst', 'extendedcrafting:ultimate_table')
})
ServerEvents.recipes(e => {
    let potting = (input, output) => {
        e.custom({
            "type": "createaddition:charging",
            "input": {
                "item": input
            },
            "result": {
                "item": output
            },
            "energy": 10000,
            "maxChargeRate": 1000
        })
    }
    potting('minecraft:nether_star', 'extendedcrafting:flux_star')
    potting('extendedcrafting:redstone_ingot', 'extendedcrafting:enhanced_redstone_ingot')
})


// Pigment Extracting
ServerEvents.recipes(e => {
    let potting = (dye, pigment) => {
        e.custom({
            "type": "mekanism:pigment_extracting",
            "input": {
                "ingredient": {
                    "tag": dye
                }
            },
            "output": {
                "amount": 1024,
                "pigment": pigment
            }
        })
    }
    potting('forge:dyes/black', 'mekanism:black')
    potting('forge:dyes/blue', 'mekanism:blue')
    potting('forge:dyes/brown', 'mekanism:brown')
    potting('forge:dyes/cyan', 'mekanism:cyan')
    potting('forge:dyes/gray', 'mekanism:gray')
    potting('forge:dyes/green', 'mekanism:green')
    potting('forge:dyes/light_blue', 'mekanism:light_blue')
    potting('forge:dyes/light_gray', 'mekanism:light_gray')
    potting('forge:dyes/lime', 'mekanism:lime')
    potting('forge:dyes/magenta', 'mekanism:magenta')
    potting('forge:dyes/orange', 'mekanism:orange')
    potting('forge:dyes/pink', 'mekanism:pink')
    potting('forge:dyes/purple', 'mekanism:purple')
    potting('forge:dyes/red', 'mekanism:red')
    potting('forge:dyes/white', 'mekanism:white')
    potting('forge:dyes/yellow', 'mekanism:yellow')
})


// Planks
ServerEvents.recipes(e => {
    let potting = (element, output) => {
        e.shaped(output, [
            'AA',
            'AA'
        ], {
            A: element
        })
    }
    potting('#modfart/planks/other', 'minecraft:crafting_table')
    potting('#modfart/planks/spruce', 'vct:spruce_crafting_table')
    potting('#modfart/planks/birch', 'vct:birch_crafting_table')
    potting('#modfart/planks/jungle', 'vct:jungle_crafting_table')
    potting('#modfart/planks/acacia', 'vct:acacia_crafting_table')
    potting('#modfart/planks/dark_oak', 'vct:dark_oak_crafting_table')
    potting('#modfart/planks/mangrove', 'vct:mangrove_crafting_table')
    potting('#modfart/planks/bamboo', 'vct:bamboo_crafting_table')
    potting('#modfart/planks/cherry', 'vct:cherry_crafting_table')
    potting('#modfart/planks/crimson', 'vct:crimson_crafting_table')
    potting('#modfart/planks/warped', 'vct:warped_crafting_table')
})


// Portals
ServerEvents.recipes(e => {
    let potting = (output, plate1, plate2, plate3, plate4) => {
        e.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": 'wormhole:portal_frame'
            },
            "loops": 1,
            "results": [
                {
                    "item": output
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": 'wormhole:portal_frame'
                        },
                        {
                            "item": plate1
                        }
                    ],
                    "results": [
                        {
                            "item": 'wormhole:portal_frame'
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": 'wormhole:portal_frame'
                        },
                        {
                            "item": plate2
                        }
                    ],
                    "results": [
                        {
                            "item": 'wormhole:portal_frame'
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": 'wormhole:portal_frame'
                        },
                        {
                            "item": plate3
                        }
                    ],
                    "results": [
                        {
                            "item": 'wormhole:portal_frame'
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": 'wormhole:portal_frame'
                        },
                        {
                            "item": plate4
                        }
                    ],
                    "results": [
                        {
                            "item": 'wormhole:portal_frame'
                        }
                    ]
                }
            ],
            "transitionalItem": {
                "item": 'wormhole:portal_frame'
            }
        })
    }
    potting('jamd:portal_block', 'moreplates:diamond_plate', 'kubejs:dimensional_plate', 'moreplates:ruby_plate', 'moreplates:zinc_plate')
    potting('jamd:nether_portal', 'moreplates:netherite_plate', 'kubejs:dimensional_plate', 'moreplates:tungsten_plate', 'moreplates:nether_quartz_plate')
    potting('jamd:end_portal', 'kubejs:enderite_plate', 'kubejs:dimensional_plate', 'kubejs:malachite_plate', 'moreplates:bismuth_plate')
    potting('javd:portal_block', 'kubejs:echo_plate', 'kubejs:dimensional_plate', 'moreplates:amethyst_plate', 'moreplates:paper_plate')
    potting('dimdungeons:block_portal_keyhole', 'moreplates:gold_plate', 'kubejs:dimensional_plate', 'moreplates:ender_plate', 'moreplates:black_iron_plate')
})


// Stone Recreation
ServerEvents.recipes(e => {
    let potting = (input, output) => {
        e.custom({
            "type": "create:crushing",
            "ingredients": [
                {
                    "item": input
                }
            ],
            "processingTime": 200,
            "results": [
                {
                    "count": 16,
                    "item": output
                }
            ]
        })
    }
    potting('minecraft:cobblestone', 'twigs:pebble')
})
ServerEvents.recipes(e => {
    e.shaped('minecraft:cobblestone', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: "twigs:pebble"
    })
})
ServerEvents.recipes(e => {
    let potting = (element, output) => {
        e.shaped(output, [
            'BBB',
            'BAB',
            'BBB'
        ], {
            A: element,
            B: "twigs:pebble"
        })
    }
    potting('minecraft:nether_wart', 'minecraft:netherrack')
    potting('minecraft:white_dye', 'minecraft:diorite')
    potting('minecraft:gray_dye', 'minecraft:andesite')
    potting('minecraft:red_dye', 'minecraft:granite')
    potting('minecraft:chorus_fruit', 'minecraft:end_stone')
    potting('minecraft:dirt', 'twigs:rocky_dirt')
    potting('cyclic:cloud', 'aether:holystone')
    potting('mekanism:dust_obsidian', 'minecraft:cobbled_deepslate')
    potting('deeperdarker:sculk_tendrils', 'deeperdarker:cobbled_sculk_stone')
    potting('twilightforest:thorn_rose', 'twilightforest:deadrock')
    potting('minecraft:ice', 'undergarden:shiverstone')
    potting('undergarden:depthrock_pebble', 'undergarden:depthrock')
})


// Flux Dust
ServerEvents.recipes(e => {
    let potting = (input, deploy, count) => {
        e.custom({
            "type": "create:deploying",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": deploy
                }
            ],
            "keepHeldItem": true,
            "results": [
                {
                    "item": "fluxnetworks:flux_dust",
                    "count": count
                }
            ]
        })
    }
    potting('minecraft:redstone', 'twilightforest:giant_obsidian', 1)
    potting('minecraft:redstone', 'kubejs:giant_anti_obsidian', 2)
    potting('minecraft:amethyst_shard', 'kubejs:giant_anti_obsidian', 4)
    potting('kubejs:amethyst_dust', 'kubejs:giant_anti_obsidian', 8)
})


// Others
ServerEvents.recipes(e => {
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:mycelium"
            },
            {
                "amount": 1000,
                "fluid": "sliceanddice:fertilizer"
            }
        ],
        "results": [
            {
                "item": "farmersdelight:rich_soil"
            }
        ]
    })
})
ServerEvents.recipes(e => {
    e.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": {
                "item": "minecraft:granite"
            }
        },
        "output": {
            "item": "minecraft:red_sand"
        }
    })
})
ServerEvents.recipes(e => {
    let potting = (input, output) => {
        e.shapeless(output, input)
    }
    potting('mob_grinding_utils:fan_upgrade_height', 'mob_grinding_utils:fan_upgrade_width')
    potting('mob_grinding_utils:fan_upgrade_width', 'mob_grinding_utils:fan_upgrade_height')
    potting('minecraft:honeycomb_block', '4x minecraft:honeycomb')
    potting('minecraft:nether_star', '9x cagedmobs:nether_star_fragment')
    potting('minecraft:dragon_egg', '9x cagedmobs:dragon_scale')
    potting('minecraft:sponge', '9x cagedmobs:sponge_fragment')
    potting('create_things_and_misc:powdered_obsidian_block', '9x mekanism:dust_obsidian')
})
ServerEvents.recipes(e => {
    let potting = (element, output) => {
        e.shaped(output, [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: element
        })
    }
    potting('cagedmobs:nether_star_fragment', 'minecraft:nether_star')
})
ServerEvents.recipes(e => {
    let potting = (element1, element2, output) => {
        e.shaped(output, [
            ' A ',
            'ABA',
            ' A '
        ], {
            A: element1,
            B: element2
        })
    }
    potting('cagedmobs:nether_star_fragment', 'nourished_nether:netherite_nugget', 'cagedmobs:star_infused_netherite_nugget')
    potting('extendedcrafting:nether_star_block', 'minecraft:netherite_block', 'cagedmobs:star_infused_netherite_block')
})
ServerEvents.recipes(e => {
    let potting = (input, output) => {
        e.custom({
            "type": "mekanism:crushing",
            "input": {
                "ingredient": {
                    "item": input
                }
            },
            "output": {
                "item": output
            }
        })
    }
    potting('minecraft:amethyst_shard', 'kubejs:amethyst_dust')
})
ServerEvents.recipes(e => {
    e.custom({
        "type": "cyclic:solidifier",
        "ingredients": [
            {
                "item": "minecraft:netherite_ingot"
            },
            {
                "item": "cyclic:gem_obsidian"
            },
            {
                "item": "cagedmobs:star_infused_netherite_block"
            }
        ],
        "energy": {
            "rfpertick": 5000,
            "ticks": 1000
        },
        "mix": {
            "fluid": "create_enchantment_industry:hyper_experience",
            "count": 1000
        },
        "result": {
            "item": "extendedcrafting:crystaltine_ingot",
            "count": 1
        }
    })
})
ServerEvents.recipes(e => {
    e.shaped("kubejs:giant_anti_obsidian", [
        'AAA',
        ' B ',
        'AAA'
    ], {
        A: "kubejs:antimatter_rod",
        B: "twilightforest:giant_obsidian"
    })
})
ServerEvents.recipes(e => {
    let potting = (type, cooktime, input, count, xp, output) => {
        e.custom({
            "type": type,
            "ingredient": {
                "item": input
            },
            "result": {
                "item": output,
                "count": count
            },
            "experience": xp,
            "cookingtime": cooktime
        })
    }
    potting('minecraft:smelting', 200, 'enlightened_end:adamantite_node', '8', 0.7, 'enlightened_end:adamantite_nugget')
    potting('minecraft:blasting', 100, 'enlightened_end:adamantite_node', '8', 0.7, 'enlightened_end:adamantite_nugget')
})