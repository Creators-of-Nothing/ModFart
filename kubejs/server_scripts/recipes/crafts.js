// Botany Pots - Crops
ServerEvents.recipes(e => {
    // Trees
    let potting = (crop, category, output1) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": crop
            },
            "categories": [
                category
            ],
            "growthTicks": 1000,
            "display": {
                "block": crop
            },
            "drops": [
                {
                    "chance": 1.00,
                    "output": {
                        "item": output1
                    },
                    "minRolls": 2,
                    "maxRolls": 4
                },
                {
                    "chance": 0.01,
                    "output": {
                        "item": crop
                    }
                }
            ]
        })
        potting('ars_nouveau:red_archwood_sapling', 'dirt', 'ars_nouveau:red_archwood_log')
    }
})


// Botany Pots - Soils
ServerEvents.recipes(e => {
    let potting = (soil, category, modif) => {
        e.custom({
            "type": "botanypots:soil",
            "input": {
                "item": soil
            },
            "display": {
                "block": soil
            },
            "categories": [
                category
            ],
            "growthModifier": modif
        })
    }
    potting('farmersdelight:rich_soil', 'dirt', '2.00')
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


// Coals
ServerEvents.recipes(e => {
    let potting = (output, input, dust) => {
        e.custom({
            "type": "create:deploying",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": dust
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('morecoal:copper_coal', 'minecraft:coal', 'mekanism:dust_copper')
    potting('morecoal:iron_coal', 'morecoal:copper_coal', 'mekanism:dust_iron')
    potting('morecoal:lapis_coal', 'morecoal:iron_coal', 'mekanism:dust_lapis_lazuli')
    potting('morecoal:redstone_coal', 'morecoal:lapis_coal', 'minecraft:redstone')
    potting('morecoal:gold_coal', 'morecoal:redstone_coal', 'mekanism:dust_gold')
    potting('morecoal:amethyst_coal', 'morecoal:gold_coal', 'minecraft:amethyst_shard')
    potting('morecoal:emerald_coal', 'morecoal:amethyst_coal', 'mekanism:dust_emerald')
    potting('morecoal:diamond_coal', 'morecoal:emerald_coal', 'mekanism:dust_diamond')
    potting('morecoal:netherite_coal', 'morecoal:diamond_coal', 'mekanism:dust_netherite')
})
ServerEvents.recipes(e => {
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "morecoal:amethyst_coal"
            },
            {
                "item": "morecoal:diamond_coal"
            },
            {
                "item": "morecoal:iron_coal"
            },
            {
                "item": "morecoal:emerald_coal"
            },
            {
                "item": "morecoal:copper_coal"
            },
            {
                "item": "morecoal:redstone_coal"
            },
            {
                "item": "morecoal:gold_coal"
            },
            {
                "item": "morecoal:lapis_coal"
            },
            {
                "item": "morecoal:netherite_coal"
            }
        ],
        "results": [
            {
                "item": "morecoal:omni_coal"
            }
        ]
    })
})


// Furnaces
ServerEvents.recipes(e => {
    let potting = (output, input, plate) => {
        e.custom({
            "type": "create:item_application",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": plate
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('ironfurnaces:copper_furnace', 'minecraft:furnace', 'moreplates:copper_plate')
    potting('ironfurnaces:silver_furnace', 'ironfurnaces:copper_furnace', 'moreplates:silver_plate')
    potting('ironfurnaces:iron_furnace', 'ironfurnaces:silver_furnace', 'moreplates:iron_plate')
    potting('ironfurnaces:gold_furnace', 'ironfurnaces:iron_furnace', 'moreplates:gold_plate')
    potting('ironfurnaces:diamond_furnace', 'ironfurnaces:gold_furnace', 'moreplates:diamond_plate')
    potting('ironfurnaces:obsidian_furnace', 'ironfurnaces:diamond_furnace', 'kubejs:obsidian_plate')
    potting('ironfurnaces:emerald_furnace', 'ironfurnaces:obsidian_furnace', 'moreplates:emerald_plate')
    potting('ironfurnaces:netherite_furnace', 'ironfurnaces:emerald_furnace', 'moreplates:netherite_plate')
    potting('ironfurnaces:million_furnace', 'ironfurnaces:netherite_furnace', 'extendedcrafting:the_ultimate_catalyst')
})


// Gears
ServerEvents.recipes(e => {
    let potting = (output, element) => {
        e.shaped(output, [
            ' A ',
            'ABA',
            ' A '
        ], {
            A: element,
            B: 'minecraft:stick'
        })
    }
    potting('kubejs:adamantite_gear', 'enlightened_end:adamantite_ingot')
    potting('moreplates:amethyst_gear', 'minecraft:amethyst_shard')
    potting('kubejs:andesite_gear', 'create:andesite_alloy')
    potting('kubejs:antimatter_gear', 'mekanism:pellet_antimatter')
    potting('moreplates:aquamarine_gear', 'epicsamurai:aquamarine')
    potting('moreplates:bismuth_gear', 'enlightened_end:bismuth_ingot')
    potting('moreplates:black_iron_gear', 'extendedcrafting:black_iron_ingot')
    potting('moreplates:brass_gear', 'create:brass_ingot')
    potting('moreplates:brick_gear', 'minecraft:brick')
    potting('moreplates:bronze_gear', 'mekanism:ingot_bronze')
    potting('moreplates:charcoal_gear', 'minecraft:charcoal')
    potting('moreplates:coal_gear', 'minecraft:coal')
    potting('moreplates:copper_gear', 'minecraft:copper_ingot')
    potting('moreplates:crystaltine_gear', 'extendedcrafting:crystaltine_ingot')
    potting('moreplates:diamond_gear', 'minecraft:diamond')
    potting('kubejs:dimensional_gear', 'rftoolsbase:dimensionalshard')
    potting('kubejs:drygmy_gear', 'ars_nouveau:drygmy_shard')
    potting('kubejs:echo_gear', 'minecraft:echo_shard')
    potting('moreplates:electrum_gear', 'createaddition:electrum_ingot')
    potting('moreplates:emerald_gear', 'minecraft:emerald')
    potting('moreplates:ender_gear', 'extendedcrafting:ender_ingot')
    potting('kubejs:enderite_gear', 'lolenderite:enderite_ingot')
    potting('kubejs:endumium_gear', 'farlanders:endumium_crystal')
    potting('moreplates:enhanced_ender_gear', 'extendedcrafting:enhanced_ender_ingot')
    potting('kubejs:enhanced_redstone_gear', 'extendedcrafting:enhanced_redstone_ingot')
    potting('kubejs:experience_gear', 'create:experience_nugget')
    potting('moreplates:fiery_gear', 'twilightforest:fiery_ingot')
    potting('moreplates:flint_gear', 'minecraft:flint')
    potting('moreplates:glowstone_gear', 'minecraft:glowstone_dust')
    potting('moreplates:gold_gear', 'minecraft:gold_ingot')
    potting('kubejs:hdpe_gear', 'mekanism:hdpe_pellet')
    potting('moreplates:iron_gear', 'minecraft:iron_ingot')
    potting('moreplates:ironwood_gear', 'twilightforest:ironwood_ingot')
    potting('moreplates:knightmetal_gear', 'twilightforest:knightmetal_ingot')
    potting('moreplates:lapis_lazuli_gear', 'minecraft:lapis_lazuli')
    potting('moreplates:lead_gear', 'mekanism:ingot_lead')
    potting('kubejs:malachite_gear', 'enlightened_end:malachite')
    potting('kubejs:necronium_gear', 'nourished_nether:necronium_ingot')
    potting('moreplates:nether_brick_gear', 'minecraft:nether_brick')
    potting('moreplates:nether_quartz_gear', 'minecraft:quartz')
    potting('kubejs:nether_star_gear', 'minecraft:nether_star')
    potting('moreplates:netherite_gear', 'minecraft:netherite_ingot')
    potting('kubejs:obsidian_gear', 'minecraft:obsidian')
    potting('moreplates:osmium_gear', 'mekanism:ingot_osmium')
    potting('moreplates:paper_gear', 'minecraft:paper')
    potting('kubejs:plutonium_gear', 'mekanism:pellet_plutonium')
    potting('kubejs:polonium_gear', 'mekanism:pellet_polonium')
    potting('moreplates:prismarine_crystal_gear', 'minecraft:prismarine_crystals')
    potting('moreplates:quartz_enriched_gear', 'refinedstorage:quartz_enriched_iron')
    potting('moreplates:redstone_gear', 'minecraft:redstone')
    potting('moreplates:redstone_ingot_gear', 'extendedcrafting:redstone_ingot')
    potting('moreplates:refined_glowstone_gear', 'mekanism:ingot_refined_glowstone')
    potting('moreplates:refined_obsidian_gear', 'mekanism:ingot_refined_obsidian')
    potting('kubejs:rose_quartz_gear', 'create:rose_quartz')
    potting('moreplates:ruby_gear', 'epicsamurai:ruby')
    potting('moreplates:silicon_gear', 'refinedstorage:silicon')
    potting('moreplates:silver_gear', 'epicsamurai:silver_ingot')
    potting('kubejs:source_gear', 'ars_nouveau:source_gem')
    potting('kubejs:starbuncle_gear', 'ars_nouveau:starbuncle_shards')
    potting('moreplates:steel_gear', 'mekanism:ingot_steel')
    potting('moreplates:the_ultimate_gear', 'extendedcrafting:the_ultimate_ingot')
    potting('moreplates:tin_gear', 'mekanism:ingot_tin')
    potting('kubejs:titan_gear', 'farlanders:titan_hide')
    potting('moreplates:tungsten_gear', 'stalwart_dungeons:tungsten_ingot')
    potting('moreplates:uranium_gear', 'mekanism:ingot_uranium')
    potting('kubejs:void_steel_gear', 'createutilities:void_steel_ingot')
    potting('kubejs:whirlisprig_gear', 'ars_nouveau:whirlisprig_shards')
    potting('kubejs:wixie_gear', 'ars_nouveau:wixie_shards')
    potting('moreplates:wood_gear', '#minecraft:planks')
    potting('moreplates:zinc_gear', 'create:zinc_ingot')
})


// Pipez
ServerEvents.recipes(e => {
    let potting = (output, input, element) => {
        e.shaped(output, [
            'BBB',
            'BAB',
            'BBB'
        ], {
            A: input,
            B: element
        })
    }
    potting('pipez:basic_upgrade', 'moreplates:redstone_plate', 'minecraft:iron_ingot')
    potting('pipez:improved_upgrade', 'pipez:basic_upgrade', 'minecraft:gold_ingot')
    potting('pipez:advanced_upgrade', 'pipez:improved_upgrade', 'minecraft:diamond')
    potting('pipez:ultimate_upgrade', 'pipez:advanced_upgrade', 'minecraft:netherite_ingot')
})
ServerEvents.recipes(e => {
    let potting = (output, input, plate) => {
        e.shaped(output, [
            ' B ',
            'BAB',
            ' B '
        ], {
            A: input,
            B: plate
        })
    }
    potting('pipez:basic_upgrade', 'moreplates:redstone_plate', 'moreplates:iron_plate')
    potting('pipez:improved_upgrade', 'pipez:basic_upgrade', 'moreplates:gold_plate')
    potting('pipez:advanced_upgrade', 'pipez:improved_upgrade', 'moreplates:diamond_plate')
    potting('pipez:ultimate_upgrade', 'pipez:advanced_upgrade', 'moreplates:netherite_plate')
})
ServerEvents.recipes(e => {
    let potting = (output, input, plate) => {
        e.custom({
            "type": "create:deploying",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": plate
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('pipez:basic_upgrade', 'moreplates:redstone_plate', 'moreplates:iron_plate')
    potting('pipez:improved_upgrade', 'pipez:basic_upgrade', 'moreplates:gold_plate')
    potting('pipez:advanced_upgrade', 'pipez:improved_upgrade', 'moreplates:diamond_plate')
    potting('pipez:ultimate_upgrade', 'pipez:advanced_upgrade', 'moreplates:netherite_plate')
})


// Plates
ServerEvents.recipes(e => {
    let potting = (output, element) => {
        e.custom({
            "type": "create:pressing",
            "ingredients": [
                {
                    "item": element
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('kubejs:adamantite_plate', 'enlightened_end:adamantite_ingot')
    potting('moreplates:amethyst_plate', 'minecraft:amethyst_shard')
    potting('kubejs:andesite_plate', 'create:andesite_alloy')
    potting('kubejs:antimatter_plate', 'mekanism:pellet_antimatter')
    potting('moreplates:aquamarine_plate', 'epicsamurai:aquamarine')
    potting('moreplates:bismuth_plate', 'enlightened_end:bismuth_ingot')
    potting('moreplates:black_iron_plate', 'extendedcrafting:black_iron_ingot')
    potting('moreplates:brass_plate', 'create:brass_ingot')
    potting('moreplates:brick_plate', 'minecraft:brick')
    potting('moreplates:bronze_plate', 'mekanism:ingot_bronze')
    potting('moreplates:charcoal_plate', 'minecraft:charcoal')
    potting('moreplates:coal_plate', 'minecraft:coal')
    potting('moreplates:copper_plate', 'minecraft:copper_ingot')
    potting('moreplates:crystaltine_plate', 'extendedcrafting:crystaltine_ingot')
    potting('moreplates:diamond_plate', 'minecraft:diamond')
    potting('kubejs:dimensional_plate', 'rftoolsbase:dimensionalshard')
    potting('kubejs:drygmy_plate', 'ars_nouveau:drygmy_shard')
    potting('kubejs:echo_plate', 'minecraft:echo_shard')
    potting('moreplates:electrum_plate', 'createaddition:electrum_ingot')
    potting('moreplates:emerald_plate', 'minecraft:emerald')
    potting('moreplates:ender_plate', 'extendedcrafting:ender_ingot')
    potting('kubejs:enderite_plate', 'lolenderite:enderite_ingot')
    potting('kubejs:endumium_plate', 'farlanders:endumium_crystal')
    potting('moreplates:enhanced_ender_plate', 'extendedcrafting:enhanced_ender_ingot')
    potting('kubejs:enhanced_redstone_plate', 'extendedcrafting:enhanced_redstone_ingot')
    potting('kubejs:experience_plate', 'create:experience_nugget')
    potting('moreplates:fiery_plate', 'twilightforest:fiery_ingot')
    potting('moreplates:flint_plate', 'minecraft:flint')
    potting('moreplates:glowstone_plate', 'minecraft:glowstone_dust')
    potting('moreplates:gold_plate', 'minecraft:gold_ingot')
    potting('kubejs:hdpe_plate', 'mekanism:hdpe_pellet')
    potting('moreplates:iron_plate', 'minecraft:iron_ingot')
    potting('moreplates:ironwood_plate', 'twilightforest:ironwood_ingot')
    potting('moreplates:knightmetal_plate', 'twilightforest:knightmetal_ingot')
    potting('moreplates:lapis_lazuli_plate', 'minecraft:lapis_lazuli')
    potting('moreplates:lead_plate', 'mekanism:ingot_lead')
    potting('kubejs:malachite_plate', 'enlightened_end:malachite')
    potting('kubejs:necronium_plate', 'nourished_nether:necronium_ingot')
    potting('moreplates:nether_brick_plate', 'minecraft:nether_brick')
    potting('moreplates:nether_quartz_plate', 'minecraft:quartz')
    potting('kubejs:nether_star_plate', 'minecraft:nether_star')
    potting('moreplates:netherite_plate', 'minecraft:netherite_ingot')
    potting('kubejs:obsidian_plate', 'minecraft:obsidian')
    potting('moreplates:osmium_plate', 'mekanism:ingot_osmium')
    potting('moreplates:paper_plate', 'minecraft:paper')
    potting('kubejs:plutonium_plate', 'mekanism:pellet_plutonium')
    potting('kubejs:polonium_plate', 'mekanism:pellet_polonium')
    potting('moreplates:prismarine_crystal_plate', 'minecraft:prismarine_crystals')
    potting('moreplates:quartz_enriched_plate', 'refinedstorage:quartz_enriched_iron')
    potting('moreplates:redstone_plate', 'minecraft:redstone')
    potting('moreplates:redstone_ingot_plate', 'extendedcrafting:redstone_ingot')
    potting('moreplates:refined_glowstone_plate', 'mekanism:ingot_refined_glowstone')
    potting('moreplates:refined_obsidian_plate', 'mekanism:ingot_refined_obsidian')
    potting('kubejs:rose_quartz_plate', 'create:rose_quartz')
    potting('moreplates:ruby_plate', 'epicsamurai:ruby')
    potting('moreplates:silicon_plate', 'refinedstorage:silicon')
    potting('moreplates:silver_plate', 'epicsamurai:silver_ingot')
    potting('kubejs:source_plate', 'ars_nouveau:source_gem')
    potting('kubejs:starbuncle_plate', 'ars_nouveau:starbuncle_shards')
    potting('moreplates:steel_plate', 'mekanism:ingot_steel')
    potting('moreplates:the_ultimate_plate', 'extendedcrafting:the_ultimate_ingot')
    potting('moreplates:tin_plate', 'mekanism:ingot_tin')
    potting('kubejs:titan_plate', 'farlanders:titan_hide')
    potting('moreplates:tungsten_plate', 'stalwart_dungeons:tungsten_ingot')
    potting('moreplates:uranium_plate', 'mekanism:ingot_uranium')
    potting('kubejs:void_steel_plate', 'createutilities:void_steel_ingot')
    potting('kubejs:whirlisprig_plate', 'ars_nouveau:whirlisprig_shards')
    potting('kubejs:wixie_plate', 'ars_nouveau:wixie_shards')
    potting('moreplates:zinc_plate', 'create:zinc_ingot')
})
ServerEvents.recipes(e => {
    let potting = (output, element) => {
        e.custom({
            "type": "create:pressing",
            "ingredients": [
                {
                    "tag": element
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('moreplates:wood_plate', 'minecraft:planks')
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


// Processing - Ores -> Raw Material
ServerEvents.recipes(e => {
    let potting = (input, output) => {
        e.custom({
            "type": "minecraft:smelting",
            "ingredient": {
                "tag": input
            },
            "result": {
                "item": output,
                "count": 3
            },
            "experience": 0.7,
            "cookingtime": 200
        })
    }
    potting('forge:ores/coal', 'kubejs:raw_coal')
    potting('forge:ores/iron', 'minecraft:raw_iron')
    potting('forge:ores/copper', 'minecraft:raw_copper')
    potting('forge:ores/gold', 'minecraft:raw_gold')
    potting('forge:ores/redstone', 'kubejs:raw_redstone')
    potting('forge:ores/emerald', 'kubejs:raw_emerald')
    potting('forge:ores/lapis', 'kubejs:raw_lapis_lazuli')
    potting('forge:ores/diamond', 'kubejs:raw_diamond')
    potting('forge:ores/quartz', 'kubejs:raw_quartz')
    potting('forge:ores/zinc', 'create:raw_zinc')
    potting('forge:ores/malachite', 'kubejs:raw_malachite')
    potting('forge:ores/irradium', 'enlightened_end:raw_irradium')
    potting('forge:ores/bismuth', 'enlightened_end:raw_bismuth')
    potting('forge:ores/ruby', 'kubejs:raw_ruby')
    potting('forge:ores/jade', 'kubejs:raw_jade')
    potting('forge:ores/aquamarine', 'kubejs:raw_aquamarine')
    potting('forge:ores/onyx', 'kubejs:raw_onyx')
    potting('forge:ores/silver', 'epicsamurai:raw_silver')
    potting('forge:ores/dimensional_shard', 'kubejs:raw_dimensionalshard')
    potting('forge:ores/tungsten', 'stalwart_dungeons:raw_tungsten')
    potting('forge:ores/chorundum', 'kubejs:raw_chorundum')
    potting('forge:ores/ambrosium', 'kubejs:raw_ambrosium')
    potting('forge:ores/zanite', 'kubejs:raw_zanite')
    potting('forge:ores/gravitite', 'kubejs:raw_gravitite')
    potting('forge:ores/cloggrum', 'undergarden:raw_cloggrum')
    potting('forge:ores/froststeel', 'undergarden:raw_froststeel')
    potting('forge:ores/utherium', 'kubejs:raw_utherium')
    potting('forge:ores/regalium', 'kubejs:raw_regalium')
    potting('forge:ores/endumium', 'kubejs:raw_endumium')
    potting('forge:ores/tin', 'mekanism:raw_tin')
    potting('forge:ores/osmium', 'mekanism:raw_osmium')
    potting('forge:ores/uranium', 'mekanism:raw_uranium')
    potting('forge:ores/fluorite', 'kubejs:raw_fluorite')
    potting('forge:ores/lead', 'mekanism:raw_lead')
    potting('forge:ores/netherite', 'kubejs:raw_netherite')
    potting('forge:ores/enderite', 'kubejs:raw_enderite')
})
ServerEvents.recipes(e => {
    let potting = (input, output) => {
        e.custom({
            "type": "minecraft:blasting",
            "ingredient": {
                "tag": input
            },
            "result": {
                "item": output,
                "count": 3
            },
            "experience": 0.7,
            "cookingtime": 100
        })
    }
    potting('forge:ores/coal', 'kubejs:raw_coal')
    potting('forge:ores/iron', 'minecraft:raw_iron')
    potting('forge:ores/copper', 'minecraft:raw_copper')
    potting('forge:ores/gold', 'minecraft:raw_gold')
    potting('forge:ores/redstone', 'kubejs:raw_redstone')
    potting('forge:ores/emerald', 'kubejs:raw_emerald')
    potting('forge:ores/lapis', 'kubejs:raw_lapis_lazuli')
    potting('forge:ores/diamond', 'kubejs:raw_diamond')
    potting('forge:ores/quartz', 'kubejs:raw_quartz')
    potting('forge:ores/zinc', 'create:raw_zinc')
    potting('forge:ores/malachite', 'kubejs:raw_malachite')
    potting('forge:ores/irradium', 'enlightened_end:raw_irradium')
    potting('forge:ores/bismuth', 'enlightened_end:raw_bismuth')
    potting('forge:ores/ruby', 'kubejs:raw_ruby')
    potting('forge:ores/jade', 'kubejs:raw_jade')
    potting('forge:ores/aquamarine', 'kubejs:raw_aquamarine')
    potting('forge:ores/onyx', 'kubejs:raw_onyx')
    potting('forge:ores/silver', 'epicsamurai:raw_silver')
    potting('forge:ores/dimensional_shard', 'kubejs:raw_dimensionalshard')
    potting('forge:ores/tungsten', 'stalwart_dungeons:raw_tungsten')
    potting('forge:ores/chorundum', 'kubejs:raw_chorundum')
    potting('forge:ores/ambrosium', 'kubejs:raw_ambrosium')
    potting('forge:ores/zanite', 'kubejs:raw_zanite')
    potting('forge:ores/gravitite', 'kubejs:raw_gravitite')
    potting('forge:ores/cloggrum', 'undergarden:raw_cloggrum')
    potting('forge:ores/froststeel', 'undergarden:raw_froststeel')
    potting('forge:ores/utherium', 'kubejs:raw_utherium')
    potting('forge:ores/regalium', 'kubejs:raw_regalium')
    potting('forge:ores/endumium', 'kubejs:raw_endumium')
    potting('forge:ores/tin', 'mekanism:raw_tin')
    potting('forge:ores/osmium', 'mekanism:raw_osmium')
    potting('forge:ores/uranium', 'mekanism:raw_uranium')
    potting('forge:ores/fluorite', 'kubejs:raw_fluorite')
    potting('forge:ores/lead', 'mekanism:raw_lead')
    potting('forge:ores/netherite', 'kubejs:raw_netherite')
    potting('forge:ores/enderite', 'kubejs:raw_enderite')
})


// Processing - Raws -> Clumps
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
    potting('kubejs:raw_coal', 'kubejs:clump_coal')
    potting('minecraft:raw_iron', 'mekanism:clump_iron')
    potting('minecraft:raw_copper', 'mekanism:clump_copper')
    potting('minecraft:raw_gold', 'mekanism:clump_gold')
    potting('kubejs:raw_redstone', 'kubejs:clump_redstone')
    potting('kubejs:raw_emerald', 'kubejs:clump_emerald')
    potting('kubejs:raw_lapis_lazuli', 'kubejs:clump_lapis_lazuli')
    potting('kubejs:raw_diamond', 'kubejs:clump_diamond')
    potting('kubejs:raw_quartz', 'kubejs:clump_quartz')
    potting('create:raw_zinc', 'kubejs:clump_zinc')
    potting('kubejs:raw_malachite', 'kubejs:clump_malachite')
    potting('enlightened_end:raw_irradium', 'kubejs:clump_irradium')
    potting('enlightened_end:raw_bismuth', 'kubejs:clump_bismuth')
    potting('kubejs:raw_ruby', 'kubejs:clump_ruby')
    potting('kubejs:raw_jade', 'kubejs:clump_jade')
    potting('kubejs:raw_aquamarine', 'kubejs:clump_aquamarine')
    potting('kubejs:raw_onyx', 'kubejs:clump_onyx')
    potting('epicsamurai:raw_silver', 'kubejs:clump_silver')
    potting('kubejs:raw_dimensionalshard', 'kubejs:clump_dimensionalshard')
    potting('stalwart_dungeons:raw_tungsten', 'kubejs:clump_tungsten')
    potting('kubejs:raw_chorundum', 'kubejs:clump_chorundum')
    potting('kubejs:raw_ambrosium', 'kubejs:clump_ambrosium')
    potting('kubejs:raw_zanite', 'kubejs:clump_zanite')
    potting('kubejs:raw_gravitite', 'kubejs:clump_gravitite')
    potting('undergarden:raw_cloggrum', 'kubejs:clump_cloggrum')
    potting('undergarden:raw_froststeel', 'kubejs:clump_froststeel')
    potting('kubejs:raw_utherium', 'kubejs:clump_utherium')
    potting('kubejs:raw_regalium', 'kubejs:clump_regalium')
    potting('kubejs:raw_endumium', 'kubejs:clump_endumium')
    potting('mekanism:raw_tin', 'mekanism:clump_tin')
    potting('mekanism:raw_osmium', 'mekanism:clump_osmium')
    potting('mekanism:raw_uranium', 'mekanism:clump_uranium')
    potting('kubejs:raw_fluorite', 'kubejs:clump_fluorite')
    potting('mekanism:raw_lead', 'mekanism:clump_lead')
    potting('kubejs:raw_netherite', 'kubejs:clump_netherite')
    potting('kubejs:raw_enderite', 'kubejs:clump_enderite')
})


// Processing - Clumps -> Shards
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
    potting('kubejs:clump_coal', 'kubejs:shard_coal')
    potting('mekanism:clump_iron', 'mekanism:shard_iron')
    potting('mekanism:clump_copper', 'mekanism:shard_copper')
    potting('mekanism:clump_gold', 'mekanism:shard_gold')
    potting('kubejs:clump_redstone', 'kubejs:shard_redstone')
    potting('kubejs:clump_emerald', 'kubejs:shard_emerald')
    potting('kubejs:clump_lapis_lazuli', 'kubejs:shard_lapis_lazuli')
    potting('kubejs:clump_diamond', 'kubejs:shard_diamond')
    potting('kubejs:clump_quartz', 'kubejs:shard_quartz')
    potting('kubejs:clump_zinc', 'kubejs:shard_zinc')
    potting('kubejs:clump_malachite', 'kubejs:shard_malachite')
    potting('kubejs:clump_irradium', 'kubejs:shard_irradium')
    potting('kubejs:clump_bismuth', 'kubejs:shard_bismuth')
    potting('kubejs:clump_ruby', 'kubejs:shard_ruby')
    potting('kubejs:clump_jade', 'kubejs:shard_jade')
    potting('kubejs:clump_aquamarine', 'kubejs:shard_aquamarine')
    potting('kubejs:clump_onyx', 'kubejs:shard_onyx')
    potting('kubejs:clump_silver', 'kubejs:shard_silver')
    potting('kubejs:clump_tungsten', 'kubejs:shard_tungsten')
    potting('kubejs:clump_chorundum', 'kubejs:shard_chorundum')
    potting('kubejs:clump_ambrosium', 'aether:ambrosium_shard')
    potting('kubejs:clump_zanite', 'kubejs:shard_zanite')
    potting('kubejs:clump_gravitite', 'kubejs:shard_gravitite')
    potting('kubejs:clump_cloggrum', 'kubejs:shard_cloggrum')
    potting('kubejs:clump_froststeel', 'kubejs:shard_froststeel')
    potting('kubejs:clump_utherium', 'undergarden:utheric_shard')
    potting('kubejs:clump_regalium', 'kubejs:shard_regalium')
    potting('kubejs:clump_endumium', 'kubejs:shard_endumium')
    potting('mekanism:clump_tin', 'mekanism:shard_tin')
    potting('mekanism:clump_osmium', 'mekanism:shard_osmium')
    potting('mekanism:clump_uranium', 'mekanism:shard_uranium')
    potting('kubejs:clump_fluorite', 'kubejs:shard_fluorite')
    potting('mekanism:clump_lead', 'mekanism:shard_lead')
    potting('kubejs:clump_netherite', 'kubejs:shard_netherite')
    potting('kubejs:clump_enderite', 'kubejs:shard_enderite')
})


// Processing - Shards -> Dirty Dusts
ServerEvents.recipes(e => {
    let potting = (input, output) => {
        e.custom({
            "type": "mekanism:injecting",
            "chemicalInput": {
                "amount": 1,
                "gas": "mekanism:water_vapor"
            },
            "itemInput": {
                "ingredient": {
                    "item": input
                }
            },
            "output": {
                "item": output
            }
        })
    }
    potting('kubejs:shard_coal', 'kubejs:dirty_dust_coal')
    potting('mekanism:shard_iron', 'mekanism:dirty_dust_iron')
    potting('mekanism:shard_copper', 'mekanism:dirty_dust_copper')
    potting('mekanism:shard_gold', 'mekanism:dirty_dust_gold')
    potting('kubejs:shard_redstone', 'kubejs:dirty_dust_redstone')
    potting('kubejs:shard_emerald', 'kubejs:dirty_dust_emerald')
    potting('kubejs:shard_lapis_lazuli', 'kubejs:dirty_dust_lapis_lazuli')
    potting('kubejs:shard_diamond', 'kubejs:dirty_dust_diamond')
    potting('kubejs:shard_quartz', 'kubejs:dirty_dust_quartz')
    potting('kubejs:shard_zinc', 'kubejs:dirty_dust_zinc')
    potting('kubejs:shard_malachite', 'kubejs:dirty_dust_malachite')
    potting('kubejs:shard_irradium', 'kubejs:dirty_dust_irradium')
    potting('kubejs:shard_bismuth', 'kubejs:dirty_dust_bismuth')
    potting('kubejs:shard_ruby', 'kubejs:dirty_dust_ruby')
    potting('kubejs:shard_jade', 'kubejs:dirty_dust_jade')
    potting('kubejs:shard_aquamarine', 'kubejs:dirty_dust_aquamarine')
    potting('kubejs:shard_onyx', 'kubejs:dirty_dust_onyx')
    potting('kubejs:shard_silver', 'kubejs:dirty_dust_silver')
    potting('kubejs:shard_tungsten', 'kubejs:dirty_dust_tungsten')
    potting('kubejs:shard_chorundum', 'kubejs:dirty_dust_chorundum')
    potting('kubejs:shard_zanite', 'kubejs:dirty_dust_zanite')
    potting('kubejs:shard_gravitite', 'kubejs:dirty_dust_gravitite')
    potting('kubejs:shard_cloggrum', 'kubejs:dirty_dust_cloggrum')
    potting('kubejs:shard_froststeel', 'kubejs:dirty_dust_froststeel')
    potting('undergarden:utheric_shard', 'kubejs:dirty_dust_utherium')
    potting('kubejs:shard_regalium', 'kubejs:dirty_dust_regalium')
    potting('kubejs:shard_endumium', 'kubejs:dirty_dust_endumium')
    potting('mekanism:shard_tin', 'mekanism:dirty_dust_tin')
    potting('mekanism:shard_osmium', 'mekanism:dirty_dust_osmium')
    potting('mekanism:shard_uranium', 'mekanism:dirty_dust_uranium')
    potting('kubejs:shard_fluorite', 'kubejs:dirty_dust_fluorite')
    potting('mekanism:shard_lead', 'mekanism:dirty_dust_lead')
    potting('kubejs:shard_netherite', 'kubejs:dirty_dust_netherite')
    potting('kubejs:shard_enderite', 'kubejs:dirty_dust_enderite')
})


// Processing - Dirty Dusts -> Dusts
ServerEvents.recipes(e => {
    let potting = (input, output) => {
        e.custom({
            "type": "mekanism:purifying",
            "chemicalInput": {
                "amount": 1,
                "gas": "mekanism:oxygen"
            },
            "itemInput": {
                "ingredient": {
                    "item": input
                }
            },
            "output": {
                "item": output
            }
        })
    }
    potting('kubejs:dirty_dust_coal', 'mekanism:dust_coal')
    potting('mekanism:dirty_dust_iron', 'mekanism:dust_iron')
    potting('mekanism:dirty_dust_copper', 'mekanism:dust_copper')
    potting('mekanism:dirty_dust_gold', 'mekanism:dust_gold')
    potting('kubejs:dirty_dust_emerald', 'mekanism:dust_emerald')
    potting('kubejs:dirty_dust_lapis_lazuli', 'mekanism:dust_lapis_lazuli')
    potting('kubejs:dirty_dust_diamond', 'mekanism:dust_diamond')
    potting('kubejs:dirty_dust_quartz', 'mekanism:dust_quartz')
    potting('kubejs:dirty_dust_zinc', 'kubejs:dust_zinc')
    potting('kubejs:dirty_dust_malachite', 'kubejs:dust_malachite')
    potting('kubejs:dirty_dust_irradium', 'kubejs:dust_irradium')
    potting('kubejs:dirty_dust_bismuth', 'kubejs:dust_bismuth')
    potting('kubejs:dirty_dust_ruby', 'kubejs:dust_ruby')
    potting('kubejs:dirty_dust_jade', 'kubejs:dust_jade')
    potting('kubejs:dirty_dust_aquamarine', 'kubejs:dust_aquamarine')
    potting('kubejs:dirty_dust_onyx', 'kubejs:dust_onyx')
    potting('kubejs:dirty_dust_silver', 'kubejs:dust_silver')
    potting('kubejs:dirty_dust_tungsten', 'kubejs:dust_tungsten')
    potting('kubejs:dirty_dust_chorundum', 'kubejs:dust_chorundum')
    potting('kubejs:dirty_dust_zanite', 'kubejs:dust_zanite')
    potting('kubejs:dirty_dust_gravitite', 'kubejs:dust_gravitite')
    potting('kubejs:dirty_dust_cloggrum', 'kubejs:dust_cloggrum')
    potting('kubejs:dirty_dust_froststeel', 'kubejs:dust_froststeel')
    potting('kubejs:dirty_dust_utherium', 'kubejs:dust_utherium')
    potting('kubejs:dirty_dust_regalium', 'kubejs:dust_regalium')
    potting('kubejs:dirty_dust_endumium', 'kubejs:dust_endumium')
    potting('mekanism:dirty_dust_tin', 'mekanism:dust_tin')
    potting('mekanism:dirty_dust_osmium', 'mekanism:dust_osmium')
    potting('mekanism:dirty_dust_uranium', 'mekanism:dust_uranium')
    potting('kubejs:dirty_dust_fluorite', 'mekanism:dust_fluorite')
    potting('mekanism:dirty_dust_lead', 'mekanism:dust_lead')
    potting('kubejs:dirty_dust_netherite', 'mekanism:dust_netherite')
    potting('kubejs:dirty_dust_enderite', 'kubejs:dust_enderite')
})


// Processing - Dusts -> Crystals
ServerEvents.recipes(e => {
    let potting = (input, output) => {
        e.custom({
            "type": "mekanism:combining",
            "extraInput": {
                "ingredient": {
                    "item": "fluxnetworks:flux_dust"
                }
            },
            "mainInput": {
                "ingredient": {
                    "item": input
                }
            },
            "output": {
                "item": output
            }
        })
    }
    potting('mekanism:dust_coal', 'kubejs:crystal_coal')
    potting('mekanism:dust_iron', 'mekanism:crystal_iron')
    potting('mekanism:dust_copper', 'mekanism:crystal_copper')
    potting('mekanism:dust_gold', 'mekanism:crystal_gold')
    potting('mekanism:dust_emerald', 'kubejs:crystal_emerald')
    potting('mekanism:dust_lapis_lazuli', 'kubejs:crystal_lapis_lazuli')
    potting('mekanism:dust_diamond', 'kubejs:crystal_diamond')
    potting('mekanism:dust_quartz', 'kubejs:crystal_quartz')
    potting('kubejs:dust_zinc', 'kubejs:crystal_zinc')
    potting('kubejs:dust_malachite', 'kubejs:crystal_malachite')
    potting('kubejs:dust_irradium', 'kubejs:crystal_irradium')
    potting('kubejs:dust_bismuth', 'kubejs:crystal_bismuth')
    potting('kubejs:dust_ruby', 'kubejs:crystal_ruby')
    potting('kubejs:dust_jade', 'kubejs:crystal_jade')
    potting('kubejs:dust_aquamarine', 'kubejs:crystal_aquamarine')
    potting('kubejs:dust_onyx', 'kubejs:crystal_onyx')
    potting('kubejs:dust_silver', 'kubejs:crystal_silver')
    potting('kubejs:dust_tungsten', 'kubejs:crystal_tungsten')
    potting('kubejs:dust_chorundum', 'kubejs:crystal_chorundum')
    potting('kubejs:dust_zanite', 'kubejs:crystal_zanite')
    potting('kubejs:dust_gravitite', 'kubejs:crystal_gravitite')
    potting('kubejs:dust_cloggrum', 'kubejs:crystal_cloggrum')
    potting('kubejs:dust_froststeel', 'kubejs:crystal_froststeel')
    potting('mekanism:dust_tin', 'mekanism:crystal_tin')
    potting('mekanism:dust_osmium', 'mekanism:crystal_osmium')
    potting('mekanism:dust_uranium', 'mekanism:crystal_uranium')
    potting('mekanism:dust_fluorite', 'kubejs:crystal_fluorite')
    potting('mekanism:dust_lead', 'mekanism:crystal_lead')
    potting('mekanism:dust_netherite', 'kubejs:crystal_netherite')
    potting('kubejs:dust_enderite', 'kubejs:crystal_enderite')
})


// Processing - Smelting & Blasting
ServerEvents.recipes(e => {
    let potting = (input, count, xp, output) => {
        e.custom({
            "type": "minecraft:smelting",
            "ingredient": {
                "item": input
            },
            "result": {
                "item": output,
                "count": count
            },
            "experience": xp,
            "cookingtime": 200
        })
    }
    potting('kubejs:raw_coal', '1', 0.7, 'minecraft:coal')
    potting('kubejs:clump_coal', '2', 1.4, 'minecraft:coal')
    potting('kubejs:shard_coal', '3', 2.1, 'minecraft:coal')
    potting('kubejs:dirty_dust_coal', '4', 2.8, 'minecraft:coal')
    potting('mekanism:dust_coal', '5', 3.5, 'minecraft:coal')
    potting('kubejs:crystal_coal', '6', 4.2, 'minecraft:coal')
    potting('minecraft:raw_iron', '1', 0.7, 'minecraft:iron_ingot')
    potting('mekanism:clump_iron', '2', 1.4, 'minecraft:iron_ingot')
    potting('mekanism:shard_iron', '3', 2.1, 'minecraft:iron_ingot')
    potting('mekanism:dirty_dust_iron', '4', 2.8, 'minecraft:iron_ingot')
    potting('mekanism:dust_iron', '5', 3.5, 'minecraft:iron_ingot')
    potting('mekanism:crystal_iron', '6', 4.2, 'minecraft:iron_ingot')
    potting('minecraft:raw_copper', '1', 0.7, 'minecraft:copper_ingot')
    potting('mekanism:clump_copper', '2', 1.4, 'minecraft:copper_ingot')
    potting('mekanism:shard_copper', '3', 2.1, 'minecraft:copper_ingot')
    potting('mekanism:dirty_dust_copper', '4', 2.8, 'minecraft:copper_ingot')
    potting('mekanism:dust_copper', '5', 3.5, 'minecraft:copper_ingot')
    potting('mekanism:crystal_copper', '6', 4.2, 'minecraft:copper_ingot')
    potting('minecraft:raw_gold', '1', 0.7, 'minecraft:gold_ingot')
    potting('mekanism:clump_gold', '2', 1.4, 'minecraft:gold_ingot')
    potting('mekanism:shard_gold', '3', 2.1, 'minecraft:gold_ingot')
    potting('mekanism:dirty_dust_gold', '4', 2.8, 'minecraft:gold_ingot')
    potting('mekanism:dust_gold', '5', 3.5, 'minecraft:gold_ingot')
    potting('mekanism:crystal_gold', '6', 4.2, 'minecraft:gold_ingot')
    potting('kubejs:raw_redstone', '1', 0.7, 'minecraft:redstone')
    potting('kubejs:clump_redstone', '2', 1.4, 'minecraft:redstone')
    potting('kubejs:shard_redstone', '3', 2.1, 'minecraft:redstone')
    potting('kubejs:dirty_dust_redstone', '4', 2.8, 'minecraft:redstone')
    potting('kubejs:raw_emerald', '1', 0.7, 'minecraft:emerald')
    potting('kubejs:clump_emerald', '2', 1.4, 'minecraft:emerald')
    potting('kubejs:shard_emerald', '3', 2.1, 'minecraft:emerald')
    potting('kubejs:dirty_dust_emerald', '4', 2.8, 'minecraft:emerald')
    potting('mekanism:dust_emerald', '5', 3.5, 'minecraft:emerald')
    potting('kubejs:crystal_emerald', '6', 4.2, 'minecraft:emerald')
    potting('kubejs:raw_lapis_lazuli', '1', 0.7, 'minecraft:lapis_lazuli')
    potting('kubejs:clump_lapis_lazuli', '2', 1.4, 'minecraft:lapis_lazuli')
    potting('kubejs:shard_lapis_lazuli', '3', 2.1, 'minecraft:lapis_lazuli')
    potting('kubejs:dirty_dust_lapis_lazuli', '4', 2.8, 'minecraft:lapis_lazuli')
    potting('mekanism:dust_lapis_lazuli', '5', 3.5, 'minecraft:lapis_lazuli')
    potting('kubejs:crystal_lapis_lazuli', '6', 4.2, 'minecraft:lapis_lazuli')
    potting('kubejs:raw_diamond', '1', 0.7, 'minecraft:diamond')
    potting('kubejs:clump_diamond', '2', 1.4, 'minecraft:diamond')
    potting('kubejs:shard_diamond', '3', 2.1, 'minecraft:diamond')
    potting('kubejs:dirty_dust_diamond', '4', 2.8, 'minecraft:diamond')
    potting('mekanism:dust_diamond', '5', 3.5, 'minecraft:diamond')
    potting('kubejs:crystal_diamond', '6', 4.2, 'minecraft:diamond')
    potting('kubejs:raw_quartz', '1', 0.7, 'minecraft:quartz')
    potting('kubejs:clump_quartz', '2', 1.4, 'minecraft:quartz')
    potting('kubejs:shard_quartz', '3', 2.1, 'minecraft:quartz')
    potting('kubejs:dirty_dust_quartz', '4', 2.8, 'minecraft:quartz')
    potting('mekanism:dust_quartz', '5', 3.5, 'minecraft:quartz')
    potting('kubejs:crystal_quartz', '6', 4.2, 'minecraft:quartz')
    potting('create:raw_zinc', '1', 0.7, 'create:zinc_ingot')
    potting('kubejs:clump_zinc', '2', 1.4, 'create:zinc_ingot')
    potting('kubejs:shard_zinc', '3', 2.1, 'create:zinc_ingot')
    potting('kubejs:dirty_dust_zinc', '4', 2.8, 'create:zinc_ingot')
    potting('kubejs:dust_zinc', '5', 3.5, 'create:zinc_ingot')
    potting('kubejs:crystal_zinc', '6', 4.2, 'create:zinc_ingot')
    potting('kubejs:raw_malachite', '1', 0.7, 'enlightened_end:malachite')
    potting('kubejs:clump_malachite', '2', 1.4, 'enlightened_end:malachite')
    potting('kubejs:shard_malachite', '3', 2.1, 'enlightened_end:malachite')
    potting('kubejs:dirty_dust_malachite', '4', 2.8, 'enlightened_end:malachite')
    potting('kubejs:dust_malachite', '5', 3.5, 'enlightened_end:malachite')
    potting('kubejs:crystal_malachite', '6', 4.2, 'enlightened_end:malachite')
    potting('enlightened_end:raw_irradium', '1', 0.7, 'enlightened_end:irradium_bar')
    potting('kubejs:clump_irradium', '2', 1.4, 'enlightened_end:irradium_bar')
    potting('kubejs:shard_irradium', '3', 2.1, 'enlightened_end:irradium_bar')
    potting('kubejs:dirty_dust_irradium', '4', 2.8, 'enlightened_end:irradium_bar')
    potting('kubejs:dust_irradium', '5', 3.5, 'enlightened_end:irradium_bar')
    potting('kubejs:crystal_irradium', '6', 4.2, 'enlightened_end:irradium_bar')
    potting('enlightened_end:raw_bismuth', '1', 0.7, 'enlightened_end:bismuth_ingot')
    potting('kubejs:clump_bismuth', '2', 1.4, 'enlightened_end:bismuth_ingot')
    potting('kubejs:shard_bismuth', '3', 2.1, 'enlightened_end:bismuth_ingot')
    potting('kubejs:dirty_dust_bismuth', '4', 2.8, 'enlightened_end:bismuth_ingot')
    potting('kubejs:dust_bismuth', '5', 3.5, 'enlightened_end:bismuth_ingot')
    potting('kubejs:crystal_bismuth', '6', 4.2, 'enlightened_end:bismuth_ingot')
    potting('kubejs:raw_ruby', '1', 0.7, 'epicsamurai:ruby')
    potting('kubejs:clump_ruby', '2', 1.4, 'epicsamurai:ruby')
    potting('kubejs:shard_ruby', '3', 2.1, 'epicsamurai:ruby')
    potting('kubejs:dirty_dust_ruby', '4', 2.8, 'epicsamurai:ruby')
    potting('kubejs:dust_ruby', '5', 3.5, 'epicsamurai:ruby')
    potting('kubejs:crystal_ruby', '6', 4.2, 'epicsamurai:ruby')
    potting('kubejs:raw_jade', '1', 0.7, 'epicsamurai:jade')
    potting('kubejs:clump_jade', '2', 1.4, 'epicsamurai:jade')
    potting('kubejs:shard_jade', '3', 2.1, 'epicsamurai:jade')
    potting('kubejs:dirty_dust_jade', '4', 2.8, 'epicsamurai:jade')
    potting('kubejs:dust_jade', '5', 3.5, 'epicsamurai:jade')
    potting('kubejs:crystal_jade', '6', 4.2, 'epicsamurai:jade')
    potting('kubejs:raw_aquamarine', '1', 0.7, 'epicsamurai:aquamarine')
    potting('kubejs:clump_aquamarine', '2', 1.4, 'epicsamurai:aquamarine')
    potting('kubejs:shard_aquamarine', '3', 2.1, 'epicsamurai:aquamarine')
    potting('kubejs:dirty_dust_aquamarine', '4', 2.8, 'epicsamurai:aquamarine')
    potting('kubejs:dust_aquamarine', '5', 3.5, 'epicsamurai:aquamarine')
    potting('kubejs:crystal_aquamarine', '6', 4.2, 'epicsamurai:aquamarine')
    potting('kubejs:raw_onyx', '1', 0.7, 'epicsamurai:onyx')
    potting('kubejs:clump_onyx', '2', 1.4, 'epicsamurai:onyx')
    potting('kubejs:shard_onyx', '3', 2.1, 'epicsamurai:onyx')
    potting('kubejs:dirty_dust_onyx', '4', 2.8, 'epicsamurai:onyx')
    potting('kubejs:dust_onyx', '5', 3.5, 'epicsamurai:onyx')
    potting('kubejs:crystal_onyx', '6', 4.2, 'epicsamurai:onyx')
    potting('epicsamurai:raw_silver', '1', 0.7, 'epicsamurai:silver_ingot')
    potting('kubejs:clump_silver', '2', 1.4, 'epicsamurai:silver_ingot')
    potting('kubejs:shard_silver', '3', 2.1, 'epicsamurai:silver_ingot')
    potting('kubejs:dirty_dust_silver', '4', 2.8, 'epicsamurai:silver_ingot')
    potting('kubejs:dust_silver', '5', 3.5, 'epicsamurai:silver_ingot')
    potting('kubejs:crystal_silver', '6', 4.2, 'epicsamurai:silver_ingot')
    potting('kubejs:raw_dimensionalshard', '1', 0.7, 'rftoolsbase:dimensionalshard')
    potting('kubejs:clump_dimensionalshard', '2', 1.4, 'rftoolsbase:dimensionalshard')
    potting('stalwart_dungeons:raw_tungsten', '1', 0.7, 'stalwart_dungeons:tungsten_ingot')
    potting('kubejs:clump_tungsten', '2', 1.4, 'stalwart_dungeons:tungsten_ingot')
    potting('kubejs:shard_tungsten', '3', 2.1, 'stalwart_dungeons:tungsten_ingot')
    potting('kubejs:dirty_dust_tungsten', '4', 2.8, 'stalwart_dungeons:tungsten_ingot')
    potting('kubejs:dust_tungsten', '5', 3.5, 'stalwart_dungeons:tungsten_ingot')
    potting('kubejs:crystal_tungsten', '6', 4.2, 'stalwart_dungeons:tungsten_ingot')
    potting('kubejs:raw_chorundum', '1', 0.7, 'stalwart_dungeons:chorundum')
    potting('kubejs:clump_chorundum', '2', 1.4, 'stalwart_dungeons:chorundum')
    potting('kubejs:shard_chorundum', '3', 2.1, 'stalwart_dungeons:chorundum')
    potting('kubejs:dirty_dust_chorundum', '4', 2.8, 'stalwart_dungeons:chorundum')
    potting('kubejs:dust_chorundum', '5', 3.5, 'stalwart_dungeons:chorundum')
    potting('kubejs:crystal_chorundum', '6', 4.2, 'stalwart_dungeons:chorundum')
    potting('kubejs:raw_ambrosium', '1', 0.7, 'aether:ambrosium_shard')
    potting('kubejs:clump_ambrosium', '2', 1.4, 'aether:ambrosium_shard')
    potting('kubejs:raw_zanite', '1', 0.7, 'aether:zanite_gemstone')
    potting('kubejs:clump_zanite', '2', 1.4, 'aether:zanite_gemstone')
    potting('kubejs:shard_zanite', '3', 2.1, 'aether:zanite_gemstone')
    potting('kubejs:dirty_dust_zanite', '4', 2.8, 'aether:zanite_gemstone')
    potting('kubejs:dust_zanite', '5', 3.5, 'aether:zanite_gemstone')
    potting('kubejs:crystal_zanite', '6', 4.2, 'aether:zanite_gemstone')
    potting('kubejs:raw_gravitite', '1', 0.7, 'aether:enchanted_gravitite')
    potting('kubejs:clump_gravitite', '2', 1.4, 'aether:enchanted_gravitite')
    potting('kubejs:shard_gravitite', '3', 2.1, 'aether:enchanted_gravitite')
    potting('kubejs:dirty_dust_gravitite', '4', 2.8, 'aether:enchanted_gravitite')
    potting('kubejs:dust_gravitite', '5', 3.5, 'aether:enchanted_gravitite')
    potting('kubejs:crystal_gravitite', '6', 4.2, 'aether:enchanted_gravitite')
    potting('undergarden:raw_cloggrum', '1', 0.7, 'undergarden:cloggrum_ingot')
    potting('kubejs:clump_cloggrum', '2', 1.4, 'undergarden:cloggrum_ingot')
    potting('kubejs:shard_cloggrum', '3', 2.1, 'undergarden:cloggrum_ingot')
    potting('kubejs:dirty_dust_cloggrum', '4', 2.8, 'undergarden:cloggrum_ingot')
    potting('kubejs:dust_cloggrum', '5', 3.5, 'undergarden:cloggrum_ingot')
    potting('kubejs:crystal_cloggrum', '6', 4.2, 'undergarden:cloggrum_ingot')
    potting('undergarden:raw_froststeel', '1', 0.7, 'undergarden:froststeel_ingot')
    potting('kubejs:clump_froststeel', '2', 1.4, 'undergarden:froststeel_ingot')
    potting('kubejs:shard_froststeel', '3', 2.1, 'undergarden:froststeel_ingot')
    potting('kubejs:dirty_dust_froststeel', '4', 2.8, 'undergarden:froststeel_ingot')
    potting('kubejs:dust_froststeel', '5', 3.5, 'undergarden:froststeel_ingot')
    potting('kubejs:crystal_froststeel', '6', 4.2, 'undergarden:froststeel_ingot')
    potting('kubejs:raw_utherium', '1', 0.7, 'undergarden:utherium_crystal')
    potting('kubejs:clump_utherium', '2', 1.4, 'undergarden:utherium_crystal')
    potting('undergarden:utheric_shard', '3', 2.1, 'undergarden:utherium_crystal')
    potting('kubejs:dirty_dust_utherium', '4', 2.8, 'undergarden:utherium_crystal')
    potting('kubejs:dust_utherium', '5', 3.5, 'undergarden:utherium_crystal')
    potting('kubejs:raw_regalium', '1', 0.7, 'undergarden:regalium_crystal')
    potting('kubejs:clump_regalium', '2', 1.4, 'undergarden:regalium_crystal')
    potting('kubejs:shard_regalium', '3', 2.1, 'undergarden:regalium_crystal')
    potting('kubejs:dirty_dust_regalium', '4', 2.8, 'undergarden:regalium_crystal')
    potting('kubejs:dust_regalium', '5', 3.5, 'undergarden:regalium_crystal')
    potting('kubejs:raw_endumium', '1', 0.7, 'farlanders:endumium_crystal')
    potting('kubejs:clump_endumium', '2', 1.4, 'farlanders:endumium_crystal')
    potting('kubejs:shard_endumium', '3', 2.1, 'farlanders:endumium_crystal')
    potting('kubejs:dirty_dust_endumium', '4', 2.8, 'farlanders:endumium_crystal')
    potting('kubejs:dust_endumium', '5', 3.5, 'farlanders:endumium_crystal')
    potting('mekanism:raw_tin', '1', 0.7, 'mekanism:ingot_tin')
    potting('mekanism:clump_tin', '2', 1.4, 'mekanism:ingot_tin')
    potting('mekanism:shard_tin', '3', 2.1, 'mekanism:ingot_tin')
    potting('mekanism:dirty_dust_tin', '4', 2.8, 'mekanism:ingot_tin')
    potting('mekanism:dust_tin', '5', 3.5, 'mekanism:ingot_tin')
    potting('mekanism:crystal_tin', '6', 4.2, 'mekanism:ingot_tin')
    potting('mekanism:raw_osmium', '1', 0.7, 'mekanism:ingot_osmium')
    potting('mekanism:clump_osmium', '2', 1.4, 'mekanism:ingot_osmium')
    potting('mekanism:shard_osmium', '3', 2.1, 'mekanism:ingot_osmium')
    potting('mekanism:dirty_dust_osmium', '4', 2.8, 'mekanism:ingot_osmium')
    potting('mekanism:dust_osmium', '5', 3.5, 'mekanism:ingot_osmium')
    potting('mekanism:crystal_osmium', '6', 4.2, 'mekanism:ingot_osmium')
    potting('mekanism:raw_uranium', '1', 0.7, 'mekanism:ingot_uranium')
    potting('mekanism:clump_uranium', '2', 1.4, 'mekanism:ingot_uranium')
    potting('mekanism:shard_uranium', '3', 2.1, 'mekanism:ingot_uranium')
    potting('mekanism:dirty_dust_uranium', '4', 2.8, 'mekanism:ingot_uranium')
    potting('mekanism:dust_uranium', '5', 3.5, 'mekanism:ingot_uranium')
    potting('mekanism:crystal_uranium', '6', 4.2, 'mekanism:ingot_uranium')
    potting('kubejs:raw_fluorite', '1', 0.7, 'mekanism:fluorite_gem')
    potting('kubejs:clump_fluorite', '2', 1.4, 'mekanism:fluorite_gem')
    potting('kubejs:shard_fluorite', '3', 2.1, 'mekanism:fluorite_gem')
    potting('kubejs:dirty_dust_fluorite', '4', 2.8, 'mekanism:fluorite_gem')
    potting('mekanism:dust_fluorite', '5', 3.5, 'mekanism:fluorite_gem')
    potting('kubejs:crystal_fluorite', '6', 4.2, 'mekanism:fluorite_gem')
    potting('mekanism:raw_lead', '1', 0.7, 'mekanism:ingot_lead')
    potting('mekanism:clump_lead', '2', 1.4, 'mekanism:ingot_lead')
    potting('mekanism:shard_lead', '3', 2.1, 'mekanism:ingot_lead')
    potting('mekanism:dirty_dust_lead', '4', 2.8, 'mekanism:ingot_lead')
    potting('mekanism:dust_lead', '5', 3.5, 'mekanism:ingot_lead')
    potting('mekanism:crystal_lead', '6', 4.2, 'mekanism:ingot_lead')
    potting('kubejs:raw_netherite', '1', 0.7, 'minecraft:netherite_scrap')
    potting('kubejs:clump_netherite', '2', 1.4, 'minecraft:netherite_scrap')
    potting('kubejs:shard_netherite', '3', 2.1, 'minecraft:netherite_scrap')
    potting('kubejs:dirty_dust_netherite', '4', 2.8, 'minecraft:netherite_scrap')
    potting('mekanism:dust_netherite', '5', 3.5, 'minecraft:netherite_scrap')
    potting('kubejs:crystal_netherite', '6', 4.2, 'minecraft:netherite_scrap')
    potting('kubejs:raw_enderite', '1', 0.7, 'lolenderite:enderite_fragment')
    potting('kubejs:clump_enderite', '2', 1.4, 'lolenderite:enderite_fragment')
    potting('kubejs:shard_enderite', '3', 2.1, 'lolenderite:enderite_fragment')
    potting('kubejs:dirty_dust_enderite', '4', 2.8, 'lolenderite:enderite_fragment')
    potting('kubejs:dust_enderite', '5', 3.5, 'lolenderite:enderite_fragment')
    potting('kubejs:crystal_enderite', '6', 4.2, 'lolenderite:enderite_fragment')
})
ServerEvents.recipes(e => {
    let potting = (input, count, xp, output) => {
        e.custom({
            "type": "minecraft:blasting",
            "ingredient": {
                "item": input
            },
            "result": {
                "item": output,
                "count": count
            },
            "experience": xp,
            "cookingtime": 100
        })
    }
    potting('kubejs:raw_coal', '1', 0.7, 'minecraft:coal')
    potting('kubejs:clump_coal', '2', 1.4, 'minecraft:coal')
    potting('kubejs:shard_coal', '3', 2.1, 'minecraft:coal')
    potting('kubejs:dirty_dust_coal', '4', 2.8, 'minecraft:coal')
    potting('mekanism:dust_coal', '5', 3.5, 'minecraft:coal')
    potting('kubejs:crystal_coal', '6', 4.2, 'minecraft:coal')
    potting('minecraft:raw_iron', '1', 0.7, 'minecraft:iron_ingot')
    potting('mekanism:clump_iron', '2', 1.4, 'minecraft:iron_ingot')
    potting('mekanism:shard_iron', '3', 2.1, 'minecraft:iron_ingot')
    potting('mekanism:dirty_dust_iron', '4', 2.8, 'minecraft:iron_ingot')
    potting('mekanism:dust_iron', '5', 3.5, 'minecraft:iron_ingot')
    potting('mekanism:crystal_iron', '6', 4.2, 'minecraft:iron_ingot')
    potting('minecraft:raw_copper', '1', 0.7, 'minecraft:copper_ingot')
    potting('mekanism:clump_copper', '2', 1.4, 'minecraft:copper_ingot')
    potting('mekanism:shard_copper', '3', 2.1, 'minecraft:copper_ingot')
    potting('mekanism:dirty_dust_copper', '4', 2.8, 'minecraft:copper_ingot')
    potting('mekanism:dust_copper', '5', 3.5, 'minecraft:copper_ingot')
    potting('mekanism:crystal_copper', '6', 4.2, 'minecraft:copper_ingot')
    potting('minecraft:raw_gold', '1', 0.7, 'minecraft:gold_ingot')
    potting('mekanism:clump_gold', '2', 1.4, 'minecraft:gold_ingot')
    potting('mekanism:shard_gold', '3', 2.1, 'minecraft:gold_ingot')
    potting('mekanism:dirty_dust_gold', '4', 2.8, 'minecraft:gold_ingot')
    potting('mekanism:dust_gold', '5', 3.5, 'minecraft:gold_ingot')
    potting('mekanism:crystal_gold', '6', 4.2, 'minecraft:gold_ingot')
    potting('kubejs:raw_redstone', '1', 0.7, 'minecraft:redstone')
    potting('kubejs:clump_redstone', '2', 1.4, 'minecraft:redstone')
    potting('kubejs:shard_redstone', '3', 2.1, 'minecraft:redstone')
    potting('kubejs:dirty_dust_redstone', '4', 2.8, 'minecraft:redstone')
    potting('kubejs:raw_emerald', '1', 0.7, 'minecraft:emerald')
    potting('kubejs:clump_emerald', '2', 1.4, 'minecraft:emerald')
    potting('kubejs:shard_emerald', '3', 2.1, 'minecraft:emerald')
    potting('kubejs:dirty_dust_emerald', '4', 2.8, 'minecraft:emerald')
    potting('mekanism:dust_emerald', '5', 3.5, 'minecraft:emerald')
    potting('kubejs:crystal_emerald', '6', 4.2, 'minecraft:emerald')
    potting('kubejs:raw_lapis_lazuli', '1', 0.7, 'minecraft:lapis_lazuli')
    potting('kubejs:clump_lapis_lazuli', '2', 1.4, 'minecraft:lapis_lazuli')
    potting('kubejs:shard_lapis_lazuli', '3', 2.1, 'minecraft:lapis_lazuli')
    potting('kubejs:dirty_dust_lapis_lazuli', '4', 2.8, 'minecraft:lapis_lazuli')
    potting('mekanism:dust_lapis_lazuli', '5', 3.5, 'minecraft:lapis_lazuli')
    potting('kubejs:crystal_lapis_lazuli', '6', 4.2, 'minecraft:lapis_lazuli')
    potting('kubejs:raw_diamond', '1', 0.7, 'minecraft:diamond')
    potting('kubejs:clump_diamond', '2', 1.4, 'minecraft:diamond')
    potting('kubejs:shard_diamond', '3', 2.1, 'minecraft:diamond')
    potting('kubejs:dirty_dust_diamond', '4', 2.8, 'minecraft:diamond')
    potting('mekanism:dust_diamond', '5', 3.5, 'minecraft:diamond')
    potting('kubejs:crystal_diamond', '6', 4.2, 'minecraft:diamond')
    potting('kubejs:raw_quartz', '1', 0.7, 'minecraft:quartz')
    potting('kubejs:clump_quartz', '2', 1.4, 'minecraft:quartz')
    potting('kubejs:shard_quartz', '3', 2.1, 'minecraft:quartz')
    potting('kubejs:dirty_dust_quartz', '4', 2.8, 'minecraft:quartz')
    potting('mekanism:dust_quartz', '5', 3.5, 'minecraft:quartz')
    potting('kubejs:crystal_quartz', '6', 4.2, 'minecraft:quartz')
    potting('create:raw_zinc', '1', 0.7, 'create:zinc_ingot')
    potting('kubejs:clump_zinc', '2', 1.4, 'create:zinc_ingot')
    potting('kubejs:shard_zinc', '3', 2.1, 'create:zinc_ingot')
    potting('kubejs:dirty_dust_zinc', '4', 2.8, 'create:zinc_ingot')
    potting('kubejs:dust_zinc', '5', 3.5, 'create:zinc_ingot')
    potting('kubejs:crystal_zinc', '6', 4.2, 'create:zinc_ingot')
    potting('kubejs:raw_malachite', '1', 0.7, 'enlightened_end:malachite')
    potting('kubejs:clump_malachite', '2', 1.4, 'enlightened_end:malachite')
    potting('kubejs:shard_malachite', '3', 2.1, 'enlightened_end:malachite')
    potting('kubejs:dirty_dust_malachite', '4', 2.8, 'enlightened_end:malachite')
    potting('kubejs:dust_malachite', '5', 3.5, 'enlightened_end:malachite')
    potting('kubejs:crystal_malachite', '6', 4.2, 'enlightened_end:malachite')
    potting('enlightened_end:raw_irradium', '1', 0.7, 'enlightened_end:irradium_bar')
    potting('kubejs:clump_irradium', '2', 1.4, 'enlightened_end:irradium_bar')
    potting('kubejs:shard_irradium', '3', 2.1, 'enlightened_end:irradium_bar')
    potting('kubejs:dirty_dust_irradium', '4', 2.8, 'enlightened_end:irradium_bar')
    potting('kubejs:dust_irradium', '5', 3.5, 'enlightened_end:irradium_bar')
    potting('kubejs:crystal_irradium', '6', 4.2, 'enlightened_end:irradium_bar')
    potting('enlightened_end:raw_bismuth', '1', 0.7, 'enlightened_end:bismuth_ingot')
    potting('kubejs:clump_bismuth', '2', 1.4, 'enlightened_end:bismuth_ingot')
    potting('kubejs:shard_bismuth', '3', 2.1, 'enlightened_end:bismuth_ingot')
    potting('kubejs:dirty_dust_bismuth', '4', 2.8, 'enlightened_end:bismuth_ingot')
    potting('kubejs:dust_bismuth', '5', 3.5, 'enlightened_end:bismuth_ingot')
    potting('kubejs:crystal_bismuth', '6', 4.2, 'enlightened_end:bismuth_ingot')
    potting('kubejs:raw_ruby', '1', 0.7, 'epicsamurai:ruby')
    potting('kubejs:clump_ruby', '2', 1.4, 'epicsamurai:ruby')
    potting('kubejs:shard_ruby', '3', 2.1, 'epicsamurai:ruby')
    potting('kubejs:dirty_dust_ruby', '4', 2.8, 'epicsamurai:ruby')
    potting('kubejs:dust_ruby', '5', 3.5, 'epicsamurai:ruby')
    potting('kubejs:crystal_ruby', '6', 4.2, 'epicsamurai:ruby')
    potting('kubejs:raw_jade', '1', 0.7, 'epicsamurai:jade')
    potting('kubejs:clump_jade', '2', 1.4, 'epicsamurai:jade')
    potting('kubejs:shard_jade', '3', 2.1, 'epicsamurai:jade')
    potting('kubejs:dirty_dust_jade', '4', 2.8, 'epicsamurai:jade')
    potting('kubejs:dust_jade', '5', 3.5, 'epicsamurai:jade')
    potting('kubejs:crystal_jade', '6', 4.2, 'epicsamurai:jade')
    potting('kubejs:raw_aquamarine', '1', 0.7, 'epicsamurai:aquamarine')
    potting('kubejs:clump_aquamarine', '2', 1.4, 'epicsamurai:aquamarine')
    potting('kubejs:shard_aquamarine', '3', 2.1, 'epicsamurai:aquamarine')
    potting('kubejs:dirty_dust_aquamarine', '4', 2.8, 'epicsamurai:aquamarine')
    potting('kubejs:dust_aquamarine', '5', 3.5, 'epicsamurai:aquamarine')
    potting('kubejs:crystal_aquamarine', '6', 4.2, 'epicsamurai:aquamarine')
    potting('kubejs:raw_onyx', '1', 0.7, 'epicsamurai:onyx')
    potting('kubejs:clump_onyx', '2', 1.4, 'epicsamurai:onyx')
    potting('kubejs:shard_onyx', '3', 2.1, 'epicsamurai:onyx')
    potting('kubejs:dirty_dust_onyx', '4', 2.8, 'epicsamurai:onyx')
    potting('kubejs:dust_onyx', '5', 3.5, 'epicsamurai:onyx')
    potting('kubejs:crystal_onyx', '6', 4.2, 'epicsamurai:onyx')
    potting('epicsamurai:raw_silver', '1', 0.7, 'epicsamurai:silver_ingot')
    potting('kubejs:clump_silver', '2', 1.4, 'epicsamurai:silver_ingot')
    potting('kubejs:shard_silver', '3', 2.1, 'epicsamurai:silver_ingot')
    potting('kubejs:dirty_dust_silver', '4', 2.8, 'epicsamurai:silver_ingot')
    potting('kubejs:dust_silver', '5', 3.5, 'epicsamurai:silver_ingot')
    potting('kubejs:crystal_silver', '6', 4.2, 'epicsamurai:silver_ingot')
    potting('kubejs:raw_dimensionalshard', '1', 0.7, 'rftoolsbase:dimensionalshard')
    potting('kubejs:clump_dimensionalshard', '2', 1.4, 'rftoolsbase:dimensionalshard')
    potting('stalwart_dungeons:raw_tungsten', '1', 0.7, 'stalwart_dungeons:tungsten_ingot')
    potting('kubejs:clump_tungsten', '2', 1.4, 'stalwart_dungeons:tungsten_ingot')
    potting('kubejs:shard_tungsten', '3', 2.1, 'stalwart_dungeons:tungsten_ingot')
    potting('kubejs:dirty_dust_tungsten', '4', 2.8, 'stalwart_dungeons:tungsten_ingot')
    potting('kubejs:dust_tungsten', '5', 3.5, 'stalwart_dungeons:tungsten_ingot')
    potting('kubejs:crystal_tungsten', '6', 4.2, 'stalwart_dungeons:tungsten_ingot')
    potting('kubejs:raw_chorundum', '1', 0.7, 'stalwart_dungeons:chorundum')
    potting('kubejs:clump_chorundum', '2', 1.4, 'stalwart_dungeons:chorundum')
    potting('kubejs:shard_chorundum', '3', 2.1, 'stalwart_dungeons:chorundum')
    potting('kubejs:dirty_dust_chorundum', '4', 2.8, 'stalwart_dungeons:chorundum')
    potting('kubejs:dust_chorundum', '5', 3.5, 'stalwart_dungeons:chorundum')
    potting('kubejs:crystal_chorundum', '6', 4.2, 'stalwart_dungeons:chorundum')
    potting('kubejs:raw_ambrosium', '1', 0.7, 'aether:ambrosium_shard')
    potting('kubejs:clump_ambrosium', '2', 1.4, 'aether:ambrosium_shard')
    potting('kubejs:raw_zanite', '1', 0.7, 'aether:zanite_gemstone')
    potting('kubejs:clump_zanite', '2', 1.4, 'aether:zanite_gemstone')
    potting('kubejs:shard_zanite', '3', 2.1, 'aether:zanite_gemstone')
    potting('kubejs:dirty_dust_zanite', '4', 2.8, 'aether:zanite_gemstone')
    potting('kubejs:dust_zanite', '5', 3.5, 'aether:zanite_gemstone')
    potting('kubejs:crystal_zanite', '6', 4.2, 'aether:zanite_gemstone')
    potting('kubejs:raw_gravitite', '1', 0.7, 'aether:enchanted_gravitite')
    potting('kubejs:clump_gravitite', '2', 1.4, 'aether:enchanted_gravitite')
    potting('kubejs:shard_gravitite', '3', 2.1, 'aether:enchanted_gravitite')
    potting('kubejs:dirty_dust_gravitite', '4', 2.8, 'aether:enchanted_gravitite')
    potting('kubejs:dust_gravitite', '5', 3.5, 'aether:enchanted_gravitite')
    potting('kubejs:crystal_gravitite', '6', 4.2, 'aether:enchanted_gravitite')
    potting('undergarden:raw_cloggrum', '1', 0.7, 'undergarden:cloggrum_ingot')
    potting('kubejs:clump_cloggrum', '2', 1.4, 'undergarden:cloggrum_ingot')
    potting('kubejs:shard_cloggrum', '3', 2.1, 'undergarden:cloggrum_ingot')
    potting('kubejs:dirty_dust_cloggrum', '4', 2.8, 'undergarden:cloggrum_ingot')
    potting('kubejs:dust_cloggrum', '5', 3.5, 'undergarden:cloggrum_ingot')
    potting('kubejs:crystal_cloggrum', '6', 4.2, 'undergarden:cloggrum_ingot')
    potting('undergarden:raw_froststeel', '1', 0.7, 'undergarden:froststeel_ingot')
    potting('kubejs:clump_froststeel', '2', 1.4, 'undergarden:froststeel_ingot')
    potting('kubejs:shard_froststeel', '3', 2.1, 'undergarden:froststeel_ingot')
    potting('kubejs:dirty_dust_froststeel', '4', 2.8, 'undergarden:froststeel_ingot')
    potting('kubejs:dust_froststeel', '5', 3.5, 'undergarden:froststeel_ingot')
    potting('kubejs:crystal_froststeel', '6', 4.2, 'undergarden:froststeel_ingot')
    potting('kubejs:raw_utherium', '1', 0.7, 'undergarden:utherium_crystal')
    potting('kubejs:clump_utherium', '2', 1.4, 'undergarden:utherium_crystal')
    potting('undergarden:utheric_shard', '3', 2.1, 'undergarden:utherium_crystal')
    potting('kubejs:dirty_dust_utherium', '4', 2.8, 'undergarden:utherium_crystal')
    potting('kubejs:dust_utherium', '5', 3.5, 'undergarden:utherium_crystal')
    potting('kubejs:raw_regalium', '1', 0.7, 'undergarden:regalium_crystal')
    potting('kubejs:clump_regalium', '2', 1.4, 'undergarden:regalium_crystal')
    potting('kubejs:shard_regalium', '3', 2.1, 'undergarden:regalium_crystal')
    potting('kubejs:dirty_dust_regalium', '4', 2.8, 'undergarden:regalium_crystal')
    potting('kubejs:dust_regalium', '5', 3.5, 'undergarden:regalium_crystal')
    potting('kubejs:raw_endumium', '1', 0.7, 'farlanders:endumium_crystal')
    potting('kubejs:clump_endumium', '2', 1.4, 'farlanders:endumium_crystal')
    potting('kubejs:shard_endumium', '3', 2.1, 'farlanders:endumium_crystal')
    potting('kubejs:dirty_dust_endumium', '4', 2.8, 'farlanders:endumium_crystal')
    potting('kubejs:dust_endumium', '5', 3.5, 'farlanders:endumium_crystal')
    potting('mekanism:raw_tin', '1', 0.7, 'mekanism:ingot_tin')
    potting('mekanism:clump_tin', '2', 1.4, 'mekanism:ingot_tin')
    potting('mekanism:shard_tin', '3', 2.1, 'mekanism:ingot_tin')
    potting('mekanism:dirty_dust_tin', '4', 2.8, 'mekanism:ingot_tin')
    potting('mekanism:dust_tin', '5', 3.5, 'mekanism:ingot_tin')
    potting('mekanism:crystal_tin', '6', 4.2, 'mekanism:ingot_tin')
    potting('mekanism:raw_osmium', '1', 0.7, 'mekanism:ingot_osmium')
    potting('mekanism:clump_osmium', '2', 1.4, 'mekanism:ingot_osmium')
    potting('mekanism:shard_osmium', '3', 2.1, 'mekanism:ingot_osmium')
    potting('mekanism:dirty_dust_osmium', '4', 2.8, 'mekanism:ingot_osmium')
    potting('mekanism:dust_osmium', '5', 3.5, 'mekanism:ingot_osmium')
    potting('mekanism:crystal_osmium', '6', 4.2, 'mekanism:ingot_osmium')
    potting('mekanism:raw_uranium', '1', 0.7, 'mekanism:ingot_uranium')
    potting('mekanism:clump_uranium', '2', 1.4, 'mekanism:ingot_uranium')
    potting('mekanism:shard_uranium', '3', 2.1, 'mekanism:ingot_uranium')
    potting('mekanism:dirty_dust_uranium', '4', 2.8, 'mekanism:ingot_uranium')
    potting('mekanism:dust_uranium', '5', 3.5, 'mekanism:ingot_uranium')
    potting('mekanism:crystal_uranium', '6', 4.2, 'mekanism:ingot_uranium')
    potting('kubejs:raw_fluorite', '1', 0.7, 'mekanism:fluorite_gem')
    potting('kubejs:clump_fluorite', '2', 1.4, 'mekanism:fluorite_gem')
    potting('kubejs:shard_fluorite', '3', 2.1, 'mekanism:fluorite_gem')
    potting('kubejs:dirty_dust_fluorite', '4', 2.8, 'mekanism:fluorite_gem')
    potting('mekanism:dust_fluorite', '5', 3.5, 'mekanism:fluorite_gem')
    potting('kubejs:crystal_fluorite', '6', 4.2, 'mekanism:fluorite_gem')
    potting('mekanism:raw_lead', '1', 0.7, 'mekanism:ingot_lead')
    potting('mekanism:clump_lead', '2', 1.4, 'mekanism:ingot_lead')
    potting('mekanism:shard_lead', '3', 2.1, 'mekanism:ingot_lead')
    potting('mekanism:dirty_dust_lead', '4', 2.8, 'mekanism:ingot_lead')
    potting('mekanism:dust_lead', '5', 3.5, 'mekanism:ingot_lead')
    potting('mekanism:crystal_lead', '6', 4.2, 'mekanism:ingot_lead')
    potting('kubejs:raw_netherite', '1', 0.7, 'minecraft:netherite_scrap')
    potting('kubejs:clump_netherite', '2', 1.4, 'minecraft:netherite_scrap')
    potting('kubejs:shard_netherite', '3', 2.1, 'minecraft:netherite_scrap')
    potting('kubejs:dirty_dust_netherite', '4', 2.8, 'minecraft:netherite_scrap')
    potting('mekanism:dust_netherite', '5', 3.5, 'minecraft:netherite_scrap')
    potting('kubejs:crystal_netherite', '6', 4.2, 'minecraft:netherite_scrap')
    potting('kubejs:raw_enderite', '1', 0.7, 'lolenderite:enderite_fragment')
    potting('kubejs:clump_enderite', '2', 1.4, 'lolenderite:enderite_fragment')
    potting('kubejs:shard_enderite', '3', 2.1, 'lolenderite:enderite_fragment')
    potting('kubejs:dirty_dust_enderite', '4', 2.8, 'lolenderite:enderite_fragment')
    potting('kubejs:dust_enderite', '5', 3.5, 'lolenderite:enderite_fragment')
    potting('kubejs:crystal_enderite', '6', 4.2, 'lolenderite:enderite_fragment')
})


// Processing - Ore Recreation
ServerEvents.recipes(e => {
    let potting = (input, mineral, output) => {
        e.custom({
            "type": "mekanism:combining",
            "extraInput": {
                "ingredient": {
                    "item": mineral
                }
            },
            "mainInput": {
                "amount": 10,
                "ingredient": {
                    "item": input
                }
            },
            "output": {
                "item": output
            }
        })
    }
    potting('mekanism:dust_coal', 'minecraft:stone', 'minecraft:coal_ore')
    potting('mekanism:dust_coal', 'minecraft:deepslate', 'minecraft:deepslate_coal_ore')
    potting('mekanism:dust_coal', 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_coal_ore')
    potting('mekanism:dust_coal', 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_coal_ore')
    potting('mekanism:dust_coal', 'meadow:limestone', 'meadow:alpine_coal_ore')
    potting('mekanism:dust_coal', 'undergarden:depthrock', 'undergarden:depthrock_coal_ore')
    potting('mekanism:dust_coal', 'undergarden:shiverstone', 'undergarden:shiverstone_coal_ore')
    potting('mekanism:dust_iron', 'minecraft:stone', 'minecraft:iron_ore')
    potting('mekanism:dust_iron', 'minecraft:deepslate', 'minecraft:deepslate_iron_ore')
    potting('mekanism:dust_iron', 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_iron_ore')
    potting('mekanism:dust_iron', 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_iron_ore')
    potting('mekanism:dust_iron', 'meadow:limestone', 'meadow:alpine_iron_ore')
    potting('mekanism:dust_iron', 'undergarden:depthrock', 'undergarden:depthrock_iron_ore')
    potting('mekanism:dust_iron', 'undergarden:shiverstone', 'undergarden:shiverstone_iron_ore')
    potting('mekanism:dust_copper', 'minecraft:stone', 'minecraft:copper_ore')
    potting('mekanism:dust_copper', 'minecraft:deepslate', 'minecraft:deepslate_copper_ore')
    potting('mekanism:dust_copper', 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_copper_ore')
    potting('mekanism:dust_copper', 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_copper_ore')
    potting('mekanism:dust_copper', 'meadow:limestone', 'meadow:alpine_copper_ore')
    potting('mekanism:dust_gold', 'minecraft:stone', 'minecraft:gold_ore')
    potting('mekanism:dust_gold', 'minecraft:deepslate', 'minecraft:deepslate_gold_ore')
    potting('mekanism:dust_gold', 'minecraft:netherrack', 'minecraft:nether_gold_ore')
    potting('mekanism:dust_gold', 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_gold_ore')
    potting('mekanism:dust_gold', 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_gold_ore')
    potting('mekanism:dust_gold', 'meadow:limestone', 'meadow:alpine_gold_ore')
    potting('mekanism:dust_gold', 'undergarden:depthrock', 'undergarden:depthrock_gold_ore')
    potting('minecraft:redstone', 'minecraft:stone', 'minecraft:redstone_ore')
    potting('minecraft:redstone', 'minecraft:deepslate', 'minecraft:deepslate_redstone_ore')
    potting('minecraft:redstone', 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_redstone_ore')
    potting('minecraft:redstone', 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_redstone_ore')
    potting('minecraft:redstone', 'meadow:limestone', 'meadow:alpine_redstone_ore')
    potting('mekanism:dust_emerald', 'minecraft:stone', 'minecraft:emerald_ore')
    potting('mekanism:dust_emerald', 'minecraft:deepslate', 'minecraft:deepslate_emerald_ore')
    potting('mekanism:dust_emerald', 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_emerald_ore')
    potting('mekanism:dust_emerald', 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_emerald_ore')
    potting('mekanism:dust_emerald', 'meadow:limestone', 'meadow:alpine_emerald_ore')
    potting('mekanism:dust_lapis_lazuli', 'minecraft:stone', 'minecraft:lapis_ore')
    potting('mekanism:dust_lapis_lazuli', 'minecraft:deepslate', 'minecraft:deepslate_lapis_ore')
    potting('mekanism:dust_lapis_lazuli', 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_lapis_ore')
    potting('mekanism:dust_lapis_lazuli', 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_lapis_ore')
    potting('mekanism:dust_lapis_lazuli', 'meadow:limestone', 'meadow:alpine_lapis_ore')
    potting('mekanism:dust_diamond', 'minecraft:stone', 'minecraft:diamond_ore')
    potting('mekanism:dust_diamond', 'minecraft:deepslate', 'minecraft:deepslate_diamond_ore')
    potting('mekanism:dust_diamond', 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_diamond_ore')
    potting('mekanism:dust_diamond', 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_diamond_ore')
    potting('mekanism:dust_diamond', 'meadow:limestone', 'meadow:alpine_diamond_ore')
    potting('mekanism:dust_diamond', 'undergarden:depthrock', 'undergarden:depthrock_diamond_ore')
    potting('mekanism:dust_diamond', 'undergarden:shiverstone', 'undergarden:shiverstone_diamond_ore')
    potting('mekanism:dust_quartz', 'minecraft:netherrack', 'minecraft:nether_quartz_ore')
    potting('mekanism:dust_quartz', 'aether:holystone', 'ancient_aether:aether_quartz_ore')
    potting('kubejs:dust_zinc', 'minecraft:stone', 'create:zinc_ore')
    potting('kubejs:dust_zinc', 'minecraft:deepslate', 'create:deepslate_zinc_ore')
    potting('kubejs:dust_malachite', 'minecraft:end_stone', 'enlightened_end:malachite_ore')
    potting('kubejs:dust_irradium', 'minecraft:end_stone', 'enlightened_end:irradium_ore')
    potting('kubejs:dust_bismuth', 'minecraft:end_stone', 'enlightened_end:bismuth_ore')
    potting('kubejs:dust_ruby', 'minecraft:stone', 'epicsamurai:ruby_ore')
    potting('kubejs:dust_ruby', 'minecraft:deepslate', 'epicsamurai:deepslate_ruby_ore')
    potting('kubejs:dust_jade', 'minecraft:stone', 'epicsamurai:jade_ore')
    potting('kubejs:dust_jade', 'minecraft:deepslate', 'epicsamurai:deepslate_jade_ore')
    potting('kubejs:dust_aquamarine', 'minecraft:stone', 'epicsamurai:aquamarine_ore')
    potting('kubejs:dust_aquamarine', 'minecraft:deepslate', 'epicsamurai:deepslate_aquamarine_ore')
    potting('kubejs:dust_onyx', 'minecraft:stone', 'epicsamurai:onyx_ore')
    potting('kubejs:dust_onyx', 'minecraft:deepslate', 'epicsamurai:deepslate_onyx_ore')
    potting('kubejs:dust_silver', 'minecraft:stone', 'epicsamurai:silver_ore')
    potting('kubejs:dust_silver', 'minecraft:deepslate', 'epicsamurai:deepslate_silver_ore')
    potting('rftoolsbase:dimensionalshard', 'minecraft:stone', 'rftoolsbase:dimensionalshard_overworld')
    potting('rftoolsbase:dimensionalshard', 'minecraft:netherrack', 'rftoolsbase:dimensionalshard_nether')
    potting('rftoolsbase:dimensionalshard', 'minecraft:end_stone', 'rftoolsbase:dimensionalshard_end')
    potting('kubejs:dust_tungsten', 'stalwart_dungeons:soul_bricks', 'stalwart_dungeons:tungsten_ore')
    potting('kubejs:dust_chorundum', 'stalwart_dungeons:purpur_bricks', 'stalwart_dungeons:chorundum_ore')
    potting('aether:ambrosium_shard', 'aether:holystone', 'aether:ambrosium_ore')
    potting('kubejs:dust_zanite', 'aether:holystone', 'aether:zanite_ore')
    potting('kubejs:dust_gravitite', 'aether:holystone', 'aether:gravitite_ore')
    potting('kubejs:dust_cloggrum', 'undergarden:depthrock', 'undergarden:depthrock_cloggrum_ore')
    potting('kubejs:dust_cloggrum', 'undergarden:shiverstone', 'undergarden:shiverstone_cloggrum_ore')
    potting('kubejs:dust_froststeel', 'undergarden:shiverstone', 'undergarden:shiverstone_froststeel_ore')
    potting('kubejs:dust_utherium', 'undergarden:depthrock', 'undergarden:depthrock_utherium_ore')
    potting('kubejs:dust_utherium', 'undergarden:shiverstone', 'undergarden:shiverstone_utherium_ore')
    potting('kubejs:dust_regalium', 'undergarden:depthrock', 'undergarden:depthrock_regalium_ore')
    potting('kubejs:dust_regalium', 'undergarden:shiverstone', 'undergarden:shiverstone_regalium_ore')
    potting('kubejs:dust_endumium', 'minecraft:stone', 'farlanders:endumium_ore')
    potting('kubejs:dust_endumium', 'minecraft:deepslate', 'farlanders:deepslate_endumium_ore')
    potting('mekanism:dust_tin', 'minecraft:stone', 'mekanism:tin_ore')
    potting('mekanism:dust_tin', 'minecraft:deepslate', 'mekanism:deepslate_tin_ore')
    potting('mekanism:dust_osmium', 'minecraft:stone', 'mekanism:osmium_ore')
    potting('mekanism:dust_osmium', 'minecraft:deepslate', 'mekanism:deepslate_osmium_ore')
    potting('mekanism:dust_uranium', 'minecraft:stone', 'mekanism:uranium_ore')
    potting('mekanism:dust_uranium', 'minecraft:deepslate', 'mekanism:deepslate_uranium_ore')
    potting('mekanism:dust_fluorite', 'minecraft:stone', 'mekanism:fluorite_ore')
    potting('mekanism:dust_fluorite', 'minecraft:deepslate', 'mekanism:deepslate_fluorite_ore')
    potting('mekanism:dust_lead', 'minecraft:stone', 'mekanism:lead_ore')
    potting('mekanism:dust_lead', 'minecraft:deepslate', 'mekanism:deepslate_lead_ore')
    potting('mekanism:dust_netherite', 'minecraft:tuff', 'minecraft:ancient_debris')
    potting('kubejs:dust_enderite', 'minecraft:tuff', 'lolenderite:primordial_remnants')
})


// Rings
ServerEvents.recipes(e => {
    let potting = (output, e1, e2, e3, e4, e5, e6, e7, e8) => {
        e.custom({
            "type": "ars_nouveau:enchanting_apparatus",
            "output": {
                "item": output
            },
            "pedestalItems": [
                {
                    "item": e1
                },
                {
                    "item": e2
                },
                {
                    "item": e3
                },
                {
                    "item": e4
                },
                {
                    "item": e5
                },
                {
                    "item": e6
                },
                {
                    "item": e7
                },
                {
                    "item": e8
                }
            ],
            "reagent": [
                {
                    "item": "ars_nouveau:ring_of_potential"
                }
            ],
            "sourceCost": 10000
        })
    }
    potting('ringsofascension:ring_dolphin', 'beachparty:beach_hat', 'moa_decor_toys:guardian', 'beachparty:bikini', 'beachparty:rubber_ring_blue', 'beachparty:swim_wings', 'beachparty:rubber_ring_pink', 'alexsmobs:crocodile_chestplate', 'moa_decor_toys:delfin')
    potting('ringsofascension:ring_experience', 'vinery:cristel_wine', 'sophisticatedbackpacks:xp_pump_upgrade', 'ars_nouveau:greater_experience_gem', 'mob_grinding_utils:solid_xp_block', 'kubejs:experience_plate', 'create:experience_block', 'create_enchantment_industry:experience_rotor', 'sophisticatedstorage:xp_pump_upgrade')
    potting('ringsofascension:ring_fire_resistance', 'twilightdelight:tear_drink', 'additional_lights:soul_fire_for_standing_torch_s', 'mob_grinding_utils:saw_upgrade_fire', 'mcwlights:lava_lamp', 'minecraft:fire_charge', 'alexsmobs:lava_bottle', 'ars_nouveau:fire_essence', 'additional_lights:fire_for_standing_torch_s')
    potting('ringsofascension:ring_flight', 'alexsmobs:void_worm_eye', 'deeperdarker:soul_elytra', 'create_jetpack:jetpack', 'twilightforest:firefly', 'ars_nouveau:ritual_flight', 'create_sa:brass_jetpack_chestplate', 'lolenderite:enderite_plated_elytra', 'twilightforest:raven_feather')
    potting('ringsofascension:ring_growth', 'vinery:straw_hat', 'pamhc2foodcore:freshwateritem', 'vinery:vinemaker_leggings', 'ars_nouveau:ritual_overgrowth', 'vinery:vinemaker_boots', 'meadow:watering_can', 'vinery:vinemaker_apron', 'arcanelanterns:life_lantern')
    potting('ringsofascension:ring_health', 'paraglider:heart_container', 'minecraft:heart_of_the_sea', 'arcanelanterns:love_lantern', 'twilightforest:charm_of_life_2', 'deeperdarker:heart_of_the_deep', 'alexsmobs:soul_heart', 'paraglider:anti_vessel', 'candlelight:hearth')
    potting('ringsofascension:ring_hungerless', 'candlelight:cooking_hat', 'sophisticatedbackpacks:advanced_feeding_upgrade', 'candlelight:chefs_pants', 'pamhc2foodextended:spaghettidinneritem', 'candlelight:chefs_boots', 'pamhc2foodextended:cookoutmealitem', 'candlelight:chefs_jacket', 'sophisticatedstorage:advanced_feeding_upgrade')
    potting('ringsofascension:ring_invisibility', 'ars_nouveau:glyph_invisibility', 'skinnedlanterns:ghost_soul_lantern_block', 'useless_sword:vex_sword', 'nourished_nether:ectoplasm', 'aether:invisibility_cloak', 'useless_sword:vex_ectoplasm', 'moa_decor_holidays:fantasma', 'skinnedlanterns:ghost_lantern_block')
    potting('ringsofascension:ring_jump_boost', 'useless_sword:slime_sword', 'minecraft:rabbit_foot', 'create_things_and_misc:sticky_launcher', 'alexsmobs:flying_fish_boots', 'farmersdelight:horse_feed', 'create_things_and_misc:sticky_boots_boots', 'create_things_and_misc:brass_sticky_launcher', 'vinery:clark_wine')
    potting('ringsofascension:ring_knockback_resistance', 'enlightened_end:adamantite_armor_helmet', 'suppsquared:heavy_key', 'enlightened_end:adamantite_armor_leggings', 'moa_decor_toys:golemdehierro', 'enlightened_end:adamantite_armor_boots', 'arcanelanterns:warding_lantern', 'enlightened_end:adamantite_armor_chestplate', 'ars_nouveau:glyph_gust')
    potting('ringsofascension:ring_lava_sponge', 'moa_decor_bath:esponjadebano', 'minecraft:blackstone', 'create_things_and_misc:spout_gun_lava', 'trashcans:liquid_trash_can', 'ars_nouveau:fire_essence', 'minecraft:lava_bucket', 'permanentsponges:magmatic_sponge_on_a_stick', 'minecraft:netherrack')
    potting('ringsofascension:ring_luck', 'betterarcheology:villager_fossil', 'beachparty:melon_cocktail', 'betterarcheology:unidentified_artifact', 'moa_decor_science:mapadeltesoro', 'ars_nouveau:glyph_fortune', 'mcwpaths:dark_prismarine_clover_paving', 'candlelight:gold_ring', 'vinery:bolvar_wine')
    potting('ringsofascension:ring_magnetism','vinery:magnetic_wine', 'sophisticatedbackpacks:advanced_magnet_upgrade', 'create_sa:copper_magnet', 'minecraft:compass', 'minecraft:lodestone', 'moa_decor_science:brujula', 'simplemagnets:advancedmagnet', 'sophisticatedstorage:advanced_magnet_upgrade')
    potting('ringsofascension:ring_mining', 'twilightforest:mining_leaves', 'drinkbeer:beer_mug', 'vinery:bolvar_wine', 'apotheosis:diamond_mining_arrow', 'apotheosis:pickaxe_tome', 'apotheosis:iron_mining_arrow', 'create_confectionery:candy_cane', 'beachparty:honey_cocktail')
    potting('ringsofascension:ring_night_vision', 'vinery:aegis_wine', 'cataclysm:void_eye', 'cataclysm:flame_eye', 'cataclysm:monstrous_eye', 'biomesoplenty:eyebulb', 'cataclysm:mech_eye', 'minecraft:ender_eye', 'cataclysm:abyss_eye')
    potting('ringsofascension:ring_poison_resistance', 'minecraft:spider_eye', 'chipped:poisonous_mushroom_stem', 'chipped:poisonous_vine', 'alexsmobs:centipede_leg', 'moa_decor_toys:bruja', 'minecraft:poisonous_potato', 'chipped:ivy_vine', 'moa_decor_science:veneno')
    potting('ringsofascension:ring_regeneration', 'minecraft:ghast_tear', 'drinkbeer:beer_mug_apple_lambic', 'vinery:stal_wine', 'beachparty:cocoa_cocktail', 'ars_nouveau:thread_life_drain', 'create_confectionery:soothing_hot_chocolate', 'vinery:cherry_wine', 'drinkbeer:beer_mug_sweet_berry_kriek')
    potting('ringsofascension:ring_slow_falling', 'endlessbiomes:loaded_core', 'minecraft:phantom_membrane', 'ars_nouveau:glyph_slowfall', 'twilightforest:wispy_cloud', 'twilightforest:arctic_fur_block', 'twilightforest:fluffy_cloud', 'arcanelanterns:cloud_lantern', 'endlessbiomes:void_touched_boots_boots')
    potting('ringsofascension:ring_slow_resistance', 'undergarden:goo_ball', 'create_things_and_misc:spout_gun_honey', 'moa_decor_toys:abeja', 'minecraft:honey_block', 'undergarden:cloggrum_boots', 'minecraft:slime_block', 'moa_decor_toys:slime', 'create_things_and_misc:spout_gun_slime')
    potting('ringsofascension:ring_speed', 'mob_grinding_utils:xp_solidifier_upgrade', 'create_confectionery:black_chocolate_candy', 'create_confectionery:caramelized_marshmellow_on_a_stick', 'create_confectionery:ruby_chocolate_candy', 'lost_aether_content:agility_boots', 'create_confectionery:white_chocolate_candy', 'create_confectionery:caramel_glazed_berries', 'create_confectionery:chocolate_candy')
    potting('ringsofascension:ring_sponge', 'moa_decor_bath:esponjadebano', 'minecraft:prismarine', 'create_things_and_misc:spout_gun_water', 'trashcans:liquid_trash_can', 'ars_nouveau:water_essence', 'minecraft:water_bucket', 'permanentsponges:aqueous_sponge_on_a_stick', 'minecraft:sand')
    potting('ringsofascension:ring_steadfast_steps', 'beachparty:sunglasses', 'supplementaries:rope_arrow', 'alexsmobs:roadrunner_boots', 'minecraft:ladder', 'epicsamurai:steel_ninja_boots', 'nourished_nether:gilded_blackstone_brick_stairs', 'pizzacraft:pizza_delivery_boots', 'meadow:climbing_rope_topmount')
    potting('ringsofascension:ring_strength', 'ars_nouveau:wilden_horn', 'pamhc2foodextended:rootbeerfloatitem', 'beachparty:coconut_cocktail', 'vinery:solaris_wine', 'minecraft:blaze_powder', 'vinery:bottle_mojang_noir', 'farmersdelight:dog_food', 'pamhc2foodextended:rootbeersodaitem')
    potting('ringsofascension:ring_undying', 'fantasyfurniture:decorations/gravestone', 'useless_sword:undying_ingot', 'moa_decor_garden_:pala_cgrava', 'supplementaries:raked_gravel', 'extendedcrafting:the_ultimate_catalyst', 'nourished_nether:necronium_block', 'ars_nouveau:thread_undying', 'useless_sword:undying_gem')
    potting('ringsofascension:ring_water_breathing', 'supplementaries:wind_vane', 'minecraft:conduit', 'supplementaries:bubble_blower', 'chimes:amethyst_chimes', 'ars_nouveau:glyph_wind_shear', 'chimes:bamboo_chimes', 'ars_nouveau:air_essence', 'vinery:kelp_cider')
    potting('ringsofascension:ring_water_walking', 'moa_decor_art:esculturajesuscrucificado', 'minecraft:axolotl_bucket', 'vinery:red_wine', 'enlightened_end:frostburn_ice', 'minecraft:leather_boots', 'minecraft:blue_ice', 'undergarden:veil_mushroom', 'moa_decor_toys:ajolotedorado')
    potting('ringsofascension:ring_wither', 'stalwart_dungeons:tungsten_helmet', 'skinnedlanterns:wither_skeleton_soul_lantern_block', 'stalwart_dungeons:tungsten_leggings', 'moa_decor_toys:wither', 'stalwart_dungeons:tungsten_boots', 'ars_nouveau:glyph_wither', 'stalwart_dungeons:tungsten_chestplate', 'skinnedlanterns:wither_skeleton_lantern_block')
})


// Rods
ServerEvents.recipes(e => {
    let potting = (output, element) => {
        e.custom({
            "type": "createaddition:rolling",
            "input": {
                "item": element
            },
            "result": {
                "item": output,
                "count": 2
            }
        })
    }
    potting('kubejs:adamantite_rod', 'enlightened_end:adamantite_ingot')
    potting('moreplates:amethyst_rod', 'minecraft:amethyst_shard')
    potting('kubejs:andesite_rod', 'create:andesite_alloy')
    potting('kubejs:antimatter_rod', 'mekanism:pellet_antimatter')
    potting('moreplates:aquamarine_rod', 'epicsamurai:aquamarine')
    potting('moreplates:bismuth_rod', 'enlightened_end:bismuth_ingot')
    potting('moreplates:black_iron_rod', 'extendedcrafting:black_iron_ingot')
    potting('moreplates:brass_rod', 'create:brass_ingot')
    potting('moreplates:brick_rod', 'minecraft:brick')
    potting('moreplates:bronze_rod', 'mekanism:ingot_bronze')
    potting('moreplates:charcoal_rod', 'minecraft:charcoal')
    potting('moreplates:coal_rod', 'minecraft:coal')
    potting('moreplates:copper_rod', 'minecraft:copper_ingot')
    potting('moreplates:crystaltine_rod', 'extendedcrafting:crystaltine_ingot')
    potting('moreplates:diamond_rod', 'minecraft:diamond')
    potting('kubejs:dimensional_rod', 'rftoolsbase:dimensionalshard')
    potting('kubejs:drygmy_rod', 'ars_nouveau:drygmy_shard')
    potting('kubejs:echo_rod', 'minecraft:echo_shard')
    potting('moreplates:electrum_rod', 'createaddition:electrum_ingot')
    potting('moreplates:emerald_rod', 'minecraft:emerald')
    potting('moreplates:ender_rod', 'extendedcrafting:ender_ingot')
    potting('kubejs:enderite_rod', 'lolenderite:enderite_ingot')
    potting('kubejs:endumium_rod', 'farlanders:endumium_crystal')
    potting('moreplates:enhanced_ender_rod', 'extendedcrafting:enhanced_ender_ingot')
    potting('kubejs:enhanced_redstone_rod', 'extendedcrafting:enhanced_redstone_ingot')
    potting('kubejs:experience_rod', 'create:experience_nugget')
    potting('kubejs:fiery_rod', 'twilightforest:fiery_ingot')
    potting('moreplates:flint_rod', 'minecraft:flint')
    potting('moreplates:glowstone_rod', 'minecraft:glowstone_dust')
    potting('moreplates:gold_rod', 'minecraft:gold_ingot')
    potting('kubejs:hdpe_rod', 'mekanism:hdpe_pellet')
    potting('moreplates:iron_rod', 'minecraft:iron_ingot')
    potting('kubejs:ironwood_rod', 'twilightforest:ironwood_ingot')
    potting('kubejs:knightmetal_rod', 'twilightforest:knightmetal_ingot')
    potting('moreplates:lapis_lazuli_rod', 'minecraft:lapis_lazuli')
    potting('moreplates:lead_rod', 'mekanism:ingot_lead')
    potting('kubejs:malachite_rod', 'enlightened_end:malachite')
    potting('kubejs:necronium_rod', 'nourished_nether:necronium_ingot')
    potting('moreplates:nether_brick_rod', 'minecraft:nether_brick')
    potting('moreplates:nether_quartz_rod', 'minecraft:quartz')
    potting('kubejs:nether_star_rod', 'minecraft:nether_star')
    potting('moreplates:netherite_rod', 'minecraft:netherite_ingot')
    potting('kubejs:obsidian_rod', 'minecraft:obsidian')
    potting('moreplates:osmium_rod', 'mekanism:ingot_osmium')
    potting('moreplates:paper_rod', 'minecraft:paper')
    potting('kubejs:plutonium_rod', 'mekanism:pellet_plutonium')
    potting('kubejs:polonium_rod', 'mekanism:pellet_polonium')
    potting('moreplates:prismarine_crystal_rod', 'minecraft:prismarine_crystals')
    potting('moreplates:quartz_enriched_rod', 'refinedstorage:quartz_enriched_iron')
    potting('moreplates:redstone_rod', 'minecraft:redstone')
    potting('moreplates:redstone_ingot_rod', 'extendedcrafting:redstone_ingot')
    potting('moreplates:refined_glowstone_rod', 'mekanism:ingot_refined_glowstone')
    potting('moreplates:refined_obsidian_rod', 'mekanism:ingot_refined_obsidian')
    potting('kubejs:rose_quartz_rod', 'create:rose_quartz')
    potting('moreplates:ruby_rod', 'epicsamurai:ruby')
    potting('moreplates:silicon_rod', 'refinedstorage:silicon')
    potting('moreplates:silver_rod', 'epicsamurai:silver_ingot')
    potting('kubejs:source_rod', 'ars_nouveau:source_gem')
    potting('kubejs:starbuncle_rod', 'ars_nouveau:starbuncle_shards')
    potting('moreplates:steel_rod', 'mekanism:ingot_steel')
    potting('moreplates:the_ultimate_rod', 'extendedcrafting:the_ultimate_ingot')
    potting('moreplates:tin_rod', 'mekanism:ingot_tin')
    potting('kubejs:titan_rod', 'farlanders:titan_hide')
    potting('moreplates:tungsten_rod', 'stalwart_dungeons:tungsten_ingot')
    potting('moreplates:uranium_rod', 'mekanism:ingot_uranium')
    potting('kubejs:void_steel_rod', 'createutilities:void_steel_ingot')
    potting('kubejs:whirlisprig_rod', 'ars_nouveau:whirlisprig_shards')
    potting('kubejs:wixie_rod', 'ars_nouveau:wixie_shards')
    potting('moreplates:zinc_rod', 'create:zinc_ingot')
})
ServerEvents.recipes(e => {
    let potting = (output, element) => {
        e.custom({
            "type": "createaddition:rolling",
            "input": {
                "tag": element
            },
            "result": {
                "item": output,
                "count": 2
            }
        })
    }
    potting('kubejs:wood_rod', 'minecraft:planks')
})


// Sophisticated Backpacks
ServerEvents.recipes(e => {
    let potting = (output, input, element) => {
        e.shaped(output, [
            'BBB',
            'BAB',
            'BBB'
        ], {
            A: input,
            B: element
        })
    }
    potting('sophisticatedbackpacks:stack_upgrade_tier_1', 'sophisticatedbackpacks:upgrade_base', 'minecraft:iron_ingot')
    potting('sophisticatedbackpacks:stack_upgrade_tier_2', 'sophisticatedbackpacks:stack_upgrade_tier_1', 'minecraft:gold_ingot')
    potting('sophisticatedbackpacks:stack_upgrade_tier_3', 'sophisticatedbackpacks:stack_upgrade_tier_2', 'minecraft:diamond')
    potting('sophisticatedbackpacks:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_tier_3', 'minecraft:netherite_ingot')
})
ServerEvents.recipes(e => {
    let potting = (output, input, plate) => {
        e.shaped(output, [
            ' B ',
            'BAB',
            ' B '
        ], {
            A: input,
            B: plate
        })
    }
    potting('sophisticatedbackpacks:stack_upgrade_tier_1', 'sophisticatedbackpacks:upgrade_base', 'moreplates:iron_plate')
    potting('sophisticatedbackpacks:stack_upgrade_tier_2', 'sophisticatedbackpacks:stack_upgrade_tier_1', 'moreplates:gold_plate')
    potting('sophisticatedbackpacks:stack_upgrade_tier_3', 'sophisticatedbackpacks:stack_upgrade_tier_2', 'moreplates:diamond_plate')
    potting('sophisticatedbackpacks:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_tier_3', 'moreplates:netherite_plate')
})
ServerEvents.recipes(e => {
    let potting = (output, input, plate) => {
        e.custom({
            "type": "create:deploying",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": plate
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('sophisticatedbackpacks:stack_upgrade_tier_1', 'sophisticatedbackpacks:upgrade_base', 'moreplates:iron_plate')
    potting('sophisticatedbackpacks:stack_upgrade_tier_2', 'sophisticatedbackpacks:stack_upgrade_tier_1', 'moreplates:gold_plate')
    potting('sophisticatedbackpacks:stack_upgrade_tier_3', 'sophisticatedbackpacks:stack_upgrade_tier_2', 'moreplates:diamond_plate')
    potting('sophisticatedbackpacks:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_tier_3', 'moreplates:netherite_plate')
})


// Sophisticated Storage
ServerEvents.recipes(e => {
    let potting = (output, input, element) => {
        e.shaped(output, [
            'BBB',
            'BAB',
            'BBB'
        ], {
            A: input,
            B: element
        })
    }
    potting('sophisticatedstorage:stack_upgrade_tier_1', 'sophisticatedstorage:upgrade_base', 'minecraft:iron_ingot')
    potting('sophisticatedstorage:stack_upgrade_tier_2', 'sophisticatedstorage:stack_upgrade_tier_1', 'minecraft:gold_ingot')
    potting('sophisticatedstorage:stack_upgrade_tier_3', 'sophisticatedstorage:stack_upgrade_tier_2', 'minecraft:diamond')
    potting('sophisticatedstorage:stack_upgrade_tier_4', 'sophisticatedstorage:stack_upgrade_tier_3', 'minecraft:netherite_ingot')
})
ServerEvents.recipes(e => {
    let potting = (output, input, plate) => {
        e.shaped(output, [
            ' B ',
            'BAB',
            ' B '
        ], {
            A: input,
            B: plate
        })
    }
    potting('sophisticatedstorage:stack_upgrade_tier_1', 'sophisticatedstorage:upgrade_base', 'moreplates:iron_plate')
    potting('sophisticatedstorage:stack_upgrade_tier_2', 'sophisticatedstorage:stack_upgrade_tier_1', 'moreplates:gold_plate')
    potting('sophisticatedstorage:stack_upgrade_tier_3', 'sophisticatedstorage:stack_upgrade_tier_2', 'moreplates:diamond_plate')
    potting('sophisticatedstorage:stack_upgrade_tier_4', 'sophisticatedstorage:stack_upgrade_tier_3', 'moreplates:netherite_plate')
})
ServerEvents.recipes(e => {
    let potting = (output, input, plate) => {
        e.custom({
            "type": "create:deploying",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": plate
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('sophisticatedstorage:stack_upgrade_tier_1', 'sophisticatedstorage:upgrade_base', 'moreplates:iron_plate')
    potting('sophisticatedstorage:stack_upgrade_tier_2', 'sophisticatedstorage:stack_upgrade_tier_1', 'moreplates:gold_plate')
    potting('sophisticatedstorage:stack_upgrade_tier_3', 'sophisticatedstorage:stack_upgrade_tier_2', 'moreplates:diamond_plate')
    potting('sophisticatedstorage:stack_upgrade_tier_4', 'sophisticatedstorage:stack_upgrade_tier_3', 'moreplates:netherite_plate')
})


// Smithing Template - Trim
ServerEvents.recipes(e => {
    let potting = (template) => {
        e.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": template
            },
            "loops": 1,
            "results": [
                {
                    "count": 2,
                    "item": template
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:blank_template_trim"
                        },
                        {
                            "item": "kubejs:blank_template_trim"
                        }
                    ],
                    "results": [
                        {
                            "item": "kubejs:blank_template_trim"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:blank_template_trim"
                        },
                        {
                            "item": "moreplates:diamond_plate"
                        }
                    ],
                    "results": [
                        {
                            "item": "kubejs:blank_template_trim"
                        }
                    ]
                }
            ],
            "transitionalItem": {
                "item": "kubejs:blank_template_trim"
            }
        })
    }
    potting('minecraft:vex_armor_trim_smithing_template')
    potting('minecraft:wild_armor_trim_smithing_template')
    potting('minecraft:dune_armor_trim_smithing_template')
    potting('lost_aether_content:noble_armor_trim_smithing_template')
    potting('minecraft:silence_armor_trim_smithing_template')
    potting('minecraft:ward_armor_trim_smithing_template')
    potting('minecraft:host_armor_trim_smithing_template')
    potting('minecraft:spire_armor_trim_smithing_template')
    potting('minecraft:tide_armor_trim_smithing_template')
    potting('minecraft:rib_armor_trim_smithing_template')
    potting('minecraft:eye_armor_trim_smithing_template')
    potting('minecraft:sentry_armor_trim_smithing_template')
    potting('minecraft:coast_armor_trim_smithing_template')
    potting('minecraft:wayfinder_armor_trim_smithing_template')
    potting('minecraft:raiser_armor_trim_smithing_template')
    potting('minecraft:shaper_armor_trim_smithing_template')
    potting('kobolds:kobold_template')
    potting('minecraft:snout_armor_trim_smithing_template')
})


// Smithing Template - Upgrade
ServerEvents.recipes(e => {
    let potting = (template) => {
        e.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": template
            },
            "loops": 1,
            "results": [
                {
                    "count": 2,
                    "item": template
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:blank_template_upgrade"
                        },
                        {
                            "item": "kubejs:blank_template_upgrade"
                        }
                    ],
                    "results": [
                        {
                            "item": "kubejs:blank_template_upgrade"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:blank_template_upgrade"
                        },
                        {
                            "item": "moreplates:diamond_plate"
                        }
                    ],
                    "results": [
                        {
                            "item": "kubejs:blank_template_upgrade"
                        }
                    ]
                }
            ],
            "transitionalItem": {
                "item": "kubejs:blank_template_upgrade"
            }
        })
    }
    potting('minecraft:netherite_upgrade_smithing_template')
    potting('enlightened_end:ender_smithing_template')
    potting('cataclysm:ignitium_upgrade_smithing_template')
    potting('lolenderite:enderite_upgrade_smithing_template')
    potting('deeperdarker:warden_upgrade_smithing_template')
    potting('undergarden:forgotten_upgrade_smithing_template')
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


// Remove unused crafts
ServerEvents.recipes(e => {
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

    // Coals
    e.remove({ id: 'morecoal:copper_coal_from_coal' })
    e.remove({ id: 'morecoal:iron_coal_from_copper_coal' })
    e.remove({ id: 'morecoal:lapis_coal_from_iron_coal' })
    e.remove({ id: 'morecoal:redstone_coal_from_lapis_coal' })
    e.remove({ id: 'morecoal:gold_coal_from_redstone_coal' })
    e.remove({ id: 'morecoal:amethyst_coal_from_gold_coal' })
    e.remove({ id: 'morecoal:emerald_coal_from_amethyst_coal' })
    e.remove({ id: 'morecoal:diamond_coal_from_emerald_coal' })
    e.remove({ id: 'morecoal:netherite_coal_from_diamond_coal' })
    e.remove({ id: 'morecoal:omni_coal' })

    // Furnaces
    e.remove({ id: 'ironfurnaces:furnaces/copper_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/iron_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/iron_furnace2' })
    e.remove({ id: 'ironfurnaces:furnaces/gold_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/gold_furnace2' })
    e.remove({ id: 'ironfurnaces:furnaces/silver_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/silver_furnace2' })
    e.remove({ id: 'ironfurnaces:furnaces/diamond_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/obsidian_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/emerald_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/netherite_furnace' })

    // Pipez
    e.remove({ id: 'pipez:basic_upgrade' })
    e.remove({ id: 'pipez:improved_upgrade' })
    e.remove({ id: 'pipez:advanced_upgrade' })
    e.remove({ id: 'pipez:ultimate_upgrade' })

    // Plates
    e.remove({ id: 'createaddition:pressing/zinc_ingot' })
    e.replaceInput({ input: 'createaddition:zinc_sheet' }, 'createaddition:zinc_sheet', 'moreplates:zinc_plate')
    e.remove({ id: 'create:pressing/brass_ingot' })
    e.replaceInput({ input: 'create:brass_sheet' }, 'create:brass_sheet', 'moreplates:brass_plate')
    e.remove({ id: 'create:pressing/gold_ingot' })
    e.replaceInput({ input: 'create:golden_sheet' }, 'create:golden_sheet', 'moreplates:gold_plate')
    e.remove({ id: 'create:pressing/iron_ingot' })
    e.remove({ id: 'nifty:hammer/plate_from/iron_ingot' })
    e.replaceInput({ input: ['create:iron_sheet', 'nifty:plate_iron'] }, ['create:iron_sheet', 'nifty:plate_iron'], 'moreplates:iron_plate')
    e.remove({ id: 'create:pressing/copper_ingot' })
    e.remove({ id: 'nifty:hammer/plate_from/copper_ingot' })
    e.replaceInput({ input: ['create:copper_sheet', 'nifty:plate_copper'] }, ['create:copper_sheet', 'nifty:plate_copper'], 'moreplates:copper_plate')
    e.remove({ id: 'createaddition:pressing/electrum_ingot' })
    e.replaceInput({ input: 'createaddition:electrum_sheet' }, 'createaddition:electrum_sheet', 'moreplates:electrum_plate')
    e.remove({ id: 'create_things_and_misc:rose_quartz_sheet_craft' })
    e.replaceInput({ input: 'create_things_and_misc:rose_quartz_sheet' }, 'create_things_and_misc:rose_quartz_sheet', 'kubejs:rose_quartz_plate')
    e.remove({ id: 'create_things_and_misc:experience_sheet_craft' })
    e.replaceInput({ input: 'create_things_and_misc:experience_sheet' }, 'create_things_and_misc:experience_sheet', 'kubejs:experience_plate')
    e.remove({ id: 'createutilities:pressing/void_steel_sheet' })
    e.replaceInput({ input: 'createutilities:void_steel_sheet' }, 'createutilities:void_steel_sheet', 'kubejs:void_steel_plate')
    e.remove({ id: 'mekanism:enriching/hdpe_sheet' })
    e.replaceInput({ input: 'mekanism:hdpe_sheet' }, 'mekanism:hdpe_sheet', 'kubejs:hdpe_plate')
    e.replaceInput({ input: 'manyideas_core:plate_copper' }, 'manyideas_core:plate_copper', 'create:copper_nugget')
    e.replaceInput({ input: 'manyideas_core:plate_gold' }, 'manyideas_core:plate_gold', 'minecraft:gold_nugget')
    e.replaceInput({ input: 'manyideas_core:plate_iron' }, 'manyideas_core:plate_iron', 'minecraft:iron_nugget')
    e.replaceInput({ input: 'manyideas_core:plate_quartz' }, 'manyideas_core:plate_quartz', 'minecraft:quartz')

    // Portals
    e.remove({ id: 'jamd:portal_block' })
    e.remove({ id: 'jamd:nether_portal_block' })
    e.remove({ id: 'jamd:end_portal_block' })
    e.remove({ id: 'javd:portal_block' })
    e.remove({ id: 'dimdungeons:recipe_block_portal_keyhole' })

    // Processing
    e.remove({ id: 'mekanism:processing/coal/to_ore' })
    e.remove({ id: 'mekanism:processing/coal/to_deepslate_ore' })
    e.remove({ id: 'mekanism:processing/coal/from_dust' })
    e.remove({ id: 'mekanism:processing/iron/ore/from_raw' })
    e.remove({ id: 'mekanism:processing/iron/ore/deepslate_from_raw' })
    e.remove({ id: 'mekanism:processing/iron/ingot/from_dust_blasting' })
    e.remove({ id: 'mekanism:processing/iron/ingot/from_dust_smelting' })
    e.remove({ id: 'mekanism:processing/copper/ore/from_raw' })
    e.remove({ id: 'mekanism:processing/copper/ore/deepslate_from_raw' })
    e.remove({ id: 'mekanism:processing/copper/ingot/from_dust_blasting' })
    e.remove({ id: 'mekanism:processing/copper/ingot/from_dust_smelting' })
    e.remove({ id: 'mekanism:processing/gold/ore/from_raw' })
    e.remove({ id: 'mekanism:processing/gold/ore/deepslate_from_raw' })
    e.remove({ id: 'mekanism:processing/gold/ingot/from_dust_blasting' })
    e.remove({ id: 'mekanism:processing/gold/ingot/from_dust_smelting' })
    e.remove({ id: 'mekanism:processing/gold/ore/nether_from_raw' })
    e.remove({ id: 'mekanism:processing/redstone/to_ore' })
    e.remove({ id: 'mekanism:processing/redstone/to_deepslate_ore' })
    e.remove({ id: 'mekanism:processing/emerald/to_ore' })
    e.remove({ id: 'mekanism:processing/emerald/to_deepslate_ore' })
    e.remove({ id: 'mekanism:processing/emerald/from_dust' })
    e.remove({ id: 'mekanism:processing/lapis_lazuli/to_ore' })
    e.remove({ id: 'mekanism:processing/lapis_lazuli/to_deepslate_ore' })
    e.remove({ id: 'mekanism:processing/lapis_lazuli/from_dust' })
    e.remove({ id: 'mekanism:processing/diamond/to_ore' })
    e.remove({ id: 'mekanism:processing/diamond/to_deepslate_ore' })
    e.remove({ id: 'createaddition:crushing/diamond' })
    e.remove({ id: 'mekanism:processing/diamond/from_dust' })
    e.replaceInput({ input: 'createaddition:diamond_grit' }, 'createaddition:diamond_grit', 'mekanism:dust_diamond')
    e.remove({ id: 'mekanism:processing/quartz/to_ore' })
    e.remove({ id: 'mekanism:processing/quartz/from_dust' })
    e.remove({ id: 'mekanism:processing/tin/ore/from_raw' })
    e.remove({ id: 'mekanism:processing/tin/ore/deepslate_from_raw' })
    e.remove({ id: 'mekanism:processing/tin/ingot/from_dust_blasting' })
    e.remove({ id: 'mekanism:processing/tin/ingot/from_dust_smelting' })
    e.remove({ id: 'mekanism:processing/osmium/ore/from_raw' })
    e.remove({ id: 'mekanism:processing/osmium/ore/deepslate_from_raw' })
    e.remove({ id: 'mekanism:processing/osmium/ingot/from_dust_blasting' })
    e.remove({ id: 'mekanism:processing/osmium/ingot/from_dust_smelting' })
    e.remove({ id: 'mekanism:processing/uranium/ore/from_raw' })
    e.remove({ id: 'mekanism:processing/uranium/ore/deepslate_from_raw' })
    e.remove({ id: 'mekanism:processing/uranium/ingot/from_dust_smelting' })
    e.remove({ id: 'mekanism:processing/uranium/ingot/from_dust_blasting' })
    e.remove({ id: 'mekanism:processing/fluorite/to_ore' })
    e.remove({ id: 'mekanism:processing/fluorite/to_deepslate_ore' })
    e.remove({ id: 'mekanism:processing/fluorite/from_dust' })
    e.remove({ id: 'mekanism:processing/lead/ore/from_raw' })
    e.remove({ id: 'mekanism:processing/lead/ore/deepslate_from_raw' })
    e.remove({ id: 'mekanism:processing/lead/ingot/from_dust_smelting' })
    e.remove({ id: 'mekanism:processing/lead/ingot/from_dust_blasting' })
    e.remove({ id: 'mekanism:processing/netherite/dust_to_ancient_debris' })
    e.remove({ id: 'mekanism:processing/netherite/ingot_from_dust_smelting' })
    e.remove({ id: 'mekanism:processing/netherite/ingot_from_dust_blasting' })
    e.remove({ id: 'undergarden:shard_to_crystal' })
    e.remove({ id: 'stalwart_dungeons:tungsten_ingot_recipe' })
    e.remove({ id: 'stalwart_dungeons:tungsten_ingot_recipe_2' })
    e.remove({ id: 'enlightened_end:smelt_raw_irradium' })
    e.remove({ id: 'enlightened_end:blast_raw_irradium' })

    // Rods
    e.remove({ id: 'createaddition:rolling/brass_ingot' })
    e.replaceInput({ input: 'createaddition:brass_rod' }, 'createaddition:brass_rod', 'moreplates:brass_rod')
    e.remove({ id: 'createaddition:rolling/copper_ingot' })
    e.replaceInput({ input: 'createaddition:copper_rod' }, 'createaddition:copper_rod', 'moreplates:copper_rod')
    e.remove({ id: 'createaddition:rolling/iron_ingot' })
    e.remove({ id: 'nifty:iron_rod' })
    e.replaceInput({ input: ['createaddition:iron_rod', 'nifty:iron_rod'] }, ['createaddition:iron_rod', 'nifty:iron_rod'], 'moreplates:iron_rod')
    e.remove({ id: 'createaddition:rolling/iron_ingot' })
    e.replaceInput({ input: 'createaddition:gold_rod' }, 'createaddition:gold_rod', 'moreplates:gold_rod')
    e.remove({ id: 'createaddition:rolling/electrum_ingot' })
    e.replaceInput({ input: 'createaddition:electrum_rod' }, 'createaddition:electrum_rod', 'moreplates:electrum_rod')
    e.remove({ id: 'mekanism:hdpe_rod' })
    e.replaceInput({ input: 'mekanism:hdpe_rod' }, 'mekanism:hdpe_rod', 'kubejs:hdpe_rod')
    e.remove({ id: 'useless_sword:emeraldstickcraft' })
    e.replaceInput({ input: 'useless_sword:emerald_stick' }, 'useless_sword:emerald_stick', 'moreplates:emerald_rod')

    // Sophisticated Backpacks
    e.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_1' })
    e.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_2' })
    e.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_3' })
    e.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_4' })

    // Sophisticated Storage
    e.remove({ id: 'sophisticatedstorage:stack_upgrade_tier_1' })
    e.remove({ id: 'sophisticatedstorage:stack_upgrade_tier_2' })
    e.remove({ id: 'sophisticatedstorage:stack_upgrade_tier_3' })
    e.remove({ id: 'sophisticatedstorage:stack_upgrade_tier_4' })

    // Smithing Template - Trim
    e.remove({ id: 'minecraft:vex_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:wild_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:dune_armor_trim_smithing_template' })
    e.remove({ id: 'lost_aether_content:noble_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:silence_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:ward_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:host_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:spire_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:tide_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:rib_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:eye_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:sentry_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:coast_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:wayfinder_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:raiser_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:shaper_armor_trim_smithing_template' })
    e.remove({ id: 'kobolds:kobold_trim_template' })
    e.remove({ id: 'minecraft:snout_armor_trim_smithing_template' })

    // Smithing Template - Upgrade
    e.remove({ id: 'minecraft:netherite_upgrade_smithing_template' })
    e.remove({ id: 'cataclysm:ignitium_upgrade_smithing_template' })
    e.remove({ id: 'lolenderite:enderite_upgrade_smithing_template' })
    e.remove({ id: 'deeperdarker:warden_upgrade_smithing_template' })
    e.remove({ id: 'undergarden:forgotten_upgrade_smithing_template' })

    // Others
    e.remove({ id: 'mctb:twilight_to_oak_crafting_table' })
    e.remove({ id: 'mctb:chorus_planks_crafting_table' })
    e.remove({ id: 'mctb:chipped_oak_crafting_table' })
    e.remove({ id: 'mctb:archwood_planks_crafting_table' })
    e.remove({ id: 'mctb:echo_planks_crafting_table' })
    e.remove({ id: 'farmersdelight:cake_from_milk_bottle' })
    e.remove({ id: 'create:create/curiosities/cake' })
})


// Exemple
// ServerEvents.recipes(e => {
//     let potting = (output, input) => {
//         e.custom()
//     }
//     potting()
// })