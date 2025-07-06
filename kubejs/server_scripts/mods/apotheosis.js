//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([
    { id: "apotheosis:scrap_tome" },
    { id: "apotheotic_additions:salvaging/brush" },
    { id: "apotheotic_additions:salvaging/bundle" },
    { id: "apotheotic_additions:salvaging/simple_reforging_table" },
    { id: "apotheotic_additions:salvaging/salvaging_table" },
    { id: "apotheotic_additions:salvaging/saddle" },
    { id: "apotheosis:salvaging/golden_horse_armor" },
    { id: "apotheotic_additions:salvaging/totem_of_undying" },
    { id: "apotheotic_additions:salvaging/netherite_ingot" },
    { id: "apotheotic_additions:salvaging/compass" },
    { id: "apotheosis:salvaging/diamond_horse_armor" },
    { id: "apotheosis:salvaging/iron_horse_armor" },
    { id: "apotheotic_additions:salvaging/clock" },
    { id: "apotheosis:salvaging/leather_horse_armor" }
  ]);
  //#endregion
  //#region - Spawner Modifiers
  e.remove([{ id: "apotheosis:spawner/ignore_conditions" }, { id: "apotheosis:spawner/ignore_conditions_inverted" }]);
  e.custom({
    type: "apotheosis:spawner_modifier",
    conditions: [
      {
        type: "apotheosis:module",
        module: "spawner"
      }
    ],
    mainhand: {
      item: "minecraft:dragon_head"
    },
    stat_changes: [
      {
        id: "ignore_conditions",
        value: true
      }
    ]
  });
  e.custom({
    type: "apotheosis:spawner_modifier",
    conditions: [
      {
        type: "apotheosis:module",
        module: "spawner"
      }
    ],
    mainhand: {
      item: "minecraft:dragon_head"
    },
    offhand: {
      item: "minecraft:quartz"
    },
    consumes_offhand: false,
    stat_changes: [
      {
        id: "ignore_conditions",
        value: false
      }
    ]
  });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function apotheosis() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["apotheosis:boss_summoner", "apotheosis:extraction_tome", "apotheosis:improved_scrap_tome", "apotheosis:scrap_tome"];
  let hiding = ["apotheosis:gem"];
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
apotheosis();
//#endregion
