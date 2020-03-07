class SittingPlate extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.width = 4;
        this.length = 4;
        this.thickness = 0.2;

        this.object = new MyUnitCubeQuad(this.scene);
    }

    display() {
        this.scene.setDiffuse(222/255, 184/255,135/255, 1);

        this.scene.pushMatrix();
        this.scene.scale(this.width, this.thickness, this.length);
        this.object.display();
        this.scene.popMatrix();
    }
}