class TableGroup extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.table = new Table(this.scene);

        this.maxgap = 0.3;
        this.x1gap = Math.random() * this.maxgap;
        this.z1gap = Math.random() * this.maxgap;
        this.x2gap = Math.random() * this.maxgap;
        this.z2gap = Math.random() * this.maxgap;
        this.x3gap = Math.random() * this.maxgap;
        this.z3gap = Math.random() * this.maxgap;
        this.x4gap = Math.random() * this.maxgap;
        this.z4gap = Math.random() * this.maxgap;
    }

    display() {
        var xTranslation = this.table.tableTop.xScale / 2;
        var zTranslation = this.table.tableTop.zScale / 2;
        
        this.scene.pushMatrix();
        this.scene.translate(xTranslation + this.x1gap, 0, zTranslation + this.z1gap);
        this.table.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(xTranslation + this.x2gap, 0, -zTranslation - this.z2gap);
        this.table.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-xTranslation - this.x3gap, 0, -zTranslation - this.z3gap);
        this.table.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-xTranslation - this.x4gap, 0, zTranslation + this.z4gap);
        this.table.display();
        this.scene.popMatrix();
    }
}