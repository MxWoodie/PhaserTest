import 'phaser';

//import { SimpleScene } from './scenes/simple-scene';
import {MainScene} from './scenes/mainscene';
import {PopupScene} from './scenes/popupscene';

const gameConfig = {
  width: 640,
  height: 480,
  scene: [ MainScene, PopupScene ]
  //scene: SimpleScene
};

let game = new Phaser.Game(gameConfig);