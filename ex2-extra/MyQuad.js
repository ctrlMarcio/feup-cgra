/**
 * The basic unit square on the xy
 * 
 * @constructor
 * @param scene the current scene
 */
class MyQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            // anti-clockwise starting on the 1st quadrant
            0.5, 0.5, 0,
            -0.5, 0.5, 0,
            -0.5, -0.5, 0,
            0.5, -0.5, 0
        ];

        this.indices = [
            0, 1, 2,
            2, 3, 0
        ];

        this.primitiveTyoe = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}