class Room extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.width = 90;
        this.length = 65;
        this.height = 28;
        this.depth = 2;

        this.object = new InvertedCube(this.scene);
    }

    display() {
        this.scene.setDiffuse(1,1,1,1);

        this.scene.pushMatrix();
        this.scene.scale(this.width, this.height, this.length);
        this.scene.translate(0, 0.5, 0);
        this.object.display();
        this.scene.popMatrix();
    }
}