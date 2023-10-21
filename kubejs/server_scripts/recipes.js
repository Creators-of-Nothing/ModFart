// Recipes
ServerEvents.recipes(e => {
    //--- Global Suppression
    e.remove({ input: '#forge:unused' })
    e.remove({ output: '#forge:unused' })

    // Waystones
    e.remove({ id: 'waystones:warp_stone'})

    //--- Recipes Substitution
    // Steel
    e.remove({ output: 'epicsamurai:steel_nugget' })
    e.replaceInput({ input: 'epicsamurai:steel_nugget' }, 'epicsamurai:steel_nugget', 'mekanism:nugget_steel')
    e.remove({ output: 'epicsamurai:steel_ingot' })
    e.replaceInput({ input: 'epicsamurai:steel_ingot' }, 'epicsamurai:steel_ingot', 'mekanism:ingot_steel')
    e.remove({ output: 'epicsamurai:steel_block' })
    e.replaceInput({ input: 'epicsamurai:steel_block' }, 'epicsamurai:steel_block', 'mekanism:block_steel')
    // Silver
    e.remove({ output: 'epicsamurai:silver_ingot' })
    e.replaceInput({ input: 'epicsamurai:silver_ingot' }, 'epicsamurai:silver_ingot', 'mekanism:ingot_silver')
    // Zinc
    e.replaceOutput({ output: 'moremekanismprocessing:zinc_ingot' }, 'moremekanismprocessing:zinc_ingot', 'create:zinc_ingot')

    // Unification Processing
    e.remove({ type: 'minecraft:smelting', input: '#forge:ores' })
    e.remove({ type: 'minecraft:blasting', input: '#forge:ores' })
    e.remove({ type: 'minecraft:smelting', input: '#forge:raw_materials' })
    e.remove({ type: 'minecraft:blasting', input: '#forge:raw_materials' })
    e.remove({ type: 'mekanism:dissolution', input: '#forge:ores' })
    e.remove({ type: 'mekanism:injecting', input: '#forge:ores' })
    e.remove({ type: 'mekanism:enriching', input: '#forge:ores' })
    e.remove({ type: 'mekanism:purifying', input: '#forge:ores' })
    e.remove({ type: 'mekanism:injecting', input: '#forge:ores' })
    e.remove({ type: 'mekanism:crushing', inut: '#forge:ores' })
    e.remove({ type: 'mekanism:crushing', output: '#forge:dusts' })
    e.remove({ not: { type: 'mekanism:enriching', output: '#forge:dusts' }, output: 'mekanism:dust_obsidian'})
    e.remove({ type: 'mekanism:purifying', output: '#mekanism:clumps' })
    e.remove({ type: 'mekanism:crushing', output: '#mekanism:dirty_dusts' })
    e.remove({ type: 'mekanism:injecting', output: '#mekanism:shards' })
    e.remove({ type: 'mekanism:crystallizing', output: '#mekanism:crystals' })
    e.remove({ type: 'create:crushing', input: '#forge:ores' })
    e.remove({ type: 'create:crushing', input: '#forge:raw_materials' })
    e.remove({ type: 'create:crushing', input: '#forge:storage_blocks' })
})