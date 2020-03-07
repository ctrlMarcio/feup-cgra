class Leg extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        // units in 10cm, e.g. 0.5 = 5cm
        this.depth = 0.5;
        this.height = 7.5;

        this.object = new MyUnitCubeQuad(this.scene);
    }

    display() {
        this.scene.setDiffuse(101/255, 101/255, 97/255, 1);
        
        this.scene.pushMatrix();
        this.scene.scale(this.depth, this.height, this.depth);
        this.object.display();
        this.scene.popMatrix();
    }
}