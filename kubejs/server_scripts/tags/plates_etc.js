// Gears/Plates/Rods
ServerEvents.tags('item', e => {
    // Gears
    e.add('forge:gears', /_gear/)
    e.remove('forge:gears', [/_gearbox/, /_gearshift/, /_gears/])
    // Plates
    e.add('forge:plates', /_plate/)
    e.remove('forge:plates', [/pressure_/, /_pressure/, /plate_/, /plated/, /plates/, /shell_plate/, /handcrafted:/, /eidolon:/, /candlelight:/])
    // Rods
    e.add('forge:rods', /_rod/)
    e.remove('forge:rods', /end_rod/, /lightning_rod/, /fishing_rod/, /alexscaves:/, /dowsing_rod/, /curtain_rod/, /mastersword/)
})


// Raws
ServerEvents.tags('item', e => {
    e.add('forge:raw_materials', [
        'kubejs:raw_ambrosium',
        'kubejs:raw_aquamarine',
        'kubejs:raw_chorundum',
        'kubejs:raw_coal',
        'kubejs:raw_diamond',
        'kubejs:raw_dimensionalshard',
        'kubejs:raw_emerald',
        'kubejs:raw_enderite',
        'kubejs:raw_endumium',
        'kubejs:raw_fluorite',
        'kubejs:raw_gravitite',
        'kubejs:raw_jade',
        'kubejs:raw_lapis_lazuli',
        'kubejs:raw_malachite',
        'kubejs:raw_netherite',
        'kubejs:raw_onyx',
        'kubejs:raw_quartz',
        'kubejs:raw_redstone',
        'kubejs:raw_regalium',
        'kubejs:raw_ruby',
        'kubejs:raw_utherium',
        'kubejs:raw_zanite',
        'enlightened_end:raw_irradium',
        'enlightened_end:raw_bismuth',
        'stalwart_dungeon:raw_tungsten'
    ])
})


// Clumps
ServerEvents.tags('item', e => {
    e.add('mekanism:clumps', [
        'kubejs:clump_ambrosium',
        'kubejs:clump_aquamarine',
        'kubejs:clump_bismuth',
        'kubejs:clump_chorundum',
        'kubejs:clump_cloggrum',
        'kubejs:clump_coal',
        'kubejs:clump_diamond',
        'kubejs:clump_dimensionalshard',
        'kubejs:clump_emerald',
        'kubejs:clump_enderite',
        'kubejs:clump_endumium',
        'kubejs:clump_fluorite',
        'kubejs:clump_froststeel',
        'kubejs:clump_gravitite',
        'kubejs:clump_irradium',
        'kubejs:clump_jade',
        'kubejs:clump_lapis_lazuli',
        'kubejs:clump_malachite',
        'kubejs:clump_netherite',
        'kubejs:clump_onyx',
        'kubejs:clump_quartz',
        'kubejs:clump_redstone',
        'kubejs:clump_regalium',
        'kubejs:clump_ruby',
        'kubejs:clump_silver',
        'kubejs:clump_tungsten',
        'kubejs:clump_utherium',
        'kubejs:clump_zanite',
        'kubejs:clump_zinc'
    ])
})


// Shards
ServerEvents.tags('item', e => {
    e.add('mekanism:shards', [
        'kubejs:shard_aquamarine',
        'kubejs:shard_bismuth',
        'kubejs:shard_chorundum',
        'kubejs:shard_cloggrum',
        'kubejs:shard_coal',
        'kubejs:shard_diamond',
        'kubejs:shard_emerald',
        'kubejs:shard_enderite',
        'kubejs:shard_endumium',
        'kubejs:shard_fluorite',
        'kubejs:shard_froststeel',
        'kubejs:shard_gravitite',
        'kubejs:shard_irradium',
        'kubejs:shard_jade',
        'kubejs:shard_lapis_lazuli',
        'kubejs:shard_malachite',
        'kubejs:shard_netherite',
        'kubejs:shard_onyx',
        'kubejs:shard_quartz',
        'kubejs:shard_redstone',
        'kubejs:shard_regalium',
        'kubejs:shard_ruby',
        'kubejs:shard_silver',
        'kubejs:shard_tungsten',
        'kubejs:shard_zanite',
        'kubejs:shard_zinc', 
        'rftoolsbase:dimensionalshard',
        'aether:ambrosium_shard',
        'undergarden:utheric_shard'
    ])
})


// Dirty Dusts
ServerEvents.tags('item', e => {
    e.add('mekanism:dirty_dusts', [
        'kubejs:dirty_dust_aquamarine',
        'kubejs:dirty_dust_bismuth',
        'kubejs:dirty_dust_chorundum',
        'kubejs:dirty_dust_cloggrum',
        'kubejs:dirty_dust_coal',
        'kubejs:dirty_dust_diamond',
        'kubejs:dirty_dust_emerald',
        'kubejs:dirty_dust_enderite',
        'kubejs:dirty_dust_endumium',
        'kubejs:dirty_dust_fluorite',
        'kubejs:dirty_dust_froststeel',
        'kubejs:dirty_dust_gravitite',
        'kubejs:dirty_dust_irradium',
        'kubejs:dirty_dust_jade',
        'kubejs:dirty_dust_lapis_lazuli',
        'kubejs:dirty_dust_malachite',
        'kubejs:dirty_dust_netherite',
        'kubejs:dirty_dust_onyx',
        'kubejs:dirty_dust_quartz',
        'kubejs:dirty_dust_redstone',
        'kubejs:dirty_dust_regalium',
        'kubejs:dirty_dust_ruby',
        'kubejs:dirty_dust_silver',
        'kubejs:dirty_dust_tungsten',
        'kubejs:dirty_dust_utherium',
        'kubejs:dirty_dust_zanite',
        'kubejs:dirty_dust_zinc'
    ])
})


// Dusts
ServerEvents.tags('item', e => {
    e.add('forge:dusts', [
        'kubejs:dust_aquamarine',
        'kubejs:dust_bismuth',
        'kubejs:dust_chorundum',
        'kubejs:dust_cloggrum',
        'kubejs:dust_enderite',
        'kubejs:dust_endumium',
        'kubejs:dust_froststeel',
        'kubejs:dust_gravitite',
        'kubejs:dust_irradium',
        'kubejs:dust_jade',
        'kubejs:dust_malachite',
        'kubejs:dust_onyx',
        'kubejs:dust_regalium',
        'kubejs:dust_ruby',
        'kubejs:dust_silver',
        'kubejs:dust_tungsten',
        'kubejs:dust_utherium',
        'kubejs:dust_zanite',
        'kubejs:dust_zinc'
    ])
})


// Crystals
ServerEvents.tags('item', e => {
    e.add('mekanism:crystals', [
        'kubejs:crystal_aquamarine',
        'kubejs:crystal_bismuth',
        'kubejs:crystal_chorundum',
        'kubejs:crystal_cloggrum',
        'kubejs:crystal_coal',
        'kubejs:crystal_diamond',
        'kubejs:crystal_emerald',
        'kubejs:crystal_enderite',
        'kubejs:crystal_fluorite',
        'kubejs:crystal_froststeel',
        'kubejs:crystal_gravitite',
        'kubejs:crystal_irradium',
        'kubejs:crystal_jade',
        'kubejs:crystal_lapis_lazuli',
        'kubejs:crystal_malachite',
        'kubejs:crystal_netherite',
        'kubejs:crystal_onyx',
        'kubejs:crystal_quartz',
        'kubejs:crystal_ruby',
        'kubejs:crystal_silver',
        'kubejs:crystal_tungsten',
        'kubejs:crystal_zanite',
        'kubejs:crystal_zinc', 
        'undergarden:utherium_crystal',
        'undergarden:regalium_crystal',
        'farlanders:endumium_crystal'
    ])
})