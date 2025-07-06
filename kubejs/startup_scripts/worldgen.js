//#region - Remove Ores (Research credit to XenoArea)
WorldgenEvents.remove(e => {
  e.removeOres(p => {
    p.blocks = ["create_unbreakable:luminarchy_block", "create_unbreakable:philolite_block"];
  });
});
//#endregion

/* Code mis en commentaire en attendant que KubeJS ajoute la fonctionnalité
//#region - Add Ores to Mining Dimension
WorldgenEvents.add(e => {
  //#region - JAMD Overworld
  let potting_jamd_mining_ore = (target, ore) => {
    e.addOre(p => {
      p.biomes = "jamd:mining";
      p.addTarget(target, ore);
      p.count(10).squared();
      p.size = 5;
    });
  };
  potting_jamd_mining_ore("alexscaves:radrock", "alexscaves:radrock_uranium_ore");
  potting_jamd_mining_ore("alexscaves:coprolith", "alexscaves:coprolith_coal_ore");
  potting_jamd_mining_ore("alexscaves:galena", "alexscaves:galena_iron_ore");
  potting_jamd_mining_ore("alexscaves:guanostone", "alexscaves:guanostone_redstone_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "minecraft:deepslate_coal_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "minecraft:deepslate_iron_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "minecraft:deepslate_copper_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "minecraft:deepslate_gold_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "minecraft:deepslate_redstone_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "minecraft:deepslate_emerald_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "minecraft:deepslate_lapis_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "minecraft:deepslate_diamond_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "create:deepslate_zinc_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "samurai_dynasty:deepslate_ruby_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "samurai_dynasty:deepslate_jade_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "samurai_dynasty:deepslate_aquamarine_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "samurai_dynasty:deepslate_onyx_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "samurai_dynasty:deepslate_silver_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "mekanism:deepslate_tin_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "mekanism:deepslate_osmium_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "mekanism:deepslate_uranium_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "mekanism:deepslate_fluorite_ore");
  potting_jamd_mining_ore("minecraft:deepslate", "mekanism:deepslate_lead_ore")
  potting_jamd_mining_ore("minecraft:deepslate", "farlanders:deepslate_endumium_ore")
  potting_jamd_mining_ore("undergarden:depthrock", "undergarden:depthrock_regalium_ore")
  potting_jamd_mining_ore("undergarden:depthrock", "undergarden:depthrock_utherium_ore")
  potting_jamd_mining_ore("undergarden:depthrock", "undergarden:depthrock_cloggrum_ore")
  potting_jamd_mining_ore("undergarden:depthrock", "undergarden:depthrock_diamond_ore")
  potting_jamd_mining_ore("undergarden:depthrock", "undergarden:depthrock_gold_ore")
  potting_jamd_mining_ore("undergarden:depthrock", "undergarden:depthrock_iron_ore")
  potting_jamd_mining_ore("undergarden:depthrock", "undergarden:depthrock_coal_ore")
  potting_jamd_mining_ore("undergarden:shiverstone", "undergarden:shiverstone_regalium_ore")
  potting_jamd_mining_ore("undergarden:shiverstone", "undergarden:shiverstone_utherium_ore")
  potting_jamd_mining_ore("undergarden:shiverstone", "undergarden:shiverstone_cloggrum_ore")
  potting_jamd_mining_ore("undergarden:shiverstone", "undergarden:shiverstone_diamond_ore")
  potting_jamd_mining_ore("undergarden:shiverstone", "undergarden:shiverstone_froststeel_ore")
  potting_jamd_mining_ore("undergarden:shiverstone", "undergarden:shiverstone_iron_ore")
  potting_jamd_mining_ore("undergarden:shiverstone", "undergarden:shiverstone_coal_ore")
  potting_jamd_mining_ore("deeperdarker:sculk_stone", "deeperdarker:sculk_stone_coal_ore")
  potting_jamd_mining_ore("deeperdarker:sculk_stone", "deeperdarker:sculk_stone_iron_ore")
  potting_jamd_mining_ore("deeperdarker:sculk_stone", "deeperdarker:sculk_stone_copper_ore")
  potting_jamd_mining_ore("deeperdarker:sculk_stone", "deeperdarker:sculk_stone_gold_ore")
  potting_jamd_mining_ore("deeperdarker:sculk_stone", "deeperdarker:sculk_stone_redstone_ore")
  potting_jamd_mining_ore("deeperdarker:sculk_stone", "deeperdarker:sculk_stone_emerald_ore")
  potting_jamd_mining_ore("deeperdarker:sculk_stone", "deeperdarker:sculk_stone_lapis_ore")
  potting_jamd_mining_ore("deeperdarker:sculk_stone", "deeperdarker:sculk_stone_diamond_ore")
  potting_jamd_mining_ore("deeperdarker:gloomslate", "deeperdarker:gloomslate_coal_ore")
  potting_jamd_mining_ore("deeperdarker:gloomslate", "deeperdarker:gloomslate_iron_ore")
  potting_jamd_mining_ore("deeperdarker:gloomslate", "deeperdarker:gloomslate_copper_ore")
  potting_jamd_mining_ore("deeperdarker:gloomslate", "deeperdarker:gloomslate_gold_ore")
  potting_jamd_mining_ore("deeperdarker:gloomslate", "deeperdarker:gloomslate_redstone_ore")
  potting_jamd_mining_ore("deeperdarker:gloomslate", "deeperdarker:gloomslate_emerald_ore")
  potting_jamd_mining_ore("deeperdarker:gloomslate", "deeperdarker:gloomslate_lapis_ore")
  potting_jamd_mining_ore("deeperdarker:gloomslate", "deeperdarker:gloomslate_diamond_ore")
  potting_jamd_mining_ore("minecraft:stone", "minecraft:coal_ore")
  potting_jamd_mining_ore("minecraft:stone", "minecraft:iron_ore")
  potting_jamd_mining_ore("minecraft:stone", "minecraft:copper_ore")
  potting_jamd_mining_ore("minecraft:stone", "minecraft:gold_ore")
  potting_jamd_mining_ore("minecraft:stone", "minecraft:redstone_ore")
  potting_jamd_mining_ore("minecraft:stone", "minecraft:emerald_ore")
  potting_jamd_mining_ore("minecraft:stone", "minecraft:lapis_ore")
  potting_jamd_mining_ore("minecraft:stone", "minecraft:diamond_ore")
  potting_jamd_mining_ore("minecraft:stone", "create:zinc_ore")
  potting_jamd_mining_ore("minecraft:stone", "samurai_dynasty:ruby_ore")
  potting_jamd_mining_ore("minecraft:stone", "samurai_dynasty:jade_ore")
  potting_jamd_mining_ore("minecraft:stone", "samurai_dynasty:aquamarine_ore")
  potting_jamd_mining_ore("minecraft:stone", "samurai_dynasty:onyx_ore")
  potting_jamd_mining_ore("minecraft:stone", "samurai_dynasty:silver_ore")
  potting_jamd_mining_ore("minecraft:stone", "mekanism:tin_ore")
  potting_jamd_mining_ore("minecraft:stone", "mekanism:osmium_ore")
  potting_jamd_mining_ore("minecraft:stone", "mekanism:uranium_ore")
  potting_jamd_mining_ore("minecraft:stone", "mekanism:fluorite_ore")
  potting_jamd_mining_ore("minecraft:stone", "mekanism:lead_ore")
  potting_jamd_mining_ore("minecraft:stone", "rftoolsbase:dimensionalshard_overworld")
  potting_jamd_mining_ore("minecraft:stone", "farlanders:endumium_ore")
  potting_jamd_mining_ore("aether:holystone", "aether:gravitite_ore")
  potting_jamd_mining_ore("aether:holystone", "aether:ambrosium_ore")
  potting_jamd_mining_ore("aether:holystone", "aether:zanite_ore")
  potting_jamd_mining_ore("aether:holystone", "ancient_aether:aether_quartz_ore")
  //#endregion
  //#region - JAMD Nether
  let potting_jamd_nether_ore = (target, ore) => {
    e.addOre(p => {
      p.biomes = "jamd:nether";
      p.addTarget(target, ore);
      p.count(10).squared();
      p.size = 5;
    });
  };
  potting_jamd_nether_ore("stalwart_dungeons:soul_bricks", "stalwart_dungeons:tungsten_ore");
  potting_jamd_nether_ore("minecraft:netherrack", "minecraft:nether_gold_ore")
  potting_jamd_nether_ore("minecraft:netherrack", "minecraft:nether_quartz_ore")
  potting_jamd_nether_ore("minecraft:netherrack", "minecraft:ancient_debris")
  potting_jamd_nether_ore("minecraft:netherrack", "rftoolsbase:dimensionalshard_nether")
  //#endregion
  //#region - JAMD End
  let potting_jamd_end_ore = (target, ore) => {
    e.addOre(p => {
      p.biomes = "jamd:end";
      p.addTarget(target, ore);
      p.count(10).squared();
      p.size = 5;
    });
  };
  potting_jamd_end_ore("stalwart_dungeons:purpur_bricks", "stalwart_dungeons:chorundum_ore");
  potting_jamd_end_ore("minecraft:end_stone", "enlightened_end:malachite_ore"");
  potting_jamd_end_ore("minecraft:end_stone", "enlightened_end:irradium_ore");
  potting_jamd_end_ore("minecraft:end_stone", "enlightened_end:bismuth_ore");
  potting_jamd_end_ore("minecraft:end_stone", "enlightened_end:adamantite_node");
  potting_jamd_end_ore("minecraft:end_stone", "rftoolsbase:dimensionalshard_end");
  //#endregion
});
//#endregion
*/
