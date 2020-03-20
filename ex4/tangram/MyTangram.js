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
        this.initMaterials();
        this.initPieces();

        this.diff1 = Math.sqrt((3 - 2 * Math.sqrt(2)) / 4);
        this.diff2 = Math.sqrt(2);
    }

    display() {
        this.diamondMaterial.apply();
        this.scene.pushMatrix();
        // Displays diamond
        var transfDiamond = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -1, 0, 0, 1
        ];

        this.scene.multMatrix(transfDiamond);
        this.diamond.display();
        this.scene.popMatrix();

        // Displays parallelogram
        this.paralellogramMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.scale(-1, 1, 1);
        this.parallelogram.display();
        this.scene.popMatrix();

        // Displays purple small triangle
        this.smallPurpleTriangleMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(-2, 3, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.smallTrianglePurple.display();
        this.scene.popMatrix();

        // Displays orange big triangle
        this.bigOrangeTriangleMaterial.apply();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(2, 0, 0);
        this.bigTriangleOrange.display();
        this.scene.popMatrix();

        // Displays blue big triangle
        this.bigBlueTriangleMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(8) - 1, -Math.sqrt(8) - 1, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(2, 0, 0);
        this.bigTriangleBlue.display();
        this.scene.popMatrix();

        // Displays the regular triangle
        this.regularTriangleMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(this.diff1, -Math.sqrt(2) + this.diff1, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();

        // Displays the small red triangle
        this.smallRedTriangleMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(this.diff1, -this.diff2 + this.diff1, 0)
        this.scene.rotate(Math.PI * 3 /4, 0, 0, 1);
        this.scene.translate(0, -1, 0);
        this.smallTriangleRed.display();
        this.scene.popMatrix();
    }

    initMaterials() {
        this.tangramTexture = new CGFtexture(this.scene, "images/tangram.png");

        this.diamondMaterial = new CGFappearance(this.scene);
        this.diamondMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.diamondMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.diamondMaterial.setSpecular(0.5, 0.5, 0.5, 1);
        this.diamondMaterial.setShininess(10);
        this.diamondMaterial.setTexture(this.tangramTexture);

        this.paralellogramMaterial = new CGFappearance(this.scene);
        this.paralellogramMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.paralellogramMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.paralellogramMaterial.setSpecular(0.5, 0.5, 0.5, 1);
        this.paralellogramMaterial.setShininess(10);
        this.paralellogramMaterial.setTexture(this.tangramTexture);

        this.smallPurpleTriangleMaterial = new CGFappearance(this.scene);
        this.smallPurpleTriangleMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.smallPurpleTriangleMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.smallPurpleTriangleMaterial.setSpecular(0.5, 0.5, 0.5, 1);
        this.smallPurpleTriangleMaterial.setShininess(10);
        this.smallPurpleTriangleMaterial.setTexture(this.tangramTexture);

        this.bigOrangeTriangleMaterial = new CGFappearance(this.scene);
        this.bigOrangeTriangleMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.bigOrangeTriangleMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bigOrangeTriangleMaterial.setSpecular(0.5, 0.5, 0.5, 1);
        this.bigOrangeTriangleMaterial.setShininess(10);
        this.bigOrangeTriangleMaterial.setTexture(this.tangramTexture);

        this.bigBlueTriangleMaterial = new CGFappearance(this.scene);
        this.bigBlueTriangleMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.bigBlueTriangleMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bigBlueTriangleMaterial.setSpecular(0.5, 0.5, 0.5, 1);
        this.bigBlueTriangleMaterial.setShininess(10);
        this.bigBlueTriangleMaterial.setTexture(this.tangramTexture);

        this.regularTriangleMaterial = new CGFappearance(this.scene);
        this.regularTriangleMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.regularTriangleMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.regularTriangleMaterial.setSpecular(0.5, 0.5, 0.5, 1);
        this.regularTriangleMaterial.setShininess(10);
        this.regularTriangleMaterial.setTexture(this.tangramTexture);

        this.smallRedTriangleMaterial = new CGFappearance(this.scene);
        this.smallRedTriangleMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.smallRedTriangleMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.smallRedTriangleMaterial.setSpecular(0.5, 0.5, 0.5, 1);
        this.smallRedTriangleMaterial.setShininess(10);
        this.smallRedTriangleMaterial.setTexture(this.tangramTexture);
    }

    initPieces() {
        this.diamond = new MyDiamond(this.scene, [
			0, 0.5,
			0.25, 0.75,
			0.25, 0.25,
			0.5, 0.5,
			// backside
			0, 0.5,
			0.25, 0.75,
			0.25, 0.25,
			0.5, 0.5
        ]);
        
        this.triangle = new MyTriangle(this.scene, [
            0, 0.5,
            0, 1,
            0.5, 1,
            // backside
            0, 0.5,
            0, 1,
            0.5, 1
        ]);

        this.parallelogram = new MyParallelogram(this.scene, [
			1, 1,
			0.5, 1,
			0.25, 0.75,
			0.75, 0.75,
			// backside
			1, 1,
			0.5, 1,
			0.25, 0.75,
			0.75, 0.75
        ]);
        
        this.smallTrianglePurple = new MyTriangleSmall(this.scene, [
            0, 0,
            0, 0.5,
            0.25, 0.25,
            // backside
            0, 0,
            0, 0.5,
            0.25, 0.25
        ]);

        this.smallTriangleRed = new MyTriangleSmall(this.scene, [
            0.25, 0.75,
            0.75, 0.75,
            0.5, 0.5,
            // backside
            0.25, 0.75,
            0.75, 0.75,
            0.5, 0.5
        ]);

        this.bigTriangleOrange = new MyTriangleBig(this.scene, [
            1, 1,
            1, 0,
            0.5, 0.5,
            // backside
            1, 1,
            1, 0,
            0.5, 0.5
        ]);

        this.bigTriangleBlue = new MyTriangleBig(this.scene, [
            1, 0,
            0, 0,
            0.5, 0.5,
            // backside
            1, 0,
            0, 0,
            0.5, 0.5
        ]);
    }
}