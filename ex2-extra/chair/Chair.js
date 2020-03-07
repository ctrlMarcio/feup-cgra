class Chair extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.sittingPlate = new SittingPlate(this.scene);
        this.ironRod = new ChairLeg(this.scene);

        this.zLegTranslate = this.sittingPlate.length / 2 - this.ironRod.depth / 2;
        this.yLegTranslate = this.ironRod.height / 2;
        this.xLegTranslate = this.sittingPlate.width / 2 + this.ironRod.depth / 2;
    }

    display() {
        // sitting plate
        this.scene.pushMatrix();
        this.scene.translate(0, this.ironRod.height + this.sittingPlate.thickness / 2, 0);
        this.sittingPlate.display();
        this.scene.popMatrix();

        // back plate - sitting plate is shrinked, rotated and used
        this.scene.pushMatrix();
        this.scene.translate(0, this.yLegTranslate + this.ironRod.height + this.ironRod.height/3, -this.zLegTranslate);
        this.scene.scale(1, 1/2, 1);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.sittingPlate.display();
        this.scene.popMatrix();

        // legs
        this.scene.pushMatrix();
        this.scene.translate(0, this.yLegTranslate, 0);

        this.scene.pushMatrix();
        this.scene.translate(this.xLegTranslate, 0, this.zLegTranslate);
        this.ironRod.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.xLegTranslate, 0, -this.zLegTranslate);
        this.ironRod.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-this.xLegTranslate, 0, -this.zLegTranslate);
        this.ironRod.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-this.xLegTranslate, 0, this.zLegTranslate);
        this.ironRod.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

        // back rods
        this.scene.pushMatrix();
        this.scene.translate(0, this.yLegTranslate + this.ironRod.height + this.sittingPlate.thickness, -this.zLegTranslate);

        this.scene.pushMatrix();
        this.scene.translate(this.xLegTranslate, 0, 0);
        this.ironRod.display();
        this.scene.popMatrix();

        
        this.scene.pushMatrix();
        this.scene.translate(-this.xLegTranslate, 0, 0);
        this.ironRod.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

        // side rods
        this.scene.pushMatrix();
        this.scene.translate(0, this.ironRod.height + this.ironRod.depth / 2, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);

        this.scene.pushMatrix();
        this.scene.translate(this.xLegTranslate, 0, 0);
        this.ironRod.display(); 
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-this.xLegTranslate, 0, 0);
        this.ironRod.display(); 
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}