//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove({ id: "rftoolsbase:dimensionalshard" });
  //#endregion
  //#region - Controller
  e.replaceInput({ id: "xnet:controller" }, "rftoolsbase:machine_frame", "rftoolsbase:dimensionalshard");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function rftoolsbase() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "rftoolsbase:crafting_card",
    "rftoolsbase:filter_module",
    "rftoolsbase:information_screen",
    "rftoolsbase:machine_infuser",
    "rftoolsbase:tablet",
    "rftoolsbase:smartwrench",
    "rftoolsbase:smartwrench_select",
    "rftoolsbase:infused_diamond",
    "rftoolsbase:infused_enderpearl",
    "rftoolsbase:machine_base",
    "xnet:netcable_routing",
    "xnet:antenna",
    "xnet:antenna_base",
    "xnet:antenna_dish",
    "xnet:redstone_proxy",
    "xnet:redstone_proxy_upd",
    "xnet:wireless_router",
    "xnet:router",
    "xnet:connector_routing",
    "xnet:advanced_connector_routing",
    "rftoolsbase:machine_frame"
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
rftoolsbase();
//#endregion
