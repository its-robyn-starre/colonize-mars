// kubejsstudio recipes; re-apply merges by recipe id
ServerEvents.generateData('after_mods', event => {
    event.json('kubejsstudio:recipe/radio_salvage', {"type":"farmersdelight:cutting","ingredients":[{"item":"ad_astra:radio"}],"tool":{"tag":"minecraft:pickaxes"},"result":[{"item":{"count":4,"id":"minecraft:iron_nugget"}},{"item":{"count":2,"id":"immersiveengineering:plate_steel"}},{"item":{"count":2,"id":"immersiveengineering:plate_steel"},"chance":0.2},{"item":{"count":3,"id":"minecraft:iron_nugget"},"chance":0.1}]})
    event.json('immersiveengineering:recipe/crafting/craftingtable', {"type":"minecraft:crafting_shaped","category":"misc","pattern":["##","##"],"key":{"#":{"item":"minecraft:nether_bricks"}},"result":{"id":"immersiveengineering:craftingtable","count":1}})
    event.json('immersiveengineering:recipe/crafting/basic_engineering', {"type":"minecraft:crafting_shaped","category":"misc","pattern":["#A","A#"],"key":{"#":{"tag":"c:plates/steel"},"A":{"item":"minecraft:nether_bricks"}},"result":{"id":"immersiveengineering:basic_engineering","count":4}})
})
ServerEvents.recipes(event => {
    event.shapeless(Item.of('minecraft:nether_brick', 8), ['ad_astra:mars_sand', 'minecraft:potato', 'minecraft:water_bucket']).id('kubejsstudio:starcrete_bricks')
})
