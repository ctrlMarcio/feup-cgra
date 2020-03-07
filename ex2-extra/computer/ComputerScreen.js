class ComputerScreen extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.support = new ComputerSupport(this.scene);
        this.screenFrame = new ComputerScreenFrame(this.scene);
    }

    display(partyMode) {
        this.support.display();

        this.scene.pushMatrix();
        this.scene.translate(0, 2, -0.5);
        this.screenFrame.display(partyMode);
        this.scene.popMatrix();
    }
}