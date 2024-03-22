class Load extends Phaser.Scene {
    constructor() {
        super('LoadScene')
    }

    preload() {
        // loading bar

        // load fonts
        this.load.bitmapFont('HNR1', './assets/fonts/HNR1.png', './assets/fonts/HNR1.xml')
        this.load.bitmapFont('HNR2', './assets/fonts/HNR2.png', './assets/fonts/HNR2.xml')
        this.load.bitmapFont('HNR3', './assets/fonts/HNR3.png', './assets/fonts/HNR3.xml')
        // load images
        this.load.image('space', 'assets/images/space.png')
        // load spritesheets
        this.load.spritesheet('alphabet', 'assets/spritesheets/alphabet.png', { frameWidth: 28, frameHeight: 29 })
        this.load.spritesheet('numbers', 'assets/spritesheets/numbers.png', { frameWidth: 28, frameHeight: 29 })
        this.load.spritesheet('punctuation', 'assets/spritesheets/punctuation.png', { frameWidth: 28, frameHeight: 29 })
    }

    create() {
        // running checks
        console.log('%cLOAD SCENE :^)', "color: #cfd1af")
        window.localStorage ? console.log('%cLocal storage supported by this cat! (^･･^=)~', "color: #91aa86") : console.log('%cLocal storage not supported by this cat ~(=^･･^)', "color: #c088ae")
        // moving through
        this.scene.start('typeScene')
    }
}