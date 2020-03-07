class Keyboard extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.width = 4;
        this.length = 1.5;
        this.thickness = 0.15;
        this.rotationAngle = Math.PI / 16;

        this.keyboard = new MyUnitCubeQuad(this.scene);
    }

    display() {
        this.scene.setDiffuse(0, 0, 0, 1);

        this.scene.pushMatrix();
        this.scene.rotate(this.rotationAngle, 1, 0, 0);
        this.scene.scale(this.width, this.thickness, this.length);
        this.keyboard.display();
        this.scene.popMatrix();
    }
}