// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

LootJS.modifiers((event) => {
    event.addBlockLootModifier("samurai_dynasty:jade_ore").replaceLoot("samurai_dynasty:jade", "goety:jade", true)
})