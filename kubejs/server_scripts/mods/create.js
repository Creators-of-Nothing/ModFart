//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.remove("forge:dusts/diamond", "createaddition:diamond_grit")
  e.add("minecraft:pickaxes", ["createchromaticreturn:radiant_glow_saber", "createchromaticreturn:radiant_glow_claws"])
})
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([
    { id: "create_enchantment_industry:compat/ars_nouveau/disenchanting/experience_gem" },
    { id: "create_enchantment_industry:compat/ars_nouveau/disenchanting/greater_experience_gem" },
    { id: "create_enchantment_industry:compat/create_sa/disenchanting/experience_heap" },
    { id: "create_enchantment_industry:compat/cyclic/mixing/experience_conversion" },
    { id: "create_enchantment_industry:compat/mob_grinding_utils/mixing/experience_conversion" },
    { id: "create_enchantment_industry:compat/sophisticatedcore/mixing/experience_conversion" },
    { id: "create_enchantment_industry:disenchanting/enchanted_golden_apple" },
    { id: "create_enchantment_industry:disenchanting/experience_block" },
    { id: "create_enchantment_industry:disenchanting/experience_nugget" },
    { id: "create_enchantment_industry:mixing/hyper_experience" },
    { id: "create_jetpack:netherite_jetpack" },
    { id: "create_sa:quartz_gem_crushing" },
    { id: "create_unbreakable:mechanical_crafting/eternal_modifier" },
    { id: "createchromaticreturn:refined_essence_bucket_fill" },
    { id: "createchromaticreturn:shadow_essence_bucket_fill" },
    { id: "createchromaticreturn:cyber_plating" },
    { id: "mekanism:enriching/conversion/andesite/to_polished" },
    { id: "create:create/curiosities/cake" },
    { id: "createchromaticreturn:antimatter_recipe" },
    { id: "createchromaticreturn:basic_induction_cell" },
    { id: "createchromaticreturn:basic_induction_provider" },
    { id: "createchromaticreturn:plutonium_nugget_recipe" },
    { id: "createchromaticreturn:plutonium_pellet_recipe" },
    { id: "createchromaticreturn:polonium_nugget_recipe" },
    { id: "createchromaticreturn:polonium_pellet" },
    { id: "createchromaticreturn:motor_recipe" },
    { id: "createchromaticreturn:generator_recipe" },
    { id: "createchromaticreturn:bedrock_shard_crushing" },
    { id: "createchromaticreturn:multiplite_tube_recipe" },
    { id: "createchromaticreturn:refined_mixture_recipe" },
    { id: "create:crafting/tree_fertilizer" },
    { id: /create:milling\/compat\/botania\// },
    { id: /create_enchantment_industry:compacting\/experience_block_from_/ },
    { id: /createsifter:sifting/ }
  ])
  //#endregion
  //#region - Emptying
  let potting_emptying = (recipient, liquid, amount, empty_recipient) => {
    e.custom({
      type: "create:emptying",
      ingredients: [
        {
          item: recipient
        }
      ],
      results: [
        {
          fluid: liquid,
          amount: amount
        },
        {
          item: empty_recipient
        }
      ]
    })
  }
  potting_emptying("createchromaticreturn:refined_mixture_bucket", "createchromaticreturn:refined_mixture", 1000, "minecraft:bucket")
  potting_emptying("createchromaticreturn:shadow_essence_bucket", "createchromaticreturn:shadow_essence", 1000, "minecraft:bucket")
  //#endregion
  //#region - Refined Mixture
  e.custom({
    type: "create:mixing",
    heatRequirement: "superheated",
    ingredients: [
      {
        item: "mekanism:block_refined_glowstone"
      },
      {
        item: "mekanism:block_refined_glowstone"
      },
      {
        item: "mekanism:block_refined_glowstone"
      },
      {
        item: "mekanism:block_refined_glowstone"
      },
      {
        item: "mekanism:block_refined_glowstone"
      },
      {
        item: "mekanism:block_refined_glowstone"
      },
      {
        item: "mekanism:block_refined_glowstone"
      },
      {
        item: "mekanism:block_refined_glowstone"
      },
      {
        item: "minecraft:crying_obsidian"
      },
      {
        item: "minecraft:crying_obsidian"
      },
      {
        item: "minecraft:crying_obsidian"
      },
      {
        item: "minecraft:crying_obsidian"
      },
      {
        item: "minecraft:crying_obsidian"
      },
      {
        item: "minecraft:crying_obsidian"
      },
      {
        item: "minecraft:crying_obsidian"
      },
      {
        item: "minecraft:crying_obsidian"
      },
      {
        amount: 1000,
        fluid: "minecraft:water"
      }
    ],
    results: [
      {
        amount: 1000,
        fluid: "createchromaticreturn:refined_mixture"
      }
    ]
  })
  //#endregion
  //#region - Heap of Experience
  e.shapeless("4x create:experience_nugget", "create_sa:heap_of_experience")
  //#endregion
  //#region - Andesite Alloy
  e.custom({
    type: "create:sandpaper_polishing",
    ingredients: [
      {
        item: "minecraft:andesite"
      }
    ],
    results: [
      {
        item: "create:andesite_alloy"
      }
    ]
  })
  //#endregion
  //#region - Alloy Enrichment
  let potting_alloy_enrichment = (input, output) => {
    e.custom({
      type: "mekanism:enriching",
      input: {
        ingredient: {
          item: input
        }
      },
      output: {
        item: output
      }
    })
  }
  potting_alloy_enrichment("minecraft:andesite", "create:andesite_alloy")
  potting_alloy_enrichment("minecraft:amethyst_shard", "createutilities:polished_amethyst")
  //#endregion
  //#region - Hyper Experience
  e.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:glow_ink_sac"
      },
      {
        item: "minecraft:lapis_lazuli"
      },
      {
        fluid: "create_enchantment_industry:experience",
        amount: 1000
      }
    ],
    results: [
      {
        fluid: "create_enchantment_industry:hyper_experience",
        amount: 500
      }
    ],
    heatRequirement: "superheated"
  })
  //#endregion
  //#region - Radiant Glow Saber
  e.remove({ id: "createchromaticreturn:radiant_glow_saber_recipe" })
  e.custom({
    type: "create:mechanical_crafting",
    pattern: [" A ", " B ", "CDC", "CEC", " F "],
    key: {
      A: {
        item: "createchromaticreturn:refined_radiance"
      },
      B: {
        item: "createchromaticreturn:multiplite_tube"
      },
      C: {
        item: "kubejs:shadow_steel_plate"
      },
      D: {
        item: "createchromaticreturn:refined_mechanism"
      },
      E: {
        item: "mekaweapons:mekatana"
      },
      F: {
        item: "kubejs:steel_rod"
      }
    },
    result: {
      item: "createchromaticreturn:radiant_glow_saber"
    }
  })
  //#endregion
  //#region - Radiant Glow Claws
  e.remove({ id: "createchromaticreturn:radiant_glow_claws_recipe" })
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ["B B", "B B", "EXE", "GXG"],
    key: {
      E: {
        item: "createchromaticreturn:radiant_glow_saber"
      },
      B: {
        item: "createchromaticreturn:refined_radiance"
      },
      X: {
        item: "createchromaticreturn:refined_mechanism"
      },
      G: {
        item: "kubejs:shadow_steel_plate"
      }
    },
    result: {
      item: "createchromaticreturn:radiant_glow_claws"
    }
  })
  //#endregion
  //#region - Creative Tube
  e.shaped("createchromaticreturn:multiplite_tube", ["A", "B"], {
    A: "kubejs:alloy_creative",
    B: "kubejs:silver_plate"
  })
  //#endregion
  //#region - Creative Contraptions
  let potting = (output, E, F) => {
    e.custom({
      type: "create:mechanical_crafting",
      pattern: [" ABA ", "ACDCA", "BEFEB", "ADDDA", " ABA "],
      key: {
        A: { item: "antiblocksrechiseled:bright_black" },
        B: { item: "kubejs:block_creative" },
        C: { item: "createchromaticreturn:multiplite_tube" },
        D: { item: "kubejs:alloy_creative" },
        E: { item: E },
        F: { item: F }
      },
      result: { item: output }
    })
  }
  potting("create:creative_motor", "kubejs:brass_gear", "createaddition:electric_motor")
  potting("create:creative_fluid_tank", "kubejs:copper_gear", "create:fluid_tank")
  potting("createaddition:creative_energy", "kubejs:iron_gear", "createaddition:alternator")
  potting("create:creative_crate", "kubejs:steel_gear", "mekanism:personal_barrel")
  potting("createcasing:creative_cogwheel", "kubejs:andesite_gear", "create:cogwheel")
  //#endregion
  //#region - Bedrock
  e.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "minecraft:bedrock"
      }
    ],
    processingTime: 2000,
    results: [
      {
        count: 1,
        item: "minecraft:bedrock"
      },
      {
        chance: 0.1,
        count: 1,
        item: "createchromaticreturn:bedrock_shard"
      }
    ]
  })
  //#endregion
  //#region - Crushing Bedrock Shard
  e.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "createchromaticreturn:bedrock_shard"
      }
    ],
    processingTime: 2000,
    results: [
      {
        count: 64,
        item: "kubejs:basical_apparatus"
      },
      {
        count: 64,
        item: "kubejs:magical_apparatus"
      },
      {
        count: 64,
        item: "kubejs:mechanical_apparatus"
      },
      {
        count: 64,
        item: "kubejs:vital_apparatus"
      },
      {
        count: 128,
        item: "mekanism:enriched_carbon"
      },
      {
        count: 128,
        item: "mekanism:enriched_redstone"
      },
      {
        count: 128,
        item: "mekanism:enriched_diamond"
      },
      {
        count: 128,
        item: "mekanism:enriched_refined_obsidian"
      },
      {
        count: 256,
        item: "create:experience_block"
      }
    ]
  })
  //#endregion
  //#region - Philolite
  e.custom({
    type: "mekanism:painting",
    chemicalInput: {
      amount: 1000,
      pigment: "mekanism:gray"
    },
    itemInput: {
      ingredient: {
        item: "mekanism:hdpe_pellet"
      }
    },
    output: {
      item: "create_unbreakable:philolite"
    }
  })
  //#endregion
  //#region - Luminarchy
  e.custom({
    type: "mekanism:painting",
    chemicalInput: {
      amount: 1000,
      pigment: "mekanism:green"
    },
    itemInput: {
      ingredient: {
        item: "mekanism:hdpe_pellet"
      }
    },
    output: {
      item: "create_unbreakable:luminarchy"
    }
  })
  //#endregion
  //#region - Irromolding
  e.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "create_things_and_misc:vibration_mechanism"
    },
    loops: 1,
    results: [
      {
        item: "create_unbreakable:irromolding"
      }
    ],
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "create_things_and_misc:vibration_mechanism"
          },
          {
            item: "create_unbreakable:philolite"
          }
        ],
        results: [
          {
            item: "create_things_and_misc:vibration_mechanism"
          }
        ]
      },
      {
        type: "create:filling",
        ingredients: [
          {
            item: "create_things_and_misc:vibration_mechanism"
          },
          {
            fluid: "create_enchantment_industry:ink",
            amount: 100
          }
        ],
        results: [
          {
            item: "create_things_and_misc:vibration_mechanism"
          }
        ]
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "create_things_and_misc:vibration_mechanism"
          }
        ],
        results: [
          {
            item: "create_things_and_misc:vibration_mechanism"
          }
        ]
      },
      {
        type: "create:filling",
        ingredients: [
          {
            item: "create_things_and_misc:vibration_mechanism"
          },
          {
            fluid: "create_enchantment_industry:ink",
            amount: 100
          }
        ],
        results: [
          {
            item: "create_things_and_misc:vibration_mechanism"
          }
        ]
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "create_things_and_misc:vibration_mechanism"
          },
          {
            item: "create_unbreakable:luminarchy"
          }
        ],
        results: [
          {
            item: "create_things_and_misc:vibration_mechanism"
          }
        ]
      }
    ],
    transitionalItem: {
      item: "create_things_and_misc:vibration_mechanism"
    }
  })
  //#endregion
  //#region - Carbon Powder
  e.remove({ id: "createchromaticreturn:carbon_powder_recipe" })
  e.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "minecraft:charcoal"
      }
    ],
    processingTime: 1200,
    results: [
      {
        item: "createchromaticreturn:carbon_powder"
      }
    ]
  })
  //#endregion
  //#region - Sifters
  //#region - Constantes
  const mesh_1 = 0.015625
  const mesh_2 = 0.03125
  const mesh_3 = 0.0625
  const mesh_4 = 0.125
  const mesh_5 = 0.25
  const mesh_6 = 0.5
  const mesh_7 = 1
  const cobblestone = [
    "kubejs:raw_coal",
    "minecraft:raw_iron",
    "minecraft:raw_copper",
    "minecraft:raw_gold",
    "kubejs:raw_redstone",
    "kubejs:raw_emerald",
    "kubejs:raw_lapis_lazuli",
    "kubejs:raw_diamond",
    "create:raw_zinc",
    "kubejs:raw_dimensional",
    "kubejs:raw_endumium",
    "create:experience_nugget"
  ]
  const cobbled_deepslate = [
    "kubejs:raw_coal",
    "minecraft:raw_iron",
    "minecraft:raw_copper",
    "minecraft:raw_gold",
    "kubejs:raw_redstone",
    "kubejs:raw_emerald",
    "kubejs:raw_lapis_lazuli",
    "kubejs:raw_diamond",
    "create:raw_zinc",
    "create:experience_nugget"
  ]
  const cobbled_sculk_stone = [
    "kubejs:raw_coal",
    "minecraft:raw_iron",
    "minecraft:raw_copper",
    "minecraft:raw_gold",
    "kubejs:raw_redstone",
    "kubejs:raw_emerald",
    "kubejs:raw_lapis_lazuli",
    "kubejs:raw_diamond",
    "minecraft:echo_shard",
    "deeperdarker:warden_carapace",
    "create:experience_nugget"
  ]
  const deadrock = [
    "twilightforest:raw_ironwood",
    "twilightforest:steeleaf_ingot",
    "twilightforest:armor_shard",
    "twilightforest:fiery_ingot",
    "twilightforest:arctic_fur",
    "twilightforest:carminite",
    "create:experience_nugget"
  ]
  const deepslate = [
    "kubejs:raw_ruby",
    "kubejs:raw_jade",
    "kubejs:raw_aquamarine",
    "kubejs:raw_onyx",
    "samurai_dynasty:raw_silver",
    "kubejs:raw_endumium",
    "mekanism:raw_tin",
    "mekanism:raw_osmium",
    "mekanism:raw_uranium",
    "kubejs:raw_fluorite",
    "mekanism:raw_lead",
    "create:experience_nugget"
  ]
  const depthrock = [
    "kubejs:raw_coal",
    "minecraft:raw_iron",
    "minecraft:raw_gold",
    "kubejs:raw_diamond",
    "undergarden:raw_cloggrum",
    "kubejs:raw_utherium",
    "kubejs:raw_regalium",
    "undergarden:forgotten_nugget",
    "create:experience_nugget"
  ]
  const end_stone = [
    "minecraft:ender_pearl",
    "minecraft:chorus_flower",
    "kubejs:raw_enderite",
    "kubejs:raw_malachite",
    "kubejs:raw_chorundum",
    "enlightened_end:raw_irradium",
    "enlightened_end:raw_bismuth",
    "kubejs:raw_dimensional",
    "enlightened_end:adamantite_nugget",
    "minecraft:shulker_shell",
    "create:experience_nugget"
  ]
  const gravel = ["minecraft:flint", "minecraft:clay_ball", "minecraft:slime_ball", "create:experience_nugget"]
  const holystone = ["kubejs:raw_ambrosium", "kubejs:raw_gravitite", "kubejs:raw_quartz", "kubejs:raw_zanite", "ancient_aether:valkyrum", "create:experience_nugget"]
  const netherrack = [
    "minecraft:raw_gold",
    "kubejs:raw_quartz",
    "kubejs:raw_netherite",
    "minecraft:glowstone_dust",
    "kubejs:raw_dimensional",
    "stalwart_dungeons:raw_tungsten",
    "minecraft:blaze_rod",
    "minecraft:ghast_tear",
    "create:experience_nugget"
  ]
  const shiverstone = [
    "kubejs:raw_coal",
    "minecraft:raw_iron",
    "kubejs:raw_diamond",
    "undergarden:raw_cloggrum",
    "undergarden:raw_froststeel",
    "kubejs:raw_utherium",
    "kubejs:raw_regalium",
    "undergarden:forgotten_nugget",
    "create:experience_nugget"
  ]
  const stone = [
    "kubejs:raw_ruby",
    "kubejs:raw_jade",
    "kubejs:raw_aquamarine",
    "kubejs:raw_onyx",
    "mekanism:raw_tin",
    "mekanism:raw_osmium",
    "mekanism:raw_uranium",
    "kubejs:raw_fluorite",
    "mekanism:raw_lead",
    "create:experience_nugget"
  ]
  const red_sand = [
    "minecraft:fire_coral_block",
    "minecraft:fire_coral",
    "minecraft:fire_coral_fan",
    "minecraft:brain_coral_block",
    "minecraft:brain_coral",
    "minecraft:brain_coral_fan",
    "minecraft:bubble_coral_block",
    "minecraft:bubble_coral",
    "minecraft:bubble_coral_fan",
    "minecraft:kelp",
    "minecraft:clay_ball",
    "create:experience_nugget"
  ]
  const sand = [
    "minecraft:tube_coral_block",
    "minecraft:tube_coral",
    "minecraft:tube_coral_fan",
    "minecraft:horn_coral_block",
    "minecraft:horn_coral",
    "minecraft:horn_coral_fan",
    "minecraft:kelp",
    "minecraft:clay_ball",
    "create:experience_nugget"
  ]
  //#endregion
  let potting_sifter = (material, waterlogged, mesh, chance, loots) => {
    // Contante d'optimisation de l'attribution des loots (Crédit to XenoArea)
    const results = loots.map(loot => {
      return {
        chance: chance,
        item: loot
      }
    })

    e.custom({
      type: "createsifter:sifting",
      ingredients: [
        {
          item: mesh
        },
        {
          item: material
        }
      ],
      processingTime: 100,
      waterlogged: waterlogged,
      results: results
    })
  }
  //#region - Cobblestone
  potting_sifter("minecraft:cobblestone", false, "createsifter:string_mesh", mesh_1, cobblestone)
  potting_sifter("minecraft:cobblestone", false, "createsifter:andesite_mesh", mesh_2, cobblestone)
  potting_sifter("minecraft:cobblestone", false, "createsifter:zinc_mesh", mesh_3, cobblestone)
  potting_sifter("minecraft:cobblestone", false, "createsifter:brass_mesh", mesh_4, cobblestone)
  potting_sifter("minecraft:cobblestone", false, "createsifter:advanced_brass_mesh", mesh_5, cobblestone)
  potting_sifter("minecraft:cobblestone", false, "createsifter:custom_mesh", mesh_6, cobblestone)
  potting_sifter("minecraft:cobblestone", false, "createsifter:advanced_custom_mesh", mesh_7, cobblestone)
  //#endregion
  //#region - Cobbled Deepslate
  potting_sifter("minecraft:cobbled_deepslate", false, "createsifter:string_mesh", mesh_1, cobbled_deepslate)
  potting_sifter("minecraft:cobbled_deepslate", false, "createsifter:andesite_mesh", mesh_2, cobbled_deepslate)
  potting_sifter("minecraft:cobbled_deepslate", false, "createsifter:zinc_mesh", mesh_3, cobbled_deepslate)
  potting_sifter("minecraft:cobbled_deepslate", false, "createsifter:brass_mesh", mesh_4, cobbled_deepslate)
  potting_sifter("minecraft:cobbled_deepslate", false, "createsifter:advanced_brass_mesh", mesh_5, cobbled_deepslate)
  potting_sifter("minecraft:cobbled_deepslate", false, "createsifter:custom_mesh", mesh_6, cobbled_deepslate)
  potting_sifter("minecraft:cobbled_deepslate", false, "createsifter:advanced_custom_mesh", mesh_7, cobbled_deepslate)
  //#endregion
  //#region - Cobbled Sculk Stone
  potting_sifter("deeperdarker:cobbled_sculk_stone", false, "createsifter:string_mesh", mesh_1, cobbled_sculk_stone)
  potting_sifter("deeperdarker:cobbled_sculk_stone", false, "createsifter:andesite_mesh", mesh_2, cobbled_sculk_stone)
  potting_sifter("deeperdarker:cobbled_sculk_stone", false, "createsifter:zinc_mesh", mesh_3, cobbled_sculk_stone)
  potting_sifter("deeperdarker:cobbled_sculk_stone", false, "createsifter:brass_mesh", mesh_4, cobbled_sculk_stone)
  potting_sifter("deeperdarker:cobbled_sculk_stone", false, "createsifter:advanced_brass_mesh", mesh_5, cobbled_sculk_stone)
  potting_sifter("deeperdarker:cobbled_sculk_stone", false, "createsifter:custom_mesh", mesh_6, cobbled_sculk_stone)
  potting_sifter("deeperdarker:cobbled_sculk_stone", false, "createsifter:advanced_custom_mesh", mesh_7, cobbled_sculk_stone)
  //#endregion
  //#region - Deadrock
  potting_sifter("twilightforest:deadrock", false, "createsifter:string_mesh", mesh_1, deadrock)
  potting_sifter("twilightforest:deadrock", false, "createsifter:andesite_mesh", mesh_2, deadrock)
  potting_sifter("twilightforest:deadrock", false, "createsifter:zinc_mesh", mesh_3, deadrock)
  potting_sifter("twilightforest:deadrock", false, "createsifter:brass_mesh", mesh_4, deadrock)
  potting_sifter("twilightforest:deadrock", false, "createsifter:advanced_brass_mesh", mesh_5, deadrock)
  potting_sifter("twilightforest:deadrock", false, "createsifter:custom_mesh", mesh_6, deadrock)
  potting_sifter("twilightforest:deadrock", false, "createsifter:advanced_custom_mesh", mesh_7, deadrock)
  //#endregion
  //#region - Deepslate
  potting_sifter("minecraft:deepslate", false, "createsifter:string_mesh", mesh_1, deepslate)
  potting_sifter("minecraft:deepslate", false, "createsifter:andesite_mesh", mesh_2, deepslate)
  potting_sifter("minecraft:deepslate", false, "createsifter:zinc_mesh", mesh_3, deepslate)
  potting_sifter("minecraft:deepslate", false, "createsifter:brass_mesh", mesh_4, deepslate)
  potting_sifter("minecraft:deepslate", false, "createsifter:advanced_brass_mesh", mesh_5, deepslate)
  potting_sifter("minecraft:deepslate", false, "createsifter:custom_mesh", mesh_6, deepslate)
  potting_sifter("minecraft:deepslate", false, "createsifter:advanced_custom_mesh", mesh_7, deepslate)
  //#endregion
  //#region - Depthrock
  potting_sifter("undergarden:depthrock", false, "createsifter:string_mesh", mesh_1, depthrock)
  potting_sifter("undergarden:depthrock", false, "createsifter:andesite_mesh", mesh_2, depthrock)
  potting_sifter("undergarden:depthrock", false, "createsifter:zinc_mesh", mesh_3, depthrock)
  potting_sifter("undergarden:depthrock", false, "createsifter:brass_mesh", mesh_4, depthrock)
  potting_sifter("undergarden:depthrock", false, "createsifter:advanced_brass_mesh", mesh_5, depthrock)
  potting_sifter("undergarden:depthrock", false, "createsifter:custom_mesh", mesh_6, depthrock)
  potting_sifter("undergarden:depthrock", false, "createsifter:advanced_custom_mesh", mesh_7, depthrock)
  //#endregion
  //#region - End Stone
  potting_sifter("minecraft:end_stone", false, "createsifter:string_mesh", mesh_1, end_stone)
  potting_sifter("minecraft:end_stone", false, "createsifter:andesite_mesh", mesh_2, end_stone)
  potting_sifter("minecraft:end_stone", false, "createsifter:zinc_mesh", mesh_3, end_stone)
  potting_sifter("minecraft:end_stone", false, "createsifter:brass_mesh", mesh_4, end_stone)
  potting_sifter("minecraft:end_stone", false, "createsifter:advanced_brass_mesh", mesh_5, end_stone)
  potting_sifter("minecraft:end_stone", false, "createsifter:custom_mesh", mesh_6, end_stone)
  potting_sifter("minecraft:end_stone", false, "createsifter:advanced_custom_mesh", mesh_7, end_stone)
  //#endregion
  //#region - Gravel
  potting_sifter("minecraft:gravel", false, "createsifter:string_mesh", mesh_1, gravel)
  potting_sifter("minecraft:gravel", false, "createsifter:andesite_mesh", mesh_2, gravel)
  potting_sifter("minecraft:gravel", false, "createsifter:zinc_mesh", mesh_3, gravel)
  potting_sifter("minecraft:gravel", false, "createsifter:brass_mesh", mesh_4, gravel)
  potting_sifter("minecraft:gravel", false, "createsifter:advanced_brass_mesh", mesh_5, gravel)
  potting_sifter("minecraft:gravel", false, "createsifter:custom_mesh", mesh_6, gravel)
  potting_sifter("minecraft:gravel", false, "createsifter:advanced_custom_mesh", mesh_7, gravel)
  //#endregion
  //#region - Holystone
  potting_sifter("aether:holystone", false, "createsifter:string_mesh", mesh_1, holystone)
  potting_sifter("aether:holystone", false, "createsifter:andesite_mesh", mesh_2, holystone)
  potting_sifter("aether:holystone", false, "createsifter:zinc_mesh", mesh_3, holystone)
  potting_sifter("aether:holystone", false, "createsifter:brass_mesh", mesh_4, holystone)
  potting_sifter("aether:holystone", false, "createsifter:advanced_brass_mesh", mesh_5, holystone)
  potting_sifter("aether:holystone", false, "createsifter:custom_mesh", mesh_6, holystone)
  potting_sifter("aether:holystone", false, "createsifter:advanced_custom_mesh", mesh_7, holystone)
  //#endregion
  //#region - Netherrack
  potting_sifter("minecraft:netherrack", false, "createsifter:string_mesh", mesh_1, netherrack)
  potting_sifter("minecraft:netherrack", false, "createsifter:andesite_mesh", mesh_2, netherrack)
  potting_sifter("minecraft:netherrack", false, "createsifter:zinc_mesh", mesh_3, netherrack)
  potting_sifter("minecraft:netherrack", false, "createsifter:brass_mesh", mesh_4, netherrack)
  potting_sifter("minecraft:netherrack", false, "createsifter:advanced_brass_mesh", mesh_5, netherrack)
  potting_sifter("minecraft:netherrack", false, "createsifter:custom_mesh", mesh_6, netherrack)
  potting_sifter("minecraft:netherrack", false, "createsifter:advanced_custom_mesh", mesh_7, netherrack)
  //#endregion
  //#region - Shiverstone
  potting_sifter("undergarden:shiverstone", false, "createsifter:string_mesh", mesh_1, shiverstone)
  potting_sifter("undergarden:shiverstone", false, "createsifter:andesite_mesh", mesh_2, shiverstone)
  potting_sifter("undergarden:shiverstone", false, "createsifter:zinc_mesh", mesh_3, shiverstone)
  potting_sifter("undergarden:shiverstone", false, "createsifter:brass_mesh", mesh_4, shiverstone)
  potting_sifter("undergarden:shiverstone", false, "createsifter:advanced_brass_mesh", mesh_5, shiverstone)
  potting_sifter("undergarden:shiverstone", false, "createsifter:custom_mesh", mesh_6, shiverstone)
  potting_sifter("undergarden:shiverstone", false, "createsifter:advanced_custom_mesh", mesh_7, shiverstone)
  //#endregion
  //#region - Stone
  potting_sifter("minecraft:stone", false, "createsifter:string_mesh", mesh_1, stone)
  potting_sifter("minecraft:stone", false, "createsifter:andesite_mesh", mesh_2, stone)
  potting_sifter("minecraft:stone", false, "createsifter:zinc_mesh", mesh_3, stone)
  potting_sifter("minecraft:stone", false, "createsifter:brass_mesh", mesh_4, stone)
  potting_sifter("minecraft:stone", false, "createsifter:advanced_brass_mesh", mesh_5, stone)
  potting_sifter("minecraft:stone", false, "createsifter:custom_mesh", mesh_6, stone)
  potting_sifter("minecraft:stone", false, "createsifter:advanced_custom_mesh", mesh_7, stone)
  //#endregion
  //#region - Red Sand
  potting_sifter("minecraft:red_sand", true, "createsifter:string_mesh", mesh_1, red_sand)
  potting_sifter("minecraft:red_sand", true, "createsifter:andesite_mesh", mesh_2, red_sand)
  potting_sifter("minecraft:red_sand", true, "createsifter:zinc_mesh", mesh_3, red_sand)
  potting_sifter("minecraft:red_sand", true, "createsifter:brass_mesh", mesh_4, red_sand)
  potting_sifter("minecraft:red_sand", true, "createsifter:advanced_brass_mesh", mesh_5, red_sand)
  potting_sifter("minecraft:red_sand", true, "createsifter:custom_mesh", mesh_6, red_sand)
  potting_sifter("minecraft:red_sand", true, "createsifter:advanced_custom_mesh", mesh_7, red_sand)
  //#endregion
  //#region - Sand
  potting_sifter("minecraft:sand", true, "createsifter:string_mesh", mesh_1, sand)
  potting_sifter("minecraft:sand", true, "createsifter:andesite_mesh", mesh_2, sand)
  potting_sifter("minecraft:sand", true, "createsifter:zinc_mesh", mesh_3, sand)
  potting_sifter("minecraft:sand", true, "createsifter:brass_mesh", mesh_4, sand)
  potting_sifter("minecraft:sand", true, "createsifter:advanced_brass_mesh", mesh_5, sand)
  potting_sifter("minecraft:sand", true, "createsifter:custom_mesh", mesh_6, sand)
  potting_sifter("minecraft:sand", true, "createsifter:advanced_custom_mesh", mesh_7, sand)
  //#endregion
  //#endregion
  //#region - Sifter Mesh
  e.remove([{ id: /createsifter:.*_mesh/ }])
  let potting_mesh = (base, material, mesh) => {
    e.shaped(mesh, [" A ", "ABA", " A "], { A: material, B: base })
  }
  potting_mesh("minecraft:cobweb", "kubejs:wood_rod", "createsifter:string_mesh")
  potting_mesh("createsifter:string_mesh", "kubejs:brass_rod", "createsifter:andesite_mesh")
  potting_mesh("createsifter:andesite_mesh", "kubejs:netherite_rod", "createsifter:zinc_mesh")
  potting_mesh("createsifter:zinc_mesh", "kubejs:echo_rod", "createsifter:brass_mesh")
  potting_mesh("extendedcrafting:advanced_catalyst", "createsifter:brass_mesh", "createsifter:advanced_brass_mesh")
  potting_mesh("createsifter:advanced_brass_mesh", "extendedcrafting:the_ultimate_catalyst", "createsifter:custom_mesh")
  potting_mesh("extendedcrafting:advanced_catalyst", "createsifter:custom_mesh", "createsifter:advanced_custom_mesh")
  //#endregion
  //#region - Creative Ingot
  e.remove({ id: "createchromaticreturn:multiplite_recipe" })
  e.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "createchromaticreturn:refined_radiance"
      },
      {
        item: "minecraft:dragon_breath"
      },
      {
        item: "minecraft:dragon_breath"
      },
      {
        item: "minecraft:dragon_breath"
      },
      {
        item: "minecraft:dragon_breath"
      },
      {
        item: "minecraft:dragon_breath"
      },
      {
        item: "minecraft:dragon_breath"
      },
      {
        item: "minecraft:dragon_breath"
      },
      {
        item: "minecraft:dragon_breath"
      },
      {
        item: "minecraft:shulker_shell"
      },
      {
        item: "minecraft:shulker_shell"
      },
      {
        item: "minecraft:shulker_shell"
      },
      {
        item: "minecraft:shulker_shell"
      },
      {
        item: "minecraft:shulker_shell"
      },
      {
        item: "minecraft:shulker_shell"
      },
      {
        item: "minecraft:shulker_shell"
      },
      {
        item: "minecraft:shulker_shell"
      },
      {
        item: "extendedcrafting:the_ultimate_catalyst"
      }
    ],
    results: [
      {
        item: "createchromaticreturn:multiplite_ingot"
      }
    ],
    heatRequirement: "superheated"
  })
  //#endregion
  //#region - Experience
  let potting_experience = (input, amount, fluid) => {
    e.custom({
      type: "create_enchantment_industry:disenchanting",
      ingredients: [
        {
          item: input
        }
      ],
      results: [
        {
          fluid: fluid,
          amount: amount
        }
      ]
    })
  }
  potting_experience("create:experience_nugget", 100, "create_enchantment_industry:experience")
  potting_experience("create_sa:heap_of_experience", 400, "create_enchantment_industry:experience")
  potting_experience("create:experience_block", 900, "create_enchantment_industry:experience")
  //#endregion
})
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function create() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "create:handheld_worldshaper",
    "create:powdered_obsidian",
    /create:crushed_raw_/,
    "createchromaticreturn:antiplite_charm",
    "createchromaticreturn:antiplite_ingot",
    "createchromaticreturn:axe_cast",
    "createchromaticreturn:bamboo_shadow_steel_paxel",
    "createchromaticreturn:bamboo_shadow_steel_sword",
    "createchromaticreturn:bedrock_charm_base",
    "createchromaticreturn:blade_cast",
    "createchromaticreturn:blazing_shadow_steel_paxel",
    "createchromaticreturn:blazing_shadow_steel_sword",
    "createchromaticreturn:bone_shadow_steel_paxel",
    "createchromaticreturn:bone_shadow_steel_sword",
    "createchromaticreturn:charm_base",
    "createchromaticreturn:charm_cast",
    "createchromaticreturn:durasteel_book",
    "createchromaticreturn:durasteel_charm_cast",
    "createchromaticreturn:durasteel_handle",
    "createchromaticreturn:durasteel_ingot",
    "createchromaticreturn:durasteel_shadow_steel_paxel",
    "createchromaticreturn:durasteel_shadow_steel_sword",
    "createchromaticreturn:fortunite_bar",
    "createchromaticreturn:four_leaf_clover",
    "createchromaticreturn:handle_cast",
    "createchromaticreturn:hoe_cast",
    "createchromaticreturn:industrium_book",
    "createchromaticreturn:industrium_charm",
    "createchromaticreturn:industrium_handle",
    "createchromaticreturn:industrium_shadow_steel_paxel",
    "createchromaticreturn:industrium_shadow_steel_sword",
    "createchromaticreturn:multiplite_charm",
    "createchromaticreturn:multiplite_handle",
    "createchromaticreturn:multiplite_shadow_steel_paxel",
    "createchromaticreturn:multiplite_shadow_steel_sword",
    "createchromaticreturn:paxel_cast",
    "createchromaticreturn:pickaxe_cast",
    "createchromaticreturn:plating_cast",
    "createchromaticreturn:plutonium_nugget",
    "createchromaticreturn:polonium_nugget",
    "createchromaticreturn:refined_charm",
    "createchromaticreturn:refined_handle",
    "createchromaticreturn:refined_shadow_steel_paxel",
    "createchromaticreturn:refined_shadow_steel_sword",
    "createchromaticreturn:shadow_charm",
    "createchromaticreturn:shadow_steel_blade",
    "createchromaticreturn:shadow_steel_paxel_head",
    "createchromaticreturn:shadow_steel_paxel",
    "createchromaticreturn:shadow_steel_sword",
    "createchromaticreturn:shovel_cast",
    "createchromaticreturn:silkstrum_book",
    "createchromaticreturn:silkstrum_charm",
    "createchromaticreturn:silkstrum_handle",
    "createchromaticreturn:silkstrum_shadow_steel_paxel",
    "createchromaticreturn:silkstrum_shadow_steel_sword",
    "createchromaticreturn:silkstrum",
    "createutilities:void_battery",
    "createutilities:void_chest",
    "createutilities:void_tank",
    "create_things_and_misc:experience_sheet",
    "create_things_and_misc:rose_quartz_sheet",
    "create:brass_sheet",
    "create:copper_sheet",
    "create:golden_sheet",
    "create:iron_sheet",
    "createaddition:brass_rod",
    "createaddition:copper_rod",
    "createaddition:diamond_grit",
    "createaddition:electrum_rod",
    "createaddition:electrum_sheet",
    "createaddition:gold_rod",
    "createaddition:iron_rod",
    "createaddition:zinc_sheet",
    "createutilities:void_steel_sheet",
    "create_unbreakable:philolite_block",
    "create_unbreakable:luminarchy_block"
  ]
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
create()
//#endregion
