//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Portal
  e.remove({ id: "javd:portal_block" });
  e.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "wormhole:portal_frame"
    },
    loops: 1,
    results: [
      {
        item: "javd:portal_block"
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
            item: "kubejs:echo_plate"
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
            item: "kubejs:amethyst_plate"
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
            item: "kubejs:paper_plate"
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
  });
  //#endregion
});
//#endregion
