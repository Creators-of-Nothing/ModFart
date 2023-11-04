// Sifter - Cobblestone
ServerEvents.recipes(e => {
    let potting = (mesh, chance) => {
        e.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": mesh
                },
                {
                    "item": "minecraft:cobblestone"
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "chance": chance,
                    "item": "kubejs:raw_coal"
                },
                {
                    "chance": chance,
                    "item": "minecraft:raw_iron"
                },
                {
                    "chance": chance,
                    "item": "minecraft:raw_copper"
                },
                {
                    "chance": chance,
                    "item": "minecraft:raw_gold"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_redstone"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_emerald"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_lapis_lazuli"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_diamond"
                },
                {
                    "chance": chance,
                    "item": "create:raw_zinc"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_dimensionalshard"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_endumium"
                },
                {
                    "chance": chance,
                    "item": "create:experience_nugget"
                }
            ]
        })
    }
    potting('createsifter:string_mesh', 0.015625)
    potting('createsifter:andesite_mesh', 0.03125)
    potting('createsifter:zinc_mesh', 0.0625)
    potting('createsifter:brass_mesh', 0.125)
    potting('createsifter:advanced_brass_mesh', 0.25)
    potting('createsifter:custom_mesh', 0.5)
    potting('createsifter:advanced_custom_mesh', 1)
})


// Sifter - Cobbled Deepslate
ServerEvents.recipes(e => {
    let potting = (mesh, chance) => {
        e.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": mesh
                },
                {
                    "item": "minecraft:cobbled_deepslate"
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "chance": chance,
                    "item": "kubejs:raw_coal"
                },
                {
                    "chance": chance,
                    "item": "minecraft:raw_iron"
                },
                {
                    "chance": chance,
                    "item": "minecraft:raw_copper"
                },
                {
                    "chance": chance,
                    "item": "minecraft:raw_gold"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_redstone"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_emerald"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_lapis_lazuli"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_diamond"
                },
                {
                    "chance": chance,
                    "item": "create:raw_zinc"
                },
                {
                    "chance": chance,
                    "item": "create:experience_nugget"
                }
            ]
        })
    }
    potting('createsifter:string_mesh', 0.015625)
    potting('createsifter:andesite_mesh', 0.03125)
    potting('createsifter:zinc_mesh', 0.0625)
    potting('createsifter:brass_mesh', 0.125)
    potting('createsifter:advanced_brass_mesh', 0.25)
    potting('createsifter:custom_mesh', 0.5)
    potting('createsifter:advanced_custom_mesh', 1)
})


// Sifter - Cobbled Sculk Stone
ServerEvents.recipes(e => {
    let potting = (mesh, chance) => {
        e.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": mesh
                },
                {
                    "item": "deeperdarker:cobbled_sculk_stone"
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "chance": chance,
                    "item": "kubejs:raw_coal"
                },
                {
                    "chance": chance,
                    "item": "minecraft:raw_iron"
                },
                {
                    "chance": chance,
                    "item": "minecraft:raw_copper"
                },
                {
                    "chance": chance,
                    "item": "minecraft:raw_gold"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_redstone"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_emerald"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_lapis_lazuli"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_diamond"
                },
                {
                    "chance": chance,
                    "item": "minecraft:echo_shard"
                },
                {
                    "chance": chance,
                    "item": "deeperdarker:warden_carapace"
                },
                {
                    "chance": chance,
                    "item": "create:experience_nugget"
                }
            ]
        })
    }
    potting('createsifter:string_mesh', 0.015625)
    potting('createsifter:andesite_mesh', 0.03125)
    potting('createsifter:zinc_mesh', 0.0625)
    potting('createsifter:brass_mesh', 0.125)
    potting('createsifter:advanced_brass_mesh', 0.25)
    potting('createsifter:custom_mesh', 0.5)
    potting('createsifter:advanced_custom_mesh', 1)
})


// Sifter - Deadrock
ServerEvents.recipes(e => {
    let potting = (mesh, chance) => {
        e.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": mesh
                },
                {
                    "item": "twilightforest:deadrock"
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "chance": chance,
                    "item": "twilightforest:raw_ironwood"
                },
                {
                    "chance": chance,
                    "item": "twilightforest:steeleaf_ingot"
                },
                {
                    "chance": chance,
                    "item": "twilightforest:armor_shard"
                },
                {
                    "chance": chance,
                    "item": "twilightforest:fiery_ingot"
                },
                {
                    "chance": chance,
                    "item": "twilightforest:arctic_fur"
                },
                {
                    "chance": chance,
                    "item": "twilightforest:carminite"
                },
                {
                    "chance": chance,
                    "item": "create:experience_nugget"
                }
            ]
        })
    }
    potting('createsifter:string_mesh', 0.015625)
    potting('createsifter:andesite_mesh', 0.03125)
    potting('createsifter:zinc_mesh', 0.0625)
    potting('createsifter:brass_mesh', 0.125)
    potting('createsifter:advanced_brass_mesh', 0.25)
    potting('createsifter:custom_mesh', 0.5)
    potting('createsifter:advanced_custom_mesh', 1)
})


// Sifter - Deepslate
ServerEvents.recipes(e => {
    let potting = (mesh, chance) => {
        e.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": mesh
                },
                {
                    "item": "minecraft:deepslate"
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "chance": chance,
                    "item": "kubejs:raw_ruby"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_jade"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_aquamarine"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_onyx"
                },
                {
                    "chance": chance,
                    "item": "epicsamurai:raw_silver"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_endumium"
                },
                {
                    "chance": chance,
                    "item": "mekanism:raw_tin"
                },
                {
                    "chance": chance,
                    "item": "mekanism:raw_osmium"
                },
                {
                    "chance": chance,
                    "item": "mekanism:raw_uranium"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_fluorite"
                },
                {
                    "chance": chance,
                    "item": "mekanism:raw_lead"
                },
                {
                    "chance": chance,
                    "item": "create:experience_nugget"
                }
            ]
        })
    }
    potting('createsifter:string_mesh', 0.015625)
    potting('createsifter:andesite_mesh', 0.03125)
    potting('createsifter:zinc_mesh', 0.0625)
    potting('createsifter:brass_mesh', 0.125)
    potting('createsifter:advanced_brass_mesh', 0.25)
    potting('createsifter:custom_mesh', 0.5)
    potting('createsifter:advanced_custom_mesh', 1)
})


// Sifter - Depthrock
ServerEvents.recipes(e => {
    let potting = (mesh, chance) => {
        e.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": mesh
                },
                {
                    "item": "undergarden:depthrock"
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "chance": chance,
                    "item": "kubejs:raw_coal"
                },
                {
                    "chance": chance,
                    "item": "minecraft:raw_iron"
                },
                {
                    "chance": chance,
                    "item": "minecraft:raw_gold"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_diamond"
                },
                {
                    "chance": chance,
                    "item": "undergarden:raw_cloggrum"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_utherium"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_regalium"
                },
                {
                    "chance": chance,
                    "item": "undergarden:forgotten_nugget"
                },
                {
                    "chance": chance,
                    "item": "create:experience_nugget"
                }
            ]
        })
    }
    potting('createsifter:string_mesh', 0.015625)
    potting('createsifter:andesite_mesh', 0.03125)
    potting('createsifter:zinc_mesh', 0.0625)
    potting('createsifter:brass_mesh', 0.125)
    potting('createsifter:advanced_brass_mesh', 0.25)
    potting('createsifter:custom_mesh', 0.5)
    potting('createsifter:advanced_custom_mesh', 1)
})


// Sifter - End Stone
ServerEvents.recipes(e => {
    let potting = (mesh, chance) => {
        e.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": mesh
                },
                {
                    "item": "minecraft:end_stone"
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "chance": chance,
                    "item": "minecraft:ender_pearl"
                },
                {
                    "chance": chance,
                    "item": "minecraft:chorus_flower"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_enderite"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_malachite"
                },
                {
                    "chance": chance,
                    "item": "enlightened_end:raw_irradium"
                },
                {
                    "chance": chance,
                    "item": "enlightened_end:raw_bismuth"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_dimensionalshard"
                },
                {
                    "chance": chance,
                    "item": "minecraft:shulker_shell"
                },
                {
                    "chance": chance,
                    "item": "create:experience_nugget"
                }
            ]
        })
    }
    potting('createsifter:string_mesh', 0.015625)
    potting('createsifter:andesite_mesh', 0.03125)
    potting('createsifter:zinc_mesh', 0.0625)
    potting('createsifter:brass_mesh', 0.125)
    potting('createsifter:advanced_brass_mesh', 0.25)
    potting('createsifter:custom_mesh', 0.5)
    potting('createsifter:advanced_custom_mesh', 1)
})


// Sifter - Gravel
ServerEvents.recipes(e => {
    let potting = (mesh, chance) => {
        e.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": mesh
                },
                {
                    "item": "minecraft:gravel"
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "chance": chance,
                    "item": "minecraft:flint"
                },
                {
                    "chance": chance,
                    "item": "minecraft:clay_ball"
                },
                {
                    "chance": chance,
                    "item": "minecraft:slime_ball"
                },
                {
                    "chance": chance,
                    "item": "create:experience_nugget"
                }
            ]
        })
    }
    potting('createsifter:string_mesh', 0.015625)
    potting('createsifter:andesite_mesh', 0.03125)
    potting('createsifter:zinc_mesh', 0.0625)
    potting('createsifter:brass_mesh', 0.125)
    potting('createsifter:advanced_brass_mesh', 0.25)
    potting('createsifter:custom_mesh', 0.5)
    potting('createsifter:advanced_custom_mesh', 1)
})


// Changed crafts
ServerEvents.recipes(e => {
    e.remove({ id: /createsifter:sifting/ })
})


// Sifter - Netherrack
ServerEvents.recipes(e => {
    let potting = (mesh, chance) => {
        e.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": mesh
                },
                {
                    "item": "minecraft:netherrack"
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "chance": chance,
                    "item": "minecraft:raw_gold"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_quartz"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_netherite"
                },
                {
                    "chance": chance,
                    "item": "minecraft:glowstone_dust"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_dimensionalshard"
                },
                {
                    "chance": chance,
                    "item": "stalwart_dungeons:raw_tungsten"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_chorundum"
                },
                {
                    "chance": chance,
                    "item": "minecraft:blaze_rod"
                },
                {
                    "chance": chance,
                    "item": "minecraft:ghast_tear"
                },
                {
                    "chance": chance,
                    "item": "create:experience_nugget"
                }
            ]
        })
    }
    potting('createsifter:string_mesh', 0.015625)
    potting('createsifter:andesite_mesh', 0.03125)
    potting('createsifter:zinc_mesh', 0.0625)
    potting('createsifter:brass_mesh', 0.125)
    potting('createsifter:advanced_brass_mesh', 0.25)
    potting('createsifter:custom_mesh', 0.5)
    potting('createsifter:advanced_custom_mesh', 1)
})


// Sifter - Shiverstone
ServerEvents.recipes(e => {
    let potting = (mesh, chance) => {
        e.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": mesh
                },
                {
                    "item": "undergarden:shiverstone"
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "chance": chance,
                    "item": "kubejs:raw_coal"
                },
                {
                    "chance": chance,
                    "item": "minecraft:raw_iron"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_diamond"
                },
                {
                    "chance": chance,
                    "item": "undergarden:raw_cloggrum"
                },
                {
                    "chance": chance,
                    "item": "undergarden:raw_froststeel"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_utherium"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_regalium"
                },
                {
                    "chance": chance,
                    "item": "undergarden:forgotten_nugget"
                },
                {
                    "chance": chance,
                    "item": "create:experience_nugget"
                }
            ]
        })
    }
    potting('createsifter:string_mesh', 0.015625)
    potting('createsifter:andesite_mesh', 0.03125)
    potting('createsifter:zinc_mesh', 0.0625)
    potting('createsifter:brass_mesh', 0.125)
    potting('createsifter:advanced_brass_mesh', 0.25)
    potting('createsifter:custom_mesh', 0.5)
    potting('createsifter:advanced_custom_mesh', 1)
})


// Sifter - Stone
ServerEvents.recipes(e => {
    let potting = (mesh, chance) => {
        e.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": mesh
                },
                {
                    "item": "minecraft:stone"
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "chance": chance,
                    "item": "kubejs:raw_ruby"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_jade"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_aquamarine"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_onyx"
                },
                {
                    "chance": chance,
                    "item": "mekanism:raw_tin"
                },
                {
                    "chance": chance,
                    "item": "mekanism:raw_osmium"
                },
                {
                    "chance": chance,
                    "item": "mekanism:raw_uranium"
                },
                {
                    "chance": chance,
                    "item": "kubejs:raw_fluorite"
                },
                {
                    "chance": chance,
                    "item": "mekanism:raw_lead"
                },
                {
                    "chance": chance,
                    "item": "create:experience_nugget"
                }
            ]
        })
    }
    potting('createsifter:string_mesh', 0.015625)
    potting('createsifter:andesite_mesh', 0.03125)
    potting('createsifter:zinc_mesh', 0.0625)
    potting('createsifter:brass_mesh', 0.125)
    potting('createsifter:advanced_brass_mesh', 0.25)
    potting('createsifter:custom_mesh', 0.5)
    potting('createsifter:advanced_custom_mesh', 1)
})


// Sifter - Water - Red Sand
ServerEvents.recipes(e => {
    let potting = (mesh, chance) => {
        e.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": mesh
                },
                {
                    "item": "minecraft:red_sand"
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "chance": chance,
                    "item": "minecraft:fire_coral_block"
                },
                {
                    "chance": chance,
                    "item": "minecraft:fire_coral"
                },
                {
                    "chance": chance,
                    "item": "minecraft:fire_coral_fan"
                },
                {
                    "chance": chance,
                    "item": "minecraft:brain_coral_block"
                },
                {
                    "chance": chance,
                    "item": "minecraft:brain_coral"
                },
                {
                    "chance": chance,
                    "item": "minecraft:brain_coral_fan"
                },
                {
                    "chance": chance,
                    "item": "minecraft:bubble_coral_block"
                },
                {
                    "chance": chance,
                    "item": "minecraft:bubble_coral"
                },
                {
                    "chance": chance,
                    "item": "minecraft:bubble_coral_fan"
                },
                {
                    "chance": chance,
                    "item": "minecraft:kelp"
                },
                {
                    "chance": chance,
                    "item": "minecraft:clay_ball"
                },
                {
                    "chance": chance,
                    "item": "create:experience_nugget"
                }
            ],
            "waterlogged": true
        })
    }
    potting('createsifter:string_mesh', 0.015625)
    potting('createsifter:andesite_mesh', 0.03125)
    potting('createsifter:zinc_mesh', 0.0625)
    potting('createsifter:brass_mesh', 0.125)
    potting('createsifter:advanced_brass_mesh', 0.25)
    potting('createsifter:custom_mesh', 0.5)
    potting('createsifter:advanced_custom_mesh', 1)
})


// Sifter - Water - Sand
ServerEvents.recipes(e => {
    let potting = (mesh, chance) => {
        e.custom({
            "type": "createsifter:sifting",
            "ingredients": [
                {
                    "item": mesh
                },
                {
                    "item": "minecraft:sand"
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "chance": chance,
                    "item": "minecraft:tube_coral_block"
                },
                {
                    "chance": chance,
                    "item": "minecraft:tube_coral"
                },
                {
                    "chance": chance,
                    "item": "minecraft:tube_coral_fan"
                },
                {
                    "chance": chance,
                    "item": "minecraft:horn_coral_block"
                },
                {
                    "chance": chance,
                    "item": "minecraft:horn_coral"
                },
                {
                    "chance": chance,
                    "item": "minecraft:horn_coral_fan"
                },
                {
                    "chance": chance,
                    "item": "minecraft:kelp"
                },
                {
                    "chance": chance,
                    "item": "minecraft:clay_ball"
                },
                {
                    "chance": chance,
                    "item": "create:experience_nugget"
                }
            ],
            "waterlogged": true
        })
    }
    potting('createsifter:string_mesh', 0.015625)
    potting('createsifter:andesite_mesh', 0.03125)
    potting('createsifter:zinc_mesh', 0.0625)
    potting('createsifter:brass_mesh', 0.125)
    potting('createsifter:advanced_brass_mesh', 0.25)
    potting('createsifter:custom_mesh', 0.5)
    potting('createsifter:advanced_custom_mesh', 1)
})