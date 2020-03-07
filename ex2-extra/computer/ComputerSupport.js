class ComputerSupport extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.baseThickness = 0.1;

        this.neckWidth = 1.2;
        this.neckHeight = 1;

        this.base = new MyUnitCubeQuad(this.scene);
        this.neck = new MyUnitCubeQuad(this.scene);
    }

    display() {
        this.scene.setDiffuse(0, 0, 0, 1);

        this.scene.pushMatrix();
        this.scene.scale(this.neckWidth, this.baseThickness, 1.5);
        this.scene.translate(0, 0.5, 0); // base of the ref
        this.base.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, this.neckHeight / 2 + this.baseThickness, -0.1);
        this.scene.rotate(Math.PI/15, 1, 0, 0);
        this.scene.scale(this.neckWidth, this.neckHeight, 0.1);
        this.neck.display();
        this.scene.popMatrix();
    }
}