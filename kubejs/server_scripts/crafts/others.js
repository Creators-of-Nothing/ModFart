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

    // Create - Alloy
    e.remove({ id: 'mekanism:enriching/conversion/andesite/to_polished' })

    // Extended Crafting
    e.remove({ id: 'extendedcrafting:basic_table' })
    e.remove({ id: 'extendedcrafting:advanced_table' })
    e.remove({ id: 'extendedcrafting:elite_table' })
    e.remove({ id: 'extendedcrafting:ultimate_table' })

    // Pigment Extracting
    e.remove({ id: /mekanism:pigment_extracting\// })

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

    // Stone Recreation
    e.remove({ id: 'twigs:cobblestone_from_pebble' })
    e.remove({ id: 'twigs:rocky_dirt' })

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
    e.replaceInput({ input: 'minecraft:crafting_table' }, 'minecraft:crafting_table', '#forge:workbench')
    e.remove({ id: 'createchromaticreturn:antimatter_recipe' })
    e.remove({ id: 'createchromaticreturn:basic_induction_cell' })
    e.remove({ id: 'createchromaticreturn:basic_induction_provider' })
    e.remove({ id: 'createchromaticreturn:plutonium_nugget_recipe' })
    e.remove({ id: 'createchromaticreturn:plutonium_pellet_recipe' })
    e.remove({ id: 'createchromaticreturn:polonium_nugget_recipe' })
    e.remove({ id: 'createchromaticreturn:polonium_pellet' })
    e.remove({ id: 'creativecrafter:creative_crafter' })
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


// Cutting
ServerEvents.recipes(e => {
    let potting = (input, count, output) => {
        e.custom({
            "type": "farmersdelight:cutting",
            "ingredients": [
                {
                    "item": input
                }
            ],
            "result": [
                {
                    "count": count,
                    "item": output
                }
            ],
            "tool": {
                "tag": "forge:tools/knives"
            }
        })
    }
    potting('minecraft:dragon_head', 2, 'useless_sword:dragon_scale')
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
    potting('mekanism:dust_obsidian', 'minecraft:cobbled_deepslate')
    potting('deeperdarker:sculk_tendrils', 'deeperdarker:cobbled_sculk_stone')
    potting('twilightforest:thorn_rose', 'twilightforest:deadrock')
    potting('minecraft:ice', 'undergarden:shiverstone')
    potting('undergarden:depthrock_pebble', 'undergarden:depthrock')
})


// Others
ServerEvents.recipes(e => {
    e.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": "farmersdelight:organic_compost"
            },
            {
                "amount": 1000,
                "fluid": "minecraft:water",
                "nbt": {}
            },
            {
                "item": "nethersdelight:soul_compost"
            },
            {
                "item": "minecraft:mud"
            },
            {
                "item": "nourished_nether:rich_soul_sludge"
            },
            {
                "item": "minecraft:moss_block"
            }
        ],
        "results": [
            {
                "count": 8,
                "item": "farmersdelight:rich_soil"
            }
        ]
    })
})
ServerEvents.recipes(e => {
    let potting = (input, output) => {
        e.shapeless(output, input)
    }
    potting('mob_grinding_utils:fan_upgrade_height', 'mob_grinding_utils:fan_upgrade_width')
    potting('mob_grinding_utils:fan_upgrade_width', 'mob_grinding_utils:fan_upgrade_height')
    potting('minecraft:honeycomb_block', '4x minecraft:honeycomb')
})