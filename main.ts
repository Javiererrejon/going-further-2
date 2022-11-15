controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.over(true)
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`background`)
mySprite = sprites.create(assets.image`truck2`, SpriteKind.Player)
mySprite.ay = 500
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
animation.runImageAnimation(
mySprite,
assets.animation`truck3 animated`,
100,
true
)
