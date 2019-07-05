class Scene {
    currentTime = 0;
    moments = {};

    constructor(moments) {
        this.addMoments(moments)
    }

    addMoments(moments) {
        for (let i = 0; i < moments.length; i++) {
            const momentExists = this.moments[moments[i].time];
            if (momentExists) {
                // merge moments
                console.log('moment to update', momentExists);
                console.log('with', moments[i], moments[i].actors )
                console.log('before', {moment: this.moments[moments[i].time]});
                this.moments[moments[i].time].addActor(Object.keys(moments[i].actors).map(actor => moments[i].actors[actor]));
                console.log('after',{moment: this.moments[moments[i].time]});
            } else {
                this.moments[moments[i].time] = moments[i];
            }
        }
    }

    update() {
        if (this.moments[this.currentTime]) {
            this.moments[this.currentTime].apply();
        }
        this.currentTime++;
    }
}
