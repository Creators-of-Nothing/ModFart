//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
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
  //#endregion
  //#region - Crafting Tables
  let potting_crafting_tables = (element, output) => {
    e.shaped(output, ["AA", "AA"], {
      A: element
    })
  }
  potting_crafting_tables("#modfart/planks/spruce", "vct:spruce_crafting_table")
  potting_crafting_tables("#modfart/planks/birch", "vct:birch_crafting_table")
  potting_crafting_tables("#modfart/planks/jungle", "vct:jungle_crafting_table")
  potting_crafting_tables("#modfart/planks/acacia", "vct:acacia_crafting_table")
  potting_crafting_tables("#modfart/planks/dark_oak", "vct:dark_oak_crafting_table")
  potting_crafting_tables("#modfart/planks/mangrove", "vct:mangrove_crafting_table")
  potting_crafting_tables("#modfart/planks/bamboo", "vct:bamboo_crafting_table")
  potting_crafting_tables("#modfart/planks/cherry", "vct:cherry_crafting_table")
  potting_crafting_tables("#modfart/planks/crimson", "vct:crimson_crafting_table")
  potting_crafting_tables("#modfart/planks/warped", "vct:warped_crafting_table")
  //#endregion
})
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function vct() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    /vct:aeronos/,
    /vct:ap_twisted/,
    /vct:araucaria/,
    /vct:arcane_edelwood/,
    /vct:ash/,
    /vct:aspen/,
    /vct:aurum/,
    /vct:azule_azalea/,
    /vct:azure/,
    /vct:bloodshroom/,
    /vct:bm_ancient_oak/,
    /vct:bm_blighted_balsa/,
    /vct:bm_swamp_cypress/,
    /vct:bm_willow/,
    /vct:bright_azalea/,
    /vct:brown_mushroom/,
    /vct:ceiltrunk/,
    /vct:cherrywood/,
    /vct:chestnut/,
    /vct:congealed/,
    /vct:cypress/,
    /vct:dark_cherry/,
    /vct:driftwood/,
    /vct:ebony/,
    /vct:eco_azalea/,
    /vct:eco_coconut/,
    /vct:eco_flowering_azalea/,
    /vct:eco_walnut/,
    /vct:edelwood/,
    /vct:edified/,
    /vct:fairy_ring_mushroom/,
    /vct:fir/,
    /vct:fiss_azalea/,
    /vct:ft_cherry/,
    /vct:ft_citrus/,
    /vct:fungyss/,
    /vct:ge_cypress/,
    /vct:ge_muddy_oak/,
    /vct:gingerbread/,
    /vct:glacian/,
    /vct:glowshroom/,
    /vct:gourdrot/,
    /vct:greenheart/,
    /vct:grimwood/,
    /vct:heidiphyllum/,
    /vct:hexerei_mahogany/,
    /vct:hexerei_willow/,
    /vct:holly/,
    /vct:honey_fungus/,
    /vct:jaboticaba/,
    /vct:jacaranda/,
    /vct:kousa/,
    /vct:liriodendrites/,
    /vct:luzawood/,
    /vct:maple/,
    /vct:metasequoia/,
    /vct:morado/,
    /vct:mushroom/,
    /vct:netherwood/,
    /vct:petrified/,
    /vct:poise/,
    /vct:poisonous_mushroom/,
    /vct:pream/,
    /vct:protojuniperoxylon/,
    /vct:protopiceoxylon/,
    /vct:pyrowood/,
    /vct:quark_ancient/,
    /vct:quark_azalea/,
    /vct:quark_blossom/,
    /vct:ramboutan/,
    /vct:red_mushroom/,
    /vct:redbud/,
    /vct:river/,
    /vct:rosewood/,
    /vct:rotten_planks/,
    /vct:roze_azalea/,
    /vct:rue_baobab/,
    /vct:rue_blackwood/,
    /vct:rue_brimwood/,
    /vct:rue_cherry/,
    /vct:rue_cypress/,
    /vct:rue_dead/,
    /vct:rue_eucalyptus/,
    /vct:rue_joshua/,
    /vct:rue_larch/,
    /vct:rue_maple/,
    /vct:rue_mauve/,
    /vct:rue_palm/,
    /vct:rue_pine/,
    /vct:rue_redwood/,
    /vct:rue_willow/,
    /vct:runewood/,
    /vct:sg_netherwood/,
    /vct:skyroot/,
    /vct:soulwood/,
    /vct:stripped_bamboo/,
    /vct:strophar/,
    /vct:tecal_azalea/,
    /vct:titanium_azalea/,
    /vct:towerwood/,
    /vct:verdant/,
    /vct:walnut_azalea/,
    /vct:walnut/,
    /vct:willow/,
    /vct:wisteria/,
    /vct:yucca/,
    /vct:zamites/
  ]
  let hiding = [
    "vct:acacia_crafting_table_minecart",
    "vct:aeronos_crafting_table_minecart",
    "vct:aether_skyroot_crafting_table_minecart",
    "vct:archwood_crafting_table_minecart",
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
    "vct:timewood_crafting_table_minecart",
    "vct:transwood_crafting_table_minecart",
    "vct:twilight_mangrove_crafting_table_minecart",
    "vct:twilight_oak_crafting_table_minecart",
    "vct:twisted_crafting_table_minecart",
    "vct:warped_crafting_table_minecart",
    "vct:whistlecane_crafting_table_minecart",
    "vct:wigglewood_crafting_table_minecart"
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
vct()
//#endregion
