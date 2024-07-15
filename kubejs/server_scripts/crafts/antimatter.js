// Changed crafts
ServerEvents.recipes(e => {
    // Create
    e.remove({ id: '' })
})

// Antimatter
ServerEvents.recipes(e => {
    e.custom({
        "type": "mekanism:chemical_infusing",
        "leftInput": {
            "amount": 1000,
            "gas": "mekanism:plutonium"
        },
        "output": {
            "amount": 1,
            "gas": "mekanism:antimatter"
        },
        "rightInput": {
            "amount": 1000,
            "gas": "mekanism:polonium"
        }
    })
})