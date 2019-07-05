class Moment {
    time = 0;
    actors = {};

    constructor(time, actors) {
        this.time = time;
        this.addActor(actors);
    }

    addActor(actors) {
        console.log('actors', actors);
        for (let i = 0; i < actors.length; i++) {
            this.actors[actors[i].name] = actors[i];
        }
    }

    apply() {
        for (let name in this.actors) {
            if (this.actors.hasOwnProperty(name)) {
                this.actors[name].display(this);
            }
        }
    }
}
