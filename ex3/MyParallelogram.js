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
            1, 1, 0,    // 3
            // repetition
            0, 0, 0,    // 0
            2, 0, 0,    // 1
            3, 1, 0,    // 2
            1, 1, 0     // 3
        ];

        // indice of a triangle and its inverse, double-sided 
        this.indices = [
            3, 1, 0,
            3, 2, 1,
            4, 5, 7,
            5, 6, 7
        ];

        this.normals = [];
        for (let i = 0; i < 4; ++i)
            this.normals.push(0, 0, 1);

        for (let i = 0; i < 4; ++i)
            this.normals.push(0, 0, -1);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}