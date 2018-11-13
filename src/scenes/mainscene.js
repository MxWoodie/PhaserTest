export class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene', active: true });
    }

    preload() {
        this.load.image('bgday', 'assets/background_green.png');
        this.load.image('bgnight', 'assets/background_dark.png');
        this.load.image('plusbutton', 'assets/button_plus.png');
        this.load.image('minusbutton', 'assets/button_minus.png');
        this.load.image('dude', 'assets/dude.png');
        this.load.image('gallery', 'assets/gallery.png');
        this.load.image('menu', 'assets/menu.png');
    }

    create() {
        this.scene.moveUp();
        this.background1 = this.add.sprite(0, 0, 'bgday');
        this.background2 = this.add.sprite(0, 0, 'bgnight').setDepth(-1);
        this.plusbutton = this.add.sprite(35, 450, 'plusbutton').setDepth(4).setScale(2);
        this.minusbutton = this.add.sprite(100, 450, 'minusbutton').setDepth(4).setScale(2);
        this.dude = this.add.sprite(450, 300, 'dude').setDepth(3);
        this.galleryButton = this.add.sprite(500, 50, 'gallery').setDepth(4).setScale(0.15);
        this.menuButton = this.add.sprite(600, 50, 'menu').setDepth(4).setScale(0.05);
        this.countText = this.add.text(50, 30, '').setDepth(4);
        this.speechText = this.add.text(50, 50, '').setDepth(4);
        this.count = 1;
        this.background1.setOrigin(0);
        this.background2.setOrigin(0);

        this.plusbutton.setInteractive({ setHandCursor: true })
        .on('pointerdown', () => this.plusbuttonClick());

        this.minusbutton.setInteractive({ setHandCursor:true })
        .on('pointerdown', () => this.minusbuttonClick());

        this.galleryButton.setInteractive({ setHandCursor:true })
        .on('pointerdown', () => this.changeBG());

        this.menuButton.setInteractive({ setHandCursor: true })
        .on('pointerdown', () => this.menuButtonClick());

        this.updateCountText();

    }

    updateCountText(clickCount) {
        this.countText.setText(`Scale: ${this.count}`);
        if(this.count > 1.5) {
            this.speechText.setText(`Ты чё, пёс?`);
        } else if(this.count == 0) {
            this.speechText.setText(`Верни меня!`);
        } else if(this.count < 0) {
            this.speechText.setText(`Переверни, пёс!`);
        } else {
            this.speechText.setText(`Эй, пёс!`);
        }
      }
    
      plusbuttonClick() {
        this.count += 0.1;
        this.count = Math.round(this.count * 100)/100;
        this.dude.setScale(this.count);
        this.updateCountText();
      }
    
      minusbuttonClick() {
        this.count -= 0.1;
        this.count = Math.round(this.count * 100)/100;
        this.dude.setScale(this.count);
        this.updateCountText();
      }

      changeBG() {
        let temp;
        temp = this.background1.depth;
        this.background1.setDepth(this.background2.depth);
        this.background2.setDepth(temp);
      }

      menuButtonClick() {
          this.scene.pause('MainScene');
          this.scene.moveDown();
      }
}