//#region - Définition/Suppression/Masquage d'éléments dans JEI
function enlightend() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = []
  let hiding = []
  // Fonctions pour supprimer les tags et les crafts des éléments définis juste au dessus
  function handle_Tags(e) {
    e.removeAllTagsFrom(unused)
    e.add("forge:hiding", [unused, hiding])
  }
  function handle_Recipes(e) {
    e.remove([{ input: unused }, { output: unused }])
  }
  ServerEvents.tags(["item", "block"], handle_Tags)
  ServerEvents.recipes(handle_Recipes)
}
enlightend()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
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
    })
  }
  potting_emptying(
    "enlightened_end:ooze_fluid_bucket",
    "enlightened_end:ooze_fluid",
    1000,
    "minecraft:bucket"
  )
  potting_emptying("enlightened_end:ooze_bottle", "enlightened_end:ooze_fluid", 100, "minecraft:glass_bottle")
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
    })
  }
  potting_filling("minecraft:glass_bottle", "enlightened_end:ooze_fluid", 100, "enlightened_end:ooze_bottle")
  //#endregion
})
//#endregion

//#region - Tags
ServerEvents.tags(["entity_type"], e => {
  e.add("no_dreadful_spawn", "enlightened_end:void_leviathan")
})
//#endregion
