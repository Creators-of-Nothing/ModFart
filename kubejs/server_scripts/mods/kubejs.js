//#region - Définition/Suppression/Masquage d'éléments dans JEI
function kubejs() {
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
kubejs()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Apparatus
  let potting_apparatus_complex = (
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
    a,
    b,
    c,
    apparatus
  ) => {
    e.custom({
      type: "create:mechanical_crafting",
      pattern: ["  A B  ", " CDEFG ", "HI J KL", " MNOPQ ", "RS T UV", " WXYZa ", "  b c  "],
      key: {
        A: { item: A },
        B: { item: B },
        C: { item: C },
        D: { item: D },
        E: { item: E },
        F: { item: F },
        G: { item: G },
        H: { item: H },
        I: { item: I },
        J: { item: J },
        K: { item: K },
        L: { item: L },
        M: { item: M },
        N: { item: N },
        O: { item: O },
        P: { item: P },
        Q: { item: Q },
        R: { item: R },
        S: { item: S },
        T: { item: T },
        U: { item: U },
        V: { item: V },
        W: { item: W },
        X: { item: X },
        Y: { item: Y },
        Z: { item: Z },
        a: { item: a },
        b: { item: b },
        c: { item: c }
      },
      result: { item: apparatus }
    })
  }
  potting_apparatus_complex(
    "moreplates:iron_rod",
    "moreplates:lapis_lazuli_rod",
    "moreplates:iron_gear",
    "moreplates:iron_plate",
    "moreplates:lapis_lazuli_gear",
    "moreplates:lapis_lazuli_plate",
    "moreplates:coal_gear",
    "moreplates:gold_rod",
    "moreplates:gold_plate",
    "moreplates:nether_quartz_rod",
    "moreplates:coal_plate",
    "moreplates:coal_rod",
    "moreplates:gold_gear",
    "moreplates:redstone_rod",
    "kubejs:echo_gear",
    "moreplates:amethyst_rod",
    "moreplates:netherite_gear",
    "moreplates:copper_rod",
    "moreplates:copper_plate",
    "moreplates:glowstone_rod",
    "moreplates:netherite_plate",
    "moreplates:netherite_rod",
    "moreplates:copper_gear",
    "moreplates:emerald_plate",
    "moreplates:emerald_gear",
    "moreplates:diamond_plate",
    "moreplates:diamond_gear",
    "moreplates:emerald_rod",
    "moreplates:diamond_rod",
    "kubejs:basical_apparatus"
  )
  potting_apparatus_complex(
    "kubejs:dimensional_rod",
    "kubejs:drygmy_rod",
    "kubejs:dimensional_gear",
    "kubejs:dimensional_plate",
    "kubejs:drygmy_gear",
    "kubejs:drygmy_plate",
    "kubejs:wixie_gear",
    "kubejs:enderite_rod",
    "kubejs:enderite_plate",
    "moreplates:neptunium_rod",
    "kubejs:wixie_plate",
    "kubejs:wixie_rod",
    "kubejs:enderite_gear",
    "kubejs:pewter_rod",
    "kubejs:source_gear",
    "kubejs:arcane_gold_rod",
    "kubejs:whirlisprig_gear",
    "moreplates:prismarine_crystal_rod",
    "moreplates:prismarine_crystal_plate",
    "kubejs:ash_rod",
    "kubejs:whirlisprig_plate",
    "kubejs:whirlisprig_rod",
    "moreplates:prismarine_crystal_gear",
    "kubejs:endumium_plate",
    "kubejs:endumium_gear",
    "kubejs:starbuncle_plate",
    "kubejs:starbuncle_gear",
    "kubejs:endumium_rod",
    "kubejs:starbuncle_rod",
    "kubejs:magical_apparatus"
  )
  potting_apparatus_complex(
    "moreplates:steel_rod",
    "kubejs:andesite_rod",
    "moreplates:steel_gear",
    "moreplates:steel_plate",
    "kubejs:andesite_gear",
    "kubejs:andesite_plate",
    "kubejs:rose_quartz_gear",
    "moreplates:refined_glowstone_rod",
    "moreplates:refined_glowstone_plate",
    "kubejs:arctic_rod",
    "kubejs:rose_quartz_plate",
    "kubejs:rose_quartz_rod",
    "moreplates:refined_glowstone_gear",
    "kubejs:fiery_rod",
    "kubejs:antimatter_gear",
    "moreplates:bronze_rod",
    "moreplates:crystaltine_gear",
    "moreplates:refined_obsidian_rod",
    "moreplates:refined_obsidian_plate",
    "kubejs:cloggrum_rod",
    "moreplates:crystaltine_plate",
    "moreplates:crystaltine_rod",
    "moreplates:refined_obsidian_gear",
    "moreplates:enhanced_ender_plate",
    "moreplates:enhanced_ender_gear",
    "kubejs:enhanced_redstone_plate",
    "kubejs:enhanced_redstone_gear",
    "moreplates:enhanced_ender_rod",
    "kubejs:enhanced_redstone_rod",
    "kubejs:mechanical_apparatus"
  )
  potting_apparatus_complex(
    "kubejs:scute_rod",
    "kubejs:experience_rod",
    "kubejs:scute_gear",
    "kubejs:scute_plate",
    "kubejs:experience_gear",
    "kubejs:experience_plate",
    "kubejs:witherite_gear",
    "kubejs:deep_rod",
    "kubejs:deep_plate",
    "kubejs:phantom_rod",
    "kubejs:witherite_plate",
    "kubejs:witherite_rod",
    "kubejs:deep_gear",
    "kubejs:ignitium_rod",
    "kubejs:nether_star_gear",
    "kubejs:forgotten_rod",
    "kubejs:straddlite_gear",
    "kubejs:dragon_rod",
    "kubejs:dragon_plate",
    "kubejs:titan_rod",
    "kubejs:straddlite_plate",
    "kubejs:straddlite_rod",
    "kubejs:dragon_gear",
    "kubejs:sea_plate",
    "kubejs:sea_gear",
    "kubejs:honey_plate",
    "kubejs:honey_gear",
    "kubejs:sea_rod",
    "kubejs:honey_rod",
    "kubejs:vital_apparatus"
  )
  let potting_apparatus_simple = (apparatus, A, B, C, D, F, G, H, I) => {
    e.shaped(apparatus, ["ABC", "DEF", "GHI"], {
      A: A,
      B: B,
      C: C,
      D: D,
      E: "extendedcrafting:the_ultimate_nugget",
      F: F,
      G: G,
      H: H,
      I: I
    })
  }
  potting_apparatus_simple(
    "kubejs:basical_apparatus",
    "moreplates:iron_gear",
    "moreplates:lapis_lazuli_gear",
    "moreplates:coal_gear",
    "moreplates:gold_gear",
    "moreplates:netherite_gear",
    "kubejs:echo_gear",
    "moreplates:emerald_gear",
    "moreplates:diamond_gear"
  )
  potting_apparatus_simple(
    "kubejs:magical_apparatus",
    "kubejs:dimensional_gear",
    "kubejs:source_gear",
    "kubejs:pewter_gear",
    "kubejs:enderite_gear",
    "kubejs:ash_gear",
    "moreplates:prismarine_crystal_gear",
    "kubejs:endumium_gear",
    "kubejs:starbuncle_gear"
  )
  potting_apparatus_simple(
    "kubejs:mechanical_apparatus",
    "moreplates:steel_gear",
    "kubejs:andesite_gear",
    "kubejs:rose_quartz_gear",
    "moreplates:refined_glowstone_gear",
    "kubejs:antimatter_gear",
    "moreplates:refined_obsidian_gear",
    "moreplates:enhanced_ender_gear",
    "kubejs:enhanced_redstone_gear"
  )
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
  )
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
  })
  //#endregion
  //#region - Creative Alloy
  e.shapeless("9x kubejs:alloy_creative", "kubejs:block_creative")
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
    })
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
    })
  }
  potting_creative_alloy("createchromaticreturn:multiplite_ingot", "kubejs:alloy_creative")
  //#endregion
  //#region - Creative Alloy Block
  e.shaped("kubejs:block_creative", ["AAA", "AAA", "AAA"], {
    A: "kubejs:alloy_creative"
  })
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
  })
  //#endregion
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
