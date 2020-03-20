/**
 * A unit cube made of quads
 * 
 * @constructor
 * @param scene the current scene
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.initMaterial();
        this.quad = new MyQuad(this.scene);
    }

    display(linearRegression) {
        this.scene.setDiffuse(1, 1, 1, 1); // colour white

        this.sideMaterial.apply();
        if (linearRegression)     
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    
        // faces that intersect the z axis
        // positive
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();
        // negative
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        // faces that intersect the x axis
        // positive
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();
        // negative
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        // faces that intersect the y axis
        // poositive
        this.topMaterial.apply();
        if (linearRegression)     
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0)
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        // neagtive
        this.bottomMaterial.apply();
        if (linearRegression)     
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
    }

    initMaterial() {
        this.sideTexture = new CGFtexture(this.scene, "images/mineSide.png");
        this.topTexture = new CGFtexture(this.scene, "images/mineTop.png");
        this.bottomTexture = new CGFtexture(this.scene, "images/mineBottom.png");

        this.sideMaterial = new CGFappearance(this.scene);
        this.sideMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideMaterial.setSpecular(0.05, 0.05, 0.05, 1);
        this.sideMaterial.setShininess(10);
        this.sideMaterial.setTexture(this.sideTexture);

        this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.topMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topMaterial.setSpecular(0.05, 0.05, 0.05, 1);
        this.topMaterial.setShininess(10);
        this.topMaterial.setTexture(this.topTexture);

        this.bottomMaterial = new CGFappearance(this.scene);
        this.bottomMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomMaterial.setSpecular(0.05, 0.05, 0.05, 1);
        this.bottomMaterial.setShininess(10);
        this.bottomMaterial.setTexture(this.bottomTexture);
    }
}