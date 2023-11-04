// Changed crafts
ServerEvents.recipes(e => {
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