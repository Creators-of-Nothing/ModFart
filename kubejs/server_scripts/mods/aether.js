//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.add("candlelight:milk", "#aether:milk_bucket_crafting")
  e.remove("modfart/planks/other", "aether:skyroot_planks")
  e.add("aether:slider_damaging_items", /dna_sampler/)
})
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  e.remove([
    { id: "aether:skyroot_tripwire_hook" },
    { id: "aether:skyroot_grindstone" },
    { id: "aether:wood_zanite_vanilla_shield" },
    { id: "aether:skyroot_iron_vanilla_shield" },
    { id: "aether:skyroot_zanite_vanilla_shield" },
    { id: "aether:skyroot_crafting_table" },
    { id: "aether:skyroot_fletching_table" },
    { id: "aether:skyroot_barrel" },
    { id: "aether:skyroot_loom" },
    { id: "aether:skyroot_beehive" },
    { id: "aether:skyroot_cartography_table" },
    { id: "aether:skyroot_chest" },
    { id: "aether:skyroot_jukebox" },
    { id: "aether:skyroot_gravitite_jukebox" },
    { id: "aether:skyroot_smithing_table" },
    { id: "aether:skyroot_note_block" },
    { id: "aether:skyroot_piston" },
    { id: "aether:skyroot_grindstone_holystone_slab" },
    { id: "aether:skyroot_milk_bucket_cake" },
    { id: "aether:moa_egg_cake" },
    { id: "aether:skyroot_milk_bucket_moa_egg_cake" },
    { id: "ancient_aether:valkyrum" }
  ])
})
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function aether() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["aether:aether_portal_frame"]
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
aether()
//#endregion
