import {World} from './World/World'

function main(){
    const container = document.querySelector('#scene-container');

    // 1. Create an instance of the World app
    const world = new World(container);
  
    // 2. Render the scene
    world.render();
}

main();