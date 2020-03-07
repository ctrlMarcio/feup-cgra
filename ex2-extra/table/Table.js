class Table extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.gap = 0.2;

        this.tableTop = new TableTop(this.scene);

        // legs anti-clockwise starting from the 1st quadrant
        this.leg = new Leg(this.scene);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, this.leg.height + this.tableTop.yScale / 2, 0);
        this.tableTop.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, this.leg.height / 2, 0);

        var xLegTranslation = this.tableTop.xScale / 2 - this.leg.depth / 2 - this.gap;
        var zLegTranslation = this.tableTop.zScale / 2 - this.leg.depth / 2 - this.gap;

        this.scene.pushMatrix();
        this.scene.translate(xLegTranslation, 0, zLegTranslation);
        this.leg.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(xLegTranslation, 0, -zLegTranslation);
        this.leg.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-xLegTranslation, 0, -zLegTranslation);
        this.leg.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-xLegTranslation, 0, zLegTranslation);
        this.leg.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }

    getBaseHeight() {
        return this.leg.height + this.tableTop.yScale; // useful to place objects above the table
    }
}