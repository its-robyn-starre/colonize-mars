// kubejsstudio custom: kubejsstudio:radio_salvage
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/radio_salvage',
      {
        "type": "farmersdelight:cutting",
        "ingredients": [{"item":"ad_astra:radio"}],
        "tool": {"tag":"minecraft:pickaxes"},
        "result": [
          {
            "item": {"count":6,"id":"forestry:iron_gear"},
            "chance": 100.0
          },
          {
            "item": {"count":1,"id":"create:transmitter"},
            "chance": 100.0
          },
          {
            "item": {"count":12,"id":"immersiveengineering:plate_iron"},
            "chance": 100.0
          }
        ]
      }
    )
})

// kubejsstudio custom: kubejsstudio:caminite_alloy
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/caminite_alloy',
      {
        "type": "immersiveengineering:alloy",
        "input0": {"basePredicate":{"item":"minecraft:bone_meal"},"count":1},
        "input1": {"tag":"c:dusts/salt"},
        "result": {"basePredicate":{"item":"embers:caminite_blend"},"count":8}
      }
    )
})
// kubejsstudio custom: kubejsstudio:stone_to_gravel
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/stone_to_gravel',
      {
        "type": "embers:excavation",
        "chance": 0.9,
        "max_height": 2147483647,
        "output": {"id":"minecraft:gravel"},
        "required_block": {"amount":5,"block_tag":"ad_astra:mars_stone_replaceables"},
        "weight": 50
      }
    )
})
// kubejsstudio custom: kubejsstudio:brick_melting
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/brick_melting',
      {
        "type": "modernfoundry:melting",
        "ingredient": {"tag":"c:bricks/nether"},
        "result": {"amount":90,"fluid":"modernfoundry:molten_clay"},
        "temperature": 600,
        "time": 57
      }
    )
})
// kubejsstudio custom: modernfoundry:smeltery/melting/clay/brick
ServerEvents.generateData('after_mods', event => {
    event.json(
      'modernfoundry:recipe/smeltery/melting/clay/brick',
      {
        "type": "modernfoundry:melting",
        "id": "modernfoundry:smeltery/melting/clay/brick",
        "ingredient": [
          {"item":"minecraft:brick"},
          {"item":"minecraft:nether_brick"},
          {"tag":"minecraft:decorated_pot_sherds"}
        ],
        "result": {"amount":250,"fluid":"modernfoundry:molten_clay"},
        "temperature": 450,
        "time": 48
      }
    )
})
// kubejsstudio custom: kubejsstudio:lightbulb_casting
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/lightbulb_casting',
      {
        "type": "modernfoundry:casting_table",
        "id": "kubejsstudio:lightbulb_casting",
        "cast": {"tag":"c:nuggets/iron"},
        "cast_consumed": true,
        "cooling_time": 83,
        "fluid": {"amount":250,"fluid":"modernfoundry:molten_glass"},
        "result": "immersiveengineering:light_bulb"
      }
    )
})
// kubejsstudio custom: modernfoundry:smeltery/casting/seared/stone/block_from_clay
ServerEvents.generateData('after_mods', event => {
    event.json(
      'modernfoundry:recipe/smeltery/casting/seared/stone/block_from_clay',
      {
        "type": "modernfoundry:casting_basin",
        "id": "modernfoundry:smeltery/casting/seared/stone/block_from_clay",
        "cast": [{"tag":"c:stone"},{"item":"ad_astra:mars_stone"}],
        "cast_consumed": true,
        "cooling_time": 113,
        "fluid": {"amount":500,"tag":"modernfoundry:molten_clay"},
        "result": "modernfoundry:seared_stone"
      }
    )
})
// kubejsstudio custom: kubejsstudio:sealed_planks_daisy
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/sealed_planks_daisy',
      {
        "type": "botania:pure_daisy",
        "input": {"type":"block","block":"embers:dwarven_oil_block"},
        "output": {"name":"embers:sealed_planks"}
      }
    )
})
// kubejsstudio custom: embers:mixing/dwarven_oil_steam
ServerEvents.generateData('after_mods', event => {
    event.json(
      'embers:recipe/mixing/dwarven_oil_steam',
      {
        "type": "embers:mixing",
        "inputs": [
          {"amount":5,"fluid":"modernfoundry:liquid_soul"},
          {"amount":20,"tag":"c:steam"}
        ],
        "output": {"amount":10,"fluid":"embers:dwarven_oil"}
      }
    )
})
// kubejsstudio custom: kubejsstudio:mycelite_from_rotten
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/mycelite_from_rotten',
      {
        "type": "kubejs:shapeless",
        "result": {"id":"botania:metamorphic_fungal_cobblestone","count":1},
        "ingredients": [
          {"item":"ad_astra:conglomerate"},
          {"item":"embers:caminite_blend"},
          [
            {"item":"farmersdelight:rotten_tomato"},
            {"item":"minecraft:poisonous_potato"}
          ]
        ],
        "_kubejs_changed_marker": {
          "source": "server_scripts:kubejsstudio/recipes.js",
          "line": 28
        }
      }
    )
})
