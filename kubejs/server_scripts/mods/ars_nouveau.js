//#region - Définition/Suppression/Masquage d'éléments dans JEI
function ars_nouveau() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "ars_nouveau:debug",
    "ars_elemental:debug",
    "starbunclemania:star_sword",
    "starbunclemania:star_wand",
    "starbunclemania:star_saddle"
  ]
  let hiding = [
    /*"ars_nouveau:drygmy_se", "ars_nouveau:starbuncle_se", "ars_nouveau:whirlisprig_se", "ars_nouveau:wilden_guardian_se", "ars_nouveau:wilden_hunter_se", "ars_nouveau:wilden_stalker_se"*/
  ]
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
ars_nouveau()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Creative Spell Book
  e.shaped("ars_nouveau:creative_spell_book", ["ABC", "DDE", "EEF"], {
    A: "ars_nouveau:archmage_spell_book",
    B: "extendedcrafting:the_ultimate_catalyst",
    C: "ars_elemental:necrotic_focus",
    D: "kubejs:nether_star_plate",
    E: "moreplates:diamond_plate",
    F: "ars_nouveau:thread_undying"
  })
  //#endregion
  //#region - Creative Source Jar
  e.custom({
    type: "create:sequenced_assembly",
    ingredient: { item: "ars_nouveau:source_jar" },
    loops: 1,
    results: [{ item: "ars_nouveau:creative_source_jar" }],
    sequence: [
      {
        type: "create:deploying",
        ingredients: [{ item: "ars_nouveau:source_jar" }, { item: "extendedcrafting:the_ultimate_catalyst" }],
        results: [{ item: "ars_nouveau:source_jar" }]
      },
      {
        type: "create:filling",
        ingredients: [
          { item: "ars_nouveau:source_jar" },
          { fluid: "starbunclemania:source_fluid", amount: 1000 }
        ],
        results: [{ item: "ars_nouveau:source_jar" }]
      },
      {
        type: "create:filling",
        ingredients: [
          { item: "ars_nouveau:source_jar" },
          { fluid: "starbunclemania:source_fluid", amount: 1000 }
        ],
        results: [{ item: "ars_nouveau:source_jar" }]
      },
      {
        type: "create:filling",
        ingredients: [
          { item: "ars_nouveau:source_jar" },
          { fluid: "starbunclemania:source_fluid", amount: 1000 }
        ],
        results: [{ item: "ars_nouveau:source_jar" }]
      },
      {
        type: "create:filling",
        ingredients: [
          { item: "ars_nouveau:source_jar" },
          { fluid: "starbunclemania:source_fluid", amount: 1000 }
        ],
        results: [{ item: "ars_nouveau:source_jar" }]
      }
    ],
    transitionalItem: { item: "ars_nouveau:source_jar" }
  })
  //#endregion
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.remove("modfart/planks/other", "ars_nouveau:archwood_planks")
})
//#endregion

//#region - Loot Tables
ServerEvents.blockLootTables(e => {
  e.addSimpleBlock("ars_nouveau:creative_source_jar", "ars_nouveau:creative_source_jar")
})
//#endregion
