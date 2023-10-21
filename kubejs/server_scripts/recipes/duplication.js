// Duplication
ServerEvents.recipes(e => {
    let potting = (duplication) => {
        e.custom({
            "type": "create:mixing",
            "heatRequirement": "superheated",
            "ingredients": [
                {
                    "item": "createchromaticreturn:industrium_ingot"
                },
                {
                    "item": duplication
                }
            ],
            "results": [
                {
                    "count": 2,
                    "item": duplication
                }
            ]
        })
    }
    potting('minecraft:nether_star')
})