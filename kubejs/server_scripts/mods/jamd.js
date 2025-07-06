//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.add("forge:jamd/holystone", "aether:holystone");
  e.add("forge:jamd/stone", "minecraft:stone");
  e.add("forge:jamd/deepslate", "minecraft:deepslate");
  e.add("forge:jamd/radrock", "alexscaves:radrock");
  e.add("forge:jamd/coprolith", "alexscaves:coprolith");
  e.add("forge:jamd/galena", "alexscaves:galena");
  e.add("forge:jamd/guanostone", "alexscaves:guanostone");
  e.add("forge:jamd/depthrock", "undergarden:depthrock");
  e.add("forge:jamd/shiverstone", "undergarden:shiverstone");
  e.add("forge:jamd/netherrack", "minecraft:netherrack");
  e.add("forge:jamd/sculk_stone", "deeperdarker:sculk_stone");
  e.add("forge:jamd/gloomslate", "deeperdarker:gloomslate");
  e.add("forge:jamd/soul_bricks", "stalwart_dungeons:soul_bricks");
  e.add("forge:jamd/end_stone", "minecraft:end_stone");
  e.add("forge:jamd/purpur_bricks", "stalwart_dungeons:purpur_bricks");
});
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Portals
  e.remove([{ id: "jamd:portal_block" }, { id: "jamd:nether_portal_block" }, { id: "jamd:end_portal_block" }]);
  let potting_portals = (output, plate1, plate2, plate3, plate4) => {
    e.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: "wormhole:portal_frame"
      },
      loops: 1,
      results: [
        {
          item: output
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
              item: plate1
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
              item: plate2
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
              item: plate3
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
              item: plate4
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
  };
  potting_portals("jamd:portal_block", "kubejs:diamond_plate", "kubejs:dimensional_plate", "kubejs:ruby_plate", "kubejs:zinc_plate");
  potting_portals("jamd:nether_portal", "kubejs:netherite_plate", "kubejs:dimensional_plate", "kubejs:tungsten_plate", "kubejs:nether_quartz_plate");
  potting_portals("jamd:end_portal", "kubejs:ender_plate", "kubejs:dimensional_plate", "kubejs:malachite_plate", "kubejs:bismuth_plate");
  //#endregion
});
//#endregion
