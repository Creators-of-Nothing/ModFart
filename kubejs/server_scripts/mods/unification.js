//#region - Définition/Suppression/Masquage d'éléments dans JEI
function unification() {
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
unification()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Liquid XP
  let potting_liquid_xp = (input, output) => {
    e.custom({
      type: "create:mixing",
      ingredients: [
        {
          item: "create_enchantment_industry:experience_rotor"
        },
        {
          fluid: input,
          amount: 1000
        }
      ],
      results: [
        {
          item: "create_enchantment_industry:experience_rotor"
        },
        {
          fluid: output,
          amount: 1000
        }
      ]
    })
  }
  potting_liquid_xp("create_enchantment_industry:experience", "cyclic:xpjuice")
  potting_liquid_xp("cyclic:xpjuice", "experienceobelisk:cognitium")
  potting_liquid_xp("experienceobelisk:cognitium", "mob_grinding_utils:fluid_xp")
  potting_liquid_xp("mob_grinding_utils:fluid_xp", "sophisticatedcore:xp_still")
  potting_liquid_xp("sophisticatedcore:xp_still", "create_enchantment_industry:experience")
  //#endregion
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {})
//#endregion
