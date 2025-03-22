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
    { id: "create:crafting/tree_fertilizer" }
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
  potting_emptying(
    "createchromaticreturn:refined_mixture_bucket",
    "createchromaticreturn:refined_mixture",
    1000,
    "minecraft:bucket"
  )
  potting_emptying(
    "createchromaticreturn:shadow_essence_bucket",
    "createchromaticreturn:shadow_essence",
    1000,
    "minecraft:bucket"
  )
  //#endregion
  //#region - Refined Mixture
  e.custom({
    type: "create:mixing",
    heatRequirement: "superheated",
    ingredients: [
      {
        count: 8,
        item: "mekanism:block_refined_glowstone"
      },
      {
        count: 8,
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
        item: "moreplates:steel_rod"
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
    B: "moreplates:silver_plate"
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
  potting("create:creative_motor", "moreplates:brass_gear", "createaddition:electric_motor")
  potting("create:creative_fluid_tank", "moreplates:copper_gear", "create:fluid_tank")
  potting("createaddition:creative_energy", "moreplates:iron_gear", "createaddition:alternator")
  potting("create:creative_crate", "moreplates:steel_gear", "mekanism:personal_barrel")
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
  //#region - Bedrock Shard
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
        item: "extendedcrafting:the_ultimate_ingot"
      },
      {
        count: 64,
        item: "createchromaticreturn:multiplite_ingot"
      },
      {
        count: 64,
        item: "createchromaticreturn:refined_radiance"
      },
      {
        count: 64,
        item: "mekanism:pellet_antimatter"
      },
      {
        count: 64,
        item: "mekanism:enriched_carbon"
      },
      {
        count: 64,
        item: "mekanism:enriched_redstone"
      },
      {
        count: 64,
        item: "mekanism:enriched_diamond"
      },
      {
        count: 64,
        item: "mekanism:enriched_refined_obsidian"
      },
      {
        count: 64,
        item: "fluxnetworks:flux_dust"
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
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.remove("forge:dusts/diamond", "createaddition:diamond_grit")
  e.add("minecraft:pickaxes", [
    "createchromaticreturn:radiant_glow_saber",
    "createchromaticreturn:radiant_glow_claws"
  ])
})
//#endregion
