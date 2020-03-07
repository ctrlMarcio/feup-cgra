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
        this.floor = new MyQuad(this.scene);
    }

    display() {
        this.scene.setDiffuse(1,1,1,1);

        this.scene.pushMatrix();
        this.scene.translate(0, -0.1, 0.1);
        this.scene.scale(this.width, this.height+0.1, this.length);
        this.scene.translate(0, 0.5, 0);
        this.object.display();
        this.scene.popMatrix();

        this.scene.setDiffuse(0.5, 0.5, 0.5, 1);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0);
        this.scene.scale(this.width - 0.005, 1, this.length - 0.005);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.floor.display();
        this.scene.popMatrix();
    }
}