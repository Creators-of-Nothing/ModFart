// Changed crafts
ServerEvents.recipes(e => {
    e.remove({ not: { id: /cagedmobs:crafting/ }, id: /botanypots:/ })
})


// Caged Mobs - Environments
ServerEvents.recipes(e => {
    let potting = (block, category, modif) => {
        e.custom({
            "type": "cagedmobs:environment_data",
            "input": {
                "item": block
            },
            "render": block,
            "growModifier": modif,
            "categories": [
                category
            ]
        })
    }
    potting('minecraft:dirt', 'overworld', 1.00)
    potting('minecraft:netherrack', 'nether', 1.00)
    potting('minecraft:end_stone', 'end', 1.00)
    potting('minecraft:sand', 'sea', 1.00)
    potting('twilightforest:twilight_oak_log', 'twilight', 1.00)
    potting('minecraft:grass_block', 'overworld', 1.25)
    potting('minecraft:glowstone', 'nether', 1.25)
    potting('minecraft:purpur_block', 'end', 1.25)
    potting('minecraft:dark_prismarine', 'sea', 1.25)
    potting('twilightforest:hedge', 'twilight', 1.25)
    potting('minecraft:mycelium', 'overworld', 1.50)
    potting('minecraft:soul_soil', 'nether', 1.50)
    potting('stalwart_dungeons:purpur_bricks_and_endstone', 'end', 1.50)
    potting('minecraft:fire_coral_block', 'sea', 1.50)
    potting('twilightforest:deadrock', 'twilight', 1.50)
    potting('undergarden:forgotten_block', 'allenv', 1.75)
    potting('cagedmobs:star_infused_netherite_block', 'allenv', 2.00)
})


// Caged Mobs - Nether
ServerEvents.recipes(e => {
    let potting = (entity, tier, loot1, loot2) => {
        e.custom({
            "type": "cagedmobs:entity_data",
            "entity": entity,
            "samplerTier": tier,
            "environments": [
                "nether",
                "allenv"
            ],
            "growTicks": 1200,
            "results": [
                {
                    "chance": 0.2,
                    "output": {
                        "item": loot1
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                },
                {
                    "chance": 0.1,
                    "output": {
                        "item": loot2
                    },
                    "minAmount": 1,
                    "maxAmount": 1
                }
            ]
        })
    }
    potting('minecraft:wither', 3, 'cagedmobs:nether_star_fragment', 'minecraft:wither_rose')
})