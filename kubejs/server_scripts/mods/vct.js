//#region - Définition/Suppression/Masquage d'éléments dans JEI
function vct() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "vct:acacia_crafting_table_minecart",
    "vct:aether_skyroot_crafting_table_minecart",
    "vct:archwood_crafting_table_minecart",
    "vct:ash_crafting_table",
    "vct:bamboo_crafting_table_minecart",
    "vct:birch_crafting_table_minecart",
    "vct:bop_dead_crafting_table_minecart",
    "vct:bop_fir_crafting_table_minecart",
    "vct:bop_hellbark_crafting_table_minecart",
    "vct:bop_jacaranda_crafting_table_minecart",
    "vct:bop_magic_crafting_table_minecart",
    "vct:bop_mahogany_crafting_table_minecart",
    "vct:bop_palm_crafting_table_minecart",
    "vct:bop_redwood_crafting_table_minecart",
    "vct:bop_umbran_crafting_table_minecart",
    "vct:bop_willow_crafting_table_minecart",
    "vct:canopy_crafting_table_minecart",
    "vct:cherry_crafting_table_minecart",
    "vct:congealed_crafting_table_minecart",
    "vct:congealed_crafting_table",
    "vct:crimson_crafting_table_minecart",
    "vct:dark_oak_crafting_table_minecart",
    "vct:darkwood_crafting_table_minecart",
    "vct:echo_crafting_table_minecart",
    "vct:grongle_crafting_table_minecart",
    "vct:jungle_crafting_table_minecart",
    "vct:mangrove_crafting_table_minecart",
    "vct:minewood_crafting_table_minecart",
    "vct:oak_crafting_table_minecart",
    "vct:penumbra_crafting_table_minecart",
    "vct:smogstem_crafting_table_minecart",
    "vct:sortingwood_crafting_table_minecart",
    "vct:soulblight_crafting_table_minecart",
    "vct:spruce_crafting_table_minecart",
    "vct:stripped_bamboo_crafting_table_minecart",
    "vct:stripped_bamboo_crafting_table",
    "vct:timewood_crafting_table_minecart",
    "vct:transwood_crafting_table_minecart",
    "vct:twilight_mangrove_crafting_table_minecart",
    "vct:twilight_oak_crafting_table_minecart",
    "vct:twisted_crafting_table_minecart",
    "vct:verdant_crafting_table_minecart",
    "vct:verdant_crafting_table",
    "vct:warped_crafting_table_minecart",
    "vct:whistlecane_crafting_table_minecart",
    "vct:wigglewood_crafting_table_minecart"
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
vct()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  e.remove([
    { id: "vct:spruce_crafting_table" },
    { id: "vct:birch_crafting_table" },
    { id: "vct:jungle_crafting_table" },
    { id: "vct:acacia_crafting_table" },
    { id: "vct:dark_oak_crafting_table" },
    { id: "vct:mangrove_crafting_table" },
    { id: "vct:cherry_crafting_table" },
    { id: "vct:bamboo_crafting_table" },
    { id: "vct:crimson_crafting_table" },
    { id: "vct:warped_crafting_table" }
  ])
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
