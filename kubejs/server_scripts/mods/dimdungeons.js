//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Portal
  e.remove({ id: "dimdungeons:recipe_block_portal_keyhole" })
  e.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "wormhole:portal_frame"
    },
    loops: 1,
    results: [
      {
        item: "dimdungeons:block_portal_keyhole"
      }
    ],
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "wormhole:portal_frame"
          },
          {
            item: "kubejs:gold_plate"
          }
        ],
        results: [
          {
            item: "wormhole:portal_frame"
          }
        ]
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "wormhole:portal_frame"
          },
          {
            item: "kubejs:dimensional_plate"
          }
        ],
        results: [
          {
            item: "wormhole:portal_frame"
          }
        ]
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "wormhole:portal_frame"
          },
          {
            item: "kubejs:ender_plate"
          }
        ],
        results: [
          {
            item: "wormhole:portal_frame"
          }
        ]
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "wormhole:portal_frame"
          },
          {
            item: "kubejs:black_iron_plate"
          }
        ],
        results: [
          {
            item: "wormhole:portal_frame"
          }
        ]
      }
    ],
    transitionalItem: {
      item: "wormhole:portal_frame"
    }
  })
  //#endregion
})
//#endregion
