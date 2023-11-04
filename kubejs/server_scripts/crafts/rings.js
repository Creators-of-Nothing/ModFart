// Rings
ServerEvents.recipes(e => {
    let potting = (output, e1, e2, e3, e4, e5, e6, e7, e8) => {
        e.custom({
            "type": "ars_nouveau:enchanting_apparatus",
            "output": {
                "item": output
            },
            "pedestalItems": [
                {
                    "item": e1
                },
                {
                    "item": e2
                },
                {
                    "item": e3
                },
                {
                    "item": e4
                },
                {
                    "item": e5
                },
                {
                    "item": e6
                },
                {
                    "item": e7
                },
                {
                    "item": e8
                }
            ],
            "reagent": [
                {
                    "item": "ars_nouveau:ring_of_potential"
                }
            ],
            "sourceCost": 10000
        })
    }
    potting('ringsofascension:ring_dolphin', 'beachparty:beach_hat', 'moa_decor_toys:guardian', 'beachparty:bikini', 'beachparty:rubber_ring_blue', 'beachparty:swim_wings', 'beachparty:rubber_ring_pink', 'alexsmobs:crocodile_chestplate', 'moa_decor_toys:delfin')
    potting('ringsofascension:ring_experience', 'vinery:cristel_wine', 'sophisticatedbackpacks:xp_pump_upgrade', 'ars_nouveau:greater_experience_gem', 'mob_grinding_utils:solid_xp_block', 'kubejs:experience_plate', 'create:experience_block', 'create_enchantment_industry:experience_rotor', 'sophisticatedstorage:xp_pump_upgrade')
    potting('ringsofascension:ring_fire_resistance', 'twilightdelight:tear_drink', 'additional_lights:soul_fire_for_standing_torch_s', 'mob_grinding_utils:saw_upgrade_fire', 'mcwlights:lava_lamp', 'minecraft:fire_charge', 'alexsmobs:lava_bottle', 'ars_nouveau:fire_essence', 'additional_lights:fire_for_standing_torch_s')
    potting('ringsofascension:ring_flight', 'alexsmobs:void_worm_eye', 'create_jetpack:jetpack', 'deeperdarker:soul_elytra', 'the_bumblezone:pollen_puff', 'eidolon:raven_cloak', 'ars_nouveau:ritual_flight', 'lolenderite:enderite_plated_elytra', 'mekanism:jetpack_armored')
    potting('ringsofascension:ring_growth', 'vinery:straw_hat', 'pamhc2foodcore:freshwateritem', 'vinery:vinemaker_leggings', 'ars_nouveau:ritual_overgrowth', 'vinery:vinemaker_boots', 'meadow:watering_can', 'vinery:vinemaker_apron', 'arcanelanterns:life_lantern')
    potting('ringsofascension:ring_health', 'paraglider:heart_container', 'minecraft:heart_of_the_sea', 'arcanelanterns:love_lantern', 'twilightforest:charm_of_life_2', 'deeperdarker:heart_of_the_deep', 'alexsmobs:soul_heart', 'paraglider:anti_vessel', 'candlelight:hearth')
    potting('ringsofascension:ring_hungerless', 'candlelight:cooking_hat', 'sophisticatedbackpacks:advanced_feeding_upgrade', 'candlelight:chefs_pants', 'pamhc2foodextended:spaghettidinneritem', 'candlelight:chefs_boots', 'pamhc2foodextended:cookoutmealitem', 'candlelight:chefs_jacket', 'sophisticatedstorage:advanced_feeding_upgrade')
    potting('ringsofascension:ring_invisibility', 'ars_nouveau:glyph_invisibility', 'skinnedlanterns:ghost_soul_lantern_block', 'useless_sword:vex_sword', 'nourished_nether:ectoplasm', 'aether:invisibility_cloak', 'useless_sword:vex_ectoplasm', 'moa_decor_holidays:fantasma', 'skinnedlanterns:ghost_lantern_block')
    potting('ringsofascension:ring_jump_boost', 'useless_sword:slime_sword', 'minecraft:rabbit_foot', 'create_things_and_misc:sticky_launcher', 'alexsmobs:flying_fish_boots', 'farmersdelight:horse_feed', 'create_things_and_misc:sticky_boots_boots', 'create_things_and_misc:brass_sticky_launcher', 'vinery:clark_wine')
    potting('ringsofascension:ring_knockback_resistance', 'enlightened_end:adamantite_armor_helmet', 'suppsquared:heavy_key', 'enlightened_end:adamantite_armor_leggings', 'moa_decor_toys:golemdehierro', 'enlightened_end:adamantite_armor_boots', 'arcanelanterns:warding_lantern', 'enlightened_end:adamantite_armor_chestplate', 'ars_nouveau:glyph_gust')
    potting('ringsofascension:ring_lava_sponge', 'moa_decor_bath:esponjadebano', 'minecraft:blackstone', 'create_things_and_misc:spout_gun_lava', 'trashcans:liquid_trash_can', 'ars_nouveau:fire_essence', 'minecraft:lava_bucket', 'permanentsponges:magmatic_sponge_on_a_stick', 'minecraft:netherrack')
    potting('ringsofascension:ring_luck', 'betterarcheology:villager_fossil', 'beachparty:melon_cocktail', 'betterarcheology:unidentified_artifact', 'moa_decor_science:mapadeltesoro', 'ars_nouveau:glyph_fortune', 'mcwpaths:dark_prismarine_clover_paving', 'candlelight:gold_ring', 'vinery:bolvar_wine')
    potting('ringsofascension:ring_magnetism', 'vinery:magnetic_wine', 'sophisticatedbackpacks:advanced_magnet_upgrade', 'create_sa:copper_magnet', 'minecraft:compass', 'minecraft:lodestone', 'moa_decor_science:brujula', 'simplemagnets:advancedmagnet', 'sophisticatedstorage:advanced_magnet_upgrade')
    potting('ringsofascension:ring_mining', 'twilightforest:mining_leaves', 'drinkbeer:beer_mug', 'vinery:bolvar_wine', 'apotheosis:diamond_mining_arrow', 'apotheosis:pickaxe_tome', 'apotheosis:iron_mining_arrow', 'create_confectionery:candy_cane', 'beachparty:honey_cocktail')
    potting('ringsofascension:ring_night_vision', 'vinery:aegis_wine', 'cataclysm:void_eye', 'cataclysm:flame_eye', 'cataclysm:monstrous_eye', 'biomesoplenty:eyebulb', 'cataclysm:mech_eye', 'minecraft:ender_eye', 'cataclysm:abyss_eye')
    potting('ringsofascension:ring_poison_resistance', 'minecraft:spider_eye', 'chipped:poisonous_mushroom_stem', 'chipped:poisonous_vine', 'alexsmobs:centipede_leg', 'moa_decor_toys:bruja', 'minecraft:poisonous_potato', 'chipped:ivy_vine', 'moa_decor_science:veneno')
    potting('ringsofascension:ring_regeneration', 'minecraft:ghast_tear', 'drinkbeer:beer_mug_apple_lambic', 'vinery:stal_wine', 'beachparty:cocoa_cocktail', 'ars_nouveau:thread_life_drain', 'create_confectionery:soothing_hot_chocolate', 'vinery:cherry_wine', 'drinkbeer:beer_mug_sweet_berry_kriek')
    potting('ringsofascension:ring_slow_falling', 'endlessbiomes:loaded_core', 'minecraft:phantom_membrane', 'ars_nouveau:glyph_slowfall', 'twilightforest:wispy_cloud', 'twilightforest:arctic_fur_block', 'twilightforest:fluffy_cloud', 'arcanelanterns:cloud_lantern', 'endlessbiomes:void_touched_boots_boots')
    potting('ringsofascension:ring_slow_resistance', 'undergarden:goo_ball', 'create_things_and_misc:spout_gun_honey', 'moa_decor_toys:abeja', 'minecraft:honey_block', 'undergarden:cloggrum_boots', 'minecraft:slime_block', 'moa_decor_toys:slime', 'create_things_and_misc:spout_gun_slime')
    potting('ringsofascension:ring_speed', 'mob_grinding_utils:xp_solidifier_upgrade', 'create_confectionery:black_chocolate_candy', 'create_confectionery:caramelized_marshmellow_on_a_stick', 'create_confectionery:ruby_chocolate_candy', 'lost_aether_content:agility_boots', 'create_confectionery:white_chocolate_candy', 'create_confectionery:caramel_glazed_berries', 'create_confectionery:chocolate_candy')
    potting('ringsofascension:ring_sponge', 'moa_decor_bath:esponjadebano', 'minecraft:prismarine', 'create_things_and_misc:spout_gun_water', 'trashcans:liquid_trash_can', 'ars_nouveau:water_essence', 'minecraft:water_bucket', 'permanentsponges:aqueous_sponge_on_a_stick', 'minecraft:sand')
    potting('ringsofascension:ring_steadfast_steps', 'beachparty:sunglasses', 'supplementaries:rope_arrow', 'alexsmobs:roadrunner_boots', 'minecraft:ladder', 'epicsamurai:steel_ninja_boots', 'nourished_nether:gilded_blackstone_brick_stairs', 'pizzacraft:pizza_delivery_boots', 'meadow:climbing_rope_topmount')
    potting('ringsofascension:ring_strength', 'ars_nouveau:wilden_horn', 'pamhc2foodextended:rootbeerfloatitem', 'beachparty:coconut_cocktail', 'vinery:solaris_wine', 'minecraft:blaze_powder', 'vinery:bottle_mojang_noir', 'farmersdelight:dog_food', 'pamhc2foodextended:rootbeersodaitem')
    potting('ringsofascension:ring_undying', 'fantasyfurniture:decorations/gravestone', 'useless_sword:undying_ingot', 'moa_decor_garden_:pala_cgrava', 'supplementaries:raked_gravel', 'extendedcrafting:the_ultimate_catalyst', 'nourished_nether:necronium_block', 'ars_nouveau:thread_undying', 'useless_sword:undying_gem')
    potting('ringsofascension:ring_water_breathing', 'supplementaries:wind_vane', 'minecraft:conduit', 'supplementaries:bubble_blower', 'chimes:amethyst_chimes', 'ars_nouveau:glyph_wind_shear', 'chimes:bamboo_chimes', 'ars_nouveau:air_essence', 'vinery:kelp_cider')
    potting('ringsofascension:ring_water_walking', 'moa_decor_art:esculturajesuscrucificado', 'minecraft:axolotl_bucket', 'vinery:red_wine', 'enlightened_end:frostburn_ice', 'minecraft:leather_boots', 'minecraft:blue_ice', 'undergarden:veil_mushroom', 'moa_decor_toys:ajolotedorado')
    potting('ringsofascension:ring_wither', 'stalwart_dungeons:tungsten_helmet', 'skinnedlanterns:wither_skeleton_soul_lantern_block', 'stalwart_dungeons:tungsten_leggings', 'moa_decor_toys:wither', 'stalwart_dungeons:tungsten_boots', 'ars_nouveau:glyph_wither', 'stalwart_dungeons:tungsten_chestplate', 'skinnedlanterns:wither_skeleton_lantern_block')
})