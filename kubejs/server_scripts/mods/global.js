//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  //#region - Added Tags
  e.add("modfart/planks/acacia", [/acacia_planks/, /seamless_acacia/])
  e.add("modfart/planks/bamboo", /bamboo_planks/)
  e.add("modfart/planks/birch", [/birch_planks/, /seamless_birch/])
  e.add("modfart/planks/cherry", /cherry_planks/)
  e.add("modfart/planks/crimson", [/crimson_planks/, /seamless_crimson/])
  e.add("modfart/planks/dark_oak", [/dark_oak_planks/, /seamless_dark_oak/])
  e.add("modfart/planks/jungle", [/jungle_planks/, /seamless_jungle/])
  e.add("modfart/planks/mangrove", /mangrove_planks/)
  e.add("modfart/planks/other", /planks/)
  e.add("modfart/planks/spruce", [/spruce_planks/, /seamless_spruce/])
  e.add("modfart/planks/warped", [/warped_planks/, /seamless_warped/])
  e.add("minecraft:boats", ["beachparty:floaty", "beachparty:palm_boat", "beachparty:palm_chest_boat", "meadow:pine_boat", "meadow:pine_chest_boat"])
  e.add("minecraft:chest_boats", ["beachparty:palm_chest_boat", "meadow:pine_chest_boat"])
  //#endregion
  //#region - Removed Tags
  e.remove("modfart/planks/acacia", [/mcw/, /additional_lights:/])
  e.remove("modfart/planks/bamboo", /mcw/)
  e.remove("modfart/planks/birch", [/mcw/, /additional_lights:/])
  e.remove("modfart/planks/cherry", [/mcw/, /vinery:/])
  e.remove("modfart/planks/crimson", [/mcw/, /additional_lights:/])
  e.remove("modfart/planks/dark_oak", [/mcw/, /additional_lights:/])
  e.remove("modfart/planks/jungle", [/mcw/, /additional_lights:/])
  e.remove("modfart/planks/mangrove", /mcw/)
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
  ])
  e.remove("modfart/planks/spruce", [/mcw/, /additional_lights:/])
  e.remove("modfart/planks/warped", [/mcw/, /additional_lights:/])
  //#endregion
})
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Remove Crafts
  e.remove([
    { id: "terralith:dispenser_alt" },
    { id: "terralith:observer_alt" },
    { id: "terralith:lever_alt" },
    { id: "terralith:dropper_alt" },
    { id: "terralith:piston_alt" },
    { id: "naturalist:cake" }
  ])
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
  ])
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
    })
  }
  potting_template_trim("minecraft:map", "minecraft:coast_armor_trim_smithing_template")
  potting_template_trim("minecraft:sandstone", "minecraft:dune_armor_trim_smithing_template")
  potting_template_trim("minecraft:end_stone", "minecraft:eye_armor_trim_smithing_template")
  potting_template_trim("minecraft:blue_terracotta", "minecraft:host_armor_trim_smithing_template")
  potting_template_trim("minecraft:orange_terracotta", "minecraft:raiser_armor_trim_smithing_template")
  potting_template_trim("minecraft:nether_bricks", "minecraft:rib_armor_trim_smithing_template")
  potting_template_trim("moa_decor_toys:saqueador", "minecraft:sentry_armor_trim_smithing_template")
  potting_template_trim("minecraft:white_terracotta", "minecraft:shaper_armor_trim_smithing_template")
  potting_template_trim("minecraft:sculk", "minecraft:silence_armor_trim_smithing_template")
  potting_template_trim("minecraft:chiseled_polished_blackstone", "minecraft:snout_armor_trim_smithing_template")
  potting_template_trim("minecraft:purpur_block", "minecraft:spire_armor_trim_smithing_template")
  potting_template_trim("minecraft:prismarine", "minecraft:tide_armor_trim_smithing_template")
  potting_template_trim("moa_decor_toys:vex", "minecraft:vex_armor_trim_smithing_template")
  potting_template_trim("moa_decor_toys:warden", "minecraft:ward_armor_trim_smithing_template")
  potting_template_trim("minecraft:cyan_terracotta", "minecraft:wayfinder_armor_trim_smithing_template")
  potting_template_trim("minecraft:mossy_cobblestone", "minecraft:wild_armor_trim_smithing_template")
  potting_template_trim("alexscaves:galena", "alexscaves:polarity_armor_trim_smithing_template")
  potting_template_trim("ancient_aether:aerogetic_stone", "ancient_aether:ancient_armor_trim_smithing_template")
  potting_template_trim("aether:holystone_bricks", "ancient_aether:ascended_armor_trim_smithing_template")
  potting_template_trim("aether:icestone", "ancient_aether:mechanical_armor_trim_smithing_template")
  potting_template_trim("ancient_aether:carved_stone_mosaic", "ancient_aether:mosaic_armor_trim_smithing_template")
  potting_template_trim("aether:mossy_holystone", "ancient_aether:mysterious_armor_trim_smithing_template")
  potting_template_trim("ancient_aether:angelic_stone_mosaic", "ancient_aether:royal_armor_trim_smithing_template")
  potting_template_trim("ancient_aether:hellfire_stone_mosaic", "ancient_aether:solar_armor_trim_smithing_template")
  potting_template_trim("ancient_aether:holystone_brick_mosaic", "ancient_aether:whale_armor_trim_smithing_template")
  potting_template_trim("aether:holystone", "ancient_aether:wynd_armor_trim_smithing_template")
  potting_template_trim("lost_aether_content:gale_stone", "lost_aether_content:noble_armor_trim_smithing_template")

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
    })
  }
  potting_template_trim_duplication("minecraft:sentry_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:vex_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:wild_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:coast_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:dune_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:wayfinder_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:raiser_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:shaper_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:host_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:ward_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:silence_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:tide_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:snout_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:rib_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:eye_armor_trim_smithing_template")
  potting_template_trim_duplication("minecraft:spire_armor_trim_smithing_template")
  potting_template_trim_duplication("alexscaves:polarity_armor_trim_smithing_template")
  potting_template_trim_duplication("ancient_aether:ancient_armor_trim_smithing_template")
  potting_template_trim_duplication("ancient_aether:ascended_armor_trim_smithing_template")
  potting_template_trim_duplication("ancient_aether:mechanical_armor_trim_smithing_template")
  potting_template_trim_duplication("ancient_aether:mosaic_armor_trim_smithing_template")
  potting_template_trim_duplication("ancient_aether:mysterious_armor_trim_smithing_template")
  potting_template_trim_duplication("ancient_aether:royal_armor_trim_smithing_template")
  potting_template_trim_duplication("ancient_aether:solar_armor_trim_smithing_template")
  potting_template_trim_duplication("ancient_aether:whale_armor_trim_smithing_template")
  potting_template_trim_duplication("ancient_aether:wynd_armor_trim_smithing_template")
  potting_template_trim_duplication("lost_aether_content:noble_armor_trim_smithing_template")
  //#endregion
  //#endregion
  //#region - Smithing Template Upgrade
  e.remove([
    { id: "minecraft:netherite_upgrade_smithing_template" },
    { id: "cataclysm:ignitium_upgrade_smithing_template" },
    { id: "deeperdarker:warden_upgrade_smithing_template" },
    { id: "lolenderite:enderite_upgrade_smithing_template" },
    { id: "endlessbiomes:anklor_upgrade_template_duplication" },
    { id: "samurai_dynasty:spirit_upgrade_smithing_template" },
    { id: "undergarden:forgotten_upgrade_smithing_template" }
  ])
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
    })
  }
  potting_template_upgrade("easy_piglins:piglin", "minecraft:netherite_upgrade_smithing_template")
  potting_template_upgrade("cataclysm:ignitium_ingot", "cataclysm:ignitium_upgrade_smithing_template")
  potting_template_upgrade("deeperdarker:reinforced_echo_shard", "deeperdarker:warden_upgrade_smithing_template")
  potting_template_upgrade("endlessbiomes:anklor_shell_plate", "endlessbiomes:anklor_upgrade_template")
  potting_template_upgrade("enlightened_end:adamantite_ingot", "enlightened_end:adamantite_smithing_template")
  potting_template_upgrade("lolenderite:obsidian_infused_enderite_ingot", "lolenderite:enderite_upgrade_smithing_template")
  potting_template_upgrade("samurai_dynasty:spirit_stone", "samurai_dynasty:spirit_upgrade_smithing_template")
  potting_template_upgrade("undergarden:forgotten_ingot", "undergarden:forgotten_upgrade_smithing_template")

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
    })
  }
  potting_template_upgrade_duplication("minecraft:netherite_upgrade_smithing_template")
  potting_template_upgrade_duplication("cataclysm:ignitium_upgrade_smithing_template")
  potting_template_upgrade_duplication("deeperdarker:warden_upgrade_smithing_template")
  potting_template_upgrade_duplication("endlessbiomes:anklor_upgrade_template")
  potting_template_upgrade_duplication("enlightened_end:adamantite_smithing_template")
  potting_template_upgrade_duplication("lolenderite:enderite_upgrade_smithing_template")
  potting_template_upgrade_duplication("samurai_dynasty:spirit_upgrade_smithing_template")
  potting_template_upgrade_duplication("undergarden:forgotten_upgrade_smithing_template")
  //#endregion
  //#endregion
  //#region - Glass Trapdoors
  e.remove([{ id: /glassential:.*_glass_trapdoor_recipe/ }])
  let potting_glass_trapdoor = (glass, glass_trapdoor) => {
    e.shaped(glass_trapdoor, ["AAA"], { A: glass })
  }
  potting_glass_trapdoor("minecraft:white_stained_glass", "2x glassential:white_glass_trapdoor")
  potting_glass_trapdoor("minecraft:light_gray_stained_glass", "2x glassential:light_gray_glass_trapdoor")
  potting_glass_trapdoor("minecraft:gray_stained_glass", "2x glassential:gray_glass_trapdoor")
  potting_glass_trapdoor("minecraft:black_stained_glass", "2x glassential:black_glass_trapdoor")
  potting_glass_trapdoor("minecraft:brown_stained_glass", "2x glassential:brown_glass_trapdoor")
  potting_glass_trapdoor("minecraft:red_stained_glass", "2x glassential:red_glass_trapdoor")
  potting_glass_trapdoor("minecraft:orange_stained_glass", "2x glassential:orange_glass_trapdoor")
  potting_glass_trapdoor("minecraft:yellow_stained_glass", "2x glassential:yellow_glass_trapdoor")
  potting_glass_trapdoor("minecraft:lime_stained_glass", "2x glassential:lime_glass_trapdoor")
  potting_glass_trapdoor("minecraft:green_stained_glass", "2x glassential:green_glass_trapdoor")
  potting_glass_trapdoor("minecraft:cyan_stained_glass", "2x glassential:cyan_glass_trapdoor")
  potting_glass_trapdoor("minecraft:light_blue_stained_glass", "2x glassential:light_blue_glass_trapdoor")
  potting_glass_trapdoor("minecraft:blue_stained_glass", "2x glassential:blue_glass_trapdoor")
  potting_glass_trapdoor("minecraft:purple_stained_glass", "2x glassential:purple_glass_trapdoor")
  potting_glass_trapdoor("minecraft:magenta_stained_glass", "2x glassential:magenta_glass_trapdoor")
  potting_glass_trapdoor("minecraft:pink_stained_glass", "2x glassential:pink_glass_trapdoor")
  //#endregion
  //#region - Compression & Décompression
  e.remove([
    { id: "cagedmobs:crafting/dragon_egg_from_scales" },
    { id: "cagedmobs:crafting/sponge_from_fragments" },
    { id: "create_things_and_misc:powder_obsi_c_raft" },
    { id: "dustrial_decor:wrapped_gold_chains" },
    { id: "minecraft:honeycomb_block" }
  ])
  let potting_compress_and_decompress = (count, base, compress) => {
    // Vérification du count pour appliquer un craft avec 4 ou 9 items
    e.shaped(compress, count === 4 ? ["AA", "AA"] : ["AAA", "AAA", "AAA"], { A: base })
    e.shapeless(`${count}x ${base}`, compress)
  }
  potting_compress_and_decompress(4, "minecraft:honeycomb", "minecraft:honeycomb_block")
  potting_compress_and_decompress(9, "additionallanterns:gold_chain", "dustrial_decor:wrapped_gold_chains")
  potting_compress_and_decompress(9, "cagedmobs:dragon_scale", "minecraft:dragon_egg")
  potting_compress_and_decompress(9, "cagedmobs:nether_star_fragment", "minecraft:nether_star")
  potting_compress_and_decompress(9, "cagedmobs:sponge_fragment", "minecraft:sponge")
  potting_compress_and_decompress(9, "kubejs:alloy_creative", "kubejs:block_creative")
  potting_compress_and_decompress(9, "mekanism:dust_obsidian", "create_things_and_misc:powdered_obsidian_block")
  //#endregion
  //#region - Inversion
  let potting_inversion = (item1, item2) => {
    e.shapeless(item1, item2)
    e.shapeless(item2, item1)
  }
  potting_inversion("mob_grinding_utils:fan_upgrade_height", "mob_grinding_utils:fan_upgrade_width")
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
    })
  }
  potting_liquid_xp("create_enchantment_industry:experience", "cyclic:xpjuice")
  potting_liquid_xp("cyclic:xpjuice", "experienceobelisk:cognitium")
  potting_liquid_xp("experienceobelisk:cognitium", "mob_grinding_utils:fluid_xp")
  potting_liquid_xp("mob_grinding_utils:fluid_xp", "sophisticatedcore:xp_still")
  potting_liquid_xp("sophisticatedcore:xp_still", "create_enchantment_industry:experience")
  //#endregion
  //#region - Stone Recreation
  e.shaped("minecraft:cobblestone", ["AAA", "A A", "AAA"], {
    A: "twigs:pebble"
  })
  e.shapeless("9x twigs:pebble", "minecraft:cobblestone")
  e.shapeless("twigs:rocky_dirt", ["minecraft:coblestone", "minecraft:dirt"])
  let potting = (element, output) => {
    e.shaped(output, ["AAA", "ABA", "AAA"], {
      A: "twigs:pebble",
      B: element
    })
  }
  potting("twigs:pebble", "minecraft:cobblestone")
  potting("minecraft:coal", "minecraft:stone")
  potting("minecraft:nether_wart", "minecraft:netherrack")
  potting("minecraft:kelp", "minecraft:sand")
  potting("minecraft:redstone", "minecraft:red_sand")
  potting("minecraft:white_dye", "minecraft:diorite")
  potting("minecraft:gray_dye", "minecraft:andesite")
  potting("minecraft:red_dye", "minecraft:granite")
  potting("minecraft:chorus_fruit", "minecraft:end_stone")
  potting("minecraft:dirt", "twigs:rocky_dirt")
  potting("cyclic:cloud", "aether:holystone")
  potting("mekanism:dust_obsidian", "minecraft:cobbled_deepslate")
  potting("deeperdarker:sculk_tendrils", "deeperdarker:cobbled_sculk_stone")
  potting("twilightforest:thorn_rose", "twilightforest:deadrock")
  potting("minecraft:ice", "undergarden:shiverstone")
  potting("undergarden:depthrock_pebble", "undergarden:depthrock")
  //#endregion
})
//#endregion
