//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.add("forge:modfart/infinity_upgrade", /sophisticated.*:survival_infinity_upgrade/);
  e.remove("handcrafted:chests", "sophisticatedstorage:chest");
  e.remove("c:chests", "sophisticatedstorage:chest");
  e.remove("forge:chests/wooden", "sophisticatedstorage:chest");
  e.remove("balm:wooden_chests", "sophisticatedstorage:chest");
  e.remove("c:wooden_barrels", "sophisticatedstorage:barrel");
  e.remove("forge:barrels/wooden", "sophisticatedstorage:barrel");
  //#region - Planks & Wooden Slabs
  const planks = e.get("minecraft:planks").getObjectIds();
  const blacklist_planks = Ingredient.of([/.*oak.*/, /.*spruce.*/, /.*birch.*/, /.*jungle.*/, /.*acacia.*/, /.*dark_oak.*/, /.*mangrove.*/, /.*cherry.*/, /.*bamboo.*/, /.*crimson.*/, /.*warped.*/]);
  planks.forEach(plank => {
    if (!blacklist_planks.test(plank)) e.add("sophisticatedcore:planks", plank);
  });
  const wooden_slabs = e.get("minecraft:wooden_slabs").getObjectIds();
  const blacklist_wooden_slabs = Ingredient.of([
    /.*oak.*/,
    /.*spruce.*/,
    /.*birch.*/,
    /.*jungle.*/,
    /.*acacia.*/,
    /.*dark_oak.*/,
    /.*mangrove.*/,
    /.*cherry.*/,
    /.*bamboo.*/,
    /.*crimson.*/,
    /.*warped.*/
  ]);
  wooden_slabs.forEach(wooden_slabs => {
    if (!blacklist_wooden_slabs.test(wooden_slabs)) e.add("sophisticatedcore:wooden_slabs", wooden_slabs);
  });
  //#endregion
});
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Deleted Crafts
  e.remove([{ id: /sophisticatedbackpacks:.*upgrade_from.*_smelting_upgrade/ }]);
  //#endregion
  //#region - Stacks and Infinity Upgrade/Downgrade
  e.remove({ id: /sophisticated.*:stack_.*grade_/ });
  let potting_stack_from_element = (output, input, element) => {
    e.shaped(output, ["BBB", "BAB", "BBB"], {
      A: input,
      B: element
    });
  };
  potting_stack_from_element("sophisticatedbackpacks:stack_downgrade_tier_1", "sophisticatedbackpacks:upgrade_base", "minecraft:flint");
  potting_stack_from_element("sophisticatedbackpacks:stack_downgrade_tier_2", "sophisticatedbackpacks:stack_downgrade_tier_1", "minecraft:flint");
  potting_stack_from_element("sophisticatedbackpacks:stack_downgrade_tier_3", "sophisticatedbackpacks:stack_downgrade_tier_2", "minecraft:flint");
  potting_stack_from_element("sophisticatedbackpacks:stack_upgrade_tier_1", "sophisticatedbackpacks:upgrade_base", "minecraft:iron_ingot");
  potting_stack_from_element("sophisticatedbackpacks:stack_upgrade_tier_2", "sophisticatedbackpacks:stack_upgrade_tier_1", "minecraft:gold_ingot");
  potting_stack_from_element("sophisticatedbackpacks:stack_upgrade_tier_3", "sophisticatedbackpacks:stack_upgrade_tier_2", "minecraft:diamond");
  potting_stack_from_element("sophisticatedbackpacks:stack_upgrade_tier_4", "sophisticatedbackpacks:stack_upgrade_tier_3", "minecraft:netherite_ingot");
  potting_stack_from_element("sophisticatedbackpacks:survival_infinity_upgrade", "sophisticatedbackpacks:upgrade_base", "minecraft:bedrock");
  potting_stack_from_element("sophisticatedstorage:stack_downgrade_tier_1", "sophisticatedstorage:upgrade_base", "minecraft:flint");
  potting_stack_from_element("sophisticatedstorage:stack_downgrade_tier_2", "sophisticatedstorage:stack_downgrade_tier_1", "minecraft:flint");
  potting_stack_from_element("sophisticatedstorage:stack_downgrade_tier_3", "sophisticatedstorage:stack_downgrade_tier_2", "minecraft:flint");
  potting_stack_from_element("sophisticatedstorage:stack_upgrade_tier_1", "sophisticatedstorage:upgrade_base", "minecraft:iron_ingot");
  potting_stack_from_element("sophisticatedstorage:stack_upgrade_tier_2", "sophisticatedstorage:stack_upgrade_tier_1", "minecraft:gold_ingot");
  potting_stack_from_element("sophisticatedstorage:stack_upgrade_tier_3", "sophisticatedstorage:stack_upgrade_tier_2", "minecraft:diamond");
  potting_stack_from_element("sophisticatedstorage:stack_upgrade_tier_4", "sophisticatedstorage:stack_upgrade_tier_3", "minecraft:netherite_ingot");
  potting_stack_from_element("sophisticatedstorage:survival_infinity_upgrade", "sophisticatedstorage:upgrade_base", "minecraft:bedrock");
  let potting_stack_from_plates = (output, input, plate) => {
    e.shaped(output, [" B ", "BAB", " B "], {
      A: input,
      B: plate
    });
    e.custom({
      type: "create:deploying",
      ingredients: [
        {
          item: input
        },
        {
          item: plate
        }
      ],
      results: [
        {
          item: output
        }
      ]
    });
  };
  potting_stack_from_plates("sophisticatedbackpacks:stack_downgrade_tier_1", "sophisticatedbackpacks:upgrade_base", "kubejs:flint_plate");
  potting_stack_from_plates("sophisticatedbackpacks:stack_downgrade_tier_2", "sophisticatedbackpacks:stack_downgrade_tier_1", "kubejs:flint_plate");
  potting_stack_from_plates("sophisticatedbackpacks:stack_downgrade_tier_3", "sophisticatedbackpacks:stack_downgrade_tier_2", "kubejs:flint_plate");
  potting_stack_from_plates("sophisticatedbackpacks:stack_upgrade_tier_1", "sophisticatedbackpacks:upgrade_base", "kubejs:iron_plate");
  potting_stack_from_plates("sophisticatedbackpacks:stack_upgrade_tier_2", "sophisticatedbackpacks:stack_upgrade_tier_1", "kubejs:gold_plate");
  potting_stack_from_plates("sophisticatedbackpacks:stack_upgrade_tier_3", "sophisticatedbackpacks:stack_upgrade_tier_2", "kubejs:diamond_plate");
  potting_stack_from_plates("sophisticatedbackpacks:stack_upgrade_tier_4", "sophisticatedbackpacks:stack_upgrade_tier_3", "kubejs:netherite_plate");
  potting_stack_from_plates("sophisticatedbackpacks:survival_infinity_upgrade", "sophisticatedbackpacks:upgrade_base", "kubejs:bedrock_plate");
  potting_stack_from_plates("sophisticatedstorage:stack_downgrade_tier_1", "sophisticatedstorage:upgrade_base", "kubejs:flint_plate");
  potting_stack_from_plates("sophisticatedstorage:stack_downgrade_tier_2", "sophisticatedstorage:stack_downgrade_tier_1", "kubejs:flint_plate");
  potting_stack_from_plates("sophisticatedstorage:stack_downgrade_tier_3", "sophisticatedstorage:stack_downgrade_tier_2", "kubejs:flint_plate");
  potting_stack_from_plates("sophisticatedstorage:stack_upgrade_tier_1", "sophisticatedstorage:upgrade_base", "kubejs:iron_plate");
  potting_stack_from_plates("sophisticatedstorage:stack_upgrade_tier_2", "sophisticatedstorage:stack_upgrade_tier_1", "kubejs:gold_plate");
  potting_stack_from_plates("sophisticatedstorage:stack_upgrade_tier_3", "sophisticatedstorage:stack_upgrade_tier_2", "kubejs:diamond_plate");
  potting_stack_from_plates("sophisticatedstorage:stack_upgrade_tier_4", "sophisticatedstorage:stack_upgrade_tier_3", "kubejs:netherite_plate");
  potting_stack_from_plates("sophisticatedstorage:survival_infinity_upgrade", "sophisticatedstorage:upgrade_base", "kubejs:bedrock_plate");
  //#endregion
  //#region - Pump Upgrades
  e.shaped("sophisticatedstorage:pump_upgrade", ["ABA", "CDC", "EEE"], {
    A: "#forge:glass",
    B: "minecraft:bucket",
    C: "minecraft:piston",
    D: "sophisticatedstorage:upgrade_base",
    E: "minecraft:sticky_piston"
  });
  e.shaped("sophisticatedstorage:advanced_pump_upgrade", ["ABA", "CDC", "EEE"], {
    A: "minecraft:diamond",
    B: "minecraft:dispenser",
    C: "minecraft:gold_ingot",
    D: "sophisticatedstorage:pump_upgrade",
    E: "minecraft:redstone"
  });
  e.shaped("sophisticatedstorage:xp_pump_upgrade", ["ABA", "CDC", "ABA"], {
    A: "minecraft:redstone",
    B: "minecraft:ender_eye",
    C: "minecraft:experience_bottle",
    D: "sophisticatedstorage:advanced_pump_upgrade"
  });
  //#endregion
  //#region - Conversion Between Storage and Backpacks Upgrades
  e.remove([{ id: /sophisticatedstorage:.*_upgrade.*from_/ }, { id: /sophisticatedstorage:.*_downgrade.*from_/ }]);
  let potting_conversion = (backpack, storage) => {
    e.shapeless(backpack, storage);
    e.shapeless(storage, backpack);
  };
  potting_conversion("sophisticatedbackpacks:pickup_upgrade", "sophisticatedstorage:pickup_upgrade");
  potting_conversion("sophisticatedbackpacks:advanced_pickup_upgrade", "sophisticatedstorage:advanced_pickup_upgrade");
  potting_conversion("sophisticatedbackpacks:filter_upgrade", "sophisticatedstorage:filter_upgrade");
  potting_conversion("sophisticatedbackpacks:advanced_filter_upgrade", "sophisticatedstorage:advanced_filter_upgrade");
  potting_conversion("sophisticatedbackpacks:magnet_upgrade", "sophisticatedstorage:magnet_upgrade");
  potting_conversion("sophisticatedbackpacks:advanced_magnet_upgrade", "sophisticatedstorage:advanced_magnet_upgrade");
  potting_conversion("sophisticatedbackpacks:feeding_upgrade", "sophisticatedstorage:feeding_upgrade");
  potting_conversion("sophisticatedbackpacks:advanced_feeding_upgrade", "sophisticatedstorage:advanced_feeding_upgrade");
  potting_conversion("sophisticatedbackpacks:compacting_upgrade", "sophisticatedstorage:compacting_upgrade");
  potting_conversion("sophisticatedbackpacks:advanced_compacting_upgrade", "sophisticatedstorage:advanced_compacting_upgrade");
  potting_conversion("sophisticatedbackpacks:void_upgrade", "sophisticatedstorage:void_upgrade");
  potting_conversion("sophisticatedbackpacks:advanced_void_upgrade", "sophisticatedstorage:advanced_void_upgrade");
  potting_conversion("sophisticatedbackpacks:smelting_upgrade", "sophisticatedstorage:smelting_upgrade");
  potting_conversion("sophisticatedbackpacks:auto_smelting_upgrade", "sophisticatedstorage:auto_smelting_upgrade");
  potting_conversion("sophisticatedbackpacks:smoking_upgrade", "sophisticatedstorage:smoking_upgrade");
  potting_conversion("sophisticatedbackpacks:auto_smoking_upgrade", "sophisticatedstorage:auto_smoking_upgrade");
  potting_conversion("sophisticatedbackpacks:blasting_upgrade", "sophisticatedstorage:blasting_upgrade");
  potting_conversion("sophisticatedbackpacks:auto_blasting_upgrade", "sophisticatedstorage:auto_blasting_upgrade");
  potting_conversion("sophisticatedbackpacks:crafting_upgrade", "sophisticatedstorage:crafting_upgrade");
  potting_conversion("sophisticatedbackpacks:stonecutter_upgrade", "sophisticatedstorage:stonecutter_upgrade");
  potting_conversion("sophisticatedbackpacks:stack_upgrade_tier_1", "sophisticatedstorage:stack_upgrade_tier_1");
  potting_conversion("sophisticatedbackpacks:stack_upgrade_tier_2", "sophisticatedstorage:stack_upgrade_tier_2");
  potting_conversion("sophisticatedbackpacks:stack_upgrade_tier_3", "sophisticatedstorage:stack_upgrade_tier_3");
  potting_conversion("sophisticatedbackpacks:stack_upgrade_tier_4", "sophisticatedstorage:stack_upgrade_tier_4");
  potting_conversion("sophisticatedbackpacks:jukebox_upgrade", "sophisticatedstorage:jukebox_upgrade");
  potting_conversion("sophisticatedbackpacks:pump_upgrade", "sophisticatedstorage:pump_upgrade");
  potting_conversion("sophisticatedbackpacks:advanced_pump_upgrade", "sophisticatedstorage:advanced_pump_upgrade");
  potting_conversion("sophisticatedbackpacks:xp_pump_upgrade", "sophisticatedstorage:xp_pump_upgrade");
  potting_conversion("sophisticatedbackpacks:chipped/botanist_workbench_upgrade", "sophisticatedstorage:chipped/botanist_workbench_upgrade");
  potting_conversion("sophisticatedbackpacks:chipped/glassblower_upgrade", "sophisticatedstorage:chipped/glassblower_upgrade");
  potting_conversion("sophisticatedbackpacks:chipped/carpenters_table_upgrade", "sophisticatedstorage:chipped/carpenters_table_upgrade");
  potting_conversion("sophisticatedbackpacks:chipped/loom_table_upgrade", "sophisticatedstorage:chipped/loom_table_upgrade");
  potting_conversion("sophisticatedbackpacks:chipped/mason_table_upgrade", "sophisticatedstorage:chipped/mason_table_upgrade");
  potting_conversion("sophisticatedbackpacks:chipped/alchemy_bench_upgrade", "sophisticatedstorage:chipped/alchemy_bench_upgrade");
  potting_conversion("sophisticatedbackpacks:chipped/tinkering_table_upgrade", "sophisticatedstorage:chipped/tinkering_table_upgrade");
  potting_conversion("sophisticatedbackpacks:survival_infinity_upgrade", "sophisticatedstorage:survival_infinity_upgrade");
  potting_conversion("sophisticatedbackpacks:stack_downgrade_tier_1", "sophisticatedstorage:stack_downgrade_tier_1");
  potting_conversion("sophisticatedbackpacks:stack_downgrade_tier_2", "sophisticatedstorage:stack_downgrade_tier_2");
  potting_conversion("sophisticatedbackpacks:stack_downgrade_tier_3", "sophisticatedstorage:stack_downgrade_tier_3");
  potting_conversion("sophisticatedbackpacks:alchemy_upgrade", "sophisticatedstorage:alchemy_upgrade");
  potting_conversion("sophisticatedbackpacks:advanced_alchemy_upgrade", "sophisticatedstorage:advanced_alchemy_upgrade");
  //#endregion
  //#region - Generics Storages
  e.remove({ id: /sophisticatedstorage:generic_/ });
  let potting_generic = (plank, wooden_slab) => {
    e.shaped(Item.of("sophisticatedstorage:barrel", '{woodType:"spruce"}'), ["ABA", "ACA", "ABA"], { A: plank, B: wooden_slab, C: "minecraft:redstone_torch" });
    e.shaped(Item.of("sophisticatedstorage:chest", '{woodType:"oak"}'), ["AAA", "ABA", "AAA"], { A: plank, B: "minecraft:redstone_torch" });
    e.shaped(Item.of("sophisticatedstorage:limited_barrel_1", '{woodType:"spruce"}'), ["ABA", "ACA", "AAA"], { A: plank, B: wooden_slab, C: "minecraft:redstone_torch" });
    e.shaped(Item.of("sophisticatedstorage:limited_barrel_2", '{woodType:"spruce"}'), ["AAA", "BCB", "AAA"], { A: plank, B: wooden_slab, C: "minecraft:redstone_torch" });
    e.shaped(Item.of("sophisticatedstorage:limited_barrel_3", '{woodType:"spruce"}'), ["ABA", "ACA", "BAB"], { A: plank, B: wooden_slab, C: "minecraft:redstone_torch" });
    e.shaped(Item.of("sophisticatedstorage:limited_barrel_4", '{woodType:"spruce"}'), ["ABA", "BCB", "ABA"], { A: plank, B: wooden_slab, C: "minecraft:redstone_torch" });
  };
  potting_generic("#sophisticatedcore:planks", "#sophisticatedcore:wooden_slabs");
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function sophisticated() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = ["sophisticatedstorage:stack_upgrade_omega_tier", "sophisticatedstorage:infinity_upgrade", "sophisticatedbackpacks:stack_upgrade_omega_tier", "sophisticatedbackpacks:infinity_upgrade"];
  let hiding = [
    /sophisticatedbackpacks:backpack/,
    /sophisticatedstorage:barrel/,
    /sophisticatedstorage:chest/,
    /sophisticatedstorage:diamond_barrel/,
    /sophisticatedstorage:diamond_chest/,
    /sophisticatedstorage:diamond_shulker_box/,
    /sophisticatedstorage:gold_barrel/,
    /sophisticatedstorage:gold_chest/,
    /sophisticatedstorage:gold_shulker_box/,
    /sophisticatedstorage:iron_barrel/,
    /sophisticatedstorage:iron_chest/,
    /sophisticatedstorage:iron_shulker_box/,
    /sophisticatedstorage:limited_barrel_1/,
    /sophisticatedstorage:limited_barrel_2/,
    /sophisticatedstorage:limited_barrel_3/,
    /sophisticatedstorage:limited_barrel_4/,
    /sophisticatedstorage:limited_diamond_barrel_1/,
    /sophisticatedstorage:limited_diamond_barrel_2/,
    /sophisticatedstorage:limited_diamond_barrel_3/,
    /sophisticatedstorage:limited_diamond_barrel_4/,
    /sophisticatedstorage:limited_gold_barrel_1/,
    /sophisticatedstorage:limited_gold_barrel_2/,
    /sophisticatedstorage:limited_gold_barrel_3/,
    /sophisticatedstorage:limited_gold_barrel_4/,
    /sophisticatedstorage:limited_iron_barrel_1/,
    /sophisticatedstorage:limited_iron_barrel_2/,
    /sophisticatedstorage:limited_iron_barrel_3/,
    /sophisticatedstorage:limited_iron_barrel_4/,
    /sophisticatedstorage:limited_netherite_barrel_1/,
    /sophisticatedstorage:limited_netherite_barrel_2/,
    /sophisticatedstorage:limited_netherite_barrel_3/,
    /sophisticatedstorage:limited_netherite_barrel_4/,
    /sophisticatedstorage:netherite_barrel/,
    /sophisticatedstorage:netherite_chest/,
    /sophisticatedstorage:netherite_shulker_box/,
    /sophisticatedstorage:shulker_box/
  ];
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
sophisticated();
//#endregion
