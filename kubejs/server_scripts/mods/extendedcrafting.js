//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([
    { id: "extendedcrafting:basic_table" },
    { id: "extendedcrafting:advanced_table" },
    { id: "extendedcrafting:elite_table" },
    { id: "extendedcrafting:ultimate_table" },
    { id: "extendedcrafting:enhanced_redstone_ingot" }
  ]);
  //#endregion
  //#region - Crystaltine Ingot
  e.remove({ id: "extendedcrafting:crystaltine_ingot" });
  e.custom({
    type: "cyclic:solidifier",
    ingredients: [
      {
        item: "minecraft:netherite_ingot"
      },
      {
        item: "cyclic:gem_obsidian"
      },
      {
        item: "cagedmobs:star_infused_netherite_block"
      }
    ],
    energy: {
      rfpertick: 5000,
      ticks: 1000
    },
    mix: {
      fluid: "create_enchantment_industry:hyper_experience",
      count: 1000
    },
    result: {
      item: "extendedcrafting:crystaltine_ingot",
      count: 1
    }
  });
  //#endregion
  //#region - The Ultimate Ingot
  e.custom({
    type: "ars_nouveau:enchanting_apparatus",
    count: 1,
    reagent: [{ item: "alexsmobs:rainbow_jelly" }],
    pedestalItems: [
      { item: { item: "kubejs:basical_apparatus" } },
      { item: { item: "kubejs:magical_apparatus" } },
      { item: { item: "kubejs:mechanical_apparatus" } },
      { item: { item: "kubejs:vital_apparatus" } }
    ],
    output: { item: "extendedcrafting:the_ultimate_ingot" },
    sourceCost: 2000
  });
  //#endregion
  //#region - Catalysts
  let potting_catalysts = (rod, output) => {
    e.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: "kubejs:black_iron_plate"
      },
      loops: 4,
      results: [
        {
          item: output
        }
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:black_iron_plate"
            },
            {
              item: rod
            }
          ],
          results: [
            {
              item: "kubejs:black_iron_plate"
            }
          ]
        }
      ],
      transitionalItem: {
        item: "kubejs:black_iron_plate"
      }
    });
  };
  potting_catalysts("kubejs:iron_rod", "extendedcrafting:basic_catalyst");
  potting_catalysts("kubejs:gold_rod", "extendedcrafting:advanced_catalyst");
  potting_catalysts("kubejs:diamond_rod", "extendedcrafting:elite_catalyst");
  potting_catalysts("kubejs:emerald_rod", "extendedcrafting:ultimate_catalyst");
  potting_catalysts("kubejs:enhanced_redstone_rod", "extendedcrafting:enhanced_redstone_catalyst");
  potting_catalysts("kubejs:crystaltine_rod", "extendedcrafting:crystaltine_catalyst");
  potting_catalysts("kubejs:the_ultimate_rod", "extendedcrafting:the_ultimate_catalyst");
  //#endregion
  //#region - Crafting Tables
  e.custom({
    type: "create:item_application",
    ingredients: [
      {
        tag: "forge:workbench"
      },
      {
        item: "extendedcrafting:basic_catalyst"
      }
    ],
    results: [
      {
        item: "extendedcrafting:basic_table"
      }
    ]
  });
  let potting_crafting_tables = (input, catalyst, output) => {
    e.custom({
      type: "create:item_application",
      ingredients: [
        {
          item: input
        },
        {
          item: catalyst
        }
      ],
      results: [
        {
          item: output
        }
      ]
    });
  };
  potting_crafting_tables("extendedcrafting:basic_table", "extendedcrafting:advanced_catalyst", "extendedcrafting:advanced_table");
  potting_crafting_tables("extendedcrafting:advanced_table", "extendedcrafting:elite_catalyst", "extendedcrafting:elite_table");
  potting_crafting_tables("extendedcrafting:elite_table", "extendedcrafting:ultimate_catalyst", "extendedcrafting:ultimate_table");
  //#endregion
  //#region - Charging
  let potting_charging = (input, output) => {
    e.custom({
      type: "createaddition:charging",
      input: {
        item: input
      },
      result: {
        item: output
      },
      energy: 10000,
      maxChargeRate: 1000
    });
  };
  potting_charging("extendedcrafting:redstone_ingot", "extendedcrafting:enhanced_redstone_ingot");
  //#endregion
  //#region - Crafting Core
  e.remove({ id: "extendedcrafting:crafting_core" });
  e.custom({
    type: "create:item_application",
    ingredients: [
      {
        item: "extendedcrafting:frame"
      },
      {
        item: "extendedcrafting:elite_catalyst"
      }
    ],
    results: [
      {
        item: "extendedcrafting:crafting_core"
      }
    ]
  });
  //#endregion
  //#region - Auto Ender Crafter
  e.remove({ id: "extendedcrafting:auto_ender_crafter" });
  e.shaped("extendedcrafting:auto_ender_crafter", ["ABA", "CDC", "ABA"], {
    A: "extendedcrafting:black_iron_ingot",
    B: "extendedcrafting:enhanced_redstone_catalyst",
    C: "extendedcrafting:crystaltine_catalyst",
    D: "extendedcrafting:ender_crafter"
  });
  //#endregion
  //#region - Black Iron
  e.remove({ id: "extendedcrafting:black_iron_ingot" });
  let potting_black_iron = (result, base) => {
    e.custom({
      type: "create:mixing",
      heatRequirement: "superheated",
      ingredients: [{ item: base }],
      results: [{ item: result }]
    });
  };
  potting_black_iron("extendedcrafting:black_iron_block", "minecraft:iron_block");
  potting_black_iron("extendedcrafting:black_iron_ingot", "minecraft:iron_ingot");
  potting_black_iron("extendedcrafting:black_iron_nugget", "minecraft:iron_nugget");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function extendedcrafting() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "extendedcrafting:advanced_component",
    "extendedcrafting:basic_component",
    "extendedcrafting:crystaltine_component",
    "extendedcrafting:elite_component",
    "extendedcrafting:ender_catalyst",
    "extendedcrafting:ender_component",
    "extendedcrafting:enhanced_ender_catalyst",
    "extendedcrafting:enhanced_ender_component",
    "extendedcrafting:enhanced_redstone_component",
    "extendedcrafting:flux_alternator",
    "extendedcrafting:flux_crafter",
    "extendedcrafting:flux_star_block",
    "extendedcrafting:flux_star",
    "extendedcrafting:luminessence_block",
    "extendedcrafting:luminessence",
    "extendedcrafting:redstone_catalyst",
    "extendedcrafting:redstone_component",
    "extendedcrafting:the_ultimate_component",
    "extendedcrafting:ultimate_component"
  ];
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
extendedcrafting();
//#endregion
