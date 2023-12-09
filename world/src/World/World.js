import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';


let camera;
let scene;
let renderer;

class World{
    constructor(container){
        // this.camera=createCamera();
        // this.scene=createScene();
        // this.renderer=createRenderer();
        camera=createCamera();
        scene=createScene();
        renderer=createRenderer();

        container.append(renderer.domElement);

        const cube=createCube();
        scene.add(cube);
        const resizer=new Resizer(container,camera,renderer);
    }


    render(){
        renderer.render(scene,camera);
    }
}



export {World}