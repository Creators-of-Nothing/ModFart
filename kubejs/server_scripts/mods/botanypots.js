//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Soils Blocks
  let potting_soils_blocks = (soil, category, modif) => {
    e.custom({
      type: "botanypots:soil",
      input: {
        item: soil
      },
      display: {
        block: soil
      },
      categories: [category],
      growthModifier: modif
    });
  };
  potting_soils_blocks("minecraft:dirt", "dirt", 1.0);
  potting_soils_blocks("minecraft:netherrack", "nether", 1.0);
  potting_soils_blocks("minecraft:end_stone", "end", 1.0);
  potting_soils_blocks("minecraft:grass_block", "dirt", 1.5);
  potting_soils_blocks("minecraft:glowstone", "nether", 1.5);
  potting_soils_blocks("minecraft:purpur_block", "end", 1.5);
  potting_soils_blocks("farmersdelight:rich_soil", "allsoil", 2.0);
  potting_soils_blocks("farmersdelight:rich_soil_farmland", "allsoil", 4.0);
  potting_soils_blocks("kubejs:block_creative", "allsoil", 1200.0);
  //#endregion
  //#region - Soils Categories
  let potting_soils_categories = (soil, display, category, modif) => {
    e.custom({
      type: "botanypots:soil",
      input: {
        item: soil
      },
      display: {
        block: display,
        renderFluid: true
      },
      categories: [category],
      growthModifier: modif
    });
  };
  potting_soils_categories("minecraft:water_bucket", "minecraft:water", "water", 1.0);
  potting_soils_categories("minecraft:lava_bucket", "minecraft:lava", "lava", 1.0);
  potting_soils_categories("mob_grinding_utils:fluid_xp_bucket", "mob_grinding_utils:fluid_xp", "allfluid", 1.5);
  potting_soils_categories("mekanism:lithium_bucket", "mekanism:lithium", "allfluid", 2.0);
  potting_soils_categories("mekanism:ethene_bucket", "mekanism:ethene", "allfluid", 4.0);
  potting_soils_categories("kubejs:fluid_creative_bucket", "kubejs:fluid_creative", "allfluid", 1200.0);
  //#endregion
  //#region - Interaction
  let potting_interaction = (input, output) => {
    e.custom({
      type: "botanypots:pot_interaction",
      held_ingredient: {
        tag: "minecraft:hoes"
      },
      soil_ingredient: [
        {
          item: input
        }
      ],
      soil_output: {
        item: output
      },
      sound: {
        sound: "minecraft:item.hoe.till",
        category: "blocks"
      }
    });
  };
  potting_interaction("minecraft:dirt", "minecraft:farmland");
  potting_interaction("farmersdelight:rich_soil", "farmersdelight:rich_soil_farmland");
  potting_interaction("aether:aether_dirt", "aether:aether_farmland");
  potting_interaction("undergarden:deepsoil", "undergarden:deepsoil_farmland");

  //#endregion
  //#region - Fertilizers
  let potting_fertilizers = (fertilizer, min, max) => {
    e.custom({
      type: "botanypots:fertilizer",
      ingredient: {
        item: fertilizer
      },
      min_growth: min,
      max_growth: max
    });
  };
  potting_fertilizers("minecraft:bone_meal", 200, 250);
  potting_fertilizers("alexscaves:fertilizer", 400, 500);
  potting_fertilizers("create:tree_fertilizer", 600, 750);
  potting_fertilizers("ars_nouveau:whirlisprig_shards", 800, 1000);
  //#endregion

  //#region - Botany Pots
  e.remove({ not: { id: /botanypots:botanypots/ }, id: /botanypots:/ });
  e.remove({ id: "supplementaries:botany_flax" });

  let potting_botanypots = (plant, display, category, ultimate_category, loots) => {
    // Contante d'optimisation de l'attribution des loots (Crédit to XenoArea)
    const results = loots.map(loot => {
      return {
        chance: 1.0,
        output: {
          item: loot
        },
        minRolls: 1,
        maxRolls: 2
      };
    });

    e.custom({
      type: "botanypots:crop",
      seed: {
        item: plant
      },
      categories: [category, ultimate_category],
      growthTicks: 1200,
      display: { type: "botanypots:aging", block: display },
      drops: results
    });
  };
  //#region - Minecraft
  potting_botanypots("minecraft:acacia_sapling", "minecraft:acacia_sapling", "dirt", "allsoil", [
    "minecraft:acacia_log",
    "alexsmobs:acacia_blossom",
    "minecraft:acacia_leaves",
    "minecraft:acacia_sapling"
  ]);
  potting_botanypots("minecraft:allium", "minecraft:allium", "dirt", "allsoil", ["minecraft:allium"]);
  potting_botanypots("minecraft:azalea", "minecraft:azalea", "dirt", "allsoil", ["minecraft:azalea_leaves", "twigs:azalea_flowers", "minecraft:azalea"]);
  potting_botanypots("minecraft:azure_bluet", "minecraft:azure_bluet", "dirt", "allsoil", ["minecraft:azure_bluet"]);
  potting_botanypots("minecraft:bamboo", "minecraft:bamboo", "dirt", "allsoil", ["minecraft:bamboo", "twigs:bamboo_leaves"]);
  potting_botanypots("minecraft:beetroot_seeds", "minecraft:beetroots", "dirt", "allsoil", ["minecraft:beetroot", "minecraft:beetroot_seeds"]);
  potting_botanypots("minecraft:big_dripleaf", "minecraft:big_dripleaf", "dirt", "allsoil", ["minecraft:small_dripleaf", "minecraft:big_dripleaf"]);
  potting_botanypots("minecraft:birch_sapling", "minecraft:birch_sapling", "dirt", "allsoil", ["minecraft:birch_log", "minecraft:birch_leaves", "minecraft:birch_sapling"]);
  potting_botanypots("minecraft:blue_orchid", "minecraft:blue_orchid", "dirt", "allsoil", ["minecraft:blue_orchid"]);
  potting_botanypots("minecraft:brain_coral_block", "minecraft:brain_coral_block", "water", "allfluid", ["minecraft:brain_coral", "minecraft:brain_coral_fan", "minecraft:brain_coral_block"]);
  potting_botanypots("minecraft:brown_mushroom", "minecraft:brown_mushroom", "dirt", "allsoil", ["minecraft:mushroom_stem", "minecraft:brown_mushroom_block", "minecraft:brown_mushroom"]);
  potting_botanypots("minecraft:bubble_coral_block", "minecraft:bubble_coral_block", "water", "allfluid", ["minecraft:bubble_coral", "minecraft:bubble_coral_fan", "minecraft:bubble_coral_block"]);
  potting_botanypots("minecraft:cactus", "minecraft:cactus", "dirt", "allsoil", ["minecraft:cactus"]);
  potting_botanypots("minecraft:carrot", "minecraft:carrots", "dirt", "allsoil", ["minecraft:carrot"]);
  potting_botanypots("minecraft:cherry_sapling", "minecraft:cherry_sapling", "dirt", "allsoil", [
    "minecraft:cherry_log",
    "pamhc2trees:cherryitem",
    "minecraft:cherry_leaves",
    "minecraft:cherry_sapling"
  ]);
  potting_botanypots("minecraft:chorus_flower", "minecraft:chorus_flower", "end", "allsoil", ["minecraft:chorus_plant", "minecraft:chorus_fruit", "minecraft:chorus_flower"]);
  potting_botanypots("minecraft:cornflower", "minecraft:cornflower", "dirt", "allsoil", ["minecraft:cornflower"]);
  potting_botanypots("minecraft:crimson_fungus", "minecraft:crimson_fungus", "nether", "allsoil", [
    "minecraft:crimson_stem",
    "minecraft:shroomlight",
    "minecraft:nether_wart_block",
    "minecraft:crimson_fungus"
  ]);
  potting_botanypots("minecraft:crimson_roots", "minecraft:crimson_roots", "nether", "allsoil", ["minecraft:crimson_roots"]);
  potting_botanypots("minecraft:dandelion", "minecraft:dandelion", "dirt", "allsoil", ["minecraft:dandelion"]);
  potting_botanypots("minecraft:dark_oak_sapling", "minecraft:dark_oak_sapling", "dirt", "allsoil", ["minecraft:dark_oak_log", "minecraft:dark_oak_leaves", "minecraft:dark_oak_sapling"]);
  potting_botanypots("minecraft:dead_bush", "minecraft:dead_bush", "dirt", "allsoil", ["minecraft:dead_bush"]);
  potting_botanypots("minecraft:fern", "minecraft:fern", "dirt", "allsoil", ["minecraft:large_fern", "minecraft:fern"]);
  potting_botanypots("minecraft:fire_coral_block", "minecraft:fire_coral_block", "water", "allfluid", ["minecraft:fire_coral", "minecraft:fire_coral_fan", "minecraft:fire_coral_block"]);
  potting_botanypots("minecraft:flowering_azalea", "minecraft:flowering_azalea", "dirt", "allsoil", ["minecraft:flowering_azalea_leaves", "twigs:azalea_flowers", "minecraft:flowering_azalea"]);
  potting_botanypots("minecraft:glow_berries", "minecraft:cave_vines", "dirt", "allsoil", ["minecraft:glow_berries"]);
  potting_botanypots("minecraft:grass", "minecraft:grass", "dirt", "allsoil", ["minecraft:tall_grass", "minecraft:grass"]);
  potting_botanypots("minecraft:horn_coral_block", "minecraft:horn_coral_block", "water", "allfluid", ["minecraft:horn_coral", "minecraft:horn_coral_fan", "minecraft:horn_coral_block"]);
  potting_botanypots("minecraft:jungle_sapling", "minecraft:jungle_sapling", "dirt", "allsoil", [
    "minecraft:jungle_log",
    "minecraft:cocoa_beans",
    "minecraft:jungle_leaves",
    "minecraft:jungle_sapling"
  ]);
  potting_botanypots("minecraft:kelp", "minecraft:kelp", "water", "allfluid", ["minecraft:kelp"]);
  potting_botanypots("minecraft:lilac", "minecraft:lilac", "dirt", "allsoil", ["minecraft:lilac"]);
  potting_botanypots("minecraft:lily_of_the_valley", "minecraft:lily_of_the_valley", "dirt", "allsoil", ["minecraft:lily_of_the_valley"]);
  potting_botanypots("minecraft:lily_pad", "minecraft:lily_pad", "water", "allfluid", ["minecraft:lily_pad"]);
  potting_botanypots("minecraft:mangrove_propagule", "minecraft:mangrove_propagule", "dirt", "allsoil", ["minecraft:mangrove_log", "minecraft:mangrove_leaves", "minecraft:mangrove_propagule"]);
  potting_botanypots("minecraft:melon_seeds", "minecraft:melon", "dirt", "allsoil", ["minecraft:melon", "minecraft:melon_slice", "minecraft:melon_seeds"]);
  potting_botanypots("minecraft:nether_wart", "minecraft:nether_wart", "nether", "allsoil", ["minecraft:nether_wart"]);
  potting_botanypots("minecraft:oak_sapling", "minecraft:oak_sapling", "dirt", "allsoil", ["minecraft:oak_log", "pamhc2trees:acornitem", "minecraft:oak_leaves", "minecraft:oak_sapling"]);
  potting_botanypots("minecraft:orange_tulip", "minecraft:orange_tulip", "dirt", "allsoil", ["minecraft:orange_tulip"]);
  potting_botanypots("minecraft:oxeye_daisy", "minecraft:oxeye_daisy", "dirt", "allsoil", ["minecraft:oxeye_daisy"]);
  potting_botanypots("minecraft:peony", "minecraft:peony", "dirt", "allsoil", ["minecraft:peony"]);
  potting_botanypots("minecraft:pink_petals", "minecraft:pink_petals", "dirt", "allsoil", ["minecraft:pink_petals"]);
  potting_botanypots("minecraft:pink_tulip", "minecraft:pink_tulip", "dirt", "allsoil", ["minecraft:pink_tulip"]);
  potting_botanypots("minecraft:pitcher_pod", "minecraft:pitcher_plant", "dirt", "allsoil", ["minecraft:pitcher_plant", "minecraft:pitcher_pod"]);
  potting_botanypots("minecraft:poppy", "minecraft:poppy", "dirt", "allsoil", ["minecraft:poppy"]);
  potting_botanypots("minecraft:potato", "minecraft:potatoes", "dirt", "allsoil", ["minecraft:poisonous_potato", "minecraft:potato"]);
  potting_botanypots("minecraft:pumpkin_seeds", "minecraft:pumpkin", "dirt", "allsoil", ["minecraft:pumpkin", "minecraft:pumpkin_seeds"]);
  potting_botanypots("minecraft:red_mushroom", "minecraft:red_mushroom", "dirt", "allsoil", ["minecraft:mushroom_stem", "minecraft:red_mushroom_block", "minecraft:red_mushroom"]);
  potting_botanypots("minecraft:red_tulip", "minecraft:red_tulip", "dirt", "allsoil", ["minecraft:red_tulip"]);
  potting_botanypots("minecraft:rose_bush", "minecraft:rose_bush", "dirt", "allsoil", ["minecraft:rose_bush"]);
  potting_botanypots("minecraft:sea_pickle", "minecraft:sea_pickle", "water", "allfluid", ["minecraft:sea_pickle"]);
  potting_botanypots("minecraft:seagrass", "minecraft:seagrass", "water", "allfluid", ["minecraft:seagrass"]);
  potting_botanypots("minecraft:spore_blossom", "minecraft:spore_blossom", "dirt", "allsoil", ["minecraft:spore_blossom"]);
  potting_botanypots("minecraft:spruce_sapling", "minecraft:spruce_sapling", "dirt", "allsoil", ["minecraft:spruce_log", "minecraft:spruce_leaves", "minecraft:spruce_sapling"]);
  potting_botanypots("minecraft:sugar_cane", "minecraft:sugar_cane", "dirt", "allsoil", ["minecraft:sugar_cane"]);
  potting_botanypots("minecraft:sunflower", "minecraft:sunflower", "dirt", "allsoil", ["minecraft:sunflower"]);
  potting_botanypots("minecraft:sweet_berries", "minecraft:sweet_berry_bush", "dirt", "allsoil", ["minecraft:sweet_berries"]);
  potting_botanypots("minecraft:torchflower_seeds", "minecraft:torchflower", "dirt", "allsoil", ["minecraft:torchflower", "minecraft:torchflower_seeds"]);
  potting_botanypots("minecraft:tube_coral_block", "minecraft:tube_coral_block", "water", "allfluid", ["minecraft:tube_coral", "minecraft:tube_coral_fan", "minecraft:tube_coral_block"]);
  potting_botanypots("minecraft:twisting_vines", "minecraft:twisting_vines", "nether", "allsoil", ["minecraft:twisting_vines"]);
  potting_botanypots("minecraft:vine", "minecraft:vine", "dirt", "allsoil", ["minecraft:vine"]);
  potting_botanypots("minecraft:warped_fungus", "minecraft:warped_fungus", "nether", "allsoil", [
    "minecraft:warped_stem",
    "minecraft:shroomlight",
    "minecraft:warped_wart_block",
    "minecraft:warped_fungus"
  ]);
  potting_botanypots("minecraft:warped_roots", "minecraft:warped_roots", "nether", "allsoil", ["minecraft:nether_sprouts", "minecraft:warped_roots"]);
  potting_botanypots("minecraft:weeping_vines", "minecraft:weeping_vines", "nether", "allsoil", ["minecraft:weeping_vines"]);
  potting_botanypots("minecraft:wheat_seeds", "minecraft:wheat", "dirt", "allsoil", ["minecraft:wheat", "minecraft:wheat_seeds"]);
  potting_botanypots("minecraft:white_tulip", "minecraft:white_tulip", "dirt", "allsoil", ["minecraft:white_tulip"]);
  potting_botanypots("minecraft:wither_rose", "minecraft:wither_rose", "dirt", "allsoil", ["minecraft:wither_rose"]);
  //#endregion
  //#region - Alex's Caves
  potting_botanypots("alexscaves:ancient_sapling", "alexscaves:ancient_sapling", "dirt", "allsoil", [
    "minecraft:jungle_log",
    "alexscaves:tree_star",
    "alexscaves:ancient_leaves",
    "alexscaves:ancient_sapling"
  ]);
  potting_botanypots("alexscaves:pewen_sapling", "alexscaves:pewen_sapling", "dirt", "allsoil", [
    "alexscaves:pewen_log",
    "alexscaves:pine_nuts",
    "alexscaves:pewen_branch",
    "alexscaves:pewen_pines",
    "alexscaves:pewen_sapling"
  ]);
  potting_botanypots("alexscaves:thornwood_sapling", "alexscaves:thornwood_sapling", "dirt", "allsoil", ["alexscaves:thornwood_log", "alexscaves:thornwood_branch", "alexscaves:thornwood_sapling"]);
  //#endregion
  //#region - Ars Nouveau
  potting_botanypots("ars_elemental:yellow_archwood_sapling", "ars_elemental:yellow_archwood_sapling", "dirt", "allsoil", [
    "ars_elemental:yellow_archwood_log",
    "ars_elemental:flashpine_pod",
    "ars_elemental:yellow_archwood_leaves",
    "ars_elemental:yellow_archwood_sapling"
  ]);
  potting_botanypots("ars_nouveau:blue_archwood_sapling", "ars_nouveau:blue_archwood_sapling", "dirt", "allsoil", [
    "ars_nouveau:blue_archwood_log",
    "ars_nouveau:frostaya_pod",
    "ars_nouveau:blue_archwood_leaves",
    "ars_nouveau:blue_archwood_sapling"
  ]);
  potting_botanypots("ars_nouveau:green_archwood_sapling", "ars_nouveau:green_archwood_sapling", "dirt", "allsoil", [
    "ars_nouveau:green_archwood_log",
    "ars_nouveau:mendosteen_pod",
    "ars_nouveau:green_archwood_leaves",
    "ars_nouveau:green_archwood_sapling"
  ]);
  potting_botanypots("ars_nouveau:magebloom_crop", "ars_nouveau:magebloom_crop", "dirt", "allsoil", ["ars_nouveau:magebloom", "ars_nouveau:magebloom_crop"]);
  potting_botanypots("ars_nouveau:purple_archwood_sapling", "ars_nouveau:purple_archwood_sapling", "dirt", "allsoil", [
    "ars_nouveau:purple_archwood_log",
    "ars_nouveau:bastion_pod",
    "ars_nouveau:purple_archwood_leaves",
    "ars_nouveau:purple_archwood_sapling"
  ]);
  potting_botanypots("ars_nouveau:red_archwood_sapling", "ars_nouveau:red_archwood_sapling", "dirt", "allsoil", [
    "ars_nouveau:red_archwood_log",
    "ars_nouveau:bombegranate_pod",
    "ars_nouveau:red_archwood_leaves",
    "ars_nouveau:red_archwood_sapling"
  ]);
  //#endregion
  //#region - Let's Do
  potting_botanypots("bakery:oat_seeds", "bakery:oat_crop", "dirt", "allsoil", ["bakery:oat", "bakery:oat_seeds"]);
  potting_botanypots("bakery:strawberry_seeds", "bakery:strawberry_crop", "dirt", "allsoil", ["bakery:strawberry", "bakery:strawberry_seeds"]);
  potting_botanypots("beachparty:palm_sapling", "beachparty:palm_sapling", "dirt", "allsoil", ["beachparty:palm_log", "beachparty:coconut", "beachparty:palm_leaves", "beachparty:palm_sapling"]);
  potting_botanypots("candlelight:lettuce_seeds", "candlelight:lettuce_crop", "dirt", "allsoil", ["candlelight:lettuce", "candlelight:lettuce_seeds"]);
  potting_botanypots("candlelight:rose", "candlelight:rose", "dirt", "allsoil", ["candlelight:rose"]);
  potting_botanypots("candlelight:tomato_seeds", "candlelight:tomato_crop", "dirt", "allsoil", ["candlelight:tomato", "candlelight:tomato_seeds"]);
  potting_botanypots("meadow:alpine_poppy", "meadow:alpine_poppy", "dirt", "allsoil", ["meadow:alpine_poppy"]);
  potting_botanypots("meadow:delphinium", "meadow:delphinium", "dirt", "allsoil", ["meadow:delphinium"]);
  potting_botanypots("meadow:enzian", "meadow:enzian", "dirt", "allsoil", ["meadow:enzian"]);
  potting_botanypots("meadow:eriophorum_tall", "meadow:eriophorum_tall", "dirt", "allsoil", ["meadow:eriophorum_tall"]);
  potting_botanypots("meadow:eriophorum", "meadow:eriophorum", "dirt", "allsoil", ["meadow:eriophorum"]);
  potting_botanypots("meadow:fire_lily", "meadow:fire_lily", "dirt", "allsoil", ["meadow:fire_lily"]);
  potting_botanypots("meadow:pine_sapling", "meadow:pine_sapling", "dirt", "allsoil", ["meadow:pine_log", "meadow:pine_leaves", "meadow:pine_sapling"]);
  potting_botanypots("meadow:saxifrage", "meadow:saxifrage", "dirt", "allsoil", ["meadow:saxifrage"]);
  potting_botanypots("vinery:apple_tree_sapling", "vinery:apple_tree_sapling", "dirt", "allsoil", ["vinery:apple_log", "minecraft:apple", "vinery:apple_leaves", "vinery:apple_tree_sapling"]);
  potting_botanypots("vinery:cherry_sapling", "vinery:cherry_sapling", "dirt", "allsoil", ["vinery:cherry_log", "vinery:cherry", "vinery:cherry_leaves", "vinery:cherry_sapling"]);
  potting_botanypots("vinery:jungle_grape_seeds_red", "vinery:jungle_grape_bush_red", "dirt", "allsoil", ["vinery:jungle_grapes_red", "vinery:jungle_grape_seeds_red"]);
  potting_botanypots("vinery:jungle_grape_seeds_white", "vinery:jungle_grape_bush_white", "dirt", "allsoil", ["vinery:jungle_grapes_white", "vinery:jungle_grape_seeds_white"]);
  potting_botanypots("vinery:red_grape_seeds", "vinery:red_grape_bush", "dirt", "allsoil", ["vinery:red_grape", "vinery:red_grape_seeds"]);
  potting_botanypots("vinery:savanna_grape_seeds_red", "vinery:savanna_grape_bush_red", "dirt", "allsoil", ["vinery:savanna_grapes_red", "vinery:savanna_grape_seeds_red"]);
  potting_botanypots("vinery:savanna_grape_seeds_white", "vinery:savanna_grape_bush_white", "dirt", "allsoil", ["vinery:savanna_grapes_white", "vinery:savanna_grape_seeds_white"]);
  potting_botanypots("vinery:taiga_grape_seeds_red", "vinery:taiga_grape_bush_red", "dirt", "allsoil", ["vinery:taiga_grapes_red", "vinery:taiga_grape_seeds_red"]);
  potting_botanypots("vinery:taiga_grape_seeds_white", "vinery:taiga_grape_bush_white", "dirt", "allsoil", ["vinery:taiga_grapes_white", "vinery:taiga_grape_seeds_white"]);
  potting_botanypots("vinery:white_grape_seeds", "vinery:white_grape_bush", "dirt", "allsoil", ["vinery:white_grape", "vinery:white_grape_seeds"]);
  //#endregion
  //#region - Better Archeology
  potting_botanypots("betterarcheology:growth_totem", "betterarcheology:growth_totem", "dirt", "allsoil", ["betterarcheology:growth_totem"]);
  //#endregion
  //#region - Biomes O' Plenty
  potting_botanypots("biomesoplenty:blue_hydrangea", "biomesoplenty:blue_hydrangea", "dirt", "allsoil", ["biomesoplenty:blue_hydrangea"]);
  potting_botanypots("biomesoplenty:burning_blossom", "biomesoplenty:burning_blossom", "dirt", "allsoil", ["biomesoplenty:burning_blossom"]);
  potting_botanypots("biomesoplenty:clover", "biomesoplenty:clover", "dirt", "allsoil", ["biomesoplenty:clover"]);
  potting_botanypots("biomesoplenty:dead_sapling", "biomesoplenty:dead_sapling", "dirt", "allsoil", ["biomesoplenty:dead_log", "biomesoplenty:dead_leaves", "biomesoplenty:dead_sapling"]);
  potting_botanypots("biomesoplenty:fir_sapling", "biomesoplenty:fir_sapling", "dirt", "allsoil", ["biomesoplenty:fir_log", "biomesoplenty:fir_leaves", "biomesoplenty:fir_sapling"]);
  potting_botanypots("biomesoplenty:flowering_oak_sapling", "biomesoplenty:flowering_oak_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "minecraft:oak_leaves",
    "biomesoplenty:flowering_oak_leaves",
    "biomesoplenty:flowering_oak_sapling"
  ]);
  potting_botanypots("biomesoplenty:glowflower", "biomesoplenty:glowflower", "dirt", "allsoil", ["biomesoplenty:glowflower"]);
  potting_botanypots("biomesoplenty:goldenrod", "biomesoplenty:goldenrod", "dirt", "allsoil", ["biomesoplenty:goldenrod"]);
  potting_botanypots("biomesoplenty:hellbark_sapling", "biomesoplenty:hellbark_sapling", "dirt", "allsoil", [
    "biomesoplenty:hellbark_log",
    "biomesoplenty:hellbark_leaves",
    "biomesoplenty:hellbark_sapling"
  ]);
  potting_botanypots("biomesoplenty:icy_iris", "biomesoplenty:icy_iris", "dirt", "allsoil", ["biomesoplenty:icy_iris"]);
  potting_botanypots("biomesoplenty:jacaranda_sapling", "biomesoplenty:jacaranda_sapling", "dirt", "allsoil", [
    "biomesoplenty:jacaranda_log",
    "biomesoplenty:jacaranda_leaves",
    "biomesoplenty:jacaranda_sapling"
  ]);
  potting_botanypots("biomesoplenty:lavender", "biomesoplenty:lavender", "dirt", "allsoil", ["biomesoplenty:lavender"]);
  potting_botanypots("biomesoplenty:magic_sapling", "biomesoplenty:magic_sapling", "dirt", "allsoil", ["biomesoplenty:magic_log", "biomesoplenty:magic_leaves", "biomesoplenty:magic_sapling"]);
  potting_botanypots("biomesoplenty:mahogany_sapling", "biomesoplenty:mahogany_sapling", "dirt", "allsoil", [
    "biomesoplenty:mahogany_log",
    "biomesoplenty:mahogany_leaves",
    "biomesoplenty:mahogany_sapling"
  ]);
  potting_botanypots("biomesoplenty:maple_sapling", "biomesoplenty:maple_sapling", "dirt", "allsoil", ["minecraft:oak_log", "biomesoplenty:maple_leaves", "biomesoplenty:maple_sapling"]);
  potting_botanypots("biomesoplenty:orange_autumn_sapling", "biomesoplenty:orange_autumn_sapling", "dirt", "allsoil", [
    "minecraft:dark_oak_log",
    "biomesoplenty:orange_autumn_leaves",
    "biomesoplenty:orange_autumn_sapling"
  ]);
  potting_botanypots("biomesoplenty:orange_cosmos", "biomesoplenty:orange_cosmos", "dirt", "allsoil", ["biomesoplenty:orange_cosmos"]);
  potting_botanypots("biomesoplenty:origin_sapling", "biomesoplenty:origin_sapling", "dirt", "allsoil", ["minecraft:oak_log", "biomesoplenty:origin_leaves", "biomesoplenty:origin_sapling"]);
  potting_botanypots("biomesoplenty:palm_sapling", "biomesoplenty:palm_sapling", "dirt", "allsoil", ["biomesoplenty:palm_log", "biomesoplenty:palm_leaves", "biomesoplenty:palm_sapling"]);
  potting_botanypots("biomesoplenty:pink_daffodil", "biomesoplenty:pink_daffodil", "dirt", "allsoil", ["biomesoplenty:pink_daffodil"]);
  potting_botanypots("biomesoplenty:pink_hibiscus", "biomesoplenty:pink_hibiscus", "dirt", "allsoil", ["biomesoplenty:pink_hibiscus"]);
  potting_botanypots("biomesoplenty:rainbow_birch_sapling", "biomesoplenty:rainbow_birch_sapling", "dirt", "allsoil", [
    "minecraft:birch_log",
    "biomesoplenty:rainbow_birch_leaves",
    "biomesoplenty:rainbow_birch_sapling"
  ]);
  potting_botanypots("biomesoplenty:redwood_sapling", "biomesoplenty:redwood_sapling", "dirt", "allsoil", [
    "biomesoplenty:redwood_log",
    "biomesoplenty:redwood_leaves",
    "biomesoplenty:redwood_sapling"
  ]);
  potting_botanypots("biomesoplenty:rose", "biomesoplenty:rose", "dirt", "allsoil", ["biomesoplenty:rose"]);
  potting_botanypots("biomesoplenty:snowblossom_sapling", "biomesoplenty:snowblossom_sapling", "dirt", "allsoil", [
    "minecraft:cherry_log",
    "biomesoplenty:snowblossom_leaves",
    "biomesoplenty:snowblossom_sapling"
  ]);
  potting_botanypots("biomesoplenty:sprout", "biomesoplenty:sprout", "dirt", "allsoil", ["biomesoplenty:sprout"]);
  potting_botanypots("biomesoplenty:tall_lavender", "biomesoplenty:tall_lavender", "dirt", "allsoil", ["biomesoplenty:tall_lavender"]);
  potting_botanypots("biomesoplenty:umbran_sapling", "biomesoplenty:umbran_sapling", "dirt", "allsoil", ["biomesoplenty:umbran_log", "biomesoplenty:umbran_leaves", "biomesoplenty:umbran_sapling"]);
  potting_botanypots("biomesoplenty:violet", "biomesoplenty:violet", "dirt", "allsoil", ["biomesoplenty:violet"]);
  potting_botanypots("biomesoplenty:waterlily", "biomesoplenty:waterlily", "dirt", "allsoil", ["biomesoplenty:waterlily"]);
  potting_botanypots("biomesoplenty:white_petals", "biomesoplenty:white_petals", "dirt", "allsoil", ["biomesoplenty:white_petals"]);
  potting_botanypots("biomesoplenty:wildflower", "biomesoplenty:wildflower", "dirt", "allsoil", ["biomesoplenty:wildflower"]);
  potting_botanypots("biomesoplenty:willow_sapling", "biomesoplenty:willow_sapling", "dirt", "allsoil", [
    "biomesoplenty:willow_log",
    "biomesoplenty:willow_leaves",
    "biomesoplenty:willow_vine",
    "biomesoplenty:willow_sapling"
  ]);
  potting_botanypots("biomesoplenty:wilted_lily", "biomesoplenty:wilted_lily", "dirt", "allsoil", ["biomesoplenty:wilted_lily"]);
  potting_botanypots("biomesoplenty:yellow_autumn_sapling", "biomesoplenty:yellow_autumn_sapling", "dirt", "allsoil", [
    "minecraft:birch_log",
    "biomesoplenty:yellow_autumn_leaves",
    "biomesoplenty:yellow_autumn_sapling"
  ]);
  //#endregion
  //#region - Farmer's Delight
  potting_botanypots("corn_delight:wild_corn", "corn_delight:wild_corn", "dirt", "allsoil", ["corn_delight:wild_corn"]);
  potting_botanypots("farmersdelight:cabbage_seeds", "farmersdelight:cabbages", "dirt", "allsoil", ["farmersdelight:cabbage", "farmersdelight:cabbage_seeds"]);
  potting_botanypots("farmersdelight:tomato_seeds", "farmersdelight:tomatoes", "dirt", "allsoil", ["farmersdelight:tomato", "farmersdelight:tomato_seeds"]);
  potting_botanypots("farmersdelight:wild_beetroots", "farmersdelight:wild_beetroots", "dirt", "allsoil", ["minecraft:beetroot", "farmersdelight:wild_beetroots"]);
  potting_botanypots("farmersdelight:wild_cabbages", "farmersdelight:wild_cabbages", "dirt", "allsoil", ["farmersdelight:cabbage", "farmersdelight:wild_cabbages"]);
  potting_botanypots("farmersdelight:wild_carrots", "farmersdelight:wild_carrots", "dirt", "allsoil", ["minecraft:carrot", "farmersdelight:wild_carrots"]);
  potting_botanypots("farmersdelight:wild_onions", "farmersdelight:wild_onions", "dirt", "allsoil", ["farmersdelight:onion", "farmersdelight:wild_onions"]);
  potting_botanypots("farmersdelight:wild_potatoes", "farmersdelight:wild_potatoes", "dirt", "allsoil", ["minecraft:potato", "minecraft:poisonous_potato", "farmersdelight:wild_potatoes"]);
  potting_botanypots("farmersdelight:wild_rice", "farmersdelight:wild_rice", "dirt", "allsoil", ["farmersdelight:rice_panicle", "farmersdelight:rice", "farmersdelight:wild_rice"]);
  potting_botanypots("farmersdelight:wild_tomatoes", "farmersdelight:wild_tomatoes", "dirt", "allsoil", ["farmersdelight:tomato", "farmersdelight:wild_tomatoes"]);
  potting_botanypots("nethersdelight:mimicarnation", "nethersdelight:mimicarnation", "dirt", "allsoil", ["nethersdelight:mimicarnation"]);
  //#endregion
  //#region - Cyclic
  potting_botanypots("cyclic:flower_absalon_tulip", "cyclic:flower_absalon_tulip", "dirt", "allsoil", ["cyclic:flower_absalon_tulip"]);
  potting_botanypots("cyclic:flower_cyan", "cyclic:flower_cyan", "dirt", "allsoil", ["cyclic:flower_cyan"]);
  potting_botanypots("cyclic:flower_lime_carnation", "cyclic:flower_lime_carnation", "dirt", "allsoil", ["cyclic:flower_lime_carnation"]);
  //#endregion
  //#region - Deeper and Darker
  potting_botanypots("deeperdarker:echo_sapling", "deeperdarker:echo_sapling", "dirt", "allsoil", [
    "deeperdarker:echo_log",
    "deeperdarker:sculk_gleam",
    "deeperdarker:echo_leaves",
    "deeperdarker:echo_sapling"
  ]);
  potting_botanypots("deeperdarker:sculk_tendrils", "deeperdarker:sculk_tendrils", "dirt", "allsoil", ["deeperdarker:sculk_tendrils"]);
  potting_botanypots("deeperdarker:sculk_vines", "deeperdarker:sculk_vines", "dirt", "allsoil", ["deeperdarker:sculk_vines"]);
  //#endregion
  //#region - Eidolon
  potting_botanypots("eidolon:illwood_sapling", "eidolon:illwood_sapling", "dirt", "allsoil", ["eidolon:illwood_log", "eidolon:illwood_leaves", "eidolon:illwood_sapling"]);
  //#endregion
  //#region - EndlessBiomes
  potting_botanypots("endlessbiomes:penumbral_fungus", "endlessbiomes:penumbral_fungus", "dirt", "allsoil", [
    "endlessbiomes:penumbra_stem",
    "endlessbiomes:penumbral_vines",
    "endlessbiomes:penumbral_leaves",
    "endlessbiomes:glowing_penumbral_leaves",
    "endlessbiomes:penumbral_fungus"
  ]);
  potting_botanypots("endlessbiomes:reaching_vines", "endlessbiomes:reaching_vines", "dirt", "allsoil", ["endlessbiomes:reaching_vines", "endlessbiomes:reaching_vines"]);
  //#endregion
  //#region - Enlightend
  potting_botanypots("enlightened_end:cerulean_vine", "enlightened_end:cerulean_vine", "dirt", "allsoil", ["enlightened_end:cerulean_vine"]);
  potting_botanypots("enlightened_end:cradling_flower", "enlightened_end:cradling_flower", "dirt", "allsoil", ["enlightened_end:cradling_flower"]);
  potting_botanypots("enlightened_end:elevibloom_seeds", "enlightened_end:elevibloom_3", "dirt", "allsoil", ["enlightened_end:elevibloom", "enlightened_end:elevibloom_seeds"]);
  //#endregion
  //#region - Naturalist
  potting_botanypots("naturalist:cattail", "naturalist:cattail", "dirt", "allsoil", ["naturalist:cattail", "naturalist:cattail"]);
  //#endregion
  //#region - Nifty
  potting_botanypots("nifty:flax_seeds", "nifty:flax_crop", "dirt", "allsoil", ["nifty:flax", "nifty:flax_seeds"]);
  potting_botanypots("nifty:maple_sapling", "nifty:maple_sapling", "dirt", "allsoil", ["nifty:maple_log", "nifty:maple_leaves", "nifty:maple_sapling"]);
  potting_botanypots("nifty:orange_seeds", "nifty:orange_crop", "dirt", "allsoil", ["nifty:orange", "nifty:orange_seeds"]);
  potting_botanypots("nifty:pear_seeds", "nifty:pear_crop", "dirt", "allsoil", ["nifty:pear", "nifty:pear_seeds"]);
  potting_botanypots("nifty:redoak_sapling", "nifty:redoak_sapling", "dirt", "allsoil", ["nifty:redoak_log", "nifty:redoak_leaves", "nifty:redoak_sapling"]);
  potting_botanypots("nifty:rubber_sapling", "nifty:rubber_sapling", "dirt", "allsoil", ["nifty:rubber_log", "nifty:rubber_leaves", "nifty:rubber_sapling"]);
  potting_botanypots("nifty:tomato_seeds", "nifty:tomato_crop", "dirt", "allsoil", ["nifty:tomato", "nifty:tomato_seeds"]);
  //#endregion
  //#region - Pam's Harvescraft
  potting_botanypots("pamhc2crops:agaveseeditem", "pamhc2crops:pamagavecrop", "dirt", "allsoil", ["pamhc2crops:agaveitem", "pamhc2crops:agaveseeditem"]);
  potting_botanypots("pamhc2crops:alfalfaseeditem", "pamhc2crops:pamalfalfacrop", "dirt", "allsoil", ["pamhc2crops:alfalfaitem", "pamhc2crops:alfalfaseeditem"]);
  potting_botanypots("pamhc2crops:aloeseeditem", "pamhc2crops:pamaloecrop", "dirt", "allsoil", ["pamhc2crops:aloeitem", "pamhc2crops:aloeseeditem"]);
  potting_botanypots("pamhc2crops:amaranthseeditem", "pamhc2crops:pamamaranthcrop", "dirt", "allsoil", ["pamhc2crops:amaranthitem", "pamhc2crops:amaranthseeditem"]);
  potting_botanypots("pamhc2crops:arrowrootseeditem", "pamhc2crops:pamarrowrootcrop", "dirt", "allsoil", ["pamhc2crops:arrowrootitem", "pamhc2crops:arrowrootseeditem"]);
  potting_botanypots("pamhc2crops:artichokeseeditem", "pamhc2crops:pamartichokecrop", "dirt", "allsoil", ["pamhc2crops:artichokeitem", "pamhc2crops:artichokeseeditem"]);
  potting_botanypots("pamhc2crops:asparagusseeditem", "pamhc2crops:pamasparaguscrop", "dirt", "allsoil", ["pamhc2crops:asparagusitem", "pamhc2crops:asparagusseeditem"]);
  potting_botanypots("pamhc2crops:barleyseeditem", "pamhc2crops:pambarleycrop", "dirt", "allsoil", ["pamhc2crops:barleyitem", "pamhc2crops:barleyseeditem"]);
  potting_botanypots("pamhc2crops:barrelcactusseeditem", "pamhc2crops:pambarrelcactuscrop", "dirt", "allsoil", ["pamhc2crops:barrelcactusitem", "pamhc2crops:barrelcactusseeditem"]);
  potting_botanypots("pamhc2crops:beanseeditem", "pamhc2crops:pambeancrop", "dirt", "allsoil", ["pamhc2crops:beanitem", "pamhc2crops:beanseeditem"]);
  potting_botanypots("pamhc2crops:bellpepperseeditem", "pamhc2crops:pambellpeppercrop", "dirt", "allsoil", ["pamhc2crops:bellpepperitem", "pamhc2crops:bellpepperseeditem"]);
  potting_botanypots("pamhc2crops:blackberryseeditem", "pamhc2crops:pamblackberrycrop", "dirt", "allsoil", ["pamhc2crops:blackberryitem", "pamhc2crops:blackberryseeditem"]);
  potting_botanypots("pamhc2crops:blueberryseeditem", "pamhc2crops:pamblueberrycrop", "dirt", "allsoil", ["pamhc2crops:blueberryitem", "pamhc2crops:blueberryseeditem"]);
  potting_botanypots("pamhc2crops:bokchoyseeditem", "pamhc2crops:pambokchoycrop", "dirt", "allsoil", ["pamhc2crops:bokchoyitem", "pamhc2crops:bokchoyseeditem"]);
  potting_botanypots("pamhc2crops:broccoliseeditem", "pamhc2crops:pambroccolicrop", "dirt", "allsoil", ["pamhc2crops:broccoliitem", "pamhc2crops:broccoliseeditem"]);
  potting_botanypots("pamhc2crops:brusselsproutseeditem", "pamhc2crops:pambrusselsproutcrop", "dirt", "allsoil", ["pamhc2crops:brusselsproutitem", "pamhc2crops:brusselsproutseeditem"]);
  potting_botanypots("pamhc2crops:cabbageseeditem", "pamhc2crops:pamcabbagecrop", "dirt", "allsoil", ["pamhc2crops:cabbageitem", "pamhc2crops:cabbageseeditem"]);
  potting_botanypots("pamhc2crops:cactusfruitseeditem", "pamhc2crops:pamcactusfruitcrop", "dirt", "allsoil", ["pamhc2crops:cactusfruititem", "pamhc2crops:cactusfruitseeditem"]);
  potting_botanypots("pamhc2crops:calabashseeditem", "pamhc2crops:pamcalabashcrop", "dirt", "allsoil", ["pamhc2crops:calabashitem", "pamhc2crops:calabashseeditem"]);
  potting_botanypots("pamhc2crops:candleberryseeditem", "pamhc2crops:pamcandleberrycrop", "dirt", "allsoil", ["pamhc2crops:candleberryitem", "pamhc2crops:candleberryseeditem"]);
  potting_botanypots("pamhc2crops:canolaseeditem", "pamhc2crops:pamcanolacrop", "dirt", "allsoil", ["pamhc2crops:canolaitem", "pamhc2crops:canolaseeditem"]);
  potting_botanypots("pamhc2crops:cantaloupeseeditem", "pamhc2crops:pamcantaloupecrop", "dirt", "allsoil", ["pamhc2crops:cantaloupeitem", "pamhc2crops:cantaloupeseeditem"]);
  potting_botanypots("pamhc2crops:cassavaseeditem", "pamhc2crops:pamcassavacrop", "dirt", "allsoil", ["pamhc2crops:cassavaitem", "pamhc2crops:cassavaseeditem"]);
  potting_botanypots("pamhc2crops:cattailseeditem", "pamhc2crops:pamcattailcrop", "dirt", "allsoil", ["pamhc2crops:cattailitem", "pamhc2crops:cattailseeditem"]);
  potting_botanypots("pamhc2crops:cauliflowerseeditem", "pamhc2crops:pamcauliflowercrop", "dirt", "allsoil", ["pamhc2crops:caulifloweritem", "pamhc2crops:cauliflowerseeditem"]);
  potting_botanypots("pamhc2crops:celeryseeditem", "pamhc2crops:pamcelerycrop", "dirt", "allsoil", ["pamhc2crops:celeryitem", "pamhc2crops:celeryseeditem"]);
  potting_botanypots("pamhc2crops:chiaseeditem", "pamhc2crops:pamchiacrop", "dirt", "allsoil", ["pamhc2crops:chiaitem", "pamhc2crops:chiaseeditem"]);
  potting_botanypots("pamhc2crops:chickpeaseeditem", "pamhc2crops:pamchickpeacrop", "dirt", "allsoil", ["pamhc2crops:chickpeaitem", "pamhc2crops:chickpeaseeditem"]);
  potting_botanypots("pamhc2crops:chilipepperseeditem", "pamhc2crops:pamchilipeppercrop", "dirt", "allsoil", ["pamhc2crops:chilipepperitem", "pamhc2crops:chilipepperseeditem"]);
  potting_botanypots("pamhc2crops:cloudberryseeditem", "pamhc2crops:pamcloudberrycrop", "dirt", "allsoil", ["pamhc2crops:cloudberryitem", "pamhc2crops:cloudberryseeditem"]);
  potting_botanypots("pamhc2crops:coffeebeanseeditem", "pamhc2crops:pamcoffeebeancrop", "dirt", "allsoil", ["pamhc2crops:coffeebeanitem", "pamhc2crops:coffeebeanseeditem"]);
  potting_botanypots("pamhc2crops:cornseeditem", "pamhc2crops:pamcorncrop", "dirt", "allsoil", ["pamhc2crops:cornitem", "pamhc2crops:cornseeditem"]);
  potting_botanypots("pamhc2crops:cottonseeditem", "pamhc2crops:pamcottoncrop", "dirt", "allsoil", ["pamhc2crops:cottonitem", "pamhc2crops:cottonseeditem"]);
  potting_botanypots("pamhc2crops:cranberryseeditem", "pamhc2crops:pamcranberrycrop", "dirt", "allsoil", ["pamhc2crops:cranberryitem", "pamhc2crops:cranberryseeditem"]);
  potting_botanypots("pamhc2crops:cucumberseeditem", "pamhc2crops:pamcucumbercrop", "dirt", "allsoil", ["pamhc2crops:cucumberitem", "pamhc2crops:cucumberseeditem"]);
  potting_botanypots("pamhc2crops:eggplantseeditem", "pamhc2crops:pameggplantcrop", "dirt", "allsoil", ["pamhc2crops:eggplantitem", "pamhc2crops:eggplantseeditem"]);
  potting_botanypots("pamhc2crops:elderberryseeditem", "pamhc2crops:pamelderberrycrop", "dirt", "allsoil", ["pamhc2crops:elderberryitem", "pamhc2crops:elderberryseeditem"]);
  potting_botanypots("pamhc2crops:flaxseeditem", "pamhc2crops:pamflaxcrop", "dirt", "allsoil", ["pamhc2crops:flaxitem", "pamhc2crops:flaxseeditem"]);
  potting_botanypots("pamhc2crops:garlicseeditem", "pamhc2crops:pamgarliccrop", "dirt", "allsoil", ["pamhc2crops:garlicitem", "pamhc2crops:garlicseeditem"]);
  potting_botanypots("pamhc2crops:gingerseeditem", "pamhc2crops:pamgingercrop", "dirt", "allsoil", ["pamhc2crops:gingeritem", "pamhc2crops:gingerseeditem"]);
  potting_botanypots("pamhc2crops:grapeseeditem", "pamhc2crops:pamgrapecrop", "dirt", "allsoil", ["pamhc2crops:grapeitem", "pamhc2crops:grapeseeditem"]);
  potting_botanypots("pamhc2crops:greengrapeseeditem", "pamhc2crops:pamgreengrapecrop", "dirt", "allsoil", ["pamhc2crops:greengrapeitem", "pamhc2crops:greengrapeseeditem"]);
  potting_botanypots("pamhc2crops:guaranaseeditem", "pamhc2crops:pamguaranacrop", "dirt", "allsoil", ["pamhc2crops:guaranaitem", "pamhc2crops:guaranaseeditem"]);
  potting_botanypots("pamhc2crops:huckleberryseeditem", "pamhc2crops:pamhuckleberrycrop", "dirt", "allsoil", ["pamhc2crops:huckleberryitem", "pamhc2crops:huckleberryseeditem"]);
  potting_botanypots("pamhc2crops:jicamaseeditem", "pamhc2crops:pamjicamacrop", "dirt", "allsoil", ["pamhc2crops:jicamaitem", "pamhc2crops:jicamaseeditem"]);
  potting_botanypots("pamhc2crops:juniperberryseeditem", "pamhc2crops:pamjuniperberrycrop", "dirt", "allsoil", ["pamhc2crops:juniperberryitem", "pamhc2crops:juniperberryseeditem"]);
  potting_botanypots("pamhc2crops:juteseeditem", "pamhc2crops:pamjutecrop", "dirt", "allsoil", ["pamhc2crops:juteitem", "pamhc2crops:juteseeditem"]);
  potting_botanypots("pamhc2crops:kaleseeditem", "pamhc2crops:pamkalecrop", "dirt", "allsoil", ["pamhc2crops:kaleitem", "pamhc2crops:kaleseeditem"]);
  potting_botanypots("pamhc2crops:kenafseeditem", "pamhc2crops:pamkenafcrop", "dirt", "allsoil", ["pamhc2crops:kenafitem", "pamhc2crops:kenafseeditem"]);
  potting_botanypots("pamhc2crops:kiwiseeditem", "pamhc2crops:pamkiwicrop", "dirt", "allsoil", ["pamhc2crops:kiwiitem", "pamhc2crops:kiwiseeditem"]);
  potting_botanypots("pamhc2crops:kohlrabiseeditem", "pamhc2crops:pamkohlrabicrop", "dirt", "allsoil", ["pamhc2crops:kohlrabiitem", "pamhc2crops:kohlrabiseeditem"]);
  potting_botanypots("pamhc2crops:leekseeditem", "pamhc2crops:pamleekcrop", "dirt", "allsoil", ["pamhc2crops:leekitem", "pamhc2crops:leekseeditem"]);
  potting_botanypots("pamhc2crops:lentilseeditem", "pamhc2crops:pamlentilcrop", "dirt", "allsoil", ["pamhc2crops:lentilitem", "pamhc2crops:lentilseeditem"]);
  potting_botanypots("pamhc2crops:lettuceseeditem", "pamhc2crops:pamlettucecrop", "dirt", "allsoil", ["pamhc2crops:lettuceitem", "pamhc2crops:lettuceseeditem"]);
  potting_botanypots("pamhc2crops:lotusseeditem", "pamhc2crops:pamlotuscrop", "dirt", "allsoil", ["pamhc2crops:lotusitem", "pamhc2crops:lotusseeditem"]);
  potting_botanypots("pamhc2crops:milletseeditem", "pamhc2crops:pammilletcrop", "dirt", "allsoil", ["pamhc2crops:milletitem", "pamhc2crops:milletseeditem"]);
  potting_botanypots("pamhc2crops:mulberryseeditem", "pamhc2crops:pammulberrycrop", "dirt", "allsoil", ["pamhc2crops:mulberryitem", "pamhc2crops:mulberryseeditem"]);
  potting_botanypots("pamhc2crops:mustardseedsseeditem", "pamhc2crops:pammustardseedscrop", "dirt", "allsoil", ["pamhc2crops:mustardseedsitem", "pamhc2crops:mustardseedsseeditem"]);
  potting_botanypots("pamhc2crops:nettlesseeditem", "pamhc2crops:pamnettlescrop", "dirt", "allsoil", ["pamhc2crops:nettlesitem", "pamhc2crops:nettlesseeditem"]);
  potting_botanypots("pamhc2crops:nopalesseeditem", "pamhc2crops:pamnopalescrop", "dirt", "allsoil", ["pamhc2crops:nopalesitem", "pamhc2crops:nopalesseeditem"]);
  potting_botanypots("pamhc2crops:oatsseeditem", "pamhc2crops:pamoatscrop", "dirt", "allsoil", ["pamhc2crops:oatsitem", "pamhc2crops:oatsseeditem"]);
  potting_botanypots("pamhc2crops:okraseeditem", "pamhc2crops:pamokracrop", "dirt", "allsoil", ["pamhc2crops:okraitem", "pamhc2crops:okraseeditem"]);
  potting_botanypots("pamhc2crops:onionseeditem", "pamhc2crops:pamonioncrop", "dirt", "allsoil", ["pamhc2crops:onionitem", "pamhc2crops:onionseeditem"]);
  potting_botanypots("pamhc2crops:papyrusseeditem", "pamhc2crops:pampapyruscrop", "dirt", "allsoil", ["pamhc2crops:papyrusitem", "pamhc2crops:papyrusseeditem"]);
  potting_botanypots("pamhc2crops:parsnipseeditem", "pamhc2crops:pamparsnipcrop", "dirt", "allsoil", ["pamhc2crops:parsnipitem", "pamhc2crops:parsnipseeditem"]);
  potting_botanypots("pamhc2crops:peanutseeditem", "pamhc2crops:pampeanutcrop", "dirt", "allsoil", ["pamhc2crops:peanutitem", "pamhc2crops:peanutseeditem"]);
  potting_botanypots("pamhc2crops:peasseeditem", "pamhc2crops:pampeascrop", "dirt", "allsoil", ["pamhc2crops:peasitem", "pamhc2crops:peasseeditem"]);
  potting_botanypots("pamhc2crops:pineappleseeditem", "pamhc2crops:pampineapplecrop", "dirt", "allsoil", ["pamhc2crops:pineappleitem", "pamhc2crops:pineappleseeditem"]);
  potting_botanypots("pamhc2crops:quinoaseeditem", "pamhc2crops:pamquinoacrop", "dirt", "allsoil", ["pamhc2crops:quinoaitem", "pamhc2crops:quinoaseeditem"]);
  potting_botanypots("pamhc2crops:radishseeditem", "pamhc2crops:pamradishcrop", "dirt", "allsoil", ["pamhc2crops:radishitem", "pamhc2crops:radishseeditem"]);
  potting_botanypots("pamhc2crops:raspberryseeditem", "pamhc2crops:pamraspberrycrop", "dirt", "allsoil", ["pamhc2crops:raspberryitem", "pamhc2crops:raspberryseeditem"]);
  potting_botanypots("pamhc2crops:rhubarbseeditem", "pamhc2crops:pamrhubarbcrop", "dirt", "allsoil", ["pamhc2crops:rhubarbitem", "pamhc2crops:rhubarbseeditem"]);
  potting_botanypots("pamhc2crops:riceseeditem", "pamhc2crops:pamricecrop", "dirt", "allsoil", ["pamhc2crops:riceitem", "pamhc2crops:riceseeditem"]);
  potting_botanypots("pamhc2crops:rutabagaseeditem", "pamhc2crops:pamrutabagacrop", "dirt", "allsoil", ["pamhc2crops:rutabagaitem", "pamhc2crops:rutabagaseeditem"]);
  potting_botanypots("pamhc2crops:ryeseeditem", "pamhc2crops:pamryecrop", "dirt", "allsoil", ["pamhc2crops:ryeitem", "pamhc2crops:ryeseeditem"]);
  potting_botanypots("pamhc2crops:scallionseeditem", "pamhc2crops:pamscallioncrop", "dirt", "allsoil", ["pamhc2crops:scallionitem", "pamhc2crops:scallionseeditem"]);
  potting_botanypots("pamhc2crops:sesameseedsseeditem", "pamhc2crops:pamsesameseedscrop", "dirt", "allsoil", ["pamhc2crops:sesameseedsitem", "pamhc2crops:sesameseedsseeditem"]);
  potting_botanypots("pamhc2crops:sisalseeditem", "pamhc2crops:pamsisalcrop", "dirt", "allsoil", ["pamhc2crops:sisalitem", "pamhc2crops:sisalseeditem"]);
  potting_botanypots("pamhc2crops:sorghumseeditem", "pamhc2crops:pamsorghumcrop", "dirt", "allsoil", ["pamhc2crops:sorghumitem", "pamhc2crops:sorghumseeditem"]);
  potting_botanypots("pamhc2crops:soybeanseeditem", "pamhc2crops:pamsoybeancrop", "dirt", "allsoil", ["pamhc2crops:soybeanitem", "pamhc2crops:soybeanseeditem"]);
  potting_botanypots("pamhc2crops:spiceleafseeditem", "pamhc2crops:pamspiceleafcrop", "dirt", "allsoil", ["pamhc2crops:spiceleafitem", "pamhc2crops:spiceleafseeditem"]);
  potting_botanypots("pamhc2crops:spinachseeditem", "pamhc2crops:pamspinachcrop", "dirt", "allsoil", ["pamhc2crops:spinachitem", "pamhc2crops:spinachseeditem"]);
  potting_botanypots("pamhc2crops:strawberryseeditem", "pamhc2crops:pamstrawberrycrop", "dirt", "allsoil", ["pamhc2crops:strawberryitem", "pamhc2crops:strawberryseeditem"]);
  potting_botanypots("pamhc2crops:sunchokeseeditem", "pamhc2crops:pamsunchokecrop", "dirt", "allsoil", ["pamhc2crops:sunchokeitem", "pamhc2crops:sunchokeseeditem"]);
  potting_botanypots("pamhc2crops:sweetpotatoseeditem", "pamhc2crops:pamsweetpotatocrop", "dirt", "allsoil", ["pamhc2crops:sweetpotatoitem", "pamhc2crops:sweetpotatoseeditem"]);
  potting_botanypots("pamhc2crops:taroseeditem", "pamhc2crops:pamtarocrop", "dirt", "allsoil", ["pamhc2crops:taroitem", "pamhc2crops:taroseeditem"]);
  potting_botanypots("pamhc2crops:tealeafseeditem", "pamhc2crops:pamtealeafcrop", "dirt", "allsoil", ["pamhc2crops:tealeafitem", "pamhc2crops:tealeafseeditem"]);
  potting_botanypots("pamhc2crops:tomatilloseeditem", "pamhc2crops:pamtomatillocrop", "dirt", "allsoil", ["pamhc2crops:tomatilloitem", "pamhc2crops:tomatilloseeditem"]);
  potting_botanypots("pamhc2crops:tomatoseeditem", "pamhc2crops:pamtomatocrop", "dirt", "allsoil", ["pamhc2crops:tomatoitem", "pamhc2crops:tomatoseeditem"]);
  potting_botanypots("pamhc2crops:truffleseeditem", "pamhc2crops:pamtrufflecrop", "dirt", "allsoil", ["pamhc2crops:truffleitem", "pamhc2crops:truffleseeditem"]);
  potting_botanypots("pamhc2crops:turnipseeditem", "pamhc2crops:pamturnipcrop", "dirt", "allsoil", ["pamhc2crops:turnipitem", "pamhc2crops:turnipseeditem"]);
  potting_botanypots("pamhc2crops:waterchestnutseeditem", "pamhc2crops:pamwaterchestnutcrop", "dirt", "allsoil", ["pamhc2crops:waterchestnutitem", "pamhc2crops:waterchestnutseeditem"]);
  potting_botanypots("pamhc2crops:whitemushroomseeditem", "pamhc2crops:pamwhitemushroomcrop", "dirt", "allsoil", ["pamhc2crops:whitemushroomitem", "pamhc2crops:whitemushroomseeditem"]);
  potting_botanypots("pamhc2crops:wintersquashseeditem", "pamhc2crops:pamwintersquashcrop", "dirt", "allsoil", ["pamhc2crops:wintersquashitem", "pamhc2crops:wintersquashseeditem"]);
  potting_botanypots("pamhc2crops:wolfberryseeditem", "pamhc2crops:pamwolfberrycrop", "dirt", "allsoil", ["pamhc2crops:wolfberryitem", "pamhc2crops:wolfberryseeditem"]);
  potting_botanypots("pamhc2crops:yuccaseeditem", "pamhc2crops:pamyuccacrop", "dirt", "allsoil", ["pamhc2crops:yuccaitem", "pamhc2crops:yuccaseeditem"]);
  potting_botanypots("pamhc2crops:zucchiniseeditem", "pamhc2crops:pamzucchinicrop", "dirt", "allsoil", ["pamhc2crops:zucchiniitem", "pamhc2crops:zucchiniseeditem"]);
  potting_botanypots("pamhc2trees:acorn_sapling", "pamhc2trees:acorn_sapling", "dirt", "allsoil", ["minecraft:oak_log", "pamhc2trees:acornitem", "minecraft:oak_leaves", "pamhc2trees:acorn_sapling"]);
  potting_botanypots("pamhc2trees:almond_sapling", "pamhc2trees:almond_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:almonditem",
    "minecraft:oak_leaves",
    "pamhc2trees:almond_sapling"
  ]);
  potting_botanypots("pamhc2trees:apple_sapling", "pamhc2trees:apple_sapling", "dirt", "allsoil", ["minecraft:oak_log", "minecraft:apple", "minecraft:oak_leaves", "pamhc2trees:apple_sapling"]);
  potting_botanypots("pamhc2trees:apricot_sapling", "pamhc2trees:apricot_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:apricotitem",
    "minecraft:oak_leaves",
    "pamhc2trees:apricot_sapling"
  ]);
  potting_botanypots("pamhc2trees:avocado_sapling", "pamhc2trees:avocado_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:avocadoitem",
    "minecraft:oak_leaves",
    "pamhc2trees:avocado_sapling"
  ]);
  potting_botanypots("pamhc2trees:banana_sapling", "pamhc2trees:banana_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:bananaitem",
    "minecraft:oak_leaves",
    "pamhc2trees:banana_sapling"
  ]);
  potting_botanypots("pamhc2trees:breadfruit_sapling", "pamhc2trees:breadfruit_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:breadfruititem",
    "minecraft:oak_leaves",
    "pamhc2trees:breadfruit_sapling"
  ]);
  potting_botanypots("pamhc2trees:candlenut_sapling", "pamhc2trees:candlenut_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:candlenutitem",
    "minecraft:oak_leaves",
    "pamhc2trees:candlenut_sapling"
  ]);
  potting_botanypots("pamhc2trees:cashew_sapling", "pamhc2trees:cashew_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:cashewitem",
    "minecraft:oak_leaves",
    "pamhc2trees:cashew_sapling"
  ]);
  potting_botanypots("pamhc2trees:cherry_sapling", "pamhc2trees:cherry_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:cherryitem",
    "minecraft:oak_leaves",
    "pamhc2trees:cherry_sapling"
  ]);
  potting_botanypots("pamhc2trees:chestnut_sapling", "pamhc2trees:chestnut_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:chestnutitem",
    "minecraft:oak_leaves",
    "pamhc2trees:chestnut_sapling"
  ]);
  potting_botanypots("pamhc2trees:cinnamon_sapling", "pamhc2trees:cinnamon_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:cinnamonitem",
    "minecraft:oak_leaves",
    "pamhc2trees:cinnamon_sapling"
  ]);
  potting_botanypots("pamhc2trees:coconut_sapling", "pamhc2trees:coconut_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:coconutitem",
    "minecraft:oak_leaves",
    "pamhc2trees:coconut_sapling"
  ]);
  potting_botanypots("pamhc2trees:date_sapling", "pamhc2trees:date_sapling", "dirt", "allsoil", ["minecraft:oak_log", "pamhc2trees:dateitem", "minecraft:oak_leaves", "pamhc2trees:date_sapling"]);
  potting_botanypots("pamhc2trees:dragonfruit_sapling", "pamhc2trees:dragonfruit_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:dragonfruititem",
    "minecraft:oak_leaves",
    "pamhc2trees:dragonfruit_sapling"
  ]);
  potting_botanypots("pamhc2trees:durian_sapling", "pamhc2trees:durian_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:durianitem",
    "minecraft:oak_leaves",
    "pamhc2trees:durian_sapling"
  ]);
  potting_botanypots("pamhc2trees:fig_sapling", "pamhc2trees:fig_sapling", "dirt", "allsoil", ["minecraft:oak_log", "pamhc2trees:figitem", "minecraft:oak_leaves", "pamhc2trees:fig_sapling"]);
  potting_botanypots("pamhc2trees:gooseberry_sapling", "pamhc2trees:gooseberry_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:gooseberryitem",
    "minecraft:oak_leaves",
    "pamhc2trees:gooseberry_sapling"
  ]);
  potting_botanypots("pamhc2trees:grapefruit_sapling", "pamhc2trees:grapefruit_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:grapefruititem",
    "minecraft:oak_leaves",
    "pamhc2trees:grapefruit_sapling"
  ]);
  potting_botanypots("pamhc2trees:guava_sapling", "pamhc2trees:guava_sapling", "dirt", "allsoil", ["minecraft:oak_log", "pamhc2trees:guavaitem", "minecraft:oak_leaves", "pamhc2trees:guava_sapling"]);
  potting_botanypots("pamhc2trees:hazelnut_sapling", "pamhc2trees:hazelnut_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:hazelnutitem",
    "minecraft:oak_leaves",
    "pamhc2trees:hazelnut_sapling"
  ]);
  potting_botanypots("pamhc2trees:jackfruit_sapling", "pamhc2trees:jackfruit_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:jackfruititem",
    "minecraft:oak_leaves",
    "pamhc2trees:jackfruit_sapling"
  ]);
  potting_botanypots("pamhc2trees:lemon_sapling", "pamhc2trees:lemon_sapling", "dirt", "allsoil", ["minecraft:oak_log", "pamhc2trees:lemonitem", "minecraft:oak_leaves", "pamhc2trees:lemon_sapling"]);
  potting_botanypots("pamhc2trees:lime_sapling", "pamhc2trees:lime_sapling", "dirt", "allsoil", ["minecraft:oak_log", "pamhc2trees:limeitem", "minecraft:oak_leaves", "pamhc2trees:lime_sapling"]);
  potting_botanypots("pamhc2trees:lychee_sapling", "pamhc2trees:lychee_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:lycheeitem",
    "minecraft:oak_leaves",
    "pamhc2trees:lychee_sapling"
  ]);
  potting_botanypots("pamhc2trees:mango_sapling", "pamhc2trees:mango_sapling", "dirt", "allsoil", ["minecraft:oak_log", "pamhc2trees:mangoitem", "minecraft:oak_leaves", "pamhc2trees:mango_sapling"]);
  potting_botanypots("pamhc2trees:maple_sapling", "pamhc2trees:maple_sapling", "dirt", "allsoil", [
    "minecraft:spruce_log",
    "pamhc2trees:maplesyrupitem",
    "minecraft:spruce_leaves",
    "pamhc2trees:maple_sapling"
  ]);
  potting_botanypots("pamhc2trees:nutmeg_sapling", "pamhc2trees:nutmeg_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:nutmegitem",
    "minecraft:oak_leaves",
    "pamhc2trees:nutmeg_sapling"
  ]);
  potting_botanypots("pamhc2trees:olive_sapling", "pamhc2trees:olive_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:oliveitem",
    "minecraft:oak_leaves",
    "pizzacraft:fruit_olive_leaves",
    "pamhc2trees:olive_sapling"
  ]);
  potting_botanypots("pamhc2trees:orange_sapling", "pamhc2trees:orange_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:orangeitem",
    "minecraft:oak_leaves",
    "pamhc2trees:orange_sapling"
  ]);
  potting_botanypots("pamhc2trees:papaya_sapling", "pamhc2trees:papaya_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:papayaitem",
    "minecraft:oak_leaves",
    "pamhc2trees:papaya_sapling"
  ]);
  potting_botanypots("pamhc2trees:paperbark_sapling", "pamhc2trees:paperbark_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "minecraft:paper",
    "minecraft:oak_leaves",
    "pamhc2trees:paperbark_sapling"
  ]);
  potting_botanypots("pamhc2trees:passionfruit_sapling", "pamhc2trees:passionfruit_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:passionfruititem",
    "minecraft:oak_leaves",
    "pamhc2trees:passionfruit_sapling"
  ]);
  potting_botanypots("pamhc2trees:pawpaw_sapling", "pamhc2trees:pawpaw_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:pawpawitem",
    "minecraft:oak_leaves",
    "pamhc2trees:pawpaw_sapling"
  ]);
  potting_botanypots("pamhc2trees:peach_sapling", "pamhc2trees:peach_sapling", "dirt", "allsoil", ["minecraft:oak_log", "pamhc2trees:peachitem", "minecraft:oak_leaves", "pamhc2trees:peach_sapling"]);
  potting_botanypots("pamhc2trees:pear_sapling", "pamhc2trees:pear_sapling", "dirt", "allsoil", ["minecraft:oak_log", "pamhc2trees:pearitem", "minecraft:oak_leaves", "pamhc2trees:pear_sapling"]);
  potting_botanypots("pamhc2trees:pecan_sapling", "pamhc2trees:pecan_sapling", "dirt", "allsoil", ["minecraft:oak_log", "pamhc2trees:pecanitem", "minecraft:oak_leaves", "pamhc2trees:pecan_sapling"]);
  potting_botanypots("pamhc2trees:peppercorn_sapling", "pamhc2trees:peppercorn_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:peppercornitem",
    "minecraft:oak_leaves",
    "pamhc2trees:peppercorn_sapling"
  ]);
  potting_botanypots("pamhc2trees:persimmon_sapling", "pamhc2trees:persimmon_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:persimmonitem",
    "minecraft:oak_leaves",
    "pamhc2trees:persimmon_sapling"
  ]);
  potting_botanypots("pamhc2trees:pinenut_sapling", "pamhc2trees:pinenut_sapling", "dirt", "allsoil", [
    "minecraft:spruce_log",
    "pamhc2trees:pinenutitem",
    "minecraft:spruce_leaves",
    "pamhc2trees:pinenut_sapling"
  ]);
  potting_botanypots("pamhc2trees:pistachio_sapling", "pamhc2trees:pistachio_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:pistachioitem",
    "minecraft:oak_leaves",
    "pamhc2trees:pistachio_sapling"
  ]);
  potting_botanypots("pamhc2trees:plum_sapling", "pamhc2trees:plum_sapling", "dirt", "allsoil", ["minecraft:oak_log", "pamhc2trees:plumitem", "minecraft:oak_leaves", "pamhc2trees:plum_sapling"]);
  potting_botanypots("pamhc2trees:pomegranate_sapling", "pamhc2trees:pomegranate_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:pomegranateitem",
    "minecraft:oak_leaves",
    "pamhc2trees:pomegranate_sapling"
  ]);
  potting_botanypots("pamhc2trees:rambutan_sapling", "pamhc2trees:rambutan_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:rambutanitem",
    "minecraft:oak_leaves",
    "pamhc2trees:rambutan_sapling"
  ]);
  potting_botanypots("pamhc2trees:soursop_sapling", "pamhc2trees:soursop_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:soursopitem",
    "minecraft:oak_leaves",
    "pamhc2trees:soursop_sapling"
  ]);
  potting_botanypots("pamhc2trees:spiderweb_sapling", "pamhc2trees:spiderweb_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "minecraft:string",
    "minecraft:oak_leaves",
    "pamhc2trees:spiderweb_sapling"
  ]);
  potting_botanypots("pamhc2trees:starfruit_sapling", "pamhc2trees:starfruit_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:starfruititem",
    "minecraft:oak_leaves",
    "pamhc2trees:starfruit_sapling"
  ]);
  potting_botanypots("pamhc2trees:tamarind_sapling", "pamhc2trees:tamarind_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:tamarinditem",
    "minecraft:oak_leaves",
    "pamhc2trees:tamarind_sapling"
  ]);
  potting_botanypots("pamhc2trees:vanillabean_sapling", "pamhc2trees:vanillabean_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:vanillabeanitem",
    "minecraft:oak_leaves",
    "pamhc2trees:vanillabean_sapling"
  ]);
  potting_botanypots("pamhc2trees:walnut_sapling", "pamhc2trees:walnut_sapling", "dirt", "allsoil", [
    "minecraft:oak_log",
    "pamhc2trees:walnutitem",
    "minecraft:oak_leaves",
    "pamhc2trees:walnut_sapling"
  ]);
  //#endregion
  //#region - PizzaCraft
  potting_botanypots("pizzacraft:broccoli_seeds", "pizzacraft:broccoli", "dirt", "allsoil", ["pizzacraft:broccoli", "pizzacraft:broccoli_seeds"]);
  potting_botanypots("pizzacraft:cucumber_seeds", "pizzacraft:cucumbers", "dirt", "allsoil", ["pizzacraft:cucumber", "pizzacraft:cucumber_seeds"]);
  potting_botanypots("pizzacraft:olive_sapling", "pizzacraft:olive_sapling", "dirt", "allsoil", ["pizzacraft:olive_log", "pizzacraft:olive", "pizzacraft:olive_leaves", "pizzacraft:olive_sapling"]);
  potting_botanypots("pizzacraft:pepper_seeds", "pizzacraft:peppers", "dirt", "allsoil", ["pizzacraft:pepper", "pizzacraft:pepper_seeds"]);
  potting_botanypots("pizzacraft:pineapple_seeds", "pizzacraft:pineapple", "dirt", "allsoil", ["pizzacraft:pineapple", "pizzacraft:pineapple_seeds"]);
  potting_botanypots("pizzacraft:tomato_seeds", "pizzacraft:tomatoes", "dirt", "allsoil", ["pizzacraft:tomato", "pizzacraft:tomato_seeds"]);
  //#endregion
  //#region - Supplementaries
  potting_botanypots("supplementaries:flax_seeds", "supplementaries:flax", "dirt", "allsoil", ["supplementaries:flax", "supplementaries:flax_seeds"]);
  potting_botanypots("supplementaries:wild_flax", "supplementaries:wild_flax", "dirt", "allsoil", ["supplementaries:wild_flax"]);
  //#endregion
  //#region - The Aether
  potting_botanypots("aether:golden_oak_sapling", "aether:golden_oak_sapling", "dirt", "allsoil", [
    "aether:skyroot_log",
    "aether:golden_oak_log",
    "aether:golden_oak_leaves",
    "aether:golden_oak_sapling"
  ]);
  potting_botanypots("aether:purple_flower", "aether:purple_flower", "dirt", "allsoil", ["aether:purple_flower"]);
  potting_botanypots("aether:skyroot_sapling", "aether:skyroot_sapling", "dirt", "allsoil", ["aether:skyroot_log", "aether:skyroot_leaves", "aether:skyroot_sapling"]);
  potting_botanypots("aether:white_flower", "aether:white_flower", "dirt", "allsoil", ["aether:white_flower"]);
  potting_botanypots("ancient_aether:crystal_skyroot_sapling", "ancient_aether:crystal_skyroot_sapling", "dirt", "allsoil", [
    "aether:skyroot_log",
    "ancient_aether:crystal_skyroot_leaves",
    "ancient_aether:crystal_skyroot_sapling"
  ]);
  potting_botanypots("ancient_aether:enchanted_skyroot_sapling", "ancient_aether:enchanted_skyroot_sapling", "dirt", "allsoil", [
    "aether:skyroot_log",
    "ancient_aether:enchanted_skyroot_leaves",
    "ancient_aether:enchanted_skyroot_sapling"
  ]);
  potting_botanypots("ancient_aether:highsproot_sapling", "ancient_aether:highsproot_sapling", "dirt", "allsoil", [
    "ancient_aether:highsproot_log",
    "ancient_aether:highsproot_leaves",
    "ancient_aether:highsproot_sapling"
  ]);
  potting_botanypots("ancient_aether:sakura_sapling", "ancient_aether:sakura_sapling", "dirt", "allsoil", [
    "ancient_aether:sakura_log",
    "ancient_aether:sakura_blossoms",
    "ancient_aether:sakura_leaves",
    "ancient_aether:sakura_sapling"
  ]);
  potting_botanypots("ancient_aether:sky_blues", "ancient_aether:sky_blues", "dirt", "allsoil", ["ancient_aether:sky_blues"]);
  potting_botanypots("ancient_aether:skyroot_pine_sapling", "ancient_aether:skyroot_pine_sapling", "dirt", "allsoil", [
    "aether:skyroot_log",
    "ancient_aether:skyroot_pine_leaves",
    "ancient_aether:skyroot_pine_sapling"
  ]);
  potting_botanypots("ancient_aether:wynd_thistle", "ancient_aether:wynd_thistle", "dirt", "allsoil", ["ancient_aether:wynd_thistle"]);
  potting_botanypots("lost_aether_content:crystal_sapling", "lost_aether_content:crystal_sapling", "dirt", "allsoil", [
    "aether:skyroot_log",
    "aether:white_apple",
    "aether:crystal_leaves",
    "aether:crystal_fruit_leaves",
    "lost_aether_content:crystal_sapling"
  ]);
  potting_botanypots("lost_aether_content:holiday_sapling", "lost_aether_content:holiday_sapling", "dirt", "allsoil", [
    "aether:skyroot_log",
    "aether:decorated_holiday_leaves",
    "aether:holiday_leaves",
    "lost_aether_content:holiday_sapling"
  ]);
  potting_botanypots("lost_aether_content:holiday_sapling", "lost_aether_content:holiday_sapling", "dirt", "allsoil", [
    "aether:skyroot_log",
    "aether:holiday_leaves",
    "aether:decorated_holiday_leaves",
    "lost_aether_content:holiday_sapling"
  ]);
  //#endregion
  //#region - The Twilight Forest
  potting_botanypots("twilightforest:canopy_sapling", "twilightforest:canopy_sapling", "dirt", "allsoil", [
    "twilightforest:canopy_log",
    "twilightforest:firefly",
    "twilightforest:canopy_leaves",
    "twilightforest:canopy_sapling"
  ]);
  potting_botanypots("twilightforest:darkwood_sapling", "twilightforest:darkwood_sapling", "dirt", "allsoil", [
    "twilightforest:dark_log",
    "twilightforest:dark_leaves",
    "twilightforest:darkwood_sapling"
  ]);
  potting_botanypots("twilightforest:mangrove_sapling", "twilightforest:mangrove_sapling", "dirt", "allsoil", [
    "twilightforest:mangrove_log",
    "twilightforest:firefly",
    "twilightforest:mangrove_leaves",
    "minecraft:vine",
    "twilightforest:mangrove_sapling"
  ]);
  potting_botanypots("twilightforest:mayapple", "twilightforest:mayapple", "dirt", "allsoil", ["twilightforest:mayapple"]);
  potting_botanypots("twilightforest:mining_sapling", "twilightforest:mining_sapling", "dirt", "allsoil", [
    "twilightforest:mining_log",
    "twilightforest:mining_log_core",
    "twilightforest:mining_leaves",
    "twilightforest:mining_sapling"
  ]);
  potting_botanypots("twilightforest:rainbow_oak_sapling", "twilightforest:rainbow_oak_sapling", "dirt", "allsoil", [
    "twilightforest:twilight_oak_log",
    "twilightforest:rainbow_oak_leaves",
    "twilightforest:rainbow_oak_sapling"
  ]);
  potting_botanypots("twilightforest:sorting_sapling", "twilightforest:sorting_sapling", "dirt", "allsoil", [
    "twilightforest:sorting_log",
    "twilightforest:sorting_log_core",
    "twilightforest:sorting_leaves",
    "twilightforest:sorting_sapling"
  ]);
  potting_botanypots("twilightforest:thorn_rose", "twilightforest:thorn_rose", "dirt", "allsoil", ["twilightforest:thorn_rose"]);
  potting_botanypots("twilightforest:time_sapling", "twilightforest:time_sapling", "dirt", "allsoil", [
    "twilightforest:time_log",
    "twilightforest:time_log_core",
    "twilightforest:time_leaves",
    "twilightforest:time_sapling"
  ]);
  potting_botanypots("twilightforest:transformation_sapling", "twilightforest:transformation_sapling", "dirt", "allsoil", [
    "twilightforest:transformation_log",
    "twilightforest:transformation_log_core",
    "twilightforest:transformation_leaves",
    "twilightforest:transformation_sapling"
  ]);
  potting_botanypots("twilightforest:twilight_oak_sapling", "twilightforest:twilight_oak_sapling", "dirt", "allsoil", [
    "twilightforest:twilight_oak_log",
    "twilightforest:twilight_oak_leaves",
    "twilightforest:twilight_oak_sapling"
  ]);
  potting_botanypots("twilightforest:hollow_oak_sapling", "twilightforest:hollow_oak_sapling", "dirt", "allsoil", [
    "twilightforest:twilight_oak_log",
    "twilightforest:firefly",
    "twilightforest:cicada",
    "twilightforest:twilight_oak_leaves",
    "minecraft:vine",
    "twilightforest:hollow_oak_sapling"
  ]);
  //#endregion
  //#region - The Undergarden
  potting_botanypots("undergarden:amorous_bristle", "undergarden:amorous_bristle", "dirt", "allsoil", ["undergarden:amorous_bristle"]);
  potting_botanypots("undergarden:blood_mushroom", "undergarden:blood_mushroom", "dirt", "allsoil", [
    "undergarden:blood_mushroom_stem",
    "undergarden:blood_mushroom_cap",
    "undergarden:engorged_blood_mushroom_cap",
    "undergarden:blood_mushroom"
  ]);
  potting_botanypots("undergarden:butterbunch", "undergarden:butterbunch", "dirt", "allsoil", ["undergarden:butterbunch"]);
  potting_botanypots("undergarden:droopvine_item", "undergarden:droopvine_plant", "dirt", "allsoil", ["undergarden:droopvine_item"]);
  potting_botanypots("undergarden:gloomgourd_seeds", "undergarden:gloomgourd", "dirt", "allsoil", ["undergarden:gloomgourd", "undergarden:gloomgourd_seeds"]);
  potting_botanypots("undergarden:grongle_sapling", "undergarden:grongle_sapling", "dirt", "allsoil", ["undergarden:grongle_log", "undergarden:grongle_leaves", "undergarden:grongle_sapling"]);
  potting_botanypots("undergarden:indigo_mushroom", "undergarden:indigo_mushroom", "dirt", "allsoil", [
    "undergarden:indigo_mushroom_stem",
    "undergarden:indigo_mushroom_cap",
    "undergarden:indigo_mushroom"
  ]);
  potting_botanypots("undergarden:ink_mushroom", "undergarden:ink_mushroom", "dirt", "allsoil", ["undergarden:ink_mushroom_stem", "undergarden:ink_mushroom_cap", "undergarden:ink_mushroom"]);
  potting_botanypots("undergarden:miserabell", "undergarden:miserabell", "dirt", "allsoil", ["undergarden:miserabell"]);
  potting_botanypots("undergarden:shimmerweed", "undergarden:shimmerweed", "dirt", "allsoil", ["undergarden:shimmerweed"]);
  potting_botanypots("undergarden:smogstem_sapling", "undergarden:smogstem_sapling", "dirt", "allsoil", ["undergarden:smogstem_log", "undergarden:smogstem_leaves", "undergarden:smogstem_sapling"]);
  potting_botanypots("undergarden:tall_shimmerweed", "undergarden:tall_shimmerweed", "dirt", "allsoil", ["undergarden:tall_shimmerweed"]);
  potting_botanypots("undergarden:veil_mushroom", "undergarden:veil_mushroom", "dirt", "allsoil", [
    "undergarden:veil_mushroom_stem",
    "undergarden:mushroom_veil",
    "undergarden:veil_mushroom_cap",
    "undergarden:veil_mushroom"
  ]);
  potting_botanypots("undergarden:wigglewood_sapling", "undergarden:wigglewood_sapling", "dirt", "allsoil", [
    "undergarden:wigglewood_log",
    "undergarden:twistytwig",
    "undergarden:wigglewood_leaves",
    "undergarden:wigglewood_sapling"
  ]);
  //#endregion
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function botanypots() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [];
  let hiding = [
    /botanypots:black_/,
    /botanypots:blue_/,
    /botanypots:brown_/,
    /botanypots:cyan_/,
    /botanypots:gray_/,
    /botanypots:green_/,
    /botanypots:light_blue_/,
    /botanypots:light_gray_/,
    /botanypots:lime_/,
    /botanypots:magenta_/,
    /botanypots:orange_/,
    /botanypots:pink_/,
    /botanypots:purple_/,
    /botanypots:red_/,
    /botanypots:white_/,
    /botanypots:yellow_/
  ];
  // Fonctions pour supprimer les tags et les crafts des éléments définis juste au dessus
  function handle_Tags(e) {
    e.removeAllTagsFrom(unused);
    e.add("forge:hiding", [unused, hiding]);
  }
  function handle_Recipes(e) {
    e.remove([{ input: unused }, { output: unused }]);
  }
  ServerEvents.tags(["item", "block"], handle_Tags);
  ServerEvents.recipes(handle_Recipes);
}
botanypots();
//#endregion
