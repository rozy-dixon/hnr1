class Type extends Phaser.Scene {
    constructor() {
        super('typeScene')
    }

    create() {
        // running checks
        console.log('%cTYPE SCENE :^)', "color: #cfd1af")

        // temp, make the pixels easier to see
        this.cameras.main.setBackgroundColor('#FFFFFF')

        // keys
        this.createKeys()

        // defaults
        this.map = 'HNR1'
        this.posX = 1
        this.posY = 1
    }

    update() {
        // slight difference font key
        switch(Math.floor(Math.random() * 3)) {
            case(0): this.map = 'HNR1'
                break
            case(1): this.map = 'HNR2'
                break
            case(2): this.map = 'HNR3'
                break
        }

        // typing position config
        if(this.posX == 289) { this.posY += 14; this.posX = 1 }
        if(this.posX == 145 && this.posY == 43) {

        } else {
            this.type()
        }
        this.untype()
    }

    press(key) {
        key.y++
    }

    release(key) {
        key.y--
    }

    untype() {
        switch(true) {
            case Phaser.Input.Keyboard.JustUp(keyA): this.release(this.A)
                break
            case Phaser.Input.Keyboard.JustUp(keyB): this.release(this.B)
                break
            case Phaser.Input.Keyboard.JustUp(keyC): this.release(this.C)
                break
            case Phaser.Input.Keyboard.JustUp(keyD): this.release(this.D)
                break
            case Phaser.Input.Keyboard.JustUp(keyE): this.release(this.E)
                break
            case Phaser.Input.Keyboard.JustUp(keyF): this.release(this.F)
                break
            case Phaser.Input.Keyboard.JustUp(keyG): this.release(this.G)
                break
            case Phaser.Input.Keyboard.JustUp(keyH): this.release(this.H)
                break
            case Phaser.Input.Keyboard.JustUp(keyI): this.release(this.I)
                break
            case Phaser.Input.Keyboard.JustUp(keyJ): this.release(this.J)
                break
            case Phaser.Input.Keyboard.JustUp(keyK): this.release(this.K)
                break
            case Phaser.Input.Keyboard.JustUp(keyL): this.release(this.L)
                break
            case Phaser.Input.Keyboard.JustUp(keyM): this.release(this.M)
                break
            case Phaser.Input.Keyboard.JustUp(keyN): this.release(this.N)
                break
            case Phaser.Input.Keyboard.JustUp(keyO): this.release(this.O)
                break
            case Phaser.Input.Keyboard.JustUp(keyP): this.release(this.P)
                break
            case Phaser.Input.Keyboard.JustUp(keyQ): this.release(this.Q)
                break
            case Phaser.Input.Keyboard.JustUp(keyR): this.release(this.R)
                break
            case Phaser.Input.Keyboard.JustUp(keyS): this.release(this.S)
                break
            case Phaser.Input.Keyboard.JustUp(keyT): this.release(this.T)
                break
            case Phaser.Input.Keyboard.JustUp(keyU): this.release(this.U)
                break
            case Phaser.Input.Keyboard.JustUp(keyV): this.release(this.V)
                break
            case Phaser.Input.Keyboard.JustUp(keyW): this.release(this.W)
                break
            case Phaser.Input.Keyboard.JustUp(keyX): this.release(this.X)
                break
            case Phaser.Input.Keyboard.JustUp(keyY): this.release(this.Y)
                break
            case Phaser.Input.Keyboard.JustUp(keyZ): this.release(this.Z)
                break
            case Phaser.Input.Keyboard.JustUp(keySPACE): this.release(this.SPACE)
                break
            case Phaser.Input.Keyboard.JustUp(keyPERIOD): this.release(this.PERIOD)
                break
            case Phaser.Input.Keyboard.JustUp(keyCOMMA): this.release(this.COMMA)
                break
            case Phaser.Input.Keyboard.JustUp(keySLASH): this.release(this.SLASH)
                break
            case Phaser.Input.Keyboard.JustUp(keySEMICOLON): this.release(this.SEMICOLON)
                break
        }
    }

    type() {
        switch(true) {
            case Phaser.Input.Keyboard.JustDown(keyA):
                this.add.bitmapText(this.posX, this.posY, this.map, 'A', 14).setOrigin(0)
                this.posX += 12
                this.press(this.A)
                break
            case Phaser.Input.Keyboard.JustDown(keyB):
                this.add.bitmapText(this.posX, this.posY, this.map, 'B', 14).setOrigin(0)
                this.posX += 12
                this.press(this.B)
                break
            case Phaser.Input.Keyboard.JustDown(keyC):
                this.add.bitmapText(this.posX, this.posY, this.map, 'C', 14).setOrigin(0)
                this.posX += 12
                this.press(this.C)
                break
            case Phaser.Input.Keyboard.JustDown(keyD):
                this.add.bitmapText(this.posX, this.posY, this.map, 'D', 14).setOrigin(0)
                this.posX += 12
                this.press(this.D)
                break
            case Phaser.Input.Keyboard.JustDown(keyE):
                this.add.bitmapText(this.posX, this.posY, this.map, 'E', 14).setOrigin(0)
                this.posX += 12
                this.press(this.E)
                break
            case Phaser.Input.Keyboard.JustDown(keyF):
                this.add.bitmapText(this.posX, this.posY, this.map, 'F', 14).setOrigin(0)
                this.posX += 12
                this.press(this.F)
                break
            case Phaser.Input.Keyboard.JustDown(keyG):
                this.add.bitmapText(this.posX, this.posY, this.map, 'G', 14).setOrigin(0)
                this.posX += 12
                this.press(this.G)
                break
            case Phaser.Input.Keyboard.JustDown(keyH):
                this.add.bitmapText(this.posX, this.posY, this.map, 'H', 14).setOrigin(0)
                this.posX += 12
                this.press(this.H)
                break
            case Phaser.Input.Keyboard.JustDown(keyI):
                this.add.bitmapText(this.posX, this.posY, this.map, 'I', 14).setOrigin(0)
                this.posX += 12
                this.press(this.I)
                break
            case Phaser.Input.Keyboard.JustDown(keyJ):
                this.add.bitmapText(this.posX, this.posY, this.map, 'J', 14).setOrigin(0)
                this.posX += 12
                this.press(this.J)
                break
            case Phaser.Input.Keyboard.JustDown(keyK):
                this.add.bitmapText(this.posX, this.posY, this.map, 'K', 14).setOrigin(0)
                this.posX += 12
                this.press(this.K)
                break
            case Phaser.Input.Keyboard.JustDown(keyL):
                this.add.bitmapText(this.posX, this.posY, this.map, 'L', 14).setOrigin(0)
                this.posX += 12
                this.press(this.L)
                break
            case Phaser.Input.Keyboard.JustDown(keyM):
                this.add.bitmapText(this.posX, this.posY, this.map, 'M', 14).setOrigin(0)
                this.posX += 12
                this.press(this.M)
                break
            case Phaser.Input.Keyboard.JustDown(keyN):
                this.add.bitmapText(this.posX, this.posY, this.map, 'N', 14).setOrigin(0)
                this.posX += 12
                this.press(this.N)
                break
            case Phaser.Input.Keyboard.JustDown(keyO):
                this.add.bitmapText(this.posX, this.posY, this.map, 'O', 14).setOrigin(0)
                this.posX += 12
                this.press(this.O)
                break
            case Phaser.Input.Keyboard.JustDown(keyP):
                this.add.bitmapText(this.posX, this.posY, this.map, 'P', 14).setOrigin(0)
                this.posX += 12
                this.press(this.P)
                break
            case Phaser.Input.Keyboard.JustDown(keyQ):
                this.add.bitmapText(this.posX, this.posY, this.map, 'Q', 14).setOrigin(0)
                this.posX += 12
                this.press(this.Q)
                break
            case Phaser.Input.Keyboard.JustDown(keyR):
                this.add.bitmapText(this.posX, this.posY, this.map, 'R', 14).setOrigin(0)
                this.posX += 12
                this.press(this.R)
                break
            case Phaser.Input.Keyboard.JustDown(keyS):
                this.add.bitmapText(this.posX, this.posY, this.map, 'S', 14).setOrigin(0)
                this.posX += 12
                this.press(this.S)
                break
            case Phaser.Input.Keyboard.JustDown(keyT):
                this.add.bitmapText(this.posX, this.posY, this.map, 'T', 14).setOrigin(0)
                this.posX += 12
                this.press(this.T)
                break
            case Phaser.Input.Keyboard.JustDown(keyU):
                this.add.bitmapText(this.posX, this.posY, this.map, 'U', 14).setOrigin(0)
                this.posX += 12
                this.press(this.U)
                break
            case Phaser.Input.Keyboard.JustDown(keyV):
                this.add.bitmapText(this.posX, this.posY, this.map, 'V', 14).setOrigin(0)
                this.posX += 12
                this.press(this.V)
                break
            case Phaser.Input.Keyboard.JustDown(keyW):
                this.add.bitmapText(this.posX, this.posY, this.map, 'W', 14).setOrigin(0)
                this.posX += 12
                this.press(this.W)
                break
            case Phaser.Input.Keyboard.JustDown(keyX):
                this.add.bitmapText(this.posX, this.posY, this.map, 'X', 14).setOrigin(0)
                this.posX += 12
                this.press(this.X)
                break
            case Phaser.Input.Keyboard.JustDown(keyY):
                this.add.bitmapText(this.posX, this.posY, this.map, 'Y', 14).setOrigin(0)
                this.posX += 12
                this.press(this.Y)
                break
            case Phaser.Input.Keyboard.JustDown(keyZ):
                this.add.bitmapText(this.posX, this.posY, this.map, 'Z', 14).setOrigin(0)
                this.posX += 12
                this.press(this.Z)
                break
            case Phaser.Input.Keyboard.JustDown(keySPACE):
                this.add.bitmapText(this.posX, this.posY, this.map, ' ', 14).setOrigin(0)
                this.posX += 12
                this.press(this.SPACE)
                break
            case Phaser.Input.Keyboard.JustDown(keyPERIOD):
                this.add.bitmapText(this.posX, this.posY, this.map, '.', 14).setOrigin(0)
                this.posX += 12
                this.press(this.PERIOD)
                break
            case Phaser.Input.Keyboard.JustDown(keyCOMMA):
                this.add.bitmapText(this.posX, this.posY, this.map, ',', 14).setOrigin(0)
                this.posX += 12
                this.press(this.COMMA)
                break
            case Phaser.Input.Keyboard.JustDown(keySLASH):
                this.add.bitmapText(this.posX, this.posY, this.map, '/', 14).setOrigin(0)
                this.posX += 12
                this.press(this.SLASH)
                break
            case Phaser.Input.Keyboard.JustDown(keySEMICOLON):
                this.add.bitmapText(this.posX, this.posY, this.map, ';', 14).setOrigin(0)
                this.posX += 12
                this.press(this.SEMICOLON)
                break
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

    bitmapCheck() {
        this.add.bitmapText(1, 1, 'HNR1', 'ABCDEFGHIJKLMNOPQRSTUVWX', 14).setOrigin(0)
        this.add.bitmapText(1, 15, 'HNR1', 'Y Z,./;', 14).setOrigin(0)
    }
}