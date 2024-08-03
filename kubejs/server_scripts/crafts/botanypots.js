// Changed crafts
ServerEvents.recipes(e => {
    e.remove({ not: { id: /botanypots:botanypots/ }, id: /botanypots:/ })
    e.remove({ id: 'supplementaries:botany_flax' })
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
    potting('minecraft:dirt', 'dirt', 1.00)
    potting('minecraft:netherrack', 'nether', 1.00)
    potting('minecraft:end_stone', 'end', 1.00)
    potting('minecraft:grass_block', 'dirt', 1.50)
    potting('minecraft:glowstone', 'nether', 1.50)
    potting('minecraft:purpur_block', 'end', 1.50)
    potting('farmersdelight:rich_soil', 'allsoil', 2.00)
    potting('farmersdelight:rich_soil_farmland', 'allsoil', 4.00)
    potting('kubejs:block_creative', 'allsoil', 1200.00)
})
ServerEvents.recipes(e => {
    let potting = (soil, display, category, modif) => {
        e.custom({
            "type": "botanypots:soil",
            "input": {
                "item": soil
            },
            "display": {
                "block": display,
                "renderFluid": true
            },
            "categories": [
                category
            ],
            "growthModifier": modif
        })
    }
    potting('minecraft:water_bucket', 'minecraft:water', 'water', 1.00)
    potting('minecraft:lava_bucket', 'minecraft:lava', 'lava', 1.00)
    potting('mob_grinding_utils:fluid_xp_bucket', 'mob_grinding_utils:fluid_xp', 'allfluid', 1.50)
    potting('mekanism:lithium_bucket', 'mekanism:lithium', 'allfluid', 2.00)
    potting('mekanism:ethene_bucket', 'mekanism:ethene', 'allfluid', 4.00)
    potting('kubejs:fluid_creative_bucket', 'kubejs:fluid_creative', 'allfluid', 1200.00)
})


// Botany Pots - Interactions
ServerEvents.recipes(e => {
    let potting = (input, output) => {
        e.custom({
            "type": "botanypots:pot_interaction",
            "held_ingredient": {
                "tag": "minecraft:hoes"
            },
            "soil_ingredient": [{
                "item": input
            }],
            "soil_output": {
                "item": output
            },
            "sound": {
                "sound": "minecraft:item.hoe.till",
                "category": "blocks"
            }
        })
    }
    potting('minecraft:dirt', 'minecraft:farmland')
    potting('farmersdelight:rich_soil', 'farmersdelight:rich_soil_farmland')
    potting('aether:aether_dirt', 'aether:aether_farmland')
    potting('undergarden:deepsoil', 'undergarden:deepsoil_farmland')
})


// Botany Pots - Fertilizers
ServerEvents.recipes(e => {
    let potting = (fertilizer, min, max) => {
        e.custom({
            "type": "botanypots:fertilizer",
            "ingredient": {
                "item": fertilizer
            },
            "min_growth": min,
            "max_growth": max
        })
    }
    potting('minecraft:bone_meal', 200, 250)
    potting('alexscaves:fertilizer', 400, 500)
    potting('create:tree_fertilizer', 600, 750)
    potting('ars_nouveau:whirlisprig_shards', 800, 1000)
})


// Botany Pots - Crops - Dirt
ServerEvents.recipes(e => {
    let potting = (sapling, log, fruit, extrafruit, leaves, extraleaves) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": sapling
            },
            "categories": [
                "dirt",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": sapling
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": log
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 0.50,
                "output": {
                    "item": fruit
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 0.50,
                "output": {
                    "item": extrafruit
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 0.25,
                "output": {
                    "item": leaves
                },
                "minRolls": 1,
                "maxRolls": 2
            }, {
                "chance": 0.25,
                "output": {
                    "item": extraleaves
                },
                "minRolls": 1,
                "maxRolls": 2
            }, {
                "chance": 0.10,
                "output": {
                    "item": sapling
                },
                "minRolls": 1,
                "maxRolls": 2
            }]
        })
    }
    potting('twilightforest:hollow_oak_sapling', 'twilightforest:twilight_oak_log', 'twilightforest:firefly', 'twilightforest:cicada', 'twilightforest:twilight_oak_leaves', 'minecraft:vine')
})
ServerEvents.recipes(e => {
    let potting = (sapling, log, fruit, leaves, extraleaves) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": sapling
            },
            "categories": [
                "dirt",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": sapling
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": log
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 0.50,
                "output": {
                    "item": fruit
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 0.25,
                "output": {
                    "item": leaves
                },
                "minRolls": 1,
                "maxRolls": 2
            }, {
                "chance": 0.25,
                "output": {
                    "item": extraleaves
                },
                "minRolls": 1,
                "maxRolls": 2
            }, {
                "chance": 0.10,
                "output": {
                    "item": sapling
                },
                "minRolls": 1,
                "maxRolls": 2
            }]
        })
    }
    potting('lost_aether_content:crystal_sapling', 'aether:skyroot_log', 'aether:white_apple', 'aether:crystal_leaves', 'aether:crystal_fruit_leaves')
    potting('alexscaves:pewen_sapling', 'alexscaves:pewen_log', 'alexscaves:pine_nuts', 'alexscaves:pewen_branch', 'alexscaves:pewen_pines')
    potting('twilightforest:mangrove_sapling', 'twilightforest:mangrove_log', 'twilightforest:firefly', 'twilightforest:mangrove_leaves', 'minecraft:vine')
    potting('endlessbiomes:penumbral_fungus', 'endlessbiomes:penumbra_stem', 'endlessbiomes:penumbral_vines', 'endlessbiomes:penumbral_leaves', 'endlessbiomes:glowing_penumbral_leaves')
    potting('pamhc2trees:olive_sapling', 'minecraft:oak_log', 'pamhc2trees:oliveitem', 'minecraft:oak_leaves', 'pizzacraft:fruit_olive_leaves')
})
ServerEvents.recipes(e => {
    let potting = (sapling, log, extralog, leaves) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": sapling
            },
            "categories": [
                "dirt",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": sapling
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": log
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 1.00,
                "output": {
                    "item": extralog
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 0.25,
                "output": {
                    "item": leaves
                },
                "minRolls": 1,
                "maxRolls": 2
            }, {
                "chance": 0.10,
                "output": {
                    "item": sapling
                },
                "minRolls": 1,
                "maxRolls": 2
            }]
        })
    }
    potting('aether:golden_oak_sapling', 'aether:skyroot_log', 'aether:golden_oak_log', 'aether:golden_oak_leaves')
    potting('minecraft:acacia_sapling', 'minecraft:acacia_log', 'alexsmobs:acacia_blossom', 'minecraft:acacia_leaves')
    potting('twilightforest:time_sapling', 'twilightforest:time_log', 'twilightforest:time_log_core', 'twilightforest:time_leaves')
    potting('twilightforest:transformation_sapling', 'twilightforest:transformation_log', 'twilightforest:transformation_log_core', 'twilightforest:transformation_leaves')
    potting('twilightforest:mining_sapling', 'twilightforest:mining_log', 'twilightforest:mining_log_core', 'twilightforest:mining_leaves')
    potting('twilightforest:sorting_sapling', 'twilightforest:sorting_log', 'twilightforest:sorting_log_core', 'twilightforest:sorting_leaves')
})
ServerEvents.recipes(e => {
    let potting = (sapling, log, fruit, leaves) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": sapling
            },
            "categories": [
                "dirt",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": sapling
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": log
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 0.50,
                "output": {
                    "item": fruit
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 0.25,
                "output": {
                    "item": leaves
                },
                "minRolls": 1,
                "maxRolls": 2
            }, {
                "chance": 0.10,
                "output": {
                    "item": sapling
                },
                "minRolls": 1,
                "maxRolls": 2
            }]
        })
    }
    potting('minecraft:oak_sapling', 'minecraft:oak_log', 'pamhc2trees:acornitem', 'minecraft:oak_leaves')
    potting('minecraft:jungle_sapling', 'minecraft:jungle_log', 'minecraft:cocoa_beans', 'minecraft:jungle_leaves')
    potting('minecraft:cherry_sapling', 'minecraft:cherry_log', 'pamhc2trees:cherryitem', 'minecraft:cherry_leaves')
    potting('ancient_aether:sakura_sapling', 'ancient_aether:sakura_log', 'ancient_aether:sakura_blossoms', 'ancient_aether:sakura_leaves')
    potting('ars_elemental:yellow_archwood_sapling', 'ars_elemental:yellow_archwood_log', 'ars_elemental:flashpine_pod', 'ars_elemental:yellow_archwood_leaves')
    potting('ars_nouveau:blue_archwood_sapling', 'ars_nouveau:blue_archwood_log', 'ars_nouveau:frostaya_pod', 'ars_nouveau:blue_archwood_leaves')
    potting('ars_nouveau:red_archwood_sapling', 'ars_nouveau:red_archwood_log', 'ars_nouveau:bombegranate_pod', 'ars_nouveau:red_archwood_leaves')
    potting('ars_nouveau:purple_archwood_sapling', 'ars_nouveau:purple_archwood_log', 'ars_nouveau:bastion_pod', 'ars_nouveau:purple_archwood_leaves')
    potting('ars_nouveau:green_archwood_sapling', 'ars_nouveau:green_archwood_log', 'ars_nouveau:mendosteen_pod', 'ars_nouveau:green_archwood_leaves')
    potting('lost_aether_content:holiday_sapling', 'aether:skyroot_log', 'aether:decorated_holiday_leaves', 'aether:holiday_leaves')
    potting('alexscaves:ancient_sapling', 'minecraft:jungle_log', 'alexscaves:tree_star', 'alexscaves:ancient_leaves')
    potting('pamhc2trees:apple_sapling', 'minecraft:oak_log', 'minecraft:apple', 'minecraft:oak_leaves')
    potting('pamhc2trees:avocado_sapling', 'minecraft:oak_log', 'pamhc2trees:avocadoitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:candlenut_sapling', 'minecraft:oak_log', 'pamhc2trees:candlenutitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:cherry_sapling', 'minecraft:oak_log', 'pamhc2trees:cherryitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:chestnut_sapling', 'minecraft:oak_log', 'pamhc2trees:chestnutitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:gooseberry_sapling', 'minecraft:oak_log', 'pamhc2trees:gooseberryitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:lemon_sapling', 'minecraft:oak_log', 'pamhc2trees:lemonitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:nutmeg_sapling', 'minecraft:oak_log', 'pamhc2trees:nutmegitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:orange_sapling', 'minecraft:oak_log', 'pamhc2trees:orangeitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:peach_sapling', 'minecraft:oak_log', 'pamhc2trees:peachitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:pear_sapling', 'minecraft:oak_log', 'pamhc2trees:pearitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:plum_sapling', 'minecraft:oak_log', 'pamhc2trees:plumitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:walnut_sapling', 'minecraft:oak_log', 'pamhc2trees:walnutitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:spiderweb_sapling', 'minecraft:oak_log', 'minecraft:string', 'minecraft:oak_leaves')
    potting('pamhc2trees:hazelnut_sapling', 'minecraft:oak_log', 'pamhc2trees:hazelnutitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:pawpaw_sapling', 'minecraft:oak_log', 'pamhc2trees:pawpawitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:soursop_sapling', 'minecraft:oak_log', 'pamhc2trees:soursopitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:acorn_sapling', 'minecraft:oak_log', 'pamhc2trees:acornitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:almond_sapling', 'minecraft:oak_log', 'pamhc2trees:almonditem', 'minecraft:oak_leaves')
    potting('pamhc2trees:apricot_sapling', 'minecraft:oak_log', 'pamhc2trees:apricotitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:banana_sapling', 'minecraft:oak_log', 'pamhc2trees:bananaitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:cashew_sapling', 'minecraft:oak_log', 'pamhc2trees:cashewitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:cinnamon_sapling', 'minecraft:oak_log', 'pamhc2trees:cinnamonitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:coconut_sapling', 'minecraft:oak_log', 'pamhc2trees:coconutitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:date_sapling', 'minecraft:oak_log', 'pamhc2trees:dateitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:dragonfruit_sapling', 'minecraft:oak_log', 'pamhc2trees:dragonfruititem', 'minecraft:oak_leaves')
    potting('pamhc2trees:durian_sapling', 'minecraft:oak_log', 'pamhc2trees:durianitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:fig_sapling', 'minecraft:oak_log', 'pamhc2trees:figitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:grapefruit_sapling', 'minecraft:oak_log', 'pamhc2trees:grapefruititem', 'minecraft:oak_leaves')
    potting('pamhc2trees:lime_sapling', 'minecraft:oak_log', 'pamhc2trees:limeitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:mango_sapling', 'minecraft:oak_log', 'pamhc2trees:mangoitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:papaya_sapling', 'minecraft:oak_log', 'pamhc2trees:papayaitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:paperbark_sapling', 'minecraft:oak_log', 'minecraft:paper', 'minecraft:oak_leaves')
    potting('pamhc2trees:pecan_sapling', 'minecraft:oak_log', 'pamhc2trees:pecanitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:peppercorn_sapling', 'minecraft:oak_log', 'pamhc2trees:peppercornitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:persimmon_sapling', 'minecraft:oak_log', 'pamhc2trees:persimmonitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:pistachio_sapling', 'minecraft:oak_log', 'pamhc2trees:pistachioitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:pomegranate_sapling', 'minecraft:oak_log', 'pamhc2trees:pomegranateitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:starfruit_sapling', 'minecraft:oak_log', 'pamhc2trees:starfruititem', 'minecraft:oak_leaves')
    potting('pamhc2trees:vanillabean_sapling', 'minecraft:oak_log', 'pamhc2trees:vanillabeanitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:breadfruit_sapling', 'minecraft:oak_log', 'pamhc2trees:breadfruititem', 'minecraft:oak_leaves')
    potting('pamhc2trees:guava_sapling', 'minecraft:oak_log', 'pamhc2trees:guavaitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:jackfruit_sapling', 'minecraft:oak_log', 'pamhc2trees:jackfruititem', 'minecraft:oak_leaves')
    potting('pamhc2trees:lychee_sapling', 'minecraft:oak_log', 'pamhc2trees:lycheeitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:passionfruit_sapling', 'minecraft:oak_log', 'pamhc2trees:passionfruititem', 'minecraft:oak_leaves')
    potting('pamhc2trees:rambutan_sapling', 'minecraft:oak_log', 'pamhc2trees:rambutanitem', 'minecraft:oak_leaves')
    potting('pamhc2trees:tamarind_sapling', 'minecraft:oak_log', 'pamhc2trees:tamarinditem', 'minecraft:oak_leaves')
    potting('pamhc2trees:maple_sapling', 'minecraft:spruce_log', 'pamhc2trees:maplesyrupitem', 'minecraft:spruce_leaves')
    potting('pamhc2trees:pinenut_sapling', 'minecraft:spruce_log', 'pamhc2trees:pinenutitem', 'minecraft:spruce_leaves')
    potting('beachparty:palm_sapling', 'beachparty:palm_log', 'beachparty:coconut', 'beachparty:palm_leaves')
    potting('deeperdarker:echo_sapling', 'deeperdarker:echo_log', 'deeperdarker:sculk_gleam', 'deeperdarker:echo_leaves')
    potting('undergarden:wigglewood_sapling', 'undergarden:wigglewood_log', 'undergarden:twistytwig', 'undergarden:wigglewood_leaves')
    potting('vinery:cherry_sapling', 'vinery:cherry_log', 'vinery:cherry', 'vinery:cherry_leaves')
    potting('vinery:apple_tree_sapling', 'vinery:apple_log', 'minecraft:apple', 'vinery:apple_leaves')
    potting('twilightforest:canopy_sapling', 'twilightforest:canopy_log', 'twilightforest:firefly', 'twilightforest:canopy_leaves')
    potting('pizzacraft:olive_sapling', 'pizzacraft:olive_log', 'pizzacraft:olive', 'pizzacraft:olive_leaves')
    potting('undergarden:veil_mushroom', 'undergarden:veil_mushroom_stem', 'undergarden:mushroom_veil', 'undergarden:veil_mushroom_cap')
})
ServerEvents.recipes(e => {
    let potting = (sapling, log, leaves, extraleaves) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": sapling
            },
            "categories": [
                "dirt",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": sapling
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": log
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 0.25,
                "output": {
                    "item": leaves
                },
                "minRolls": 1,
                "maxRolls": 2
            }, {
                "chance": 0.25,
                "output": {
                    "item": extraleaves
                },
                "minRolls": 1,
                "maxRolls": 2
            }, {
                "chance": 0.10,
                "output": {
                    "item": sapling
                },
                "minRolls": 1,
                "maxRolls": 2
            }]
        })
    }
    potting('lost_aether_content:holiday_sapling', 'aether:skyroot_log', 'aether:holiday_leaves', 'aether:decorated_holiday_leaves')
    potting('biomesoplenty:flowering_oak_sapling', 'minecraft:oak_log', 'minecraft:oak_leaves', 'biomesoplenty:flowering_oak_leaves')
    potting('biomesoplenty:willow_sapling', 'biomesoplenty:willow_log', 'biomesoplenty:willow_leaves', 'biomesoplenty:willow_vine')
    potting('undergarden:blood_mushroom', 'undergarden:blood_mushroom_stem', 'undergarden:blood_mushroom_cap', 'undergarden:engorged_blood_mushroom_cap')
})
ServerEvents.recipes(e => {
    let potting = (sapling, log, leaves) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": sapling
            },
            "categories": [
                "dirt",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": sapling
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": log
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 0.25,
                "output": {
                    "item": leaves
                },
                "minRolls": 1,
                "maxRolls": 2
            }, {
                "chance": 0.10,
                "output": {
                    "item": sapling
                },
                "minRolls": 1,
                "maxRolls": 2
            }]
        })
    }
    potting('minecraft:spruce_sapling', 'minecraft:spruce_log', 'minecraft:spruce_leaves')
    potting('minecraft:birch_sapling', 'minecraft:birch_log', 'minecraft:birch_leaves')
    potting('minecraft:dark_oak_sapling', 'minecraft:dark_oak_log', 'minecraft:dark_oak_leaves')
    potting('minecraft:mangrove_propagule', 'minecraft:mangrove_log', 'minecraft:mangrove_leaves')
    potting('ancient_aether:crystal_skyroot_sapling', 'aether:skyroot_log', 'ancient_aether:crystal_skyroot_leaves')
    potting('ancient_aether:enchanted_skyroot_sapling', 'aether:skyroot_log', 'ancient_aether:enchanted_skyroot_leaves')
    potting('ancient_aether:skyroot_pine_sapling', 'aether:skyroot_log', 'ancient_aether:skyroot_pine_leaves')
    potting('ancient_aether:highsproot_sapling', 'ancient_aether:highsproot_log', 'ancient_aether:highsproot_leaves')
    potting('aether:skyroot_sapling', 'aether:skyroot_log', 'aether:skyroot_leaves')
    potting('alexscaves:thornwood_sapling', 'alexscaves:thornwood_log', 'alexscaves:thornwood_branch')
    potting('biomesoplenty:origin_sapling', 'minecraft:oak_log', 'biomesoplenty:origin_leaves')
    potting('biomesoplenty:snowblossom_sapling', 'minecraft:cherry_log', 'biomesoplenty:snowblossom_leaves')
    potting('biomesoplenty:rainbow_birch_sapling', 'minecraft:birch_log', 'biomesoplenty:rainbow_birch_leaves')
    potting('biomesoplenty:yellow_autumn_sapling', 'minecraft:birch_log', 'biomesoplenty:yellow_autumn_leaves')
    potting('biomesoplenty:orange_autumn_sapling', 'minecraft:dark_oak_log', 'biomesoplenty:orange_autumn_leaves')
    potting('biomesoplenty:maple_sapling', 'minecraft:oak_log', 'biomesoplenty:maple_leaves')
    potting('biomesoplenty:fir_sapling', 'biomesoplenty:fir_log', 'biomesoplenty:fir_leaves')
    potting('biomesoplenty:redwood_sapling', 'biomesoplenty:redwood_log', 'biomesoplenty:redwood_leaves')
    potting('biomesoplenty:mahogany_sapling', 'biomesoplenty:mahogany_log', 'biomesoplenty:mahogany_leaves')
    potting('biomesoplenty:jacaranda_sapling', 'biomesoplenty:jacaranda_log', 'biomesoplenty:jacaranda_leaves')
    potting('biomesoplenty:palm_sapling', 'biomesoplenty:palm_log', 'biomesoplenty:palm_leaves')
    potting('biomesoplenty:dead_sapling', 'biomesoplenty:dead_log', 'biomesoplenty:dead_leaves')
    potting('biomesoplenty:magic_sapling', 'biomesoplenty:magic_log', 'biomesoplenty:magic_leaves')
    potting('biomesoplenty:umbran_sapling', 'biomesoplenty:umbran_log', 'biomesoplenty:umbran_leaves')
    potting('biomesoplenty:hellbark_sapling', 'biomesoplenty:hellbark_log', 'biomesoplenty:hellbark_leaves')
    potting('farmersdelight:wild_potatoes', 'minecraft:potato', 'minecraft:poisonous_potato')
    potting('farmersdelight:wild_rice', 'farmersdelight:rice_panicle', 'farmersdelight:rice')
    potting('eidolon:illwood_sapling', 'eidolon:illwood_log', 'eidolon:illwood_leaves')
    potting('meadow:pine_sapling', 'meadow:pine_log', 'meadow:pine_leaves')
    potting('nifty:redoak_sapling', 'nifty:redoak_log', 'nifty:redoak_leaves')
    potting('nifty:maple_sapling', 'nifty:maple_log', 'nifty:maple_leaves')
    potting('nifty:rubber_sapling', 'nifty:rubber_log', 'nifty:rubber_leaves')
    potting('undergarden:smogstem_sapling', 'undergarden:smogstem_log', 'undergarden:smogstem_leaves')
    potting('undergarden:grongle_sapling', 'undergarden:grongle_log', 'undergarden:grongle_leaves')
    potting('twilightforest:twilight_oak_sapling', 'twilightforest:twilight_oak_log', 'twilightforest:twilight_oak_leaves')
    potting('twilightforest:darkwood_sapling', 'twilightforest:dark_log', 'twilightforest:dark_leaves')
    potting('twilightforest:rainbow_oak_sapling', 'twilightforest:twilight_oak_log', 'twilightforest:rainbow_oak_leaves')
    potting('minecraft:brown_mushroom', 'minecraft:mushroom_stem', 'minecraft:brown_mushroom_block')
    potting('minecraft:red_mushroom', 'minecraft:mushroom_stem', 'minecraft:red_mushroom_block')
    potting('undergarden:indigo_mushroom', 'undergarden:indigo_mushroom_stem', 'undergarden:indigo_mushroom_cap')
    potting('undergarden:ink_mushroom', 'undergarden:ink_mushroom_stem', 'undergarden:ink_mushroom_cap')
})
ServerEvents.recipes(e => {
    let potting = (sapling, leaves, fruit) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": sapling
            },
            "categories": [
                "dirt",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": sapling
            },
            "drops": [{
                "chance": 0.50,
                "output": {
                    "item": fruit
                },
                "minRolls": 1,
                "maxRolls": 2
            }, {
                "chance": 0.25,
                "output": {
                    "item": leaves
                },
                "minRolls": 1,
                "maxRolls": 2
            }, {
                "chance": 0.10,
                "output": {
                    "item": sapling
                },
                "minRolls": 1,
                "maxRolls": 2
            }]
        })
    }
    potting('minecraft:azalea', 'minecraft:azalea_leaves', 'twigs:azalea_flowers')
    potting('minecraft:flowering_azalea', 'minecraft:flowering_azalea_leaves', 'twigs:azalea_flowers')
})
ServerEvents.recipes(e => {
    let potting = (seed, veggie, display) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": seed
            },
            "categories": [
                "dirt",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": display
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": veggie
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 0.10,
                "output": {
                    "item": seed
                },
                "minRolls": 2,
                "maxRolls": 4
            }]
        })
    }
    potting('pamhc2crops:agaveseeditem', 'pamhc2crops:agaveitem', 'pamhc2crops:pamagavecrop')
    potting('pamhc2crops:amaranthseeditem', 'pamhc2crops:amaranthitem', 'pamhc2crops:pamamaranthcrop')
    potting('pamhc2crops:arrowrootseeditem', 'pamhc2crops:arrowrootitem', 'pamhc2crops:pamarrowrootcrop')
    potting('pamhc2crops:artichokeseeditem', 'pamhc2crops:artichokeitem', 'pamhc2crops:pamartichokecrop')
    potting('pamhc2crops:asparagusseeditem', 'pamhc2crops:asparagusitem', 'pamhc2crops:pamasparaguscrop')
    potting('pamhc2crops:barleyseeditem', 'pamhc2crops:barleyitem', 'pamhc2crops:pambarleycrop')
    potting('pamhc2crops:beanseeditem', 'pamhc2crops:beanitem', 'pamhc2crops:pambeancrop')
    potting('pamhc2crops:bellpepperseeditem', 'pamhc2crops:bellpepperitem', 'pamhc2crops:pambellpeppercrop')
    potting('pamhc2crops:blackberryseeditem', 'pamhc2crops:blackberryitem', 'pamhc2crops:pamblackberrycrop')
    potting('pamhc2crops:blueberryseeditem', 'pamhc2crops:blueberryitem', 'pamhc2crops:pamblueberrycrop')
    potting('pamhc2crops:broccoliseeditem', 'pamhc2crops:broccoliitem', 'pamhc2crops:pambroccolicrop')
    potting('pamhc2crops:brusselsproutseeditem', 'pamhc2crops:brusselsproutitem', 'pamhc2crops:pambrusselsproutcrop')
    potting('pamhc2crops:cabbageseeditem', 'pamhc2crops:cabbageitem', 'pamhc2crops:pamcabbagecrop')
    potting('pamhc2crops:cactusfruitseeditem', 'pamhc2crops:cactusfruititem', 'pamhc2crops:pamcactusfruitcrop')
    potting('pamhc2crops:candleberryseeditem', 'pamhc2crops:candleberryitem', 'pamhc2crops:pamcandleberrycrop')
    potting('pamhc2crops:cantaloupeseeditem', 'pamhc2crops:cantaloupeitem', 'pamhc2crops:pamcantaloupecrop')
    potting('pamhc2crops:cassavaseeditem', 'pamhc2crops:cassavaitem', 'pamhc2crops:pamcassavacrop')
    potting('pamhc2crops:cauliflowerseeditem', 'pamhc2crops:caulifloweritem', 'pamhc2crops:pamcauliflowercrop')
    potting('pamhc2crops:celeryseeditem', 'pamhc2crops:celeryitem', 'pamhc2crops:pamcelerycrop')
    potting('pamhc2crops:chickpeaseeditem', 'pamhc2crops:chickpeaitem', 'pamhc2crops:pamchickpeacrop')
    potting('pamhc2crops:chilipepperseeditem', 'pamhc2crops:chilipepperitem', 'pamhc2crops:pamchilipeppercrop')
    potting('pamhc2crops:coffeebeanseeditem', 'pamhc2crops:coffeebeanitem', 'pamhc2crops:pamcoffeebeancrop')
    potting('pamhc2crops:cornseeditem', 'pamhc2crops:cornitem', 'pamhc2crops:pamcorncrop')
    potting('pamhc2crops:cottonseeditem', 'pamhc2crops:cottonitem', 'pamhc2crops:pamcottoncrop')
    potting('pamhc2crops:cranberryseeditem', 'pamhc2crops:cranberryitem', 'pamhc2crops:pamcranberrycrop')
    potting('pamhc2crops:cucumberseeditem', 'pamhc2crops:cucumberitem', 'pamhc2crops:pamcucumbercrop')
    potting('pamhc2crops:eggplantseeditem', 'pamhc2crops:eggplantitem', 'pamhc2crops:pameggplantcrop')
    potting('pamhc2crops:elderberryseeditem', 'pamhc2crops:elderberryitem', 'pamhc2crops:pamelderberrycrop')
    potting('pamhc2crops:flaxseeditem', 'pamhc2crops:flaxitem', 'pamhc2crops:pamflaxcrop')
    potting('pamhc2crops:garlicseeditem', 'pamhc2crops:garlicitem', 'pamhc2crops:pamgarliccrop')
    potting('pamhc2crops:gingerseeditem', 'pamhc2crops:gingeritem', 'pamhc2crops:pamgingercrop')
    potting('pamhc2crops:grapeseeditem', 'pamhc2crops:grapeitem', 'pamhc2crops:pamgrapecrop')
    potting('pamhc2crops:greengrapeseeditem', 'pamhc2crops:greengrapeitem', 'pamhc2crops:pamgreengrapecrop')
    potting('pamhc2crops:huckleberryseeditem', 'pamhc2crops:huckleberryitem', 'pamhc2crops:pamhuckleberrycrop')
    potting('pamhc2crops:jicamaseeditem', 'pamhc2crops:jicamaitem', 'pamhc2crops:pamjicamacrop')
    potting('pamhc2crops:juniperberryseeditem', 'pamhc2crops:juniperberryitem', 'pamhc2crops:pamjuniperberrycrop')
    potting('pamhc2crops:juteseeditem', 'pamhc2crops:juteitem', 'pamhc2crops:pamjutecrop')
    potting('pamhc2crops:kaleseeditem', 'pamhc2crops:kaleitem', 'pamhc2crops:pamkalecrop')
    potting('pamhc2crops:kenafseeditem', 'pamhc2crops:kenafitem', 'pamhc2crops:pamkenafcrop')
    potting('pamhc2crops:kiwiseeditem', 'pamhc2crops:kiwiitem', 'pamhc2crops:pamkiwicrop')
    potting('pamhc2crops:kohlrabiseeditem', 'pamhc2crops:kohlrabiitem', 'pamhc2crops:pamkohlrabicrop')
    potting('pamhc2crops:leekseeditem', 'pamhc2crops:leekitem', 'pamhc2crops:pamleekcrop')
    potting('pamhc2crops:lentilseeditem', 'pamhc2crops:lentilitem', 'pamhc2crops:pamlentilcrop')
    potting('pamhc2crops:lettuceseeditem', 'pamhc2crops:lettuceitem', 'pamhc2crops:pamlettucecrop')
    potting('pamhc2crops:milletseeditem', 'pamhc2crops:milletitem', 'pamhc2crops:pammilletcrop')
    potting('pamhc2crops:mulberryseeditem', 'pamhc2crops:mulberryitem', 'pamhc2crops:pammulberrycrop')
    potting('pamhc2crops:mustardseedsseeditem', 'pamhc2crops:mustardseedsitem', 'pamhc2crops:pammustardseedscrop')
    potting('pamhc2crops:oatsseeditem', 'pamhc2crops:oatsitem', 'pamhc2crops:pamoatscrop')
    potting('pamhc2crops:okraseeditem', 'pamhc2crops:okraitem', 'pamhc2crops:pamokracrop')
    potting('pamhc2crops:onionseeditem', 'pamhc2crops:onionitem', 'pamhc2crops:pamonioncrop')
    potting('pamhc2crops:parsnipseeditem', 'pamhc2crops:parsnipitem', 'pamhc2crops:pamparsnipcrop')
    potting('pamhc2crops:peanutseeditem', 'pamhc2crops:peanutitem', 'pamhc2crops:pampeanutcrop')
    potting('pamhc2crops:peasseeditem', 'pamhc2crops:peasitem', 'pamhc2crops:pampeascrop')
    potting('pamhc2crops:pineappleseeditem', 'pamhc2crops:pineappleitem', 'pamhc2crops:pampineapplecrop')
    potting('pamhc2crops:quinoaseeditem', 'pamhc2crops:quinoaitem', 'pamhc2crops:pamquinoacrop')
    potting('pamhc2crops:radishseeditem', 'pamhc2crops:radishitem', 'pamhc2crops:pamradishcrop')
    potting('pamhc2crops:raspberryseeditem', 'pamhc2crops:raspberryitem', 'pamhc2crops:pamraspberrycrop')
    potting('pamhc2crops:rhubarbseeditem', 'pamhc2crops:rhubarbitem', 'pamhc2crops:pamrhubarbcrop')
    potting('pamhc2crops:riceseeditem', 'pamhc2crops:riceitem', 'pamhc2crops:pamricecrop')
    potting('pamhc2crops:rutabagaseeditem', 'pamhc2crops:rutabagaitem', 'pamhc2crops:pamrutabagacrop')
    potting('pamhc2crops:ryeseeditem', 'pamhc2crops:ryeitem', 'pamhc2crops:pamryecrop')
    potting('pamhc2crops:scallionseeditem', 'pamhc2crops:scallionitem', 'pamhc2crops:pamscallioncrop')
    potting('pamhc2crops:sesameseedsseeditem', 'pamhc2crops:sesameseedsitem', 'pamhc2crops:pamsesameseedscrop')
    potting('pamhc2crops:sisalseeditem', 'pamhc2crops:sisalitem', 'pamhc2crops:pamsisalcrop')
    potting('pamhc2crops:soybeanseeditem', 'pamhc2crops:soybeanitem', 'pamhc2crops:pamsoybeancrop')
    potting('pamhc2crops:spiceleafseeditem', 'pamhc2crops:spiceleafitem', 'pamhc2crops:pamspiceleafcrop')
    potting('pamhc2crops:spinachseeditem', 'pamhc2crops:spinachitem', 'pamhc2crops:pamspinachcrop')
    potting('pamhc2crops:strawberryseeditem', 'pamhc2crops:strawberryitem', 'pamhc2crops:pamstrawberrycrop')
    potting('pamhc2crops:sweetpotatoseeditem', 'pamhc2crops:sweetpotatoitem', 'pamhc2crops:pamsweetpotatocrop')
    potting('pamhc2crops:taroseeditem', 'pamhc2crops:taroitem', 'pamhc2crops:pamtarocrop')
    potting('pamhc2crops:tealeafseeditem', 'pamhc2crops:tealeafitem', 'pamhc2crops:pamtealeafcrop')
    potting('pamhc2crops:tomatilloseeditem', 'pamhc2crops:tomatilloitem', 'pamhc2crops:pamtomatillocrop')
    potting('pamhc2crops:tomatoseeditem', 'pamhc2crops:tomatoitem', 'pamhc2crops:pamtomatocrop')
    potting('pamhc2crops:turnipseeditem', 'pamhc2crops:turnipitem', 'pamhc2crops:pamturnipcrop')
    potting('pamhc2crops:waterchestnutseeditem', 'pamhc2crops:waterchestnutitem', 'pamhc2crops:pamwaterchestnutcrop')
    potting('pamhc2crops:whitemushroomseeditem', 'pamhc2crops:whitemushroomitem', 'pamhc2crops:pamwhitemushroomcrop')
    potting('pamhc2crops:wintersquashseeditem', 'pamhc2crops:wintersquashitem', 'pamhc2crops:pamwintersquashcrop')
    potting('pamhc2crops:zucchiniseeditem', 'pamhc2crops:zucchiniitem', 'pamhc2crops:pamzucchinicrop')
    potting('pamhc2crops:alfalfaseeditem', 'pamhc2crops:alfalfaitem', 'pamhc2crops:pamalfalfacrop')
    potting('pamhc2crops:aloeseeditem', 'pamhc2crops:aloeitem', 'pamhc2crops:pamaloecrop')
    potting('pamhc2crops:barrelcactusseeditem', 'pamhc2crops:barrelcactusitem', 'pamhc2crops:pambarrelcactuscrop')
    potting('pamhc2crops:canolaseeditem', 'pamhc2crops:canolaitem', 'pamhc2crops:pamcanolacrop')
    potting('pamhc2crops:cattailseeditem', 'pamhc2crops:cattailitem', 'pamhc2crops:pamcattailcrop')
    potting('pamhc2crops:chiaseeditem', 'pamhc2crops:chiaitem', 'pamhc2crops:pamchiacrop')
    potting('pamhc2crops:cloudberryseeditem', 'pamhc2crops:cloudberryitem', 'pamhc2crops:pamcloudberrycrop')
    potting('pamhc2crops:lotusseeditem', 'pamhc2crops:lotusitem', 'pamhc2crops:pamlotuscrop')
    potting('pamhc2crops:nettlesseeditem', 'pamhc2crops:nettlesitem', 'pamhc2crops:pamnettlescrop')
    potting('pamhc2crops:nopalesseeditem', 'pamhc2crops:nopalesitem', 'pamhc2crops:pamnopalescrop')
    potting('pamhc2crops:sorghumseeditem', 'pamhc2crops:sorghumitem', 'pamhc2crops:pamsorghumcrop')
    potting('pamhc2crops:truffleseeditem', 'pamhc2crops:truffleitem', 'pamhc2crops:pamtrufflecrop')
    potting('pamhc2crops:wolfberryseeditem', 'pamhc2crops:wolfberryitem', 'pamhc2crops:pamwolfberrycrop')
    potting('pamhc2crops:yuccaseeditem', 'pamhc2crops:yuccaitem', 'pamhc2crops:pamyuccacrop')
    potting('pamhc2crops:bokchoyseeditem', 'pamhc2crops:bokchoyitem', 'pamhc2crops:pambokchoycrop')
    potting('pamhc2crops:calabashseeditem', 'pamhc2crops:calabashitem', 'pamhc2crops:pamcalabashcrop')
    potting('pamhc2crops:guaranaseeditem', 'pamhc2crops:guaranaitem', 'pamhc2crops:pamguaranacrop')
    potting('pamhc2crops:papyrusseeditem', 'pamhc2crops:papyrusitem', 'pamhc2crops:pampapyruscrop')
    potting('pamhc2crops:sunchokeseeditem', 'pamhc2crops:sunchokeitem', 'pamhc2crops:pamsunchokecrop')
})
ServerEvents.recipes(e => {
    let potting = (seed, veggie) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": seed
            },
            "categories": [
                "dirt",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": seed
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": veggie
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 1.00,
                "output": {
                    "item": seed
                },
                "minRolls": 2,
                "maxRolls": 4
            }]
        })
    }
    potting('minecraft:grass', 'minecraft:tall_grass')
    potting('minecraft:fern', 'minecraft:large_fern')
    potting('minecraft:big_dripleaf', 'minecraft:small_dripleaf')
    potting('ars_nouveau:magebloom_crop', 'ars_nouveau:magebloom')
    potting('farmersdelight:wild_beetroots', 'minecraft:beetroot')
    potting('farmersdelight:wild_cabbages', 'farmersdelight:cabbage')
    potting('farmersdelight:wild_carrots', 'minecraft:carrot')
    potting('farmersdelight:wild_onions', 'farmersdelight:onion')
    potting('farmersdelight:wild_tomatoes', 'farmersdelight:tomato')
})

ServerEvents.recipes(e => {
    let potting = (seed, display) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": seed
            },
            "categories": [
                "dirt",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": display
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": seed
                },
                "minRolls": 2,
                "maxRolls": 4
            }]
        })
    }
    potting('undergarden:droopvine_item', 'undergarden:droopvine_plant')
})
ServerEvents.recipes(e => {
    let potting = (seed) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": seed
            },
            "categories": [
                "dirt",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": seed
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": seed
                },
                "minRolls": 2,
                "maxRolls": 4
            }]
        })
    }
    potting('minecraft:bamboo')
    potting('minecraft:cactus')
    potting('minecraft:dead_bush')
    potting('minecraft:dandelion')
    potting('minecraft:poppy')
    potting('minecraft:blue_orchid')
    potting('minecraft:allium')
    potting('minecraft:azure_bluet')
    potting('minecraft:red_tulip')
    potting('minecraft:orange_tulip')
    potting('minecraft:white_tulip')
    potting('minecraft:pink_tulip')
    potting('minecraft:oxeye_daisy')
    potting('minecraft:cornflower')
    potting('minecraft:lily_of_the_valley')
    potting('minecraft:wither_rose')
    potting('minecraft:pink_petals')
    potting('minecraft:spore_blossom')
    potting('minecraft:vine')
    potting('minecraft:sunflower')
    potting('minecraft:lilac')
    potting('minecraft:rose_bush')
    potting('minecraft:peony')
    potting('minecraft:sugar_cane')
    potting('aether:purple_flower')
    potting('aether:white_flower')
    potting('ancient_aether:sky_blues')
    potting('ancient_aether:wynd_thistle')
    potting('betterarcheology:growth_totem')
    potting('biomesoplenty:blue_hydrangea')
    potting('biomesoplenty:burning_blossom')
    potting('biomesoplenty:clover')
    potting('biomesoplenty:glowflower')
    potting('biomesoplenty:goldenrod')
    potting('biomesoplenty:icy_iris')
    potting('biomesoplenty:lavender')
    potting('biomesoplenty:orange_cosmos')
    potting('biomesoplenty:pink_daffodil')
    potting('biomesoplenty:pink_hibiscus')
    potting('biomesoplenty:rose')
    potting('biomesoplenty:sprout')
    potting('biomesoplenty:tall_lavender')
    potting('biomesoplenty:violet')
    potting('biomesoplenty:waterlily')
    potting('biomesoplenty:white_petals')
    potting('biomesoplenty:wildflower')
    potting('biomesoplenty:wilted_lily')
    potting('candlelight:rose')
    potting('corn_delight:wild_corn')
    potting('cyclic:flower_cyan')
    potting('cyclic:flower_lime_carnation')
    potting('cyclic:flower_absalon_tulip')
    potting('deeperdarker:sculk_tendrils')
    potting('deeperdarker:sculk_vines')
    potting('endlessbiomes:reaching_vines')
    potting('enlightened_end:cradling_flower')
    potting('enlightened_end:cerulean_vine')
    potting('meadow:alpine_poppy')
    potting('meadow:delphinium')
    potting('meadow:enzian')
    potting('meadow:eriophorum')
    potting('meadow:eriophorum_tall')
    potting('meadow:fire_lily')
    potting('meadow:saxifrage')
    potting('naturalist:cattail')
    potting('nethersdelight:mimicarnation')
    potting('supplementaries:wild_flax')
    potting('twilightforest:mayapple')
    potting('twilightforest:thorn_rose')
    potting('undergarden:amorous_bristle')
    potting('undergarden:butterbunch')
    potting('undergarden:miserabell')
    potting('undergarden:shimmerweed')
    potting('undergarden:tall_shimmerweed')
})


// Botany Pots - Crops - Nether
ServerEvents.recipes(e => {
    let potting = (sapling, log, fruit, leaves) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": sapling
            },
            "categories": [
                "nether",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": sapling
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": log
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 0.50,
                "output": {
                    "item": fruit
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 0.25,
                "output": {
                    "item": leaves
                },
                "minRolls": 1,
                "maxRolls": 2
            }, {
                "chance": 0.10,
                "output": {
                    "item": sapling
                },
                "minRolls": 1,
                "maxRolls": 2
            }]
        })
    }
    potting('minecraft:crimson_fungus', 'minecraft:crimson_stem', 'minecraft:shroomlight', 'minecraft:nether_wart_block')
    potting('minecraft:warped_fungus', 'minecraft:warped_stem', 'minecraft:shroomlight', 'minecraft:warped_wart_block')
})
ServerEvents.recipes(e => {
    let potting = (seed, veggie) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": seed
            },
            "categories": [
                "nether",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": seed
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": veggie
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 1.00,
                "output": {
                    "item": seed
                },
                "minRolls": 2,
                "maxRolls": 4
            }]
        })
    }
    potting('minecraft:warped_roots', 'minecraft:nether_sprouts')
})
ServerEvents.recipes(e => {
    let potting = (seed) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": seed
            },
            "categories": [
                "nether",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": seed
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": seed
                },
                "minRolls": 2,
                "maxRolls": 4
            }]
        })
    }
    potting('minecraft:crimson_roots')
    potting('minecraft:weeping_vines')
    potting('minecraft:twisting_vines')
    potting('minecraft:nether_wart')
})


// Botany Pots - Crops - End
ServerEvents.recipes(e => {
    let potting = (seed, veggie, extraveggie) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": seed
            },
            "categories": [
                "end",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": seed
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": veggie
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 1.00,
                "output": {
                    "item": extraveggie
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 1.00,
                "output": {
                    "item": seed
                },
                "minRolls": 2,
                "maxRolls": 4
            }]
        })
    }
    potting( 'minecraft:chorus_flower', 'minecraft:chorus_plant', 'minecraft:chorus_fruit')
})


// Botany Pots - Crops - Water
ServerEvents.recipes(e => {
    let potting = (seed, stuff, extrastuff) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": seed
            },
            "categories": [
                "water",
                "allfluid"
            ],
            "growthTicks": 1200,
            "display": {
                "block": seed
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": seed
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 1.00,
                "output": {
                    "item": stuff
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 1.00,
                "output": {
                    "item": extrastuff
                },
                "minRolls": 2,
                "maxRolls": 4
            }]
        })
    }
    potting('minecraft:tube_coral_block', 'minecraft:tube_coral', 'minecraft:tube_coral_fan')
    potting('minecraft:brain_coral_block', 'minecraft:brain_coral', 'minecraft:brain_coral_fan')
    potting('minecraft:bubble_coral_block', 'minecraft:bubble_coral', 'minecraft:bubble_coral_fan')
    potting('minecraft:fire_coral_block', 'minecraft:fire_coral', 'minecraft:fire_coral_fan')
    potting('minecraft:horn_coral_block', 'minecraft:horn_coral', 'minecraft:horn_coral_fan')
})
ServerEvents.recipes(e => {
    let potting = (seed) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": seed
            },
            "categories": [
                "water",
                "allfluid"
            ],
            "growthTicks": 1200,
            "display": {
                "block": seed
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": seed
                },
                "minRolls": 2,
                "maxRolls": 4
            }]
        })
    }
    potting('minecraft:lily_pad')
    potting('minecraft:seagrass')
    potting('minecraft:sea_pickle')
    potting('minecraft:kelp')
})


// Botany Pots - Crops - Lava


// Botany Pots - Crops - Other
ServerEvents.recipes(e => {
    let potting = (seed, veggie, extraveggie, display) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": seed
            },
            "categories": [
                "dirt",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": display
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": veggie
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 1.00,
                "output": {
                    "item": extraveggie
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 1.00,
                "output": {
                    "item": seed
                },
                "minRolls": 2,
                "maxRolls": 4
            }]
        })
    }
    potting('minecraft:melon_seeds', 'minecraft:melon', 'minecraft:melon_slice', 'minecraft:melon')
})
ServerEvents.recipes(e => {
    let potting = (seed, veggie, display) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": seed
            },
            "categories": [
                "dirt",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": display
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": veggie
                },
                "minRolls": 2,
                "maxRolls": 4
            }, {
                "chance": 1.00,
                "output": {
                    "item": seed
                },
                "minRolls": 2,
                "maxRolls": 4
            }]
        })
    }
    potting('minecraft:wheat_seeds', 'minecraft:wheat', 'minecraft:wheat')
    potting('minecraft:potato', 'minecraft:poisonous_potato', 'minecraft:potatoes')
    potting('minecraft:beetroot_seeds', 'minecraft:beetroot', 'minecraft:beetroots')
    potting('minecraft:pumpkin_seeds', 'minecraft:pumpkin', 'minecraft:pumpkin')
    potting('minecraft:torchflower_seeds', 'minecraft:torchflower', 'minecraft:torchflower')
    potting('minecraft:pitcher_pod', 'minecraft:pitcher_plant', 'minecraft:pitcher_plant')
    potting('bakery:strawberry_seeds', 'bakery:strawberry', 'bakery:strawberry_crop')
    potting('bakery:oat_seeds', 'bakery:oat', 'bakery:oat_crop')
    potting('candlelight:tomato_seeds', 'candlelight:tomato', 'candlelight:tomato_crop')
    potting('candlelight:lettuce_seeds', 'candlelight:lettuce', 'candlelight:lettuce_crop')
    potting('enlightened_end:elevibloom_seeds', 'enlightened_end:elevibloom', 'enlightened_end:elevibloom_3')
    potting('farmersdelight:cabbage_seeds', 'farmersdelight:cabbage', 'farmersdelight:cabbages')
    potting('farmersdelight:tomato_seeds', 'farmersdelight:tomato', 'farmersdelight:tomatoes')
    potting('nifty:orange_seeds', 'nifty:orange', 'nifty:orange_crop')
    potting('nifty:pear_seeds', 'nifty:pear', 'nifty:pear_crop')
    potting('nifty:tomato_seeds', 'nifty:tomato', 'nifty:tomato_crop')
    potting('nifty:flax_seeds', 'nifty:flax', 'nifty:flax_crop')
    potting('pizzacraft:broccoli_seeds', 'pizzacraft:broccoli', 'pizzacraft:broccoli')
    potting('pizzacraft:cucumber_seeds', 'pizzacraft:cucumber', 'pizzacraft:cucumbers')
    potting('pizzacraft:pepper_seeds', 'pizzacraft:pepper', 'pizzacraft:peppers')
    potting('pizzacraft:pineapple_seeds', 'pizzacraft:pineapple', 'pizzacraft:pineapple')
    potting('pizzacraft:tomato_seeds', 'pizzacraft:tomato', 'pizzacraft:tomatoes')
    potting('supplementaries:flax_seeds', 'supplementaries:flax', 'supplementaries:flax')
    potting('undergarden:gloomgourd_seeds', 'undergarden:gloomgourd', 'undergarden:gloomgourd')
    potting('vinery:red_grape_seeds', 'vinery:red_grape', 'vinery:red_grape_bush')
    potting('vinery:white_grape_seeds', 'vinery:white_grape', 'vinery:white_grape_bush')
    potting('vinery:savanna_grape_seeds_red', 'vinery:savanna_grapes_red', 'vinery:savanna_grape_bush_red')
    potting('vinery:savanna_grape_seeds_white', 'vinery:savanna_grapes_white', 'vinery:savanna_grape_bush_white')
    potting('vinery:taiga_grape_seeds_red', 'vinery:taiga_grapes_red', 'vinery:taiga_grape_bush_red')
    potting('vinery:taiga_grape_seeds_white', 'vinery:taiga_grapes_white', 'vinery:taiga_grape_bush_white')
    potting('vinery:jungle_grape_seeds_red', 'vinery:jungle_grapes_red', 'vinery:jungle_grape_bush_red')
    potting('vinery:jungle_grape_seeds_white', 'vinery:jungle_grapes_white', 'vinery:jungle_grape_bush_white')
})
ServerEvents.recipes(e => {
    let potting = (seed, display) => {
        e.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": seed
            },
            "categories": [
                "dirt",
                "allsoil"
            ],
            "growthTicks": 1200,
            "display": {
                "block": display
            },
            "drops": [{
                "chance": 1.00,
                "output": {
                    "item": seed
                },
                "minRolls": 2,
                "maxRolls": 4
            }]
        })
    }
    potting('minecraft:carrot', 'minecraft:carrots')
    potting('minecraft:glow_berries', 'minecraft:cave_vines')
    potting('minecraft:sweet_berries', 'minecraft:sweet_berry_bush')
})