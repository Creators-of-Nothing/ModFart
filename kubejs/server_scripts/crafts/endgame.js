// Changed crafts
ServerEvents.recipes(e => {
    // Create
    e.remove({ id: 'createchromaticreturn:motor_recipe' })
    e.remove({ id: 'createchromaticreturn:generator_recipe' })
    e.remove({ id: 'createchromaticreturn:bedrock_shard_crushing' })
    e.remove({ id: 'createchromaticreturn:multiplite_tube_recipe' })
    e.remove({ id: 'createchromaticreturn:refined_mixture_recipe' })
    // Extended Crafting
    e.remove({ id: 'extendedcrafting:crystaltine_ingot' })
    // Refined Storage
    e.remove({ id: 'extradisks:part/infinite_storage_part' })
    e.remove({ id: 'extradisks:part/infinite_fluid_storage_part' })
})

// Apparatus
ServerEvents.recipes(e => {
    let potting = (A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, a, b, c, apparatus) => {
        e.custom({
            "type": "create:mechanical_crafting",
            "pattern": [
                "  A B  ",
                " CDEFG ",
                "HI J KL",
                " MNOPQ ",
                "RS T UV",
                " WXYZa ",
                "  b c  "
            ],
            "key": {
                "A": { "item": A },
                "B": { "item": B },
                "C": { "item": C },
                "D": { "item": D },
                "E": { "item": E },
                "F": { "item": F },
                "G": { "item": G },
                "H": { "item": H },
                "I": { "item": I },
                "J": { "item": J },
                "K": { "item": K },
                "L": { "item": L },
                "M": { "item": M },
                "N": { "item": N },
                "O": { "item": O },
                "P": { "item": P },
                "Q": { "item": Q },
                "R": { "item": R },
                "S": { "item": S },
                "T": { "item": T },
                "U": { "item": U },
                "V": { "item": V },
                "W": { "item": W },
                "X": { "item": X },
                "Y": { "item": Y },
                "Z": { "item": Z },
                "a": { "item": a },
                "b": { "item": b },
                "c": { "item": c }
            },
            "result": { "item": apparatus }
        })
    }
    potting('moreplates:iron_rod',
        'moreplates:lapis_lazuli_rod',
        'moreplates:iron_gear',
        'moreplates:iron_plate',
        'moreplates:lapis_lazuli_gear',
        'moreplates:lapis_lazuli_plate',
        'moreplates:coal_gear',
        'moreplates:gold_rod',
        'moreplates:gold_plate',
        'moreplates:nether_quartz_rod',
        'moreplates:coal_plate',
        'moreplates:coal_rod',
        'moreplates:gold_gear',
        'moreplates:redstone_rod',
        'kubejs:echo_gear',
        'moreplates:amethyst_rod',
        'moreplates:netherite_gear',
        'moreplates:copper_rod',
        'moreplates:copper_plate',
        'moreplates:glowstone_rod',
        'moreplates:netherite_plate',
        'moreplates:netherite_rod',
        'moreplates:copper_gear',
        'moreplates:emerald_plate',
        'moreplates:emerald_gear',
        'moreplates:diamond_plate',
        'moreplates:diamond_gear',
        'moreplates:emerald_rod',
        'moreplates:diamond_rod',
        'kubejs:basical_apparatus')
    potting('kubejs:dimensional_rod',
        'kubejs:drygmy_rod',
        'kubejs:dimensional_gear',
        'kubejs:dimensional_plate',
        'kubejs:drygmy_gear',
        'kubejs:drygmy_plate',
        'kubejs:wixie_gear',
        'kubejs:enderite_rod',
        'kubejs:enderite_plate',
        'moreplates:neptunium_rod',
        'kubejs:wixie_plate',
        'kubejs:wixie_rod',
        'kubejs:enderite_gear',
        'kubejs:pewter_rod',
        'kubejs:source_gear',
        'kubejs:arcane_gold_rod',
        'kubejs:whirlisprig_gear',
        'moreplates:prismarine_crystal_rod',
        'moreplates:prismarine_crystal_plate',
        'kubejs:ash_rod',
        'kubejs:whirlisprig_plate',
        'kubejs:whirlisprig_rod',
        'moreplates:prismarine_crystal_gear',
        'kubejs:endumium_plate',
        'kubejs:endumium_gear',
        'kubejs:starbuncle_plate',
        'kubejs:starbuncle_gear',
        'kubejs:endumium_rod',
        'kubejs:starbuncle_rod',
        'kubejs:magical_apparatus')
    potting('moreplates:steel_rod',
        'kubejs:andesite_rod',
        'moreplates:steel_gear',
        'moreplates:steel_plate',
        'kubejs:andesite_gear',
        'kubejs:andesite_plate',
        'kubejs:rose_quartz_gear',
        'moreplates:refined_glowstone_rod',
        'moreplates:refined_glowstone_plate',
        'kubejs:arctic_rod',
        'kubejs:rose_quartz_plate',
        'kubejs:rose_quartz_rod',
        'moreplates:refined_glowstone_gear',
        'kubejs:fiery_rod',
        'kubejs:antimatter_gear',
        'moreplates:bronze_rod',
        'moreplates:crystaltine_gear',
        'moreplates:refined_obsidian_rod',
        'moreplates:refined_obsidian_plate',
        'kubejs:cloggrum_rod',
        'moreplates:crystaltine_plate',
        'moreplates:crystaltine_rod',
        'moreplates:refined_obsidian_gear',
        'moreplates:enhanced_ender_plate',
        'moreplates:enhanced_ender_gear',
        'kubejs:enhanced_redstone_plate',
        'kubejs:enhanced_redstone_gear',
        'moreplates:enhanced_ender_rod',
        'kubejs:enhanced_redstone_rod',
        'kubejs:mechanical_apparatus')
    potting('kubejs:scute_rod',
        'kubejs:experience_rod',
        'kubejs:scute_gear',
        'kubejs:scute_plate',
        'kubejs:experience_gear',
        'kubejs:experience_plate',
        'kubejs:witherite_gear',
        'kubejs:deep_rod',
        'kubejs:deep_plate',
        'kubejs:phantom_rod',
        'kubejs:witherite_plate',
        'kubejs:witherite_rod',
        'kubejs:deep_gear',
        'kubejs:ignitium_rod',
        'kubejs:nether_star_gear',
        'kubejs:forgotten_rod',
        'kubejs:straddlite_gear',
        'kubejs:dragon_rod',
        'kubejs:dragon_plate',
        'kubejs:titan_rod',
        'kubejs:straddlite_plate',
        'kubejs:straddlite_rod',
        'kubejs:dragon_gear',
        'kubejs:sea_plate',
        'kubejs:sea_gear',
        'kubejs:honey_plate',
        'kubejs:honey_gear',
        'kubejs:sea_rod',
        'kubejs:honey_rod',
        'kubejs:vital_apparatus')
})
ServerEvents.recipes(e => {
    let potting = (apparatus, A, B, C, D, F, G, H, I) => {
        e.shaped(apparatus, [
            'ABC',
            'DEF',
            'GHI'
        ], {
            A: A,
            B: B,
            C: C,
            D: D,
            E: "extendedcrafting:the_ultimate_nugget",
            F: F,
            G: G,
            H: H,
            I: I
        })
    }
    potting('kubejs:basical_apparatus',
        'moreplates:iron_gear',
        'moreplates:lapis_lazuli_gear',
        'moreplates:coal_gear',
        'moreplates:gold_gear',
        'moreplates:netherite_gear',
        'kubejs:echo_gear',
        'moreplates:emerald_gear',
        'moreplates:diamond_gear')
    potting('kubejs:magical_apparatus',
        'kubejs:dimensional_gear',
        'kubejs:source_gear',
        'kubejs:pewter_gear',
        'kubejs:enderite_gear',
        'kubejs:ash_gear',
        'moreplates:prismarine_crystal_gear',
        'kubejs:endumium_gear',
        'kubejs:starbuncle_gear')
    potting('kubejs:mechanical_apparatus',
        'moreplates:steel_gear',
        'kubejs:andesite_gear',
        'kubejs:rose_quartz_gear',
        'moreplates:refined_glowstone_gear',
        'kubejs:antimatter_gear',
        'moreplates:refined_obsidian_gear',
        'moreplates:enhanced_ender_gear',
        'kubejs:enhanced_redstone_gear')
    potting('kubejs:vital_apparatus',
        'kubejs:nether_star_gear',
        'kubejs:experience_gear',
        'kubejs:titan_gear',
        'kubejs:deep_gear',
        'kubejs:straddlite_gear',
        'kubejs:dragon_gear',
        'kubejs:sea_gear',
        'kubejs:honey_gear')
})

// The Ultimate Ingot
ServerEvents.recipes(e => {
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "count": 1,
        "reagent": [{ "item": "alexsmobs:rainbow_jelly" }],
        "pedestalItems": [
            { "item": { "item": "kubejs:basical_apparatus" } },
            { "item": { "item": "kubejs:magical_apparatus" } },
            { "item": { "item": "kubejs:mechanical_apparatus" } },
            { "item": { "item": "kubejs:vital_apparatus" } }],
        "output": { "item": "extendedcrafting:the_ultimate_ingot", },
        "sourceCost": 2000
    })
})

// Ars Nouveau
ServerEvents.recipes(e => {
    e.shaped("ars_nouveau:creative_spell_book", [
        'ABC',
        'DDE',
        'EEF'
    ], {
        A: "ars_nouveau:archmage_spell_book",
        B: "extendedcrafting:the_ultimate_catalyst",
        C: "ars_elemental:necrotic_focus",
        D: "kubejs:nether_star_plate",
        E: "moreplates:diamond_plate",
        F: "ars_nouveau:thread_undying"
    })
})
ServerEvents.recipes(e => {
    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "ars_nouveau:source_jar" },
        "loops": 1,
        "results": [{ "item": "ars_nouveau:creative_source_jar" }],
        "sequence": [{
            "type": "create:deploying",
            "ingredients": [
                { "item": "ars_nouveau:source_jar" },
                { "item": "extendedcrafting:the_ultimate_catalyst" }],
            "results": [{ "item": "ars_nouveau:source_jar" }]
        }, {
            "type": "create:filling",
            "ingredients": [
                { "item": "ars_nouveau:source_jar" },
                { "fluid": "starbunclemania:source_fluid", "amount": 1000 }],
            "results": [{ "item": "ars_nouveau:source_jar" }]
        }, {
            "type": "create:filling",
            "ingredients": [
                { "item": "ars_nouveau:source_jar" },
                { "fluid": "starbunclemania:source_fluid", "amount": 1000 }],
            "results": [{ "item": "ars_nouveau:source_jar" }]
        }, {
            "type": "create:filling",
            "ingredients": [
                { "item": "ars_nouveau:source_jar" },
                { "fluid": "starbunclemania:source_fluid", "amount": 1000 }],
            "results": [{ "item": "ars_nouveau:source_jar" }]
        }, {
            "type": "create:filling",
            "ingredients": [
                { "item": "ars_nouveau:source_jar" },
                { "fluid": "starbunclemania:source_fluid", "amount": 1000 }],
            "results": [{ "item": "ars_nouveau:source_jar" }]
        }],
        "transitionalItem": { "item": "ars_nouveau:source_jar" }
    })
})

// Caged Mobs
ServerEvents.recipes(e => {
    e.shaped("cagedmobs:creative_upgrade", [
        'A A',
        'BCB',
        'BDB'
    ], {
        A: "createchromaticreturn:multiplite_tube",
        B: "cagedmobs:speed_iii_upgrade",
        C: "kubejs:void_steel_gear",
        D: "aquaculture:neptunium_ingot"
    })
})

// Refined Storage
ServerEvents.recipes(e => {
    let potting = (A, output) => {
        e.custom({
            "type": "extendedcrafting:combination",
            "powerCost": 1000000000,
            "powerRate": 1000000,
            "input": { "item": "extendedcrafting:the_ultimate_catalyst" },
            "ingredients": [
                { "item": "extradisks:withering_processor" },
                { "item": "moreplates:quartz_enriched_gear" },
                { "item": "extradisks:withering_processor" },
                { "item": "mekanism:qio_drive_supermassive" },
                { "item": A },
                { "item": "mekanism:qio_drive_supermassive" },
                { "item": "extradisks:withering_processor" },
                { "item": A },
                { "item": "extradisks:withering_processor" },
                { "item": "mekanism:qio_drive_supermassive" },
                { "item": A },
                { "item": "mekanism:qio_drive_supermassive" }
            ],
            "result": { "item": output }
        })
    }
    potting('extradisks:4096k_storage_part', 'extradisks:infinite_storage_part')
    potting('refinedstorage:4096k_fluid_storage_part', 'extradisks:infinite_fluid_storage_part')
})
ServerEvents.recipes(e => {
    let potting = (A, B, output) => {
        e.custom({
            "type": "extendedcrafting:combination",
            "powerCost": 1000000000,
            "powerRate": 1000000,
            "input": { "item": "extendedcrafting:the_ultimate_catalyst" },
            "ingredients": [
                { "item": "extradisks:withering_processor" },
                { "item": "moreplates:quartz_enriched_gear" },
                { "item": "extradisks:withering_processor" },
                { "item": B },
                { "item": "extradisks:advanced_machine_casing" },
                { "item": B },
                { "item": "extradisks:withering_processor" },
                { "item": A },
                { "item": "extradisks:withering_processor" },
                { "item": B },
                { "item": "extradisks:advanced_machine_casing" },
                { "item": B }
            ],
            "result": { "item": output }
        })
    }
    potting('extrastorage:netherite_crafter', 'sophisticatedstorage:crafting_upgrade', 'creativecrafter:creative_crafter')
    potting('refinedstorage:controller', 'kubejs:deep_plate', 'refinedstorage:creative_controller')
    potting('refinedstorage:portable_grid', 'sophisticatedstorage:stack_upgrade_tier_4', 'refinedstorage:creative_portable_grid')
})
ServerEvents.recipes(e => {
    let potting = (A, output) => {
        e.custom({
            "type": "extendedcrafting:combination",
            "powerCost": 1000000000,
            "powerRate": 1000000,
            "input": { "item": "extendedcrafting:the_ultimate_catalyst" },
            "ingredients": [
                { "item": "extradisks:withering_processor" },
                { "item": "moreplates:quartz_enriched_gear" },
                { "item": "extradisks:withering_processor" },
                { "item": "moreplates:silicon_plate" },
                { "item": "moreplates:ender_plate" },
                { "item": "moreplates:silicon_plate" },
                { "item": "extradisks:withering_processor" },
                { "item": A },
                { "item": "extradisks:withering_processor" },
                { "item": "moreplates:silicon_plate" },
                { "item": "moreplates:ender_plate" },
                { "item": "moreplates:silicon_plate" }
            ],
            "result": { "item": output }
        })
    }
    potting('refinedstorage:wireless_grid', 'refinedstorage:creative_wireless_grid')
    potting('refinedstorage:wireless_fluid_grid', 'refinedstorage:creative_wireless_fluid_grid')
    potting('refinedstorageaddons:wireless_crafting_grid', 'refinedstorageaddons:creative_wireless_crafting_grid')
    potting('refinedstorage:wireless_crafting_monitor', 'refinedstorage:creative_wireless_crafting_monitor')
})
ServerEvents.recipes(e => {
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 3,
        "pattern": [
            "AAABAAA",
            "A  A  A",
            "C DED C",
            "FEEGEEF",
            "C DED C",
            "A  H  A",
            "AACFCAA"
        ],
        "key": {
            "A": {
                "item": "moreplates:silicon_plate"
            },
            "B": {
                "item": "kubejs:deep_gear"
            },
            "C": {
                "item": "extradisks:withering_processor"
            },
            "D": {
                "item": "moreplates:diamond_plate"
            },
            "E": {
                "item": "moreplates:ender_plate"
            },
            "F": {
                "item": "extendedcrafting:the_ultimate_catalyst"
            },
            "G": {
                "item": "universalgrid:wireless_universal_grid"
            },
            "H": {
                "item": "moreplates:crystaltine_gear"
            }
        },
        "result": {
            "item": "universalgrid:creative_wireless_universal_grid"
        }
    })
})
ServerEvents.recipes(e => {
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 1,
        "pattern": [
            "ABA",
            "CDE",
            "AFA"
        ],
        "key": {
            "A": {
                "item": "moreplates:diamond_plate"
            },
            "B": {
                "item": "kubejs:deep_gear"
            },
            "C": {
                "item": "refinedstorage:creative_wireless_fluid_grid"
            },
            "D": {
                "item": "moreplates:crystaltine_gear"
            },
            "E": {
                "item": "refinedstorageaddons:creative_wireless_crafting_grid"
            },
            "F": {
                "item": "refinedstorage:creative_wireless_grid"
            }
        },
        "result": {
            "item": "universalgrid:creative_wireless_universal_grid"
        }
    })
})

// Mekanism
ServerEvents.recipes(e => {
    e.shaped("solarpanels:creative_solar_element", [
        'AAA',
        'BBB',
        'CCC'
    ], {
        A: "minecraft:magenta_stained_glass_pane",
        B: "kubejs:crystal_enderite",
        C: "extendedcrafting:ender_star"
    })
})
ServerEvents.recipes(e => {
    e.shaped("solarpanels:creative_energy_tablet", [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: "extendedcrafting:flux_star",
        B: "kubejs:antimatter_plate",
        C: "moreplates:the_ultimate_gear",
        D: "solarpanels:photonic_energy_tablet"
    })
})
ServerEvents.recipes(e => {
    e.shaped("solarpanels:creative_solar_panel", [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: "solarpanels:creative_solar_element",
        B: "extendedcrafting:the_ultimate_ingot",
        C: "solarpanels:photonic_solar_panel",
        D: "extendedcrafting:the_ultimate_catalyst",
        E: "solarpanels:creative_energy_tablet"
    })
})
ServerEvents.recipes(e => {
    let potting = (output, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W) => {
        e.custom({
            "type": "extendedcrafting:shaped_table",
            "tier": 4,
            "pattern": [
                "AAAABAAAA",
                "ACDEFEDCA",
                "ADGHIHGDA",
                "AJKLMLKNA",
                "BOPQRQSTB",
                "AJKLMLKNA",
                "ADGHUHGDA",
                "ACDVWVDCA",
                "AAAABAAAA"
            ],
            "key": {
                "A": {
                    "item": A
                },
                "B": {
                    "item": B
                },
                "C": {
                    "item": C
                },
                "D": {
                    "item": D
                },
                "E": {
                    "item": E
                },
                "F": {
                    "item": F
                },
                "G": {
                    "item": G
                },
                "H": {
                    "item": H
                },
                "I": {
                    "item": I
                },
                "J": {
                    "item": J
                },
                "K": {
                    "item": K
                },
                "L": {
                    "item": L
                },
                "M": {
                    "item": M
                },
                "N": {
                    "item": N
                },
                "O": {
                    "item": O
                },
                "P": {
                    "item": P
                },
                "Q": {
                    "item": Q
                },
                "R": {
                    "item": R
                },
                "S": {
                    "item": S
                },
                "T": {
                    "item": T
                },
                "U": {
                    "item": U
                },
                "V": {
                    "item": V
                },
                "W": {
                    "item": W
                }
            },
            "result": {
                "item": output
            }
        })
    }
    potting('mekanism:creative_fluid_tank',
        'mekanism:upgrade_filter',
        'moreplates:osmium_gear',
        'kubejs:hdpe_gear',
        'mekanism:ultimate_mechanical_pipe',
        'moreplates:tin_gear',
        'twilightforest:giant_leaves',
        'mekanism:ultimate_fluid_tank',
        'kubejs:polonium_gear',
        'mekanism:ultimate_fluid_tank',
        'moreplates:lead_gear',
        'kubejs:plutonium_gear',
        'extradisks:infinite_fluid_storage_part',
        'moreplates:the_ultimate_gear',
        'moreplates:uranium_gear',
        'twilightforest:giant_obsidian',
        'mekanism:ultimate_fluid_tank',
        'kubejs:antimatter_gear',
        'create:creative_fluid_tank',
        'mekanism:ultimate_fluid_tank',
        'twilightforest:giant_cobblestone',
        'mekanism:ultimate_fluid_tank',
        'moreplates:bronze_gear',
        'twilightforest:giant_log')
    potting('mekanism:creative_bin',
        'mekanism:upgrade_filter',
        'moreplates:osmium_gear',
        'kubejs:hdpe_gear',
        'mekanism:ultimate_logistical_transporter',
        'moreplates:tin_gear',
        'twilightforest:giant_leaves',
        'mekanism:ultimate_bin',
        'kubejs:polonium_gear',
        'solarpanels:creative_solar_panel',
        'moreplates:lead_gear',
        'kubejs:plutonium_gear',
        'extradisks:infinite_storage_part',
        'minecraft:bedrock',
        'moreplates:uranium_gear',
        'twilightforest:giant_obsidian',
        'mekanism:creative_fluid_tank',
        'minecraft:bedrock',
        'create:creative_crate',
        'mekanism:creative_chemical_tank',
        'twilightforest:giant_cobblestone',
        'mekanism:creative_energy_cube',
        'moreplates:bronze_gear',
        'twilightforest:giant_log')
    potting('mekanism:creative_chemical_tank',
        'mekanism:upgrade_filter',
        'moreplates:osmium_gear',
        'kubejs:hdpe_gear',
        'mekanism:ultimate_pressurized_tube',
        'moreplates:tin_gear',
        'twilightforest:giant_leaves',
        'mekanism:ultimate_chemical_tank',
        'kubejs:polonium_gear',
        'mekanism:ultimate_chemical_tank',
        'moreplates:lead_gear',
        'kubejs:plutonium_gear',
        'create:netherite_backtank',
        'moreplates:the_ultimate_gear',
        'moreplates:uranium_gear',
        'twilightforest:giant_obsidian',
        'mekanism:ultimate_chemical_tank',
        'kubejs:antimatter_gear',
        'create_sa:creative_filling_tank',
        'mekanism:ultimate_chemical_tank',
        'twilightforest:giant_cobblestone',
        'mekanism:ultimate_chemical_tank',
        'moreplates:bronze_gear',
        'twilightforest:giant_log')
})
ServerEvents.recipes(e => {
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "AAAABAAAA",
            "ACDEFEDCA",
            "ADGHIHGDA",
            "AJKLMLKNA",
            "BOPQRQSTB",
            "AJKLMLKNA",
            "ADGHUHGDA",
            "ACDVWVDCA",
            "AAAABAAAA"
        ],
        "key": {
            "A": {
                "item": "mekanism:upgrade_filter"
            },
            "B": {
                "item": "moreplates:osmium_gear"
            },
            "C": {
                "item": "kubejs:hdpe_gear"
            },
            "D": {
                "item": "mekanism:ultimate_universal_cable"
            },
            "E": {
                "item": "moreplates:tin_gear"
            },
            "F": {
                "item": "twilightforest:giant_leaves"
            },
            "G": {
                "item": "mekanism:ultimate_induction_cell"
            },
            "H": {
                "item": "kubejs:polonium_gear"
            },
            "I": {
                "item": "mekanism:ultimate_induction_provider"
            },
            "J": {
                "item": "moreplates:lead_gear"
            },
            "K": {
                "item": "kubejs:plutonium_gear"
            },
            "L": {
                "item": "fluxnetworks:gargantuan_flux_storage"
            },
            "M": {
                "item": "moreplates:the_ultimate_gear"
            },
            "N": {
                "item": "moreplates:uranium_gear"
            },
            "O": {
                "item": "twilightforest:giant_obsidian"
            },
            "P": {
                "item": "mekanism:ultimate_induction_provider"
            },
            "Q": {
                "item": "kubejs:antimatter_gear"
            },
            "R": {
                "item": "createaddition:creative_energy"
            },
            "S": {
                "item": "mekanism:ultimate_induction_provider"
            },
            "T": {
                "item": "twilightforest:giant_cobblestone"
            },
            "U": {
                "item": "wormhole:creative_energy_cell"
            },
            "V": {
                "item": "moreplates:bronze_gear"
            },
            "W": {
                "item": "twilightforest:giant_log"
            }
        },
        "result": {
            "item": "mekanism:creative_energy_cube",
            "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"18446744073709551615.9999\"}]}}"
        }
    })
})


// Create
ServerEvents.recipes(e => {
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "minecraft:bedrock"
            }
        ],
        "processingTime": 2000,
        "results": [
            {
                "count": 1,
                "item": "minecraft:bedrock"
            },
            {
                "chance": 0.1,
                "count": 1,
                "item": "createchromaticreturn:bedrock_shard"
            }
        ]
    })
})
ServerEvents.recipes(e => {
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "createchromaticreturn:bedrock_shard"
            }
        ],
        "processingTime": 2000,
        "results": [
            {
                "count": 64,
                "item": "extendedcrafting:the_ultimate_ingot"
            },
            {
                "count": 64,
                "item": "createchromaticreturn:multiplite_ingot"
            },
            {
                "count": 64,
                "item": "createchromaticreturn:refined_radiance"
            },
            {
                "count": 64,
                "item": "mekanism:pellet_antimatter"
            },
            {
                "count": 64,
                "item": "mekanism:enriched_carbon"
            },
            {
                "count": 64,
                "item": "mekanism:enriched_redstone"
            },
            {
                "count": 64,
                "item": "mekanism:enriched_diamond"
            },
            {
                "count": 64,
                "item": "mekanism:enriched_refined_obsidian"
            },
            {
                "count": 64,
                "item": "fluxnetworks:flux_dust"
            }
        ]
    })
})
ServerEvents.recipes(e => {
    let potting = (output, E, F) => {
        e.custom({
            "type": "create:mechanical_crafting",
            "pattern": [
                " ABA ",
                "ACDCA",
                "BEFEB",
                "ADDDA",
                " ABA "
            ],
            "key": {
                "A": { "item": "antiblocksrechiseled:bright_black" },
                "B": { "item": "kubejs:block_creative" },
                "C": { "item": "createchromaticreturn:multiplite_tube" },
                "D": { "item": "kubejs:alloy_creative" },
                "E": { "item": E },
                "F": { "item": F }
            },
            "result": { "item": output }
        })
    }
    potting('create:creative_motor', 'moreplates:brass_gear', 'createaddition:electric_motor')
    potting('create:creative_fluid_tank', 'moreplates:copper_gear', 'create:fluid_tank')
    potting('createaddition:creative_energy', 'moreplates:iron_gear', 'createaddition:alternator')
    potting('create:creative_crate', 'moreplates:steel_gear', 'mekanism:personal_barrel')
    potting('createcasing:creative_cogwheel', 'kubejs:andesite_gear', 'create:cogwheel')
})
ServerEvents.recipes(e => {
    e.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": [
            {
                "item": "createchromaticreturn:multiplite_ingot"
            }
        ],
        "results": [
            {
                "item": "kubejs:alloy_creative"
            }
        ]
    })
}
)
ServerEvents.recipes(e => {
    e.custom({
        "type": "mekanism:enriching",
        "input": {
            "ingredient": {
                "item": "createchromaticreturn:multiplite_ingot"
            }
        },
        "output": {
            "item": "kubejs:alloy_creative"
        }
    })
})
ServerEvents.recipes(e => {
    e.shaped("kubejs:block_creative", [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: "kubejs:alloy_creative"
    })
})
ServerEvents.recipes(e => {
    e.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "A": {
                "item": "kubejs:alloy_creative"
            },
            "B": {
                "item": "moreplates:silver_plate"
            }
        },
        "pattern": [
            "A",
            "B"
        ],
        "result": {
            "item": "createchromaticreturn:multiplite_tube"
        }
    })
})
ServerEvents.recipes(e => {
    e.shapeless('9x kubejs:alloy_creative', 'kubejs:block_creative')
})

// Wormhole
ServerEvents.recipes(e => {
    e.shaped("wormhole:creative_energy_cell", [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: "moreplates:the_ultimate_plate",
        B: "create:rose_quartz",
        C: "create:pulse_repeater",
        D: "wormhole:advanced_energy_cell"
    })
})

ServerEvents.recipes(e => {
    e.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "item": "kubejs:block_creative"
            }
        ],
        "results": [
            {
                "amount": 1000,
                "fluid": "kubejs:fluid_creative"
            }
        ]
    })
})
ServerEvents.recipes(e => {
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "dustrial_decor:industrial_iron_block"
            },
            {
                "amount": 1000,
                "fluid": "kubejs:fluid_creative"
            }
        ],
        "results": [
            {
                "item": "kubejs:block_creative"
            }
        ]
    })
})

ServerEvents.recipes(e => {
    e.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "count": 8,
                "item": "mekanism:block_refined_glowstone"
            }, {
                "count": 8,
                "item": "nourished_nether:glowing_obsidian"
            }, {
                "amount": 1000,
                "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "amount": 1000,
                "fluid": "createchromaticreturn:refined_mixture"
            }
        ]
    })
})