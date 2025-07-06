//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.remove("modfart/planks/other", "ars_nouveau:archwood_planks", "ars_technica:quartz_dust");
});
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([{ id: "ars_elemental:quartz_crush" }, { id: "ars_technica:crushing/quartz" }, { id: "ars_technica:giant_experience_gem" }, { id: "ars_technica:gargantuan_experience_gem" }]);
  //#endregion
  //#region - Creative Spell Book
  e.shaped("ars_nouveau:creative_spell_book", ["ABC", "DDE", "EEF"], {
    A: "ars_nouveau:archmage_spell_book",
    B: "extendedcrafting:the_ultimate_catalyst",
    C: "ars_elemental:necrotic_focus",
    D: "kubejs:nether_star_plate",
    E: "kubejs:diamond_plate",
    F: "ars_nouveau:thread_undying"
  });
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
        ingredients: [{ item: "ars_nouveau:source_jar" }, { fluid: "starbunclemania:source_fluid", amount: 1000 }],
        results: [{ item: "ars_nouveau:source_jar" }]
      },
      {
        type: "create:filling",
        ingredients: [{ item: "ars_nouveau:source_jar" }, { fluid: "starbunclemania:source_fluid", amount: 1000 }],
        results: [{ item: "ars_nouveau:source_jar" }]
      },
      {
        type: "create:filling",
        ingredients: [{ item: "ars_nouveau:source_jar" }, { fluid: "starbunclemania:source_fluid", amount: 1000 }],
        results: [{ item: "ars_nouveau:source_jar" }]
      },
      {
        type: "create:filling",
        ingredients: [{ item: "ars_nouveau:source_jar" }, { fluid: "starbunclemania:source_fluid", amount: 1000 }],
        results: [{ item: "ars_nouveau:source_jar" }]
      }
    ],
    transitionalItem: { item: "ars_nouveau:source_jar" }
  });
  //#endregion
  //#region - Amethyst Dust
  e.remove({ id: "ars_technica:crushing/amethyst_shard" });
  e.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {
        item: "minecraft:amethyst_shard"
      }
    },
    output: {
      item: "ars_technica:amethyst_dust"
    }
  });
  e.custom({
    type: "create:milling",
    ingredients: [
      {
        item: "minecraft:amethyst_shard"
      }
    ],
    processingTime: 50,
    results: [
      {
        count: 1,
        item: "ars_technica:amethyst_dust"
      }
    ]
  });
  //#endregion
  //#region - Glyph of Craft
  e.remove({ id: "ars_nouveau:glyph_craft" });
  e.custom({
    type: "ars_nouveau:glyph",
    count: 1,
    exp: 27,
    inputItems: [
      {
        item: {
          tag: "forge:workbench"
        }
      }
    ],
    output: "ars_nouveau:glyph_craft"
  });
  //#endregion
  //#region - Wixie Charm
  e.remove({ id: "ars_nouveau:wixie_charm" });
  e.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: {
      item: "ars_nouveau:wixie_charm"
    },
    pedestalItems: [
      {
        tag: "minecraft:saplings"
      },
      {
        tag: "forge:gems/emerald"
      },
      {
        tag: "forge:workbench"
      },
      {
        item: "minecraft:brewing_stand"
      }
    ],
    reagent: [
      {
        item: "ars_nouveau:wixie_shards"
      }
    ],
    sourceCost: 0
  });
  //#endregion
});
//#endregion

//#region - Loot Tables
ServerEvents.blockLootTables(e => {
  e.addSimpleBlock("ars_nouveau:creative_source_jar", "ars_nouveau:creative_source_jar");
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function ars_nouveau() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["ars_nouveau:debug", "ars_elemental:debug", "starbunclemania:star_sword", "starbunclemania:star_wand", "starbunclemania:star_saddle"];
  let hiding = [];
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
ars_nouveau();
//#endregion
