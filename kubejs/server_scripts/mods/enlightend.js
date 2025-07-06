//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove({ id: "enlightened_end:cerulean_planks" });
  //#endregion
  //#region - Emptying
  let potting_emptying = (recipient, liquid, amount, empty_recipient) => {
    e.custom({
      type: "create:emptying",
      ingredients: [
        {
          item: recipient
        }
      ],
      results: [
        {
          fluid: liquid,
          amount: amount
        },
        {
          item: empty_recipient
        }
      ]
    });
  };
  potting_emptying("enlightened_end:ooze_fluid_bucket", "enlightened_end:ooze_fluid", 1000, "minecraft:bucket");
  potting_emptying("enlightened_end:ooze_bottle", "enlightened_end:ooze_fluid", 100, "minecraft:glass_bottle");
  //#endregion
  //#region - Filling
  let potting_filling = (empty_recipient, liquid, amount, recipient) => {
    e.custom({
      type: "create:filling",
      ingredients: [
        {
          item: empty_recipient
        },
        {
          fluid: liquid,
          amount: amount
        }
      ],
      results: [
        {
          item: recipient
        }
      ]
    });
  };
  potting_filling("minecraft:glass_bottle", "enlightened_end:ooze_fluid", 100, "enlightened_end:ooze_bottle");
  //#endregion
});
//#endregion
