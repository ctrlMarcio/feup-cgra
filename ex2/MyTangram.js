/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.smallTrianglePurple = new MyTriangleSmall(this.scene);
        this.smallTriangleRed = new MyTriangleSmall(this.scene);
        this.bigTriangleOrange = new MyTriangleBig(this.scene);
        this.bigTriangleBlue = new MyTriangleBig(this.scene);
    }

    display() {
        this.scene.pushMatrix();
        // Displays diamond
        var transfDiamond = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -1, 0, 0, 1
        ]

        this.scene.multMatrix(transfDiamond);
        this.scene.setDiffuse(0, 1, 0, 1.0); // make green

        this.diamond.display();
        this.scene.popMatrix();

        // Displays parallelogram
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.scale(-1, 1, 1);
        this.scene.setDiffuse(1, 1, 0, 1.0); // make yellow
        this.parallelogram.display();
        this.scene.popMatrix();

        // Displays purple small triangle
        this.scene.pushMatrix();
        this.scene.translate(-2, 3, 0);
        this.scene.scale(1, -1, 1);
        this.scene.setDiffuse(150/255, 80/255, 190/255, 1.0); // make purple
        this.smallTrianglePurple.display();
        this.scene.translate(100, 100, 100);
        this.scene.popMatrix();

        // Displays orange big triangle
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(2, 0, 0);
        this.scene.setDiffuse(1, 155/255, 0, 1.0); // make orange
        this.bigTriangleOrange.display();
        this.scene.popMatrix();

        // Displays blue big triangle
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(8) - 1, -Math.sqrt(8) - 1, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(2, 0, 0);
        this.scene.setDiffuse(0, 155/255, 1, 1.0); // make blue
        this.bigTriangleBlue.display();
        this.scene.popMatrix();

        var diff1 = Math.sqrt((3 - 2 * Math.sqrt(2)) / 4);
        var diff2 = Math.sqrt(2);

        // Displays the regular triangle
        this.scene.pushMatrix();
        this.scene.translate(diff1, -Math.sqrt(2) + diff1, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.scene.setDiffuse(1, 155/255, 207/255, 1.0); // make pink
        this.triangle.display();
        this.scene.popMatrix();

        // Displays the small red triangle
        this.scene.pushMatrix();
        this.scene.translate(diff1, -diff2 + diff1, 0)
        this.scene.rotate(Math.PI * 3 /4, 0, 0, 1);
        this.scene.translate(0, -1, 0);
        this.scene.setDiffuse(1, 27/255, 27/255, 1.0); // make pink
        this.smallTriangleRed.display();
        this.scene.popMatrix();
    }
}