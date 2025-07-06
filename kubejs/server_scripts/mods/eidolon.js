//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Bone Paladin Helm
  e.custom({
    type: "eidolon:worktable",
    pattern: ["bsb", "s s", "   "],
    reagents: "ht t",
    key: {
      b: {
        item: "eidolon:imbued_bones"
      },
      s: {
        item: "samurai_dynasty:silver_ingot"
      },
      t: {
        item: "eidolon:tattered_cloth"
      },
      h: {
        item: "eidolon:holy_symbol"
      }
    },
    result: {
      item: "eidolon:bonelord_helm"
    }
  });
  //#endregion
  //#region - Bone Paladin Greaves
  e.custom({
    type: "eidolon:worktable",
    pattern: ["bsb", "s s", "s s"],
    reagents: "hlal",
    key: {
      s: {
        item: "samurai_dynasty:silver_ingot"
      },
      b: {
        item: "eidolon:imbued_bones"
      },
      h: {
        item: "eidolon:holy_symbol"
      },
      a: {
        item: "eidolon:enchanted_ash"
      },
      l: {
        item: "eidolon:lesser_soul_gem"
      }
    },
    result: {
      item: "eidolon:bonelord_greaves"
    }
  });
  //#endregion
  //#region - Bone Paladin Chestplate
  e.custom({
    type: "eidolon:worktable",
    pattern: ["s s", "bwb", "sbs"],
    reagents: "htlt",
    key: {
      b: {
        item: "eidolon:imbued_bones"
      },
      w: {
        item: "eidolon:wraith_heart"
      },
      s: {
        item: "samurai_dynasty:silver_ingot"
      },
      t: {
        item: "eidolon:tattered_cloth"
      },
      h: {
        item: "eidolon:holy_symbol"
      },
      l: {
        item: "eidolon:lesser_soul_gem"
      }
    },
    result: {
      item: "eidolon:bonelord_chestplate"
    }
  });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function eidolon() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "eidolon:lead_block",
    "eidolon:lead_ingot",
    "eidolon:lead_nugget",
    "eidolon:raw_lead_block",
    "eidolon:raw_lead",
    "eidolon:raw_silver_block",
    "eidolon:raw_silver",
    "eidolon:silver_block",
    "eidolon:silver_ingot",
    "eidolon:silver_nugget",
    "eidolon:scriptorium"
  ];
  let hiding = [];
  // Fonctions pour supprimer les tags et les crafts des éléments définis juste au dessus
  function handle_Tags(e) {
    e.removeAllTagsFrom(unused);
    e.add("forge:hiding", [unused, hiding]);
  }
  function handle_Recipes(e) {
    e.remove([{ input: unused }, { output: unused }]);
  }
  ServerEvents.tags(["item", "block"], handle_Tags);
  ServerEvents.recipes(handle_Recipes);
}
eidolon();
//#endregion
