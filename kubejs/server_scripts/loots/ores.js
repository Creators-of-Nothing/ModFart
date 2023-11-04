/*// Coal
ServerEvents.blockLootTable(e => {
    let potting = (ore, raw, sequence) => {
        e.addBlock({
            "type": "minecraft:block",
            "pools": [
                {
                    "bonus_rolls": 0.0,
                    "entries": [
                        {
                            "type": "minecraft:alternatives",
                            "children": [
                                {
                                    "type": "minecraft:item",
                                    "conditions": [
                                        {
                                            "condition": "minecraft:match_tool",
                                            "predicate": {
                                                "enchantments": [
                                                    {
                                                        "enchantment": "minecraft:silk_touch",
                                                        "levels": {
                                                            "min": 1
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "name": ore
                                },
                                {
                                    "type": "minecraft:item",
                                    "functions": [
                                        {
                                            "enchantment": "minecraft:fortune",
                                            "formula": "minecraft:ore_drops",
                                            "function": "minecraft:apply_bonus"
                                        },
                                        {
                                            "function": "minecraft:explosion_decay"
                                        }
                                    ],
                                    "name": raw
                                }
                            ]
                        }
                    ],
                    "rolls": 1.0
                }
            ],
            "random_sequence": sequence
        })
    }
    potting('aether:ambrosium_ore', 'kubejs:raw_ambrosium', 'aether:blocks/ambrosium_ore')
})*/