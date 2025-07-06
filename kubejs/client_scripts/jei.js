//#region - Hiding items/fluids in JEI
JEIEvents.hideItems(e => {
  e.hide("#forge:hiding");
});
JEIEvents.hideFluids(e => {
  e.hide("#forge:hiding");
});
//#endregion

//#region - Showing items in JEI
JEIEvents.addItems(e => {
  e.add([
    // Apotheosis
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/ballast"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/brawlers"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/breach"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/combatant"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/guardian"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/lightning"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/lunar"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/samurai"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/slipstream"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/solar"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/splendor"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/tyrannical"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/warlord"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:overworld/earth"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:overworld/royalty"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:the_end/endersurge"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:the_end/mageslayer"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:the_nether/blood_lord"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:the_nether/inferno"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:twilight/forest"}'),
    Item.of("apotheosis:gem", '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:twilight/queen"}'),
    // Sophisticated Backpack
    "sophisticatedbackpacks:backpack",
    // Sophisticated Storage
    Item.of("sophisticatedstorage:gold_chest", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:diamond_chest", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:netherite_chest", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:barrel", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:iron_barrel", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:gold_barrel", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:diamond_barrel", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:netherite_barrel", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_barrel_1", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_iron_barrel_1", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_gold_barrel_1", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_diamond_barrel_1", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_netherite_barrel_1", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_barrel_2", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_iron_barrel_2", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_gold_barrel_2", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_diamond_barrel_2", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_netherite_barrel_2", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_barrel_3", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_iron_barrel_3", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_gold_barrel_3", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_diamond_barrel_3", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_netherite_barrel_3", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_barrel_4", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_iron_barrel_4", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_gold_barrel_4", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_diamond_barrel_4", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:limited_netherite_barrel_4", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:chest", '{woodType:"oak"}'),
    Item.of("sophisticatedstorage:iron_chest", '{woodType:"oak"}'),
    "sophisticatedstorage:shulker_box",
    "sophisticatedstorage:iron_shulker_box",
    "sophisticatedstorage:gold_shulker_box",
    "sophisticatedstorage:diamond_shulker_box",
    "sophisticatedstorage:netherite_shulker_box",
    // Others
    Item.of("minecraft:tipped_arrow", '{Potion:"minecraft:poison"}'),
    "ftbquests:book",
    "minecraft:oak_chest_boat"
  ]);
});
//#endregion

//#region - Tooltips
ItemEvents.tooltip(e => {
  // Iron Furnaces
  e.add("ironfurnaces:copper_furnace", "§216 RF/t");
  e.add("ironfurnaces:silver_furnace", "§232 RF/t");
  e.add("ironfurnaces:iron_furnace", "§264 RF/t");
  e.add("ironfurnaces:gold_furnace", "§2128 RF/t");
  e.add("ironfurnaces:diamond_furnace", "§2256 RF/t");
  e.add("ironfurnaces:obsidian_furnace", "§2512 RF/t");
  e.add("ironfurnaces:emerald_furnace", "§21024 RF/t");
  e.add("ironfurnaces:netherite_furnace", "§22048 RF/t");
  e.add("ironfurnaces:million_furnace", "§24096 RF/t");

  // Solar Panels
  e.add("mekanismgenerators:solar_generator", "§218.98 RF/t");
  e.add("mekanismgenerators:advanced_solar_generator", "§2113.83 RF/t");
  e.add("solarpanels:advanced_solar_panel", "§256.40 RF/t");
  e.add("solarpanels:hybrid_solar_panel", "§2169.20 RF/t");
  e.add("solarpanels:ultimate_hybrid_solar_panel", "§2507.60 RF/t");
  e.add("solarpanels:quantum_solar_panel", "§21.52k RF/t");
  e.add("solarpanels:spectral_solar_panel", "§24.56k RF/t");
  e.add("solarpanels:singular_solar_panel", "§213.70k RF/t");
  e.add("solarpanels:light_absorbing_solar_panel", "§241.11k RF/t");
  e.add("solarpanels:photonic_solar_panel", "§2123.34k RF/t");
  e.add("solarpanels:creative_solar_panel", "§23.76M RF/t");

  // Rupees
  e.add("mastersword:green_rupee", "1 Rupee");
  e.add("mastersword:blue_rupee", "5 Rupees");
  e.add("mastersword:red_rupee", "20 Rupees");
  e.add("mastersword:purple_rupee", "50 Rupees");
  e.add("mastersword:silver_rupee", "100 Rupees");
  e.add("mastersword:gold_rupee", "300 Rupees");
});
//#endregion

//#region - Informations
JEIEvents.information(e => {
  e.addItem("#forge:modfart/spawn_egg", ["The capturing enchantment gives monsters a chance to drop their spawn egg.", " ", "Drop Rate: 0.4% per level"]);
});
//#endregion
