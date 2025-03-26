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
    "mekanism:hdpe_sheet"
  ]
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
mekanism()
//#endregion

//#region - Crafts
ServerEvents.recipes(e => {
  //#region - Removed Crafts
  e.remove([
    { id: "mekanism:enriching/charcoal_dust" },
    { id: "mekanism:infusion_conversion/carbon/from_charcoal" }
  ])
  //#endregion
  //#region - Creative Solar Panel
  e.shaped("solarpanels:creative_solar_element", ["AAA", "BBB", "CCC"], {
    A: "minecraft:magenta_stained_glass_pane",
    B: "kubejs:crystal_enderite",
    C: "extendedcrafting:ender_star"
  })
  e.shaped("solarpanels:creative_energy_tablet", ["ABA", "CDC", "ABA"], {
    A: "extendedcrafting:flux_star",
    B: "kubejs:antimatter_plate",
    C: "kubejs:the_ultimate_gear",
    D: "solarpanels:photonic_energy_tablet"
  })
  e.shaped("solarpanels:creative_solar_panel", ["AAA", "BCB", "DED"], {
    A: "solarpanels:creative_solar_element",
    B: "extendedcrafting:the_ultimate_ingot",
    C: "solarpanels:photonic_solar_panel",
    D: "extendedcrafting:the_ultimate_catalyst",
    E: "solarpanels:creative_energy_tablet"
  })
  //#endregion
  //#region - Creative Contraptions
  let potting = (output, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W) => {
    e.custom({
      type: "extendedcrafting:shaped_table",
      tier: 4,
      pattern: [
        "AAAABAAAA",
        "ACDEFEDCA",
        "ADGHIHGDA",
        "AJKLMLKNA",
        "BOPQRQSTB",
        "AJKLMLKNA",
        "ADGHUHGDA",
        "ACDVWVDCA",
        "AAAABAAAA"
      ],
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
    })
  }
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
  )
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
  )
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
  )
  //#endregion
  //#region - Creative Energy Cube
  e.custom({
    type: "extendedcrafting:shaped_table",
    tier: 4,
    pattern: [
      "AAAABAAAA",
      "ACDEFEDCA",
      "ADGHIHGDA",
      "AJKLMLKNA",
      "BOPQRQSTB",
      "AJKLMLKNA",
      "ADGHUHGDA",
      "ACDVWVDCA",
      "AAAABAAAA"
    ],
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
  })
  //#endregion
  //#region - Polonium
  e.remove([
    { id: "mekanism:processing/lategame/polonium" },
    { id: "mekanism:processing/lategame/polonium_pellet/from_reaction" }
  ])
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
  })
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
  })
  //#endregion
  //#region - Plutonium
  e.remove([
    { id: "mekanism:processing/lategame/plutonium" },
    { id: "mekanism:processing/lategame/plutonium_pellet/from_reaction" }
  ])
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
  })
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
  })
  //#endregion
  //#region - Antimatter
  e.remove({ id: "modfart:chemical_infusing/antimatter" })
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
  })
  //#endregion
  //#region - Water Vapor
  e.remove({ id: "mekanism:rotary/water_vapor" })
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
  })
  //#endregion
  //#region - Water Separation
  e.remove({ id: "mekanism:separator/water" })
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
  })
  //#endregion
  //#region - Brine
  e.remove({ id: "mekanism:evaporating/brine" })
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
  })
  //#endregion
  //#region - Basic Control Circuit
  e.remove({ id: "mekanism:control_circuit/basic" })
  e.custom({
    type: "mekanism:metallurgic_infusing",
    chemicalInput: { amount: 10, tag: "mekanism:redstone" },
    itemInput: { ingredient: { tag: "forge:ingots/osmium" } },
    output: { item: "mekanism:basic_control_circuit" }
  })
  //#endregion
  //#region - Enriched Diamond
  e.remove({ id: "mekanism:enriching/enriched/diamond" })
  e.custom({
    type: "mekanism:enriching",
    input: { ingredient: { item: "mekanism:dust_diamond" } },
    output: { item: "mekanism:enriched_diamond" }
  })
  //#endregion
  //#region - Reinforced Alloy
  e.remove({ id: "mekanism:metallurgic_infusing/alloy/reinforced" })
  e.custom({
    type: "mekanism:metallurgic_infusing",
    chemicalInput: { amount: 10, tag: "mekanism:diamond" },
    itemInput: { ingredient: { tag: "mekanism:alloys/infused" } },
    output: { item: "mekanism:alloy_reinforced" }
  })
  //#endregion
  //#region - Atomic Alloy
  e.remove({ id: "mekanism:metallurgic_infusing/alloy/atomic" })
  e.custom({
    type: "mekanism:metallurgic_infusing",
    chemicalInput: { amount: 10, tag: "mekanism:refined_obsidian" },
    itemInput: { ingredient: { tag: "mekanism:alloys/reinforced" } },
    output: { item: "mekanism:alloy_atomic" }
  })
  //#endregion
  //#region - Substrate
  e.remove([
    { id: "mekanism:reaction/substrate/water_hydrogen" },
    { id: "mekanism:reaction/substrate/water_ethene" }
  ])
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
  })
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
  })
  //#endregion
  //#region - Elytra Unit
  e.remove({ id: "mekanism:module_elytra_unit" })
  e.shaped("mekanism:module_elytra_unit", ["ABA", "ACA", "DED"], {
    A: "mekanism:alloy_reinforced",
    B: "minecraft:elytra",
    C: "mekanism:module_base",
    D: "mekanism:pellet_polonium",
    E: "mekanism:pellet_antimatter"
  })
  //#endregion
  //#region - Bow Riser
  e.remove({ id: "mekaweapons:bow_riser" })
  e.shaped("mekaweapons:bow_riser", ["   ", "ABA", "CDC"], {
    A: "mekanism:ultimate_control_circuit",
    B: "mekanism:ingot_steel",
    C: "mekanism:ingot_refined_obsidian",
    D: "kubejs:alloy_creative"
  })
  //#endregion
  //#region - Katana Blade
  e.remove({ id: "mekaweapons:katana_blade" })
  e.shaped("mekaweapons:katana_blade", ["  A", "BA ", "CB "], {
    A: "mekanism:ingot_steel",
    B: "kubejs:alloy_creative",
    C: "mekanism:ingot_refined_obsidian"
  })
  //#endregion
})
//#endregion

//#region - Tags
ServerEvents.tags(["item", "block"], e => {
  e.add("c:pickaxes", "mekanism:meka_tool")
  e.add("forge:tools/pickaxes", "mekanism:meka_tool")
  e.add("minecraft:pickaxes", "mekanism:meka_tool")
  e.add("stellarity:tools/pickaxes", "mekanism:meka_tool")
})
//#endregion
