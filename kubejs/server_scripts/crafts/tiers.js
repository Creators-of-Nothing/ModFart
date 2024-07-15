// Changed crafts
ServerEvents.recipes(e => {
    // Coals
    e.remove({ id: 'morecoal:copper_coal_from_coal' })
    e.remove({ id: 'morecoal:iron_coal_from_copper_coal' })
    e.remove({ id: 'morecoal:lapis_coal_from_iron_coal' })
    e.remove({ id: 'morecoal:redstone_coal_from_lapis_coal' })
    e.remove({ id: 'morecoal:gold_coal_from_redstone_coal' })
    e.remove({ id: 'morecoal:amethyst_coal_from_gold_coal' })
    e.remove({ id: 'morecoal:emerald_coal_from_amethyst_coal' })
    e.remove({ id: 'morecoal:diamond_coal_from_emerald_coal' })
    e.remove({ id: 'morecoal:netherite_coal_from_diamond_coal' })
    e.remove({ id: 'morecoal:omni_coal' })

    // Furnaces
    e.remove({ id: 'ironfurnaces:furnaces/copper_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/iron_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/iron_furnace2' })
    e.remove({ id: 'ironfurnaces:furnaces/gold_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/gold_furnace2' })
    e.remove({ id: 'ironfurnaces:furnaces/silver_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/silver_furnace2' })
    e.remove({ id: 'ironfurnaces:furnaces/diamond_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/obsidian_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/obsidian_furnace2' })
    e.remove({ id: 'ironfurnaces:furnaces/emerald_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/netherite_furnace' })

    // Pipez
    e.remove({ id: 'pipez:basic_upgrade' })
    e.remove({ id: 'pipez:improved_upgrade' })
    e.remove({ id: 'pipez:advanced_upgrade' })
    e.remove({ id: 'pipez:ultimate_upgrade' })

    // Sophisticated Backpacks
    e.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_1' })
    e.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_2' })
    e.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_3' })
    e.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_4' })

    // Sophisticated Storage
    e.remove({ id: 'sophisticatedstorage:stack_upgrade_tier_1' })
    e.remove({ id: 'sophisticatedstorage:stack_upgrade_tier_2' })
    e.remove({ id: 'sophisticatedstorage:stack_upgrade_tier_3' })
    e.remove({ id: 'sophisticatedstorage:stack_upgrade_tier_4' })
})


// Coals
ServerEvents.recipes(e => {
    let potting = (output, input, dust) => {
        e.custom({
            "type": "create:deploying",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": dust
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('morecoal:copper_coal', 'minecraft:coal', 'mekanism:dust_copper')
    potting('morecoal:iron_coal', 'morecoal:copper_coal', 'mekanism:dust_iron')
    potting('morecoal:lapis_coal', 'morecoal:iron_coal', 'mekanism:dust_lapis_lazuli')
    potting('morecoal:redstone_coal', 'morecoal:lapis_coal', 'minecraft:redstone')
    potting('morecoal:gold_coal', 'morecoal:redstone_coal', 'mekanism:dust_gold')
    potting('morecoal:amethyst_coal', 'morecoal:gold_coal', 'mekanism:dust_obsidian')
    potting('morecoal:emerald_coal', 'morecoal:amethyst_coal', 'mekanism:dust_emerald')
    potting('morecoal:diamond_coal', 'morecoal:emerald_coal', 'mekanism:dust_diamond')
    potting('morecoal:netherite_coal', 'morecoal:diamond_coal', 'mekanism:dust_netherite')
    potting('ironfurnaces:rainbow_coal', 'morecoal:omni_coal', 'createchromaticreturn:creative_flour')
})
ServerEvents.recipes(e => {
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "morecoal:amethyst_coal"
            },
            {
                "item": "morecoal:diamond_coal"
            },
            {
                "item": "morecoal:iron_coal"
            },
            {
                "item": "morecoal:emerald_coal"
            },
            {
                "item": "morecoal:copper_coal"
            },
            {
                "item": "morecoal:redstone_coal"
            },
            {
                "item": "morecoal:gold_coal"
            },
            {
                "item": "morecoal:lapis_coal"
            },
            {
                "item": "morecoal:netherite_coal"
            }
        ],
        "results": [
            {
                "item": "morecoal:omni_coal"
            }
        ]
    })
})


// Furnaces
ServerEvents.recipes(e => {
    let potting = (output, input, plate) => {
        e.custom({
            "type": "create:item_application",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": plate
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('ironfurnaces:copper_furnace', 'minecraft:furnace', 'moreplates:copper_plate')
    potting('ironfurnaces:silver_furnace', 'ironfurnaces:copper_furnace', 'moreplates:silver_plate')
    potting('ironfurnaces:iron_furnace', 'ironfurnaces:silver_furnace', 'moreplates:iron_plate')
    potting('ironfurnaces:gold_furnace', 'ironfurnaces:iron_furnace', 'moreplates:gold_plate')
    potting('ironfurnaces:diamond_furnace', 'ironfurnaces:gold_furnace', 'moreplates:diamond_plate')
    potting('ironfurnaces:obsidian_furnace', 'ironfurnaces:diamond_furnace', 'kubejs:obsidian_plate')
    potting('ironfurnaces:emerald_furnace', 'ironfurnaces:obsidian_furnace', 'moreplates:emerald_plate')
    potting('ironfurnaces:netherite_furnace', 'ironfurnaces:emerald_furnace', 'moreplates:netherite_plate')
    potting('ironfurnaces:million_furnace', 'ironfurnaces:netherite_furnace', 'extendedcrafting:the_ultimate_catalyst')
})


// Pipez
ServerEvents.recipes(e => {
    let potting = (output, input, element) => {
        e.shaped(output, [
            'BBB',
            'BAB',
            'BBB'
        ], {
            A: input,
            B: element
        })
    }
    potting('pipez:basic_upgrade', 'moreplates:redstone_plate', 'minecraft:iron_ingot')
    potting('pipez:improved_upgrade', 'pipez:basic_upgrade', 'minecraft:gold_ingot')
    potting('pipez:advanced_upgrade', 'pipez:improved_upgrade', 'minecraft:diamond')
    potting('pipez:ultimate_upgrade', 'pipez:advanced_upgrade', 'minecraft:netherite_ingot')
    potting('pipez:infinity_upgrade', 'pipez:ultimate_upgrade', 'extendedcrafting:the_ultimate_ingot')
})
ServerEvents.recipes(e => {
    let potting = (output, input, plate) => {
        e.shaped(output, [
            ' B ',
            'BAB',
            ' B '
        ], {
            A: input,
            B: plate
        })
    }
    potting('pipez:basic_upgrade', 'moreplates:redstone_plate', 'moreplates:iron_plate')
    potting('pipez:improved_upgrade', 'pipez:basic_upgrade', 'moreplates:gold_plate')
    potting('pipez:advanced_upgrade', 'pipez:improved_upgrade', 'moreplates:diamond_plate')
    potting('pipez:ultimate_upgrade', 'pipez:advanced_upgrade', 'moreplates:netherite_plate')
    potting('pipez:infinity_upgrade', 'pipez:ultimate_upgrade', 'extendedcrafting:the_ultimate_catalyst')
})
ServerEvents.recipes(e => {
    let potting = (output, input, plate) => {
        e.custom({
            "type": "create:deploying",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": plate
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('pipez:basic_upgrade', 'moreplates:redstone_plate', 'moreplates:iron_plate')
    potting('pipez:improved_upgrade', 'pipez:basic_upgrade', 'moreplates:gold_plate')
    potting('pipez:advanced_upgrade', 'pipez:improved_upgrade', 'moreplates:diamond_plate')
    potting('pipez:ultimate_upgrade', 'pipez:advanced_upgrade', 'moreplates:netherite_plate')
    potting('pipez:infinity_upgrade', 'pipez:ultimate_upgrade', 'extendedcrafting:the_ultimate_catalyst')
})


// Sophisticated Backpacks
ServerEvents.recipes(e => {
    let potting = (output, input, element) => {
        e.shaped(output, [
            'BBB',
            'BAB',
            'BBB'
        ], {
            A: input,
            B: element
        })
    }
    potting('sophisticatedbackpacks:stack_upgrade_tier_1', 'sophisticatedbackpacks:upgrade_base', 'minecraft:iron_ingot')
    potting('sophisticatedbackpacks:stack_upgrade_tier_2', 'sophisticatedbackpacks:stack_upgrade_tier_1', 'minecraft:gold_ingot')
    potting('sophisticatedbackpacks:stack_upgrade_tier_3', 'sophisticatedbackpacks:stack_upgrade_tier_2', 'minecraft:diamond')
    potting('sophisticatedbackpacks:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_tier_3', 'minecraft:netherite_ingot')
})
ServerEvents.recipes(e => {
    let potting = (output, input, plate) => {
        e.shaped(output, [
            ' B ',
            'BAB',
            ' B '
        ], {
            A: input,
            B: plate
        })
    }
    potting('sophisticatedbackpacks:stack_upgrade_tier_1', 'sophisticatedbackpacks:upgrade_base', 'moreplates:iron_plate')
    potting('sophisticatedbackpacks:stack_upgrade_tier_2', 'sophisticatedbackpacks:stack_upgrade_tier_1', 'moreplates:gold_plate')
    potting('sophisticatedbackpacks:stack_upgrade_tier_3', 'sophisticatedbackpacks:stack_upgrade_tier_2', 'moreplates:diamond_plate')
    potting('sophisticatedbackpacks:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_tier_3', 'moreplates:netherite_plate')
})
ServerEvents.recipes(e => {
    let potting = (output, input, plate) => {
        e.custom({
            "type": "create:deploying",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": plate
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('sophisticatedbackpacks:stack_upgrade_tier_1', 'sophisticatedbackpacks:upgrade_base', 'moreplates:iron_plate')
    potting('sophisticatedbackpacks:stack_upgrade_tier_2', 'sophisticatedbackpacks:stack_upgrade_tier_1', 'moreplates:gold_plate')
    potting('sophisticatedbackpacks:stack_upgrade_tier_3', 'sophisticatedbackpacks:stack_upgrade_tier_2', 'moreplates:diamond_plate')
    potting('sophisticatedbackpacks:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_tier_3', 'moreplates:netherite_plate')
})


// Sophisticated Storage
ServerEvents.recipes(e => {
    let potting = (output, input, element) => {
        e.shaped(output, [
            'BBB',
            'BAB',
            'BBB'
        ], {
            A: input,
            B: element
        })
    }
    potting('sophisticatedstorage:stack_upgrade_tier_1', 'sophisticatedstorage:upgrade_base', 'minecraft:iron_ingot')
    potting('sophisticatedstorage:stack_upgrade_tier_2', 'sophisticatedstorage:stack_upgrade_tier_1', 'minecraft:gold_ingot')
    potting('sophisticatedstorage:stack_upgrade_tier_3', 'sophisticatedstorage:stack_upgrade_tier_2', 'minecraft:diamond')
    potting('sophisticatedstorage:stack_upgrade_tier_4', 'sophisticatedstorage:stack_upgrade_tier_3', 'minecraft:netherite_ingot')
})
ServerEvents.recipes(e => {
    let potting = (output, input, plate) => {
        e.shaped(output, [
            ' B ',
            'BAB',
            ' B '
        ], {
            A: input,
            B: plate
        })
    }
    potting('sophisticatedstorage:stack_upgrade_tier_1', 'sophisticatedstorage:upgrade_base', 'moreplates:iron_plate')
    potting('sophisticatedstorage:stack_upgrade_tier_2', 'sophisticatedstorage:stack_upgrade_tier_1', 'moreplates:gold_plate')
    potting('sophisticatedstorage:stack_upgrade_tier_3', 'sophisticatedstorage:stack_upgrade_tier_2', 'moreplates:diamond_plate')
    potting('sophisticatedstorage:stack_upgrade_tier_4', 'sophisticatedstorage:stack_upgrade_tier_3', 'moreplates:netherite_plate')
})
ServerEvents.recipes(e => {
    let potting = (output, input, plate) => {
        e.custom({
            "type": "create:deploying",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": plate
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    potting('sophisticatedstorage:stack_upgrade_tier_1', 'sophisticatedstorage:upgrade_base', 'moreplates:iron_plate')
    potting('sophisticatedstorage:stack_upgrade_tier_2', 'sophisticatedstorage:stack_upgrade_tier_1', 'moreplates:gold_plate')
    potting('sophisticatedstorage:stack_upgrade_tier_3', 'sophisticatedstorage:stack_upgrade_tier_2', 'moreplates:diamond_plate')
    potting('sophisticatedstorage:stack_upgrade_tier_4', 'sophisticatedstorage:stack_upgrade_tier_3', 'moreplates:netherite_plate')
})