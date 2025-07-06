//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.add("c:pickaxes", "mekanism:meka_tool");
  e.add("forge:tools/pickaxes", "mekanism:meka_tool");
  e.add("minecraft:pickaxes", "mekanism:meka_tool");
  e.add("stellarity:tools/pickaxes", "mekanism:meka_tool");
});
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([
    { id: "mekanism:enriching/charcoal_dust" },
    { id: "mekanism:infusion_conversion/carbon/from_charcoal" },
    { id: /mekanism:pigment_extracting\// },
    { id: /mekanism:compat\/biomesoplenty\/pigment_extracting\// },
    { id: "mekanism:reaction/wood_gasification/logs" },
    { id: "mekanism:reaction/wood_gasification/planks" },
    { id: /mekanism:reaction\/coal_gasification\// },
    { id: /mekanism:reaction\/wood_gasification\// }
  ]);
  //#endregion
  //#region - Replaced Inputs
  e.replaceInput({ input: "mekanism:hdpe_sheet" }, "mekanism:hdpe_sheet", "kubejs:hdpe_plate");
  e.replaceInput({ input: "mekanism:hdpe_rod" }, "mekanism:hdpe_rod", "kubejs:hdpe_rod");
  e.replaceInput({ input: "mekanism:ingot_silver" }, "mekanism:ingot_silver", "samurai_dynasty:silver_ingot");
  //#endregion
  //#region - Solar Elements
  e.remove([{ id: "mekanismgenerators:solar_panel" }, { id: /solarpanels:.*_solar_element/ }]);
  let potting_solar_element = (solar_element, glass, material1, material2) => {
    e.shaped(solar_element, ["AAA", "BBB", "CCC"], {
      A: glass,
      B: material1,
      C: material2
    });
  };
  potting_solar_element("mekanismgenerators:solar_panel", "minecraft:glass_pane", "minecraft:redstone", "kubejs:osmium_plate");
  potting_solar_element("solarpanels:carbone_solar_element", "minecraft:black_stained_glass_pane", "kubejs:crystal_coal", "kubejs:hdpe_plate");
  potting_solar_element("solarpanels:hybrid_solar_element", "minecraft:glass_pane", "kubejs:crystal_lapis_lazuli", "kubejs:hdpe_plate");
  potting_solar_element("solarpanels:improved_hybrid_solar_element", "minecraft:glass_pane", "kubejs:crystal_diamond", "kubejs:hdpe_plate");
  potting_solar_element("solarpanels:quantum_solar_element", "minecraft:purple_stained_glass_pane", "kubejs:crystal_chorundum", "kubejs:hdpe_plate");
  potting_solar_element("solarpanels:light_absorbing_solar_element", "minecraft:red_stained_glass_pane", "kubejs:crystal_ruby", "kubejs:nether_star_plate");
  potting_solar_element("solarpanels:singular_solar_element", "minecraft:pink_stained_glass_pane", "kubejs:crystal_gravitite", "kubejs:nether_star_plate");
  potting_solar_element("solarpanels:spectral_solar_element", "minecraft:yellow_stained_glass_pane", "mekanism:crystal_gold", "kubejs:nether_star_plate");
  potting_solar_element("solarpanels:photonic_solar_element", "minecraft:lime_stained_glass_pane", "mekanism:crystal_uranium", "kubejs:nether_star_plate");
  potting_solar_element("solarpanels:creative_solar_element", "minecraft:magenta_stained_glass_pane", "mekanism:pellet_antimatter", "kubejs:enhanced_ender_plate");
  //#endregion
  //#region - Energy Tablets
  e.remove([{ id: "mekanism:energy_tablet" }, { id: /solarpanels:.*_energy_tablet/ }]);
  let potting_energy_tablet = (energy_tablet, circuit, plate, alloy, base) => {
    e.shaped(energy_tablet, ["ABA", "CDC", "ABA"], {
      A: circuit,
      B: plate,
      C: alloy,
      D: base
    });
  };
  potting_energy_tablet("mekanism:energy_tablet", "minecraft:redstone", "kubejs:gold_plate", "mekanism:alloy_infused", "minecraft:gold_ingot");
  potting_energy_tablet("solarpanels:improved_energy_tablet", "mekanism:basic_control_circuit", "kubejs:dimensional_plate", "mekanism:alloy_infused", "mekanism:energy_tablet");
  potting_energy_tablet("solarpanels:quantum_energy_tablet", "mekanism:elite_control_circuit", "kubejs:amethyst_plate", "mekanism:alloy_reinforced", "solarpanels:improved_energy_tablet");
  potting_energy_tablet("solarpanels:spectral_energy_tablet", "mekanism:elite_control_circuit", "kubejs:enhanced_redstone_plate", "mekanism:alloy_reinforced", "solarpanels:quantum_energy_tablet");
  potting_energy_tablet("solarpanels:singular_energy_tablet", "mekanism:elite_control_circuit", "kubejs:bismuth_plate", "mekanism:alloy_reinforced", "solarpanels:spectral_energy_tablet");
  potting_energy_tablet("solarpanels:light_absorbing_energy_tablet", "mekanism:ultimate_control_circuit", "kubejs:electrum_plate", "mekanism:alloy_atomic", "solarpanels:singular_energy_tablet");
  potting_energy_tablet("solarpanels:photonic_energy_tablet", "mekanism:ultimate_control_circuit", "kubejs:void_steel_plate", "mekanism:alloy_atomic", "solarpanels:light_absorbing_energy_tablet");
  potting_energy_tablet("solarpanels:creative_energy_tablet", "kubejs:creative_control_circuit", "kubejs:antimatter_plate", "kubejs:alloy_creative", "solarpanels:photonic_energy_tablet");
  //#endregion
  //#region - Solar Panels
  e.remove([{ id: "mekanismgenerators:generator/solar" }, { id: /solarpanels:.*_solar_panel/ }]);
  let potting_solar_panel = (solar_panel, solar_element, alloy, base, plate, energy_tablet) => {
    e.shaped(solar_panel, ["AAA", "BCB", "DED"], {
      A: solar_element,
      B: alloy,
      C: base,
      D: plate,
      E: energy_tablet
    });
  };
  potting_solar_panel("mekanismgenerators:solar_generator", "mekanismgenerators:solar_panel", "mekanism:alloy_infused", "minecraft:iron_ingot", "kubejs:iron_plate", "mekanism:energy_tablet");

  potting_solar_panel(
    "solarpanels:advanced_solar_panel",
    "solarpanels:carbone_solar_element",
    "mekanism:alloy_infused",
    "mekanismgenerators:solar_generator",
    "kubejs:osmium_plate",
    "mekanism:energy_tablet"
  );
  potting_solar_panel(
    "solarpanels:hybrid_solar_panel",
    "solarpanels:hybrid_solar_element",
    "mekanism:alloy_infused",
    "solarpanels:advanced_solar_panel",
    "kubejs:osmium_plate",
    "mekanism:energy_tablet"
  );
  potting_solar_panel(
    "solarpanels:ultimate_hybrid_solar_panel",
    "solarpanels:improved_hybrid_solar_element",
    "mekanism:alloy_reinforced",
    "solarpanels:hybrid_solar_panel",
    "kubejs:steel_plate",
    "solarpanels:improved_energy_tablet"
  );
  potting_solar_panel(
    "solarpanels:quantum_solar_panel",
    "solarpanels:quantum_solar_element",
    "mekanism:alloy_reinforced",
    "solarpanels:ultimate_hybrid_solar_panel",
    "kubejs:steel_plate",
    "solarpanels:quantum_energy_tablet"
  );
  potting_solar_panel(
    "solarpanels:spectral_solar_panel",
    "solarpanels:spectral_solar_element",
    "mekanism:alloy_reinforced",
    "solarpanels:quantum_solar_panel",
    "kubejs:hdpe_plate",
    "solarpanels:spectral_energy_tablet"
  );
  potting_solar_panel(
    "solarpanels:singular_solar_panel",
    "solarpanels:singular_solar_element",
    "mekanism:alloy_atomic",
    "solarpanels:spectral_solar_panel",
    "kubejs:hdpe_plate",
    "solarpanels:singular_energy_tablet"
  );
  potting_solar_panel(
    "solarpanels:light_absorbing_solar_panel",
    "solarpanels:light_absorbing_solar_element",
    "mekanism:alloy_atomic",
    "solarpanels:singular_solar_panel",
    "kubejs:antimatter_plate",
    "solarpanels:light_absorbing_energy_tablet"
  );
  potting_solar_panel(
    "solarpanels:photonic_solar_panel",
    "solarpanels:photonic_solar_element",
    "mekanism:alloy_atomic",
    "solarpanels:light_absorbing_solar_panel",
    "kubejs:antimatter_plate",
    "solarpanels:photonic_energy_tablet"
  );
  potting_solar_panel(
    "solarpanels:creative_solar_panel",
    "solarpanels:creative_solar_element",
    "kubejs:alloy_creative",
    "solarpanels:photonic_solar_panel",
    "kubejs:the_ultimate_plate",
    "solarpanels:creative_energy_tablet"
  );
  //#endregion
  //#region - Creative Contraptions
  let potting = (output, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W) => {
    e.custom({
      type: "extendedcrafting:shaped_table",
      tier: 4,
      pattern: ["AAAABAAAA", "ACDEFEDCA", "ADGHIHGDA", "AJKLMLKNA", "BOPQRQSTB", "AJKLMLKNA", "ADGHUHGDA", "ACDVWVDCA", "AAAABAAAA"],
      key: {
        A: {
          item: A
        },
        B: {
          item: B
        },
        C: {
          item: C
        },
        D: {
          item: D
        },
        E: {
          item: E
        },
        F: {
          item: F
        },
        G: {
          item: G
        },
        H: {
          item: H
        },
        I: {
          item: I
        },
        J: {
          item: J
        },
        K: {
          item: K
        },
        L: {
          item: L
        },
        M: {
          item: M
        },
        N: {
          item: N
        },
        O: {
          item: O
        },
        P: {
          item: P
        },
        Q: {
          item: Q
        },
        R: {
          item: R
        },
        S: {
          item: S
        },
        T: {
          item: T
        },
        U: {
          item: U
        },
        V: {
          item: V
        },
        W: {
          item: W
        }
      },
      result: {
        item: output
      }
    });
  };
  potting(
    "mekanism:creative_fluid_tank",
    "mekanism:upgrade_filter",
    "kubejs:osmium_gear",
    "kubejs:hdpe_gear",
    "mekanism:ultimate_mechanical_pipe",
    "kubejs:tin_gear",
    "twilightforest:giant_leaves",
    "mekanism:ultimate_fluid_tank",
    "kubejs:polonium_gear",
    "mekanism:ultimate_fluid_tank",
    "kubejs:lead_gear",
    "kubejs:plutonium_gear",
    "extradisks:infinite_fluid_storage_part",
    "kubejs:the_ultimate_gear",
    "kubejs:uranium_gear",
    "twilightforest:giant_obsidian",
    "mekanism:ultimate_fluid_tank",
    "kubejs:antimatter_gear",
    "create:creative_fluid_tank",
    "mekanism:ultimate_fluid_tank",
    "twilightforest:giant_cobblestone",
    "mekanism:ultimate_fluid_tank",
    "kubejs:bronze_gear",
    "twilightforest:giant_log"
  );
  potting(
    "mekanism:creative_bin",
    "mekanism:upgrade_filter",
    "kubejs:osmium_gear",
    "kubejs:hdpe_gear",
    "mekanism:ultimate_logistical_transporter",
    "kubejs:tin_gear",
    "twilightforest:giant_leaves",
    "mekanism:ultimate_bin",
    "kubejs:polonium_gear",
    "solarpanels:creative_solar_panel",
    "kubejs:lead_gear",
    "kubejs:plutonium_gear",
    "extradisks:infinite_storage_part",
    "minecraft:bedrock",
    "kubejs:uranium_gear",
    "twilightforest:giant_obsidian",
    "mekanism:creative_fluid_tank",
    "minecraft:bedrock",
    "create:creative_crate",
    "mekanism:creative_chemical_tank",
    "twilightforest:giant_cobblestone",
    "mekanism:creative_energy_cube",
    "kubejs:bronze_gear",
    "twilightforest:giant_log"
  );
  potting(
    "mekanism:creative_chemical_tank",
    "mekanism:upgrade_filter",
    "kubejs:osmium_gear",
    "kubejs:hdpe_gear",
    "mekanism:ultimate_pressurized_tube",
    "kubejs:tin_gear",
    "twilightforest:giant_leaves",
    "mekanism:ultimate_chemical_tank",
    "kubejs:polonium_gear",
    "mekanism:ultimate_chemical_tank",
    "kubejs:lead_gear",
    "kubejs:plutonium_gear",
    "create:netherite_backtank",
    "kubejs:the_ultimate_gear",
    "kubejs:uranium_gear",
    "twilightforest:giant_obsidian",
    "mekanism:ultimate_chemical_tank",
    "kubejs:antimatter_gear",
    "create_sa:creative_filling_tank",
    "mekanism:ultimate_chemical_tank",
    "twilightforest:giant_cobblestone",
    "mekanism:ultimate_chemical_tank",
    "kubejs:bronze_gear",
    "twilightforest:giant_log"
  );
  //#endregion
  //#region - Creative Energy Cube
  e.custom({
    type: "extendedcrafting:shaped_table",
    tier: 4,
    pattern: ["AAAABAAAA", "ACDEFEDCA", "ADGHIHGDA", "AJKLMLKNA", "BOPQRQSTB", "AJKLMLKNA", "ADGHUHGDA", "ACDVWVDCA", "AAAABAAAA"],
    key: {
      A: {
        item: "mekanism:upgrade_filter"
      },
      B: {
        item: "kubejs:osmium_gear"
      },
      C: {
        item: "kubejs:hdpe_gear"
      },
      D: {
        item: "mekanism:ultimate_universal_cable"
      },
      E: {
        item: "kubejs:tin_gear"
      },
      F: {
        item: "twilightforest:giant_leaves"
      },
      G: {
        item: "mekanism:ultimate_induction_cell"
      },
      H: {
        item: "kubejs:polonium_gear"
      },
      I: {
        item: "mekanism:ultimate_induction_provider"
      },
      J: {
        item: "kubejs:lead_gear"
      },
      K: {
        item: "kubejs:plutonium_gear"
      },
      L: {
        item: "fluxnetworks:gargantuan_flux_storage"
      },
      M: {
        item: "kubejs:the_ultimate_gear"
      },
      N: {
        item: "kubejs:uranium_gear"
      },
      O: {
        item: "twilightforest:giant_obsidian"
      },
      P: {
        item: "mekanism:ultimate_induction_provider"
      },
      Q: {
        item: "kubejs:antimatter_gear"
      },
      R: {
        item: "createaddition:creative_energy"
      },
      S: {
        item: "mekanism:ultimate_induction_provider"
      },
      T: {
        item: "twilightforest:giant_cobblestone"
      },
      U: {
        item: "wormhole:creative_energy_cell"
      },
      V: {
        item: "kubejs:bronze_gear"
      },
      W: {
        item: "twilightforest:giant_log"
      }
    },
    result: {
      item: "mekanism:creative_energy_cube",
      nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'
    }
  });
  //#endregion
  //#region - Polonium
  e.remove([{ id: "mekanism:processing/lategame/polonium" }, { id: "mekanism:processing/lategame/polonium_pellet/from_reaction" }]);
  e.custom({
    type: "mekanism:painting",
    chemicalInput: {
      amount: 1000,
      pigment: "mekanism:lime"
    },
    itemInput: {
      ingredient: {
        item: "mekanism:hdpe_pellet"
      }
    },
    output: {
      item: "mekanism:pellet_polonium"
    }
  });
  e.custom({
    type: "mekanism:crystallizing",
    chemicalType: "gas",
    input: {
      amount: 1000,
      gas: "mekanism:polonium"
    },
    output: {
      item: "mekanism:pellet_polonium"
    }
  });
  e.custom({
    type: "mekanism:oxidizing",
    input: {
      ingredient: {
        tag: "forge:pellets/polonium"
      }
    },
    output: {
      amount: 1000,
      gas: "mekanism:polonium"
    }
  });
  //#endregion
  //#region - Plutonium
  e.remove([{ id: "mekanism:processing/lategame/plutonium" }, { id: "mekanism:processing/lategame/plutonium_pellet/from_reaction" }]);
  e.custom({
    type: "mekanism:painting",
    chemicalInput: {
      amount: 1000,
      pigment: "mekanism:aqua"
    },
    itemInput: {
      ingredient: {
        item: "mekanism:hdpe_pellet"
      }
    },
    output: {
      item: "mekanism:pellet_plutonium"
    }
  });
  e.custom({
    type: "mekanism:crystallizing",
    chemicalType: "gas",
    input: {
      amount: 1000,
      gas: "mekanism:plutonium"
    },
    output: {
      item: "mekanism:pellet_plutonium"
    }
  });
  e.custom({
    type: "mekanism:oxidizing",
    input: {
      ingredient: {
        tag: "forge:pellets/plutonium"
      }
    },
    output: {
      amount: 1000,
      gas: "mekanism:plutonium"
    }
  });
  //#endregion
  //#region - Antimatter
  e.remove({ id: "mekanism:processing/lategame/antimatter_pellet/from_gas" });
  e.custom({
    type: "mekanism:crystallizing",
    chemicalType: "gas",
    input: {
      amount: 1000,
      gas: "mekanism:antimatter"
    },
    output: {
      item: "mekanism:pellet_antimatter"
    }
  });
  e.custom({
    type: "mekanism:chemical_infusing",
    leftInput: {
      amount: 1000,
      gas: "mekanism:plutonium"
    },
    output: {
      amount: 1,
      gas: "mekanism:antimatter"
    },
    rightInput: {
      amount: 1000,
      gas: "mekanism:polonium"
    }
  });
  //#endregion
  //#region - Water Vapor
  e.remove({ id: "mekanism:rotary/water_vapor" });
  e.custom({
    type: "mekanism:rotary",
    fluidInput: {
      amount: 1,
      fluid: "minecraft:water"
    },
    fluidOutput: {
      amount: 1,
      fluid: "minecraft:water"
    },
    gasInput: {
      amount: 1,
      gas: "mekanism:water_vapor"
    },
    gasOutput: {
      amount: 1,
      gas: "mekanism:water_vapor"
    }
  });
  //#endregion
  //#region - Water Separation
  e.remove({ id: "mekanism:separator/water" });
  e.custom({
    type: "mekanism:separating",
    input: {
      amount: 2,
      fluid: "minecraft:water"
    },
    leftGasOutput: {
      amount: 2,
      gas: "mekanism:hydrogen"
    },
    rightGasOutput: {
      amount: 1,
      gas: "mekanism:oxygen"
    }
  });
  //#endregion
  //#region - Brine
  e.remove({ id: "mekanism:evaporating/brine" });
  e.custom({
    type: "mekanism:evaporating",
    input: {
      amount: 10,
      fluid: "minecraft:water"
    },
    output: {
      amount: 1,
      fluid: "mekanism:brine"
    }
  });
  //#endregion
  //#region - Basic Control Circuit
  e.remove({ id: "mekanism:control_circuit/basic" });
  e.custom({
    type: "mekanism:metallurgic_infusing",
    chemicalInput: { amount: 10, tag: "mekanism:redstone" },
    itemInput: { ingredient: { tag: "forge:ingots/osmium" } },
    output: { item: "mekanism:basic_control_circuit" }
  });
  //#endregion
  //#region - Enriched Diamond
  e.remove({ id: "mekanism:enriching/enriched/diamond" });
  e.custom({
    type: "mekanism:enriching",
    input: { ingredient: { item: "mekanism:dust_diamond" } },
    output: { item: "mekanism:enriched_diamond" }
  });
  //#endregion
  //#region - Reinforced Alloy
  e.remove({ id: "mekanism:metallurgic_infusing/alloy/reinforced" });
  e.custom({
    type: "mekanism:metallurgic_infusing",
    chemicalInput: { amount: 10, tag: "mekanism:diamond" },
    itemInput: { ingredient: { tag: "mekanism:alloys/infused" } },
    output: { item: "mekanism:alloy_reinforced" }
  });
  //#endregion
  //#region - Atomic Alloy
  e.remove({ id: "mekanism:metallurgic_infusing/alloy/atomic" });
  e.custom({
    type: "mekanism:metallurgic_infusing",
    chemicalInput: { amount: 10, tag: "mekanism:refined_obsidian" },
    itemInput: { ingredient: { tag: "mekanism:alloys/reinforced" } },
    output: { item: "mekanism:alloy_atomic" }
  });
  //#endregion
  //#region - Substrate
  e.remove([{ id: "mekanism:reaction/substrate/water_hydrogen" }, { id: "mekanism:reaction/substrate/water_ethene" }]);
  e.custom({
    type: "mekanism:reaction",
    duration: 100,
    fluidInput: {
      amount: 10,
      fluid: "minecraft:water"
    },
    gasInput: {
      amount: 100,
      gas: "mekanism:hydrogen"
    },
    gasOutput: {
      amount: 100,
      gas: "mekanism:ethene"
    },
    itemInput: {
      amount: 2,
      ingredient: {
        tag: "forge:fuels/bio"
      }
    },
    itemOutput: {
      item: "mekanism:substrate"
    }
  });
  e.custom({
    type: "mekanism:reaction",
    duration: 400,
    energyRequired: 200,
    fluidInput: {
      amount: 200,
      fluid: "minecraft:water"
    },
    gasInput: {
      amount: 100,
      gas: "mekanism:ethene"
    },
    gasOutput: {
      amount: 10,
      gas: "mekanism:oxygen"
    },
    itemInput: {
      ingredient: {
        item: "mekanism:substrate"
      }
    },
    itemOutput: {
      count: 8,
      item: "mekanism:substrate"
    }
  });
  //#endregion
  //#region - Elytra Unit
  e.remove({ id: "mekanism:module_elytra_unit" });
  e.shaped("mekanism:module_elytra_unit", ["ABA", "ACA", "DED"], {
    A: "mekanism:alloy_reinforced",
    B: "minecraft:elytra",
    C: "mekanism:module_base",
    D: "mekanism:pellet_polonium",
    E: "mekanism:pellet_antimatter"
  });
  //#endregion
  //#region - Bow Riser
  e.remove({ id: "mekaweapons:bow_riser" });
  e.shaped("mekaweapons:bow_riser", ["   ", "ABA", "CDC"], {
    A: "mekanism:ultimate_control_circuit",
    B: "mekanism:ingot_steel",
    C: "mekanism:ingot_refined_obsidian",
    D: "kubejs:alloy_creative"
  });
  //#endregion
  //#region - Katana Blade
  e.remove({ id: "mekaweapons:katana_blade" });
  e.shaped("mekaweapons:katana_blade", ["  A", "BA ", "CB "], {
    A: "mekanism:ingot_steel",
    B: "kubejs:alloy_creative",
    C: "mekanism:ingot_refined_obsidian"
  });
  //#endregion
  //#region - Pigment Extraction
  let potting_pigment_extraction = (dye, pigment) => {
    e.custom({
      type: "mekanism:pigment_extracting",
      input: {
        ingredient: {
          tag: dye
        }
      },
      output: {
        amount: 1024,
        pigment: pigment
      }
    });
  };
  potting_pigment_extraction("forge:dyes/black", "mekanism:black");
  potting_pigment_extraction("forge:dyes/blue", "mekanism:blue");
  potting_pigment_extraction("forge:dyes/brown", "mekanism:brown");
  potting_pigment_extraction("forge:dyes/cyan", "mekanism:cyan");
  potting_pigment_extraction("forge:dyes/gray", "mekanism:gray");
  potting_pigment_extraction("forge:dyes/green", "mekanism:green");
  potting_pigment_extraction("forge:dyes/light_blue", "mekanism:light_blue");
  potting_pigment_extraction("forge:dyes/light_gray", "mekanism:light_gray");
  potting_pigment_extraction("forge:dyes/lime", "mekanism:lime");
  potting_pigment_extraction("forge:dyes/magenta", "mekanism:magenta");
  potting_pigment_extraction("forge:dyes/orange", "mekanism:orange");
  potting_pigment_extraction("forge:dyes/pink", "mekanism:pink");
  potting_pigment_extraction("forge:dyes/purple", "mekanism:purple");
  potting_pigment_extraction("forge:dyes/red", "mekanism:red");
  potting_pigment_extraction("forge:dyes/white", "mekanism:white");
  potting_pigment_extraction("forge:dyes/yellow", "mekanism:yellow");
  //#endregion
  //#region - Buds
  let potting_buds = (input, output) => {
    e.custom({
      type: "mekanism:crushing",
      input: {
        ingredient: {
          item: input
        }
      },
      output: {
        item: output
      }
    });
  };
  potting_buds("minecraft:amethyst_cluster", "minecraft:large_amethyst_bud");
  potting_buds("minecraft:large_amethyst_bud", "minecraft:medium_amethyst_bud");
  potting_buds("minecraft:medium_amethyst_bud", "minecraft:small_amethyst_bud");
  potting_buds("alexscaves:sulfur_cluster", "alexscaves:sulfur_bud_large");
  potting_buds("alexscaves:sulfur_bud_large", "alexscaves:sulfur_bud_medium");
  potting_buds("alexscaves:sulfur_bud_medium", "alexscaves:sulfur_bud_small");
  potting_buds("biomesoplenty:rose_quartz_cluster", "biomesoplenty:large_rose_quartz_bud");
  potting_buds("biomesoplenty:large_rose_quartz_bud", "biomesoplenty:medium_rose_quartz_bud");
  potting_buds("biomesoplenty:medium_rose_quartz_bud", "biomesoplenty:small_rose_quartz_bud");
  //#endregion
  //#region - Reset Creative Bin
  e.custom({
    type: "extendedcrafting:shaped_table",
    tier: 1,
    pattern: ["A"],
    key: {
      A: {
        item: "mekanism:creative_bin"
      }
    },
    result: {
      item: "mekanism:creative_bin"
    }
  });
  //#endregion
  //#region - Supermassive QIO Drive
  e.shaped("mekanism:qio_drive_supermassive", ["ABA", "BCB", "ABA"], {
    A: "mekanism:ingot_bronze",
    B: "kubejs:creative_control_circuit",
    C: "mekanism:pellet_antimatter"
  });
  //#endregion
});
//#endregion

//#region - Définition/Suppression/Masquage d'éléments dans JEI
function mekanism() {
  // Mise en place des Eléments à supprimer ou à cacher
  let unused = [
    "mekanism:antiprotonic_nucleosynthesizer",
    "mekanism:boiler_casing",
    "mekanism:boiler_valve",
    "mekanism:chemical_dissolution_chamber",
    "mekanism:chemical_washer",
    "mekanism:dirty_copper",
    "mekanism:dirty_gold",
    "mekanism:dirty_iron",
    "mekanism:dirty_lead",
    "mekanism:dirty_osmium",
    "mekanism:dirty_tin",
    "mekanism:dirty_uranium",
    "mekanism:dust_bronze",
    "mekanism:dust_charcoal",
    "mekanism:electric_bow",
    "mekanism:hdpe_elytra",
    "mekanism:pressure_disperser",
    "mekanism:solar_neutron_activator",
    "mekanism:sps_casing",
    "mekanism:sps_port",
    "mekanism:supercharged_coil",
    "mekanism:superheating_element",
    "mekanismgenerators:control_rod_assembly",
    "mekanismgenerators:deuterium_bucket",
    "mekanismgenerators:electromagnetic_coil",
    "mekanismgenerators:fission_fuel_assembly",
    "mekanismgenerators:fission_reactor_casing",
    "mekanismgenerators:fission_reactor_logic_adapter",
    "mekanismgenerators:fission_reactor_port",
    "mekanismgenerators:fusion_fuel_bucket",
    "mekanismgenerators:fusion_fuel",
    "mekanismgenerators:fusion_fuel",
    "mekanismgenerators:fusion_reactor_controller",
    "mekanismgenerators:fusion_reactor_frame",
    "mekanismgenerators:fusion_reactor_logic_adapter",
    "mekanismgenerators:fusion_reactor_port",
    "mekanismgenerators:hohlraum",
    "mekanismgenerators:laser_focus_matrix",
    "mekanismgenerators:reactor_glass",
    "mekanismgenerators:rotational_complex",
    "mekanismgenerators:saturating_condenser",
    "mekanismgenerators:tritium_bucket",
    "mekanismgenerators:turbine_blade",
    "mekanismgenerators:turbine_casing",
    "mekanismgenerators:turbine_rotor",
    "mekanismgenerators:turbine_vent",
    /deuterium/,
    /fissile_fuel/,
    /fusion_fuel/,
    /heavy_water/,
    /hydrofluoric_acid/,
    /mekanism:clean/,
    /nuclear_waste/,
    /sodium/,
    /spent_nuclear_waste/,
    /sulfur_dioxide/,
    /sulfur_trioxide/,
    /sulfuric_acid/,
    /superheated_sodium/,
    /tritium/,
    /uranium_oxide/,
    /uranium:hexafluoride/,
    "mekanism:hdpe_rod",
    "mekanism:hdpe_sheet",
    "mekanism:hdpe_stick",
    "mekanismgenerators:turbine_valve",
    "mekanism:qio_drive_array",
    "mekanism:qio_dashboard",
    "mekanism:qio_exporter",
    "mekanism:qio_importer",
    "mekanism:qio_redstone_adapter",
    "mekanism:portable_qio_dashboard",
    "mekanism:qio_drive_base",
    "mekanism:qio_drive_hyper_dense",
    "mekanism:qio_drive_time_dilating"
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
  ServerEvents.tags(["item", "block", "gas"], handle_Tags);
  ServerEvents.recipes(handle_Recipes);
}
mekanism();
//#endregion
