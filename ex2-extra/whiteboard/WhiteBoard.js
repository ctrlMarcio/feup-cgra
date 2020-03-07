class WhiteBoard extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.width = 25;
        this.height = 15;
        this.depth = 0.4;
        this.sideThickness = 0.4;

        this.sideBar = new MyUnitCubeQuad(this.scene);
        this.board = new MyQuad(this.scene);
    }

    display() {
        this.displaySideBars();
        this.displayBoard();
    }

    displaySideBars() {
        this.scene.setDiffuse(147/255, 142/255, 145/255, 1);
        
        this.scene.pushMatrix();
        this.scene.translate(0, this.sideThickness / 2 - this.height/2, 0);
        this.scene.scale(this.width, this.sideThickness, this.depth);
        this.sideBar.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -this.sideThickness / 2 + this.height / 2, 0);
        this.scene.scale(this.width, this.sideThickness, this.depth);
        this.sideBar.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.width / 2 - this.sideThickness / 2, 0, 0);
        this.scene.scale(this.sideThickness, this.height - 2 * this.sideThickness, this.depth);
        this.sideBar.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-(this.width / 2 - this.sideThickness / 2), 0, 0);
        this.scene.scale(this.sideThickness, this.height - 2 * this.sideThickness, this.depth);
        this.sideBar.display();
        this.scene.popMatrix();
    }

    displayBoard() {
        this.scene.setDiffuse(1, 1, 1, 1);

        this.scene.pushMatrix();
        this.scene.scale(this.width - 2 * this.sideThickness, this.height - 2 * this.sideThickness, 1);
        this.board.display();
        this.scene.popMatrix();
    }
}