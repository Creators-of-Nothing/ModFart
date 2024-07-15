// Changed crafts
ServerEvents.recipes(e => {
    // Ambrosium
    e.remove({ id: /aether:ambrosium_shard_from_blasting/ })
    e.remove({ id: /aether:ambrosium_shard_from_smelting/ })

    // Bronze
    e.remove({ id: /mekanism:processing\/bronze\/ingot\/from_dust_/ })

    // Coal
    e.remove({ id: /alexscaves:furnace\/coal_from/ })
    e.remove({ id: /create:crushing\/coal_ore/ })
    e.remove({ id: /deeperdarker:coal_/ })
    e.remove({ id: /mekanism:processing\/coal/ })
    e.remove({ id: /minecraft:coal_from_blasting/ })
    e.remove({ id: /minecraft:coal_from_smelting/ })

    // Copper
    e.remove({ id: /create:crushing\/copper_ore/ })
    e.remove({ id: 'createchromaticreturn:copper_doubling' })
    e.remove({ id: 'createchromaticreturn:copper_fortunite' })
    e.remove({ id: /mekanism:processing\/copper/ })
    e.remove({ not: { id: 'cyclic:copper_bars' }, id: /cyclic:copper_/ })
    e.remove({ id: /minecraft:copper_ingot_from_blasting/ })
    e.remove({ id: /minecraft:copper_ingot_from_smelting/ })

    // Diamond
    e.remove({ id: /create:crushing\/diamond_ore/ })
    e.remove({ id: /createaddition:crushing\/diamond/ })
    e.remove({ id: 'createchromaticreturn:diamond_doubling' })
    e.remove({ id: 'createchromaticreturn:diamond_fortunite' })
    e.remove({ id: /deeperdarker:diamond_/ })
    e.remove({ id: /mekanism:processing\/diamond/ })
    e.remove({ id: /minecraft:diamond_from_blasting/ })
    e.remove({ id: /minecraft:diamond_from_smelting/ })
    e.replaceInput({ input: 'createaddition:diamond_grit' }, 'createaddition:diamond_grit', 'mekanism:dust_diamond')

    // Emerald
    e.remove({ id: /create:crushing\/emerald_ore/ })
    e.remove({ id: 'createchromaticreturn:emerald_doubling' })
    e.remove({ id: 'createchromaticreturn:emerald_fortunite' })
    e.remove({ id: /deeperdarker:emerald_/ })
    e.remove({ id: /mekanism:processing\/emerald/ })
    e.remove({ id: /minecraft:emerald_from_blasting/ })
    e.remove({ id: /minecraft:emerald_from_smelting/ })

    // Enderite
    e.remove({ id: /lolenderite:enderite_fragment_from_blasting/ })
    e.remove({ id: /lolenderite:enderite_fragment_from_smelting/ })

    // Fluorite
    e.remove({ not: { id: 'mekanism:processing/fluorite/from_block' }, id: /mekanism:processing\/fluorite/ })

    // Gold
    e.remove({ id: /create:crushing\/gold_ore/ })
    e.remove({ id: 'createchromaticreturn:gold_doubling' })
    e.remove({ id: 'createchromaticreturn:gold_fortunite' })
    e.remove({ id: /mekanism:processing\/gold/ })
    e.remove({ id: /minecraft:gold_ingot_from_blasting/ })
    e.remove({ id: /minecraft:gold_ingot_from_smelting/ })

    // Gravitite
    e.remove({ id: /aether:enchanted_gravitite_enchanting/ })

    // Iron
    e.remove({ id: /alexscaves:furnace\/iron_from/ })
    e.remove({ id: /create:crushing\/iron_ore/ })
    e.remove({ id: 'createchromaticreturn:iron_doubling' })
    e.remove({ id: 'createchromaticreturn:iron_fortunite' })
    e.remove({ not: { id: 'mekanism:processing/iron/enriched' }, id: /mekanism:processing\/iron/ })
    e.remove({ id: /minecraft:iron_ingot_from_blasting/ })
    e.remove({ id: /minecraft:iron_ingot_from_smelting/ })

    // Lapis Lazuli
    e.remove({ id: /create:crushing\/lapis_ore/ })
    e.remove({ id: /deeperdarker:lapis_lazuli_/ })
    e.remove({ id: /mekanism:processing\/lapis_lazuli/ })
    e.remove({ id: /minecraft:lapis_lazuli_from_blasting/ })
    e.remove({ id: /minecraft:lapis_lazuli_from_smelting/ })

    // Lead
    e.remove({ id: /create:crushing\/lead_ore/ })
    e.remove({ not: [{ id: 'mekanism:processing/lead/ingot/from_block' }, { id: 'mekanism:processing/lead/ingot/from_nuggets' }, { id: 'mekanism:processing/lead/nugget/from_ingot' }, { id: 'mekanism:processing/lead/raw/from_raw_block' }, { id: 'mekanism:processing/lead/raw_storage_blocks/from_raw' }, { id: 'mekanism:processing/lead/storage_blocks/from_ingots' }], id: /mekanism:processing\/lead/ })
    e.replaceInput({ input: 'eidolon:lead_block' }, 'eidolon:lead_block', 'mekanism:block_lead')
    e.replaceInput({ input: 'eidolon:lead_ingot' }, 'eidolon:lead_ingot', 'mekanism:ingot_lead')
    e.replaceInput({ input: 'eidolon:lead_nugget' }, 'eidolon:lead_nugget', 'mekanism:nugget_lead')

    // Netherite
    e.remove({ id: /mekanism:processing\/netherite/ })
    e.remove({ id: /minecraft:netherite_scrap_from_blasting/ })
    e.remove({ id: 'minecraft:netherite_scrap' })
    e.remove({ id: 'createchromaticreturn:netherite_doubling' })
    e.remove({ id: 'createchromaticreturn:netherite_fortunite' })

    // Osmium
    e.remove({ id: /create:crushing\/osmium_ore/ })
    e.remove({ not: [{ id: 'mekanism:processing/osmium/ingot/from_block' }, { id: 'mekanism:processing/osmium/ingot/from_nuggets' }, { id: 'mekanism:processing/osmium/nugget/from_ingot' }, { id: 'mekanism:processing/osmium/raw/from_raw_block' }, { id: 'mekanism:processing/osmium/raw_storage_blocks/from_raw' }, { id: 'mekanism:processing/osmium/storage_blocks/from_ingots' }], id: /mekanism:processing\/osmium/ })

    // Quartz
    e.remove({ id: /aether:quartz_from_blasting/ })
    e.remove({ id: /aether:quartz_from_smelting/ })
    e.remove({ id: /mekanism:processing\/quartz/ })
    e.remove({ id: /minecraft:quartz_from_blasting/ })
    e.remove({ id: 'minecraft:quartz' })

    // Redstone
    e.remove({ id: /alexscaves:furnace\/redstone_from/ })
    e.remove({ id: /create:crushing\/redstone_ore/ })
    e.remove({ id: /deeperdarker:redstone_/ })
    e.remove({ id: /mekanism:processing\/redstone/ })
    e.remove({ id: /minecraft:redstone_from_blasting/ })
    e.remove({ id: /minecraft:redstone_from_smelting/ })

    // Silver
    e.remove({ id: /create:crushing\/silver_ore/ })
    e.remove({ id: /epicsamurai:silver_ingot_from_blasting/ })
    e.remove({ id: /epicsamurai:silver_ingot_from_smelting/ })
    e.replaceInput({ input: 'mekanism:ingot_silver' }, 'mekanism:ingot_silver', 'epicsamurai:silver_ingot')

    // Steel
    e.replaceInput({ input: 'epicsamurai:steel_nugget' }, 'epicsamurai:steel_nugget', 'mekanism:nugget_steel')
    e.replaceInput({ input: 'epicsamurai:steel_ingot' }, 'epicsamurai:steel_ingot', 'mekanism:ingot_steel')
    e.replaceInput({ input: 'epicsamurai:steel_block' }, 'epicsamurai:steel_block', 'mekanism:block_steel')

    // Tin
    e.remove({ id: /create:crushing\/tin_ore/ })
    e.remove({ not: [{ id: 'mekanism:processing/tin/ingot/from_block' }, { id: 'mekanism:processing/tin/ingot/from_nuggets' }, { id: 'mekanism:processing/tin/nugget/from_ingot' }, { id: 'mekanism:processing/tin/raw/from_raw_block' }, { id: 'mekanism:processing/tin/raw_storage_blocks/from_raw' }, { id: 'mekanism:processing/tin/storage_blocks/from_ingots' }], id: /mekanism:processing\/tin/ })

    // Tungsten
    e.remove({ id: /stalwart_dungeons:tungsten_ingot_recipe/ })
    e.remove({ id: /stalwart_dungeons:tungsten_ingot_recipe_2/ })

    // Uranium
    e.remove({ id: /alexscaves:furnace\/uranium_from/ })
    e.remove({ id: /create:crushing\/uranium_ore/ })
    e.remove({ not: [{ id: 'mekanism:processing/uranium/ingot/from_block' }, { id: 'mekanism:processing/uranium/ingot/from_nuggets' }, { id: 'mekanism:processing/uranium/nugget/from_ingot' }, { id: 'mekanism:processing/uranium/raw/from_raw_block' }, { id: 'mekanism:processing/uranium/raw_storage_blocks/from_raw' }, { id: 'mekanism:processing/uranium/storage_blocks/from_ingots' }], id: /mekanism:processing\/uranium/ })

    // Zanite
    e.remove({ id: /aether:zanite_gemstone_from_blasting/ })
    e.remove({ id: /aether:zanite_gemstone_from_smelting/ })

    // Zinc
    e.remove({ id: /create:blasting\/zinc_ingot/ })
    e.remove({ id: /create:crushing\/zinc_ore/ })
    e.remove({ id: /create:smelting\/zinc_ingot/ })
    e.remove({ id: 'createchromaticreturn:zinc_doubling' })
    e.remove({ id: 'createchromaticreturn:zinc_fortunite' })
    e.remove({ id: 'createchromaticreturn:zinc_recipe' })
    e.replaceOutput({ output: 'moremekanismprocessing:zinc_ingot' }, 'moremekanismprocessing:zinc_ingot', 'create:zinc_ingot')

    // Global
    e.remove({ id: /create:crushing\/deepslate_/ })
    e.remove({ id: /create:crushing\/gloomslate_/ })
    e.remove({ id: /create:crushing\/nether_/ })
    e.remove({ id: /create:crushing\/raw_/ })
    e.remove({ id: /create:crushing\/sculk_stone_/ })
    e.remove({ id: /deeperdarker:raw_/ })
    e.remove({ not: { id: 'eidolon:blast_enchanted_ash' }, id: /eidolon:blast_/ })
    e.remove({ not: { id: 'eidolon:smelt_pewter_blend' }, id: /eidolon:smelt_/ })
    e.remove({ id: /enlightened_end:blast_/ })
    e.remove({ not: { id: 'enlightened_end:smelt_end_stone_bricks', id: 'enlightened_end:smelt_end_stone_tiles', id: 'enlightened_end:smelt_ennegel_block', id: 'enlightened_end:smelt_palerock_bricks', id: 'enlightened_end:smelt_palerock_tiles', id: 'enlightened_end:smelt_purpur', id: 'enlightened_end:smelt_void_shale_bricks', id: 'enlightened_end:smelt_void_shale_tiles' }, id: /enlightened_end:smelt_/ })
    e.remove({ id: /mastersword:recycle_alloy/ })
    e.remove({ id: /stalwart_dungeons:chorundum_ore_smelting/ })
    e.remove({ id: /undergarden:blast_depthrock_/ })
    e.remove({ id: /undergarden:blast_shiverstone_/ })
    e.remove({ id: /undergarden:shard_to_crystal/ })
    e.remove({ id: /undergarden:smelt_depthrock_/ })
    e.remove({ id: /undergarden:smelt_shiverstone_/ })
    e.remove({ id: "undergarden:blast_raw_cloggrum" })
    e.remove({ id: "undergarden:smelt_raw_cloggrum" })
    e.remove({ mod: "oregrowth" })
})

// Processing - Ore Growth
ServerEvents.recipes(e => {
    let potting = (ore, raw) => {
        e.custom({
            "type": "oregrowth:ore_growth",
            "base": ore,
            "stages": 4,
            "spawn_chance": 0.25,
            "growth_chance": 0.10,
            "result": {
                "item": raw,
                "count": 1
            }
        })
    }
    potting('minecraft:coal_ore', 'kubejs:raw_coal')
    potting('minecraft:deepslate_coal_ore', 'kubejs:raw_coal')
    potting('alexscaves:coprolith_coal_ore', 'kubejs:raw_coal')
    potting('deeperdarker:sculk_stone_coal_ore', 'kubejs:raw_coal')
    potting('deeperdarker:gloomslate_coal_ore', 'kubejs:raw_coal')
    potting('meadow:alpine_coal_ore', 'kubejs:raw_coal')
    potting('undergarden:depthrock_coal_ore', 'kubejs:raw_coal')
    potting('undergarden:shiverstone_coal_ore', 'kubejs:raw_coal')
    potting('minecraft:iron_ore', 'minecraft:raw_iron')
    potting('minecraft:deepslate_iron_ore', 'minecraft:raw_iron')
    potting('alexscaves:galena_iron_ore', 'minecraft:raw_iron')
    potting('deeperdarker:sculk_stone_iron_ore', 'minecraft:raw_iron')
    potting('deeperdarker:gloomslate_iron_ore', 'minecraft:raw_iron')
    potting('meadow:alpine_iron_ore', 'minecraft:raw_iron')
    potting('undergarden:depthrock_iron_ore', 'minecraft:raw_iron')
    potting('undergarden:shiverstone_iron_ore', 'minecraft:raw_iron')
    potting('minecraft:copper_ore', 'minecraft:raw_copper')
    potting('minecraft:deepslate_copper_ore', 'minecraft:raw_copper')
    potting('deeperdarker:sculk_stone_copper_ore', 'minecraft:raw_copper')
    potting('deeperdarker:gloomslate_copper_ore', 'minecraft:raw_copper')
    potting('meadow:alpine_copper_ore', 'minecraft:raw_copper')
    potting('minecraft:gold_ore', 'minecraft:raw_gold')
    potting('minecraft:deepslate_gold_ore', 'minecraft:raw_gold')
    potting('minecraft:nether_gold_ore', 'minecraft:raw_gold')
    potting('deeperdarker:sculk_stone_gold_ore', 'minecraft:raw_gold')
    potting('deeperdarker:gloomslate_gold_ore', 'minecraft:raw_gold')
    potting('meadow:alpine_gold_ore', 'minecraft:raw_gold')
    potting('undergarden:depthrock_gold_ore', 'minecraft:raw_gold')
    potting('minecraft:redstone_ore', 'kubejs:raw_redstone')
    potting('minecraft:deepslate_redstone_ore', 'kubejs:raw_redstone')
    potting('alexscaves:guanostone_redstone_ore', 'kubejs:raw_redstone')
    potting('deeperdarker:sculk_stone_redstone_ore', 'kubejs:raw_redstone')
    potting('deeperdarker:gloomslate_redstone_ore', 'kubejs:raw_redstone')
    potting('meadow:alpine_redstone_ore', 'kubejs:raw_redstone')
    potting('minecraft:emerald_ore', 'kubejs:raw_emerald')
    potting('minecraft:deepslate_emerald_ore', 'kubejs:raw_emerald')
    potting('deeperdarker:sculk_stone_emerald_ore', 'kubejs:raw_emerald')
    potting('deeperdarker:gloomslate_emerald_ore', 'kubejs:raw_emerald')
    potting('meadow:alpine_emerald_ore', 'kubejs:raw_emerald')
    potting('minecraft:lapis_ore', 'kubejs:raw_lapis_lazuli')
    potting('minecraft:deepslate_lapis_ore', 'kubejs:raw_lapis_lazuli')
    potting('deeperdarker:sculk_stone_lapis_ore', 'kubejs:raw_lapis_lazuli')
    potting('deeperdarker:gloomslate_lapis_ore', 'kubejs:raw_lapis_lazuli')
    potting('meadow:alpine_lapis_ore', 'kubejs:raw_lapis_lazuli')
    potting('minecraft:diamond_ore', 'kubejs:raw_diamond')
    potting('minecraft:deepslate_diamond_ore', 'kubejs:raw_diamond')
    potting('deeperdarker:sculk_stone_diamond_ore', 'kubejs:raw_diamond')
    potting('deeperdarker:gloomslate_diamond_ore', 'kubejs:raw_diamond')
    potting('meadow:alpine_diamond_ore', 'kubejs:raw_diamond')
    potting('undergarden:depthrock_diamond_ore', 'kubejs:raw_diamond')
    potting('undergarden:shiverstone_diamond_ore', 'kubejs:raw_diamond')
    potting('minecraft:nether_quartz_ore', 'kubejs:raw_quartz')
    potting('ancient_aether:aether_quartz_ore', 'kubejs:raw_quartz')
    potting('create:zinc_ore', 'create:raw_zinc')
    potting('create:deepslate_zinc_ore', 'create:raw_zinc')
    potting('enlightened_end:malachite_ore', 'kubejs:raw_malachite')
    potting('enlightened_end:irradium_ore', 'enlightened_end:raw_irradium')
    potting('enlightened_end:bismuth_ore', 'enlightened_end:raw_bismuth')
    potting('epicsamurai:ruby_ore', 'kubejs:raw_ruby')
    potting('epicsamurai:deepslate_ruby_ore', 'kubejs:raw_ruby')
    potting('epicsamurai:jade_ore', 'kubejs:raw_jade')
    potting('epicsamurai:deepslate_jade_ore', 'kubejs:raw_jade')
    potting('epicsamurai:aquamarine_ore', 'kubejs:raw_aquamarine')
    potting('epicsamurai:deepslate_aquamarine_ore', 'kubejs:raw_aquamarine')
    potting('epicsamurai:onyx_ore', 'kubejs:raw_onyx')
    potting('epicsamurai:deepslate_onyx_ore', 'kubejs:raw_onyx')
    potting('epicsamurai:silver_ore', 'epicsamurai:raw_silver')
    potting('epicsamurai:deepslate_silver_ore', 'epicsamurai:raw_silver')
    potting('rftoolsbase:dimensionalshard_overworld', 'kubejs:raw_dimensional')
    potting('rftoolsbase:dimensionalshard_nether', 'kubejs:raw_dimensional')
    potting('rftoolsbase:dimensionalshard_end', 'kubejs:raw_dimensional')
    potting('stalwart_dungeons:tungsten_ore', 'stalwart_dungeons:raw_tungsten')
    potting('stalwart_dungeons:chorundum_ore', 'kubejs:raw_chorundum')
    potting('aether:ambrosium_ore', 'kubejs:raw_ambrosium')
    potting('aether:zanite_ore', 'kubejs:raw_zanite')
    potting('aether:gravitite_ore', 'kubejs:raw_gravitite')
    potting('undergarden:depthrock_cloggrum_ore', 'undergarden:raw_cloggrum')
    potting('undergarden:shiverstone_cloggrum_ore', 'undergarden:raw_cloggrum')
    potting('undergarden:shiverstone_froststeel_ore', 'undergarden:raw_froststeel')
    potting('undergarden:depthrock_utherium_ore', 'kubejs:raw_utherium')
    potting('undergarden:shiverstone_utherium_ore', 'kubejs:raw_utherium')
    potting('undergarden:depthrock_regalium_ore', 'kubejs:raw_regalium')
    potting('undergarden:shiverstone_regalium_ore', 'kubejs:raw_regalium')
    potting('farlanders:endumium_ore', 'kubejs:raw_endumium')
    potting('farlanders:deepslate_endumium_ore', 'kubejs:raw_endumium')
    potting('mekanism:tin_ore', 'mekanism:raw_tin')
    potting('mekanism:deepslate_tin_ore', 'mekanism:raw_tin')
    potting('mekanism:osmium_ore', 'mekanism:raw_osmium')
    potting('mekanism:deepslate_osmium_ore', 'mekanism:raw_osmium')
    potting('mekanism:uranium_ore', 'mekanism:raw_uranium')
    potting('mekanism:deepslate_uranium_ore', 'mekanism:raw_uranium')
    potting('alexscaves:radrock_uranium_ore', 'mekanism:raw_uranium')
    potting('mekanism:fluorite_ore', 'kubejs:raw_fluorite')
    potting('mekanism:deepslate_fluorite_ore', 'kubejs:raw_fluorite')
    potting('mekanism:lead_ore', 'mekanism:raw_lead')
    potting('mekanism:deepslate_lead_ore', 'mekanism:raw_lead')
    potting('minecraft:ancient_debris', 'kubejs:raw_netherite')
    potting('lolenderite:primordial_remnants', 'kubejs:raw_enderite')
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
    potting('forge:ores/dimensional_shard', 'kubejs:raw_dimensional')
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
    potting('forge:ores/dimensional_shard', 'kubejs:raw_dimensional')
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
    potting('kubejs:raw_dimensional', 'kubejs:clump_dimensional')
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
    potting('kubejs:raw_dimensional', '1', 0.7, 'rftoolsbase:dimensionalshard')
    potting('kubejs:clump_dimensional', '2', 1.4, 'rftoolsbase:dimensionalshard')
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
    potting('kubejs:raw_dimensional', '1', 0.7, 'rftoolsbase:dimensionalshard')
    potting('kubejs:clump_dimensional', '2', 1.4, 'rftoolsbase:dimensionalshard')
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
    let potting = (input, amount, mineral, output) => {
        e.custom({
            "type": "mekanism:combining",
            "extraInput": {
                "ingredient": {
                    "item": mineral
                }
            },
            "mainInput": {
                "amount": amount,
                "ingredient": {
                    "item": input
                }
            },
            "output": {
                "item": output
            }
        })
    }
    potting('minecraft:coal', 15, 'minecraft:stone', 'minecraft:coal_ore')
    potting('minecraft:coal', 15, 'minecraft:deepslate', 'minecraft:deepslate_coal_ore')
    potting('minecraft:coal', 15, 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_coal_ore')
    potting('minecraft:coal', 15, 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_coal_ore')
    potting('minecraft:coal', 15, 'meadow:limestone', 'meadow:alpine_coal_ore')
    potting('minecraft:coal', 15, 'undergarden:depthrock', 'undergarden:depthrock_coal_ore')
    potting('minecraft:coal', 15, 'undergarden:shiverstone', 'undergarden:shiverstone_coal_ore')
    potting('minecraft:coal', 15, 'alexscaves:coprolith', 'alexscaves:coprolith_coal_ore')
    potting('minecraft:iron_ingot', 15, 'minecraft:stone', 'minecraft:iron_ore')
    potting('minecraft:iron_ingot', 15, 'minecraft:deepslate', 'minecraft:deepslate_iron_ore')
    potting('minecraft:iron_ingot', 15, 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_iron_ore')
    potting('minecraft:iron_ingot', 15, 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_iron_ore')
    potting('minecraft:iron_ingot', 15, 'meadow:limestone', 'meadow:alpine_iron_ore')
    potting('minecraft:iron_ingot', 15, 'undergarden:depthrock', 'undergarden:depthrock_iron_ore')
    potting('minecraft:iron_ingot', 15, 'undergarden:shiverstone', 'undergarden:shiverstone_iron_ore')
    potting('minecraft:iron_ingot', 15, 'alexscaves:galena', 'alexscaves:galena_iron_ore')
    potting('minecraft:copper_ingot', 15, 'minecraft:stone', 'minecraft:copper_ore')
    potting('minecraft:copper_ingot', 15, 'minecraft:deepslate', 'minecraft:deepslate_copper_ore')
    potting('minecraft:copper_ingot', 15, 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_copper_ore')
    potting('minecraft:copper_ingot', 15, 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_copper_ore')
    potting('minecraft:copper_ingot', 15, 'meadow:limestone', 'meadow:alpine_copper_ore')
    potting('minecraft:gold_ingot', 15, 'minecraft:stone', 'minecraft:gold_ore')
    potting('minecraft:gold_ingot', 15, 'minecraft:deepslate', 'minecraft:deepslate_gold_ore')
    potting('minecraft:gold_ingot', 15, 'minecraft:netherrack', 'minecraft:nether_gold_ore')
    potting('minecraft:gold_ingot', 15, 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_gold_ore')
    potting('minecraft:gold_ingot', 15, 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_gold_ore')
    potting('minecraft:gold_ingot', 15, 'meadow:limestone', 'meadow:alpine_gold_ore')
    potting('minecraft:gold_ingot', 15, 'undergarden:depthrock', 'undergarden:depthrock_gold_ore')
    potting('minecraft:redstone', 9, 'minecraft:stone', 'minecraft:redstone_ore')
    potting('minecraft:redstone', 9, 'minecraft:deepslate', 'minecraft:deepslate_redstone_ore')
    potting('minecraft:redstone', 9, 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_redstone_ore')
    potting('minecraft:redstone', 9, 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_redstone_ore')
    potting('minecraft:redstone', 9, 'meadow:limestone', 'meadow:alpine_redstone_ore')
    potting('minecraft:redstone', 9, 'alexscaves:guanostone', 'alexscaves:guanostone_redstone_ore')
    potting('minecraft:emerald', 15, 'minecraft:stone', 'minecraft:emerald_ore')
    potting('minecraft:emerald', 15, 'minecraft:deepslate', 'minecraft:deepslate_emerald_ore')
    potting('minecraft:emerald', 15, 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_emerald_ore')
    potting('minecraft:emerald', 15, 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_emerald_ore')
    potting('minecraft:emerald', 15, 'meadow:limestone', 'meadow:alpine_emerald_ore')
    potting('minecraft:lapis_lazuli', 15, 'minecraft:stone', 'minecraft:lapis_ore')
    potting('minecraft:lapis_lazuli', 15, 'minecraft:deepslate', 'minecraft:deepslate_lapis_ore')
    potting('minecraft:lapis_lazuli', 15, 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_lapis_ore')
    potting('minecraft:lapis_lazuli', 15, 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_lapis_ore')
    potting('minecraft:lapis_lazuli', 15, 'meadow:limestone', 'meadow:alpine_lapis_ore')
    potting('minecraft:diamond', 15, 'minecraft:stone', 'minecraft:diamond_ore')
    potting('minecraft:diamond', 15, 'minecraft:deepslate', 'minecraft:deepslate_diamond_ore')
    potting('minecraft:diamond', 15, 'deeperdarker:sculk_stone', 'deeperdarker:sculk_stone_diamond_ore')
    potting('minecraft:diamond', 15, 'deeperdarker:gloomslate', 'deeperdarker:gloomslate_diamond_ore')
    potting('minecraft:diamond', 15, 'meadow:limestone', 'meadow:alpine_diamond_ore')
    potting('minecraft:diamond', 15, 'undergarden:depthrock', 'undergarden:depthrock_diamond_ore')
    potting('minecraft:diamond', 15, 'undergarden:shiverstone', 'undergarden:shiverstone_diamond_ore')
    potting('minecraft:quartz', 15, 'minecraft:netherrack', 'minecraft:nether_quartz_ore')
    potting('minecraft:quartz', 15, 'aether:holystone', 'ancient_aether:aether_quartz_ore')
    potting('create:zinc_ingot', 15, 'minecraft:stone', 'create:zinc_ore')
    potting('create:zinc_ingot', 15, 'minecraft:deepslate', 'create:deepslate_zinc_ore')
    potting('enlightened_end:malachite', 15, 'minecraft:end_stone', 'enlightened_end:malachite_ore')
    potting('enlightened_end:irradium_bar', 15, 'minecraft:end_stone', 'enlightened_end:irradium_ore')
    potting('enlightened_end:bismuth_ingot', 15, 'minecraft:end_stone', 'enlightened_end:bismuth_ore')
    potting('epicsamurai:ruby', 15, 'minecraft:stone', 'epicsamurai:ruby_ore')
    potting('epicsamurai:ruby', 15, 'minecraft:deepslate', 'epicsamurai:deepslate_ruby_ore')
    potting('epicsamurai:jade', 15, 'minecraft:stone', 'epicsamurai:jade_ore')
    potting('epicsamurai:jade', 15, 'minecraft:deepslate', 'epicsamurai:deepslate_jade_ore')
    potting('epicsamurai:aquamarine', 15, 'minecraft:stone', 'epicsamurai:aquamarine_ore')
    potting('epicsamurai:aquamarine', 15, 'minecraft:deepslate', 'epicsamurai:deepslate_aquamarine_ore')
    potting('epicsamurai:onyx', 15, 'minecraft:stone', 'epicsamurai:onyx_ore')
    potting('epicsamurai:onyx', 15, 'minecraft:deepslate', 'epicsamurai:deepslate_onyx_ore')
    potting('epicsamurai:silver_ingot', 15, 'minecraft:stone', 'epicsamurai:silver_ore')
    potting('epicsamurai:silver_ingot', 15, 'minecraft:deepslate', 'epicsamurai:deepslate_silver_ore')
    potting('rftoolsbase:dimensionalshard', 3, 'minecraft:stone', 'rftoolsbase:dimensionalshard_overworld')
    potting('rftoolsbase:dimensionalshard', 3, 'minecraft:netherrack', 'rftoolsbase:dimensionalshard_nether')
    potting('rftoolsbase:dimensionalshard', 3, 'minecraft:end_stone', 'rftoolsbase:dimensionalshard_end')
    potting('stalwart_dungeons:tungsten_ingot', 15, 'stalwart_dungeons:soul_bricks', 'stalwart_dungeons:tungsten_ore')
    potting('stalwart_dungeons:chorundum', 15, 'stalwart_dungeons:purpur_bricks', 'stalwart_dungeons:chorundum_ore')
    potting('aether:ambrosium_shard', 3, 'aether:holystone', 'aether:ambrosium_ore')
    potting('aether:zanite_gemstone', 15, 'aether:holystone', 'aether:zanite_ore')
    potting('aether:enchanted_gravitite', 15, 'aether:holystone', 'aether:gravitite_ore')
    potting('undergarden:cloggrum_ingot', 15, 'undergarden:depthrock', 'undergarden:depthrock_cloggrum_ore')
    potting('undergarden:cloggrum_ingot', 15, 'undergarden:shiverstone', 'undergarden:shiverstone_cloggrum_ore')
    potting('undergarden:froststeel_ingot', 15, 'undergarden:shiverstone', 'undergarden:shiverstone_froststeel_ore')
    potting('undergarden:utherium_crystal', 12, 'undergarden:depthrock', 'undergarden:depthrock_utherium_ore')
    potting('undergarden:utherium_crystal', 12, 'undergarden:shiverstone', 'undergarden:shiverstone_utherium_ore')
    potting('undergarden:regalium_crystal', 12, 'undergarden:depthrock', 'undergarden:depthrock_regalium_ore')
    potting('undergarden:regalium_crystal', 12, 'undergarden:shiverstone', 'undergarden:shiverstone_regalium_ore')
    potting('farlanders:endumium_crystal', 12, 'minecraft:stone', 'farlanders:endumium_ore')
    potting('farlanders:endumium_crystal', 12, 'minecraft:deepslate', 'farlanders:deepslate_endumium_ore')
    potting('mekanism:ingot_tin', 15, 'minecraft:stone', 'mekanism:tin_ore')
    potting('mekanism:ingot_tin', 15, 'minecraft:deepslate', 'mekanism:deepslate_tin_ore')
    potting('mekanism:ingot_osmium', 15, 'minecraft:stone', 'mekanism:osmium_ore')
    potting('mekanism:ingot_osmium', 15, 'minecraft:deepslate', 'mekanism:deepslate_osmium_ore')
    potting('mekanism:ingot_uranium', 15, 'minecraft:stone', 'mekanism:uranium_ore')
    potting('mekanism:ingot_uranium', 15, 'minecraft:deepslate', 'mekanism:deepslate_uranium_ore')
    potting('mekanism:ingot_uranium', 15, 'alexscaves:radrock', 'alexscaves:radrock_uranium_ore')
    potting('mekanism:fluorite_gem', 15, 'minecraft:stone', 'mekanism:fluorite_ore')
    potting('mekanism:fluorite_gem', 15, 'minecraft:deepslate', 'mekanism:deepslate_fluorite_ore')
    potting('mekanism:ingot_lead', 15, 'minecraft:stone', 'mekanism:lead_ore')
    potting('mekanism:ingot_lead', 15, 'minecraft:deepslate', 'mekanism:deepslate_lead_ore')
    potting('minecraft:netherite_ingot', 15, 'minecraft:tuff', 'minecraft:ancient_debris')
    potting('lolenderite:enderite_ingot', 15, 'minecraft:tuff', 'lolenderite:primordial_remnants')
})


// Processing - Dust Recreation
ServerEvents.recipes(e => {
    let potting = (input, amount, output) => {
        e.custom({
            "type": "mekanism:crushing",
            "input": {
                "amount": amount,
                "ingredient": {
                    "item": input
                }
            },
            "output": {
                "item": output
            }
        })
    }
    potting('minecraft:emerald', 6, 'mekanism:dust_emerald')
    potting('mekanism:ingot_tin', 6, 'mekanism:dust_tin')
    potting('minecraft:copper_ingot', 6, 'mekanism:dust_copper')
    potting('mekanism:ingot_osmium', 6, 'mekanism:dust_osmium')
    potting('minecraft:gold_ingot', 6, 'mekanism:dust_gold')
    potting('minecraft:iron_ingot', 6, 'mekanism:dust_iron')
    potting('minecraft:diamond', 6, 'mekanism:dust_diamond')
    potting('minecraft:lapis_lazuli', 6, 'mekanism:dust_lapis_lazuli')
    potting('minecraft:coal', 6, 'mekanism:dust_coal')
    potting('mekanism:ingot_uranium', 6, 'mekanism:dust_uranium')
    potting('minecraft:netherite_scrap', 6, 'mekanism:dust_netherite')
    potting('minecraft:netherite_ingot', 2, 'mekanism:dust_netherite')
})