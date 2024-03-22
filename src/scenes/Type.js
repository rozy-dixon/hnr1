class Type extends Phaser.Scene {
    constructor() {
        super('typeScene')
    }

    create() {
        // running checks
        console.log('%cTYPE SCENE :^)', "color: #cfd1af")

        this.cameras.main.setBackgroundColor('#FFFFFF')

        // keys
        this.createKeys()

        // temp
        this.add.bitmapText(1, 1, 'HNR1', 'ABCDEFGHIJKLMNOPQRSTUVWX', 14).setOrigin(0)
        this.add.bitmapText(1, 15, 'HNR1', 'Y Z,./;', 14).setOrigin(0)
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) { 
            console.log('space')
        }
    }

    createKeys() {
        this.Q = this.add.sprite((29*0)+1, height-(30*4)-1, 'alphabet', 16).setOrigin(0, 0)             // Q
        this.W = this.add.sprite((29*1)+1, height-(30*4)-1, 'alphabet', 22).setOrigin(0, 0)             // W
        this.E = this.add.sprite((29*2)+1, height-(30*4)-1, 'alphabet', 4).setOrigin(0, 0)              // E
        this.R = this.add.sprite((29*3)+1, height-(30*4)-1, 'alphabet', 17).setOrigin(0, 0)             // R
        this.T = this.add.sprite((29*4)+1, height-(30*4)-1, 'alphabet', 19).setOrigin(0, 0)             // T
        this.Y = this.add.sprite((29*5)+1, height-(30*4)-1, 'alphabet', 24).setOrigin(0, 0)             // Y
        this.U = this.add.sprite((29*6)+1, height-(30*4)-1, 'alphabet', 20).setOrigin(0, 0)             // U
        this.I = this.add.sprite((29*7)+1, height-(30*4)-1, 'alphabet', 8).setOrigin(0, 0)              // I
        this.O = this.add.sprite((29*8)+1, height-(30*4)-1, 'alphabet', 14).setOrigin(0, 0)             // O
        this.P = this.add.sprite((29*9)+1, height-(30*4)-1, 'alphabet', 15).setOrigin(0, 0)             // P
        this.A = this.add.sprite((29*0)+1, height-(30*3)-1, 'alphabet', 0).setOrigin(0, 0)              // A
        this.S = this.add.sprite((29*1)+1, height-(30*3)-1, 'alphabet', 18).setOrigin(0, 0)             // S
        this.D = this.add.sprite((29*2)+1, height-(30*3)-1, 'alphabet', 3).setOrigin(0, 0)              // D
        this.F = this.add.sprite((29*3)+1, height-(30*3)-1, 'alphabet', 5).setOrigin(0, 0)              // F
        this.G = this.add.sprite((29*4)+1, height-(30*3)-1, 'alphabet', 6).setOrigin(0, 0)              // G
        this.H = this.add.sprite((29*5)+1, height-(30*3)-1, 'alphabet', 7).setOrigin(0, 0)              // H
        this.J = this.add.sprite((29*6)+1, height-(30*3)-1, 'alphabet', 9).setOrigin(0, 0)              // J
        this.K = this.add.sprite((29*7)+1, height-(30*3)-1, 'alphabet', 10).setOrigin(0, 0)             // K
        this.L = this.add.sprite((29*8)+1, height-(30*3)-1, 'alphabet', 11).setOrigin(0, 0)             // L
        this.SEMICOLON = this.add.sprite((29*9)+1, height-(30*3)-1, 'punctuation', 3).setOrigin(0, 0)   // SEMICOLON
        this.Z = this.add.sprite((29*0)+1, height-(30*2), 'alphabet', 25).setOrigin(0, 0)               // Z
        this.X = this.add.sprite((29*1)+1, height-(30*2), 'alphabet', 23).setOrigin(0, 0)               // X
        this.C = this.add.sprite((29*2)+1, height-(30*2), 'alphabet', 2).setOrigin(0, 0)                // C
        this.V = this.add.sprite((29*3)+1, height-(30*2), 'alphabet', 21).setOrigin(0, 0)               // V
        this.B = this.add.sprite((29*4)+1, height-(30*2), 'alphabet', 1).setOrigin(0, 0)                // B
        this.N = this.add.sprite((29*5)+1, height-(30*2), 'alphabet', 13).setOrigin(0, 0)               // N
        this.M = this.add.sprite((29*6)+1, height-(30*2), 'alphabet', 12).setOrigin(0, 0)               // M
        this.COMMA = this.add.sprite((29*7)+1, height-(30*2), 'punctuation', 0).setOrigin(0, 0)         // COMMA
        this.PERIOD = this.add.sprite((29*8)+1, height-(30*2), 'punctuation', 1).setOrigin(0, 0)        // PERIOD
        this.SLASH = this.add.sprite((29*9)+1, height-(30*2), 'punctuation', 2).setOrigin(0, 0)         // SLASH
        this.SPACE = this.add.sprite(1, height-(30*1), 'space').setOrigin(0, 0)                         // SPACE
    }
}