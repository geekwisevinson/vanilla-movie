// you can create an actor
const actor = new Actor('vinson', {
    left: '100px', top: '100px', width: '100px', height: '100px', background: 'red',
    ...cssShapes.headShape
});
const lefty = new Actor('left-eye', {
    width: '20%', height: '20%',
    top: '40%', left: '20%', background: 'grey',
    ...cssShapes.eyeShape
}, actor);

const righty = new Actor('right-eye', {
    width: '20%', height: '20%',
    top: '40%', right: '20%', background: 'grey',
    ...cssShapes.eyeShape
}, actor);
actor.addPartsActors([lefty, righty]);
const actor2 = new Actor('brittney', {
    left: '300px', top: '100px', width: '100px', height: '100px', background: 'blue',
    ...cssShapes.headShape
});
// you can create moments and pass in actors
const moment = new Moment(4, [actor]);
const moment2 = new Moment(100, [actor2]);

// you can create a scene pass in a moment
scene = new Scene([moment]);

// you can add moments to a scene after it is created
scene.addMoments([moment2]);
scene.addMoments([new Moment(101, [new Actor('vinson', {transition: 'all ease 1s', top: '200px'})])]);

// you can update an actor in a moment
actor.updateScene(scene, 130, {background: 'purple'}, 1000);

lefty.updateScene(scene, 140, {left: '60%', ...cssShapes.eyeSquint}, 400);
const leftPupil = new Actor('left-pupil',{ background: 'black', top: '40%', ...cssShapes.pupils}, lefty);
moment.addActor([leftPupil]);
righty.updateScene(scene, 140, {right: '0%', ...cssShapes.eyeSquint, width: '0'}, 400);


