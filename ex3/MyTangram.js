/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene, material) {
        super(scene);
        this.init();
        this.diamondMaterial = material;
    }

    init() {
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.smallTrianglePurple = new MyTriangleSmall(this.scene);
        this.smallTriangleRed = new MyTriangleSmall(this.scene);
        this.bigTriangleOrange = new MyTriangleBig(this.scene);
        this.bigTriangleBlue = new MyTriangleBig(this.scene);

        this.material = new CGFappearance(this.scene);
        this.material.setSpecular(1, 1, 1, 1.0);
        this.material.setShininess(10.0);
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
        
        this.diamondMaterial.apply();

        this.diamond.display();
        this.scene.popMatrix();

        // Displays parallelogram
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.scale(-1, 1, 1);

        this.material.setAmbient(0.5, 0.5, 0, 1.0);
        this.material.setDiffuse(1, 1, 0, 1.0);
        this.material.apply();
        
        this.parallelogram.display();
        this.scene.popMatrix();

        // Displays purple small triangle
        this.scene.pushMatrix();
        this.scene.translate(-2, 3, 0);
        this.scene.scale(1, -1, 1);

        this.material.setAmbient(75/255, 40/255, 95/255, 1.0);
        this.material.setDiffuse(150/255, 80/255, 190/255, 1.0);
        this.material.apply();

        this.smallTrianglePurple.display();
        this.scene.translate(100, 100, 100);
        this.scene.popMatrix();

        // Displays orange big triangle
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(2, 0, 0);

        this.material.setAmbient(0.5, 72/255, 0, 1.0);
        this.material.setDiffuse(1, 155/255, 0, 1.0);
        this.material.apply();

        this.bigTriangleOrange.display();
        this.scene.popMatrix();

        // Displays blue big triangle
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(8) - 1, -Math.sqrt(8) - 1, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(2, 0, 0);

        this.material.setAmbient(0.5, 72/255, 0.5, 1.0);
        this.material.setDiffuse(0, 155/255, 1, 1.0);
        this.material.apply();

        this.bigTriangleBlue.display();
        this.scene.popMatrix();

        var diff1 = Math.sqrt((3 - 2 * Math.sqrt(2)) / 4);
        var diff2 = Math.sqrt(2);

        // Displays the regular triangle
        this.scene.pushMatrix();
        this.scene.translate(diff1, -Math.sqrt(2) + diff1, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);

        this.material.setAmbient(0.5, 72/255, 103/255, 1.0);
        this.material.setDiffuse(1, 155/255, 207/255, 1.0);
        this.material.apply();

        this.triangle.display();
        this.scene.popMatrix();

        // Displays the small red triangle
        this.scene.pushMatrix();
        this.scene.translate(diff1, -diff2 + diff1, 0)
        this.scene.rotate(Math.PI * 3 /4, 0, 0, 1);
        this.scene.translate(0, -1, 0);

        this.material.setAmbient(0.5, 13/255, 13/255, 1.0);
        this.material.setDiffuse(1, 27/255, 27/255, 1.0);
        this.material.apply();

        this.smallTriangleRed.display();
        this.scene.popMatrix();
    }

    updateBuffers() {
        // reinitialize buffers
        this.init();
        this.initNormalVizBuffers();
    }

    // TODO: an error still appears in the console(?)
    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.smallTrianglePurple.enableNormalViz();
        this.smallTriangleRed.enableNormalViz();
        this.bigTriangleOrange.enableNormalViz();
        this.bigTriangleBlue.enableNormalViz();
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.smallTrianglePurple.disableNormalViz();
        this.smallTriangleRed.disableNormalViz();
        this.bigTriangleOrange.disableNormalViz();
        this.bigTriangleBlue.disableNormalViz();
    }
}