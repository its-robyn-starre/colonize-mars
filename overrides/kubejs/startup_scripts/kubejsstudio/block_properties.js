// kubejsstudio item/block properties; re-apply merges by id
BlockEvents.modification(event => {
    event.modify('supplementaries:cannonball', m => { m.soundType = 'stone' })
})
