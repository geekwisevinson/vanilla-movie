class Actor {
    name = '';
    styles = null;
    parts = {};
    partActor;
    el;

    constructor(name, styles, partActor) {
        this.setConfig(name, styles);
        this.partActor = partActor;
    }

    setConfig(name, styles) {
        this.name = name;
        this.styles = styles;
    }

    display(moment) {
        const existedPreviously = document.querySelector(`#${this.name}`);
        this.el = document.querySelector(`#${this.name}`) || document.createElement('div');
        this.el.id = this.name;
        if (!existedPreviously) {
            if (this.partActor) {
                this.partActor.el.children[0].appendChild(this.el);
            } else {
                document.body.appendChild(this.el);
            }

            const container = document.createElement('div');
            container.classList.add('container');
            this.el.appendChild(container);
        }
        this.setStyles(this.el, this.styles);
        for (const property in this.parts) {
            if (this.parts.hasOwnProperty(property)) {
                this.parts[property].display();
            }
        }

    }

    setStyles(el, styles) {
        el.style.transition = 'ease 10s all';
        for (const property in styles) {
            if (styles.hasOwnProperty(property)) {
                el.style[property] = styles[property];
            }
        }
    }

    updateScene(scene, time, style, ms) {
        if (ms) {
            style.transition = `all ease ${ms}ms`
        }
        scene.addMoments([new Moment(time, [new Actor(this.name, style)])]);
    }

    addPartsActors(actors) {
        for (let i = 0; i < actors.length; i++) {
            this.parts[actors[i].name] = actors[i];
        }
    }
}
