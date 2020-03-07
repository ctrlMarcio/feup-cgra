/**
 * The squar-y part of a computer screen
 */
class ComputerScreenFrame extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.width = 5;
        this.height = 3;
        this.gap = 0.05;
        this.backFrameThickness = 0.05;
        this.sideFrameThickness = 0.1;

        this.backFrame = new MyUnitCubeQuad(this.scene);
        this.sideFrame = new MyUnitCubeQuad(this.scene);
        this.screen = new MyQuad(this.scene);
    }

    display(partyMode) {
        this.scene.setDiffuse(0, 0, 0, 1);

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);

        this.displayBackFrame();
        this.displaySideFrames();
        this.displayScreen(partyMode);

        this.scene.popMatrix();
    }

    displayBackFrame() {
        this.scene.pushMatrix();
        this.scene.scale(this.width, this.height, this.backFrameThickness);
        this.backFrame.display();
        this.scene.popMatrix();
    }

    displaySideFrames() {
        this.scene.pushMatrix();
        this.scene.translate(0, -this.height / 2 + this.gap/2, this.backFrameThickness);
        this.scene.scale(this.width, this.gap, this.sideFrameThickness);
        this.sideFrame.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, this.height / 2 - this.gap/2, this.backFrameThickness);
        this.scene.scale(this.width, this.gap, this.sideFrameThickness);
        this.sideFrame.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.width / 2 - this.gap/2, 0, this.backFrameThickness);
        this.scene.scale(this.gap, this.height - 2 * this.gap, this.sideFrameThickness);
        this.sideFrame.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-(this.width / 2 - this.gap/2), 0, this.backFrameThickness);
        this.scene.scale(this.gap, this.height - 2 * this.gap, this.sideFrameThickness);
        this.sideFrame.display();
        this.scene.popMatrix();
    }

    displayScreen(partyMode) {
        if (partyMode)
            this.scene.setDiffuse(Math.random(), Math.random(), Math.random(), 1);
        else
            this.scene.setDiffuse(1, 1, 1, 1);

        this.scene.pushMatrix();
        this.scene.translate(0, 0, this.backFrameThickness + this.sideFrameThickness / 2); // a militer from the backframe
        this.scene.scale(this.width - 2 * this.gap, this.height - 2 * this.gap, 1);
        this.screen.display();
        this.scene.popMatrix();
    }
}