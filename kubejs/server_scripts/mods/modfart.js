//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.add("forge:modfart/spawn_egg", [/.*spawn_egg/, /ars_nouveau:.*_se$/]);
  //#region - Raw Materials
  e.add("forge:modfart/raw_materials", [
    "create:raw_zinc",
    "enlightened_end:raw_bismuth",
    "enlightened_end:raw_irradium",
    "kubejs:raw_ambrosium",
    "kubejs:raw_aquamarine",
    "kubejs:raw_chorundum",
    "kubejs:raw_coal",
    "kubejs:raw_diamond",
    "kubejs:raw_dimensional",
    "kubejs:raw_emerald",
    "kubejs:raw_endumium",
    "kubejs:raw_fluorite",
    "kubejs:raw_gravitite",
    "kubejs:raw_jade",
    "kubejs:raw_lapis_lazuli",
    "kubejs:raw_malachite",
    "kubejs:raw_netherite",
    "kubejs:raw_onyx",
    "kubejs:raw_quartz",
    "kubejs:raw_redstone",
    "kubejs:raw_regalium",
    "kubejs:raw_ruby",
    "kubejs:raw_utherium",
    "kubejs:raw_zanite",
    "mekanism:raw_lead",
    "mekanism:raw_osmium",
    "mekanism:raw_tin",
    "mekanism:raw_uranium",
    "minecraft:raw_copper",
    "minecraft:raw_gold",
    "minecraft:raw_iron",
    "samurai_dynasty:raw_silver",
    "stalwart_dungeons:raw_tungsten",
    "undergarden:raw_cloggrum",
    "undergarden:raw_froststeel",
    "kubejs:raw_adamantite",
    "kubejs:raw_valkyrum"
  ]);
  //#endregion
  //#region - Clumps
  e.add("forge:modfart/clumps", [
    "kubejs:clump_ambrosium",
    "kubejs:clump_aquamarine",
    "kubejs:clump_bismuth",
    "kubejs:clump_chorundum",
    "kubejs:clump_cloggrum",
    "kubejs:clump_coal",
    "kubejs:clump_diamond",
    "kubejs:clump_dimensional",
    "kubejs:clump_emerald",
    "kubejs:clump_endumium",
    "kubejs:clump_fluorite",
    "kubejs:clump_froststeel",
    "kubejs:clump_gravitite",
    "kubejs:clump_irradium",
    "kubejs:clump_jade",
    "kubejs:clump_lapis_lazuli",
    "kubejs:clump_malachite",
    "kubejs:clump_netherite",
    "kubejs:clump_onyx",
    "kubejs:clump_quartz",
    "kubejs:clump_redstone",
    "kubejs:clump_regalium",
    "kubejs:clump_ruby",
    "kubejs:clump_silver",
    "kubejs:clump_tungsten",
    "kubejs:clump_utherium",
    "kubejs:clump_zanite",
    "kubejs:clump_zinc",
    "mekanism:clump_copper",
    "mekanism:clump_gold",
    "mekanism:clump_iron",
    "mekanism:clump_lead",
    "mekanism:clump_osmium",
    "mekanism:clump_tin",
    "mekanism:clump_uranium",
    "kubejs:clump_adamantite",
    "kubejs:clump_valkyrum"
  ]);
  //#endregion
  //#region - Shards
  e.add("forge:modfart/shards", [
    "kubejs:shard_aquamarine",
    "kubejs:shard_bismuth",
    "kubejs:shard_chorundum",
    "kubejs:shard_cloggrum",
    "kubejs:shard_coal",
    "kubejs:shard_diamond",
    "kubejs:shard_emerald",
    "kubejs:shard_endumium",
    "kubejs:shard_fluorite",
    "kubejs:shard_froststeel",
    "kubejs:shard_gravitite",
    "kubejs:shard_irradium",
    "kubejs:shard_jade",
    "kubejs:shard_lapis_lazuli",
    "kubejs:shard_malachite",
    "kubejs:shard_netherite",
    "kubejs:shard_onyx",
    "kubejs:shard_quartz",
    "kubejs:shard_redstone",
    "kubejs:shard_regalium",
    "kubejs:shard_ruby",
    "kubejs:shard_silver",
    "kubejs:shard_tungsten",
    "kubejs:shard_zanite",
    "kubejs:shard_zinc",
    "mekanism:shard_copper",
    "mekanism:shard_gold",
    "mekanism:shard_iron",
    "mekanism:shard_lead",
    "mekanism:shard_osmium",
    "mekanism:shard_tin",
    "mekanism:shard_uranium",
    "undergarden:utheric_shard",
    "kubejs:shard_adamantite",
    "kubejs:shard_valkyrum"
  ]);
  //#endregion
  //#region - Dirty Dusts
  e.add("forge:modfart/dirty_dusts", [
    "kubejs:dirty_dust_aquamarine",
    "kubejs:dirty_dust_bismuth",
    "kubejs:dirty_dust_chorundum",
    "kubejs:dirty_dust_cloggrum",
    "kubejs:dirty_dust_coal",
    "kubejs:dirty_dust_diamond",
    "kubejs:dirty_dust_emerald",
    "kubejs:dirty_dust_endumium",
    "kubejs:dirty_dust_fluorite",
    "kubejs:dirty_dust_froststeel",
    "kubejs:dirty_dust_gravitite",
    "kubejs:dirty_dust_irradium",
    "kubejs:dirty_dust_jade",
    "kubejs:dirty_dust_lapis_lazuli",
    "kubejs:dirty_dust_malachite",
    "kubejs:dirty_dust_netherite",
    "kubejs:dirty_dust_onyx",
    "kubejs:dirty_dust_quartz",
    "kubejs:dirty_dust_redstone",
    "kubejs:dirty_dust_regalium",
    "kubejs:dirty_dust_ruby",
    "kubejs:dirty_dust_silver",
    "kubejs:dirty_dust_tungsten",
    "kubejs:dirty_dust_utherium",
    "kubejs:dirty_dust_zanite",
    "kubejs:dirty_dust_zinc",
    "mekanism:dirty_dust_copper",
    "mekanism:dirty_dust_gold",
    "mekanism:dirty_dust_iron",
    "mekanism:dirty_dust_lead",
    "mekanism:dirty_dust_osmium",
    "mekanism:dirty_dust_tin",
    "mekanism:dirty_dust_uranium",
    "kubejs:dirty_dust_adamantite",
    "kubejs:dirty_dust_valkyrum"
  ]);
  //#endregion
  //#region - Dusts
  e.add("forge:modfart/dusts", [
    "kubejs:dust_aquamarine",
    "kubejs:dust_bismuth",
    "kubejs:dust_chorundum",
    "kubejs:dust_cloggrum",
    "kubejs:dust_endumium",
    "kubejs:dust_froststeel",
    "kubejs:dust_gravitite",
    "kubejs:dust_irradium",
    "kubejs:dust_jade",
    "kubejs:dust_malachite",
    "kubejs:dust_onyx",
    "kubejs:dust_regalium",
    "kubejs:dust_ruby",
    "kubejs:dust_silver",
    "kubejs:dust_tungsten",
    "kubejs:dust_utherium",
    "kubejs:dust_zanite",
    "kubejs:dust_zinc",
    "mekanism:dust_coal",
    "mekanism:dust_copper",
    "mekanism:dust_diamond",
    "mekanism:dust_emerald",
    "mekanism:dust_fluorite",
    "mekanism:dust_gold",
    "mekanism:dust_iron",
    "mekanism:dust_lapis_lazuli",
    "mekanism:dust_lead",
    "mekanism:dust_netherite",
    "mekanism:dust_osmium",
    "mekanism:dust_quartz",
    "mekanism:dust_tin",
    "mekanism:dust_uranium",
    "kubejs:dust_adamantite",
    "kubejs:dust_valkyrum"
  ]);
  //#endregion
  //#region - Crystals
  e.add("forge:modfart/crystals", [
    "kubejs:crystal_aquamarine",
    "kubejs:crystal_bismuth",
    "kubejs:crystal_chorundum",
    "kubejs:crystal_cloggrum",
    "kubejs:crystal_coal",
    "kubejs:crystal_diamond",
    "kubejs:crystal_emerald",
    "kubejs:crystal_fluorite",
    "kubejs:crystal_froststeel",
    "kubejs:crystal_gravitite",
    "kubejs:crystal_irradium",
    "kubejs:crystal_jade",
    "kubejs:crystal_lapis_lazuli",
    "kubejs:crystal_malachite",
    "kubejs:crystal_netherite",
    "kubejs:crystal_onyx",
    "kubejs:crystal_quartz",
    "kubejs:crystal_ruby",
    "kubejs:crystal_silver",
    "kubejs:crystal_tungsten",
    "kubejs:crystal_zanite",
    "kubejs:crystal_zinc",
    "mekanism:crystal_copper",
    "mekanism:crystal_gold",
    "mekanism:crystal_iron",
    "mekanism:crystal_lead",
    "mekanism:crystal_osmium",
    "mekanism:crystal_tin",
    "mekanism:crystal_uranium",
    "kubejs:crystal_adamantite",
    "kubejs:crystal_valkyrum"
  ]);
  //#endregion
  //#region - Final Resources
  e.add("forge:modfart/final_resources", [
    "aether:ambrosium_shard",
    "aether:enchanted_gravitite",
    "aether:zanite_gemstone",
    "create:zinc_ingot",
    "enlightened_end:bismuth_ingot",
    "enlightened_end:irradium_bar",
    "enlightened_end:malachite",
    "farlanders:endumium_crystal",
    "mekanism:fluorite_gem",
    "mekanism:ingot_lead",
    "mekanism:ingot_osmium",
    "mekanism:ingot_tin",
    "mekanism:ingot_uranium",
    "minecraft:coal",
    "minecraft:copper_ingot",
    "minecraft:diamond",
    "minecraft:emerald",
    "minecraft:gold_ingot",
    "minecraft:iron_ingot",
    "minecraft:lapis_lazuli",
    "minecraft:netherite_scrap",
    "minecraft:quartz",
    "minecraft:redstone",
    "rftoolsbase:dimensionalshard",
    "samurai_dynasty:aquamarine",
    "samurai_dynasty:jade",
    "samurai_dynasty:onyx",
    "samurai_dynasty:ruby",
    "samurai_dynasty:silver_ingot",
    "stalwart_dungeons:chorundum",
    "stalwart_dungeons:tungsten_ingot",
    "undergarden:cloggrum_ingot",
    "undergarden:froststeel_ingot",
    "undergarden:regalium_crystal",
    "undergarden:utherium_crystal",
    "enlightened_end:adamantite_ingot",
    "ancient_aether:valkyrum"
  ]);
  //#endregion
  //#region - Gears
  e.add("forge:modfart/gears", /kubejs:(.*)_gear/);
  //#endregion
  //#region - Plates
  e.add("forge:modfart/plates", /kubejs:(.*)_plate/);
  e.add("forge:plates/brass", "kubejs:brass_plate");
  e.add("forge:plates/copper", "kubejs:copper_plate");
  e.add("forge:plates/gold", "kubejs:gold_plate");
  e.add("forge:plates/zinc", "kubejs:zinc_plate");
  e.add("railways:internal/plates/iron_plates", "kubejs:iron_plate");
  e.add("forge:plates/iron", "kubejs:iron_plate");
  //#endregion
  //#region - Rods
  e.add("forge:modfart/rods", /kubejs:(.*)_rod/);
  e.add("forge:rods/copper", "kubejs:copper_rod");
  e.add("forge:rods/electrum", "kubejs:electrum_rod");
  e.add("forge:rods/gold", "kubejs:gold_rod");
  e.add("forge:rods/iron", "kubejs:iron_rod");
  //#endregion
  //#region - Book Guide
  e.add("forge:modfart/guide", [
    "alexscaves:cave_book",
    /patchouli:/,
    "alexsmobs:animal_dictionary",
    "ars_nouveau:worn_notebook",
    "rftoolsbase:manual",
    "eidolon:codex",
    "aether:book_of_lore",
    "solcarrot:food_book"
  ]);
  //#endregion
});
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Gears
  let potting_gear = (output, element) => {
    e.shaped(output, [" A ", "ABA", " A "], {
      A: element,
      B: "minecraft:stick"
    });
  };
  // Vanilla
  potting_gear("kubejs:coal_gear", "minecraft:coal");
  potting_gear("kubejs:copper_gear", "minecraft:copper_ingot");
  potting_gear("kubejs:diamond_gear", "minecraft:diamond");
  potting_gear("kubejs:dragon_gear", "minecraft:dragon_egg");
  potting_gear("kubejs:echo_gear", "minecraft:echo_shard");
  potting_gear("kubejs:emerald_gear", "minecraft:emerald");
  potting_gear("kubejs:gold_gear", "minecraft:gold_ingot");
  potting_gear("kubejs:honey_gear", "minecraft:honeycomb");
  potting_gear("kubejs:iron_gear", "minecraft:iron_ingot");
  potting_gear("kubejs:lapis_lazuli_gear", "minecraft:lapis_lazuli");
  potting_gear("kubejs:nether_star_gear", "minecraft:nether_star");
  potting_gear("kubejs:netherite_gear", "minecraft:netherite_ingot");
  potting_gear("kubejs:prismarine_crystals_gear", "minecraft:prismarine_crystals");
  potting_gear("kubejs:scute_gear", "minecraft:scute");
  potting_gear("kubejs:sea_gear", "minecraft:heart_of_the_sea");
  // Alex's Mobs
  potting_gear("kubejs:straddlite_gear", "alexsmobs:straddlite");
  // Ars Nouveau
  potting_gear("kubejs:drygmy_gear", "ars_nouveau:drygmy_shard");
  potting_gear("kubejs:source_gear", "ars_nouveau:source_gem");
  potting_gear("kubejs:starbuncle_gear", "ars_nouveau:starbuncle_shards");
  potting_gear("kubejs:whirlisprig_gear", "ars_nouveau:whirlisprig_shards");
  potting_gear("kubejs:wixie_gear", "ars_nouveau:wixie_shards");
  // Cataclysm
  potting_gear("kubejs:witherite_gear", "cataclysm:witherite_ingot");
  // Create
  potting_gear("kubejs:andesite_gear", "create:andesite_alloy");
  potting_gear("kubejs:brass_gear", "create:brass_ingot");
  potting_gear("kubejs:experience_gear", "create:experience_nugget");
  potting_gear("kubejs:rose_quartz_gear", "create:rose_quartz");
  potting_gear("kubejs:void_steel_gear", "createutilities:void_steel_ingot");
  // Deeper and Darker
  potting_gear("kubejs:deep_gear", "deeperdarker:heart_of_the_deep");
  // Eidolon
  potting_gear("kubejs:ash_gear", "eidolon:enchanted_ash");
  potting_gear("kubejs:pewter_gear", "eidolon:pewter_ingot");
  // Extended Crafting
  potting_gear("kubejs:crystaltine_gear", "extendedcrafting:crystaltine_ingot");
  potting_gear("kubejs:enhanced_ender_gear", "extendedcrafting:enhanced_ender_ingot");
  potting_gear("kubejs:ender_gear", "extendedcrafting:ender_ingot");
  potting_gear("kubejs:enhanced_redstone_gear", "extendedcrafting:enhanced_redstone_ingot");
  potting_gear("kubejs:the_ultimate_gear", "extendedcrafting:the_ultimate_ingot");
  // Farlanders
  potting_gear("kubejs:endumium_gear", "farlanders:endumium_crystal");
  potting_gear("kubejs:titan_gear", "farlanders:titan_hide");
  // Mekanism
  potting_gear("kubejs:antimatter_gear", "mekanism:pellet_antimatter");
  potting_gear("kubejs:bronze_gear", "mekanism:ingot_bronze");
  potting_gear("kubejs:hdpe_gear", "mekanism:hdpe_pellet");
  potting_gear("kubejs:lead_gear", "mekanism:ingot_lead");
  potting_gear("kubejs:osmium_gear", "mekanism:ingot_osmium");
  potting_gear("kubejs:plutonium_gear", "mekanism:pellet_plutonium");
  potting_gear("kubejs:polonium_gear", "mekanism:pellet_polonium");
  potting_gear("kubejs:refined_glowstone_gear", "mekanism:ingot_refined_glowstone");
  potting_gear("kubejs:refined_obsidian_gear", "mekanism:ingot_refined_obsidian");
  potting_gear("kubejs:steel_gear", "mekanism:ingot_steel");
  potting_gear("kubejs:tin_gear", "mekanism:ingot_tin");
  potting_gear("kubejs:uranium_gear", "mekanism:ingot_uranium");
  // Refined Storage
  potting_gear("kubejs:quartz_enriched_gear", "refinedstorage:quartz_enriched_iron");
  // RFTools
  potting_gear("kubejs:dimensional_gear", "rftoolsbase:dimensionalshard");
  //#endregion
  //#region - Plates
  e.remove([
    { id: "create:pressing/brass_ingot" },
    { id: "create:pressing/copper_ingot" },
    { id: "create:pressing/gold_ingot" },
    { id: "create:pressing/iron_ingot" },
    { id: "createaddition:pressing/electrum_ingot" },
    { id: "createaddition:pressing/zinc_ingot" },
    { id: "createutilities:pressing/void_steel_sheet" },
    { id: "mekanism:enriching/hdpe_sheet" }
  ]);
  let potting_plates = (output, element) => {
    e.custom({
      type: "create:pressing",
      ingredients: [
        {
          item: element
        }
      ],
      results: [
        {
          item: output
        }
      ]
    });
    e.custom({
      type: "mekanism:compressing",
      chemicalInput: {
        amount: 1,
        gas: "mekanism:oxygen"
      },
      itemInput: {
        ingredient: {
          item: element
        }
      },
      output: {
        item: output
      }
    });
  };
  // Vanilla
  potting_plates("kubejs:amethyst_plate", "minecraft:amethyst_shard");
  potting_plates("kubejs:bedrock_plate", "minecraft:bedrock");
  potting_plates("kubejs:charcoal_plate", "minecraft:charcoal");
  potting_plates("kubejs:coal_plate", "minecraft:coal");
  potting_plates("kubejs:copper_plate", "minecraft:copper_ingot");
  potting_plates("kubejs:diamond_plate", "minecraft:diamond");
  potting_plates("kubejs:dragon_plate", "minecraft:dragon_egg");
  potting_plates("kubejs:echo_plate", "minecraft:echo_shard");
  potting_plates("kubejs:emerald_plate", "minecraft:emerald");
  potting_plates("kubejs:flint_plate", "minecraft:flint");
  potting_plates("kubejs:gold_plate", "minecraft:gold_ingot");
  potting_plates("kubejs:honey_plate", "minecraft:honeycomb");
  potting_plates("kubejs:iron_plate", "minecraft:iron_ingot");
  potting_plates("kubejs:lapis_lazuli_plate", "minecraft:lapis_lazuli");
  potting_plates("kubejs:nether_quartz_plate", "minecraft:quartz");
  potting_plates("kubejs:nether_star_plate", "minecraft:nether_star");
  potting_plates("kubejs:netherite_plate", "minecraft:netherite_ingot");
  potting_plates("kubejs:obsidian_plate", "minecraft:obsidian");
  potting_plates("kubejs:paper_plate", "minecraft:paper");
  potting_plates("kubejs:prismarine_crystals_plate", "minecraft:prismarine_crystals");
  potting_plates("kubejs:redstone_plate", "minecraft:redstone");
  potting_plates("kubejs:scute_plate", "minecraft:scute");
  potting_plates("kubejs:sea_plate", "minecraft:heart_of_the_sea");
  // Alex's Mobs
  potting_plates("kubejs:straddlite_plate", "alexsmobs:straddlite");
  // Ars Nouveau
  potting_plates("kubejs:drygmy_plate", "ars_nouveau:drygmy_shard");
  potting_plates("kubejs:starbuncle_plate", "ars_nouveau:starbuncle_shards");
  potting_plates("kubejs:whirlisprig_plate", "ars_nouveau:whirlisprig_shards");
  potting_plates("kubejs:wixie_plate", "ars_nouveau:wixie_shards");
  // Cataclysm
  potting_plates("kubejs:witherite_plate", "cataclysm:witherite_ingot");
  // Create
  potting_plates("kubejs:andesite_plate", "create:andesite_alloy");
  potting_plates("kubejs:brass_plate", "create:brass_ingot");
  potting_plates("kubejs:electrum_plate", "createaddition:electrum_ingot");
  potting_plates("kubejs:experience_plate", "create:experience_nugget");
  potting_plates("kubejs:rose_quartz_plate", "create:rose_quartz");
  potting_plates("kubejs:void_steel_plate", "createutilities:void_steel_ingot");
  potting_plates("kubejs:zinc_plate", "create:zinc_ingot");
  potting_plates("kubejs:shadow_steel_plate", "createchromaticreturn:shadow_steel");
  // Deeper and Darker
  potting_plates("kubejs:deep_plate", "deeperdarker:heart_of_the_deep");
  // Enlightend
  potting_plates("kubejs:bismuth_plate", "enlightened_end:bismuth_ingot");
  potting_plates("kubejs:malachite_plate", "enlightened_end:malachite");
  // Epic Samurai
  potting_plates("kubejs:ruby_plate", "samurai_dynasty:ruby");
  potting_plates("kubejs:silver_plate", "samurai_dynasty:silver_ingot");
  // Extended Crafting
  potting_plates("kubejs:black_iron_plate", "extendedcrafting:black_iron_ingot");
  potting_plates("kubejs:crystaltine_plate", "extendedcrafting:crystaltine_ingot");
  potting_plates("kubejs:ender_plate", "extendedcrafting:ender_ingot");
  potting_plates("kubejs:enhanced_ender_plate", "extendedcrafting:enhanced_ender_ingot");
  potting_plates("kubejs:enhanced_redstone_plate", "extendedcrafting:enhanced_redstone_ingot");
  potting_plates("kubejs:the_ultimate_plate", "extendedcrafting:the_ultimate_ingot");
  // Farlanders
  potting_plates("kubejs:endumium_plate", "farlanders:endumium_crystal");
  // Mekanism
  potting_plates("kubejs:antimatter_plate", "mekanism:pellet_antimatter");
  potting_plates("kubejs:hdpe_plate", "mekanism:hdpe_pellet");
  potting_plates("kubejs:osmium_plate", "mekanism:ingot_osmium");
  potting_plates("kubejs:refined_glowstone_plate", "mekanism:ingot_refined_glowstone");
  potting_plates("kubejs:refined_obsidian_plate", "mekanism:ingot_refined_obsidian");
  potting_plates("kubejs:steel_plate", "mekanism:ingot_steel");
  // Refined Storage
  potting_plates("kubejs:silicon_plate", "refinedstorage:silicon");
  // RFTools
  potting_plates("kubejs:dimensional_plate", "rftoolsbase:dimensionalshard");
  // Stalwart Dungeons
  potting_plates("kubejs:tungsten_plate", "stalwart_dungeons:tungsten_ingot");
  //#endregion
  //#region - Rods
  e.remove([
    { id: "createaddition:rolling/brass_ingot" },
    { id: "createaddition:rolling/copper_ingot" },
    { id: "createaddition:rolling/electrum_ingot" },
    { id: "createaddition:rolling/iron_ingot" },
    { id: "createaddition:rolling/iron_ingot" },
    { id: "mekanism:hdpe_rod" },
    { id: "mekanism:sawing/planks" }
  ]);
  let potting_rod = (output, element) => {
    e.custom({
      type: "createaddition:rolling",
      input: {
        item: element
      },
      result: {
        item: output,
        count: 2
      }
    });
    e.custom({
      type: "mekanism:sawing",
      input: {
        ingredient: {
          item: element
        }
      },
      mainOutput: {
        count: 2,
        item: output
      }
    });
  };
  // Vanilla
  potting_rod("kubejs:amethyst_rod", "minecraft:amethyst_shard");
  potting_rod("kubejs:coal_rod", "minecraft:coal");
  potting_rod("kubejs:copper_rod", "minecraft:copper_ingot");
  potting_rod("kubejs:diamond_rod", "minecraft:diamond");
  potting_rod("kubejs:dragon_rod", "minecraft:dragon_egg");
  potting_rod("kubejs:echo_rod", "minecraft:echo_shard");
  potting_rod("kubejs:emerald_rod", "minecraft:emerald");
  potting_rod("kubejs:flint_rod", "minecraft:flint");
  potting_rod("kubejs:glowstone_rod", "minecraft:glowstone_dust");
  potting_rod("kubejs:gold_rod", "minecraft:gold_ingot");
  potting_rod("kubejs:honey_rod", "minecraft:honeycomb");
  potting_rod("kubejs:iron_rod", "minecraft:iron_ingot");
  potting_rod("kubejs:lapis_lazuli_rod", "minecraft:lapis_lazuli");
  potting_rod("kubejs:nether_quartz_rod", "minecraft:quartz");
  potting_rod("kubejs:netherite_rod", "minecraft:netherite_ingot");
  potting_rod("kubejs:phantom_rod", "minecraft:phantom_membrane");
  potting_rod("kubejs:prismarine_crystals_rod", "minecraft:prismarine_crystals");
  potting_rod("kubejs:redstone_rod", "minecraft:redstone");
  potting_rod("kubejs:scute_rod", "minecraft:scute");
  potting_rod("kubejs:sea_rod", "minecraft:heart_of_the_sea");
  // Alex's Mobs
  potting_rod("kubejs:straddlite_rod", "alexsmobs:straddlite");
  // Aquaculture
  potting_rod("kubejs:neptunium_rod", "aquaculture:neptunium_ingot");
  // Ars Nouveau
  potting_rod("kubejs:drygmy_rod", "ars_nouveau:drygmy_shard");
  potting_rod("kubejs:starbuncle_rod", "ars_nouveau:starbuncle_shards");
  potting_rod("kubejs:whirlisprig_rod", "ars_nouveau:whirlisprig_shards");
  potting_rod("kubejs:wixie_rod", "ars_nouveau:wixie_shards");
  // Cataclysm
  potting_rod("kubejs:ignitium_rod", "cataclysm:ignitium_ingot");
  potting_rod("kubejs:witherite_rod", "cataclysm:witherite_ingot");
  // Create
  potting_rod("kubejs:andesite_rod", "create:andesite_alloy");
  potting_rod("kubejs:brass_rod", "create:brass_ingot");
  potting_rod("kubejs:electrum_rod", "createaddition:electrum_ingot");
  potting_rod("kubejs:experience_rod", "create:experience_nugget");
  potting_rod("kubejs:rose_quartz_rod", "create:rose_quartz");
  // Deeper and Darker
  potting_rod("kubejs:deep_rod", "deeperdarker:heart_of_the_deep");
  // Eidolon
  potting_rod("kubejs:arcane_gold_rod", "eidolon:arcane_gold_ingot");
  potting_rod("kubejs:ash_rod", "eidolon:enchanted_ash");
  potting_rod("kubejs:pewter_rod", "eidolon:pewter_ingot");
  // Extended Crafting
  potting_rod("kubejs:crystaltine_rod", "extendedcrafting:crystaltine_ingot");
  potting_rod("kubejs:ender_rod", "extendedcrafting:ender_ingot");
  potting_rod("kubejs:enhanced_ender_rod", "extendedcrafting:enhanced_ender_ingot");
  potting_rod("kubejs:enhanced_redstone_rod", "extendedcrafting:enhanced_redstone_ingot");
  potting_rod("kubejs:the_ultimate_rod", "extendedcrafting:the_ultimate_ingot");
  // Farlanders
  potting_rod("kubejs:endumium_rod", "farlanders:endumium_crystal");
  potting_rod("kubejs:titan_rod", "farlanders:titan_hide");
  // Mekanism
  potting_rod("kubejs:antimatter_rod", "mekanism:pellet_antimatter");
  potting_rod("kubejs:bronze_rod", "mekanism:ingot_bronze");
  potting_rod("kubejs:hdpe_rod", "mekanism:hdpe_pellet");
  potting_rod("kubejs:refined_glowstone_rod", "mekanism:ingot_refined_glowstone");
  potting_rod("kubejs:refined_obsidian_rod", "mekanism:ingot_refined_obsidian");
  potting_rod("kubejs:steel_rod", "mekanism:ingot_steel");
  // RFTools
  potting_rod("kubejs:dimensional_rod", "rftoolsbase:dimensionalshard");
  // The Undergarden
  potting_rod("kubejs:cloggrum_rod", "undergarden:cloggrum_ingot");
  potting_rod("kubejs:forgotten_rod", "undergarden:forgotten_ingot");
  // Twilight Forest
  potting_rod("kubejs:arctic_rod", "twilightforest:arctic_fur");
  potting_rod("kubejs:fiery_rod", "twilightforest:fiery_ingot");
  // Special - Wood
  e.custom({
    type: "createaddition:rolling",
    input: {
      tag: "minecraft:planks"
    },
    result: {
      item: "kubejs:wood_rod",
      count: 2
    }
  });
  e.custom({
    type: "mekanism:sawing",
    input: {
      ingredient: {
        tag: "minecraft:planks"
      }
    },
    mainOutput: {
      count: 2,
      item: "kubejs:wood_rod"
    }
  });
  //#endregion
  //#region - Giant Custom Obsidian
  let potting_giant_custom_obsidian = (rod, giant_obsidian, result) => {
    e.shaped(result, ["AAA", " B ", "AAA"], {
      A: rod,
      B: giant_obsidian
    });
  };
  potting_giant_custom_obsidian("kubejs:antimatter_rod", "twilightforest:giant_obsidian", "kubejs:giant_anti_obsidian");
  potting_giant_custom_obsidian("kubejs:the_ultimate_rod", "kubejs:giant_anti_obsidian", "kubejs:giant_ultimate_obsidian");
  //#endregion
  //#region - Creative Control Circuit
  e.shaped("kubejs:creative_control_circuit", ["ABA"], { A: "kubejs:alloy_creative", B: "mekanism:ultimate_control_circuit" });
  //#endregion
  //#region - Apparatus
  let potting_apparatus_complex = (
    Apparatus,
    Mat1G,
    Mat1P,
    Mat1R,
    Mat2G,
    Mat2P,
    Mat2R,
    Mat3G,
    Mat3P,
    Mat3R,
    Mat4G,
    Mat4P,
    Mat4R,
    Mat5G,
    Mat5P,
    Mat5R,
    Mat6G,
    Mat6P,
    Mat6R,
    Mat7G,
    Mat7P,
    Mat7R,
    Mat8G,
    Mat8P,
    Mat8R,
    UpR,
    LeftR,
    CenterG,
    RightR,
    DownR
  ) => {
    e.custom({
      type: "create:mechanical_crafting",
      pattern: ["  X C  ", " VWABD ", "UT a EF", " SbcdG ", "RQ e HI", " PNMKJ ", "  O L  "],
      key: {
        A: { item: Mat1G },
        B: { item: Mat1P },
        C: { item: Mat1R },
        D: { item: Mat2G },
        E: { item: Mat2P },
        F: { item: Mat2R },
        G: { item: Mat3G },
        H: { item: Mat3P },
        I: { item: Mat3R },
        J: { item: Mat4G },
        K: { item: Mat4P },
        L: { item: Mat4R },
        M: { item: Mat5G },
        N: { item: Mat5P },
        O: { item: Mat5R },
        P: { item: Mat6G },
        Q: { item: Mat6P },
        R: { item: Mat6R },
        S: { item: Mat7G },
        T: { item: Mat7P },
        U: { item: Mat7R },
        V: { item: Mat8G },
        W: { item: Mat8P },
        X: { item: Mat8R },
        a: { item: UpR },
        b: { item: LeftR },
        c: { item: CenterG },
        d: { item: RightR },
        e: { item: DownR }
      },
      result: { item: Apparatus }
    });
  };
  potting_apparatus_complex(
    "kubejs:basical_apparatus",
    "kubejs:lapis_lazuli_gear",
    "kubejs:lapis_lazuli_plate",
    "kubejs:lapis_lazuli_rod",
    "kubejs:coal_gear",
    "kubejs:coal_plate",
    "kubejs:coal_rod",
    "kubejs:netherite_gear",
    "kubejs:netherite_plate",
    "kubejs:netherite_rod",
    "kubejs:diamond_gear",
    "kubejs:diamond_plate",
    "kubejs:diamond_rod",
    "kubejs:emerald_gear",
    "kubejs:emerald_plate",
    "kubejs:emerald_rod",
    "kubejs:copper_gear",
    "kubejs:copper_plate",
    "kubejs:copper_rod",
    "kubejs:gold_gear",
    "kubejs:gold_plate",
    "kubejs:gold_rod",
    "kubejs:iron_gear",
    "kubejs:iron_plate",
    "kubejs:iron_rod",
    "kubejs:nether_quartz_rod",
    "kubejs:redstone_rod",
    "kubejs:echo_gear",
    "kubejs:amethyst_rod",
    "kubejs:glowstone_rod"
  );
  potting_apparatus_complex(
    "kubejs:magical_apparatus",
    "kubejs:drygmy_gear",
    "kubejs:drygmy_plate",
    "kubejs:drygmy_rod",
    "kubejs:wixie_gear",
    "kubejs:wixie_plate",
    "kubejs:wixie_rod",
    "kubejs:whirlisprig_gear",
    "kubejs:whirlisprig_plate",
    "kubejs:whirlisprig_rod",
    "kubejs:starbuncle_gear",
    "kubejs:starbuncle_plate",
    "kubejs:starbuncle_rod",
    "kubejs:endumium_gear",
    "kubejs:endumium_plate",
    "kubejs:endumium_rod",
    "kubejs:prismarine_crystals_gear",
    "kubejs:prismarine_crystals_plate",
    "kubejs:prismarine_crystals_rod",
    "kubejs:ender_gear",
    "kubejs:ender_plate",
    "kubejs:ender_rod",
    "kubejs:dimensional_gear",
    "kubejs:dimensional_plate",
    "kubejs:dimensional_rod",
    "kubejs:neptunium_rod",
    "kubejs:pewter_rod",
    "kubejs:source_gear",
    "kubejs:arcane_gold_rod",
    "kubejs:ash_rod"
  );
  potting_apparatus_complex(
    "kubejs:mechanical_apparatus",
    "kubejs:andesite_gear",
    "kubejs:andesite_plate",
    "kubejs:andesite_rod",
    "kubejs:rose_quartz_gear",
    "kubejs:rose_quartz_plate",
    "kubejs:rose_quartz_rod",
    "kubejs:crystaltine_gear",
    "kubejs:crystaltine_plate",
    "kubejs:crystaltine_rod",
    "kubejs:enhanced_redstone_gear",
    "kubejs:enhanced_redstone_plate",
    "kubejs:enhanced_redstone_rod",
    "kubejs:enhanced_ender_gear",
    "kubejs:enhanced_ender_plate",
    "kubejs:enhanced_ender_rod",
    "kubejs:refined_obsidian_gear",
    "kubejs:refined_obsidian_plate",
    "kubejs:refined_obsidian_rod",
    "kubejs:refined_glowstone_gear",
    "kubejs:refined_glowstone_plate",
    "kubejs:refined_glowstone_rod",
    "kubejs:steel_gear",
    "kubejs:steel_plate",
    "kubejs:steel_rod",
    "kubejs:arctic_rod",
    "kubejs:fiery_rod",
    "kubejs:antimatter_gear",
    "kubejs:bronze_rod",
    "kubejs:cloggrum_rod"
  );
  potting_apparatus_complex(
    "kubejs:vital_apparatus",
    "kubejs:experience_gear",
    "kubejs:experience_plate",
    "kubejs:experience_rod",
    "kubejs:witherite_gear",
    "kubejs:witherite_plate",
    "kubejs:witherite_rod",
    "kubejs:straddlite_gear",
    "kubejs:straddlite_plate",
    "kubejs:straddlite_rod",
    "kubejs:honey_gear",
    "kubejs:honey_plate",
    "kubejs:honey_rod",
    "kubejs:sea_gear",
    "kubejs:sea_plate",
    "kubejs:sea_rod",
    "kubejs:dragon_gear",
    "kubejs:dragon_plate",
    "kubejs:dragon_rod",
    "kubejs:deep_gear",
    "kubejs:deep_plate",
    "kubejs:deep_rod",
    "kubejs:scute_gear",
    "kubejs:scute_plate",
    "kubejs:scute_rod",
    "kubejs:phantom_rod",
    "kubejs:ignitium_rod",
    "kubejs:nether_star_gear",
    "kubejs:forgotten_rod",
    "kubejs:titan_rod"
  );
  let potting_apparatus_simple = (Apparatus, CornerLU, Up, CornerRU, Left, Right, CornerLD, Down, CornerRD) => {
    e.shaped(Apparatus, ["ABC", "DEF", "GHI"], {
      A: CornerLU,
      B: Up,
      C: CornerRU,
      D: Left,
      E: "extendedcrafting:the_ultimate_nugget",
      F: Right,
      G: CornerLD,
      H: Down,
      I: CornerRD
    });
  };
  potting_apparatus_simple(
    "kubejs:basical_apparatus",
    "kubejs:iron_gear",
    "kubejs:lapis_lazuli_gear",
    "kubejs:coal_gear",
    "kubejs:gold_gear",
    "kubejs:netherite_gear",
    "kubejs:echo_gear",
    "kubejs:emerald_gear",
    "kubejs:diamond_gear"
  );
  potting_apparatus_simple(
    "kubejs:magical_apparatus",
    "kubejs:dimensional_gear",
    "kubejs:source_gear",
    "kubejs:pewter_gear",
    "kubejs:wixie_gear",
    "kubejs:ash_gear",
    "kubejs:prismarine_crystals_gear",
    "kubejs:endumium_gear",
    "kubejs:starbuncle_gear"
  );
  potting_apparatus_simple(
    "kubejs:mechanical_apparatus",
    "kubejs:steel_gear",
    "kubejs:andesite_gear",
    "kubejs:rose_quartz_gear",
    "kubejs:refined_glowstone_gear",
    "kubejs:antimatter_gear",
    "kubejs:refined_obsidian_gear",
    "kubejs:enhanced_ender_gear",
    "kubejs:enhanced_redstone_gear"
  );
  potting_apparatus_simple(
    "kubejs:vital_apparatus",
    "kubejs:nether_star_gear",
    "kubejs:experience_gear",
    "kubejs:titan_gear",
    "kubejs:deep_gear",
    "kubejs:straddlite_gear",
    "kubejs:dragon_gear",
    "kubejs:sea_gear",
    "kubejs:honey_gear"
  );
  //#endregion
  //#region - Creative Fluid
  e.custom({
    type: "create:mixing",
    heatRequirement: "superheated",
    ingredients: [
      {
        item: "kubejs:block_creative"
      }
    ],
    results: [
      {
        amount: 1000,
        fluid: "kubejs:fluid_creative"
      }
    ]
  });
  //#endregion
  //#region - Creative Alloy
  let potting_creative_alloy = (base, result) => {
    e.custom({
      type: "mekanism:enriching",
      input: {
        ingredient: {
          item: base
        }
      },
      output: {
        item: result
      }
    });
    e.custom({
      type: "create:sandpaper_polishing",
      ingredients: [
        {
          item: base
        }
      ],
      results: [
        {
          item: result
        }
      ]
    });
  };
  potting_creative_alloy("createchromaticreturn:multiplite_ingot", "kubejs:alloy_creative");
  //#endregion
  //#region - Creative Alloy Block
  e.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "dustrial_decor:industrial_iron_block"
      },
      {
        amount: 1000,
        fluid: "kubejs:fluid_creative"
      }
    ],
    results: [
      {
        item: "kubejs:block_creative"
      }
    ]
  });
  //#endregion
  //#region - Blank Template
  e.shaped("kubejs:blank_template_upgrade", ["AAA", "ABA", " A "], { A: "twilightforest:mazestone", B: "moa_decor_art:martilloycincel" });
  e.shaped("kubejs:blank_template_trim", [" AA", "ABA", "AA "], { A: "twilightforest:mazestone", B: "moa_decor_art:martilloycincel" });
  //#endregion
});
//#endregion
