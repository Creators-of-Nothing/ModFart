//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([
    { id: /alexsmobs:bosses/ },
    { id: /alexsmobs:environments/ },
    { id: /alexsmobs:entities/ },
    { id: /aquaculture:entities/ },
    { id: /botania:bosses/ },
    { id: /botania:environments/ },
    {
      id: "cagedmobs:additional_loot/brown_mushroom"
    },
    {
      id: "cagedmobs:additional_loot/dragon_head"
    },
    {
      id: "cagedmobs:additional_loot/red_mushroom"
    },
    { id: /cagedmobs:bosses/ },
    { id: /cagedmobs:environments/ },
    { id: /cagedmobs:entities/ },
    { id: /twilightforest:bosses/ },
    {
      id: /twilightforest:environments/
    },
    { id: /twilightforest:entities/ },
    {
      id: "cagedmobs:crafting/nether_star_from_fragments"
    },
    {
      id: "cagedmobs:crafting/nether_star_from_fragments"
    }
  ]);
  //#endregion
  //#region - Replace Input
  e.replaceInput({ input: "cagedmobs:warden_receptor" }, "cagedmobs:warden_receptor", "apotheosis:warden_tendril");
  //#endregion
  //#region - Special DNA
  let potting_special_dna = (tier, material, mob) => {
    e.custom({
      type: "minecraft:crafting_shapeless",
      ingredients: [
        {
          item: tier
        },
        {
          item: material
        }
      ],
      result: {
        item: tier,
        nbt: mob
      }
    });
  };
  potting_special_dna("cagedmobs:netherite_dna_sampler", "create_sa:brass_cube", '{entity: "create_sa:brass_cube_r"}');
  //#endregion
  //#region - Environments
  let potting_environment = (block, category, modif) => {
    e.custom({
      type: "cagedmobs:environment_data",
      input: {
        item: block
      },
      render: block,
      growModifier: modif,
      categories: [category]
    });
  };
  potting_environment("minecraft:dirt", "overworld", 1.0);
  potting_environment("minecraft:netherrack", "nether", 1.0);
  potting_environment("minecraft:end_stone", "end", 1.0);
  potting_environment("minecraft:sand", "sea", 1.0);
  potting_environment("twilightforest:twilight_oak_log", "twilight", 1.0);
  potting_environment("aether:holystone", "aether", 1.0);
  potting_environment("minecraft:grass_block", "overworld", 1.25);
  potting_environment("minecraft:glowstone", "nether", 1.25);
  potting_environment("minecraft:purpur_block", "end", 1.25);
  potting_environment("minecraft:dark_prismarine", "sea", 1.25);
  potting_environment("twilightforest:hedge", "twilight", 1.25);
  potting_environment("ancient_aether:holystone_brick_mosaic", "aether", 1.25);
  potting_environment("minecraft:mycelium", "overworld", 1.5);
  potting_environment("minecraft:soul_soil", "nether", 1.5);
  potting_environment("stalwart_dungeons:purpur_bricks_and_endstone", "end", 1.5);
  potting_environment("minecraft:fire_coral_block", "sea", 1.5);
  potting_environment("twilightforest:deadrock", "twilight", 1.5);
  potting_environment("aether:enchanted_gravitite", "aether", 1.5);
  potting_environment("undergarden:forgotten_block", "allenv", 1.75);
  potting_environment("cagedmobs:star_infused_netherite_block", "allenv", 2.0);
  //#endregion
  //#region - Creative Upgrade
  e.shaped("cagedmobs:creative_upgrade", ["A A", "BCB", "BDB"], {
    A: "createchromaticreturn:multiplite_tube",
    B: "cagedmobs:speed_iii_upgrade",
    C: "kubejs:void_steel_gear",
    D: "aquaculture:neptunium_ingot"
  });
  //#endregion
  //#region - Mob Cages
  let potting_cagedmobs = (entity, environment, waterlogged, tier, loots) => {
    // Contante d'optimisation de l'attribution des loots (Crédit to XenoArea)
    const results = loots.map(loot => {
      return {
        chance: 1,
        output: {
          item: loot
        },
        minAmount: 1,
        maxAmount: 2
      };
    });

    e.custom({
      type: "cagedmobs:entity_data",
      entity: entity,
      samplerTier: tier,
      environments: [environment, "allenv"],
      growTicks: 1200,
      requiresWater: waterlogged,
      results: results
    });
  };
  //#region - Minecraft
  potting_cagedmobs("minecraft:allay", "overworld", false, 1, ["mastersword:green_rupee"]);
  // potting_cagedmobs("minecraft:axolotl", "sea", true, 1, [])
  // potting_cagedmobs("minecraft:bat", "overworld", false, 1, [])
  potting_cagedmobs("minecraft:bee", "overworld", false, 1, ["minecraft:honeycomb", "cagedmobs:honey_drop"]);
  potting_cagedmobs("minecraft:blaze", "nether", false, 2, ["minecraft:blaze_rod"]);
  // potting_cagedmobs("minecraft:camel", "overworld", false, 1, [])
  potting_cagedmobs("minecraft:cat", "overworld", false, 1, ["minecraft:string"]);
  potting_cagedmobs("minecraft:cave_spider", "overworld", false, 2, ["minecraft:string", "minecraft:spider_eye"]);
  potting_cagedmobs("minecraft:chicken", "overworld", false, 1, ["minecraft:feather", "minecraft:chicken", "minecraft:egg", "minecraft:chicken_spawn_egg"]);
  potting_cagedmobs("minecraft:cod", "sea", true, 1, ["minecraft:cod", "minecraft:bone_meal"]);
  potting_cagedmobs("minecraft:cow", "overworld", false, 1, ["minecraft:leather", "minecraft:beef", "cagedmobs:milk_drop"]);
  potting_cagedmobs("minecraft:creeper", "overworld", false, 2, ["minecraft:gunpowder"]);
  potting_cagedmobs("minecraft:dolphin", "sea", true, 1, ["minecraft:cod"]);
  potting_cagedmobs("minecraft:donkey", "overworld", false, 1, ["minecraft:leather"]);
  potting_cagedmobs("minecraft:drowned", "sea", true, 1, ["minecraft:rotten_flesh", "minecraft:copper_ingot", "minecraft:nautilus_shell", "minecraft:trident", "minecraft:fishing_rod"]);
  potting_cagedmobs("minecraft:elder_guardian", "sea", true, 3, ["oceansdelight:elder_guardian_slab", "cagedmobs:sponge_fragment"]);
  potting_cagedmobs("minecraft:ender_dragon", "end", false, 3, ["ends_delight:dragon_tooth", "ends_delight:dragon_leg", "cagedmobs:dragon_scale", "minecraft:dragon_head"]);
  potting_cagedmobs("minecraft:enderman", "end", false, 2, ["minecraft:ender_pearl", "endersdelight:enderman_sight", "ends_delight:enderman_gristle"]);
  potting_cagedmobs("minecraft:endermite", "end", false, 2, ["minecraft:end_stone", "ends_delight:raw_ender_mite_meat", "endersdelight:mite_crust"]);
  potting_cagedmobs("minecraft:evoker", "overworld", false, 2, ["minecraft:emerald", "minecraft:totem_of_undying"]);
  // potting_cagedmobs("minecraft:fox", "overworld", false, 1, [])
  potting_cagedmobs("minecraft:frog", "overworld", false, 1, ["minecraft:pearlescent_froglight", "minecraft:verdant_froglight", "minecraft:ochre_froglight"]);
  potting_cagedmobs("minecraft:ghast", "nether", false, 2, ["minecraft:ghast_tear", "minecraft:gunpowder"]);
  potting_cagedmobs("minecraft:glow_squid", "sea", true, 1, ["minecraft:glow_ink_sac"]);
  // Ligne de la minecraft:goat, le craft se trouve plus bas car il est spécial
  potting_cagedmobs("minecraft:guardian", "sea", true, 2, ["oceansdelight:guardian"]);
  potting_cagedmobs("minecraft:hoglin", "nether", false, 2, ["minecraft:leather", "minecraft:porkchop", "farmersdelight:ham", "nethersdelight:hoglin_loin", "nethersdelight:hoglin_ear", "nethersdelight:hoglin_hide"]);
  potting_cagedmobs("minecraft:horse", "overworld", false, 1, ["minecraft:leather"]);
  potting_cagedmobs("minecraft:husk", "overworld", false, 2, ["minecraft:rotten_flesh", "minecraft:iron_ingot", "minecraft:carrot", "minecraft:potato", "minecraft:baked_potato"]);
  potting_cagedmobs("minecraft:iron_golem", "overworld", false, 2, ["minecraft:iron_ingot", "minecraft:poppy"]);
  potting_cagedmobs("minecraft:llama", "overworld", false, 1, ["minecraft:leather"]);
  potting_cagedmobs("minecraft:magma_cube", "nether", false, 2, ["minecraft:magma_cream"]);
  potting_cagedmobs("minecraft:mooshroom", "overworld", false, 1, ["minecraft:leather", "minecraft:beef"]);
  potting_cagedmobs("minecraft:mule", "overworld", false, 1, ["minecraft:leather"]);
  // potting_cagedmobs("minecraft:ocelot", "overworld", false, 1, [])
  potting_cagedmobs("minecraft:panda", "overworld", false, 1, ["minecraft:bamboo"]);
  potting_cagedmobs("minecraft:parrot", "overworld", false, 1, ["minecraft:feather"]);
  potting_cagedmobs("minecraft:phantom", "overworld", false, 1, ["minecraft:phantom_membrane"]);
  potting_cagedmobs("minecraft:pig", "overworld", false, 1, ["minecraft:porkchop", "farmersdelight:ham"]);
  // potting_cagedmobs("minecraft:piglin", "nether", false, 1, [])
  // potting_cagedmobs("minecraft:piglin_brute", "nether", false, 2, [])
  potting_cagedmobs("minecraft:pillager", "overworld", false, 2, ["minecraft:tripwire_hook"]);
  potting_cagedmobs("minecraft:polar_bear", "overworld", false, 1, ["minecraft:cod", "minecraft:salmon"]);
  potting_cagedmobs("minecraft:pufferfish", "sea", true, 1, ["minecraft:pufferfish", "minecraft:bone_meal"]);
  potting_cagedmobs("minecraft:rabbit", "overworld", false, 1, ["minecraft:rabbit_hide", "minecraft:rabbit", "minecraft:rabbit_foot"]);
  potting_cagedmobs("minecraft:ravager", "overworld", false, 2, ["minecraft:saddle"]);
  potting_cagedmobs("minecraft:salmon", "sea", true, 1, ["minecraft:salmon", "minecraft:bone_meal"]);
  potting_cagedmobs("minecraft:sheep", "overworld", false, 1, ["minecraft:mutton", "minecraft:white_wool", "minecraft:light_gray_wool", "minecraft:gray_wool", "minecraft:black_wool", "minecraft:brown_wool", "minecraft:red_wool", "minecraft:orange_wool", "minecraft:yellow_wool", "minecraft:lime_wool", "minecraft:green_wool", "minecraft:cyan_wool", "minecraft:light_blue_wool", "minecraft:blue_wool", "minecraft:purple_wool", "minecraft:magenta_wool", "minecraft:pink_wool"]);
  potting_cagedmobs("minecraft:shulker", "end", false, 2, ["minecraft:shulker_shell", "ends_delight:shulker_meat", "endersdelight:shulker_mollusk", "createcasing:chorium_ingot"]);
  potting_cagedmobs("minecraft:silverfish", "overworld", false, 2, ["minecraft:gravel"]);
  potting_cagedmobs("minecraft:skeleton_horse", "overworld", false, 1, ["minecraft:bone"]);
  potting_cagedmobs("minecraft:skeleton", "overworld", false, 2, ["minecraft:bone", "minecraft:arrow", "minecraft:bow"]);
  potting_cagedmobs("minecraft:slime", "overworld", false, 2, ["minecraft:slime_ball"]);
  potting_cagedmobs("minecraft:sniffer", "overworld", false, 1, ["minecraft:pitcher_pod", "minecraft:torchflower_seeds", "minecraft:sniffer_egg"]);
  potting_cagedmobs("minecraft:snow_golem", "overworld", false, 1, ["minecraft:snowball"]);
  potting_cagedmobs("minecraft:spider", "overworld", false, 2, ["minecraft:string", "minecraft:spider_eye"]);
  potting_cagedmobs("minecraft:squid", "sea", true, 1, ["minecraft:ink_sac", "oceansdelight:tentacles"]);
  potting_cagedmobs("minecraft:stray", "overworld", false, 2, ["minecraft:bone", "minecraft:arrow", "minecraft:bow"]);
  potting_cagedmobs("minecraft:strider", "nether", false, 1, ["minecraft:string", "nethersdelight:strider_slice"]);
  // potting_cagedmobs("minecraft:tadpole", "overworld", true, 1, [])
  potting_cagedmobs("minecraft:trader_llama", "overworld", false, 1, ["minecraft:leather"]);
  potting_cagedmobs("minecraft:tropical_fish", "sea", true, 1, ["minecraft:tropical_fish", "minecraft:bone_meal"]);
  potting_cagedmobs("minecraft:turtle", "sea", true, 1, ["minecraft:seagrass", "minecraft:scute", "minecraft:turtle_egg"]);
  // potting_cagedmobs("minecraft:vex", "overworld", false, 2, [])
  // potting_cagedmobs("minecraft:villager", "overworld", false, 1, [])
  potting_cagedmobs("minecraft:vindicator", "overworld", false, 2, ["minecraft:emerald"]);
  // potting_cagedmobs("minecraft:wandering_trader", "overworld", false, 1, [])
  potting_cagedmobs("minecraft:warden", "overworld", false, 3, ["minecraft:sculk_catalyst", "apotheosis:warden_tendril", "deeperdarker:heart_of_the_deep"]);
  potting_cagedmobs("minecraft:witch", "overworld", false, 2, ["minecraft:glass_bottle", "minecraft:glowstone_dust", "minecraft:redstone", "minecraft:gunpowder", "minecraft:sugar"]);
  potting_cagedmobs("minecraft:wither_skeleton", "nether", false, 2, ["minecraft:coal", "minecraft:bone", "minecraft:wither_skeleton_skull"]);
  potting_cagedmobs("minecraft:wither", "nether", false, 3, ["cagedmobs:nether_star_fragment", "minecraft:wither_rose"]);
  // potting_cagedmobs("minecraft:wolf", "overworld", false, 1, [])
  potting_cagedmobs("minecraft:zoglin", "nether", false, 2, ["minecraft:rotten_flesh"]);
  potting_cagedmobs("minecraft:zombie_horse", "overworld", false, 1, ["minecraft:rotten_flesh"]);
  potting_cagedmobs("minecraft:zombie_villager", "overworld", false, 2, ["minecraft:rotten_flesh", "minecraft:iron_ingot", "minecraft:carrot", "minecraft:potato", "minecraft:baked_potato"]);
  potting_cagedmobs("minecraft:zombie", "overworld", false, 2, ["minecraft:rotten_flesh", "minecraft:iron_ingot", "minecraft:carrot", "minecraft:potato", "minecraft:baked_potato"]);
  potting_cagedmobs("minecraft:zombified_piglin", "nether", false, 2, ["minecraft:rotten_flesh", "minecraft:gold_nugget", "minecraft:gold_ingot"]);
  //#endregion
  //#region - Aquaculture
  potting_cagedmobs("aquaculture:arapaima", "sea", true, 1, ["aquaculture:arapaima"]);
  potting_cagedmobs("aquaculture:arrau_turtle", "sea", true, 1, ["aquaculture:arrau_turtle"]);
  potting_cagedmobs("aquaculture:atlantic_cod", "sea", true, 1, ["aquaculture:atlantic_cod"]);
  potting_cagedmobs("aquaculture:atlantic_halibut", "sea", true, 1, ["aquaculture:atlantic_halibut"]);
  potting_cagedmobs("aquaculture:atlantic_herring", "sea", true, 1, ["aquaculture:atlantic_herring"]);
  potting_cagedmobs("aquaculture:bayad", "sea", true, 1, ["aquaculture:bayad"]);
  potting_cagedmobs("aquaculture:blackfish", "sea", true, 1, ["aquaculture:blackfish"]);
  potting_cagedmobs("aquaculture:bluegill", "sea", true, 1, ["aquaculture:bluegill"]);
  potting_cagedmobs("aquaculture:boulti", "sea", true, 1, ["aquaculture:boulti"]);
  potting_cagedmobs("aquaculture:box_turtle", "sea", true, 1, ["aquaculture:box_turtle"]);
  potting_cagedmobs("aquaculture:brown_shrooma", "sea", true, 1, ["aquaculture:brown_shrooma"]);
  potting_cagedmobs("aquaculture:brown_trout", "sea", true, 1, ["aquaculture:brown_trout"]);
  potting_cagedmobs("aquaculture:capitaine", "sea", true, 1, ["aquaculture:capitaine"]);
  potting_cagedmobs("aquaculture:carp", "sea", true, 1, ["aquaculture:carp"]);
  potting_cagedmobs("aquaculture:catfish", "sea", true, 1, ["aquaculture:catfish"]);
  potting_cagedmobs("aquaculture:gar", "sea", true, 1, ["aquaculture:gar"]);
  potting_cagedmobs("aquaculture:jellyfish", "sea", true, 1, ["aquaculture:jellyfish"]);
  potting_cagedmobs("aquaculture:minnow", "sea", true, 1, ["aquaculture:minnow"]);
  potting_cagedmobs("aquaculture:muskellunge", "sea", true, 1, ["aquaculture:muskellunge"]);
  potting_cagedmobs("aquaculture:pacific_halibut", "sea", true, 1, ["aquaculture:pacific_halibut"]);
  potting_cagedmobs("aquaculture:perch", "sea", true, 1, ["aquaculture:perch"]);
  potting_cagedmobs("aquaculture:pink_salmon", "sea", true, 1, ["aquaculture:pink_salmon"]);
  potting_cagedmobs("aquaculture:piranha", "sea", true, 1, ["aquaculture:piranha"]);
  potting_cagedmobs("aquaculture:pollock", "sea", true, 1, ["aquaculture:pollock"]);
  potting_cagedmobs("aquaculture:rainbow_trout", "sea", true, 1, ["aquaculture:rainbow_trout"]);
  potting_cagedmobs("aquaculture:red_grouper", "sea", true, 1, ["aquaculture:red_grouper"]);
  potting_cagedmobs("aquaculture:red_shrooma", "sea", true, 1, ["aquaculture:red_shrooma"]);
  potting_cagedmobs("aquaculture:smallmouth_bass", "sea", true, 1, ["aquaculture:smallmouth_bass"]);
  potting_cagedmobs("aquaculture:starshell_turtle", "sea", true, 1, ["aquaculture:starshell_turtle"]);
  potting_cagedmobs("aquaculture:synodontis", "sea", true, 1, ["aquaculture:synodontis"]);
  potting_cagedmobs("aquaculture:tambaqui", "sea", true, 1, ["aquaculture:tambaqui"]);
  potting_cagedmobs("aquaculture:tuna", "sea", true, 1, ["aquaculture:tuna"]);
  //#endregion
  //#region - Alex's Caves
  potting_cagedmobs("alexscaves:atlatitan", "overworld", false, 2, ["alexscaves:heavy_bone", "alexscaves:dinosaur_chop"]);
  potting_cagedmobs("alexscaves:boundroid", "overworld", false, 2, ["alexscaves:heavyweight", "minecraft:chain"]);
  potting_cagedmobs("alexscaves:brainiac", "overworld", false, 2, ["alexscaves:green_soylent", "minecraft:rotten_flesh", "alexscaves:charred_remnant"]);
  potting_cagedmobs("alexscaves:candicorn", "overworld", false, 2, ["alexscaves:sweet_puff"]);
  potting_cagedmobs("alexscaves:caniac", "overworld", false, 2, ["alexscaves:candy_cane"]);
  potting_cagedmobs("alexscaves:caramel_cube", "overworld", false, 2, ["alexscaves:caramel"]);
  potting_cagedmobs("alexscaves:corrodent", "overworld", false, 2, ["alexscaves:corrodent_teeth", "minecraft:coarse_dirt"]);
  // potting_cagedmobs("alexscaves:deep_one", "sea", true, 2, [])
  // potting_cagedmobs("alexscaves:deep_one_knight", "sea", true, 2, [])
  // potting_cagedmobs("alexscaves:deep_one_mage", "sea", true, 2, [])
  potting_cagedmobs("alexscaves:ferrouslime", "overworld", false, 2, ["alexscaves:ferrouslime_ball"]);
  potting_cagedmobs("alexscaves:forsaken", "overworld", false, 2, ["alexscaves:pure_darkness"]);
  potting_cagedmobs("alexscaves:gammaroach", "overworld", false, 2, ["alexscaves:toxic_paste"]);
  potting_cagedmobs("alexscaves:gingerbread_man", "overworld", false, 2, ["alexscaves:gingerbread_crumbs"]);
  potting_cagedmobs("alexscaves:gloomoth", "overworld", false, 1, ["alexscaves:moth_dust"]);
  potting_cagedmobs("alexscaves:gossamer_worm", "overworld", false, 2, ["alexscaves:bioluminesscence"]);
  potting_cagedmobs("alexscaves:grottoceratops", "overworld", false, 2, ["alexscaves:tough_hide", "alexscaves:dinosaur_chop"]);
  potting_cagedmobs("alexscaves:gum_worm", "overworld", false, 2, ["alexscaves:sweet_tooth"]);
  potting_cagedmobs("alexscaves:gumbeeper", "overworld", false, 2, ["alexscaves:gumball_pile", "minecraft:gunpowder"]);
  potting_cagedmobs("alexscaves:gummy_bear", "overworld", false, 2, ["alexscaves:gelatin_blue", "alexscaves:gelatin_green", "alexscaves:gelatin_yellow", "alexscaves:gelatin_red", "alexscaves:gelatin_pink", "alexscaves:sweetish_fish_blue", "alexscaves:sweetish_fish_green", "alexscaves:sweetish_fish_yellow", "alexscaves:sweetish_fish_red", "alexscaves:sweetish_fish_pink"]);
  potting_cagedmobs("alexscaves:hullbreaker", "overworld", false, 2, ["alexscaves:sea_glass_shards", "minecraft:copper_ingot", "alexscaves:enigmatic_engine"]);
  potting_cagedmobs("alexscaves:lanternfish", "overworld", false, 1, ["alexscaves:lanternfish"]);
  potting_cagedmobs("alexscaves:licowitch", "overworld", false, 2, ["alexscaves:radiant_essence", "alexscaves:sugar_staff", "alexscaves:vanilla_ice_cream_scoop", "alexscaves:chocolate_ice_cream_scoop", "alexscaves:sweetberry_ice_cream_scoop"]);
  potting_cagedmobs("alexscaves:luxtructosaurus", "overworld", false, 3, ["alexscaves:tectonic_shard"]);
  potting_cagedmobs("alexscaves:magnetron", "overworld", false, 2, ["alexscaves:heart_of_iron"]);
  potting_cagedmobs("alexscaves:mine_guardian", "overworld", false, 2, ["alexscaves:depth_charge"]);
  potting_cagedmobs("alexscaves:notor", "overworld", false, 2, ["alexscaves:notor_gizmo"]);
  potting_cagedmobs("alexscaves:nucleeper", "overworld", false, 2, ["alexscaves:fissile_core", "minecraft:gunpowder"]);
  potting_cagedmobs("alexscaves:radgill", "overworld", false, 2, ["alexscaves:radgill"]);
  potting_cagedmobs("alexscaves:raycat", "overworld", false, 2, ["minecraft:bone"]);
  potting_cagedmobs("alexscaves:relicheirus", "overworld", false, 2, ["alexscaves:heavy_bone", "alexscaves:dinosaur_chop", "minecraft:feather"]);
  potting_cagedmobs("alexscaves:sea_pig", "overworld", false, 1, ["alexscaves:sea_pig"]);
  // potting_cagedmobs("alexscaves:subterranodon", "overworld", false, 1, [])
  potting_cagedmobs("alexscaves:sweetish_fish", "overworld", true, 1, ["alexscaves:sweetish_fish_red"]);
  potting_cagedmobs("alexscaves:teletor", "overworld", false, 2, ["alexscaves:raw_azure_neodymium", "alexscaves:raw_scarlet_neodymium", "alexscaves:telecore"]);
  potting_cagedmobs("alexscaves:tremorsaurus", "overworld", false, 2, ["alexscaves:heavy_bone", "alexscaves:dinosaur_chop"]);
  potting_cagedmobs("alexscaves:tremorzilla", "overworld", false, 2, ["mekanism:ingot_uranium", "mekanism:nugget_uranium"]);
  potting_cagedmobs("alexscaves:trilocaris", "overworld", false, 1, ["alexscaves:trilocaris_tail"]);
  potting_cagedmobs("alexscaves:tripodfish", "overworld", false, 1, ["alexscaves:tripodfish"]);
  potting_cagedmobs("alexscaves:underzealot", "overworld", false, 2, ["alexscaves:dark_tatters"]);
  // potting_cagedmobs("alexscaves:vallumraptor", "overworld", false, 1, [])
  potting_cagedmobs("alexscaves:vesper", "overworld", false, 2, ["alexscaves:guano", "alexscaves:vesper_wing"]);
  potting_cagedmobs("alexscaves:watcher", "overworld", false, 2, ["alexscaves:dark_tatters", "alexscaves:occult_gem"]);
  //#endregion
  //#region - Alex's Mobs
  potting_cagedmobs("alexsmobs:alligator_snapping_turtle", "sea", true, 1, ["alexsmobs:spiked_scute", "minecraft:seagrass"]);
  // potting_cagedmobs("alexsmobs:anaconda", "overworld", false, 1, [])
  // potting_cagedmobs("alexsmobs:anteater", "overworld", false, 1, [])
  potting_cagedmobs("alexsmobs:bald_eagle", "overworld", false, 1, ["minecraft:feather"]);
  potting_cagedmobs("alexsmobs:banana_slug", "overworld", false, 1, ["alexsmobs:banana_slug_slime"]);
  potting_cagedmobs("alexsmobs:bison", "overworld", false, 2, ["alexsmobs:bison_fur", "minecraft:beef"]);
  potting_cagedmobs("alexsmobs:blobfish", "sea", true, 1, ["alexsmobs:blobfish", "minecraft:bone_meal"]);
  potting_cagedmobs("alexsmobs:blue_jay", "overworld", false, 1, ["minecraft:feather"]);
  potting_cagedmobs("alexsmobs:bone_serpent", "nether", false, 2, ["alexsmobs:bone_serpent_tooth", "minecraft:bone_block", "minecraft:bone", "minecraft:quartz"]);
  potting_cagedmobs("alexsmobs:bunfungus", "overworld", false, 1, ["minecraft:red_mushroom"]);
  potting_cagedmobs("alexsmobs:cachalot_whale", "sea", true, 1, ["alexsmobs:cachalot_whale_tooth", "alexsmobs:ambergris"]);
  // potting_cagedmobs("alexsmobs:caiman", "sea", true, 1, [])
  potting_cagedmobs("alexsmobs:capuchin_monkey", "overworld", false, 1, ["alexsmobs:banana_peel"]);
  potting_cagedmobs("alexsmobs:catfish", "sea", true, 1, ["alexsmobs:raw_catfish"]);
  potting_cagedmobs("alexsmobs:centipede_body", "overworld", false, 2, ["alexsmobs:centipede_leg"]);
  potting_cagedmobs("alexsmobs:centipede_head", "overworld", false, 2, ["alexsmobs:centipede_leg"]);
  potting_cagedmobs("alexsmobs:centipede_tail", "overworld", false, 2, ["alexsmobs:centipede_leg"]);
  potting_cagedmobs("alexsmobs:cockroach", "overworld", false, 1, ["alexsmobs:cockroach_wing_fragment", "alexsmobs:cockroach_ootheca"]);
  potting_cagedmobs("alexsmobs:comb_jelly", "sea", true, 1, ["alexsmobs:rainbow_jelly"]);
  potting_cagedmobs("alexsmobs:cosmaw", "end", false, 2, ["minecraft:chorus_fruit"]);
  potting_cagedmobs("alexsmobs:cosmic_cod", "overworld", false, 1, ["alexsmobs:cosmic_cod", "minecraft:bone_meal"]);
  potting_cagedmobs("alexsmobs:crimson_mosquito", "nether", false, 2, ["alexsmobs:blood_sac", "alexsmobs:mosquito_proboscis"]);
  potting_cagedmobs("alexsmobs:crocodile", "sea", true, 2, ["alexsmobs:crocodile_scute", "alexsmobs:crocodile_egg"]);
  potting_cagedmobs("alexsmobs:crow", "overworld", false, 1, ["eidolon:raven_feather"]);
  // potting_cagedmobs("alexsmobs:devils_hole_pupfish", "sea", true, 1, [])
  potting_cagedmobs("alexsmobs:dropbear", "overworld", false, 2, ["alexsmobs:dropbear_claw"]);
  potting_cagedmobs("alexsmobs:elephant", "overworld", false, 1, ["alexsmobs:acacia_blossom", "minecraft:acacia_leaves"]);
  potting_cagedmobs("alexsmobs:emu", "overworld", false, 1, ["alexsmobs:emu_feather", "alexsmobs:emu_egg", "minecraft:feather"]);
  potting_cagedmobs("alexsmobs:endergrade", "end", false, 1, ["minecraft:chorus_fruit"]);
  potting_cagedmobs("alexsmobs:enderiophage", "end", false, 2, ["alexsmobs:capsid", "minecraft:ender_eye"]);
  potting_cagedmobs("alexsmobs:farseer", "overworld", false, 3, ["alexsmobs:farseer_arm"]);
  potting_cagedmobs("alexsmobs:flutter", "overworld", false, 2, ["minecraft:spore_blossom"]);
  potting_cagedmobs("alexsmobs:fly", "overworld", false, 1, ["alexsmobs:maggot"]);
  potting_cagedmobs("alexsmobs:flying_fish", "sea", true, 1, ["alexsmobs:flying_fish", "minecraft:bone_meal"]);
  potting_cagedmobs("alexsmobs:frilled_shark", "sea", true, 2, ["alexsmobs:serrated_shark_tooth"]);
  potting_cagedmobs("alexsmobs:froststalker", "overworld", false, 2, ["alexsmobs:froststalker_horn", "minecraft:packed_ice", "minecraft:blue_ice"]);
  potting_cagedmobs("alexsmobs:gazelle", "overworld", false, 1, ["alexsmobs:gazelle_horn", "minecraft:mutton"]);
  // potting_cagedmobs("alexsmobs:gelada_monkey", "overworld", false, 1, [])
  potting_cagedmobs("alexsmobs:giant_squid", "sea", true, 1, ["minecraft:ink_sac"]);
  potting_cagedmobs("alexsmobs:gorilla", "overworld", false, 2, ["alexsmobs:banana"]);
  potting_cagedmobs("alexsmobs:grizzly_bear", "overworld", false, 2, ["alexsmobs:bear_fur", "alexsmobs:bear_dust"]);
  potting_cagedmobs("alexsmobs:guster", "overworld", false, 2, ["alexsmobs:guster_eye", "minecraft:sand", "minecraft:red_sand", "minecraft:soul_sand"]);
  potting_cagedmobs("alexsmobs:hammerhead_shark", "sea", true, 2, ["alexsmobs:serrated_shark_tooth"]);
  // potting_cagedmobs("alexsmobs:hummingbird", "overworld", false, 1, [])
  // potting_cagedmobs("alexsmobs:jerboa", "overworld", false, 1, [])
  potting_cagedmobs("alexsmobs:kangaroo", "overworld", false, 1, ["alexsmobs:kangaroo_hide", "alexsmobs:kangaroo_meat"]);
  potting_cagedmobs("alexsmobs:komodo_dragon", "overworld", false, 2, ["alexsmobs:komodo_spit"]);
  potting_cagedmobs("alexsmobs:laviathan", "nether", false, 2, ["minecraft:magma_block", "minecraft:blackstone", "minecraft:obsidian"]);
  potting_cagedmobs("alexsmobs:leafcutter_ant", "overworld", false, 1, ["alexsmobs:leafcutter_ant_pupa", "alexsmobs:gongylidia", "minecraft:oak_sapling", "minecraft:spruce_sapling", "minecraft:birch_sapling", "minecraft:jungle_sapling", "minecraft:acacia_sapling", "minecraft:dark_oak_sapling"]);
  potting_cagedmobs("alexsmobs:lobster", "sea", true, 1, ["alexsmobs:lobster_tail"]);
  // potting_cagedmobs("alexsmobs:maned_wolf", "overworld", false, 1, [])
  // potting_cagedmobs("alexsmobs:mantis_shrimp", "sea", true, 1, [])
  potting_cagedmobs("alexsmobs:mimic_octopus", "sea", true, 2, ["minecraft:ink_sac"]);
  potting_cagedmobs("alexsmobs:mimicube", "end", false, 3, ["alexsmobs:mimicream", "minecraft:slime_ball"]);
  potting_cagedmobs("alexsmobs:moose", "overworld", false, 1, ["alexsmobs:moose_antler", "alexsmobs:moose_ribs"]);
  potting_cagedmobs("alexsmobs:mudskipper", "sea", true, 1, ["minecraft:tropical_fish"]);
  potting_cagedmobs("alexsmobs:mungus", "overworld", false, 2, ["minecraft:red_mushroom", "minecraft:brown_mushroom", "minecraft:crimson_fungus", "minecraft:warped_fungus"]);
  potting_cagedmobs("alexsmobs:murmur", "overworld", false, 2, ["alexsmobs:elastic_tendon", "minecraft:red_wool"]);
  // potting_cagedmobs("alexsmobs:orca", "sea", true, 1, [])
  potting_cagedmobs("alexsmobs:platypus", "overworld", false, 2, ["alexsmobs:maggot", "minecraft:clay_ball", "alexsmobs:fedora"]);
  potting_cagedmobs("alexsmobs:potoo", "overworld", false, 1, ["minecraft:feather"]);
  potting_cagedmobs("alexsmobs:raccoon", "overworld", false, 1, ["alexsmobs:raccoon_tail"]);
  // potting_cagedmobs("alexsmobs:rain_frog", "overworld", false, 1, [])
  potting_cagedmobs("alexsmobs:rattlesnake", "overworld", false, 1, ["alexsmobs:rattlesnake_rattle"]);
  // potting_cagedmobs("alexsmobs:rhinoceros", "overworld", false, 1, [])
  potting_cagedmobs("alexsmobs:roadrunner", "overworld", false, 1, ["alexsmobs:roadrunner_feather", "minecraft:feather"]);
  potting_cagedmobs("alexsmobs:rocky_roller", "overworld", false, 2, ["alexsmobs:rocky_shell", "minecraft:pointed_dripstone", "minecraft:tuff"]);
  potting_cagedmobs("alexsmobs:seagull", "overworld", false, 1, ["minecraft:feather"]);
  potting_cagedmobs("alexsmobs:seal", "sea", true, 1, ["minecraft:kelp", "minecraft:nautilus_shell", "minecraft:scute", "minecraft:sand"]);
  potting_cagedmobs("alexsmobs:shoebill", "overworld", false, 1, ["minecraft:feather"]);
  potting_cagedmobs("alexsmobs:skelewag", "sea", true, 2, ["alexsmobs:fish_bones", "minecraft:bone"]);
  potting_cagedmobs("alexsmobs:skreecher", "overworld", false, 2, ["alexsmobs:skreecher_soul"]);
  // potting_cagedmobs("alexsmobs:skunk", "overworld", false, 1, [])
  // potting_cagedmobs("alexsmobs:snow_leopard", "overworld", false, 1, [])
  potting_cagedmobs("alexsmobs:soul_vulture", "nether", false, 2, ["minecraft:coal", "minecraft:bone", "alexsmobs:soul_heart"]);
  // potting_cagedmobs("alexsmobs:spectre", "overworld", false, 1, [])
  potting_cagedmobs("alexsmobs:straddler", "nether", false, 2, ["alexsmobs:straddlite", "minecraft:basalt"]);
  // potting_cagedmobs("alexsmobs:stradpole", "nether", false, 1, [])
  // potting_cagedmobs("alexsmobs:sugar_glider", "overworld", false, 1, [])
  potting_cagedmobs("alexsmobs:sunbird", "nether", false, 2, ["minecraft:fire_charge"]);
  potting_cagedmobs("alexsmobs:tarantula_hawk", "overworld", false, 1, ["alexsmobs:tarantula_hawk_wing_fragment"]);
  // potting_cagedmobs("alexsmobs:tasmanian_devil", "overworld", false, 1, [])
  // potting_cagedmobs("alexsmobs:terrapin", "overworld", false, 1, [])
  // potting_cagedmobs("alexsmobs:tiger", "overworld", false, 1, [])
  potting_cagedmobs("alexsmobs:toucan", "overworld", false, 1, ["minecraft:feather"]);
  // potting_cagedmobs("alexsmobs:triops", "overworld", false, 1, [])
  potting_cagedmobs("alexsmobs:tusklin", "overworld", false, 2, ["minecraft:snowball", "minecraft:porkchop"]);
  // potting_cagedmobs("alexsmobs:underminer", "overworld", false, 1, [])
  potting_cagedmobs("alexsmobs:void_worm", "end", false, 3, ["alexsmobs:void_worm_eye", "alexsmobs:void_worm_mandible", "createutilities:void_steel_ingot"]);
  potting_cagedmobs("alexsmobs:warped_mosco", "nether", false, 3, ["alexsmobs:warped_muscle", "alexsmobs:hemolymph_sac"]);
  potting_cagedmobs("alexsmobs:warped_toad", "nether", false, 2, ["minecraft:shroomlight", "minecraft:nether_wart"]);
  //#endregion
  //#region - The Aether
  potting_cagedmobs("aether:aechor_plant", "aether", false, 2, ["aether:aechor_petal"]);
  potting_cagedmobs("aether:aerbunny", "aether", false, 1, ["minecraft:string"]);
  // potting_cagedmobs("aether:aerwhale", "aether", false, 1, [])
  potting_cagedmobs("aether:blue_swet", "aether", false, 2, ["aether:swet_ball", "aether:blue_aercloud"]);
  potting_cagedmobs("aether:cockatrice", "aether", false, 1, ["minecraft:feather"]);
  // potting_cagedmobs("aether:evil_whirlwind", "aether", false, 1, [])
  // potting_cagedmobs("aether:fire_minion", "aether", false, 1, [])
  potting_cagedmobs("aether:flying_cow", "aether", false, 1, ["minecraft:beef", "minecraft:leather"]);
  potting_cagedmobs("aether:golden_swet", "aether", false, 2, ["minecraft:glowstone"]);
  potting_cagedmobs("aether:mimic", "aether", false, 2, ["minecraft:chest", "aether:golden_dart", "aether:ambrosium_torch", "aether:ambrosium_shard", "aether:golden_amber", "aether:zanite_gemstone"]);
  potting_cagedmobs("aether:moa", "aether", false, 2, ["aether:holystone", "minecraft:feather"]);
  potting_cagedmobs("aether:phyg", "aether", false, 1, ["minecraft:porkchop", "minecraft:feather"]);
  potting_cagedmobs("aether:sentry", "aether", false, 2, ["aether:carved_stone", "aether:sentry_stone"]);
  potting_cagedmobs("aether:sheepuff", "aether", false, 1, ["minecraft:mutton", "minecraft:white_wool", "minecraft:light_gray_wool", "minecraft:gray_wool", "minecraft:black_wool", "minecraft:brown_wool", "minecraft:red_wool", "minecraft:orange_wool", "minecraft:yellow_wool", "minecraft:lime_wool", "minecraft:green_wool", "minecraft:cyan_wool", "minecraft:light_blue_wool", "minecraft:blue_wool", "minecraft:purple_wool", "minecraft:magenta_wool", "minecraft:pink_wool"]);
  potting_cagedmobs("aether:slider", "aether", false, 2, ["aether:carved_stone", "aether:bronze_dungeon_key"]);
  potting_cagedmobs("aether:sun_spirit", "aether", false, 2, ["aether:sun_altar", "aether:gold_dungeon_key"]);
  potting_cagedmobs("aether:valkyrie_queen", "aether", false, 3, ["aether:silver_dungeon_key"]);
  potting_cagedmobs("aether:valkyrie", "aether", false, 2, ["aether:victory_medal"]);
  // potting_cagedmobs("aether:whirlwind", "aether", false, 1, [])
  potting_cagedmobs("aether:zephyr", "aether", false, 1, ["aether:cold_aercloud"]);
  //#endregion
  //#region - Ancient Aether
  potting_cagedmobs("ancient_aether:aeronautic_leaper", "aether", false, 2, ["ancient_aether:corrupted_aeronautic_stone"]);
  potting_cagedmobs("ancient_aether:festive_swet", "aether", false, 2, ["aether:swet_ball", "minecraft:sugar", "aether:gingerbread_man", "aether:candy_cane"]);
  potting_cagedmobs("ancient_aether:fluffalo", "aether", false, 1, ["ancient_aether:fluffalo_wool", "minecraft:beef"]);
  potting_cagedmobs("ancient_aether:slammroot", "aether", false, 2, ["ancient_aether:slammberry", "aether:aerogel"]);
  //#endregion
  //#region - Aether: Lost Content
  potting_cagedmobs("lost_aether_content:aerwhale_king", "aether", false, 3, ["aether:blue_aercloud", "lost_aether_content:platinum_key"]);
  //#endregion
  //#region - Realm RPG
  potting_cagedmobs("realmrpg_wyrms:ender_wyrm", "end", false, 2, ["minecraft:obsidian", "minecraft:dragon_breath", "minecraft:dragon_head"]);
  potting_cagedmobs("realmrpg_wyrms:red_wyrm", "nether", false, 2, ["minecraft:magma_block", "minecraft:blaze_powder"]);
  //#endregion
  //#region - Ars Elemental
  potting_cagedmobs("ars_elemental:flashing_weald_walker", "overworld", false, 1, ["ars_elemental:yellow_archwood_log", "ars_elemental:yellow_archwood_leaves", "ars_elemental:yellow_archwood_sapling"]);
  potting_cagedmobs("ars_elemental:siren_entity", "overworld", false, 1, ["ars_elemental:siren_shards"]);
  //#endregion
  //#region - Ars Nouveau
  potting_cagedmobs("ars_nouveau:amethyst_golem", "overworld", false, 1, ["minecraft:amethyst_shard"]);
  potting_cagedmobs("ars_nouveau:blazing_weald_walker", "overworld", false, 1, ["ars_nouveau:red_archwood_log", "ars_nouveau:red_archwood_leaves", "ars_nouveau:red_archwood_sapling"]);
  potting_cagedmobs("ars_nouveau:bookwyrm", "overworld", false, 1, ["minecraft:book"]);
  potting_cagedmobs("ars_nouveau:cascading_weald_walker", "overworld", false, 1, ["ars_nouveau:blue_archwood_log", "ars_nouveau:blue_archwood_leaves", "ars_nouveau:blue_archwood_sapling"]);
  potting_cagedmobs("ars_nouveau:drygmy", "overworld", false, 1, ["ars_nouveau:drygmy_shard"]);
  potting_cagedmobs("ars_nouveau:flourishing_weald_walker", "overworld", false, 1, ["ars_nouveau:green_archwood_log", "ars_nouveau:green_archwood_leaves", "ars_nouveau:green_archwood_sapling"]);
  potting_cagedmobs("ars_nouveau:starbuncle", "overworld", false, 1, ["ars_nouveau:starbuncle_shards", "ars_nouveau:source_gem"]);
  potting_cagedmobs("ars_nouveau:vexing_weald_walker", "overworld", false, 1, ["ars_nouveau:purple_archwood_log", "ars_nouveau:purple_archwood_leaves", "ars_nouveau:purple_archwood_sapling"]);
  potting_cagedmobs("ars_nouveau:whirlisprig", "overworld", false, 1, ["ars_nouveau:whirlisprig_shards"]);
  potting_cagedmobs("ars_nouveau:wilden_boss", "overworld", false, 3, ["ars_nouveau:wilden_spike", "ars_nouveau:wilden_horn", "ars_nouveau:wilden_wing", "ars_nouveau:wilden_tribute"]);
  potting_cagedmobs("ars_nouveau:wilden_guardian", "overworld", false, 2, ["ars_nouveau:wilden_spike"]);
  potting_cagedmobs("ars_nouveau:wilden_hunter", "overworld", false, 2, ["ars_nouveau:wilden_horn"]);
  potting_cagedmobs("ars_nouveau:wilden_stalker", "overworld", false, 2, ["ars_nouveau:wilden_wing"]);
  potting_cagedmobs("ars_nouveau:wixie", "overworld", false, 1, ["ars_nouveau:wixie_shards"]);
  //#endregion
  //#region - Netherite Wardens
  potting_cagedmobs("netherite_warden:netheritewarden", "overworld", false, 3, ["minecraft:netherite_ingot", "minecraft:heart_of_the_sea", "minecraft:nether_star", "minecraft:spawner", "minecraft:ancient_debris"]);
  //#endregion
  //#region - Creeper Overhaul
  potting_cagedmobs("creeperoverhaul:badlands_creeper", "overworld", false, 2, ["minecraft:gunpowder", "minecraft:gold_nugget"]);
  potting_cagedmobs("creeperoverhaul:bamboo_creeper", "overworld", false, 2, ["minecraft:bamboo"]);
  potting_cagedmobs("creeperoverhaul:beach_creeper", "overworld", false, 2, ["minecraft:gunpowder", "minecraft:sand", "minecraft:prismarine_shard", "minecraft:prismarine_crystals", "minecraft:seagrass", "minecraft:nautilus_shell"]);
  potting_cagedmobs("creeperoverhaul:cave_creeper", "overworld", false, 2, ["minecraft:gunpowder", "minecraft:stone", "minecraft:cobblestone", "minecraft:raw_iron", "minecraft:raw_gold", "minecraft:emerald", "minecraft:diamond"]);
  potting_cagedmobs("creeperoverhaul:dark_oak_creeper", "overworld", false, 2, ["minecraft:gunpowder", "minecraft:dark_oak_log", "minecraft:cobweb"]);
  potting_cagedmobs("creeperoverhaul:desert_creeper", "overworld", false, 2, ["minecraft:gunpowder", "minecraft:cactus"]);
  potting_cagedmobs("creeperoverhaul:dripstone_creeper", "overworld", false, 2, ["minecraft:gunpowder", "minecraft:pointed_dripstone"]);
  potting_cagedmobs("creeperoverhaul:hills_creeper", "overworld", false, 2, ["minecraft:gunpowder"]);
  potting_cagedmobs("creeperoverhaul:jungle_creeper", "overworld", false, 2, ["minecraft:gunpowder"]);
  potting_cagedmobs("creeperoverhaul:mushroom_creeper", "overworld", false, 2, ["minecraft:gunpowder"]);
  potting_cagedmobs("creeperoverhaul:ocean_creeper", "sea", true, 2, ["minecraft:cod", "minecraft:salmon"]);
  potting_cagedmobs("creeperoverhaul:savannah_creeper", "overworld", false, 2, ["minecraft:acacia_log"]);
  potting_cagedmobs("creeperoverhaul:snowy_creeper", "overworld", false, 2, ["minecraft:white_wool"]);
  potting_cagedmobs("creeperoverhaul:spruce_creeper", "overworld", false, 2, ["minecraft:gunpowder", "minecraft:spruce_log"]);
  potting_cagedmobs("creeperoverhaul:swamp_creeper", "overworld", false, 2, ["minecraft:gunpowder", "minecraft:bone"]);
  //#endregion
  //#region - Enderman Overhaul
  potting_cagedmobs("endermanoverhaul:badlands_enderman", "overworld", false, 2, ["minecraft:ender_pearl", "endermanoverhaul:tiny_skull", "endermanoverhaul:badlands_hood"]);
  potting_cagedmobs("endermanoverhaul:cave_enderman", "overworld", false, 2, ["minecraft:ender_pearl", "minecraft:coal", "minecraft:raw_iron", "minecraft:emerald"]);
  potting_cagedmobs("endermanoverhaul:coral_enderman", "sea", true, 2, ["endermanoverhaul:bubble_pearl"]);
  potting_cagedmobs("endermanoverhaul:crimson_forest_enderman", "overworld", false, 2, ["endermanoverhaul:crimson_pearl", "minecraft:crimson_fungus"]);
  potting_cagedmobs("endermanoverhaul:dark_oak_enderman", "overworld", false, 2, ["minecraft:ender_pearl"]);
  potting_cagedmobs("endermanoverhaul:desert_enderman", "overworld", false, 2, ["minecraft:ender_pearl", "minecraft:emerald"]);
  potting_cagedmobs("endermanoverhaul:end_enderman", "end", false, 2, ["endermanoverhaul:corrupted_pearl", "minecraft:chorus_fruit", "endermanoverhaul:enderman_tooth"]);
  potting_cagedmobs("endermanoverhaul:end_islands_enderman", "end", false, 2, ["endermanoverhaul:ancient_pearl", "minecraft:ender_pearl"]);
  potting_cagedmobs("endermanoverhaul:flower_fields_enderman", "overworld", false, 2, ["minecraft:ender_pearl"]);
  potting_cagedmobs("endermanoverhaul:ice_spikes_enderman", "overworld", false, 2, ["endermanoverhaul:icy_pearl", "minecraft:ender_pearl", "minecraft:packed_ice"]);
  potting_cagedmobs("endermanoverhaul:mushroom_fields_enderman", "overworld", false, 2, ["minecraft:ender_pearl", "minecraft:red_mushroom"]);
  potting_cagedmobs("endermanoverhaul:nether_wastes_enderman", "nether", false, 2, ["minecraft:ender_pearl", "minecraft:bone"]);
  potting_cagedmobs("endermanoverhaul:savanna_enderman", "overworld", false, 2, ["minecraft:ender_pearl", "minecraft:acacia_log", "endermanoverhaul:savanna_hood"]);
  // potting_cagedmobs("endermanoverhaul:scarab", "overworld", false, 2, [])
  potting_cagedmobs("endermanoverhaul:snowy_enderman", "overworld", false, 2, ["endermanoverhaul:icy_pearl", "minecraft:ender_pearl", "minecraft:snowball", "endermanoverhaul:snowy_hood"]);
  potting_cagedmobs("endermanoverhaul:soulsand_valley_enderman", "nether", false, 2, ["endermanoverhaul:soul_pearl", "minecraft:bone"]);
  // potting_cagedmobs("endermanoverhaul:spirit", "overworld", false, 2, [])
  potting_cagedmobs("endermanoverhaul:swamp_enderman", "overworld", false, 2, ["endermanoverhaul:summoner_pearl", "minecraft:ender_pearl"]);
  potting_cagedmobs("endermanoverhaul:warped_forest_enderman", "overworld", false, 2, ["endermanoverhaul:warped_pearl", "minecraft:warped_fungus"]);
  potting_cagedmobs("endermanoverhaul:windswept_hills_enderman", "overworld", false, 2, ["endermanoverhaul:summoner_pearl", "minecraft:ender_pearl"]);
  //#endregion
  //#region - Create
  // potting_cagedmobs("create_confectionery:little_gingerbread_man", "overworld", false, 1, []);
  potting_cagedmobs("create_sa:brass_cube_r", "overworld", false, 1, ["create:brass_ingot"]);
  potting_cagedmobs("railways:conductor", "overworld", false, 1, ["create:andesite_alloy"]);
  //#endregion
  //#region - Deeper and Darker
  potting_cagedmobs("deeperdarker:sculk_centipede", "overworld", false, 2, ["minecraft:string"]);
  potting_cagedmobs("deeperdarker:sculk_leech", "overworld", false, 2, ["deeperdarker:soul_dust"]);
  potting_cagedmobs("deeperdarker:sculk_snapper", "overworld", false, 2, ["deeperdarker:soul_dust"]);
  potting_cagedmobs("deeperdarker:shattered", "overworld", false, 2, ["deeperdarker:sculk_bone"]);
  potting_cagedmobs("deeperdarker:shriek_worm", "overworld", false, 2, ["deeperdarker:cobbled_sculk_stone"]);
  potting_cagedmobs("deeperdarker:sludge", "overworld", false, 2, ["deeperdarker:resonarium"]);
  potting_cagedmobs("deeperdarker:stalker", "overworld", false, 2, ["deeperdarker:soul_crystal"]);
  //#endregion
  //#region - Eidolon
  potting_cagedmobs("eidolon:giant_skeleton", "overworld", false, 2, ["eidolon:imbued_bones", "minecraft:bone"]);
  potting_cagedmobs("eidolon:necromancer", "overworld", false, 2, ["eidolon:summoning_staff", "minecraft:emerald"]);
  potting_cagedmobs("eidolon:raven", "overworld", false, 1, ["eidolon:raven_feather"]);
  potting_cagedmobs("eidolon:slimy_slug", "overworld", false, 1, ["minecraft:slime_ball"]);
  potting_cagedmobs("eidolon:wraith", "overworld", false, 2, ["eidolon:wraith_heart", "eidolon:tattered_cloth"]);
  potting_cagedmobs("eidolon:zombie_brute", "overworld", false, 2, ["eidolon:zombie_heart", "eidolon:lead_ingot", "minecraft:rotten_flesh", "minecraft:bone"]);
  //#endregion
  //#region - Endless Biomes
  potting_cagedmobs("endlessbiomes:anklor", "end", false, 2, ["endlessbiomes:anklor_shell_fragments", "endlessbiomes:anklor_flesh"]);
  // potting_cagedmobs("endlessbiomes:perished_shiftling", "end", false, 1, []);
  potting_cagedmobs("endlessbiomes:radon_sentinel", "end", false, 1, ["endlessbiomes:radon"]);
  // potting_cagedmobs("endlessbiomes:resistive_sentinel", "end", false, 2, []);
  potting_cagedmobs("endlessbiomes:riftite_sentinel", "end", false, 2, ["endlessbiomes:riftite"]);
  potting_cagedmobs("endlessbiomes:shiftling", "end", false, 2, ["endlessbiomes:riftite_shard", "endlessbiomes:shiftling_antenna"]);
  //#endregion
  //#region - Enlightend
  potting_cagedmobs("enlightened_end:bouncer", "end", false, 1, ["enlightened_end:squished_bouncer"]);
  potting_cagedmobs("enlightened_end:floating_elevibloom", "end", false, 1, ["enlightened_end:elevibloom"]);
  // potting_cagedmobs("enlightened_end:fumesplat", "end", false, 2, []);
  // potting_cagedmobs("enlightened_end:gloop", "end", false, 1, []);
  // potting_cagedmobs("enlightened_end:ringling", "end", false, 1, []);
  potting_cagedmobs("enlightened_end:stalker", "end", false, 2, ["enlightened_end:raw_stalker", "enlightened_end:stalker_tooth"]);
  // potting_cagedmobs("enlightened_end:void_leviathan", "end", false, 3, []);
  //#endregion
  //#region - Fish of Thieves
  potting_cagedmobs("fishofthieves:ancientscale", "sea", true, 1, ["fishofthieves:ancientscale", "fishofthieves:fish_bone", "minecraft:bone_meal"]);
  potting_cagedmobs("fishofthieves:battlegill", "sea", true, 1, ["fishofthieves:battlegill", "fishofthieves:fish_bone", "minecraft:bone_meal"]);
  potting_cagedmobs("fishofthieves:devilfish", "sea", true, 1, ["fishofthieves:devilfish", "fishofthieves:fish_bone", "minecraft:bone_meal"]);
  potting_cagedmobs("fishofthieves:islehopper", "sea", true, 1, ["fishofthieves:islehopper", "fishofthieves:fish_bone", "minecraft:bone_meal"]);
  potting_cagedmobs("fishofthieves:plentifin", "sea", true, 1, ["fishofthieves:plentifin", "fishofthieves:fish_bone", "minecraft:bone_meal"]);
  potting_cagedmobs("fishofthieves:pondie", "sea", true, 1, ["fishofthieves:pondie", "fishofthieves:fish_bone", "minecraft:bone_meal"]);
  potting_cagedmobs("fishofthieves:splashtail", "sea", true, 1, ["fishofthieves:splashtail", "fishofthieves:fish_bone", "minecraft:bone_meal"]);
  potting_cagedmobs("fishofthieves:stormfish", "sea", true, 1, ["fishofthieves:stormfish", "fishofthieves:fish_bone", "minecraft:bone_meal"]);
  potting_cagedmobs("fishofthieves:wildsplash", "sea", true, 1, ["fishofthieves:wildsplash", "fishofthieves:fish_bone", "minecraft:bone_meal"]);
  potting_cagedmobs("fishofthieves:wrecker", "sea", true, 1, ["fishofthieves:wrecker", "fishofthieves:fish_bone", "minecraft:bone_meal"]);
  //#endregion
  //#region - Monster Plus
  potting_cagedmobs("monsterplus:abyssologer", "overworld", false, 2, ["monsterplus:crystal_shard", "minecraft:obsidian", "minecraft:crying_obsidian"]);
  potting_cagedmobs("monsterplus:crystal_zombie", "overworld", false, 2, ["monsterplus:crystal_clump", "minecraft:deepslate", "minecraft:cobbled_deepslate", "monsterplus:crystal_clump"]);
  potting_cagedmobs("monsterplus:glow_skeleton", "overworld", false, 2, ["minecraft:bone", "minecraft:arrow", "minecraft:glow_ink_sac", "minecraft:glowstone_dust", "minecraft:spectral_arrow", "minecraft:bow"]);
  potting_cagedmobs("monsterplus:lava_squid", "nether", false, 1, ["minecraft:blaze_powder", "minecraft:magma_cream"]);
  potting_cagedmobs("monsterplus:mother_lava_squid", "nether", false, 2, ["minecraft:blaze_powder", "minecraft:magma_cream"]);
  // potting_cagedmobs("monsterplus:opalescent_eye", "overworld", false, 2, []);
  potting_cagedmobs("monsterplus:overgrown_skeleton", "overworld", false, 2, ["minecraft:bone", "minecraft:arrow", "minecraft:glow_berries", "minecraft:vine", "minecraft:bow"]);
  // potting_cagedmobs("monsterplus:spectral_skeleton", "overworld", false, 2, []);
  potting_cagedmobs("monsterplus:swamp_zombie", "overworld", false, 2, ["minecraft:rotten_flesh", "minecraft:mud", "minecraft:poisonous_potato"]);
  //#endregion
  //#region - Mutant Monsters
  potting_cagedmobs("mutantmonsters:mutant_creeper", "overworld", false, 2, ["minecraft:gunpowder", "mutantmonsters:creeper_shard"]);
  potting_cagedmobs("mutantmonsters:mutant_enderman", "overworld", false, 2, ["minecraft:ender_pearl", "minecraft:ender_eye", "mutantmonsters:endersoul_hand"]);
  potting_cagedmobs("mutantmonsters:mutant_skeleton", "overworld", false, 2, ["mutantmonsters:mutant_skeleton_limb", "mutantmonsters:mutant_skeleton_rib", "mutantmonsters:mutant_skeleton_shoulder_pad", "mutantmonsters:mutant_skeleton_pelvis", "mutantmonsters:mutant_skeleton_skull"]);
  potting_cagedmobs("mutantmonsters:mutant_snow_golem", "overworld", false, 2, ["minecraft:snowball"]);
  potting_cagedmobs("mutantmonsters:mutant_zombie", "overworld", false, 2, ["mutantmonsters:hulk_hammer"]);
  potting_cagedmobs("mutantmonsters:spider_pig", "overworld", false, 2, ["minecraft:string", "minecraft:porkchop"]);
  //#endregion
  //#region - Meadow
  potting_cagedmobs("meadow:water_buffalo", "overworld", false, 1, ["minecraft:leather", "meadow:raw_buffalo_meat"]);
  // potting_cagedmobs("meadow:wooly_cow", "overworld", false, 1, []);
  potting_cagedmobs("meadow:wooly_sheep", "overworld", false, 1, ["minecraft:mutton"]);
  //#endregion
  //#region - The Bumblezone
  potting_cagedmobs("the_bumblezone:bee_queen", "overworld", false, 3, ["the_bumblezone:royal_jelly_bottle", "the_bumblezone:carvable_wax", "the_bumblezone:honey_crystal_shards", "the_bumblezone:beehive_beeswax", "the_bumblezone:bee_stinger", "the_bumblezone:pollen_puff", "the_bumblezone:honey_crystal", "minecraft:honey_bottle"]);
  potting_cagedmobs("the_bumblezone:beehemoth", "overworld", false, 2, ["the_bumblezone:bee_stinger"]);
  potting_cagedmobs("the_bumblezone:honey_slime", "overworld", false, 2, ["minecraft:sugar", "minecraft:slime_ball"]);
  potting_cagedmobs("the_bumblezone:rootmin", "overworld", false, 1, ["minecraft:grass_block", "minecraft:red_tulip", "minecraft:allium", "minecraft:oxeye_daisy", "minecraft:poppy", "minecraft:white_tulip", "minecraft:dandelion", "minecraft:cornflower", "minecraft:azure_bluet", "minecraft:pink_tulip", "minecraft:orange_tulip", "minecraft:lily_of_the_valley", "minecraft:blue_orchid"]);
  // potting_cagedmobs("the_bumblezone:sentry_watcher", "overworld", false, 2, []);
  potting_cagedmobs("the_bumblezone:variant_bee", "overworld", false, 1, ["the_bumblezone:bee_stinger"]);
  //#endregion
  //#region - Naturalist
  // potting_cagedmobs("naturalist:alligator", "sea", true, 2, []);
  potting_cagedmobs("naturalist:bass", "sea", true, 1, ["naturalist:bass"]);
  potting_cagedmobs("naturalist:bear", "overworld", false, 1, ["naturalist:fur"]);
  potting_cagedmobs("naturalist:bluejay", "overworld", false, 1, ["minecraft:feather"]);
  potting_cagedmobs("naturalist:boar", "overworld", false, 2, ["minecraft:leather", "minecraft:porkchop"]);
  potting_cagedmobs("naturalist:butterfly", "overworld", false, 1, ["minecraft:bone_meal"]);
  potting_cagedmobs("naturalist:canary", "overworld", false, 1, ["minecraft:feather"]);
  potting_cagedmobs("naturalist:cardinal", "overworld", false, 1, ["minecraft:feather"]);
  potting_cagedmobs("naturalist:caterpillar", "overworld", false, 1, ["minecraft:bone_meal"]);
  potting_cagedmobs("naturalist:catfish", "sea", true, 1, ["naturalist:catfish"]);
  potting_cagedmobs("naturalist:coral_snake", "overworld", false, 1, ["minecraft:feather", "minecraft:chicken", "minecraft:rabbit", "minecraft:rabbit_foot", "minecraft:slime_ball"]);
  potting_cagedmobs("naturalist:deer", "overworld", false, 1, ["naturalist:antler", "naturalist:venison"]);
  // potting_cagedmobs("naturalist:dragonfly", "overworld", false, 1, []);
  potting_cagedmobs("naturalist:duck", "overworld", false, 1, ["minecraft:feather", "naturalist:duck"]);
  potting_cagedmobs("naturalist:elephant", "overworld", false, 1, ["minecraft:leather", "naturalist:bushmeat"]);
  // potting_cagedmobs("naturalist:finch", "overworld", false, 1, []);
  potting_cagedmobs("naturalist:firefly", "overworld", false, 1, ["naturalist:glow_goop"]);
  potting_cagedmobs("naturalist:giraffe", "overworld", false, 1, ["naturalist:bushmeat", "minecraft:hay_block"]);
  potting_cagedmobs("naturalist:hippo", "overworld", false, 1, ["minecraft:melon_slice"]);
  potting_cagedmobs("naturalist:lion", "overworld", false, 1, ["naturalist:fur", "minecraft:leather"]);
  potting_cagedmobs("naturalist:lizard", "overworld", false, 1, ["naturalist:lizard_tail"]);
  potting_cagedmobs("naturalist:rattlesnake", "overworld", false, 1, ["minecraft:feather", "minecraft:chicken", "minecraft:rabbit", "minecraft:rabbit_foot", "minecraft:slime_ball"]);
  potting_cagedmobs("naturalist:rhino", "overworld", false, 1, ["minecraft:leather", "naturalist:bushmeat"]);
  potting_cagedmobs("naturalist:robin", "overworld", false, 1, ["minecraft:feather"]);
  potting_cagedmobs("naturalist:snail", "overworld", false, 1, ["naturalist:snail_shell", "minecraft:slime_ball"]);
  potting_cagedmobs("naturalist:snake", "overworld", false, 1, ["minecraft:feather", "minecraft:chicken", "minecraft:rabbit", "minecraft:rabbit_foot", "minecraft:slime_ball"]);
  // potting_cagedmobs("naturalist:sparrow", "overworld", false, 1, []);
  potting_cagedmobs("naturalist:tortoise", "overworld", false, 1, ["minecraft:scute"]);
  potting_cagedmobs("naturalist:vulture", "overworld", false, 1, ["minecraft:feather", "minecraft:rotten_flesh"]);
  // potting_cagedmobs("naturalist:zebra", "overworld", false, 1, []);
  //#endregion
  //#region - Cataclysm
  potting_cagedmobs("cataclysm:amethyst_crab", "sea", true, 2, ["cataclysm:amethyst_crab_meat", "cataclysm:amethyst_crab_shell"]);
  potting_cagedmobs("cataclysm:ancient_remnant", "overworld", false, 3, ["cataclysm:sandstorm_in_a_bottle", "cataclysm:remnant_skull", "cataclysm:ancient_metal_block"]);
  potting_cagedmobs("cataclysm:aptrgangr", "overworld", false, 2, ["cataclysm:strange_key", "cataclysm:black_steel_ingot", "cataclysm:black_steel_nugget", "minecraft:bone", "minecraft:rotten_flesh"]);
  potting_cagedmobs("cataclysm:cindaria", "overworld", false, 2, ["cataclysm:lacrima"]);
  potting_cagedmobs("cataclysm:clawdian", "overworld", false, 2, ["cataclysm:lacrima", "cataclysm:chitin_claw"]);
  potting_cagedmobs("cataclysm:coral_golem", "sea", true, 2, ["cataclysm:crystallized_coral_fragments"]);
  potting_cagedmobs("cataclysm:coralssus", "sea", true, 2, ["cataclysm:coral_chunk"]);
  potting_cagedmobs("cataclysm:deepling_angler", "sea", true, 2, ["minecraft:fishing_rod", "minecraft:nautilus_shell"]);
  potting_cagedmobs("cataclysm:deepling_brute", "sea", true, 2, ["minecraft:nautilus_shell"]);
  potting_cagedmobs("cataclysm:deepling_priest", "sea", true, 2, ["cataclysm:athame"]);
  potting_cagedmobs("cataclysm:deepling_warlock", "sea", true, 2, ["cataclysm:athame"]);
  potting_cagedmobs("cataclysm:deepling", "sea", true, 2, ["minecraft:nautilus_shell"]);
  potting_cagedmobs("cataclysm:draugr", "overworld", false, 2, ["cataclysm:black_steel_ingot", "cataclysm:black_steel_nugget", "minecraft:bone", "minecraft:rotten_flesh"]);
  potting_cagedmobs("cataclysm:elite_draugr", "overworld", false, 2, ["minecraft:fishing_rod", "cataclysm:black_steel_ingot", "cataclysm:black_steel_nugget", "minecraft:bone", "minecraft:rotten_flesh"]);
  potting_cagedmobs("cataclysm:ender_golem", "end", false, 2, ["cataclysm:void_core"]);
  potting_cagedmobs("cataclysm:ender_guardian", "end", false, 3, ["cataclysm:gauntlet_of_guard"]);
  potting_cagedmobs("cataclysm:hippocamtus", "overworld", false, 2, ["cataclysm:lacrima"]);
  potting_cagedmobs("cataclysm:ignis", "nether", false, 3, ["cataclysm:ignitium_ingot"]);
  potting_cagedmobs("cataclysm:ignited_berserker", "nether", false, 2, ["cataclysm:dying_ember"]);
  potting_cagedmobs("cataclysm:ignited_revenant", "nether", false, 2, ["cataclysm:burning_ashes"]);
  potting_cagedmobs("cataclysm:kobolediator", "overworld", false, 2, ["cataclysm:ancient_metal_ingot", "cataclysm:koboleton_bone", "cataclysm:kobolediator_skull"]);
  potting_cagedmobs("cataclysm:koboleton", "overworld", false, 2, ["cataclysm:ancient_metal_ingot", "cataclysm:ancient_metal_nugget", "cataclysm:koboleton_bone"]);
  potting_cagedmobs("cataclysm:lionfish", "sea", true, 2, ["cataclysm:lionfish", "minecraft:bone_meal"]);
  potting_cagedmobs("cataclysm:maledictus", "overworld", false, 3, ["cataclysm:cursium_ingot"]);
  potting_cagedmobs("cataclysm:modern_remnant", "overworld", false, 2, ["cataclysm:remnant_skull"]);
  potting_cagedmobs("cataclysm:netherite_ministrosity", "nether", false, 1, ["cataclysm:netherite_effigy"]);
  potting_cagedmobs("cataclysm:netherite_monstrosity", "nether", false, 3, ["cataclysm:infernal_forge", "cataclysm:monstrous_horn", "cataclysm:lava_power_cell"]);
  potting_cagedmobs("cataclysm:octohost", "overworld", false, 2, ["cataclysm:lacrima", "minecraft:rotten_flesh", "minecraft:ink_sac"]);
  potting_cagedmobs("cataclysm:royal_draugr", "overworld", false, 2, ["cataclysm:black_steel_ingot", "cataclysm:black_steel_nugget", "minecraft:bone", "minecraft:rotten_flesh"]);
  potting_cagedmobs("cataclysm:scylla", "overworld", false, 3, ["cataclysm:lacrima", "cataclysm:essence_of_the_storm"]);
  potting_cagedmobs("cataclysm:symbiocto", "overworld", false, 2, ["cataclysm:lacrima", "minecraft:ink_sac"]);
  potting_cagedmobs("cataclysm:the_baby_leviathan", "end", false, 2, ["cataclysm:abyssal_egg"]);
  potting_cagedmobs("cataclysm:the_harbinger", "overworld", false, 3, ["cataclysm:witherite_block"]);
  potting_cagedmobs("cataclysm:the_leviathan", "end", false, 3, ["cataclysm:tidal_claws", "cataclysm:abyssal_egg"]);
  potting_cagedmobs("cataclysm:the_prowler", "overworld", false, 2, ["minecraft:redstone", "minecraft:iron_ingot"]);
  potting_cagedmobs("cataclysm:the_watcher", "overworld", false, 2, ["minecraft:redstone", "minecraft:iron_ingot"]);
  potting_cagedmobs("cataclysm:urchinkin", "overworld", false, 2, ["cataclysm:lacrima"]);
  potting_cagedmobs("cataclysm:wadjet", "overworld", false, 2, ["cataclysm:ancient_metal_ingot"]);
  //#endregion
  //#region - Goblin Traders
  potting_cagedmobs("goblintraders:goblin_trader", "overworld", false, 1, ["minecraft:experience_bottle", "minecraft:sponge", "minecraft:gunpowder", "minecraft:emerald", "minecraft:coal", "minecraft:flint", "minecraft:iron_ingot", "minecraft:gold_ingot", "minecraft:copper_ingot", "minecraft:book", "minecraft:name_tag", "minecraft:blue_ice", "minecraft:apple", "minecraft:terracotta"]);
  potting_cagedmobs("goblintraders:vein_goblin_trader", "nether", false, 1, ["minecraft:carrot", "minecraft:totem_of_undying", "minecraft:red_nether_bricks", "minecraft:emerald", "minecraft:glowstone_dust", "minecraft:netherite_scrap", "minecraft:nether_wart"]);
  //#endregion
  //#region - The Farlanders
  potting_cagedmobs("farlanders:classic_enderman", "overworld", false, 2, ["minecraft:ender_pearl", "minecraft:chorus_fruit"]);
  potting_cagedmobs("farlanders:elder_farlander", "overworld", false, 1, ["farlanders:endumium_crystal", "minecraft:iron_ingot", "minecraft:glowstone_dust", "minecraft:lapis_lazuli"]);
  potting_cagedmobs("farlanders:ender_golem", "overworld", false, 2, ["farlanders:ender_horn"]);
  potting_cagedmobs("farlanders:ender_guardian", "overworld", false, 2, ["minecraft:bow", "minecraft:arrow"]);
  // potting_cagedmobs("farlanders:enderminion", "overworld", false, 2, []);
  potting_cagedmobs("farlanders:fanmade_enderman", "overworld", false, 2, ["minecraft:ender_pearl", "minecraft:chorus_fruit"]);
  potting_cagedmobs("farlanders:farlander", "overworld", false, 1, ["farlanders:endumium_crystal", "minecraft:fire_charge", "minecraft:gunpowder", "minecraft:flint", "minecraft:pumpkin_seeds", "minecraft:carrot", "minecraft:potato", "minecraft:arrow", "minecraft:clay_ball"]);
  potting_cagedmobs("farlanders:mystic_enderman", "overworld", false, 2, ["farlanders:mystic_wand_ore", "farlanders:mystic_wand_teleport", "farlanders:mystic_wand_regen", "farlanders:mystic_wand_invisible"]);
  // potting_cagedmobs("farlanders:mystic_enderminion", "overworld", false, 2, []);
  potting_cagedmobs("farlanders:titan", "overworld", false, 3, ["farlanders:titan_hide"]);
  potting_cagedmobs("farlanders:wanderer", "overworld", false, 1, ["farlanders:endumium_crystal", "minecraft:slime_ball", "minecraft:mycelium", "minecraft:cocoa_beans", "minecraft:end_stone", "minecraft:arrow", "minecraft:cactus", "minecraft:azalea", "minecraft:rooted_dirt", "minecraft:charcoal", "minecraft:fire_charge", "minecraft:bamboo", "minecraft:ice", "minecraft:pointed_dripstone", "minecraft:glow_lichen", "minecraft:crying_obsidian", "minecraft:prismarine_shard"]);
  //#endregion
  //#region - Stalwart Dungeons
  potting_cagedmobs("stalwart_dungeons:awful_ghast", "end", false, 3, ["stalwart_dungeons:awful_crystal", "minecraft:ghast_tear", "stalwart_dungeons:awful_gun"]);
  potting_cagedmobs("stalwart_dungeons:giddy_blaze", "end", false, 2, ["minecraft:blaze_rod", "minecraft:nether_brick"]);
  potting_cagedmobs("stalwart_dungeons:incomplete_wither", "end", false, 2, ["minecraft:coal", "minecraft:bone", "minecraft:wither_skeleton_skull"]);
  potting_cagedmobs("stalwart_dungeons:nether_keeper", "end", false, 3, ["stalwart_dungeons:ancient_fire", "minecraft:nether_brick", "create:sturdy_sheet"]);
  potting_cagedmobs("stalwart_dungeons:reinforced_blaze", "end", false, 2, ["stalwart_dungeons:blaze_armor_scrap", "minecraft:blaze_rod"]);
  potting_cagedmobs("stalwart_dungeons:shelterer_without_armor", "end", false, 3, ["stalwart_dungeons:void_crystal"]);
  potting_cagedmobs("stalwart_dungeons:propulk", "end", false, 2, ["minecraft:shulker_shell"]);
  //#endregion
  //#region - Zelda
  // potting_cagedmobs("mastersword:fairy", "overworld", false, 1, []);
  // potting_cagedmobs("mastersword:lon_lon_cow", "overworld", false, 1, []);
  //#endregion
  //#region - Nether Skeletons
  potting_cagedmobs("netherskeletons:basalt_skeleton", "nether", false, 2, ["minecraft:basalt", "minecraft:bow"]);
  potting_cagedmobs("netherskeletons:charred_skeleton", "nether", false, 2, ["minecraft:bone"]);
  potting_cagedmobs("netherskeletons:crimson_skeleton", "nether", false, 2, ["minecraft:crimson_fungus", "minecraft:bone_meal", "minecraft:crimson_hyphae"]);
  potting_cagedmobs("netherskeletons:crying_obby_skeleton", "nether", false, 2, ["minecraft:crying_obsidian"]);
  potting_cagedmobs("netherskeletons:nether_skeleton", "nether", false, 2, ["minecraft:netherrack"]);
  potting_cagedmobs("netherskeletons:netherborn_skeleton", "nether", false, 2, ["minecraft:netherrack"]);
  potting_cagedmobs("netherskeletons:skelly_ghast", "nether", false, 2, ["minecraft:ghast_tear"]);
  potting_cagedmobs("netherskeletons:skelly_piglin", "nether", false, 2, ["minecraft:gold_ingot", "netherskeleton:skelly_piglin_head"]);
  potting_cagedmobs("netherskeletons:soul_skeleton", "nether", false, 2, ["minecraft:soul_soil"]);
  potting_cagedmobs("netherskeletons:warped_skeleton", "nether", false, 2, ["minecraft:warped_fungus", "minecraft:bone_meal", "minecraft:warped_stem", "minecraft:bow"]);
  //#endregion
  //#region - Samurai Dynasty
  potting_cagedmobs("samurai_dynasty:akaname", "overworld", false, 2, ["samurai_dynasty:akaname_tongue"]);
  potting_cagedmobs("samurai_dynasty:enenra", "overworld", false, 2, ["minecraft:coal", "minecraft:gunpowder"]);
  potting_cagedmobs("samurai_dynasty:jorogumo", "overworld", false, 2, ["samurai_dynasty:jorogumo_eye"]);
  potting_cagedmobs("samurai_dynasty:kawauso", "overworld", false, 1, ["samurai_dynasty:straw_hat"]);
  potting_cagedmobs("samurai_dynasty:kitsune", "overworld", false, 2, ["samurai_dynasty:kitsune_tail", "samurai_dynasty:kitsune_hide"]);
  potting_cagedmobs("samurai_dynasty:komainu", "overworld", false, 1, ["samurai_dynasty:cloth"]);
  potting_cagedmobs("samurai_dynasty:oni", "overworld", false, 2, ["samurai_dynasty:oni_horn", "samurai_dynasty:ruby"]);
  potting_cagedmobs("samurai_dynasty:onibi", "overworld", false, 2, ["samurai_dynasty:spirit_flame"]);
  potting_cagedmobs("samurai_dynasty:tanuki", "overworld", false, 1, ["samurai_dynasty:straw_hat"]);
  potting_cagedmobs("samurai_dynasty:twotailed", "overworld", false, 2, ["samurai_dynasty:kitsune_tail", "samurai_dynasty:kitsune_hide"]);
  //#endregion
  //#region - The Undergarden
  potting_cagedmobs("undergarden:brute", "overworld", false, 2, ["undergarden:brute_tusk"]);
  potting_cagedmobs("undergarden:dweller", "overworld", false, 1, ["minecraft:leather", "undergarden:raw_dweller_meat"]);
  // potting_cagedmobs("undergarden:forgotten", "overworld", false, 2, []);
  potting_cagedmobs("undergarden:forgotten_guardian", "overworld", false, 2, ["undergarden:forgotten_nugget"]);
  potting_cagedmobs("undergarden:gloomper", "overworld", false, 2, ["minecraft:leather", "undergarden:raw_gloomper_leg"]);
  // potting_cagedmobs("undergarden:gwib", "overworld", false, 1, []);
  potting_cagedmobs("undergarden:gwibling", "overworld", false, 1, ["minecraft:bone_meal", "undergarden:raw_gwibling"]);
  potting_cagedmobs("undergarden:mog", "overworld", false, 1, ["undergarden:depthrock_pebble", "undergarden:mogmoss"]);
  potting_cagedmobs("undergarden:muncher", "overworld", false, 2, ["undergarden:cloggrum_nugget", "undergarden:froststeel_nugget"]);
  // potting_cagedmobs("undergarden:nargoyle", "overworld", false, 2, []);
  potting_cagedmobs("undergarden:rotbeast", "overworld", false, 2, ["undergarden:utheric_shard"]);
  potting_cagedmobs("undergarden:rotling", "overworld", false, 2, ["undergarden:utheric_shard"]);
  potting_cagedmobs("undergarden:rotwalker", "overworld", false, 2, ["undergarden:utheric_shard"]);
  potting_cagedmobs("undergarden:scintling", "overworld", false, 1, ["undergarden:goo_ball"]);
  potting_cagedmobs("undergarden:smog_mog", "overworld", false, 1, ["undergarden:depthrock_pebble", "undergarden:blue_mogmoss"]);
  potting_cagedmobs("undergarden:sploogie", "overworld", false, 1, ["undergarden:depthrock_pebble", "undergarden:shiverstone"]);
  potting_cagedmobs("undergarden:stoneborn", "overworld", false, 1, ["undergarden:depthrock"]);
  //#endregion
  //#region - The Twilight Forest
  // potting_cagedmobs("twilightforest:adherent", "twilight", false, 2, []);
  potting_cagedmobs("twilightforest:alpha_yeti", "twilight", false, 3, ["twilightforest:alpha_yeti_fur", "twilightforest:ice_bomb"]);
  potting_cagedmobs("twilightforest:armored_giant", "twilight", false, 2, ["twilightforest:giant_sword"]);
  potting_cagedmobs("twilightforest:bighorn_sheep", "twilight", false, 1, ["minecraft:mutton", "minecraft:white_wool", "minecraft:light_gray_wool", "minecraft:gray_wool", "minecraft:black_wool", "minecraft:brown_wool", "minecraft:red_wool", "minecraft:orange_wool", "minecraft:yellow_wool", "minecraft:lime_wool", "minecraft:green_wool", "minecraft:cyan_wool", "minecraft:light_blue_wool", "minecraft:blue_wool", "minecraft:purple_wool", "minecraft:magenta_wool", "minecraft:pink_wool"]);
  potting_cagedmobs("twilightforest:blockchain_goblin", "twilight", false, 2, ["twilightforest:armor_shard"]);
  potting_cagedmobs("twilightforest:boar", "twilight", false, 1, ["minecraft:porkchop"]);
  potting_cagedmobs("twilightforest:carminite_broodling", "twilight", false, 1, ["minecraft:string", "minecraft:spider_eye"]);
  potting_cagedmobs("twilightforest:carminite_ghastguard", "twilight", false, 2, ["minecraft:gunpowder", "minecraft:ghast_tear"]);
  potting_cagedmobs("twilightforest:carminite_ghastling", "twilight", false, 2, ["minecraft:gunpowder", "minecraft:ghast_tear"]);
  potting_cagedmobs("twilightforest:carminite_golem", "twilight", false, 2, ["twilightforest:towerwood", "minecraft:iron_ingot"]);
  potting_cagedmobs("twilightforest:death_tome", "twilight", false, 2, ["minecraft:book", "minecraft:paper"]);
  potting_cagedmobs("twilightforest:deer", "twilight", false, 1, ["minecraft:leather", "twilightforest:raw_venison"]);
  potting_cagedmobs("twilightforest:dwarf_rabbit", "twilight", false, 1, ["minecraft:rabbit_hide", "minecraft:rabbit", "minecraft:rabbit_foot"]);
  potting_cagedmobs("twilightforest:fire_beetle", "twilight", false, 2, ["minecraft:gunpowder"]);
  potting_cagedmobs("twilightforest:giant_miner", "twilight", false, 2, ["twilightforest:giant_pickaxe", "twilightforest:giant_cobblestone", "twilightforest:giant_log", "twilightforest:giant_leaves", "twilightforest:giant_obsidian"]);
  // potting_cagedmobs("twilightforest:harbringer_cube", "twilight", false, 2, []);
  potting_cagedmobs("twilightforest:hedge_spider", "twilight", false, 2, ["minecraft:string", "minecraft:spider_eye"]);
  potting_cagedmobs("twilightforest:helmet_crab", "twilight", false, 2, ["twilightforest:armor_shard", "minecraft:cod"]);
  // potting_cagedmobs("twilightforest:hostile_wolf", "twilight", false, 2, []);
  potting_cagedmobs("twilightforest:hydra", "twilight", false, 3, ["twilightforest:hydra_chop", "twilightforest:fiery_blood"]);
  potting_cagedmobs("twilightforest:ice_crystal", "twilight", false, 1, ["minecraft:snowball"]);
  potting_cagedmobs("twilightforest:king_spider", "twilight", false, 2, ["minecraft:string", "minecraft:spider_eye"]);
  potting_cagedmobs("twilightforest:knight_phantom", "twilight", false, 3, ["twilightforest:knightmetal_sword", "twilightforest:knightmetal_chestplate"]);
  potting_cagedmobs("twilightforest:kobold", "twilight", false, 2, ["minecraft:wheat", "minecraft:gold_nugget"]);
  potting_cagedmobs("twilightforest:lich", "twilight", false, 3, ["minecraft:ender_pearl", "minecraft:bone", "twilightforest:zombie_scepter", "twilightforest:lifedrain_scepter", "twilightforest:twilight_scepter", "twilightforest:fortification_scepter"]);
  potting_cagedmobs("twilightforest:lower_goblin_knight", "twilight", false, 2, ["twilightforest:armor_shard"]);
  potting_cagedmobs("twilightforest:maze_slime", "twilight", false, 2, ["minecraft:slime_ball", "twilightforest:charm_of_keeping_1"]);
  potting_cagedmobs("twilightforest:minoshroom", "twilight", false, 3, ["twilightforest:meef_stroganoff", "twilightdelight:raw_tomahawk_smeak"]);
  potting_cagedmobs("twilightforest:minotaur", "twilight", false, 2, ["twilightforest:raw_meef"]);
  // potting_cagedmobs("twilightforest:mist_wolf", "twilight", false, 2, []);
  // potting_cagedmobs("twilightforest:mosquito_swarm", "twilight", false, 2, []);
  potting_cagedmobs("twilightforest:naga", "twilight", false, 3, ["twilightforest:naga_scale"]);
  potting_cagedmobs("twilightforest:penguin", "twilight", false, 1, ["minecraft:feather"]);
  // potting_cagedmobs("twilightforest:pinch_beetle", "twilight", false, 2, []);
  potting_cagedmobs("twilightforest:quest_ram", "twilight", false, 2, ["minecraft:mutton", "minecraft:white_wool", "minecraft:light_gray_wool", "minecraft:gray_wool", "minecraft:black_wool", "minecraft:brown_wool", "minecraft:red_wool", "minecraft:orange_wool", "minecraft:yellow_wool", "minecraft:lime_wool", "minecraft:green_wool", "minecraft:cyan_wool", "minecraft:light_blue_wool", "minecraft:blue_wool", "minecraft:purple_wool", "minecraft:magenta_wool", "minecraft:pink_wool"]);
  potting_cagedmobs("twilightforest:raven", "twilight", false, 1, ["eidolon:raven_feather"]);
  potting_cagedmobs("twilightforest:redcap_sapper", "twilight", false, 2, ["minecraft:coal"]);
  potting_cagedmobs("twilightforest:redcap", "twilight", false, 2, ["minecraft:coal"]);
  potting_cagedmobs("twilightforest:skeleton_druid", "twilight", false, 2, ["minecraft:bone", "twilightforest:torchberries"]);
  potting_cagedmobs("twilightforest:slime_beetle", "twilight", false, 2, ["minecraft:slime_ball"]);
  potting_cagedmobs("twilightforest:snow_guardian", "twilight", false, 1, ["minecraft:snowball"]);
  potting_cagedmobs("twilightforest:snow_queen", "twilight", false, 3, ["minecraft:snowball", "minecraft:packed_ice", "twilightforest:triple_bow", "twilightforest:seeker_bow"]);
  // potting_cagedmobs("twilightforest:squirrel", "twilight", false, 2, []);
  potting_cagedmobs("twilightforest:stable_ice_core", "twilight", false, 1, ["minecraft:snowball"]);
  potting_cagedmobs("twilightforest:swarm_spider", "twilight", false, 2, ["minecraft:string", "minecraft:spider_eye"]);
  potting_cagedmobs("twilightforest:tiny_bird", "twilight", false, 1, ["minecraft:feather"]);
  potting_cagedmobs("twilightforest:towerwood_borer", "twilight", false, 2, ["twilightforest:borer_essence"]);
  potting_cagedmobs("twilightforest:troll", "twilight", false, 2, ["twilightforest:deadrock", "twilightforest:magic_beans"]);
  potting_cagedmobs("twilightforest:unstable_ice_core", "twilight", false, 1, ["minecraft:snowball"]);
  potting_cagedmobs("twilightforest:upper_goblin_knight", "twilight", false, 2, ["twilightforest:armor_shard"]);
  potting_cagedmobs("twilightforest:ur_ghast", "twilight", false, 3, ["twilightforest:carminite", "twilightforest:fiery_tears", "twilightdelight:experiment_113", "twilightdelight:experiment_110"]);
  potting_cagedmobs("twilightforest:winter_wolf", "twilight", false, 2, ["twilightforest:arctic_fur"]);
  potting_cagedmobs("twilightforest:wraith", "twilight", false, 2, ["minecraft:glowstone_dust"]);
  potting_cagedmobs("twilightforest:yeti", "twilight", false, 2, ["twilightforest:arctic_fur"]);
  //#endregion
  //#endregion
  //#region - Special Mob Cages
  //#region - Goat
  let potting_cagedmobs_goat = loots => {
    const results = loots.map(loot => {
      return {
        chance: 1,
        output: {
          item: "minecraft:goat_horn"
        },
        nbtName: "instrument",
        nbtData: loot,
        minAmount: 1,
        maxAmount: 2
      };
    });

    e.custom({
      type: "cagedmobs:entity_data",
      entity: "minecraft:goat",
      samplerTier: 1,
      environments: ["overworld", "allenv"],
      growTicks: 1200,
      requiresWater: false,
      results: results
    });
  };
  potting_cagedmobs_goat(["minecraft:ponder_goat_horn", "minecraft:sing_goat_horn", "minecraft:seek_goat_horn", "minecraft:feel_goat_horn", "minecraft:admire_goat_horn", "minecraft:call_goat_horn", "minecraft:yearn_goat_horn", "minecraft:dream_goat_horn"]);
  //#endregion
  //#endregion
  //#region - Fortune Upgrade
  e.shaped("cagedmobs:looting_upgrade", ["ABA", "CDE", "EFE"], {
    A: "minecraft:diamond",
    B: "minecraft:enchanted_book",
    C: "minecraft:redstone",
    D: "minecraft:coal",
    E: "minecraft:blackstone",
    F: "minecraft:quartz"
  });
  //#endregion
  //#region - Star Infused Netherite
  let potting_star_infused_netherite = (element1, element2, output) => {
    e.shaped(output, [" A ", "ABA", " A "], {
      A: element1,
      B: element2
    });
  };
  potting_star_infused_netherite("cagedmobs:nether_star_fragment", "cyclic:netherite_nugget", "cagedmobs:star_infused_netherite_nugget");
  potting_star_infused_netherite("extendedcrafting:nether_star_block", "minecraft:netherite_block", "cagedmobs:star_infused_netherite_block");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function cagedmobs() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["cagedmobs:lightning_upgrade", "cagedmobs:cooking_upgrade", "cagedmobs:arrow_upgrade", "cagedmobs:warden_receptor"];
  let hiding = ["cagedmobs:empty_spawn_egg"];
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
cagedmobs();
//#endregion
