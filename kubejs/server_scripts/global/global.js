//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  //#region - Added Tags
  e.add("modfart/planks/acacia", [/acacia_planks/, /seamless_acacia/]);
  e.add("modfart/planks/bamboo", /bamboo_planks/);
  e.add("modfart/planks/birch", [/birch_planks/, /seamless_birch/]);
  e.add("modfart/planks/cherry", /cherry_planks/);
  e.add("modfart/planks/crimson", [/crimson_planks/, /seamless_crimson/]);
  e.add("modfart/planks/dark_oak", [/dark_oak_planks/, /seamless_dark_oak/]);
  e.add("modfart/planks/jungle", [/jungle_planks/, /seamless_jungle/]);
  e.add("modfart/planks/mangrove", /mangrove_planks/);
  e.add("modfart/planks/other", /planks/);
  e.add("modfart/planks/spruce", [/spruce_planks/, /seamless_spruce/]);
  e.add("modfart/planks/warped", [/warped_planks/, /seamless_warped/]);
  e.add("minecraft:boats", ["beachparty:floaty", "beachparty:palm_boat", "beachparty:palm_chest_boat", "meadow:pine_boat", "meadow:pine_chest_boat"]);
  e.add("minecraft:chest_boats", ["beachparty:palm_chest_boat", "meadow:pine_chest_boat"]);
  e.add("vinery:dark_cherry_logs", ["vinery:stripped_dark_cherry_log", "vinery:dark_cherry_log", "vinery:stripped_dark_cherry_wood", "vinery:dark_cherry_wood"]);
  //#endregion
  //#region - Removed Tags
  e.remove("modfart/planks/acacia", [/mcw/, /additional_lights:/]);
  e.remove("modfart/planks/bamboo", /mcw/);
  e.remove("modfart/planks/birch", [/mcw/, /additional_lights:/]);
  e.remove("modfart/planks/cherry", [/mcw/, /vinery:/]);
  e.remove("modfart/planks/crimson", [/mcw/, /additional_lights:/]);
  e.remove("modfart/planks/dark_oak", [/mcw/, /additional_lights:/]);
  e.remove("modfart/planks/jungle", [/mcw/, /additional_lights:/]);
  e.remove("modfart/planks/mangrove", /mcw/);
  e.remove("modfart/planks/other", [
    "#modfart/planks/acacia",
    "#modfart/planks/archwood",
    "#modfart/planks/bamboo",
    "#modfart/planks/birch",
    "#modfart/planks/cherry",
    "#modfart/planks/crimson",
    "#modfart/planks/dark_oak",
    "#modfart/planks/jungle",
    "#modfart/planks/mangrove",
    "#modfart/planks/spruce",
    "#modfart/planks/warped",
    "aether:skyroot_planks",
    "biomesoplenty:dead_planks",
    "biomesoplenty:fir_planks",
    "biomesoplenty:hellbark_planks",
    "biomesoplenty:jacaranda_planks",
    "biomesoplenty:magic_planks",
    "biomesoplenty:mahogany_planks",
    "biomesoplenty:palm_planks",
    "biomesoplenty:redwood_planks",
    "biomesoplenty:umbran_planks",
    "biomesoplenty:willow_planks",
    "deeperdarker:echo_planks",
    "endlessbiomes:penumbra_planks",
    "endlessbiomes:twisted_planks",
    "gardens_of_the_dead:soulblight_planks",
    "gardens_of_the_dead:whistlecane_block",
    "twilightforest:canopy_planks",
    "twilightforest:dark_planks",
    "twilightforest:mangrove_planks",
    "twilightforest:mining_planks",
    "twilightforest:sorting_planks",
    "twilightforest:time_planks",
    "twilightforest:transformation_planks",
    "twilightforest:twilight_oak_planks",
    "undergarden:grongle_planks",
    "undergarden:smogstem_planks",
    "undergarden:wigglewood_planks",
    "vct:rotten_planks_crafting_table_minecart",
    /additional_lights:/,
    /chipped:/,
    /macaw/,
    /mcw/,
    /planks_fence/,
    /planks_seamless/,
    /planks_slab/,
    /planks_stairs/,
    /rechiseled:/
  ]);
  e.remove("modfart/planks/spruce", [/mcw/, /additional_lights:/]);
  e.remove("modfart/planks/warped", [/mcw/, /additional_lights:/]);
  //#endregion
  //#region - Fireproof & Undestroyable
  e.add("forge:modfart/fireproof", [
    "#forge:modfart/guide",
    "alexsmobs:dimensional_carver",
    "alexsmobs:straddleboard",
    "apotheosis:augmenting_table",
    "apotheosis:reforging_table",
    "apotheosis:sightshelf_t2",
    "aquaculture:nether_star_hook",
    "ars_elemental:firenando_charm",
    "ars_elemental:glyph_spike",
    "cataclysm:flame_eye",
    "cataclysm:monstrous_eye",
    "create_sa:block_picker",
    "create_sa:brass_cube",
    "create_sa:copper_magnet",
    "createchromaticreturn:radiant_glow_claws",
    "createchromaticreturn:radiant_glow_saber",
    "createsifter:zinc_mesh",
    "createutilities:graviton_tube",
    "createutilities:void_casing",
    "createutilities:void_motor",
    "cyclic:lightning_scepter",
    "cyclic:quiver_lightning",
    "cyclic:soulstone",
    "easy_villagers:auto_trader",
    "eccentrictome:tome",
    "ends_delight:dragon_egg_shell_knife",
    "ends_delight:dragon_meat_stew_block",
    "ends_delight:dragon_tooth_knife",
    "ends_delight:fried_dragon_egg",
    "ends_delight:half_dragon_egg_shell",
    "ends_delight:liquid_dragon_egg",
    "ends_delight:steamed_dragon_egg_block",
    "explorerscompass:explorerscompass",
    "ironfurnaces:million_furnace",
    "ironfurnaces:rainbow_coal",
    "jamd:nether_portal",
    "mastersword:fiercedeitysword",
    "mekanism:meka_tool",
    "mekanism:modification_station",
    "mekanism:module_blasting_unit",
    "mekanism:module_charge_distribution_unit",
    "mekanism:module_elytra_unit",
    "mekanism:module_fortune_unit",
    "mekanism:module_frost_walker_unit",
    "mekanism:module_gravitational_modulating_unit",
    "mekanism:module_gyroscopic_stabilization_unit",
    "mekanism:module_hydraulic_propulsion_unit",
    "mekanism:module_hydrostatic_repulsor_unit",
    "mekanism:module_inhalation_purification_unit",
    "mekanism:module_jetpack_unit",
    "mekanism:module_locomotive_boosting_unit",
    "mekanism:module_magnetic_attraction_unit",
    "mekanism:module_motorized_servo_unit",
    "mekanism:module_nutritional_injection_unit",
    "mekanism:module_silk_touch_unit",
    "mekanism:module_teleportation_unit",
    "mekanism:module_vein_mining_unit",
    "mekanism:module_vision_enhancement_unit",
    "mekanism:qio_drive_supermassive",
    "mekanismgenerators:module_geothermal_generator_unit",
    "mekanismgenerators:module_solar_recharging_unit",
    "mekaweapons:bow_riser",
    "mekaweapons:katana_blade",
    "mekaweapons:mekabow",
    "mekaweapons:mekatana",
    "mekaweapons:module_arrowenergy_unit",
    "mekaweapons:module_autofire_unit",
    "mekaweapons:module_drawspeed_unit",
    "mekaweapons:module_gravitydampener_unit",
    "minecraft:beacon",
    "minecraft:enchanted_golden_apple",
    "minecraft:mojang_banner_pattern",
    "minecraft:spawner",
    "morecoal:omni_coal",
    "pipez:ultimate_upgrade",
    "refinedcooking:kitchen_access_point",
    "refinedstorage:portable_grid",
    "simplyswords:awakened_lichblade",
    "simplyswords:netherfused_gem",
    "simplyswords:righteous_relic",
    "simplyswords:sunfire",
    "solarpanels:light_absorbing_solar_element",
    "solarpanels:light_absorbing_solar_panel",
    "solarpanels:photonic_energy_tablet",
    "solarpanels:photonic_solar_element",
    "solarpanels:photonic_solar_panel",
    "solarpanels:singular_solar_element",
    "solarpanels:singular_solar_panel",
    "solarpanels:spectral_solar_element",
    "solarpanels:spectral_solar_panel",
    "sophisticatedbackpacks:everlasting_upgrade",
    "sophisticatedbackpacks:inception_upgrade",
    "suppsquared:heavy_key",
    /ancient_debris/,
    /antimatter/,
    /ars_elemental:.*homing/,
    /ars_elemental:air_/,
    /ars_elemental:aqua_/,
    /ars_elemental:earth_/,
    /ars_elemental:fire_/,
    /ars_nouveau:.*_spell_book/,
    /ars_technica:technomancer_/,
    /bedrock/,
    /cagedmobs:speed_.*_upgrade/,
    /chunkloaders:/,
    /createsifter:.*brass_mesh/,
    /createsifter:.*custom_mesh/,
    /creative/,
    /crystaltine/,
    /eidolon:.*holy_symbol/,
    /ender_star/,
    /enhanced_ender/,
    /extradisks:.*withering/,
    /infinite/,
    /infinity/,
    /kubejs:.*_apparatus/,
    /kubejs:giant_/,
    /lodestone/,
    /manyideas_doors:.*_portcullis/,
    /mekanism:mekasuit/,
    /multiplite/,
    /nether_star/,
    /netherite/,
    /plutonium/,
    /polonium/,
    /refinedstorage:.*controller/,
    /refinedstorage:.*network_receiver/,
    /refinedstorage:.*network_transmitter/,
    /ringsofascension:/,
    /rsinfinitybooster:/,
    /samurai_dynasty:amethyst_samurai_/,
    /samurai_dynasty:neptunium_samurai_/,
    /samurai_dynasty:quartz_samurai_/,
    /sophisticated.*:stack_upgrade_tier_4/,
    /the_ultimate/,
    /trofers:/,
    /void_steel/
  ]);
  e.add("forge:modfart/undestroyable", "#forge:modfart/fireproof");
  //#endregion
});
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([{ id: "terralith:dispenser_alt" }, { id: "terralith:observer_alt" }, { id: "terralith:lever_alt" }, { id: "terralith:dropper_alt" }, { id: "terralith:piston_alt" }, { id: "naturalist:cake" }, { id: /nfm:beige_/ }, { id: "stellarity:gunpowder_from_popped_chorus_blasting" }]);
  //#endregion
  //#region - Smithing Template Trim
  e.remove([
    { id: "minecraft:sentry_armor_trim_smithing_template" },
    { id: "minecraft:vex_armor_trim_smithing_template" },
    { id: "minecraft:wild_armor_trim_smithing_template" },
    { id: "minecraft:coast_armor_trim_smithing_template" },
    { id: "minecraft:dune_armor_trim_smithing_template" },
    { id: "minecraft:wayfinder_armor_trim_smithing_template" },
    { id: "minecraft:raiser_armor_trim_smithing_template" },
    { id: "minecraft:shaper_armor_trim_smithing_template" },
    { id: "minecraft:host_armor_trim_smithing_template" },
    { id: "minecraft:ward_armor_trim_smithing_template" },
    { id: "minecraft:silence_armor_trim_smithing_template" },
    { id: "minecraft:tide_armor_trim_smithing_template" },
    { id: "minecraft:snout_armor_trim_smithing_template" },
    { id: "minecraft:rib_armor_trim_smithing_template" },
    { id: "minecraft:eye_armor_trim_smithing_template" },
    { id: "minecraft:spire_armor_trim_smithing_template" },
    { id: "lost_aether_content:noble_armor_trim_smithing_template" },
    { id: "alexscaves:polarity_armor_trim_smithing_template" },
    { id: "ancient_aether:wynd_armor_trim_smithing_template" },
    { id: "ancient_aether:whale_armor_trim_smithing_template" },
    { id: "ancient_aether:ascended_armor_trim_smithing_template" },
    { id: "ancient_aether:mysterious_armor_trim_smithing_template" },
    { id: "ancient_aether:mechanical_armor_trim_smithing_template" }
  ]);
  let potting_template_trim = (material, template) => {
    e.custom({
      type: "minecraft:smithing_transform",
      template: { item: "minecraft:redstone" },
      base: {
        item: "kubejs:blank_template_trim"
      },
      addition: {
        item: material
      },
      result: {
        item: template
      }
    });
  };
  potting_template_trim("minecraft:map", "minecraft:coast_armor_trim_smithing_template");
  potting_template_trim("minecraft:sandstone", "minecraft:dune_armor_trim_smithing_template");
  potting_template_trim("minecraft:end_stone", "minecraft:eye_armor_trim_smithing_template");
  potting_template_trim("minecraft:blue_terracotta", "minecraft:host_armor_trim_smithing_template");
  potting_template_trim("minecraft:orange_terracotta", "minecraft:raiser_armor_trim_smithing_template");
  potting_template_trim("minecraft:nether_bricks", "minecraft:rib_armor_trim_smithing_template");
  potting_template_trim("moa_decor_toys:saqueador", "minecraft:sentry_armor_trim_smithing_template");
  potting_template_trim("minecraft:white_terracotta", "minecraft:shaper_armor_trim_smithing_template");
  potting_template_trim("minecraft:sculk", "minecraft:silence_armor_trim_smithing_template");
  potting_template_trim("minecraft:chiseled_polished_blackstone", "minecraft:snout_armor_trim_smithing_template");
  potting_template_trim("minecraft:purpur_block", "minecraft:spire_armor_trim_smithing_template");
  potting_template_trim("minecraft:prismarine", "minecraft:tide_armor_trim_smithing_template");
  potting_template_trim("moa_decor_toys:vex", "minecraft:vex_armor_trim_smithing_template");
  potting_template_trim("moa_decor_toys:warden", "minecraft:ward_armor_trim_smithing_template");
  potting_template_trim("minecraft:cyan_terracotta", "minecraft:wayfinder_armor_trim_smithing_template");
  potting_template_trim("minecraft:mossy_cobblestone", "minecraft:wild_armor_trim_smithing_template");
  potting_template_trim("alexscaves:galena", "alexscaves:polarity_armor_trim_smithing_template");
  potting_template_trim("ancient_aether:aerogetic_stone", "ancient_aether:ancient_armor_trim_smithing_template");
  potting_template_trim("aether:holystone_bricks", "ancient_aether:ascended_armor_trim_smithing_template");
  potting_template_trim("aether:icestone", "ancient_aether:mechanical_armor_trim_smithing_template");
  potting_template_trim("ancient_aether:carved_stone_mosaic", "ancient_aether:mosaic_armor_trim_smithing_template");
  potting_template_trim("aether:mossy_holystone", "ancient_aether:mysterious_armor_trim_smithing_template");
  potting_template_trim("ancient_aether:angelic_stone_mosaic", "ancient_aether:royal_armor_trim_smithing_template");
  potting_template_trim("ancient_aether:hellfire_stone_mosaic", "ancient_aether:solar_armor_trim_smithing_template");
  potting_template_trim("ancient_aether:holystone_brick_mosaic", "ancient_aether:whale_armor_trim_smithing_template");
  potting_template_trim("aether:holystone", "ancient_aether:wynd_armor_trim_smithing_template");
  potting_template_trim("lost_aether_content:gale_stone", "lost_aether_content:noble_armor_trim_smithing_template");

  //#region - Duplication
  let potting_template_trim_duplication = template => {
    e.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: template
      },
      loops: 1,
      results: [
        {
          count: 2,
          item: template
        }
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:blank_template_trim"
            },
            {
              item: "kubejs:blank_template_trim"
            }
          ],
          keepHeldItem: true,
          results: [
            {
              item: "kubejs:blank_template_trim"
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:blank_template_trim"
            },
            {
              item: "kubejs:diamond_plate"
            }
          ],
          results: [
            {
              item: "kubejs:blank_template_trim"
            }
          ]
        }
      ],
      transitionalItem: {
        item: "kubejs:blank_template_trim"
      }
    });
  };
  potting_template_trim_duplication("minecraft:sentry_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:vex_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:wild_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:coast_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:dune_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:wayfinder_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:raiser_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:shaper_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:host_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:ward_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:silence_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:tide_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:snout_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:rib_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:eye_armor_trim_smithing_template");
  potting_template_trim_duplication("minecraft:spire_armor_trim_smithing_template");
  potting_template_trim_duplication("alexscaves:polarity_armor_trim_smithing_template");
  potting_template_trim_duplication("ancient_aether:ancient_armor_trim_smithing_template");
  potting_template_trim_duplication("ancient_aether:ascended_armor_trim_smithing_template");
  potting_template_trim_duplication("ancient_aether:mechanical_armor_trim_smithing_template");
  potting_template_trim_duplication("ancient_aether:mosaic_armor_trim_smithing_template");
  potting_template_trim_duplication("ancient_aether:mysterious_armor_trim_smithing_template");
  potting_template_trim_duplication("ancient_aether:royal_armor_trim_smithing_template");
  potting_template_trim_duplication("ancient_aether:solar_armor_trim_smithing_template");
  potting_template_trim_duplication("ancient_aether:whale_armor_trim_smithing_template");
  potting_template_trim_duplication("ancient_aether:wynd_armor_trim_smithing_template");
  potting_template_trim_duplication("lost_aether_content:noble_armor_trim_smithing_template");
  //#endregion
  //#endregion
  //#region - Smithing Template Upgrade
  e.remove([{ id: "minecraft:netherite_upgrade_smithing_template" }, { id: "cataclysm:ignitium_upgrade_smithing_template" }, { id: "deeperdarker:warden_upgrade_smithing_template" }, { id: "endlessbiomes:anklor_upgrade_template_duplication" }, { id: "samurai_dynasty:spirit_upgrade_smithing_template" }, { id: "undergarden:forgotten_upgrade_smithing_template" }]);
  let potting_template_upgrade = (material, template) => {
    e.custom({
      type: "minecraft:smithing_transform",
      template: { item: "minecraft:redstone" },
      base: {
        item: "kubejs:blank_template_upgrade"
      },
      addition: {
        item: material
      },
      result: {
        item: template
      }
    });
  };
  potting_template_upgrade("easy_piglins:piglin", "minecraft:netherite_upgrade_smithing_template");
  potting_template_upgrade("cataclysm:ignitium_ingot", "cataclysm:ignitium_upgrade_smithing_template");
  potting_template_upgrade("deeperdarker:reinforced_echo_shard", "deeperdarker:warden_upgrade_smithing_template");
  potting_template_upgrade("endlessbiomes:anklor_shell_plate", "endlessbiomes:anklor_upgrade_template");
  potting_template_upgrade("enlightened_end:adamantite_ingot", "enlightened_end:adamantite_smithing_template");
  potting_template_upgrade("samurai_dynasty:spirit_stone", "samurai_dynasty:spirit_upgrade_smithing_template");
  potting_template_upgrade("undergarden:forgotten_ingot", "undergarden:forgotten_upgrade_smithing_template");

  //#region - Duplication
  let potting_template_upgrade_duplication = template => {
    e.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: template
      },
      loops: 1,
      results: [
        {
          count: 2,
          item: template
        }
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:blank_template_upgrade"
            },
            {
              item: "kubejs:blank_template_upgrade"
            }
          ],
          keepHeldItem: true,
          results: [
            {
              item: "kubejs:blank_template_upgrade"
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:blank_template_upgrade"
            },
            {
              item: "kubejs:diamond_plate"
            }
          ],
          results: [
            {
              item: "kubejs:blank_template_upgrade"
            }
          ]
        }
      ],
      transitionalItem: {
        item: "kubejs:blank_template_upgrade"
      }
    });
  };
  potting_template_upgrade_duplication("minecraft:netherite_upgrade_smithing_template");
  potting_template_upgrade_duplication("cataclysm:ignitium_upgrade_smithing_template");
  potting_template_upgrade_duplication("deeperdarker:warden_upgrade_smithing_template");
  potting_template_upgrade_duplication("endlessbiomes:anklor_upgrade_template");
  potting_template_upgrade_duplication("enlightened_end:adamantite_smithing_template");
  potting_template_upgrade_duplication("samurai_dynasty:spirit_upgrade_smithing_template");
  potting_template_upgrade_duplication("undergarden:forgotten_upgrade_smithing_template");
  //#endregion
  //#endregion
  //#region - Glass Trapdoors
  e.remove([{ id: /glassential:.*_glass_trapdoor_recipe/ }]);
  let potting_glass_trapdoor = (glass, glass_trapdoor) => {
    e.shaped(glass_trapdoor, ["AAA"], { A: glass });
  };
  potting_glass_trapdoor("minecraft:white_stained_glass", "2x glassential:white_glass_trapdoor");
  potting_glass_trapdoor("minecraft:light_gray_stained_glass", "2x glassential:light_gray_glass_trapdoor");
  potting_glass_trapdoor("minecraft:gray_stained_glass", "2x glassential:gray_glass_trapdoor");
  potting_glass_trapdoor("minecraft:black_stained_glass", "2x glassential:black_glass_trapdoor");
  potting_glass_trapdoor("minecraft:brown_stained_glass", "2x glassential:brown_glass_trapdoor");
  potting_glass_trapdoor("minecraft:red_stained_glass", "2x glassential:red_glass_trapdoor");
  potting_glass_trapdoor("minecraft:orange_stained_glass", "2x glassential:orange_glass_trapdoor");
  potting_glass_trapdoor("minecraft:yellow_stained_glass", "2x glassential:yellow_glass_trapdoor");
  potting_glass_trapdoor("minecraft:lime_stained_glass", "2x glassential:lime_glass_trapdoor");
  potting_glass_trapdoor("minecraft:green_stained_glass", "2x glassential:green_glass_trapdoor");
  potting_glass_trapdoor("minecraft:cyan_stained_glass", "2x glassential:cyan_glass_trapdoor");
  potting_glass_trapdoor("minecraft:light_blue_stained_glass", "2x glassential:light_blue_glass_trapdoor");
  potting_glass_trapdoor("minecraft:blue_stained_glass", "2x glassential:blue_glass_trapdoor");
  potting_glass_trapdoor("minecraft:purple_stained_glass", "2x glassential:purple_glass_trapdoor");
  potting_glass_trapdoor("minecraft:magenta_stained_glass", "2x glassential:magenta_glass_trapdoor");
  potting_glass_trapdoor("minecraft:pink_stained_glass", "2x glassential:pink_glass_trapdoor");
  //#endregion
  //#region - Compression & Décompression
  e.remove([{ id: "cagedmobs:crafting/dragon_egg_from_scales" }, { id: "cagedmobs:crafting/sponge_from_fragments" }, { id: "dustrial_decor:wrapped_gold_chains" }, { id: "minecraft:honeycomb_block" }, { id: "create:rose_quartz_block_from_rose_quartz_stonecutting" }, { id: "modfart:crafting_table/rose_quartz_from_rose_quartz_block" }, { id: "minecraft:blue_ice" }, { id: "minecraft:packed_ice" }]);
  let potting_compress_and_decompress = (count, base, compress) => {
    // Vérification du count pour appliquer un craft avec 4 ou 9 items
    e.shaped(compress, count === 4 ? ["AA", "AA"] : ["AAA", "AAA", "AAA"], { A: base });
    e.shapeless(`${count}x ${base}`, compress);
  };
  potting_compress_and_decompress(4, "minecraft:honeycomb", "minecraft:honeycomb_block");
  potting_compress_and_decompress(9, "additionallanterns:gold_chain", "dustrial_decor:wrapped_gold_chains");
  potting_compress_and_decompress(9, "cagedmobs:dragon_scale", "minecraft:dragon_egg");
  potting_compress_and_decompress(9, "cagedmobs:nether_star_fragment", "minecraft:nether_star");
  potting_compress_and_decompress(9, "cagedmobs:sponge_fragment", "minecraft:sponge");
  potting_compress_and_decompress(9, "kubejs:alloy_creative", "kubejs:block_creative");
  potting_compress_and_decompress(9, "create:rose_quartz", "create:rose_quartz_block");
  potting_compress_and_decompress(9, "createchromaticreturn:bedrock_shard", "minecraft:bedrock");
  potting_compress_and_decompress(9, "minecraft:ice", "minecraft:packed_ice");
  potting_compress_and_decompress(9, "minecraft:packed_ice", "minecraft:blue_ice");
  //#endregion
  //#region - Inversion
  let potting_inversion = (item1, item2) => {
    e.shapeless(item1, item2);
    e.shapeless(item2, item1);
  };
  potting_inversion("mob_grinding_utils:fan_upgrade_height", "mob_grinding_utils:fan_upgrade_width");
  potting_inversion("mob_grinding_utils:spawner_upgrade_height", "mob_grinding_utils:spawner_upgrade_width");
  potting_inversion("biomesoplenty:rose_quartz_cluster", "create:rose_quartz");
  //#endregion
  //#region - Liquid XP
  let potting_liquid_xp = (input, output) => {
    e.custom({
      type: "create:mixing",
      ingredients: [
        {
          item: "create_enchantment_industry:experience_rotor"
        },
        {
          fluid: input,
          amount: 1000
        }
      ],
      results: [
        {
          item: "create_enchantment_industry:experience_rotor"
        },
        {
          fluid: output,
          amount: 1000
        }
      ]
    });
  };
  potting_liquid_xp("create_enchantment_industry:experience", "cyclic:xpjuice");
  potting_liquid_xp("cyclic:xpjuice", "experienceobelisk:cognitium");
  potting_liquid_xp("experienceobelisk:cognitium", "mob_grinding_utils:fluid_xp");
  potting_liquid_xp("mob_grinding_utils:fluid_xp", "sophisticatedcore:xp_still");
  potting_liquid_xp("sophisticatedcore:xp_still", "create_enchantment_industry:experience");
  //#endregion
  //#region - Stone Recreation
  e.shaped("minecraft:cobblestone", ["AAA", "A A", "AAA"], {
    A: "twigs:pebble"
  });
  e.shapeless("9x twigs:pebble", "minecraft:cobblestone");
  e.shapeless("twigs:rocky_dirt", ["minecraft:coblestone", "minecraft:dirt"]);
  let potting = (element, output) => {
    e.shaped(output, ["AAA", "ABA", "AAA"], {
      A: "twigs:pebble",
      B: element
    });
  };
  potting("twigs:pebble", "minecraft:cobblestone");
  potting("minecraft:coal", "minecraft:stone");
  potting("minecraft:nether_wart", "minecraft:netherrack");
  potting("minecraft:kelp", "minecraft:sand");
  potting("minecraft:redstone", "minecraft:red_sand");
  potting("minecraft:white_dye", "minecraft:diorite");
  potting("minecraft:gray_dye", "minecraft:andesite");
  potting("minecraft:red_dye", "minecraft:granite");
  potting("minecraft:chorus_fruit", "minecraft:end_stone");
  potting("minecraft:dirt", "twigs:rocky_dirt");
  potting("cyclic:cloud", "aether:holystone");
  potting("mekanism:dust_obsidian", "minecraft:cobbled_deepslate");
  potting("deeperdarker:sculk_tendrils", "deeperdarker:cobbled_sculk_stone");
  potting("twilightforest:thorn_rose", "twilightforest:deadrock");
  potting("minecraft:ice", "undergarden:shiverstone");
  potting("undergarden:depthrock_pebble", "undergarden:depthrock");
  //#endregion
  //#region - Cracked End Stone Bricks
  e.remove({ id: "endlessbiomes:cracked_end_stone_bricks_recipe" });
  e.smelting("endlessbiomes:cracked_end_stone_bricks", "stalwart_dungeons:cracked_endstone_bricks").xp(1);
  //#endregion
  //#region - Explorer's Compass
  e.remove({ id: "explorerscompass:explorers_compass" });
  e.shaped("explorerscompass:explorerscompass", ["ABC", "DEF", "GHI"], {
    A: "cagedmobs:star_infused_netherite_ingot",
    B: "twilightforest:twilight_portal_miniature_structure",
    C: "undergarden:forgotten_ingot",
    D: "easy_piglins:piglin",
    E: "minecraft:compass",
    F: "easy_villagers:villager",
    G: "minecraft:amethyst_shard",
    H: "lootr:trophy",
    I: "deeperdarker:reinforced_echo_shard"
  });
  //#endregion
  //#region - Handcrafted Sheets
  e.remove({ id: /handcrafted:.*_sheet/ });
  let potting_sheets = (wool, sheet) => {
    e.shaped(`8x ${sheet}`, ["WW", "W "], { W: wool });
  };
  potting_sheets("minecraft:black_wool", "handcrafted:black_sheet");
  potting_sheets("minecraft:blue_wool", "handcrafted:blue_sheet");
  potting_sheets("minecraft:brown_wool", "handcrafted:brown_sheet");
  potting_sheets("minecraft:cyan_wool", "handcrafted:cyan_sheet");
  potting_sheets("minecraft:gray_wool", "handcrafted:gray_sheet");
  potting_sheets("minecraft:green_wool", "handcrafted:green_sheet");
  potting_sheets("minecraft:light_blue_wool", "handcrafted:light_blue_sheet");
  potting_sheets("minecraft:light_gray_wool", "handcrafted:light_gray_sheet");
  potting_sheets("minecraft:lime_wool", "handcrafted:lime_sheet");
  potting_sheets("minecraft:magenta_wool", "handcrafted:magenta_sheet");
  potting_sheets("minecraft:orange_wool", "handcrafted:orange_sheet");
  potting_sheets("minecraft:pink_wool", "handcrafted:pink_sheet");
  potting_sheets("minecraft:purple_wool", "handcrafted:purple_sheet");
  potting_sheets("minecraft:red_wool", "handcrafted:red_sheet");
  potting_sheets("minecraft:white_wool", "handcrafted:white_sheet");
  potting_sheets("minecraft:yellow_wool", "handcrafted:yellow_sheet");
  //#endregion
  //#region - Handcrafted Wood Plate
  e.remove({ id: "handcrafted:wood_plate" });
  e.shaped("3x handcrafted:wood_plate", ["A A", " B "], { A: "#minecraft:wooden_slabs", B: "#minecraft:wooden_pressure_plates" });
  //#endregion
  //#region - Centennial Trophy
  e.shaped("lootr:trophy", [" A ", "BCD", " E "], { A: "minecraft:chest", B: "ars_nouveau:archwood_chest", C: "minecraft:shulker_box", D: "mekanism:personal_chest", E: "minecraft:barrel" });
  //#endregion
});
//#endregion
