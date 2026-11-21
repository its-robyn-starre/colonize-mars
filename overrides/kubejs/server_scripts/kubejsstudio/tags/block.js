// kubejsstudio block tags; re-apply merges by tag id
ServerEvents.tags('block', event => {
    event.add('minecraft:dirt', 'botania:metamorphic_fungal_cobblestone', 'botania:metamorphic_fungal_stone')
})
