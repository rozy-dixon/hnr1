// making myself not miserable
'use strict'

// game config
let config = {
    parent: 'HNR1',
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    width: 291,
    height: 181,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    zoom: Math.min((window.innerHeight/181)-.1, (window.innerWidth/291)-.1),
    scene: [ Load, Type, Keys ]
}

// game variables
const game = new Phaser.Game(config)
// convenience variables
const centerX = game.config.width/2
const centerY = game.config.height/2
const width = game.config.width
const height = game.config.height
// key variables
let key1, key2, key3, key4, key5, key6, key7, key8, key9, key0
let keyQ, keyW, keyE, keyR, keyT, keyY, keyU, keyI, keyO, keyP
let keyA, keyS, keyD, keyF, keyG, keyH, keyJ, keyK, keyL, keySEMICOLON
let keyZ, keyX, keyC, keyV, keyB, keyN, keyM, keyCOMMA, keyPERIOD, keySLASH
let keySPACE, keySHIFT, keyTAB, keyRETURN