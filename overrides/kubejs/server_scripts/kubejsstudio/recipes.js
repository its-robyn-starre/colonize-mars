// kubejsstudio recipes; re-apply merges by recipe id
ServerEvents.generateData('after_mods', event => {
    event.json('kubejsstudio:recipe/radio_salvage', {"type":"farmersdelight:cutting","ingredients":[{"item":"ad_astra:radio"}],"tool":{"tag":"minecraft:pickaxes"},"result":[{"item":{"count":4,"id":"forestry:iron_gear"}},{"item":{"count":2,"id":"immersiveengineering:plate_steel"}},{"item":{"count":3,"id":"immersiveengineering:plate_steel"},"chance":0.2},{"item":{"count":2,"id":"immersiveengineering:wirecoil_copper"}}]})
    event.json('immersiveengineering:recipe/crafting/craftingtable', {"type":"minecraft:crafting_shaped","category":"misc","pattern":["##","##"],"key":{"#":{"item":"minecraft:nether_bricks"}},"result":{"id":"immersiveengineering:craftingtable","count":1}})
    event.json('immersiveengineering:recipe/crafting/basic_engineering', {"type":"minecraft:crafting_shaped","category":"misc","pattern":["#A","A#"],"key":{"#":{"tag":"c:plates/steel"},"A":{"item":"minecraft:nether_bricks"}},"result":{"id":"immersiveengineering:basic_engineering","count":4}})
    event.json('forestry:recipe/clockwork_engine', {"type":"minecraft:crafting_shaped","category":"misc","pattern":[" # ","ABA","CBC"],"key":{"#":{"tag":"c:glass_blocks"},"A":{"item":"immersiveengineering:wirecoil_copper"},"B":{"item":"forestry:iron_gear"},"C":{"item":"minecraft:nether_bricks"}},"result":{"id":"forestry:clockwork_engine","count":1}})
    event.json('excessive_utilities:recipe/furnace', {"type":"minecraft:crafting_shaped","category":"misc","pattern":["###","#A#","###"],"key":{"#":{"tag":"c:bricks"},"A":{"item":"immersiveengineering:basic_engineering"}},"result":{"id":"excessive_utilities:furnace","count":1}})
    event.json('kubejsstudio:recipe/seared_bricks', {"type":"minecraft:smelting","ingredient":{"item":"minecraft:nether_brick"},"result":{"id":"tinker_foundry:seared_brick"},"experience":0.1,"cookingtime":200})
})
ServerEvents.recipes(event => {
    event.shapeless(Item.of('minecraft:nether_brick', 8), ['ad_astra:mars_sand', 'minecraft:potato', 'minecraft:water_bucket']).id('kubejsstudio:starcrete_bricks')
})
