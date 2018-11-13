export class PopupScene extends Phaser.Scene {
    constructor() {
        super({ key:'PopupScene', active: true });
    }
    
    preload() {
        this.load.image('popup', 'assets/popup.png');
        this.load.image('cancel', 'assets/cancel.png');
        this.load.image('reset', 'assets/reset.png');
    }

    create() {
        this.scene.moveDown();
        this.popup = this.add.sprite(320, 240, 'popup').setScale(0.4);
        this.cancelButton = this.add.sprite(440, 160, 'cancel').setScale(0.1);
        this.resetButton = this.add.sprite(320, 300, 'reset').setScale(0.05);

        this.cancelButton.setInteractive({ setHandCursor: true })
        .on('pointerdown', () => this.cancelButtonClick());

        this.resetButton.setInteractive({ setHandCursor: true })
        .on('pointerdown', () => this.resetButtonClick());
    }

    cancelButtonClick() {
        this.scene.resume('MainScene');
        this.scene.moveDown();
    }

    resetButtonClick() {
        this.scene.run('MainScene');
    }
}