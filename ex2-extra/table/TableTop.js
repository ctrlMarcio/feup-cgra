class TableTop extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        // units in 10cm, e.g. 0.5 = 5cm
        this.xScale = 11;
        this.yScale = 0.2;
        this.zScale = 7.5;

        this.object = new MyUnitCubeQuad(this.scene);
    }

    display() {
        this.scene.setDiffuse(251/255, 252/255, 218/255, 1);

        this.scene.pushMatrix();
        this.scene.scale(this.xScale, this.yScale, this.zScale);
        this.object.display();
        this.scene.popMatrix();
    }
}