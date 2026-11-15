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
