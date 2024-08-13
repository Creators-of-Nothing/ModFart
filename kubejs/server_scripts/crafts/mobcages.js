// Changed crafts
ServerEvents.recipes(e => {
    e.remove({ id: /alexsmobs:bosses/ })
    e.remove({ id: /alexsmobs:environments/ })
    e.remove({ id: /alexsmobs:entities/ })
    e.remove({ id: /aquaculture:entities/ })
    e.remove({ id: /botania:bosses/ })
    e.remove({ id: /botania:environments/ })
    e.remove({ id: 'cagedmobs:additional_loot/brown_mushroom' })
    e.remove({ id: 'cagedmobs:additional_loot/dragon_head' })
    e.remove({ id: 'cagedmobs:additional_loot/red_mushroom' })
    /*e.remove({ id: 'cagedmobs:additional_loot/wither_rose' })*/
    e.remove({ id: /cagedmobs:bosses/ })
    e.remove({ id: /cagedmobs:environments/ })
    e.remove({ id: /cagedmobs:entities/ })
    e.remove({ id: /twilightforest:bosses/ })
    e.remove({ id: /twilightforest:environments/ })
    e.remove({ id: /twilightforest:entities/ })
})


// Special DNA
ServerEvents.recipes(e => {
    let potting = (tier, output) => {
        e.custom({
                "type": "crafting_shapeless",
                "ingredients": [
                    {
                        "item": tier
                    },
                    {
                        "item": "create_sa:brass_cube"
                    }
                ],
                "result": {
                    "item": tier,
                    "nbt": output
                }
            })
    }
    potting('cagedmobs:dna_sampler', '{entity:\"create_sa:brass_cube_r\"}')
    potting('cagedmobs:diamond_dna_sampler', '{entity:\"create_sa:brass_cube_r\"}')
    potting('cagedmobs:netherite_dna_sampler', '{entity:\"create_sa:brass_cube_r\"}')
})


// Caged Mobs - Environments
ServerEvents.recipes(e => {
    let potting = (block, category, modif) => {
        e.custom({
            "type": "cagedmobs:environment_data",
            "input": {
                "item": block
            },
            "render": block,
            "growModifier": modif,
            "categories": [
                category
            ]
        })
    }
    potting('minecraft:dirt', 'overworld', 1.00)
    potting('minecraft:netherrack', 'nether', 1.00)
    potting('minecraft:end_stone', 'end', 1.00)
    potting('minecraft:sand', 'sea', 1.00)
    potting('twilightforest:twilight_oak_log', 'twilight', 1.00)
    potting('aether:holystone', 'aether', 1.00)
    potting('minecraft:grass_block', 'overworld', 1.25)
    potting('minecraft:glowstone', 'nether', 1.25)
    potting('minecraft:purpur_block', 'end', 1.25)
    potting('minecraft:dark_prismarine', 'sea', 1.25)
    potting('twilightforest:hedge', 'twilight', 1.25)
    potting('ancient_aether:holystone_brick_mosaic', 'aether', 1.25)
    potting('minecraft:mycelium', 'overworld', 1.50)
    potting('minecraft:soul_soil', 'nether', 1.50)
    potting('stalwart_dungeons:purpur_bricks_and_endstone', 'end', 1.50)
    potting('minecraft:fire_coral_block', 'sea', 1.50)
    potting('twilightforest:deadrock', 'twilight', 1.50)
    potting('aether:enchanted_gravitite', 'aether', 1.50)
    potting('undergarden:forgotten_block', 'allenv', 1.75)
    potting('cagedmobs:star_infused_netherite_block', 'allenv', 2.00)
})


// Caged Mobs - Overworld
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3, loot4, loot5, loot6) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "overworld",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot4
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot5
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot6
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('creeperoverhaul:beach_creeper', 2, 'minecraft:gunpowder', 'minecraft:sand', 'minecraft:prismarine_shard', 'minecraft:prismarine_crystals', 'minecraft:seagrass', 'minecraft:nautilus_shell')
    potting('creeperoverhaul:cave_creeper', 2, 'minecraft:gunpowder', 'minecraft:stone', 'minecraft:raw_iron', 'minecraft:raw_gold', 'minecraft:emerald', 'minecraft:diamond')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3, loot4, loot5) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "overworld",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot4
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot5
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('minecraft:witch', 2, 'minecraft:glass_bottle', 'minecraft:glowstone_dust', 'minecraft:redstone', 'minecraft:gunpowder', 'minecraft:sugar')
    potting('mutantmonsters:mutant_skeleton', 2, 'mutantmonsters:mutant_skeleton_limb', 'mutantmonsters:mutant_skeleton_rib', 'mutantmonsters:mutant_skeleton_shoulder_pad', 'mutantmonsters:mutant_skeleton_pelvis', 'mutantmonsters:mutant_skeleton_skull')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3, loot4, loot4cook) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "overworld",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.25,
                    "output": {
                        "item": loot4
                    },
                    "output_cooked": {
                        "item": loot4cook
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('minecraft:husk', 2, 'minecraft:rotten_flesh', 'minecraft:iron_ingot', 'minecraft:carrot', 'minecraft:potato', 'minecraft:baked_potato')
    potting('minecraft:zombie', 2, 'minecraft:rotten_flesh', 'minecraft:iron_ingot', 'minecraft:carrot', 'minecraft:potato', 'minecraft:baked_potato')
    potting('minecraft:zombie_villager', 2, 'minecraft:rotten_flesh', 'minecraft:iron_ingot', 'minecraft:carrot', 'minecraft:potato', 'minecraft:baked_potato')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3, loot4) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "overworld",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.25,
                    "output": {
                        "item": loot4
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('alexsmobs:guster', 2, 'alexsmobs:guster_eye', 'minecraft:sand', 'minecraft:red_sand', 'minecraft:soul_sand')
    potting('alexsmobs:mungus', 2, 'minecraft:red_mushroom', 'minecraft:brown_mushroom', 'minecraft:crimson_fungus', 'minecraft:warped_fungus')
    potting('farlanders:mystic_enderman', 2, 'farlanders:mystic_wand_ore', 'farlanders:mystic_wand_teleport', 'farlanders:mystic_wand_regen', 'farlanders:mystic_wand_invisible')
    potting('monsterplus:glow_skeleton', 2, 'minecraft:bone', 'minecraft:arrow', 'minecraft:glow_ink_sac', 'minecraft:glowstone_dust')
    potting('monsterplus:overgrown_skeleton', 2, 'minecraft:bone', 'minecraft:arrow', 'minecraft:glow_berries', 'minecraft:vine')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot2cook, loot3) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "overworld",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "output": {
                        "item": loot2cook
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('alexscaves:relicheirus', 2, 'alexscaves:heavy_bone', 'alexscaves:dinosaur_chop', 'alexscaves:cooked_dinosaur_chop', 'minecraft:feather')
    potting('minecraft:chicken', 1, 'minecraft:feather', 'minecraft:chicken', 'minecraft:cooked_chicken', 'minecraft:egg')
    potting('minecraft:cow', 1, 'minecraft:leather', 'minecraft:beef', 'minecraft:cooked_beef', 'cagedmobs:milk_drop')
    potting('minecraft:rabbit', 1, 'minecraft:rabbit_hide', 'minecraft:rabbit', 'minecraft:cooked_rabbit', 'minecraft:rabbit_foot')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "overworld",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('alexscaves:brainiac', 2, 'alexscaves:green_soylent', 'minecraft:rotten_flesh', 'alexscaves:charred_remnant')
    potting('alexscaves:hullbreaker', 2, 'alexscaves:sea_glass_shards', 'minecraft:copper_ingot', 'alexscaves:enigmatic_engine')
    potting('alexscaves:teletor', 2, 'alexscaves:raw_azure_neodymium', 'alexscaves:raw_scarlet_neodymium', 'alexscaves:telecore')
    potting('alexsmobs:emu', 1, 'alexsmobs:emu_feather', 'alexsmobs:emu_egg', 'minecraft:feather')
    potting('alexsmobs:froststalker', 2, 'alexsmobs:froststalker_horn', 'minecraft:packed_ice', 'minecraft:blue_ice')
    potting('alexsmobs:platypus', 2, 'alexsmobs:maggot', 'minecraft:clay_ball', 'alexsmobs:fedora')
    potting('alexsmobs:rocky_roller', 2, 'alexsmobs:rocky_shell', 'minecraft:pointed_dripstone', 'minecraft:tuff')
    potting('ars_nouveau:wilden_boss', 3, 'ars_nouveau:wilden_spike', 'ars_nouveau:wilden_horn', 'ars_nouveau:wilden_wing')
    potting('cataclysm:kobolediator', 2, 'cataclysm:ancient_metal_ingot', 'cataclysm:koboleton_bone', 'cataclysm:kobolediator_skull')
    potting('cataclysm:koboleton', 2, 'cataclysm:ancient_metal_ingot', 'cataclysm:ancient_metal_nugget', 'cataclysm:koboleton_bone')
    potting('creeperoverhaul:dark_oak_creeper', 2, 'minecraft:gunpowder', 'minecraft:dark_oak_log', 'minecraft:cobweb')
    potting('eidolon:zombie_brute', 2, 'minecraft:rotten_flesh', 'minecraft:bone', 'eidolon:zombie_heart')
    potting('minecraft:frog', 1, 'minecraft:pearlescent_froglight', 'minecraft:verdant_froglight', 'minecraft:ochre_froglight')
    potting('minecraft:skeleton', 2, 'minecraft:bone', 'minecraft:arrow', 'minecraft:bow')
    potting('minecraft:sniffer', 1, 'minecraft:pitcher_pod', 'minecraft:torchflower_seeds', 'minecraft:sniffer_egg')
    potting('minecraft:stray', 2, 'minecraft:bone', 'minecraft:arrow', 'minecraft:bow')
    potting('minecraft:warden', 3, 'minecraft:sculk_catalyst', 'apotheosis:warden_tendril', 'deeperdarker:heart_of_the_deep')
    potting('monsterplus:abyssologer', 2, 'monsterplus:crystal_shard', 'minecraft:obsidian', 'minecraft:crying_obsidian')
    potting('monsterplus:crystal_zombie', 2, 'monsterplus:crystal_clump', 'minecraft:deepslate', 'monsterplus:crystal_clump')
    potting('monsterplus:swamp_zombie', 2, 'minecraft:rotten_flesh', 'minecraft:mud', 'minecraft:poisonous_potato')
    potting('naturalist:dragonfly', 1, 'naturalist:azure_froglass', 'naturalist:verdant_froglass', 'naturalist:crimson_froglass')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot1cook, loot2, loot2cook) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "overworld",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "output_cooked": {
                        "item": loot1cook
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "output_cooked": {
                        "item": loot2cook
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('minecraft:polar_bear', 1, 'minecraft:cod', 'minecraft:cooked_cod', 'minecraft:salmon', 'minecraft:cooked_salmon')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot2cook) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "overworld",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "output_cooked": {
                        "item": loot2cook
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('alexscaves:grottoceratops', 2, 'alexscaves:tough_hide', 'alexscaves:dinosaur_chop', 'alexscaves:cooked_dinosaur_chop')
    potting('alexscaves:tremorsaurus', 2, 'alexscaves:heavy_bone', 'alexscaves:dinosaur_chop', 'alexscaves:cooked_dinosaur_chop')
    potting('alexsmobs:bison', 2, 'alexsmobs:bison_fur', 'minecraft:beef', 'minecraft:cooked_beef')
    potting('alexsmobs:gazelle', 1, 'alexsmobs:gazelle_horn', 'minecraft:mutton', 'minecraft:cooked_mutton')
    potting('alexsmobs:kangaroo', 1, 'alexsmobs:kangaroo_hide', 'alexsmobs:kangaroo_meat', 'alexsmobs:cooked_kangaroo_meat')
    potting('alexsmobs:moose', 1, 'alexsmobs:moose_antler', 'alexsmobs:moose_ribs', 'alexsmobs:cooked_moose_ribs')
    potting('alexsmobs:tusklin', 2, 'minecraft:snowball', 'minecraft:porkchop', 'minecraft:cooked_porkchop')
    potting('meadow:water_buffalo', 2, 'minecraft:leather', 'minecraft:beef', 'minecraft:cooked_beef')
    potting('minecraft:mooshroom', 1, 'minecraft:leather', 'minecraft:beef', 'minecraft:cooked_beef')
    potting('mutantmonsters:spider_pig', 2, 'minecraft:string', 'minecraft:porkchop', 'minecraft:cooked_porkchop')
    potting('naturalist:boar', 2, 'minecraft:leather', 'minecraft:porkchop', 'minecraft:cooked_porkchop')
    potting('naturalist:deer', 1, 'naturalist:antler', 'naturalist:venison', 'naturalist:cooked_venison')
    potting('naturalist:duck', 1, 'minecraft:feather', 'naturalist:duck', 'naturalist:cooked_duck')
    potting('undergarden:dweller', 1, 'minecraft:leather', 'undergarden:raw_dweller_meat', 'undergarden:dweller_steak')
    potting('undergarden:gloomper', 2, 'minecraft:leather', 'undergarden:raw_gloomper_leg', 'undergarden:gloomper_leg')
    potting('undergarden:gwibling', 1, 'minecraft:bone_meal', 'undergarden:raw_gwibling', 'undergarden:cooked_gwibling')
    potting('twilightforest:deer', 1, 'minecraft:leather', 'twilightforest:raw_venison', 'twilightforest:cooked_venison')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "overworld",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('alexscaves:boundroid', 2, 'alexscaves:heavyweight', 'minecraft:chain')
    potting('alexscaves:corrodent', 2, 'alexscaves:corrodent_teeth', 'minecraft:coarse_dirt')
    potting('alexscaves:nucleeper', 2, 'alexscaves:fissile_core', 'minecraft:gunpowder')
    potting('alexscaves:tremorzilla', 2, 'mekanism:ingot_uranium', 'mekanism:nugget_uranium')
    potting('alexscaves:trilocaris', 1, 'alexscaves:trilocaris_tail', 'alexscaves:cooked_trilocaris_tail')
    potting('alexscaves:vesper', 2, 'alexscaves:guano', 'alexscaves:vesper_wing')
    potting('alexscaves:watcher', 2, 'alexscaves:dark_tatters', 'alexscaves:occult_gem')
    potting('alexsmobs:cockroach', 1, 'alexsmobs:cockroach_wing_fragment', 'alexsmobs:cockroach_ootheca')
    potting('alexsmobs:cosmic_cod', 1, 'alexsmobs:cosmic_cod', 'minecraft:bone_meal')
    potting('alexsmobs:elephant', 1, 'alexsmobs:acacia_blossom', 'minecraft:acacia_leaves')
    potting('alexsmobs:grizzly_bear', 2, 'alexsmobs:bear_fur', 'alexsmobs:bear_dust')
    potting('alexsmobs:murmur', 2, 'alexsmobs:elastic_tendon', 'minecraft:red_wool')
    potting('alexsmobs:roadrunner', 1, 'alexsmobs:roadrunner_feather', 'minecraft:feather')
    potting('cataclysm:the_watcher', 3, 'minecraft:redstone', 'minecraft:iron_ingot')
    potting('cataclysm:the_harbinger', 3, 'cataclysm:wither_assault_shoulder_weapon', 'cataclysm:witherite_block')
    potting('creeperoverhaul:badlands_creeper', 2, 'minecraft:gunpowder', 'minecraft:gold_nugget')
    potting('creeperoverhaul:desert_creeper', 2, 'minecraft:gunpowder', 'minecraft:cactus')
    potting('creeperoverhaul:dripstone_creeper', 2, 'minecraft:gunpowder', 'minecraft:pointed_dripstone')
    potting('creeperoverhaul:spruce_creeper', 2, 'minecraft:gunpowder', 'minecraft:spruce_log')
    potting('creeperoverhaul:swamp_creeper', 2, 'minecraft:gunpowder', 'minecraft:bone')
    potting('eidolon:giant_skeleton', 2, 'minecraft:bone', 'eidolon:imbued_bones')
    potting('eidolon:wraith', 2, 'eidolon:tattered_cloth', 'eidolon:wraith_heart')
    potting('samurai_dynasty:enenra', 2, 'minecraft:coal', 'minecraft:gunpowder')
    potting('samurai_dynasty:kitsune', 2, 'samurai_dynasty:kitsune_tail', 'samurai_dynasty:kitsune_hide')
    potting('samurai_dynasty:oni', 2, 'samurai_dynasty:oni_horn', 'samurai_dynasty:ruby')
    potting('samurai_dynasty:twotailed', 2, 'samurai_dynasty:kitsune_tail', 'samurai_dynasty:kitsune_hide')
    potting('farlanders:classic_enderman', 2, 'minecraft:ender_pearl', 'minecraft:chorus_fruit')
    potting('farlanders:fanmade_enderman', 2, 'minecraft:ender_pearl', 'minecraft:chorus_fruit')
    potting('minecraft:bee', 2, 'minecraft:honeycomb', 'cagedmobs:honey_drop')
    potting('minecraft:cave_spider', 2, 'minecraft:string', 'minecraft:spider_eye')
    potting('minecraft:evoker', 2, 'minecraft:emerald', 'minecraft:totem_of_undying')
    potting('minecraft:iron_golem', 2, 'minecraft:iron_ingot', 'minecraft:poppy')
    potting('minecraft:spider', 2, 'minecraft:string', 'minecraft:spider_eye')
    potting('mutantmonsters:mutant_enderman', 2, 'minecraft:ender_pearl', 'minecraft:ender_eye')
    potting('naturalist:snail', 1, 'naturalist:snail_shell', 'minecraft:slime_ball')
    potting('the_bumblezone:honey_slime', 2, 'minecraft:sugar', 'minecraft:slime_ball')
    potting('undergarden:mog', 1, 'undergarden:depthrock_pebble', 'undergarden:mogmoss')
    potting('undergarden:muncher', 2, 'undergarden:cloggrum_nugget', 'undergarden:froststeel_nugget')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot, lootcook) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "overworld",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot
                    },
                    "output_cooked": {
                        "item": lootcook
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                }
            ]
        })
    }
    potting('minecraft:pig', 1, 'minecraft:porkchop', 'minecraft:cooked_porkchop')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "overworld",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                }
            ]
        })
    }
    potting('alexscaves:ferrouslime', 2, 'alexscaves:ferrouslime_ball')
    potting('alexscaves:forsaken', 2, 'alexscaves:pure_darkness')
    potting('alexscaves:gammaroach', 2, 'alexscaves:toxic_paste')
    potting('alexscaves:gloomoth', 1, 'alexscaves:moth_dust')
    potting('alexscaves:gossamer_worm', 2, 'alexscaves:bioluminesscence')
    potting('alexscaves:lanternfish', 1, 'alexscaves:lanternfish')
    potting('alexscaves:mine_guardian', 2, 'alexscaves:depth_charge')
    potting('alexscaves:notor', 2, 'alexscaves:notor_gizmo')
    potting('alexscaves:radgill', 2, 'alexscaves:radgill')
    potting('alexscaves:raycat', 2, 'minecraft:bone')
    potting('alexscaves:sea_pig', 1, 'alexscaves:sea_pig')
    potting('alexscaves:tripodfish', 1, 'alexscaves:tripodfish')
    potting('alexscaves:underzealot', 2, 'alexscaves:dark_tatters')
    potting('alexsmobs:bald_eagle', 1, 'minecraft:feather')
    potting('alexsmobs:banana_slug', 1, 'alexsmobs:banana_slug_slime')
    potting('alexsmobs:blue_jay', 1, 'minecraft:feather')
    potting('alexsmobs:bunfungus', 1, 'minecraft:red_mushroom')
    potting('alexsmobs:capuchin_monkey', 1, 'alexsmobs:banana_peel')
    potting('alexsmobs:centipede_head', 2, 'alexsmobs:centipede_leg')
    potting('alexsmobs:centipede_body', 2, 'alexsmobs:centipede_leg')
    potting('alexsmobs:centipede_tail', 2, 'alexsmobs:centipede_leg')
    potting('alexsmobs:crow', 1, 'eidolon:raven_feather')
    potting('alexsmobs:dropbear', 2, 'alexsmobs:dropbear_claw')
    potting('alexsmobs:farseer', 3, 'alexsmobs:farseer_arm')
    potting('alexsmobs:flutter', 2, 'minecraft:spore_blossom')
    potting('alexsmobs:fly', 1, 'alexsmobs:maggot')
    potting('alexsmobs:gorilla', 2, 'alexsmobs:banana')
    potting('alexsmobs:komodo_dragon', 2, 'alexsmobs:komodo_spit')
    potting('alexsmobs:potoo', 1, 'minecraft:feather')
    potting('alexsmobs:raccoon', 1, 'alexsmobs:raccoon_tail')
    potting('alexsmobs:rattlesnake', 1, 'alexsmobs:rattlesnake_rattle')
    potting('alexsmobs:seagull', 1, 'minecraft:feather')
    potting('alexsmobs:shoebill', 1, 'minecraft:feather')
    potting('alexsmobs:skreecher', 2, 'alexsmobs:skreecher_soul')
    potting('alexsmobs:tarantula_hawk', 1, 'alexsmobs:tarantula_hawk_wing_fragment')
    potting('alexsmobs:toucan', 1, 'minecraft:feather')
    potting('ars_nouveau:amethyst_golem', 2, 'minecraft:amethyst_shard')
    potting('ars_nouveau:drygmy', 1, 'ars_nouveau:drygmy_shard')
    potting('ars_nouveau:starbuncle', 1, 'ars_nouveau:starbuncle_shards')
    potting('ars_nouveau:whirlisprig', 1, 'ars_nouveau:whirlisprig_shards')
    potting('ars_nouveau:wixie', 1, 'ars_nouveau:wixie_shards')
    potting('ars_nouveau:wilden_guardian', 2, 'ars_nouveau:wilden_spike')
    potting('ars_nouveau:wilden_hunter', 2, 'ars_nouveau:wilden_horn')
    potting('ars_nouveau:wilden_stalker', 2, 'ars_nouveau:wilden_wing')
    potting('ars_elemental:siren_entity', 1, 'ars_elemental:siren_shards')
    potting('cataclysm:ancient_remnant', 3, 'cataclysm:ancient_metal_block')
    potting('cataclysm:wadjet', 2, 'cataclysm:ancient_metal_ingot')
    potting('create_sa:brass_cube_r', 1, 'create:brass_ingot')
    potting('creeperoverhaul:bamboo_creeper', 2, 'minecraft:bamboo')
    potting('creeperoverhaul:hills_creeper', 2, 'minecraft:gunpowder')
    potting('creeperoverhaul:jungle_creeper', 2, 'minecraft:gunpowder')
    potting('creeperoverhaul:mushroom_creeper', 2, 'minecraft:gunpowder')
    potting('creeperoverhaul:savannah_creeper', 2, 'minecraft:acacia_log')
    potting('creeperoverhaul:snowy_creeper', 2, 'minecraft:white_wool')
    potting('deeperdarker:sculk_centipede', 2, 'minecraft:string')
    potting('deeperdarker:sculk_leech', 2, 'deeperdarker:soul_dust')
    potting('deeperdarker:sculk_snapper', 2, 'deeperdarker:soul_dust')
    potting('deeperdarker:shattered', 2, 'deeperdarker:sculk_bone')
    potting('deeperdarker:shriek_worm', 2, 'deeperdarker:cobbled_sculk_stone')
    potting('deeperdarker:stalker', 2, 'deeperdarker:soul_crystal')
    potting('eidolon:necromancer', 2, 'minecraft:emerald')
    potting('eidolon:raven', 1, 'eidolon:raven_feather')
    potting('eidolon:slimy_slug', 1, 'minecraft:slime_ball')
    potting('enlightened_end:eidolon', 2, 'enlightened_end:everglint')
    potting('samurai_dynasty:akaname', 2, 'samurai_dynasty:akaname_tongue')
    potting('samurai_dynasty:jorogumo', 2, 'samurai_dynasty:jorogumo_eye')
    potting('samurai_dynasty:kawauso', 1, 'samurai_dynasty:straw_hat')
    potting('samurai_dynasty:komainu', 1, 'samurai_dynasty:cloth')
    potting('samurai_dynasty:onibi', 2, 'samurai_dynasty:spirit_flame')
    potting('samurai_dynasty:tanuki', 1, 'samurai_dynasty:straw_hat')
    potting('farlanders:ender_golem', 2, 'farlanders:ender_horn')
    potting('farlanders:ender_guardian', 2, 'minecraft:arrow')
    potting('farlanders:looter', 2, 'farlanders:looter_hood')
    potting('farlanders:rebel', 2, 'farlanders:rebel_farlander_helmet')
    potting('farlanders:titan', 3, 'farlanders:titan_hide')
    potting('goblintraders:goblin_trader', 1, 'minecraft:apple')
    potting('minecraft:cat', 1, 'minecraft:string')
    potting('minecraft:creeper', 2, 'minecraft:gunpowder')
    potting('minecraft:donkey', 1, 'minecraft:leather')
    potting('minecraft:horse', 1, 'minecraft:leather')
    potting('minecraft:llama', 1, 'minecraft:leather')
    potting('minecraft:mule', 1, 'minecraft:leather')
    potting('minecraft:panda', 1, 'minecraft:bamboo')
    potting('minecraft:parrot', 1, 'minecraft:feather')
    potting('minecraft:phantom', 1, 'minecraft:phantom_membrane')
    potting('minecraft:ravager', 2, 'minecraft:saddle')
    potting('minecraft:silverfish', 2, 'minecraft:gravel')
    potting('minecraft:skeleton_horse', 1, 'minecraft:bone')
    potting('minecraft:slime', 2, 'minecraft:slime_ball')
    potting('minecraft:snow_golem', 1, 'minecraft:snowball')
    potting('minecraft:trader_llama', 1, 'minecraft:leather')
    potting('minecraft:vindicator', 2, 'minecraft:emerald')
    potting('minecraft:zombie_horse', 1, 'minecraft:rotten_flesh')
    potting('mutantmonsters:mutant_creeper', 2, 'minecraft:gunpowder')
    potting('mutantmonsters:mutant_snow_golem', 2, 'minecraft:snowball')
    potting('mutantmonsters:mutant_zombie', 2, 'mutantmonsters:hulk_hammer')
    potting('naturalist:bluejay', 1, 'minecraft:feather')
    potting('naturalist:canary', 1, 'minecraft:feather')
    potting('naturalist:cardinal', 1, 'minecraft:feather')
    potting('naturalist:elephant', 1, 'minecraft:leather')
    potting('naturalist:firefly', 1, 'naturalist:glow_goop')
    potting('naturalist:lizard_tail', 1, 'naturalist:lizard_tail')
    potting('naturalist:rhino', 1, 'minecraft:leather')
    potting('naturalist:robin', 1, 'minecraft:feather')
    potting('naturalist:vulture', 1, 'minecraft:feather')
    potting('railways:conductor', 1, 'create:andesite_alloy')
    potting('the_bumblezone:beehemoth', 2, 'the_bumblezone:bee_stinger')
    potting('the_bumblezone:bee_queen', 3, 'the_bumblezone:bee_stinger')
    potting('the_bumblezone:rootmin', 1, 'minecraft:grass_block')
    potting('undergarden:brute', 2, 'undergarden:brute_tusk')
    potting('undergarden:forgotten_guardian', 2, 'undergarden:forgotten_nugget')
    potting('undergarden:rotbeast', 2, 'undergarden:utheric_shard')
    potting('undergarden:rotling', 2, 'undergarden:utheric_shard')
    potting('undergarden:rotwalker', 2, 'undergarden:utheric_shard')
    potting('undergarden:scintling', 1, 'undergarden:goo_ball')
    potting('undergarden:sploogie', 1, 'undergarden:shiverstone')
    potting('undergarden:stoneborn', 1, 'undergarden:depthrock_pebble')
})


// Caged Mobs - Nether
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "nether",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('alexsmobs:bone_serpent', 2, 'alexsmobs:bone_serpent_tooth', 'minecraft:bone_block', 'minecraft:bone')
    potting('alexsmobs:laviathan', 2, 'minecraft:magma_block', 'minecraft:blackstone', 'minecraft:obsidian')
    potting('alexsmobs:soul_vulture', 2, 'minecraft:coal', 'minecraft:bone', 'alexsmobs:soul_heart')
    potting('minecraft:wither_skeleton', 2, 'minecraft:coal', 'minecraft:bone', 'minecraft:wither_skeleton_skull')
    potting('minecraft:zombified_piglin', 2, 'minecraft:rotten_flesh', 'minecraft:gold_nugget', 'minecraft:gold_ingot')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot2cook) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "nether",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "output_cooked": {
                        "item": loot2cook
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('minecraft:hoglin', 2, 'minecraft:leather', 'minecraft:porkchop', 'minecraft:cooked_porkchop')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "nether",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('alexsmobs:crimson_mosquito', 2, 'alexsmobs:blood_sac', 'alexsmobs:mosquito_proboscis')
    potting('alexsmobs:straddler', 2, 'alexsmobs:straddlite', 'minecraft:basalt')
    potting('alexsmobs:warped_mosco', 3, 'alexsmobs:warped_muscle', 'alexsmobs:hemolymph_sac')
    potting('alexsmobs:warped_toad', 2, 'minecraft:shroomlight', 'minecraft:nether_wart')
    potting('minecraft:ghast', 2, 'minecraft:ghast_tear', 'minecraft:gunpowder')
    potting('minecraft:wither', 3, 'cagedmobs:nether_star_fragment', 'minecraft:wither_rose')
    potting('monsterplus:lava_squid', 1, 'minecraft:blaze_powder', 'minecraft:magma_cream')
    potting('monsterplus:mother_lava_squid', 2, 'minecraft:blaze_powder', 'minecraft:magma_cream')
    potting('netherskeletons:crimson_skeleton', 2, 'minecraft:crimson_fungus', 'minecraft:bone_meal')
    potting('netherskeletons:warped_skeleton', 2, 'minecraft:warped_fungus', 'minecraft:bone_meal')
    potting('realmrpg_wyrms:red_wyrm', 2, 'minecraft:magma_block', 'minecraft:blaze_powder')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "nether",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                }
            ]
        })
    }
    potting('alexsmobs:sunbird', 2, 'minecraft:fire_charge')
    potting('cataclysm:ignis', 3, 'cataclysm:ignitium_ingot')
    potting('cataclysm:ignited_revenant', 2, 'cataclysm:burning_ashes')
    potting('cataclysm:netherite_monstrosity', 3, 'cataclysm:monstrous_horn')
    potting('goblintraders:vein_goblin_trader', 1, 'minecraft:carrot')
    potting('minecraft:blaze', 2, 'minecraft:blaze_rod')
    potting('minecraft:magma_cube', 2, 'minecraft:magma_cream')
    potting('minecraft:strider', 1, 'minecraft:string')
    potting('minecraft:zoglin', 2, 'minecraft:rotten_flesh')
    potting('netherskeletons:skelly_ghast', 2, 'minecraft:ghast_tear')
    potting('netherskeletons:nether_skeleton', 2, 'minecraft:netherrack')
})


// Caged Mobs - End
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3, loot4) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "end",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.25,
                    "output": {
                        "item": loot4
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('endermanoverhaul:cave_enderman', 2, 'minecraft:ender_pearl', 'minecraft:coal', 'minecraft:raw_iron', 'minecraft:emerald')
    potting('endermanoverhaul:end_enderman', 2, 'minecraft:ender_pearl', 'endermanoverhaul:corrupted_pearl', 'minecraft:chorus_fruit', 'endermanoverhaul:enderman_tooth')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "end",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('endermanoverhaul:crimson_forest_enderman', 2, 'minecraft:ender_pearl', 'endermanoverhaul:crimson_pearl', 'minecraft:crimson_fungus')
    potting('endermanoverhaul:ice_spikes_enderman', 2, 'minecraft:ender_pearl', 'endermanoverhaul:icy_pearl', 'minecraft:packed_ice')
    potting('endermanoverhaul:snowy_enderman', 2, 'minecraft:ender_pearl', 'endermanoverhaul:icy_pearl', 'minecraft:snowball')
    potting('endermanoverhaul:soulsand_valley_enderman', 2, 'minecraft:ender_pearl', 'endermanoverhaul:soul_pearl', 'minecraft:bone')
    potting('endermanoverhaul:warped_forest_enderman', 2, 'minecraft:ender_pearl', 'endermanoverhaul:warped_pearl', 'minecraft:warped_fungus')
    potting('realmrpg_wyrms:ender_wyrm', 2, 'minecraft:obsidian', 'minecraft:dragon_breath', 'minecraft:dragon_head')
    potting('stalwart_dungeons:incomplete_wither', 2, 'minecraft:coal', 'minecraft:bone', 'minecraft:wither_skeleton_skull')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot1cook, loot2) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "end",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "output_cooked": {
                        "item": loot1cook
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('enlightened_end:stalker', 2, 'enlightened_end:raw_stalker', 'enlightened_end:cooked_stalker', 'enlightened_end:stalker_tooth')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "end",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('alexsmobs:enderiophage', 2, 'alexsmobs:capsid', 'minecraft:ender_eye')
    potting('alexsmobs:mimicube', 3, 'alexsmobs:mimicream', 'minecraft:slime_ball')
    potting('alexsmobs:void_worm', 3, 'alexsmobs:void_worm_eye', 'alexsmobs:void_worm_mandible')
    potting('cataclysm:the_leviathan', 3, 'cataclysm:tidal_claws', 'cataclysm:abyssal_egg')
    potting('endermanoverhaul:badlands_enderman', 2, 'minecraft:ender_pearl', 'endermanoverhaul:tiny_skull')
    potting('endermanoverhaul:desert_enderman', 2, 'minecraft:ender_pearl', 'minecraft:emerald')
    potting('endermanoverhaul:end_islands_enderman', 2, 'minecraft:ender_pearl', 'endermanoverhaul:ancient_pearl')
    potting('endermanoverhaul:mushroom_fields_enderman', 2, 'minecraft:ender_pearl', 'minecraft:red_mushroom')
    potting('endermanoverhaul:nether_wastes_enderman', 2, 'minecraft:ender_pearl', 'minecraft:bone')
    potting('endermanoverhaul:coral_enderman', 2, 'minecraft:ender_pearl', 'endermanoverhaul:bubble_pearl')
    potting('endermanoverhaul:savanna_enderman', 2, 'minecraft:ender_pearl', 'minecraft:acacia_log')
    potting('endermanoverhaul:swamp_enderman', 2, 'minecraft:ender_pearl', 'endermanoverhaul:summoner_pearl')
    potting('endermanoverhaul:windswept_hills_enderman', 2, 'minecraft:ender_pearl', 'endermanoverhaul:summoner_pearl')
    potting('endlessbiomes:anklor', 2, 'endlessbiomes:anklor_shell_fragments', 'endlessbiomes:anklor_flesh')
    potting('endlessbiomes:shiftling', 1, 'endlessbiomes:riftite_shard', 'endlessbiomes:shiftling_antenna')
    potting('stalwart_dungeons:awful_ghast', 3, 'stalwart_dungeons:awful_crystal', 'minecraft:ghast_tear')
    potting('stalwart_dungeons:giddy_blaze', 2, 'minecraft:blaze_rod', 'minecraft:nether_brick')
    potting('stalwart_dungeons:nether_keeper', 2, 'stalwart_dungeons:ancient_fire', 'minecraft:nether_brick')
    potting('stalwart_dungeons:reinforced_blaze', 2, 'stalwart_dungeons:blaze_armor_scrap', 'minecraft:blaze_rod')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "end",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                }
            ]
        })
    }
    potting('alexsmobs:cosmaw', 2, 'minecraft:chorus_fruit')
    potting('alexsmobs:endergrade', 1, 'minecraft:chorus_fruit')
    potting('cataclysm:ender_golem', 2, 'cataclysm:void_core')
    potting('cataclysm:ender_guardian', 2, 'cataclysm:gauntlet_of_guard')
    potting('cataclysm:the_baby_leviathan', 2, 'cataclysm:abyssal_egg')
    potting('endermanoverhaul:dark_oak_enderman', 2, 'minecraft:ender_pearl')
    potting('endermanoverhaul:flower_fields_enderman', 2, 'minecraft:ender_pearl')
    potting('minecraft:enderman', 2, 'minecraft:ender_pearl')
    potting('minecraft:endermite', 2, 'minecraft:end_stone')
    potting('minecraft:shulker', 2, 'minecraft:shulker_shell')
    potting('stalwart_dungeons:shelterer', 2, 'stalwart_dungeons:void_crystal')
    potting('stalwart_dungeons:shelterer_without_armor', 2, 'stalwart_dungeons:void_crystal')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "end",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": "cagedmobs:dragon_scale"
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                }
            ]
        })
    }
    potting('minecraft:ender_dragon', 3)
})


// Caged Mobs - Sea
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3, loot4, loot5) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "sea",
                "allenv"
            ],
            "growTicks": 1200,
            "requiresWater": true,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.25,
                    "output": {
                        "item": loot4
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.25,
                    "output": {
                        "item": loot5
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('minecraft:drowned', 1, 'minecraft:rotten_flesh', 'minecraft:copper_ingot', 'minecraft:nautilus_shell', 'minecraft:trident', 'minecraft:fishing_rod')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3, loot4) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "sea",
                "allenv"
            ],
            "growTicks": 1200,
            "requiresWater": true,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.25,
                    "output": {
                        "item": loot4
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('alexsmobs:seal', 1, 'minecraft:kelp', 'minecraft:nautilus_shell', 'minecraft:scute', 'minecraft:sand')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot1cook, loot2, loot3) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "sea",
                "allenv"
            ],
            "growTicks": 1200,
            "requiresWater": true,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "output_cooked": {
                        "item": loot1cook
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('creeperoverhaul:ocean_creeper', 2, 'minecraft:cod', 'minecraft:cooked_cod', 'minecraft:salmon', 'minecraft:cooked_salmon')
    potting('fishofthieves:ancientscale', 1, 'fishofthieves:ancientscale', 'fishofthieves:cooked_ancientscale', 'fishofthieves:fish_bone', 'minecraft:bone_meal')
    potting('fishofthieves:battlegill', 1, 'fishofthieves:battlegill', 'fishofthieves:cooked_battlegill', 'fishofthieves:fish_bone', 'minecraft:bone_meal')
    potting('fishofthieves:devilfish', 1, 'fishofthieves:devilfish', 'fishofthieves:cooked_devilfish', 'fishofthieves:fish_bone', 'minecraft:bone_meal')
    potting('fishofthieves:islehopper', 1, 'fishofthieves:islehopper', 'fishofthieves:cooked_islehopper', 'fishofthieves:fish_bone', 'minecraft:bone_meal')
    potting('fishofthieves:plentifin', 1, 'fishofthieves:plentifin', 'fishofthieves:cooked_plentifin', 'fishofthieves:fish_bone', 'minecraft:bone_meal')
    potting('fishofthieves:pondie', 1, 'fishofthieves:pondie', 'fishofthieves:cooked_pondie', 'fishofthieves:fish_bone', 'minecraft:bone_meal')
    potting('fishofthieves:splashtail', 1, 'fishofthieves:splashtail', 'fishofthieves:cooked_splashtail', 'fishofthieves:fish_bone', 'minecraft:bone_meal')
    potting('fishofthieves:stormfish', 1, 'fishofthieves:stormfish', 'fishofthieves:cooked_stormfish', 'fishofthieves:fish_bone', 'minecraft:bone_meal')
    potting('fishofthieves:wildsplash', 1, 'fishofthieves:wildsplash', 'fishofthieves:cooked_wildsplash', 'fishofthieves:fish_bone', 'minecraft:bone_meal')
    potting('fishofthieves:wrecker', 1, 'fishofthieves:wrecker', 'fishofthieves:cooked_wrecker', 'fishofthieves:fish_bone', 'minecraft:bone_meal')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "sea",
                "allenv"
            ],
            "growTicks": 1200,
            "requiresWater": true,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('minecraft:turtle', 1, 'minecraft:seagrass', 'minecraft:scute', 'minecraft:turtle_egg')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "sea",
                "allenv"
            ],
            "growTicks": 1200,
            "requiresWater": true,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('alexsmobs:alligator_snapping_turtle', 1, 'alexsmobs:spiked_scute', 'minecraft:seagrass')
    potting('alexsmobs:blobfish', 1, 'alexsmobs:blobfish', 'minecraft:bone_meal')
    potting('alexsmobs:cachalot_whale', 1, 'alexsmobs:cachalot_whale_tooth', 'alexsmobs:ambergris')
    potting('alexsmobs:crocodile', 2, 'alexsmobs:crocodile_scute', 'alexsmobs:crocodile_egg')
    potting('alexsmobs:flying_fish', 1, 'alexsmobs:flying_fish', 'minecraft:bone_meal')
    potting('alexsmobs:frilled_shark', 2, 'alexsmobs:crocodile_scute', 'alexsmobs:crocodile_egg')
    potting('alexsmobs:skelewag', 2, 'alexsmobs:fish_bones', 'minecraft:bone')
    potting('aquaculture:arapaima', 1, 'aquaculture:arapaima', 'minecraft:bone_meal')
    potting('aquaculture:atlantic_cod', 1, 'aquaculture:atlantic_cod', 'minecraft:bone_meal')
    potting('aquaculture:atlantic_halibut', 1, 'aquaculture:atlantic_halibut', 'minecraft:bone_meal')
    potting('aquaculture:atlantic_herring', 1, 'aquaculture:atlantic_herring', 'minecraft:bone_meal')
    potting('aquaculture:bayad', 1, 'aquaculture:bayad', 'minecraft:bone_meal')
    potting('aquaculture:blackfish', 1, 'aquaculture:blackfish', 'minecraft:bone_meal')
    potting('aquaculture:bluegill', 1, 'aquaculture:bluegill', 'minecraft:bone_meal')
    potting('aquaculture:boulti', 1, 'aquaculture:boulti', 'minecraft:bone_meal')
    potting('aquaculture:brown_shrooma', 1, 'aquaculture:brown_shrooma', 'minecraft:bone_meal')
    potting('aquaculture:brown_trout', 1, 'aquaculture:brown_trout', 'minecraft:bone_meal')
    potting('aquaculture:capitaine', 1, 'aquaculture:capitaine', 'minecraft:bone_meal')
    potting('aquaculture:carp', 1, 'aquaculture:carp', 'minecraft:bone_meal')
    potting('aquaculture:catfish', 1, 'aquaculture:catfish', 'minecraft:bone_meal')
    potting('aquaculture:gar', 1, 'aquaculture:gar', 'minecraft:bone_meal')
    potting('aquaculture:minnow', 1, 'aquaculture:minnow', 'minecraft:bone_meal')
    potting('aquaculture:muskellunge', 1, 'aquaculture:muskellunge', 'minecraft:bone_meal')
    potting('aquaculture:pacific_halibut', 1, 'aquaculture:pacific_halibut', 'minecraft:bone_meal')
    potting('aquaculture:perch', 1, 'aquaculture:perch', 'minecraft:bone_meal')
    potting('aquaculture:pink_salmon', 1, 'aquaculture:pink_salmon', 'minecraft:bone_meal')
    potting('aquaculture:piranha', 1, 'aquaculture:piranha', 'minecraft:bone_meal')
    potting('aquaculture:pollock', 1, 'aquaculture:pollock', 'minecraft:bone_meal')
    potting('aquaculture:rainbow_trout', 1, 'aquaculture:rainbow_trout', 'minecraft:bone_meal')
    potting('aquaculture:red_grouper', 1, 'aquaculture:red_grouper', 'minecraft:bone_meal')
    potting('aquaculture:red_shrooma', 1, 'aquaculture:red_shrooma', 'minecraft:bone_meal')
    potting('aquaculture:smallmouth_bass', 1, 'aquaculture:smallmouth_bass', 'minecraft:bone_meal')
    potting('aquaculture:synodontis', 1, 'aquaculture:synodontis', 'minecraft:bone_meal')
    potting('aquaculture:tambaqui', 1, 'aquaculture:tambaqui', 'minecraft:bone_meal')
    potting('aquaculture:tuna', 1, 'aquaculture:tuna', 'minecraft:bone_meal')
    potting('cataclysm:amethyst_crab', 2, 'cataclysm:amethyst_crab_meat', 'cataclysm:amethyst_crab_shell')
    potting('cataclysm:lionfish', 2, 'cataclysm:lionfish', 'minecraft:bone_meal')
    potting('minecraft:pufferfish', 1, 'minecraft:pufferfish', 'minecraft:bone_meal')
    potting('minecraft:tropical_fish', 1, 'minecraft:tropical_fish', 'minecraft:bone_meal')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot1cook, loot2) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "sea",
                "allenv"
            ],
            "growTicks": 1200,
            "requiresWater": true,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "output": {
                        "item": loot1cook
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                }
            ]
        })
    }
    potting('minecraft:cod', 1, 'minecraft:cod', 'minecraft:cooked_cod', 'minecraft:bone_meal')
    potting('minecraft:salmon', 1, 'minecraft:salmon', 'minecraft:cooked_salmon', 'minecraft:bone_meal')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot, lootcook) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "sea",
                "allenv"
            ],
            "growTicks": 1200,
            "requiresWater": true,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot
                    },
                    "output": {
                        "item": lootcook
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                }
            ]
        })
    }
    potting('alexsmobs:catfish', 1, 'alexsmobs:raw_catfish', 'alexsmobs:cooked_catfish')
    potting('alexsmobs:lobster', 1, 'alexsmobs:lobster_tail', 'alexsmobs:cooked_lobster_tail')
    potting('minecraft:dolphin', 1, 'minecraft:cod', 'minecraft:cooked_cod')
    potting('naturalist:catfish', 1, 'naturalist:catfish', 'naturalist:cooked_catfish')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "sea",
                "allenv"
            ],
            "growTicks": 1200,
            "requiresWater": true,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                }
            ]
        })
    }
    potting('alexsmobs:catfish_large', 1, 'alexsmobs:raw_catfish')
    potting('alexsmobs:catfish_medium', 1, 'alexsmobs:raw_catfish')
    potting('alexsmobs:comb_jelly', 1, 'alexsmobs:rainbow_jelly')
    potting('alexsmobs:frilled_shark', 2, 'alexsmobs:serrated_shark_tooth')
    potting('alexsmobs:giant_squid', 1, 'minecraft:ink_sac')
    potting('alexsmobs:hammerhead_shark', 2, 'alexsmobs:serrated_shark_tooth')
    potting('alexsmobs:mimic_octopus', 2, 'minecraft:ink_sac')
    potting('alexsmobs:mudskipper', 1, 'minecraft:tropical_fish')
    potting('aquaculture:arrau_turtle', 1, 'aquaculture:arrau_turtle')
    potting('aquaculture:box_turtle', 1, 'aquaculture:box_turtle')
    potting('aquaculture:jellyfish', 1, 'aquaculture:jellyfish')
    potting('aquaculture:starshell_turtle', 1, 'aquaculture:starshell_turtle')
    potting('cataclysm:coral_golem', 2, 'cataclysm:crystallized_coral_fragments')
    potting('cataclysm:coralssus', 2, 'cataclysm:coral_chunk')
    potting('cataclysm:deepling', 2, 'minecraft:nautilus_shell')
    potting('cataclysm:deepling_angler', 2, 'minecraft:nautilus_shell')
    potting('cataclysm:deepling_brute', 2, 'minecraft:nautilus_shell')
    potting('cataclysm:deepling_priest', 2, 'cataclysm:athame')
    potting('cataclysm:deepling_warlock', 2, 'cataclysm:athame')
    potting('minecraft:dolphin', 1, 'minecraft:cod')
    potting('minecraft:glow_squid', 1, 'minecraft:glow_ink_sac')
    potting('minecraft:squid', 1, 'minecraft:ink_sac')
    potting('naturalist:bass', 1, 'naturalist:bass')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "sea",
                "allenv"
            ],
            "growTicks": 1200,
            "requiresWater": true,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": "minecraft:prismarine_shard"
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 1,
                    "output": {
                        "item": "minecraft:prismarine_crystals"
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:salmon"
                    },
                    "output_cooked": {
                        "item": "minecraft:cooked_salmon"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:cod"
                    },
                    "output_cooked": {
                        "item": "minecraft:cooked_cod"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:pufferfish"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:tropical_fish"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('minecraft:guardian', 2)
})
ServerEvents.recipes(e => {
    let potting = (entity, tier) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "sea",
                "allenv"
            ],
            "growTicks": 1200,
            "requiresWater": true,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": "minecraft:prismarine_shard"
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 1,
                    "output": {
                        "item": "minecraft:prismarine_crystals"
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "cagedmobs:sponge_fragment"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:salmon"
                    },
                    "output_cooked": {
                        "item": "minecraft:cooked_salmon"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:cod"
                    },
                    "output_cooked": {
                        "item": "minecraft:cooked_cod"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:pufferfish"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:tropical_fish"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.25,
                    "output": {
                        "item": "minecraft:heart_of_the_sea"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('minecraft:elder_guardian', 3)
})


// Caged Mobs - Twilight
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3, loot4, loot5, loot6) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "twilight",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot4
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot5
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot6
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('twilightforest:lich', 3, 'minecraft:ender_pearl', 'minecraft:bone', 'twilightforest:zombie_scepter', 'twilightforest:lifedrain_scepter', 'twilightforest:twilight_scepter', 'twilightforest:fortification_scepter')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3, loot4, loot5) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "twilight",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot4
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot5
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('twilightforest:giant_miner', 2, 'twilightforest:giant_pickaxe', 'twilightforest:giant_cobblestone', 'twilightforest:giant_log', 'twilightforest:giant_leaves', 'twilightforest:giant_obsidian')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3, loot4) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "twilight",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot4
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('twilightforest:snow_queen', 3, 'minecraft:snowball', 'minecraft:packed_ice', 'twilightforest:triple_bow', 'twilightforest:seeker_bow')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot2cook, loot3) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "twilight",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "output": {
                        "item": loot2cook
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('twilightforest:dwarf_rabbit', 1, 'minecraft:rabbit_hide', 'minecraft:rabbit', 'minecraft:cooked_rabbit', 'minecraft:rabbit_foot')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot2cook) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "twilight",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "output_cooked": {
                        "item": loot2cook
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('twilightforest:deer', 1, 'minecraft:leather', 'twilightforest:raw_venison', 'twilightforest:cooked_venison')
    potting('twilightforest:helmet_crab', 2, 'twilightforest:armor_shard', 'minecraft:cod', 'minecraft:cooked_cod')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "twilight",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('twilightforest:alpha_yeti', 3, 'twilightforest:alpha_yeti_fur', 'twilightforest:ice_bomb')
    potting('twilightforest:carminite_broodling', 1, 'minecraft:string', 'minecraft:spider_eye')
    potting('twilightforest:carminite_ghastguard', 2, 'minecraft:gunpowder', 'minecraft:ghast_tear')
    potting('twilightforest:carminite_ghastling', 2, 'minecraft:gunpowder', 'minecraft:ghast_tear')
    potting('twilightforest:carminite_golem', 2, 'twilightforest:towerwood', 'minecraft:iron_ingot')
    potting('twilightforest:death_tome', 2, 'minecraft:book', 'minecraft:paper')
    potting('twilightforest:hedge_spider', 2, 'minecraft:string', 'minecraft:spider_eye')
    potting('twilightforest:hydra', 3, 'twilightforest:hydra_chop', 'twilightforest:fiery_blood')
    potting('twilightforest:king_spider', 2, 'minecraft:string', 'minecraft:spider_eye')
    potting('twilightforest:knight_phantom', 3, 'twilightforest:knightmetal_sword', 'twilightforest:knightmetal_chestplate')
    potting('twilightforest:kobold', 2, 'minecraft:wheat', 'minecraft:gold_nugget')
    potting('twilightforest:maze_slime', 2, 'minecraft:slime_ball', 'twilightforest:charm_of_keeping_1')
    potting('twilightforest:minoshroom', 3, 'twilightforest:meef_stroganoff', 'twilightforest:diamond_minotaur_axe')
    potting('twilightforest:skeleton_druid', 2, 'minecraft:bone', 'twilightforest:torchberries')
    potting('twilightforest:swarm_spider', 2, 'minecraft:string', 'minecraft:spider_eye')
    potting('twilightforest:troll', 2, 'twilightforest:deadrock', 'twilightforest:magic_beans')
    potting('twilightforest:ur_ghast', 3, 'twilightforest:carminite', 'twilightforest:fiery_tears')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot, lootcook) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "twilight",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot
                    },
                    "output_cooked": {
                        "item": lootcook
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                }
            ]
        })
    }
    potting('twilightforest:boar', 1, 'minecraft:porkchop', 'minecraft:cooked_porkchop')
    potting('twilightforest:minotaur', 2, 'twilightforest:raw_meef', 'twilightforest:cooked_meef')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "twilight",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                }
            ]
        })
    }
    potting('twilightforest:armored_giant', 2, 'twilightforest:giant_sword')
    potting('twilightforest:blockchain_goblin', 2, 'twilightforest:armor_shard')
    potting('twilightforest:fire_beetle', 2, 'minecraft:gunpowder')
    potting('twilightforest:ice_crystal', 1, 'minecraft:snowball')
    potting('twilightforest:lower_goblin_knight', 2, 'twilightforest:armor_shard')
    potting('twilightforest:naga', 3, 'twilightforest:naga_scale')
    potting('twilightforest:penguin', 1, 'minecraft:feather')
    potting('twilightforest:raven', 1, 'eidolon:raven_feather')
    potting('twilightforest:redcap', 2, 'minecraft:coal')
    potting('twilightforest:redcap_sapper', 2, 'minecraft:coal')
    potting('twilightforest:slime_beetle', 2, 'minecraft:slime_ball')
    potting('twilightforest:stable_ice_core', 1, 'minecraft:snowball')
    potting('twilightforest:tiny_bird', 1, 'minecraft:feather')
    potting('twilightforest:towerwood_borer', 2, 'twilightforest:borer_essence')
    potting('twilightforest:unstable_ice_core', 1, 'minecraft:snowball')
    potting('twilightforest:upper_goblin_knight', 2, 'twilightforest:armor_shard')
    potting('twilightforest:winter_wolf', 2, 'twilightforest:arctic_fur')
    potting('twilightforest:wraith', 2, 'minecraft:glowstone_dust')
    potting('twilightforest:yeti', 2, 'twilightforest:arctic_fur')
})


// Caged Mobs - Aether
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2, loot3, loot4, loot5) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "aether",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": loot3
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.25,
                    "output": {
                        "item": loot4
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.25,
                    "output": {
                        "item": loot5
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
        potting('aether:mimic', 2, 'minecraft:chest', 'minecraft:trapped_chest', 'aether:golden_amber', 'aether:zanite_gemstone', 'aether:ambrosium_shard')
    }
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "aether",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 1,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                }
            ]
        })
    }
    potting('aether:blue_swet', 2, 'aether:swet_ball', 'aether:blue_aercloud')
    potting('aether:sentry', 2, 'aether:carved_stone', 'aether:sentry_stone')
    potting('aether:slider', 2, 'aether:carved_stone', 'aether:bronze_dungeon_key')
    potting('aether:sun_spirit', 2, 'aether:sun_altar', 'aether:gold_dungeon_key')
    potting('lost_aether_content:aerwhale_king', 3, 'aether:blue_aercloud', 'lost_aether_content:platinum_key')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot1cook, loot2) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "aether",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot1
                    },
                    "output_cooked": {
                        "item": loot1cook
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 1,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                }
            ]
        })
    }
    potting('aether:flying_cow', 1, 'minecraft:beef', 'minecraft:cooked_beef', 'minecraft:leather')
    potting('aether:phyg', 1, 'minecraft:porkchop', 'minecraft:cooked_porkchop', 'minecraft:feather')
})
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "aether",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": loot
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                }
            ]
        })
    }
    potting('aether:aechor_plant', 2, 'aether:aechor_petal')
    potting('aether:aerbunny', 1, 'string')
    potting('aether:cockatrice', 1, 'minecraft:feather')
    potting('aether:golden_swet', 2, 'minecraft:glowstone')
    potting('aether:moa', 2, 'aether:holystone')
    potting('aether:valkyrie', 2, 'aether:victory_medal')
    potting('aether:valkyrie_queen', 3, 'aether:silver_dungeon_key')
    potting('aether:zephyr', 1, 'aether:cold_aercloud')
    potting('ancient_aether:aeronautic_leaper', 2, 'ancient_aether:corrupted_aeronautic_stone')
})


// Caged Mobs - Other
ServerEvents.recipes(e => {
    let potting = (env, entity, tier) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                env,
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": "minecraft:mutton"
                    },
                    "output_cooked": {
                        "item": "minecraft:cooked_mutton"
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:white_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:light_gray_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:gray_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:black_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:brown_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:red_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:orange_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:yellow_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:lime_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:green_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:cyan_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:light_blue_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:blue_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:purple_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:magenta_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:pink_wool"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('aether', 'aether:sheepuff', 1)
    potting('overworld', 'minecraft:sheep', 1)
    potting('twilight', 'twilightforest:bighorn_sheep', 1)
    potting('twilight', 'twilightforest:quest_ram', 2)
})
ServerEvents.recipes(e => {
    let potting = (env, entity, tier) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                env,
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": "alexsmobs:leafcutter_ant_pupa"
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "alexsmobs:gongylidia"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:oak_sapling"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:spruce_sapling"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:birch_sapling"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:jungle_sapling"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:acacia_sapling"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:dark_oak_sapling"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('overworld', 'alexsmobs:leafcutter_ant', 1)
})
ServerEvents.recipes(e => {
    let potting = (env, entity, tier) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                env,
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 1,
                    "output": {
                        "item": "minecraft:netherite_ingot"
                    },
                    "minAmount": 1,
                    "maxAmount": 2
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:heart_of_the_sea"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:nether_star"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:wither_skeleton_skull"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.5,
                    "output": {
                        "item": "minecraft:ancient_debris"
                    },
                    "minAmount": 8,
                    "maxAmount": 8
                },
                {
                    "chance": 0.25,
                    "output": {
                        "item": "minecraft:wither_skeleton_spawn_egg"
                    },
                    "minAmount": 16,
                    "maxAmount": 16
                },
                {
                    "chance": 0.25,
                    "output": {
                        "item": "minecraft:blaze_spawn_egg"
                    },
                    "minAmount": 16,
                    "maxAmount": 16
                },
                {
                    "chance": 0.25,
                    "output": {
                        "item": "minecraft:zombified_piglin_spawn_egg"
                    },
                    "minAmount": 16,
                    "maxAmount": 16
                },
                {
                    "chance": 0.1,
                    "output": {
                        "item": "minecraft:elder_guardian_spawn_egg"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.1,
                    "output": {
                        "item": "minecraft:warden_spawn_egg"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.1,
                    "output": {
                        "item": "minecraft:wither_spawn_egg"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.1,
                    "output": {
                        "item": "minecraft:spawner"
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('overworld', 'netherite_warden:netheritewarden', 3)
})
ServerEvents.recipes(e => {
    let potting = (env, entity, tier) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                env,
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:goat_horn"
                    },
                    "nbtName": "instrument",
                    "nbtData": "minecraft:ponder_goat_horn",
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:goat_horn"
                    },
                    "nbtName": "instrument",
                    "nbtData": "minecraft:sing_goat_horn",
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:goat_horn"
                    },
                    "nbtName": "instrument",
                    "nbtData": "minecraft:seek_goat_horn",
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:goat_horn"
                    },
                    "nbtName": "instrument",
                    "nbtData": "minecraft:feel_goat_horn",
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:goat_horn"
                    },
                    "nbtName": "instrument",
                    "nbtData": "minecraft:admire_goat_horn",
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:goat_horn"
                    },
                    "nbtName": "instrument",
                    "nbtData": "minecraft:call_goat_horn",
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:goat_horn"
                    },
                    "nbtName": "instrument",
                    "nbtData": "minecraft:yearn_goat_horn",
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:goat_horn"
                    },
                    "nbtName": "instrument",
                    "nbtData": "minecraft:dream_goat_horn",
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('overworld', 'minecraft:goat', 1)
})