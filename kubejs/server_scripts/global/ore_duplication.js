//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  //#region - Ores
  e.add("forge:ores/adamantite", /adamantite_node/);
  e.add("forge:ores/ambrosium", /ambrosium_ore/);
  e.add("forge:ores/aquamarine", /aquamarine_ore/);
  e.add("forge:ores/bismuth", /bismuth_ore/);
  e.add("forge:ores/chorundum", /chorundum_ore/);
  e.add("forge:ores/cloggrum", /cloggrum_ore/);
  e.add("forge:ores/coal", /coal_ore/);
  e.add("forge:ores/copper", /copper_ore/);
  e.add("forge:ores/diamond", /diamond_ore/);
  e.add("forge:ores/dimensional", /rftoolsbase:dimensionalshard_/);
  e.add("forge:ores/emerald", /emerald_ore/);
  e.add("forge:ores/endumium", /endumium_ore/);
  e.add("forge:ores/fluorite", /fluorite_ore/);
  e.add("forge:ores/froststeel", /froststeel_ore/);
  e.add("forge:ores/gold", /gold_ore/);
  e.add("forge:ores/gravitite", /gravitite_ore/);
  e.add("forge:ores/iron", /iron_ore/);
  e.add("forge:ores/irradium", /irradium_ore/);
  e.add("forge:ores/jade", /jade_ore/);
  e.add("forge:ores/lapis", /lapis_ore/);
  e.add("forge:ores/lead", /lead_ore/);
  e.add("forge:ores/malachite", /malachite_ore/);
  e.add("forge:ores/netherite", "minecraft:ancient_debris");
  e.add("forge:ores/onyx", /onyx_ore/);
  e.add("forge:ores/osmium", /osmium_ore/);
  e.add("forge:ores/quartz", /quartz_ore/);
  e.add("forge:ores/redstone", /redstone_ore/);
  e.add("forge:ores/regalium", /regalium_ore/);
  e.add("forge:ores/ruby", /ruby_ore/);
  e.add("forge:ores/silver", /silver_ore/);
  e.add("forge:ores/tin", /tin_ore/);
  e.add("forge:ores/tungsten", /tungsten_ore/);
  e.add("forge:ores/uranium", /uranium_ore/);
  e.add("forge:ores/utherium", /utherium_ore/);
  e.add("forge:ores/valkyrum", /valkyrum_ore/);
  e.add("forge:ores/zanite", /zanite_ore/);
  e.add("forge:ores/zinc", /zinc_ore/);
  e.add("forge:modfart/ores", [
    "aether:ambrosium_ore",
    "aether:gravitite_ore",
    "aether:zanite_ore",
    "alexscaves:coprolith_coal_ore",
    "alexscaves:galena_iron_ore",
    "alexscaves:guanostone_redstone_ore",
    "alexscaves:radrock_uranium_ore",
    "ancient_aether:aether_quartz_ore",
    "ancient_aether:valkyrum_ore",
    "create:deepslate_zinc_ore",
    "create:zinc_ore",
    "deeperdarker:gloomslate_coal_ore",
    "deeperdarker:gloomslate_copper_ore",
    "deeperdarker:gloomslate_diamond_ore",
    "deeperdarker:gloomslate_emerald_ore",
    "deeperdarker:gloomslate_gold_ore",
    "deeperdarker:gloomslate_iron_ore",
    "deeperdarker:gloomslate_lapis_ore",
    "deeperdarker:gloomslate_redstone_ore",
    "deeperdarker:sculk_stone_coal_ore",
    "deeperdarker:sculk_stone_copper_ore",
    "deeperdarker:sculk_stone_diamond_ore",
    "deeperdarker:sculk_stone_emerald_ore",
    "deeperdarker:sculk_stone_gold_ore",
    "deeperdarker:sculk_stone_iron_ore",
    "deeperdarker:sculk_stone_lapis_ore",
    "deeperdarker:sculk_stone_redstone_ore",
    "eidolon:deep_lead_ore",
    "eidolon:deep_silver_ore",
    "eidolon:lead_ore",
    "eidolon:silver_ore",
    "enlightened_end:bismuth_ore",
    "enlightened_end:irradium_ore",
    "enlightened_end:malachite_ore",
    "farlanders:deepslate_endumium_ore",
    "farlanders:endumium_ore",
    "meadow:alpine_coal_ore",
    "meadow:alpine_copper_ore",
    "meadow:alpine_diamond_ore",
    "meadow:alpine_emerald_ore",
    "meadow:alpine_gold_ore",
    "meadow:alpine_iron_ore",
    "meadow:alpine_lapis_ore",
    "meadow:alpine_redstone_ore",
    "mekanism:deepslate_fluorite_ore",
    "mekanism:deepslate_lead_ore",
    "mekanism:deepslate_osmium_ore",
    "mekanism:deepslate_tin_ore",
    "mekanism:deepslate_uranium_ore",
    "mekanism:fluorite_ore",
    "mekanism:lead_ore",
    "mekanism:osmium_ore",
    "mekanism:tin_ore",
    "mekanism:uranium_ore",
    "minecraft:ancient_debris",
    "minecraft:coal_ore",
    "minecraft:copper_ore",
    "minecraft:deepslate_coal_ore",
    "minecraft:deepslate_copper_ore",
    "minecraft:deepslate_diamond_ore",
    "minecraft:deepslate_emerald_ore",
    "minecraft:deepslate_gold_ore",
    "minecraft:deepslate_iron_ore",
    "minecraft:deepslate_lapis_ore",
    "minecraft:deepslate_redstone_ore",
    "minecraft:diamond_ore",
    "minecraft:emerald_ore",
    "minecraft:gold_ore",
    "minecraft:iron_ore",
    "minecraft:lapis_ore",
    "minecraft:nether_gold_ore",
    "minecraft:nether_quartz_ore",
    "minecraft:redstone_ore",
    "rftoolsbase:dimensionalshard_end",
    "rftoolsbase:dimensionalshard_nether",
    "rftoolsbase:dimensionalshard_overworld",
    "samurai_dynasty:aquamarine_ore",
    "samurai_dynasty:deepslate_aquamarine_ore",
    "samurai_dynasty:deepslate_jade_ore",
    "samurai_dynasty:deepslate_onyx_ore",
    "samurai_dynasty:deepslate_ruby_ore",
    "samurai_dynasty:deepslate_silver_ore",
    "samurai_dynasty:jade_ore",
    "samurai_dynasty:onyx_ore",
    "samurai_dynasty:ruby_ore",
    "samurai_dynasty:silver_ore",
    "stalwart_dungeons:chorundum_ore",
    "stalwart_dungeons:tungsten_ore",
    "undergarden:depthrock_cloggrum_ore",
    "undergarden:depthrock_coal_ore",
    "undergarden:depthrock_diamond_ore",
    "undergarden:depthrock_gold_ore",
    "undergarden:depthrock_iron_ore",
    "undergarden:depthrock_regalium_ore",
    "undergarden:depthrock_utherium_ore",
    "undergarden:shiverstone_cloggrum_ore",
    "undergarden:shiverstone_coal_ore",
    "undergarden:shiverstone_diamond_ore",
    "undergarden:shiverstone_froststeel_ore",
    "undergarden:shiverstone_iron_ore",
    "undergarden:shiverstone_regalium_ore",
    "undergarden:shiverstone_utherium_ore",
    "enlightened_end:adamantite_node"
  ]);
  //#endregion
});
//#endregion

//#region - Loot Tables
ServerEvents.blockLootTables(e => {
  //#region - Ore Drop
  let potting_ore_drop = (Block, Ore, Raw) => {
    e.addBlock(Ore, table => {
      table.addPool(no_enchant => {
        no_enchant.survivesExplosion();
        no_enchant.addCondition({
          condition: "minecraft:match_tool"
        });
        no_enchant.addCondition({
          condition: "minecraft:inverted",
          term: {
            condition: "minecraft:match_tool",
            predicate: {
              enchantments: [
                {
                  enchantment: "minecraft:silk_touch",
                  levels: {
                    min: 1
                  }
                }
              ]
            }
          }
        });
        no_enchant.addCondition({
          condition: "minecraft:inverted",
          term: {
            condition: "minecraft:match_tool",
            predicate: {
              enchantments: [
                {
                  enchantment: "minecraft:fortune",
                  levels: {
                    min: 1
                  }
                }
              ]
            }
          }
        });
        no_enchant.rolls = 1;
        no_enchant.addItem(Raw);
      });
      table.addPool(silk_touch => {
        silk_touch.survivesExplosion();
        silk_touch.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:silk_touch",
                levels: {
                  min: 1
                }
              }
            ]
          }
        });
        silk_touch.rolls = 1;
        silk_touch.addItem(Block);
      });
      table.addPool(fortune1 => {
        fortune1.survivesExplosion();
        fortune1.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 1
              }
            ]
          }
        });
        fortune1.rolls = 2;
        fortune1.addItem(Raw);
      });
      table.addPool(fortune2 => {
        fortune2.survivesExplosion();
        fortune2.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 2
              }
            ]
          }
        });
        fortune2.rolls = 4;
        fortune2.addItem(Raw);
      });
      table.addPool(fortune3 => {
        fortune3.survivesExplosion();
        fortune3.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 3
              }
            ]
          }
        });
        fortune3.rolls = 6;
        fortune3.addItem(Raw);
      });
      table.addPool(fortune4 => {
        fortune4.survivesExplosion();
        fortune4.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 4
              }
            ]
          }
        });
        fortune4.rolls = 8;
        fortune4.addItem(Raw);
      });
      table.addPool(fortune5 => {
        fortune5.survivesExplosion();
        fortune5.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 5
              }
            ]
          }
        });
        fortune5.rolls = 10;
        fortune5.addItem(Raw);
      });
      table.addPool(fortune6 => {
        fortune6.survivesExplosion();
        fortune6.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 6
              }
            ]
          }
        });
        fortune6.rolls = 12;
        fortune6.addItem(Raw);
      });
      table.addPool(fortune7 => {
        fortune7.survivesExplosion();
        fortune7.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 7
              }
            ]
          }
        });
        fortune7.rolls = 14;
        fortune7.addItem(Raw);
      });
      table.addPool(fortune8 => {
        fortune8.survivesExplosion();
        fortune8.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 8
              }
            ]
          }
        });
        fortune8.rolls = 16;
        fortune8.addItem(Raw);
      });
      table.addPool(fortune9 => {
        fortune9.survivesExplosion();
        fortune9.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 9
              }
            ]
          }
        });
        fortune9.rolls = 18;
        fortune9.addItem(Raw);
      });
      table.addPool(fortune10 => {
        fortune10.survivesExplosion();
        fortune10.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:fortune",
                levels: 10
              }
            ]
          }
        });
        fortune10.rolls = 20;
        fortune10.addItem(Raw);
      });
    });
  };
  /*Adamantite*/ potting_ore_drop("enlightened_end:adamantite_node", ["enlightened_end:adamantite_node"], "kubejs:raw_adamantite");
  /*Ambrosium*/ potting_ore_drop("aether:ambrosium_ore", ["aether:ambrosium_ore"], "kubejs:raw_ambrosium");
  /*Ancient Debris*/ potting_ore_drop("minecraft:ancient_debris", ["minecraft:ancient_debris"], "kubejs:raw_netherite");
  /*Aquamarine*/ potting_ore_drop("samurai_dynasty:aquamarine_ore", ["samurai_dynasty:aquamarine_ore", "samurai_dynasty:deepslate_aquamarine_ore"], "kubejs:raw_aquamarine");
  /*Bismuth*/ potting_ore_drop("enlightened_end:bismuth_ore", ["enlightened_end:bismuth_ore"], "enlightened_end:raw_bismuth");
  /*Chorundum*/ potting_ore_drop("stalwart_dungeons:chorundum_ore", ["stalwart_dungeons:chorundum_ore"], "kubejs:raw_chorundum");
  /*Cloggrum*/ potting_ore_drop("undergarden:depthrock_cloggrum_ore", ["undergarden:depthrock_cloggrum_ore", "undergarden:shiverstone_cloggrum_ore"], "undergarden:raw_cloggrum");
  /*Coal*/ potting_ore_drop(
    "minecraft:coal_ore",
    [
      "minecraft:coal_ore",
      "minecraft:deepslate_coal_ore",
      "meadow:alpine_coal_ore",
      "alexscaves:coprolith_coal_ore",
      "deeperdarker:sculk_stone_coal_ore",
      "deeperdarker:gloomslate_coal_ore",
      "undergarden:depthrock_coal_ore",
      "undergarden:shiverstone_coal_ore"
    ],
    "kubejs:raw_coal"
  );
  /*Copper*/ potting_ore_drop(
    "minecraft:copper_ore",
    ["minecraft:copper_ore", "minecraft:deepslate_copper_ore", "meadow:alpine_copper_ore", "deeperdarker:sculk_stone_copper_ore", "deeperdarker:gloomslate_copper_ore"],
    "minecraft:raw_copper"
  );
  /*Diamond*/ potting_ore_drop(
    "minecraft:diamond_ore",
    [
      "minecraft:diamond_ore",
      "minecraft:deepslate_diamond_ore",
      "meadow:alpine_diamond_ore",
      "deeperdarker:sculk_stone_diamond_ore",
      "deeperdarker:gloomslate_diamond_ore",
      "undergarden:depthrock_diamond_ore",
      "undergarden:shiverstone_diamond_ore"
    ],
    "kubejs:raw_diamond"
  );
  /*Dimensional*/ potting_ore_drop(
    "rftoolsbase:dimensionalshard_overworld",
    ["rftoolsbase:dimensionalshard_overworld", "rftoolsbase:dimensionalshard_nether", "rftoolsbase:dimensionalshard_end"],
    "kubejs:raw_dimensional"
  );
  /*Emerald*/ potting_ore_drop(
    "minecraft:emerald_ore",
    ["minecraft:emerald_ore", "minecraft:deepslate_emerald_ore", "meadow:alpine_emerald_ore", "deeperdarker:sculk_stone_emerald_ore", "deeperdarker:gloomslate_emerald_ore"],
    "kubejs:raw_emerald"
  );
  /*Endumium*/ potting_ore_drop(["farlanders:endumium_ore", "farlanders:deepslate_endumium_ore"], "farlanders:endumium_ore", "kubejs:raw_endumium");
  /*Fluorite*/ potting_ore_drop(["mekanism:fluorite_ore", "mekanism:deepslate_fluorite_ore"], "mekanism:fluorite_ore", "kubejs:raw_fluorite");
  /*Froststeel*/ potting_ore_drop(["undergarden:shiverstone_froststeel_ore"], "undergarden:shiverstone_froststeel_ore", "undergarden:raw_froststeel");
  /*Gold*/ potting_ore_drop(
    "minecraft:gold_ore",
    [
      "minecraft:gold_ore",
      "minecraft:deepslate_gold_ore",
      "minecraft:nether_gold_ore",
      "meadow:alpine_gold_ore",
      "deeperdarker:sculk_stone_gold_ore",
      "deeperdarker:gloomslate_gold_ore",
      "undergarden:depthrock_gold_ore"
    ],
    "minecraft:raw_gold"
  );
  /*Gravitite*/ potting_ore_drop(["aether:gravitite_ore"], "aether:gravitite_ore", "kubejs:raw_gravitite");
  /*Iron*/ potting_ore_drop(
    "minecraft:iron_ore",
    [
      "minecraft:iron_ore",
      "minecraft:deepslate_iron_ore",
      "meadow:alpine_iron_ore",
      "alexscaves:galena_iron_ore",
      "deeperdarker:sculk_stone_iron_ore",
      "deeperdarker:gloomslate_iron_ore",
      "undergarden:depthrock_iron_ore",
      "undergarden:shiverstone_iron_ore"
    ],
    "minecraft:raw_iron"
  );
  /*Irradium*/ potting_ore_drop(["enlightened_end:irradium_ore"], "enlightened_end:irradium_ore", "enlightened_end:raw_irradium");
  /*Jade*/ potting_ore_drop(["samurai_dynasty:jade_ore", "samurai_dynasty:deepslate_jade_ore"], "samurai_dynasty:jade_ore", "kubejs:raw_jade");
  /*Lapis Lazuli*/ potting_ore_drop(
    "minecraft:lapis_ore",
    ["minecraft:lapis_ore", "minecraft:deepslate_lapis_ore", "meadow:alpine_lapis_ore", "deeperdarker:sculk_stone_lapis_ore", "deeperdarker:gloomslate_lapis_ore"],
    "kubejs:raw_lapis"
  );
  /*Lead*/ potting_ore_drop(["mekanism:lead_ore", "mekanism:deepslate_lead_ore", "eidolon:lead_ore", "eidolon:deep_lead_ore"], "mekanism:lead_ore", "mekanism:raw_lead");
  /*Malachite*/ potting_ore_drop(["enlightened_end:malachite_ore"], "enlightened_end:malachite_ore", "kubejs:raw_malachite");
  /*Onyx*/ potting_ore_drop(["samurai_dynasty:onyx_ore", "samurai_dynasty:deepslate_onyx_ore"], "samurai_dynasty:onyx_ore", "kubejs:raw_onyx");
  /*Osmium*/ potting_ore_drop(["mekanism:osmium_ore", "mekanism:deepslate_osmium_ore"], "mekanism:osmium_ore", "mekanism:raw_osmium");
  /*Quartz*/ potting_ore_drop("minecraft:nether_quartz_ore", ["minecraft:nether_quartz_ore", "ancient_aether:aether_quartz_ore"], "kubejs:raw_quartz");
  /*Redstone*/ potting_ore_drop(
    "minecraft:redstone_ore",
    [
      "minecraft:redstone_ore",
      "minecraft:deepslate_redstone_ore",
      "meadow:alpine_redstone_ore",
      "alexscaves:guanostone_redstone_ore",
      "deeperdarker:sculk_stone_redstone_ore",
      "deeperdarker:gloomslate_redstone_ore"
    ],
    "kubejs:raw_redstone"
  );
  /*Regalium*/ potting_ore_drop(["undergarden:depthrock_regalium_ore", "undergarden:shiverstone_regalium_ore"], "undergarden:depthrock_regalium_ore", "kubejs:raw_regalium");
  /*Ruby*/ potting_ore_drop(["samurai_dynasty:ruby_ore", "samurai_dynasty:deepslate_ruby_ore"], "samurai_dynasty:ruby_ore", "kubejs:raw_ruby");
  /*Silver*/ potting_ore_drop(
    ["samurai_dynasty:silver_ore", "samurai_dynasty:deepslate_silver_ore", "eidolon:silver_ore", "eidolon:deep_silver_ore"],
    "samurai_dynasty:silver_ore",
    "kubejs:raw_silver"
  );
  /*Tin*/ potting_ore_drop(["mekanism:tin_ore", "mekanism:deepslate_tin_ore"], "mekanism:tin_ore", "mekanism:raw_tin");
  /*Tungsten*/ potting_ore_drop(["stalwart_dungeons:tungsten_ore"], "stalwart_dungeons:tungsten_ore", "stalwart_dungeons:raw_tungsten");
  /*Uranium*/ potting_ore_drop(["mekanism:uranium_ore", "mekanism:deepslate_uranium_ore"], "mekanism:uranium_ore", "mekanism:raw_uranium");
  /*Utherium*/ potting_ore_drop(["undergarden:depthrock_utherium_ore", "undergarden:shiverstone_utherium_ore"], "undergarden:depthrock_utherium_ore", "kubejs:raw_utherium");
  /*Valkyrum*/ potting_ore_drop(["ancient_aether:valkyrum_ore"], "ancient_aether:valkyrum_ore", "kubejs:raw_valkyrum");
  /*Zanite*/ potting_ore_drop(["aether:zanite_ore"], "aether:zanite_ore", "kubejs:raw_zanite");
  /*Zinc*/ potting_ore_drop(["create:zinc_ore", "create:deepslate_zinc_ore"], "create:zinc_ore", "create:raw_zinc");
  //#endregion
});
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([
    { id: "create:crushing/gilded_blackstone" },
    { id: "createchromaticreturn:copper_doubling" },
    { id: "createchromaticreturn:copper_fortunite" },
    { id: "createchromaticreturn:diamond_doubling" },
    { id: "createchromaticreturn:diamond_fortunite" },
    { id: "createchromaticreturn:emerald_doubling" },
    { id: "createchromaticreturn:emerald_fortunite" },
    { id: "createchromaticreturn:gold_doubling" },
    { id: "createchromaticreturn:gold_fortunite" },
    { id: "createchromaticreturn:iron_doubling" },
    { id: "createchromaticreturn:iron_fortunite" },
    { id: "createchromaticreturn:netherite_doubling" },
    { id: "createchromaticreturn:netherite_fortunite" },
    { id: "createchromaticreturn:zinc_doubling" },
    { id: "createchromaticreturn:zinc_fortunite" },
    { id: "createchromaticreturn:zinc_recipe" },
    { id: "deeperdarker:copper_ingot_from_blasting_sculk_stone_copper_ore" },
    { id: "deeperdarker:copper_ingot_from_smelting_sculk_stone_copper_ore" },
    { id: "deeperdarker:gold_ingot_from_blasting_sculk_stone_gold_ore" },
    { id: "deeperdarker:gold_ingot_from_smelting_sculk_stone_gold_ore" },
    { id: "deeperdarker:iron_ingot_from_blasting_sculk_stone_iron_ore" },
    { id: "deeperdarker:iron_ingot_from_smelting_sculk_stone_iron_ore" },
    { id: "meadow:coal_from_blasting_alpine_coal_ore" },
    { id: "meadow:coal_from_smelting_alpine_coal_ore" },
    { id: "meadow:copper_ingot_from_blasting_alpine_copper_ore" },
    { id: "meadow:copper_ingot_from_smelting_alpine_copper_ore" },
    { id: "meadow:diamond_from_blasting_alpine_diamond_ore" },
    { id: "meadow:diamond_from_smelting_alpine_diamond_ore" },
    { id: "meadow:emerald_from_blasting_alpine_emerald_ore" },
    { id: "meadow:emerald_from_smelting_alpine_emerald_ore" },
    { id: "meadow:gold_ingot_from_blasting_alpine_gold_ore" },
    { id: "meadow:gold_ingot_from_smelting_alpine_gold_ore" },
    { id: "meadow:iron_ingot_from_blasting_alpine_iron_ore" },
    { id: "meadow:iron_ingot_from_smelting_alpine_iron_ore" },
    { id: "meadow:lapis_lazuli_from_blasting_alpine_lapis_ore" },
    { id: "meadow:lapis_lazuli_from_smelting_alpine_lapis_ore" },
    { id: "meadow:redstone_from_blasting_alpine_redstone_ore" },
    { id: "meadow:redstone_from_smelting_alpine_redstone_ore" },
    { id: "minecraft:netherite_scrap" },
    { id: "minecraft:quartz" },
    { id: "undergarden:blast_raw_cloggrum" },
    { id: "undergarden:blast_raw_froststeel" },
    { id: "undergarden:smelt_raw_cloggrum" },
    { id: "undergarden:smelt_raw_froststeel" },
    { id: /aether:ambrosium_shard_from_blasting/ },
    { id: /aether:ambrosium_shard_from_smelting/ },
    { id: /aether:enchanted_gravitite_enchanting/ },
    { id: /aether:quartz_from_blasting/ },
    { id: /aether:quartz_from_smelting/ },
    { id: /aether:zanite_gemstone_from_blasting/ },
    { id: /aether:zanite_gemstone_from_smelting/ },
    { id: /alexscaves:furnace\/coal_from/ },
    { id: /alexscaves:furnace\/iron_from/ },
    { id: /alexscaves:furnace\/redstone_from/ },
    { id: /alexscaves:furnace\/uranium_from/ },
    { id: /create:blasting\/zinc_ingot/ },
    { id: /create:crushing\/coal_ore/ },
    { id: /create:crushing\/compat\/aether\// },
    { id: /create:crushing\/copper_ore/ },
    { id: /create:crushing\/deepslate_/ },
    { id: /create:crushing\/diamond_ore/ },
    { id: /create:crushing\/emerald_ore/ },
    { id: /create:crushing\/gloomslate_/ },
    { id: /create:crushing\/gold_ore/ },
    { id: /create:crushing\/iron_ore/ },
    { id: /create:crushing\/lapis_ore/ },
    { id: /create:crushing\/lead_ore/ },
    { id: /create:crushing\/nether_/ },
    { id: /create:crushing\/osmium_ore/ },
    { id: /create:crushing\/raw_/ },
    { id: /create:crushing\/redstone_ore/ },
    { id: /create:crushing\/sculk_stone_/ },
    { id: /create:crushing\/silver_ore/ },
    { id: /create:crushing\/tin_ore/ },
    { id: /create:crushing\/uranium_ore/ },
    { id: /create:crushing\/zinc_ore/ },
    { id: /create:smelting\/zinc_ingot/ },
    { id: /createaddition:crushing\/diamond/ },
    { id: /deeperdarker:.*_from_blasting_/ },
    { id: /deeperdarker:.*_from_smelting_/ },
    { id: /deeperdarker:coal_/ },
    { id: /deeperdarker:diamond_/ },
    { id: /deeperdarker:emerald_/ },
    { id: /deeperdarker:lapis_lazuli_/ },
    { id: /deeperdarker:raw_/ },
    { id: /deeperdarker:redstone_/ },
    { id: /enlightened_end:blast_/ },
    { id: /mastersword:recycle_alloy/ },
    { id: /mekanism:processing\/bronze\/ingot\/from_dust_/ },
    { id: /mekanism:processing\/coal/ },
    { id: /mekanism:processing\/copper/ },
    { id: /mekanism:processing\/diamond/ },
    { id: /mekanism:processing\/emerald/ },
    { id: /mekanism:processing\/gold/ },
    { id: /mekanism:processing\/lapis_lazuli/ },
    { id: /mekanism:processing\/netherite/ },
    { id: /mekanism:processing\/quartz/ },
    { id: /mekanism:processing\/redstone/ },
    { id: /minecraft:coal_from_blasting/ },
    { id: /minecraft:coal_from_smelting/ },
    { id: /minecraft:copper_ingot_from_blasting/ },
    { id: /minecraft:copper_ingot_from_smelting/ },
    { id: /minecraft:diamond_from_blasting/ },
    { id: /minecraft:diamond_from_smelting/ },
    { id: /minecraft:emerald_from_blasting/ },
    { id: /minecraft:emerald_from_smelting/ },
    { id: /minecraft:gold_ingot_from_blasting/ },
    { id: /minecraft:gold_ingot_from_smelting/ },
    { id: /minecraft:iron_ingot_from_blasting/ },
    { id: /minecraft:iron_ingot_from_smelting/ },
    { id: /minecraft:lapis_lazuli_from_blasting/ },
    { id: /minecraft:lapis_lazuli_from_smelting/ },
    { id: /minecraft:netherite_scrap_from_blasting/ },
    { id: /minecraft:quartz_from_blasting/ },
    { id: /minecraft:redstone_from_blasting/ },
    { id: /minecraft:redstone_from_smelting/ },
    { id: /samurai_dynasty:silver_ingot_from_blasting/ },
    { id: /samurai_dynasty:silver_ingot_from_smelting/ },
    { id: /stalwart_dungeons:chorundum_ore_smelting/ },
    { id: /stalwart_dungeons:tungsten_ingot_recipe_2/ },
    { id: /stalwart_dungeons:tungsten_ingot_recipe/ },
    { id: /undergarden:blast_depthrock_/ },
    { id: /undergarden:blast_shiverstone_/ },
    { id: /undergarden:shard_to_crystal/ },
    { id: /undergarden:smelt_depthrock_/ },
    { id: /undergarden:smelt_shiverstone_/ },
    { mod: "oregrowth" },
    { not: { id: "cyclic:copper_bars" }, id: /cyclic:copper_/ },
    { not: { id: "eidolon:blast_enchanted_ash" }, id: /eidolon:blast_/ },
    { not: { id: "eidolon:smelt_pewter_blend" }, id: /eidolon:smelt_/ },
    { not: { id: "mekanism:processing/fluorite/from_block" }, id: /mekanism:processing\/fluorite/ },
    { not: { id: "mekanism:processing/iron/enriched" }, id: /mekanism:processing\/iron/ },
    {
      not: [
        { id: "mekanism:processing/osmium/ingot/from_block" },
        { id: "mekanism:processing/osmium/ingot/from_nuggets" },
        { id: "mekanism:processing/osmium/nugget/from_ingot" },
        { id: "mekanism:processing/osmium/raw/from_raw_block" },
        { id: "mekanism:processing/osmium/raw_storage_blocks/from_raw" },
        { id: "mekanism:processing/osmium/storage_blocks/from_ingots" }
      ],
      id: /mekanism:processing\/osmium/
    },
    {
      not: [
        { id: "mekanism:processing/tin/ingot/from_block" },
        { id: "mekanism:processing/tin/ingot/from_nuggets" },
        { id: "mekanism:processing/tin/nugget/from_ingot" },
        { id: "mekanism:processing/tin/raw/from_raw_block" },
        { id: "mekanism:processing/tin/raw_storage_blocks/from_raw" },
        { id: "mekanism:processing/tin/storage_blocks/from_ingots" }
      ],
      id: /mekanism:processing\/tin/
    },
    {
      not: [
        { id: "mekanism:processing/uranium/ingot/from_block" },
        { id: "mekanism:processing/uranium/ingot/from_nuggets" },
        { id: "mekanism:processing/uranium/nugget/from_ingot" },
        { id: "mekanism:processing/uranium/raw/from_raw_block" },
        { id: "mekanism:processing/uranium/raw_storage_blocks/from_raw" },
        { id: "mekanism:processing/uranium/storage_blocks/from_ingots" }
      ],
      id: /mekanism:processing\/uranium/
    },
    {
      not: {
        id: "enlightened_end:smelt_end_stone_bricks",
        id: "enlightened_end:smelt_end_stone_tiles",
        id: "enlightened_end:smelt_ennegel_block",
        id: "enlightened_end:smelt_palerock_bricks",
        id: "enlightened_end:smelt_palerock_tiles",
        id: "enlightened_end:smelt_purpur",
        id: "enlightened_end:smelt_void_shale_bricks",
        id: "enlightened_end:smelt_void_shale_tiles"
      },
      id: /enlightened_end:smelt_/
    },
    {
      not: [
        { id: "mekanism:processing/lead/ingot/from_block" },
        { id: "mekanism:processing/lead/ingot/from_nuggets" },
        { id: "mekanism:processing/lead/nugget/from_ingot" },
        { id: "mekanism:processing/lead/raw/from_raw_block" },
        { id: "mekanism:processing/lead/raw_storage_blocks/from_raw" },
        { id: "mekanism:processing/lead/storage_blocks/from_ingots" }
      ],
      id: /mekanism:processing\/lead/
    }
  ]);
  //#endregion
  //#region - Replaced Inputs
  e.replaceInput({ input: "eidolon:lead_block" }, "eidolon:lead_block", "mekanism:block_lead");
  e.replaceInput({ input: "eidolon:lead_ingot" }, "eidolon:lead_ingot", "mekanism:ingot_lead");
  e.replaceInput({ input: "eidolon:lead_nugget" }, "eidolon:lead_nugget", "mekanism:nugget_lead");
  e.replaceOutput({ output: "moremekanismprocessing:zinc_ingot" }, "moremekanismprocessing:zinc_ingot", "create:zinc_ingot");
  //#endregion
  //#region - Ore Recreation
  let potting_ore_recreation = (input, amount, mineral, output) => {
    e.custom({
      type: "mekanism:combining",
      extraInput: {
        ingredient: {
          item: mineral
        }
      },
      mainInput: {
        amount: amount,
        ingredient: {
          item: input
        }
      },
      output: {
        item: output
      }
    });
  };
  /*Adamantite*/ potting_ore_recreation("enlightened_end:adamantite_ingot", 15, "enlightened_end:void_shale", "enlightened_end:adamantite_node");
  /*Ambrosium*/ potting_ore_recreation("aether:ambrosium_shard", 3, "aether:holystone", "aether:ambrosium_ore");
  /*Ancient Debris*/ potting_ore_recreation("minecraft:netherite_ingot", 15, "minecraft:tuff", "minecraft:ancient_debris");
  /*Aquamarine*/ potting_ore_recreation("samurai_dynasty:aquamarine", 15, "minecraft:deepslate", "samurai_dynasty:deepslate_aquamarine_ore");
  /*Aquamarine*/ potting_ore_recreation("samurai_dynasty:aquamarine", 15, "minecraft:stone", "samurai_dynasty:aquamarine_ore");
  /*Bismuth*/ potting_ore_recreation("enlightened_end:bismuth_ingot", 15, "minecraft:end_stone", "enlightened_end:bismuth_ore");
  /*Chorundum*/ potting_ore_recreation("stalwart_dungeons:chorundum", 15, "stalwart_dungeons:purpur_bricks", "stalwart_dungeons:chorundum_ore");
  /*Cloggrum*/ potting_ore_recreation("undergarden:cloggrum_ingot", 15, "undergarden:depthrock", "undergarden:depthrock_cloggrum_ore");
  /*Cloggrum*/ potting_ore_recreation("undergarden:cloggrum_ingot", 15, "undergarden:shiverstone", "undergarden:shiverstone_cloggrum_ore");
  /*Coal*/ potting_ore_recreation("minecraft:coal", 15, "alexscaves:coprolith", "alexscaves:coprolith_coal_ore");
  /*Coal*/ potting_ore_recreation("minecraft:coal", 15, "deeperdarker:gloomslate", "deeperdarker:gloomslate_coal_ore");
  /*Coal*/ potting_ore_recreation("minecraft:coal", 15, "deeperdarker:sculk_stone", "deeperdarker:sculk_stone_coal_ore");
  /*Coal*/ potting_ore_recreation("minecraft:coal", 15, "meadow:limestone", "meadow:alpine_coal_ore");
  /*Coal*/ potting_ore_recreation("minecraft:coal", 15, "minecraft:deepslate", "minecraft:deepslate_coal_ore");
  /*Coal*/ potting_ore_recreation("minecraft:coal", 15, "minecraft:stone", "minecraft:coal_ore");
  /*Coal*/ potting_ore_recreation("minecraft:coal", 15, "undergarden:depthrock", "undergarden:depthrock_coal_ore");
  /*Coal*/ potting_ore_recreation("minecraft:coal", 15, "undergarden:shiverstone", "undergarden:shiverstone_coal_ore");
  /*Copper*/ potting_ore_recreation("minecraft:copper_ingot", 15, "deeperdarker:gloomslate", "deeperdarker:gloomslate_copper_ore");
  /*Copper*/ potting_ore_recreation("minecraft:copper_ingot", 15, "deeperdarker:sculk_stone", "deeperdarker:sculk_stone_copper_ore");
  /*Copper*/ potting_ore_recreation("minecraft:copper_ingot", 15, "meadow:limestone", "meadow:alpine_copper_ore");
  /*Copper*/ potting_ore_recreation("minecraft:copper_ingot", 15, "minecraft:deepslate", "minecraft:deepslate_copper_ore");
  /*Copper*/ potting_ore_recreation("minecraft:copper_ingot", 15, "minecraft:stone", "minecraft:copper_ore");
  /*Diamond*/ potting_ore_recreation("minecraft:diamond", 15, "deeperdarker:gloomslate", "deeperdarker:gloomslate_diamond_ore");
  /*Diamond*/ potting_ore_recreation("minecraft:diamond", 15, "deeperdarker:sculk_stone", "deeperdarker:sculk_stone_diamond_ore");
  /*Diamond*/ potting_ore_recreation("minecraft:diamond", 15, "meadow:limestone", "meadow:alpine_diamond_ore");
  /*Diamond*/ potting_ore_recreation("minecraft:diamond", 15, "minecraft:deepslate", "minecraft:deepslate_diamond_ore");
  /*Diamond*/ potting_ore_recreation("minecraft:diamond", 15, "minecraft:stone", "minecraft:diamond_ore");
  /*Diamond*/ potting_ore_recreation("minecraft:diamond", 15, "undergarden:depthrock", "undergarden:depthrock_diamond_ore");
  /*Diamond*/ potting_ore_recreation("minecraft:diamond", 15, "undergarden:shiverstone", "undergarden:shiverstone_diamond_ore");
  /*Dimensional*/ potting_ore_recreation("rftoolsbase:dimensionalshard", 3, "minecraft:end_stone", "rftoolsbase:dimensionalshard_end");
  /*Dimensional*/ potting_ore_recreation("rftoolsbase:dimensionalshard", 3, "minecraft:netherrack", "rftoolsbase:dimensionalshard_nether");
  /*Dimensional*/ potting_ore_recreation("rftoolsbase:dimensionalshard", 3, "minecraft:stone", "rftoolsbase:dimensionalshard_overworld");
  /*Emerald*/ potting_ore_recreation("minecraft:emerald", 15, "deeperdarker:gloomslate", "deeperdarker:gloomslate_emerald_ore");
  /*Emerald*/ potting_ore_recreation("minecraft:emerald", 15, "deeperdarker:sculk_stone", "deeperdarker:sculk_stone_emerald_ore");
  /*Emerald*/ potting_ore_recreation("minecraft:emerald", 15, "meadow:limestone", "meadow:alpine_emerald_ore");
  /*Emerald*/ potting_ore_recreation("minecraft:emerald", 15, "minecraft:deepslate", "minecraft:deepslate_emerald_ore");
  /*Emerald*/ potting_ore_recreation("minecraft:emerald", 15, "minecraft:stone", "minecraft:emerald_ore");
  /*Endumium*/ potting_ore_recreation("farlanders:endumium_crystal", 12, "minecraft:deepslate", "farlanders:deepslate_endumium_ore");
  /*Endumium*/ potting_ore_recreation("farlanders:endumium_crystal", 12, "minecraft:stone", "farlanders:endumium_ore");
  /*Fluorite*/ potting_ore_recreation("mekanism:fluorite_gem", 15, "minecraft:deepslate", "mekanism:deepslate_fluorite_ore");
  /*Fluorite*/ potting_ore_recreation("mekanism:fluorite_gem", 15, "minecraft:stone", "mekanism:fluorite_ore");
  /*Froststeel*/ potting_ore_recreation("undergarden:froststeel_ingot", 15, "undergarden:shiverstone", "undergarden:shiverstone_froststeel_ore");
  /*Gold*/ potting_ore_recreation("minecraft:gold_ingot", 15, "deeperdarker:gloomslate", "deeperdarker:gloomslate_gold_ore");
  /*Gold*/ potting_ore_recreation("minecraft:gold_ingot", 15, "deeperdarker:sculk_stone", "deeperdarker:sculk_stone_gold_ore");
  /*Gold*/ potting_ore_recreation("minecraft:gold_ingot", 15, "meadow:limestone", "meadow:alpine_gold_ore");
  /*Gold*/ potting_ore_recreation("minecraft:gold_ingot", 15, "minecraft:deepslate", "minecraft:deepslate_gold_ore");
  /*Gold*/ potting_ore_recreation("minecraft:gold_ingot", 15, "minecraft:netherrack", "minecraft:nether_gold_ore");
  /*Gold*/ potting_ore_recreation("minecraft:gold_ingot", 15, "minecraft:stone", "minecraft:gold_ore");
  /*Gold*/ potting_ore_recreation("minecraft:gold_ingot", 15, "undergarden:depthrock", "undergarden:depthrock_gold_ore");
  /*Gravitite*/ potting_ore_recreation("aether:enchanted_gravitite", 15, "aether:holystone", "aether:gravitite_ore");
  /*Iron*/ potting_ore_recreation("minecraft:iron_ingot", 15, "alexscaves:galena", "alexscaves:galena_iron_ore");
  /*Iron*/ potting_ore_recreation("minecraft:iron_ingot", 15, "deeperdarker:gloomslate", "deeperdarker:gloomslate_iron_ore");
  /*Iron*/ potting_ore_recreation("minecraft:iron_ingot", 15, "deeperdarker:sculk_stone", "deeperdarker:sculk_stone_iron_ore");
  /*Iron*/ potting_ore_recreation("minecraft:iron_ingot", 15, "meadow:limestone", "meadow:alpine_iron_ore");
  /*Iron*/ potting_ore_recreation("minecraft:iron_ingot", 15, "minecraft:deepslate", "minecraft:deepslate_iron_ore");
  /*Iron*/ potting_ore_recreation("minecraft:iron_ingot", 15, "minecraft:stone", "minecraft:iron_ore");
  /*Iron*/ potting_ore_recreation("minecraft:iron_ingot", 15, "undergarden:depthrock", "undergarden:depthrock_iron_ore");
  /*Iron*/ potting_ore_recreation("minecraft:iron_ingot", 15, "undergarden:shiverstone", "undergarden:shiverstone_iron_ore");
  /*Irradium*/ potting_ore_recreation("enlightened_end:irradium_bar", 15, "minecraft:end_stone", "enlightened_end:irradium_ore");
  /*Jade*/ potting_ore_recreation("samurai_dynasty:jade", 15, "minecraft:deepslate", "samurai_dynasty:deepslate_jade_ore");
  /*Jade*/ potting_ore_recreation("samurai_dynasty:jade", 15, "minecraft:stone", "samurai_dynasty:jade_ore");
  /*Lapis Lazuli*/ potting_ore_recreation("minecraft:lapis_lazuli", 15, "deeperdarker:gloomslate", "deeperdarker:gloomslate_lapis_ore");
  /*Lapis Lazuli*/ potting_ore_recreation("minecraft:lapis_lazuli", 15, "deeperdarker:sculk_stone", "deeperdarker:sculk_stone_lapis_ore");
  /*Lapis Lazuli*/ potting_ore_recreation("minecraft:lapis_lazuli", 15, "meadow:limestone", "meadow:alpine_lapis_ore");
  /*Lapis Lazuli*/ potting_ore_recreation("minecraft:lapis_lazuli", 15, "minecraft:deepslate", "minecraft:deepslate_lapis_ore");
  /*Lapis Lazuli*/ potting_ore_recreation("minecraft:lapis_lazuli", 15, "minecraft:stone", "minecraft:lapis_ore");
  /*Lead*/ potting_ore_recreation("mekanism:ingot_lead", 15, "minecraft:cobbled_deepslate", "eidolon:deep_lead_ore");
  /*Lead*/ potting_ore_recreation("mekanism:ingot_lead", 15, "minecraft:cobblestone", "eidolon:lead_ore");
  /*Lead*/ potting_ore_recreation("mekanism:ingot_lead", 15, "minecraft:deepslate", "mekanism:deepslate_lead_ore");
  /*Lead*/ potting_ore_recreation("mekanism:ingot_lead", 15, "minecraft:stone", "mekanism:lead_ore");
  /*Malachite*/ potting_ore_recreation("enlightened_end:malachite", 15, "minecraft:end_stone", "enlightened_end:malachite_ore");
  /*Onyx*/ potting_ore_recreation("samurai_dynasty:onyx", 15, "minecraft:deepslate", "samurai_dynasty:deepslate_onyx_ore");
  /*Onyx*/ potting_ore_recreation("samurai_dynasty:onyx", 15, "minecraft:stone", "samurai_dynasty:onyx_ore");
  /*Osmium*/ potting_ore_recreation("mekanism:ingot_osmium", 15, "minecraft:deepslate", "mekanism:deepslate_osmium_ore");
  /*Osmium*/ potting_ore_recreation("mekanism:ingot_osmium", 15, "minecraft:stone", "mekanism:osmium_ore");
  /*Quartz*/ potting_ore_recreation("minecraft:quartz", 15, "aether:holystone", "ancient_aether:aether_quartz_ore");
  /*Quartz*/ potting_ore_recreation("minecraft:quartz", 15, "minecraft:netherrack", "minecraft:nether_quartz_ore");
  /*Redstone*/ potting_ore_recreation("minecraft:redstone", 9, "alexscaves:guanostone", "alexscaves:guanostone_redstone_ore");
  /*Redstone*/ potting_ore_recreation("minecraft:redstone", 9, "deeperdarker:gloomslate", "deeperdarker:gloomslate_redstone_ore");
  /*Redstone*/ potting_ore_recreation("minecraft:redstone", 9, "deeperdarker:sculk_stone", "deeperdarker:sculk_stone_redstone_ore");
  /*Redstone*/ potting_ore_recreation("minecraft:redstone", 9, "meadow:limestone", "meadow:alpine_redstone_ore");
  /*Redstone*/ potting_ore_recreation("minecraft:redstone", 9, "minecraft:deepslate", "minecraft:deepslate_redstone_ore");
  /*Redstone*/ potting_ore_recreation("minecraft:redstone", 9, "minecraft:stone", "minecraft:redstone_ore");
  /*Regalium*/ potting_ore_recreation("undergarden:regalium_crystal", 12, "undergarden:depthrock", "undergarden:depthrock_regalium_ore");
  /*Regalium*/ potting_ore_recreation("undergarden:regalium_crystal", 12, "undergarden:shiverstone", "undergarden:shiverstone_regalium_ore");
  /*Ruby*/ potting_ore_recreation("samurai_dynasty:ruby", 15, "minecraft:deepslate", "samurai_dynasty:deepslate_ruby_ore");
  /*Ruby*/ potting_ore_recreation("samurai_dynasty:ruby", 15, "minecraft:stone", "samurai_dynasty:ruby_ore");
  /*Silver*/ potting_ore_recreation("samurai_dynasty:silver_ingot", 15, "minecraft:cobbled_deepslate", "eidolon:deep_silver_ore");
  /*Silver*/ potting_ore_recreation("samurai_dynasty:silver_ingot", 15, "minecraft:cobblestone", "eidolon:silver_ore");
  /*Silver*/ potting_ore_recreation("samurai_dynasty:silver_ingot", 15, "minecraft:deepslate", "samurai_dynasty:deepslate_silver_ore");
  /*Silver*/ potting_ore_recreation("samurai_dynasty:silver_ingot", 15, "minecraft:stone", "samurai_dynasty:silver_ore");
  /*Tin*/ potting_ore_recreation("mekanism:ingot_tin", 15, "minecraft:deepslate", "mekanism:deepslate_tin_ore");
  /*Tin*/ potting_ore_recreation("mekanism:ingot_tin", 15, "minecraft:stone", "mekanism:tin_ore");
  /*Tungsten*/ potting_ore_recreation("stalwart_dungeons:tungsten_ingot", 15, "stalwart_dungeons:soul_bricks", "stalwart_dungeons:tungsten_ore");
  /*Uranium*/ potting_ore_recreation("mekanism:ingot_uranium", 15, "alexscaves:radrock", "alexscaves:radrock_uranium_ore");
  /*Uranium*/ potting_ore_recreation("mekanism:ingot_uranium", 15, "minecraft:deepslate", "mekanism:deepslate_uranium_ore");
  /*Uranium*/ potting_ore_recreation("mekanism:ingot_uranium", 15, "minecraft:stone", "mekanism:uranium_ore");
  /*Utherium*/ potting_ore_recreation("undergarden:utherium_crystal", 12, "undergarden:depthrock", "undergarden:depthrock_utherium_ore");
  /*Utherium*/ potting_ore_recreation("undergarden:utherium_crystal", 12, "undergarden:shiverstone", "undergarden:shiverstone_utherium_ore");
  /*Valkyrum*/ potting_ore_recreation("ancient_aether:valkyrum", 15, "aether:holystone", "ancient_aether:valkyrum_ore");
  /*Zanite*/ potting_ore_recreation("aether:zanite_gemstone", 15, "aether:holystone", "aether:zanite_ore");
  /*Zinc*/ potting_ore_recreation("create:zinc_ingot", 15, "minecraft:deepslate", "create:deepslate_zinc_ore");
  /*Zinc*/ potting_ore_recreation("create:zinc_ingot", 15, "minecraft:stone", "create:zinc_ore");
  //#endregion
  //#region - Dust Recreation
  let potting_dust_recreation = (input, amount, output) => {
    e.custom({
      type: "mekanism:crushing",
      input: {
        amount: amount,
        ingredient: {
          item: input
        }
      },
      output: {
        item: output
      }
    });
  };
  potting_dust_recreation("minecraft:emerald", 6, "mekanism:dust_emerald");
  potting_dust_recreation("mekanism:ingot_tin", 6, "mekanism:dust_tin");
  potting_dust_recreation("minecraft:copper_ingot", 6, "mekanism:dust_copper");
  potting_dust_recreation("mekanism:ingot_osmium", 6, "mekanism:dust_osmium");
  potting_dust_recreation("minecraft:gold_ingot", 6, "mekanism:dust_gold");
  potting_dust_recreation("minecraft:iron_ingot", 6, "mekanism:dust_iron");
  potting_dust_recreation("minecraft:diamond", 6, "mekanism:dust_diamond");
  potting_dust_recreation("minecraft:lapis_lazuli", 6, "mekanism:dust_lapis_lazuli");
  potting_dust_recreation("minecraft:coal", 6, "mekanism:dust_coal");
  potting_dust_recreation("mekanism:ingot_uranium", 6, "mekanism:dust_uranium");
  potting_dust_recreation("minecraft:netherite_scrap", 6, "mekanism:dust_netherite");
  potting_dust_recreation("samurai_dynasty:ruby", 6, "kubejs:dust_ruby");
  potting_dust_recreation("aether:enchanted_gravitite", 6, "kubejs:dust_gravitite");
  potting_dust_recreation("stalwart_dungeons:chorundum", 6, "kubejs:dust_chorundum");
  potting_dust_recreation("minecraft:netherite_ingot", 2, "mekanism:dust_netherite");
  //#endregion
  //#region - Ore Duplication (Crédit to XenoArea for the logic)
  let potting_ore_duplication = data => {
    //#region - Crystal Growth
    if (data.ore_list) {
      e.custom({
        type: "oregrowth:ore_growth",
        base: data.ore_list,
        stages: 4,
        spawn_chance: 0.25,
        growth_chance: 0.1,
        result: {
          item: data.raw,
          count: 1
        }
      });
    }
    //#endregion
    //#region - Ore to Raw
    if (data.ore) {
      e.smelting(`3x ${data.raw}`, `#${data.ore}`).xp(0.7);
      e.blasting(`3x ${data.raw}`, `#${data.ore}`).xp(0.7);
    }
    //#endregion
    //#region - Raw to Clump
    if (data.raw) {
      e.custom({
        type: "mekanism:crushing",
        input: {
          ingredient: {
            item: data.raw
          }
        },
        output: {
          item: data.clump
        }
      });
    }
    //#endregion
    //#region - Clump to Shard
    if (data.shard) {
      e.custom({
        type: "mekanism:enriching",
        input: {
          ingredient: {
            item: data.clump
          }
        },
        output: {
          item: data.shard
        }
      });
    }
    //#endregion
    //#region - Shard to Dirty Dust
    if (data.dirty_dust) {
      e.custom({
        type: "mekanism:injecting",
        chemicalInput: {
          amount: 1,
          gas: "mekanism:water_vapor"
        },
        itemInput: {
          ingredient: {
            item: data.shard
          }
        },
        output: {
          item: data.dirty_dust
        }
      });
    }
    //#endregion
    //#region - Dirty Dust to Dust
    if (data.dust) {
      e.custom({
        type: "mekanism:purifying",
        chemicalInput: {
          amount: 1,
          gas: "mekanism:oxygen"
        },
        itemInput: {
          ingredient: {
            item: data.dirty_dust
          }
        },
        output: {
          item: data.dust
        }
      });
    }
    //#endregion
    //#region - Dust to Crystal
    if (data.crystal) {
      e.custom({
        type: "mekanism:combining",
        extraInput: {
          ingredient: {
            item: "fluxnetworks:flux_dust"
          }
        },
        mainInput: {
          ingredient: {
            item: data.dust
          }
        },
        output: {
          item: data.crystal
        }
      });
    }
    //#endregion
    //#region - Final Element
    if (data.raw) {
      e.smelting(`1x ${data.final_element}`, data.raw).xp(0.7);
      e.blasting(`1x ${data.final_element}`, data.raw).xp(0.7);
    }
    if (data.clump) {
      e.smelting(`2x ${data.final_element}`, data.clump).xp(1.4);
      e.blasting(`2x ${data.final_element}`, data.clump).xp(1.4);
    }
    if (data.shard) {
      e.smelting(`3x ${data.final_element}`, data.shard).xp(2.1);
      e.blasting(`3x ${data.final_element}`, data.shard).xp(2.1);
    }
    if (data.dirty_dust) {
      e.smelting(`4x ${data.final_element}`, data.dirty_dust).xp(2.8);
      e.blasting(`4x ${data.final_element}`, data.dirty_dust).xp(2.8);
    }
    if (data.dust) {
      e.smelting(`5x ${data.final_element}`, data.dust).xp(3.5);
      e.blasting(`5x ${data.final_element}`, data.dust).xp(3.5);
    }
    if (data.crystal) {
      e.smelting(`6x ${data.final_element}`, data.crystal).xp(4.2);
      e.blasting(`6x ${data.final_element}`, data.crystal).xp(4.2);
    }
    //#endregion
  };
  //#region - Potting
  potting_ore_duplication({
    ore_list: [
      "minecraft:coal_ore",
      "minecraft:deepslate_coal_ore",
      "meadow:alpine_coal_ore",
      "alexscaves:coprolith_coal_ore",
      "deeperdarker:sculk_stone_coal_ore",
      "deeperdarker:gloomslate_coal_ore",
      "undergarden:depthrock_coal_ore",
      "undergarden:shiverstone_coal_ore"
    ],
    ore: "forge:ores/coal",
    raw: "kubejs:raw_coal",
    clump: "kubejs:clump_coal",
    shard: "kubejs:shard_coal",
    dirty_dust: "kubejs:dirty_dust_coal",
    dust: "mekanism:dust_coal",
    crystal: "kubejs:crystal_coal",
    final_element: "minecraft:coal"
  });
  potting_ore_duplication({
    ore_list: [
      "minecraft:iron_ore",
      "minecraft:deepslate_iron_ore",
      "meadow:alpine_iron_ore",
      "alexscaves:galena_iron_ore",
      "deeperdarker:sculk_stone_iron_ore",
      "deeperdarker:gloomslate_iron_ore",
      "undergarden:depthrock_iron_ore",
      "undergarden:shiverstone_iron_ore"
    ],
    ore: "forge:ores/iron",
    raw: "minecraft:raw_iron",
    clump: "mekanism:clump_iron",
    shard: "mekanism:shard_iron",
    dirty_dust: "mekanism:dirty_dust_iron",
    dust: "mekanism:dust_iron",
    crystal: "mekanism:crystal_iron",
    final_element: "minecraft:iron_ingot"
  });
  potting_ore_duplication({
    ore_list: ["minecraft:copper_ore", "minecraft:deepslate_copper_ore", "meadow:alpine_copper_ore", "deeperdarker:sculk_stone_copper_ore", "deeperdarker:gloomslate_copper_ore"],
    ore: "forge:ores/copper",
    raw: "minecraft:raw_copper",
    clump: "mekanism:clump_copper",
    shard: "mekanism:shard_copper",
    dirty_dust: "mekanism:dirty_dust_copper",
    dust: "mekanism:dust_copper",
    crystal: "mekanism:crystal_copper",
    final_element: "minecraft:copper_ingot"
  });
  potting_ore_duplication({
    ore_list: [
      "minecraft:gold_ore",
      "minecraft:deepslate_gold_ore",
      "minecraft:nether_gold_ore",
      "meadow:alpine_gold_ore",
      "deeperdarker:sculk_stone_gold_ore",
      "deeperdarker:gloomslate_gold_ore",
      "undergarden:depthrock_gold_ore"
    ],
    ore: "forge:ores/gold",
    raw: "minecraft:raw_gold",
    clump: "mekanism:clump_gold",
    shard: "mekanism:shard_gold",
    dirty_dust: "mekanism:dirty_dust_gold",
    dust: "mekanism:dust_gold",
    crystal: "mekanism:crystal_gold",
    final_element: "minecraft:gold_ingot"
  });
  potting_ore_duplication({
    ore_list: [
      "minecraft:redstone_ore",
      "minecraft:deepslate_redstone_ore",
      "meadow:alpine_redstone_ore",
      "deeperdarker:sculk_stone_redstone_ore",
      "deeperdarker:gloomslate_redstone_ore",
      "alexscaves:guanostone_redstone_ore"
    ],
    ore: "forge:ores/redstone",
    raw: "kubejs:raw_redstone",
    clump: "kubejs:clump_redstone",
    shard: "kubejs:shard_redstone",
    dirty_dust: "kubejs:dirty_dust_redstone",
    final_element: "minecraft:redstone"
  });
  potting_ore_duplication({
    ore_list: ["minecraft:emerald_ore", "minecraft:deepslate_emerald_ore", "meadow:alpine_emerald_ore", "deeperdarker:sculk_stone_emerald_ore", "deeperdarker:gloomslate_emerald_ore"],
    ore: "forge:ores/emerald",
    raw: "kubejs:raw_emerald",
    clump: "kubejs:clump_emerald",
    shard: "kubejs:shard_emerald",
    dirty_dust: "kubejs:dirty_dust_emerald",
    dust: "mekanism:dust_emerald",
    crystal: "kubejs:crystal_emerald",
    final_element: "minecraft:emerald"
  });
  potting_ore_duplication({
    ore_list: ["minecraft:lapis_ore", "minecraft:deepslate_lapis_ore", "meadow:alpine_lapis_ore", "deeperdarker:sculk_stone_lapis_ore", "deeperdarker:gloomslate_lapis_ore"],
    ore: "forge:ores/lapis",
    raw: "kubejs:raw_lapis_lazuli",
    clump: "kubejs:clump_lapis_lazuli",
    shard: "kubejs:shard_lapis_lazuli",
    dirty_dust: "kubejs:dirty_dust_lapis_lazuli",
    dust: "mekanism:dust_lapis_lazuli",
    crystal: "kubejs:crystal_lapis_lazuli",
    final_element: "minecraft:lapis_lazuli"
  });
  potting_ore_duplication({
    ore_list: [
      "minecraft:diamond_ore",
      "minecraft:deepslate_diamond_ore",
      "meadow:alpine_diamond_ore",
      "deeperdarker:sculk_stone_diamond_ore",
      "deeperdarker:gloomslate_diamond_ore",
      "undergarden:depthrock_diamond_ore",
      "undergarden:shiverstone_diamond_ore"
    ],
    ore: "forge:ores/diamond",
    raw: "kubejs:raw_diamond",
    clump: "kubejs:clump_diamond",
    shard: "kubejs:shard_diamond",
    dirty_dust: "kubejs:dirty_dust_diamond",
    dust: "mekanism:dust_diamond",
    crystal: "kubejs:crystal_diamond",
    final_element: "minecraft:diamond"
  });
  potting_ore_duplication({
    ore_list: ["minecraft:nether_quartz_ore", "ancient_aether:aether_quartz_ore"],
    ore: "forge:ores/quartz",
    raw: "kubejs:raw_quartz",
    clump: "kubejs:clump_quartz",
    shard: "kubejs:shard_quartz",
    dirty_dust: "kubejs:dirty_dust_quartz",
    dust: "mekanism:dust_quartz",
    crystal: "kubejs:crystal_quartz",
    final_element: "minecraft:quartz"
  });
  potting_ore_duplication({
    ore_list: ["create:zinc_ore", "create:deepslate_zinc_ore"],
    ore: "forge:ores/zinc",
    raw: "create:raw_zinc",
    clump: "kubejs:clump_zinc",
    shard: "kubejs:shard_zinc",
    dirty_dust: "kubejs:dirty_dust_zinc",
    dust: "kubejs:dust_zinc",
    crystal: "kubejs:crystal_zinc",
    final_element: "create:zinc_ingot"
  });
  potting_ore_duplication({
    ore_list: ["enlightened_end:malachite_ore"],
    ore: "forge:ores/malachite",
    raw: "kubejs:raw_malachite",
    clump: "kubejs:clump_malachite",
    shard: "kubejs:shard_malachite",
    dirty_dust: "kubejs:dirty_dust_malachite",
    dust: "kubejs:dust_malachite",
    crystal: "kubejs:crystal_malachite",
    final_element: "enlightened_end:malachite"
  });
  potting_ore_duplication({
    ore_list: ["enlightened_end:irradium_ore"],
    ore: "forge:ores/irradium",
    raw: "enlightened_end:raw_irradium",
    clump: "kubejs:clump_irradium",
    shard: "kubejs:shard_irradium",
    dirty_dust: "kubejs:dirty_dust_irradium",
    dust: "kubejs:dust_irradium",
    crystal: "kubejs:crystal_irradium",
    final_element: "enlightened_end:irradium_bar"
  });
  potting_ore_duplication({
    ore_list: ["enlightened_end:bismuth_ore"],
    ore: "forge:ores/bismuth",
    raw: "enlightened_end:raw_bismuth",
    clump: "kubejs:clump_bismuth",
    shard: "kubejs:shard_bismuth",
    dirty_dust: "kubejs:dirty_dust_bismuth",
    dust: "kubejs:dust_bismuth",
    crystal: "kubejs:crystal_bismuth",
    final_element: "enlightened_end:bismuth_ingot"
  });
  potting_ore_duplication({
    ore_list: ["samurai_dynasty:ruby_ore", "samurai_dynasty:deepslate_ruby_ore"],
    ore: "forge:ores/ruby",
    raw: "kubejs:raw_ruby",
    clump: "kubejs:clump_ruby",
    shard: "kubejs:shard_ruby",
    dirty_dust: "kubejs:dirty_dust_ruby",
    dust: "kubejs:dust_ruby",
    crystal: "kubejs:crystal_ruby",
    final_element: "samurai_dynasty:ruby"
  });
  potting_ore_duplication({
    ore_list: ["samurai_dynasty:jade_ore", "samurai_dynasty:deepslate_jade_ore"],
    ore: "forge:ores/jade",
    raw: "kubejs:raw_jade",
    clump: "kubejs:clump_jade",
    shard: "kubejs:shard_jade",
    dirty_dust: "kubejs:dirty_dust_jade",
    dust: "kubejs:dust_jade",
    crystal: "kubejs:crystal_jade",
    final_element: "samurai_dynasty:jade"
  });
  potting_ore_duplication({
    ore_list: ["samurai_dynasty:aquamarine_ore", "samurai_dynasty:deepslate_aquamarine_ore"],
    ore: "forge:ores/aquamarine",
    raw: "kubejs:raw_aquamarine",
    clump: "kubejs:clump_aquamarine",
    shard: "kubejs:shard_aquamarine",
    dirty_dust: "kubejs:dirty_dust_aquamarine",
    dust: "kubejs:dust_aquamarine",
    crystal: "kubejs:crystal_aquamarine",
    final_element: "samurai_dynasty:aquamarine"
  });
  potting_ore_duplication({
    ore_list: ["samurai_dynasty:onyx_ore", "samurai_dynasty:deepslate_onyx_ore"],
    ore: "forge:ores/onyx",
    raw: "kubejs:raw_onyx",
    clump: "kubejs:clump_onyx",
    shard: "kubejs:shard_onyx",
    dirty_dust: "kubejs:dirty_dust_onyx",
    dust: "kubejs:dust_onyx",
    crystal: "kubejs:crystal_onyx",
    final_element: "samurai_dynasty:onyx"
  });
  potting_ore_duplication({
    ore_list: ["eidolon:silver_ore", "eidolon:deep_silver_ore", "samurai_dynasty:silver_ore", "samurai_dynasty:deepslate_silver_ore"],
    ore: "forge:ores/silver",
    raw: "samurai_dynasty:raw_silver",
    clump: "kubejs:clump_silver",
    shard: "kubejs:shard_silver",
    dirty_dust: "kubejs:dirty_dust_silver",
    dust: "kubejs:dust_silver",
    crystal: "kubejs:crystal_silver",
    final_element: "samurai_dynasty:silver_ingot"
  });
  potting_ore_duplication({
    ore_list: ["rftoolsbase:dimensionalshard_overworld", "rftoolsbase:dimensionalshard_nether", "rftoolsbase:dimensionalshard_end"],
    ore: "forge:ores/dimensional",
    raw: "kubejs:raw_dimensional",
    clump: "kubejs:clump_dimensional",
    final_element: "rftoolsbase:dimensionalshard"
  });
  potting_ore_duplication({
    ore_list: ["stalwart_dungeons:tungsten_ore"],
    ore: "forge:ores/tungsten",
    raw: "stalwart_dungeons:raw_tungsten",
    clump: "kubejs:clump_tungsten",
    shard: "kubejs:shard_tungsten",
    dirty_dust: "kubejs:dirty_dust_tungsten",
    dust: "kubejs:dust_tungsten",
    crystal: "kubejs:crystal_tungsten",
    final_element: "stalwart_dungeons:tungsten_ingot"
  });
  potting_ore_duplication({
    ore_list: ["stalwart_dungeons:chorundum_ore"],
    ore: "forge:ores/chorundum",
    raw: "kubejs:raw_chorundum",
    clump: "kubejs:clump_chorundum",
    shard: "kubejs:shard_chorundum",
    dirty_dust: "kubejs:dirty_dust_chorundum",
    dust: "kubejs:dust_chorundum",
    crystal: "kubejs:crystal_chorundum",
    final_element: "stalwart_dungeons:chorundum"
  });
  potting_ore_duplication({
    ore_list: ["aether:ambrosium_ore"],
    ore: "forge:ores/ambrosium",
    raw: "kubejs:raw_ambrosium",
    clump: "kubejs:clump_ambrosium",
    final_element: "aether:ambrosium_shard"
  });
  potting_ore_duplication({
    ore_list: ["aether:zanite_ore"],
    ore: "forge:ores/zanite",
    raw: "kubejs:raw_zanite",
    clump: "kubejs:clump_zanite",
    shard: "kubejs:shard_zanite",
    dirty_dust: "kubejs:dirty_dust_zanite",
    dust: "kubejs:dust_zanite",
    crystal: "kubejs:crystal_zanite",
    final_element: "aether:zanite_gemstone"
  });
  potting_ore_duplication({
    ore_list: ["aether:gravitite_ore"],
    ore: "forge:ores/gravitite",
    raw: "kubejs:raw_gravitite",
    clump: "kubejs:clump_gravitite",
    shard: "kubejs:shard_gravitite",
    dirty_dust: "kubejs:dirty_dust_gravitite",
    dust: "kubejs:dust_gravitite",
    crystal: "kubejs:crystal_gravitite",
    final_element: "aether:enchanted_gravitite"
  });
  potting_ore_duplication({
    ore_list: ["undergarden:depthrock_cloggrum_ore", "undergarden:shiverstone_cloggrum_ore"],
    ore: "forge:ores/cloggrum",
    raw: "undergarden:raw_cloggrum",
    clump: "kubejs:clump_cloggrum",
    shard: "kubejs:shard_cloggrum",
    dirty_dust: "kubejs:dirty_dust_cloggrum",
    dust: "kubejs:dust_cloggrum",
    crystal: "kubejs:crystal_cloggrum",
    final_element: "undergarden:cloggrum_ingot"
  });
  potting_ore_duplication({
    ore_list: ["undergarden:shiverstone_froststeel_ore"],
    ore: "forge:ores/froststeel",
    raw: "undergarden:raw_froststeel",
    clump: "kubejs:clump_froststeel",
    shard: "kubejs:shard_froststeel",
    dirty_dust: "kubejs:dirty_dust_froststeel",
    dust: "kubejs:dust_froststeel",
    crystal: "kubejs:crystal_froststeel",
    final_element: "undergarden:froststeel_ingot"
  });
  potting_ore_duplication({
    ore_list: ["undergarden:depthrock_utherium_ore", "undergarden:shiverstone_utherium_ore"],
    ore: "forge:ores/utherium",
    raw: "kubejs:raw_utherium",
    clump: "kubejs:clump_utherium",
    shard: "undergarden:utheric_shard",
    dirty_dust: "kubejs:dirty_dust_utherium",
    dust: "kubejs:dust_utherium",
    final_element: "undergarden:utherium_crystal"
  });
  potting_ore_duplication({
    ore_list: ["undergarden:depthrock_regalium_ore", "undergarden:shiverstone_regalium_ore"],
    ore: "forge:ores/regalium",
    raw: "kubejs:raw_regalium",
    clump: "kubejs:clump_regalium",
    shard: "kubejs:shard_regalium",
    dirty_dust: "kubejs:dirty_dust_regalium",
    dust: "kubejs:dust_regalium",
    final_element: "undergarden:regalium_crystal"
  });
  potting_ore_duplication({
    ore_list: ["farlanders:endumium_ore", "farlanders:deepslate_endumium_ore"],
    ore: "forge:ores/endumium",
    raw: "kubejs:raw_endumium",
    clump: "kubejs:clump_endumium",
    shard: "kubejs:shard_endumium",
    dirty_dust: "kubejs:dirty_dust_endumium",
    dust: "kubejs:dust_endumium",
    final_element: "farlanders:endumium_crystal"
  });
  potting_ore_duplication({
    ore_list: ["mekanism:tin_ore", "mekanism:deepslate_tin_ore"],
    ore: "forge:ores/tin",
    raw: "mekanism:raw_tin",
    clump: "mekanism:clump_tin",
    shard: "mekanism:shard_tin",
    dirty_dust: "mekanism:dirty_dust_tin",
    dust: "mekanism:dust_tin",
    crystal: "mekanism:crystal_tin",
    final_element: "mekanism:ingot_tin"
  });
  potting_ore_duplication({
    ore_list: ["mekanism:osmium_ore", "mekanism:deepslate_osmium_ore"],
    ore: "forge:ores/osmium",
    raw: "mekanism:raw_osmium",
    clump: "mekanism:clump_osmium",
    shard: "mekanism:shard_osmium",
    dirty_dust: "mekanism:dirty_dust_osmium",
    dust: "mekanism:dust_osmium",
    crystal: "mekanism:crystal_osmium",
    final_element: "mekanism:ingot_osmium"
  });
  potting_ore_duplication({
    ore_list: ["alexscaves:radrock_uranium_ore", "mekanism:uranium_ore", "mekanism:deepslate_uranium_ore"],
    ore: "forge:ores/uranium",
    raw: "mekanism:raw_uranium",
    clump: "mekanism:clump_uranium",
    shard: "mekanism:shard_uranium",
    dirty_dust: "mekanism:dirty_dust_uranium",
    dust: "mekanism:dust_uranium",
    crystal: "mekanism:crystal_uranium",
    final_element: "mekanism:ingot_uranium"
  });
  potting_ore_duplication({
    ore_list: ["mekanism:fluorite_ore", "mekanism:deepslate_fluorite_ore"],
    ore: "forge:ores/fluorite",
    raw: "kubejs:raw_fluorite",
    clump: "kubejs:clump_fluorite",
    shard: "kubejs:shard_fluorite",
    dirty_dust: "kubejs:dirty_dust_fluorite",
    dust: "mekanism:dust_fluorite",
    crystal: "kubejs:crystal_fluorite",
    final_element: "mekanism:fluorite_gem"
  });
  potting_ore_duplication({
    ore_list: ["eidolon:lead_ore", "eidolon:deep_lead_ore", "mekanism:lead_ore", "mekanism:deepslate_lead_ore"],
    ore: "forge:ores/lead",
    raw: "mekanism:raw_lead",
    clump: "mekanism:clump_lead",
    shard: "mekanism:shard_lead",
    dirty_dust: "mekanism:dirty_dust_lead",
    dust: "mekanism:dust_lead",
    crystal: "mekanism:crystal_lead",
    final_element: "mekanism:ingot_lead"
  });
  potting_ore_duplication({
    ore_list: ["minecraft:ancient_debris"],
    ore: "forge:ores/netherite",
    raw: "kubejs:raw_netherite",
    clump: "kubejs:clump_netherite",
    shard: "kubejs:shard_netherite",
    dirty_dust: "kubejs:dirty_dust_netherite",
    dust: "mekanism:dust_netherite",
    crystal: "kubejs:crystal_netherite",
    final_element: "minecraft:netherite_scrap"
  });
  potting_ore_duplication({
    ore_list: ["enlightened_end:adamantite_node"],
    ore: "forge:ores/adamantite",
    raw: "kubejs:raw_adamantite",
    clump: "kubejs:clump_adamantite",
    shard: "kubejs:shard_adamantite",
    dirty_dust: "kubejs:dirty_dust_adamantite",
    dust: "kubejs:dust_adamantite",
    crystal: "kubejs:crystal_adamantite",
    final_element: "enlightened_end:adamantite_ingot"
  });
  potting_ore_duplication({
    ore_list: ["ancient_aether:valkyrum_ore"],
    ore: "forge:ores/valkyrum",
    raw: "kubejs:raw_valkyrum",
    clump: "kubejs:clump_valkyrum",
    shard: "kubejs:shard_valkyrum",
    dirty_dust: "kubejs:dirty_dust_valkyrum",
    dust: "kubejs:dust_valkyrum",
    crystal: "kubejs:crystal_valkyrum",
    final_element: "ancient_aether:valkyrum"
  });
  //#endregion
  //#endregion
});
//#endregion
