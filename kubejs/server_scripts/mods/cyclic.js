//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([{ id: "cyclic:netherite_ingot" }, { id: "cyclic:crafting/amethyst" }, { id: "cyclic:eye_teleport_rev" }, { id: "cyclic:dark_glass" }]);
  //#endregion
  //#region - Magma Anvil
  e.shaped("cyclic:anvil_magma", ["AAA", " B ", "CDC"], { A: "minecraft:magma_block", B: "cyclic:compressed_cobblestone", C: "minecraft:obsidian", D: "cyclic:fireball" });
  //#endregion
  //#region - Disenchanter
  e.shaped("cyclic:disenchanter", [" A ", "BCB", "DED"], {
    A: "cyclic:gem_obsidian",
    B: "kubejs:brass_plate",
    C: "minecraft:enchanting_table",
    D: "minecraft:crying_obsidian",
    E: "mob_grinding_utils:tank"
  });
  //#endregion
  //#region - Alchemical Veil
  e.remove({ id: "cyclic:charm_antipotion" });
  e.shaped("cyclic:charm_antipotion", ["AAA", "BCB", "ADA"], { A: "minecraft:gold_nugget", B: "minecraft:fermented_spider_eye", C: "minecraft:amethyst_shard", D: "minecraft:ender_pearl" });
  //#endregion
  //#region - Solidification Chamber
  e.shaped("cyclic:solidifier", ["ABA", "CDC", "AEA"], {
    A: "minecraft:quartz",
    B: "#forge:storage_blocks/lapis",
    C: "#forge:glass",
    D: "mob_grinding_utils:tank",
    E: "#forge:storage_blocks/redstone"
  });
  //#endregion
  //#region - Netherite Nugget to Ingot
  e.shaped("minecraft:netherite_ingot", ["AAA", "AAA", "AAA"], { A: "cyclic:netherite_nugget" });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function cyclic() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "cyclic:altar_destruction",
    "cyclic:apple_ender",
    "cyclic:battery_clay",
    "cyclic:battery_infinite",
    "cyclic:battery",
    "cyclic:beacon",
    "cyclic:biomass_bucket",
    "cyclic:biomass",
    "cyclic:build_scepter",
    "cyclic:cable_wrench",
    "cyclic:cask",
    "cyclic:charm_home",
    "cyclic:charm_world",
    "cyclic:chorus_spectral",
    "cyclic:collector_fluid",
    "cyclic:collector",
    "cyclic:computer_shape",
    "cyclic:conveyor",
    "cyclic:copper_axe",
    "cyclic:copper_chain",
    "cyclic:copper_hoe",
    "cyclic:copper_lantern",
    "cyclic:copper_nugget",
    "cyclic:copper_pickaxe",
    "cyclic:copper_pressure_plate",
    "cyclic:copper_shovel",
    "cyclic:copper_soul_lantern",
    "cyclic:copper_sword",
    "cyclic:crafter",
    "cyclic:crafting_bag",
    "cyclic:crafting_stick",
    "cyclic:crate_mini",
    "cyclic:crate",
    "cyclic:crusher",
    "cyclic:doorbell",
    "cyclic:elevation_wand",
    "cyclic:ender_bag",
    "cyclic:ender_book",
    "cyclic:ender_controller",
    "cyclic:ender_fishing",
    "cyclic:ender_item_shelf",
    "cyclic:ender_shelf",
    "cyclic:ender_torch",
    "cyclic:energy_pipe",
    "cyclic:entity_data",
    "cyclic:experience_pylon",
    "cyclic:eye_teleport",
    "cyclic:fan_slab",
    "cyclic:fan",
    "cyclic:fireball_dark",
    "cyclic:fireball",
    "cyclic:fisher",
    "cyclic:fluid_pipe",
    "cyclic:forester",
    "cyclic:generator_fluid",
    "cyclic:generator_food",
    "cyclic:generator_fuel",
    "cyclic:generator_item",
    "cyclic:generator_solar",
    "cyclic:gold_chain",
    "cyclic:heart_empty",
    "cyclic:heart",
    "cyclic:hopper_fluid",
    "cyclic:hopper_gold",
    "cyclic:hopper",
    "cyclic:item_infinite",
    "cyclic:item_pipe",
    "cyclic:laser_cannon",
    "cyclic:light_camo",
    "cyclic:lunchbox",
    "cyclic:magic_net",
    "cyclic:magnet_block",
    "cyclic:mattock_nether",
    "cyclic:mattock_stone",
    "cyclic:mattock",
    "cyclic:miner",
    "cyclic:mob_container",
    "cyclic:netherite_pressure_plate",
    "cyclic:no_soliciting",
    "cyclic:obsidian_pressure_plate",
    "cyclic:offset_scepter",
    "cyclic:packager",
    "cyclic:peace_candle",
    "cyclic:peat_baked",
    "cyclic:peat_farm",
    "cyclic:peat_fuel_enriched",
    "cyclic:peat_fuel",
    "cyclic:peat_unbaked",
    "cyclic:randomize_scepter",
    "cyclic:replace_scepter",
    "cyclic:rotator",
    "cyclic:scythe_brush",
    "cyclic:scythe_forage",
    "cyclic:scythe_harvest",
    "cyclic:scythe_leaves",
    "cyclic:shearing",
    "cyclic:sleeping_mat",
    "cyclic:soil",
    "cyclic:soundproofing_ghost",
    "cyclic:soundproofing",
    "cyclic:spark",
    "cyclic:spawn_inspector",
    "cyclic:spawner_seeker",
    "cyclic:spikes_curse",
    "cyclic:spikes_diamond",
    "cyclic:spikes_fire",
    "cyclic:spikes_iron",
    "cyclic:sponge_lava",
    "cyclic:sponge_milk",
    "cyclic:sprinkler",
    "cyclic:structure",
    "cyclic:tank",
    "cyclic:teleport_wand",
    "cyclic:teleport",
    "cyclic:terra_glass",
    "cyclic:terra_preta",
    "cyclic:tile_transporter_empty",
    "cyclic:tile_transporter",
    "cyclic:torch_launcher",
    "cyclic:trash",
    "cyclic:uncrafter",
    "cyclic:wand_missile",
    "cyclic:water_candle",
    "cyclic:wireless_energy",
    "cyclic:wireless_fluid",
    "cyclic:wireless_item",
    "cyclic:wireless_receiver",
    "cyclic:wireless_transmitter",
    "cyclic:workbench",
    "cyclic:storage_bag"
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
cyclic();
//#endregion
