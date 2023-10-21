// Adding Item tags
ServerEvents.tags('item', e => {
    e.add('forge:unused', [
        // Extended Crafting
        'extendedcrafting:basic_component',
        'extendedcrafting:advanced_component',
        'extendedcrafting:elite_component',
        'extendedcrafting:ultimate_component',
        'extendedcrafting:redstone_component',
        'extendedcrafting:enhanced_redstone_component',
        'extendedcrafting:ender_component',
        'extendedcrafting:enhanced_ender_component',
        'extendedcrafting:crystaltine_component',
        'extendedcrafting:the_ultimate_component',
        // Iron Furnaces
        /ironfurnaces:upgrade_/,
        'ironfurnaces:crystal_furnace',
        'ironfurnaces:rainbow_core',
        'ironfurnaces:rainbow_plating',
        // Mekanism
        'mekanism:antiprotonic_nucleosynthesizer',
        'mekanism:solar_neutron_activator',
        'mekanism:boiler_valve',
        'mekanism:boiler_casing',
        'mekanism:pressure_disperser',
        'mekanism:superheating_element',
        'mekanism:supercharged_coil',
        'mekanism:sps_port',
        'mekanism:sps_casing',
        'mekanism:chemical_dissolution_chamber',
        'mekanism:chemical_washer',
        'mekanismgenerators:fusion_reactor_controller',
        'mekanismgenerators:fusion_reactor_frame',
        'mekanismgenerators:fusion_reactor_port',
        'mekanismgenerators:fusion_reactor_logic_adapter',
        'mekanismgenerators:laser_focus_matrix',
        'mekanismgenerators:deuterium_bucket',
        'mekanismgenerators:fusion_fuel_bucket',
        'mekanismgenerators:tritium_bucket',
        'mekanismgenerators:control_rod_assembly',
        'mekanismgenerators:fission_fuel_assembly',
        'mekanismgenerators:fission_reactor_logic_adapter',
        'mekanismgenerators:fission_reactor_port',
        'mekanismgenerators:fission_reactor_casing',
        'mekanismgenerators:reactor_glass',
        'mekanismgenerators:saturating_condenser',
        'mekanismgenerators:turbine_vent',
        'mekanismgenerators:turbine_casing',
        'mekanismgenerators:electromagnetic_coil',
        'mekanismgenerators:rotational_complex',
        'mekanismgenerators:turbine_rotor',
        'mekanismgenerators:turbine_blade',
        'mekanismgenerators:hohlraum',
        'mekanismgenerators:fusion_fuel',
        'mekanismgenerators:fusion_fuel',
        /deuterium/,
        /fusion_fuel/,
        /tritium/,
        /heavy_water/,
        /fissile_fuel/,
        /hydrofluoric_acid/,
        /nuclear_waste/,
        /sodium/,
        /spent_nuclear_waste/,
        /sulfur_dioxide/,
        /sulfur_trioxide/,
        /sulfuric_acid/,
        /superheated_sodium/,
        /uranium:hexafluoride/,
        /uranium_oxide/,
        /mekanism:clean/,
        'mekanism:dirty_copper',
        'mekanism:dirty_gold',
        'mekanism:dirty_iron',
        'mekanism:dirty_lead',
        'mekanism:dirty_osmium',
        'mekanism:dirty_tin',
        'mekanism:dirty_uranium',
        // More Plates
        '#moreplates:mods/allthemodium',
        '#moreplates:mods/ae2',
        '#moreplates:mods/aquaculture2',
        '#moreplates:mods/assemblylinemachines',
        '#moreplates:mods/astralsorcery',
        '#moreplates:mods/avaritia',
        '#moreplates:mods/bluepower',
        '#moreplates:mods/botania',
        '#moreplates:mods/enderio',
        '#moreplates:mods/iceandfire',
        '#moreplates:mods/infusedcrystals',
        '#moreplates:mods/mysticalagriculture',
        '#moreplates:mods/pneumaticraft',
        '#moreplates:mods/powah',
        '#moreplates:mods/projecte',
        '#moreplates:mods/projectred',
        '#moreplates:mods/psi',
        '#moreplates:mods/draconicevolution',
        /moreplates:titanium_/,
        /moreplates:signalum_/,
        /moreplates:sapphire_/,
        /moreplates:platinum_/,
        /moreplates:nickel_/,
        /moreplates:lumium_/,
        /moreplates:invar_/,
        /moreplates:green_sapphire_/,
        /moreplates:enderium_/,
        /moreplates:constantan_/,
        /moreplates:chromium_/,
        /moreplates:aluminium_/,
        // Pam's Harvestcraft
        /pamhc2trees:pam/,
        'pamhc2crops:aridgarden',
        'pamhc2crops:frostgarden',
        'pamhc2crops:shadedgarden',
        'pamhc2crops:soggygarden',
        'pamhc2crops:tropicalgarden',
        'pamhc2crops:windygarden',
        // Refined Storage
        /refinedstorage:creative_storage/,
        /refinedstorage:creative_fluid_storage/,
        'extradisks:16384k_storage_part',
        'extradisks:16384k_storage_block',
        'extradisks:16384k_storage_disk',
        'extradisks:65536k_storage_part',
        'extradisks:65536k_storage_block',
        'extradisks:65536k_storage_disk',
        'extradisks:262144k_storage_part',
        'extradisks:262144k_storage_block',
        'extradisks:262144k_storage_disk',
        'extradisks:1048576k_storage_part',
        'extradisks:1048576k_storage_block',
        'extradisks:1048576k_storage_disk',
        'extradisks:16384k_fluid_storage_part',
        'extradisks:16384k_fluid_storage_block',
        'extradisks:16384k_fluid_storage_disk',
        'extradisks:65536k_fluid_storage_part',
        'extradisks:65536k_fluid_storage_block',
        'extradisks:65536k_fluid_storage_disk',
        'extradisks:262144k_fluid_storage_part',
        'extradisks:262144k_fluid_storage_block',
        'extradisks:262144k_fluid_storage_disk',
        'extradisks:1048576k_fluid_storage_part',
        'extradisks:1048576k_fluid_storage_block',
        'extradisks:1048576k_fluid_storage_disk',
        /extrastorage:storagepart/,
        /extrastorage:block/,
        /extrastorage:disk/,
        // Sophisticated Storage
        'sophisticatedstorage:debug_tool',
        // Twilight Forest
        'twilightforest:naga_boss_spawner',
        'twilightforest:lich_boss_spawner',
        'twilightforest:minoshroom_boss_spawner',
        'twilightforest:hydra_boss_spawner',
        'twilightforest:knight_phantom_boss_spawner',
        'twilightforest:ur_ghast_boss_spawner',
        'twilightforest:alpha_yeti_boss_spawner',
        'twilightforest:snow_queen_boss_spawner',
        'twilightforest:final_boss_boss_spawner',
        // Others
        'stalwart_dungeons:awful_dungeon_spawner',
        'stalwart_dungeons:keeping_castle_spawner',
        'stalwart_dungeons:end_dungeon_spawner',
        'minecraft:debug_stick',
        'ars_nouveau:debug',
        'waystones:warp_stone',
        'twilightforest:uncrafting_table',
        'useless_sword:message_in_a_sword',
        'useless_sword:neptunium_grab_sword',
        'useless_sword:rotten_fish_rapier',
        /itemfilters:/,
        'aether:aether_portal_frame',
        'apotheosis:boss_summoner',
        'mekanism:hdpe_elytra',
        /libraryferret/
    ])

    e.add('forge:hiding', [
        // Apotheosis
        /apotheosis:gem/,
        // BotanyPots
        /botanypots:white_/,
        /botanypots:orange_/,
        /botanypots:magenta_/,
        /botanypots:yellow_/,
        /botanypots:lime_/,
        /botanypots:pink_/,
        /botanypots:gray_/,
        /botanypots:light_gray_/,
        /botanypots:cyan_/,
        /botanypots:purple_/,
        /botanypots:light_blue_/,
        /botanypots:blue_/,
        /botanypots:brown_/,
        /botanypots:green_/,
        /botanypots:red_/,
        /botanypots:black_/,
        // Refined Storage
        /refinedstorage:white_/,
        /refinedstorage:orange_/,
        /refinedstorage:magenta_/,
        /refinedstorage:yellow_/,
        /refinedstorage:lime_/,
        /refinedstorage:pink_/,
        /refinedstorage:gray_/,
        /refinedstorage:light_gray_/,
        /refinedstorage:cyan_/,
        /refinedstorage:purple_/,
        /refinedstorage:blue_/,
        /refinedstorage:brown_/,
        /refinedstorage:green_/,
        /refinedstorage:red_/,
        /refinedstorage:black_/,
        // Sophisticated Backpack
        /sophisticatedbackpacks:backpack/,
        /sophisticatedstorage:gold_chest/,
        /sophisticatedstorage:diamond_chest/,
        /sophisticatedstorage:netherite_chest/,
        /sophisticatedstorage:barrel/,
        /sophisticatedstorage:iron_barrel/,
        /sophisticatedstorage:gold_barrel/,
        /sophisticatedstorage:diamond_barrel/,
        /sophisticatedstorage:netherite_barrel/,
        /sophisticatedstorage:limited_barrel_1/,
        /sophisticatedstorage:limited_iron_barrel_1/,
        /sophisticatedstorage:limited_gold_barrel_1/,
        /sophisticatedstorage:limited_diamond_barrel_1/,
        /sophisticatedstorage:limited_netherite_barrel_1/,
        /sophisticatedstorage:limited_barrel_2/,
        /sophisticatedstorage:limited_iron_barrel_2/,
        /sophisticatedstorage:limited_gold_barrel_2/,
        /sophisticatedstorage:limited_diamond_barrel_2/,
        /sophisticatedstorage:limited_netherite_barrel_2/,
        /sophisticatedstorage:limited_barrel_3/,
        /sophisticatedstorage:limited_iron_barrel_3/,
        /sophisticatedstorage:limited_gold_barrel_3/,
        /sophisticatedstorage:limited_diamond_barrel_3/,
        /sophisticatedstorage:limited_netherite_barrel_3/,
        /sophisticatedstorage:limited_barrel_4/,
        /sophisticatedstorage:limited_iron_barrel_4/,
        /sophisticatedstorage:limited_gold_barrel_4/,
        /sophisticatedstorage:limited_diamond_barrel_4/,
        /sophisticatedstorage:limited_netherite_barrel_4/,
        /sophisticatedstorage:chest/,
        /sophisticatedstorage:iron_chest/,
        /sophisticatedstorage:shulker_box/,
        /sophisticatedstorage:iron_shulker_box/,
        /sophisticatedstorage:gold_shulker_box/,
        /sophisticatedstorage:diamond_shulker_box/,
        /sophisticatedstorage:netherite_shulker_box/,
        // Others
        /spawn_egg/,
        'ars_nouveau:drygmy_se',
        'ars_nouveau:starbuncle_se',
        'ars_nouveau:whirlisprig_se',
        'ars_nouveau:wilden_guardian_se',
        'ars_nouveau:wilden_hunter_se',
        'ars_nouveau:wilden_stalker_se',
        /minecraft:tipped_arrow/,
        /everlastingabilities:ability_totem/,
        /ftbquests:/,
        '#minecraft:chest_boats',
        /easy_npc:/,
        /supplementaries:bamboo_spikes_tipped/,
        /structure_gel:/,
        'createaddition:zinc_sheet',
        'create:brass_sheet',
        'create:golden_sheet',
        'create:iron_sheet',
        'nifty:plate_iron',
        'create:copper_sheet',
        'nifty:plate_copper',
        'createaddition:electrum_sheet',
        'create_things_and_misc:rose_quartz_sheet',
        'create_things_and_misc:experience_sheet',
        'createutilities:void_steel_sheet',
        'mekanism:hdpe_sheet',
        'createaddition:brass_rod',
        'createaddition:copper_rod',
        'createaddition:iron_rod',
        'nifty:iron_rod',
        'createaddition:gold_rod',
        'createaddition:electrum_rod',
        'mekanism:hdpe_rod',
        'useless_sword:emerald_stick',
        'manyideas_core:plate_copper',
        'manyideas_core:plate_gold',
        'manyideas_core:plate_iron',
        'manyideas_core:plate_quartz',
        'createaddition:diamond_grit'
    ])

    e.add('forge:ores/coal', /coal_ore/)
    e.add('forge:ores/iron', /iron_ore/)
    e.add('forge:ores/copper', /copper_ore/)
    e.add('forge:ores/gold', /gold_ore/)
    e.add('forge:ores/redstone', /redstone_ore/)
    e.add('forge:ores/emerald', /emerald_ore/)
    e.add('forge:ores/lapis', /lapis_ore/)
    e.add('forge:ores/diamond', /diamond_ore/)
    e.add('forge:ores/quartz', /quartz_ore/)
    e.add('forge:ores/zinc', /zinc_ore/)
    e.add('forge:ores/malachite', /malachite_ore/)
    e.add('forge:ores/irradium', /irradium_ore/)
    e.add('forge:ores/bismuth', /bismuth_ore/)
    e.add('forge:ores/ruby', /ruby_ore/)
    e.add('forge:ores/jade', /jade_ore/)
    e.add('forge:ores/aquamarine', /aquamarine_ore/)
    e.add('forge:ores/onyx', /onyx_ore/)
    e.add('forge:ores/silver', /silver_ore/)
    e.add('forge:ores/dimensional_shard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
    e.add('forge:ores/tungsten', /tungsten_ore/)
    e.add('forge:ores/chorundum', /chorundum_ore/)
    e.add('forge:ores/ambrosium', /ambrosium_ore/)
    e.add('forge:ores/zanite', /zanite_ore/)
    e.add('forge:ores/gravitite', /gravitite_ore/)
    e.add('forge:ores/cloggrum', /cloggrum_ore/)
    e.add('forge:ores/froststeel', /froststeel_ore/)
    e.add('forge:ores/utherium', /utherium_ore/)
    e.add('forge:ores/regalium', /regalium_ore/)
    e.add('forge:ores/endumium', /endumium_ore/)
    e.add('forge:ores/tin', /tin_ore/)
    e.add('forge:ores/osmium', /osmium_ore/)
    e.add('forge:ores/uranium', /uranium_ore/)
    e.add('forge:ores/fluorite', /fluorite_ore/)
    e.add('forge:ores/lead', /lead_ore/)
    e.add('forge:ores/netherite', 'minecraft:ancient_debris')
    e.add('forge:ores/enderite', 'lolenderite:primordial_remnants')

    e.remove('forge:dusts/diamond', 'createaddition:diamond_grit')
    
    e.add('minecraft:planks', '#aether_genesis:ancient_aether_plank_crafting')
    e.add('candlelight:milk', '#aether:milk_bucket_crafting')
})

// Adding Block tags
ServerEvents.tags('block', e => {
    e.add('forge:ores/coal', /coal_ore/)
    e.add('forge:ores/iron', /iron_ore/)
    e.add('forge:ores/copper', /copper_ore/)
    e.add('forge:ores/gold', /gold_ore/)
    e.add('forge:ores/redstone', /redstone_ore/)
    e.add('forge:ores/emerald', /emerald_ore/)
    e.add('forge:ores/lapis', /lapis_ore/)
    e.add('forge:ores/diamond', /diamond_ore/)
    e.add('forge:ores/quartz', /quartz_ore/)
    e.add('forge:ores/zinc', /zinc_ore/)
    e.add('forge:ores/malachite', /malachite_ore/)
    e.add('forge:ores/irradium', /irradium_ore/)
    e.add('forge:ores/bismuth', /bismuth_ore/)
    e.add('forge:ores/ruby', /ruby_ore/)
    e.add('forge:ores/jade', /jade_ore/)
    e.add('forge:ores/aquamarine', /aquamarine_ore/)
    e.add('forge:ores/onyx', /onyx_ore/)
    e.add('forge:ores/silver', /silver_ore/)
    e.add('forge:ores/dimensional_shard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
    e.add('forge:ores/tungsten', /tungsten_ore/)
    e.add('forge:ores/chorundum', /chorundum_ore/)
    e.add('forge:ores/ambrosium', /ambrosium_ore/)
    e.add('forge:ores/zanite', /zanite_ore/)
    e.add('forge:ores/gravitite', /gravitite_ore/)
    e.add('forge:ores/cloggrum', /cloggrum_ore/)
    e.add('forge:ores/froststeel', /froststeel_ore/)
    e.add('forge:ores/utherium', /utherium_ore/)
    e.add('forge:ores/regalium', /regalium_ore/)
    e.add('forge:ores/endumium', /endumium_ore/)
    e.add('forge:ores/tin', /tin_ore/)
    e.add('forge:ores/osmium', /osmium_ore/)
    e.add('forge:ores/uranium', /uranium_ore/)
    e.add('forge:ores/fluorite', /fluorite_ore/)
    e.add('forge:ores/lead', /lead_ore/)
    e.add('forge:ores/netherite', 'minecraft:ancient_debris')
    e.add('forge:ores/enderite', 'lolenderite:primordial_remnants')
})