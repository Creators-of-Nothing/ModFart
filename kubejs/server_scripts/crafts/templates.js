// Changed crafts
ServerEvents.recipes(e => {
    // Smithing Template - Trim
    e.remove({ id: 'minecraft:sentry_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:vex_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:wild_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:coast_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:dune_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:wayfinder_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:raiser_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:shaper_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:host_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:ward_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:silence_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:tide_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:snout_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:rib_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:eye_armor_trim_smithing_template' })
    e.remove({ id: 'minecraft:spire_armor_trim_smithing_template' })
    e.remove({ id: 'lost_aether_content:noble_armor_trim_smithing_template' })
    e.remove({ id: 'alexscaves:polarity_armor_trim_smithing_template' })
    e.remove({ id: 'ancient_aether:wynd_armor_trim_smithing_template' })
    e.remove({ id: 'ancient_aether:whale_armor_trim_smithing_template' })
    e.remove({ id: 'ancient_aether:ascended_armor_trim_smithing_template' })
    e.remove({ id: 'ancient_aether:mysterious_armor_trim_smithing_template' })
    e.remove({ id: 'ancient_aether:mechanical_armor_trim_smithing_template' })

    // Smithing Template - Upgrade
    e.remove({ id: 'minecraft:netherite_upgrade_smithing_template' })
    e.remove({ id: 'cataclysm:ignitium_upgrade_smithing_template' })
    e.remove({ id: 'deeperdarker:warden_upgrade_smithing_template' })
    e.remove({ id: 'lolenderite:enderite_upgrade_smithing_template' })
    e.remove({ id: 'endlessbiomes:anklor_upgrade_template_duplication' })
    e.remove({ id: 'epicsamurai:spirit_upgrade_smithing_template' })
    e.remove({ id: 'undergarden:forgotten_upgrade_smithing_template' })
})


// Smithing Template - Trim
ServerEvents.recipes(e => {
    let potting = (template) => {
        e.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": template
            },
            "loops": 1,
            "results": [
                {
                    "count": 2,
                    "item": template
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:blank_template_trim"
                        },
                        {
                            "item": "kubejs:blank_template_trim"
                        }
                    ],
                    "keepHeldItem": true,
                    "results": [
                        {
                            "item": "kubejs:blank_template_trim"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:blank_template_trim"
                        },
                        {
                            "item": "moreplates:diamond_plate"
                        }
                    ],
                    "results": [
                        {
                            "item": "kubejs:blank_template_trim"
                        }
                    ]
                }
            ],
            "transitionalItem": {
                "item": "kubejs:blank_template_trim"
            }
        })
    }
    potting('minecraft:sentry_armor_trim_smithing_template')
    potting('minecraft:vex_armor_trim_smithing_template')
    potting('minecraft:wild_armor_trim_smithing_template')
    potting('minecraft:coast_armor_trim_smithing_template')
    potting('minecraft:dune_armor_trim_smithing_template')
    potting('minecraft:wayfinder_armor_trim_smithing_template')
    potting('minecraft:raiser_armor_trim_smithing_template')
    potting('minecraft:shaper_armor_trim_smithing_template')
    potting('minecraft:host_armor_trim_smithing_template')
    potting('minecraft:ward_armor_trim_smithing_template')
    potting('minecraft:silence_armor_trim_smithing_template')
    potting('minecraft:tide_armor_trim_smithing_template')
    potting('minecraft:snout_armor_trim_smithing_template')
    potting('minecraft:rib_armor_trim_smithing_template')
    potting('minecraft:eye_armor_trim_smithing_template')
    potting('minecraft:spire_armor_trim_smithing_template')
    potting('lost_aether_content:noble_armor_trim_smithing_template')
    potting('alexscaves:polarity_armor_trim_smithing_template')
    potting('ancient_aether:wynd_armor_trim_smithing_template')
    potting('ancient_aether:whale_armor_trim_smithing_template')
    potting('ancient_aether:ascended_armor_trim_smithing_template')
    potting('ancient_aether:mysterious_armor_trim_smithing_template')
    potting('ancient_aether:mechanical_armor_trim_smithing_template')
    potting('ancient_aether:mosaic_armor_trim_smithing_template')
    potting('ancient_aether:royal_armor_trim_smithing_template')
    potting('ancient_aether:solar_armor_trim_smithing_template')
    potting('ancient_aether:ancient_armor_trim_smithing_template')
})


// Smithing Template - Upgrade
ServerEvents.recipes(e => {
    let potting = (template) => {
        e.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": template
            },
            "loops": 1,
            "results": [
                {
                    "count": 2,
                    "item": template
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:blank_template_upgrade"
                        },
                        {
                            "item": "kubejs:blank_template_upgrade"
                        }
                    ],
                    "keepHeldItem": true,
                    "results": [
                        {
                            "item": "kubejs:blank_template_upgrade"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:blank_template_upgrade"
                        },
                        {
                            "item": "moreplates:diamond_plate"
                        }
                    ],
                    "results": [
                        {
                            "item": "kubejs:blank_template_upgrade"
                        }
                    ]
                }
            ],
            "transitionalItem": {
                "item": "kubejs:blank_template_upgrade"
            }
        })
    }
    potting('minecraft:netherite_upgrade_smithing_template')
    potting('cataclysm:ignitium_upgrade_smithing_template')
    potting('deeperdarker:warden_upgrade_smithing_template')
    potting('lolenderite:enderite_upgrade_smithing_template')
    potting('endlessbiomes:anklor_upgrade_template')
    potting('enlightened_end:adamantite_smithing_template')
    potting('epicsamurai:spirit_upgrade_smithing_template')
    potting('undergarden:forgotten_upgrade_smithing_template')
})