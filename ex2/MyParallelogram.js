/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            0, 0, 0,    // 0
            2, 0, 0,    // 1
            3, 1, 0,    // 2
            1, 1, 0     // 3
        ];

        // indice of a triangle and its inverse, double-sided 
        this.indices = [
            3, 1, 0,
            3, 2, 1
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}