//#region - Définition/Suppression/Masquage d'éléments dans JEI
function ore_duplication() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = []
  let hiding = []
  // Fonctions pour supprimer les tags et les crafts des éléments définis juste au dessus
  function handle_Tags(e) {
    e.removeAllTagsFrom(unused)
    e.add("forge:hiding", [unused, hiding])
  }
  function handle_Recipes(e) {
    e.remove([{ input: unused }, { output: unused }])
  }
  ServerEvents.tags(["item", "block"], handle_Tags)
  ServerEvents.recipes(handle_Recipes)
}
ore_duplication()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  e.remove([
    { id: "deeperdarker:gold_ingot_from_smelting_sculk_stone_gold_ore" },
    { id: "deeperdarker:gold_ingot_from_blasting_sculk_stone_gold_ore" },
    { id: "deeperdarker:copper_ingot_from_smelting_sculk_stone_copper_ore" },
    { id: "deeperdarker:copper_ingot_from_blasting_sculk_stone_copper_ore" },
    { id: "deeperdarker:iron_ingot_from_smelting_sculk_stone_iron_ore" },
    { id: "deeperdarker:iron_ingot_from_blasting_sculk_stone_iron_ore" }
  ])
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.add("forge:ores/adamantite", /adamantite_node/)
  e.add("forge:ores/ambrosium", /ambrosium_ore/)
  e.add("forge:ores/aquamarine", /aquamarine_ore/)
  e.add("forge:ores/bismuth", /bismuth_ore/)
  e.add("forge:ores/chorundum", /chorundum_ore/)
  e.add("forge:ores/cloggrum", /cloggrum_ore/)
  e.add("forge:ores/coal", /coal_ore/)
  e.add("forge:ores/copper", /copper_ore/)
  e.add("forge:ores/diamond", /diamond_ore/)
  e.add("forge:ores/dimensional_shard", [
    "rftoolsbase:dimensionalshard_overworld",
    "rftoolsbase:dimensionalshard_nether",
    "rftoolsbase:dimensionalshard_end"
  ])
  e.add("forge:ores/emerald", /emerald_ore/)
  e.add("forge:ores/enderite", "lolenderite:primordial_remnants")
  e.add("forge:ores/endumium", /endumium_ore/)
  e.add("forge:ores/fluorite", /fluorite_ore/)
  e.add("forge:ores/froststeel", /froststeel_ore/)
  e.add("forge:ores/gold", /gold_ore/)
  e.add("forge:ores/gravitite", /gravitite_ore/)
  e.add("forge:ores/iron", /iron_ore/)
  e.add("forge:ores/irradium", /irradium_ore/)
  e.add("forge:ores/jade", /jade_ore/)
  e.add("forge:ores/lapis", /lapis_ore/)
  e.add("forge:ores/lead", /lead_ore/)
  e.add("forge:ores/malachite", /malachite_ore/)
  e.add("forge:ores/netherite", "minecraft:ancient_debris")
  e.add("forge:ores/onyx", /onyx_ore/)
  e.add("forge:ores/osmium", /osmium_ore/)
  e.add("forge:ores/quartz", /quartz_ore/)
  e.add("forge:ores/redstone", /redstone_ore/)
  e.add("forge:ores/regalium", /regalium_ore/)
  e.add("forge:ores/ruby", /ruby_ore/)
  e.add("forge:ores/silver", /silver_ore/)
  e.add("forge:ores/tin", /tin_ore/)
  e.add("forge:ores/tungsten", /tungsten_ore/)
  e.add("forge:ores/uranium", /uranium_ore/)
  e.add("forge:ores/utherium", /utherium_ore/)
  e.add("forge:ores/valkyrum", /valkyrum_ore/)
  e.add("forge:ores/zanite", /zanite_ore/)
  e.add("forge:ores/zinc", /zinc_ore/)
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
    "create_unbreakable:luminarchy_block",
    "create_unbreakable:philolite_block",
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
    "lolenderite:primordial_remnants",
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
    "undergarden:shiverstone_utherium_ore"
  ])
})
//#endregion

//#region - Loot Tables
ServerEvents.blockLootTables(e => {
  //#region - Ore Drop
  let potting_ore_drop = (Ore, Block, Raw) => {
    e.addBlock(Ore, table => {
      table.addPool(no_enchant => {
        no_enchant.survivesExplosion()
        no_enchant.addCondition({
          condition: "minecraft:match_tool"
        })
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
        })
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
        })
        no_enchant.rolls = 1
        no_enchant.addItem(Raw)
      })
      table.addPool(silk_touch => {
        silk_touch.survivesExplosion()
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
        })
        silk_touch.rolls = 1
        silk_touch.addItem(Block)
      })
      table.addPool(fortune1 => {
        fortune1.survivesExplosion()
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
        })
        fortune1.rolls = 2
        fortune1.addItem(Raw)
      })
      table.addPool(fortune2 => {
        fortune2.survivesExplosion()
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
        })
        fortune2.rolls = 4
        fortune2.addItem(Raw)
      })
      table.addPool(fortune3 => {
        fortune3.survivesExplosion()
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
        })
        fortune3.rolls = 6
        fortune3.addItem(Raw)
      })
      table.addPool(fortune4 => {
        fortune4.survivesExplosion()
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
        })
        fortune4.rolls = 8
        fortune4.addItem(Raw)
      })
      table.addPool(fortune5 => {
        fortune5.survivesExplosion()
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
        })
        fortune5.rolls = 10
        fortune5.addItem(Raw)
      })
      table.addPool(fortune6 => {
        fortune6.survivesExplosion()
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
        })
        fortune6.rolls = 12
        fortune6.addItem(Raw)
      })
      table.addPool(fortune7 => {
        fortune7.survivesExplosion()
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
        })
        fortune7.rolls = 14
        fortune7.addItem(Raw)
      })
      table.addPool(fortune8 => {
        fortune8.survivesExplosion()
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
        })
        fortune8.rolls = 16
        fortune8.addItem(Raw)
      })
      table.addPool(fortune9 => {
        fortune9.survivesExplosion()
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
        })
        fortune9.rolls = 18
        fortune9.addItem(Raw)
      })
      table.addPool(fortune10 => {
        fortune10.survivesExplosion()
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
        })
        fortune10.rolls = 20
        fortune10.addItem(Raw)
      })
    })
  }
  //#region - Minecraft
  potting_ore_drop(
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
    "minecraft:coal_ore",
    "kubejs:raw_coal"
  )
  potting_ore_drop(
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
    "minecraft:iron_ore",
    "minecraft:raw_iron"
  )
  potting_ore_drop(
    [
      "minecraft:copper_ore",
      "minecraft:deepslate_copper_ore",
      "meadow:alpine_copper_ore",
      "deeperdarker:sculk_stone_copper_ore",
      "deeperdarker:gloomslate_copper_ore"
    ],
    "minecraft:copper_ore",
    "minecraft:raw_copper"
  )
  potting_ore_drop(
    [
      "minecraft:gold_ore",
      "minecraft:deepslate_gold_ore",
      "minecraft:nether_gold_ore",
      "meadow:alpine_gold_ore",
      "deeperdarker:sculk_stone_gold_ore",
      "deeperdarker:gloomslate_gold_ore",
      "undergarden:depthrock_gold_ore"
    ],
    "minecraft:gold_ore",
    "minecraft:raw_gold"
  )
  potting_ore_drop(
    [
      "minecraft:redstone_ore",
      "minecraft:deepslate_redstone_ore",
      "meadow:alpine_redstone_ore",
      "alexscaves:guanostone_redstone_ore",
      "deeperdarker:sculk_stone_redstone_ore",
      "deeperdarker:gloomslate_redstone_ore"
    ],
    "minecraft:redstone_ore",
    "kubejs:raw_redstone"
  )
  potting_ore_drop(
    [
      "minecraft:emerald_ore",
      "minecraft:deepslate_emerald_ore",
      "meadow:alpine_emerald_ore",
      "deeperdarker:sculk_stone_emerald_ore",
      "deeperdarker:gloomslate_emerald_ore"
    ],
    "minecraft:emerald_ore",
    "kubejs:raw_emerald"
  )
  potting_ore_drop(
    [
      "minecraft:lapis_ore",
      "minecraft:deepslate_lapis_ore",
      "meadow:alpine_lapis_ore",
      "deeperdarker:sculk_stone_lapis_ore",
      "deeperdarker:gloomslate_lapis_ore"
    ],
    "minecraft:lapis_ore",
    "kubejs:raw_lapis"
  )
  potting_ore_drop(
    [
      "minecraft:lapis_ore",
      "minecraft:deepslate_lapis_ore",
      "meadow:alpine_lapis_ore",
      "deeperdarker:sculk_stone_lapis_ore",
      "deeperdarker:gloomslate_lapis_ore"
    ],
    "minecraft:diamond_ore",
    "kubejs:raw_diamond"
  )
  potting_ore_drop(
    ["minecraft:nether_quartz_ore", "ancient_aether:aether_quartz_ore"],
    "minecraft:nether_quartz_ore",
    "kubejs:raw_quartz"
  )
  potting_ore_drop(["minecraft:ancient_debris"], "minecraft:ancient_debris", "kubejs:raw_netherite")
  //#endregion
  //#region - Create
  potting_ore_drop(["create:zinc_ore", "create:deepslate_zinc_ore"], "create:zinc_ore", "create:raw_zinc")
  //#endregion
  //#region - Enderite
  potting_ore_drop(
    ["lolenderite:primordial_remnants"],
    "lolenderite:primordial_remnants",
    "kubejs:raw_enderite"
  )
  //#endregion
  //#region - Enlightend
  potting_ore_drop(["enlightened_end:malachite_ore"], "enlightened_end:malachite_ore", "kubejs:raw_malachite")
  potting_ore_drop(
    ["enlightened_end:irradium_ore"],
    "enlightened_end:irradium_ore",
    "enlightened_end:raw_irradium"
  )
  potting_ore_drop(
    ["enlightened_end:bismuth_ore"],
    "enlightened_end:bismuth_ore",
    "enlightened_end:raw_bismuth"
  )
  //#endregion
  //#region - Mekanism
  potting_ore_drop(["mekanism:tin_ore", "mekanism:deepslate_tin_ore"], "mekanism:tin_ore", "mekanism:raw_tin")
  potting_ore_drop(
    ["mekanism:osmium_ore", "mekanism:deepslate_osmium_ore"],
    "mekanism:osmium_ore",
    "mekanism:raw_osmium"
  )
  potting_ore_drop(
    ["mekanism:uranium_ore", "mekanism:deepslate_uranium_ore"],
    "mekanism:uranium_ore",
    "mekanism:raw_uranium"
  )
  potting_ore_drop(
    ["mekanism:fluorite_ore", "mekanism:deepslate_fluorite_ore"],
    "mekanism:fluorite_ore",
    "kubejs:raw_fluorite"
  )
  potting_ore_drop(
    ["mekanism:lead_ore", "mekanism:deepslate_lead_ore"],
    "mekanism:lead_ore",
    "mekanism:raw_lead"
  )
  //#endregion
  //#region - RFTools
  potting_ore_drop(
    [
      "rftoolsbase:dimensionalshard_overworld",
      "rftoolsbase:dimensionalshard_nether",
      "rftoolsbase:dimensionalshard_end"
    ],
    "rftoolsbase:dimensionalshard_overworld",
    "kubejs:raw_dimensional"
  )
  //#endregion
  //#region - Samurai Dynasty
  potting_ore_drop(
    ["samurai_dynasty:ruby_ore", "samurai_dynasty:deepslate_ruby_ore"],
    "samurai_dynasty:ruby_ore",
    "kubejs:raw_ruby"
  )
  potting_ore_drop(
    ["samurai_dynasty:jade_ore", "samurai_dynasty:deepslate_jade_ore"],
    "samurai_dynasty:jade_ore",
    "kubejs:raw_jade"
  )
  potting_ore_drop(
    ["samurai_dynasty:aquamarine_ore", "samurai_dynasty:deepslate_aquamarine_ore"],
    "samurai_dynasty:aquamarine_ore",
    "kubejs:raw_aquamarine"
  )
  potting_ore_drop(
    ["samurai_dynasty:onyx_ore", "samurai_dynasty:deepslate_onyx_ore"],
    "samurai_dynasty:onyx_ore",
    "kubejs:raw_onyx"
  )
  potting_ore_drop(
    [
      "samurai_dynasty:silver_ore",
      "samurai_dynasty:deepslate_silver_ore",
      "eidolon:silver_ore",
      "eidolon:deep_silver_ore"
    ],
    "samurai_dynasty:silver_ore",
    "kubejs:raw_silver"
  )
  //#endregion
  //#region - Stalwart Dungeons
  potting_ore_drop(
    ["stalwart_dungeons:tungsten_ore"],
    "stalwart_dungeons:tungsten_ore",
    "stalwart_dungeons:raw_tungsten"
  )
  potting_ore_drop(
    ["stalwart_dungeons:chorundum_ore"],
    "stalwart_dungeons:chorundum_ore",
    "kubejs:raw_chorundum"
  )
  //#endregion
  //#region - The Aether
  potting_ore_drop(["aether:ambrosium_ore"], "aether:ambrosium_ore", "kubejs:raw_ambrosium")
  potting_ore_drop(["aether:zanite_ore"], "aether:zanite_ore", "kubejs:raw_zanite")
  potting_ore_drop(["aether:gravitite_ore"], "aether:gravitite_ore", "kubejs:raw_gravitite")
  //#endregion
  //#region - The Farlanders
  potting_ore_drop(
    ["farlanders:endumium_ore", "farlanders:deepslate_endumium_ore"],
    "farlanders:endumium_ore",
    "kubejs:raw_endumium"
  )
  //#endregion
  //#region - The Undergarden
  potting_ore_drop(
    ["undergarden:depthrock_cloggrum_ore", "undergarden:shiverstone_cloggrum_ore"],
    "undergarden:depthrock_cloggrum_ore",
    "undergarden:raw_cloggrum"
  )
  potting_ore_drop(
    ["undergarden:shiverstone_froststeel_ore"],
    "undergarden:shiverstone_froststeel_ore",
    "undergarden:raw_froststeel"
  )
  potting_ore_drop(
    ["undergarden:depthrock_utherium_ore", "undergarden:shiverstone_utherium_ore"],
    "undergarden:depthrock_utherium_ore",
    "kubejs:raw_utherium"
  )
  potting_ore_drop(
    ["undergarden:depthrock_regalium_ore", "undergarden:shiverstone_regalium_ore"],
    "undergarden:depthrock_regalium_ore",
    "kubejs:raw_regalium"
  )
  //#endregion
  //#endregion
})
//#endregion
