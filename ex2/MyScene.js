/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }

    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        // Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        // Initialize scene objects
        this.axis = new CGFaxis(this);
        this.tangram = new MyTangram(this);
        this.unitCube = new MyUnitCube(this);
        this.unitCubeQuad = new MyUnitCubeQuad(this);

        // Flags that control what will appear on the menu to display
        this.displayAxis = true;
        this.displayTangram = true;
        this.displayUnitCube = false;
        this.displayUnitCubeQuad = true;
        this.onCenter = true;

        // Variable that saves the scale factor of the scene
        this.scaleFactor = 1;
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 0.5);
        this.setShininess(10.0);
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        // Scale operator on gui to scale the scene
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        // Puts the scene parallel to xz and with the top left center in the center of the referential
        if (this.onCenter) {
            this.translate(4, 0, 4);
            this.rotate(-Math.PI / 2, 1, 0, 0);
        }

        // Displays the objects according to their flag
        if (this.displayUnitCube) {
            this.pushMatrix();
            this.translate(0, 0, -0.501);
            this.scale(8, 8, 1);
            this.setDiffuse(1, 1, 1, 1.0); // colour white
            this.unitCube.display();
            this.popMatrix();
        }
        if (this.displayUnitCubeQuad) {
            this.pushMatrix();
            this.translate(0, 0, -0.501);
            this.scale(8, 8, 1);
            this.unitCubeQuad.display();
            this.popMatrix();
        }
        if (this.displayTangram)
            this.tangram.display();

    }
}