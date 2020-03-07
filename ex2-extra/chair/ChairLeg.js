class ChairLeg extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.depth = 0.15;
        this.height = 4;

        this.object = new MyUnitCubeQuad(this.scene);
    }

    display() {
        this.scene.setDiffuse(101 / 255, 101 / 255, 97 / 255, 1);

        this.scene.pushMatrix();
        this.scene.scale(this.depth, this.height, this.depth);
        this.object.display();
        this.scene.popMatrix();
    }
}