let scene;
function play() {
    if (scene){
        scene.update();
    }
    window.requestAnimationFrame(play);
}

play();
