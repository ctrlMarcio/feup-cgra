/**
 * EXTRA - CLASS
 */
class RegTriangle extends CGFobject {

    /**
     * Constructor
     * @param {C} scene     the CGFscene
     * @param {*} vertices  Example:[0, 0, 0,    -> point #0
     *                               1, 0, 0,    -> point #1
     *                               0, 1, 0]    -> point #2
     * @param {*} indices   counter clockwise order of indices/vertexes, according to the numeration above
     *                      Example:[0, 1, 2]
     */
    constructor(scene, vertices, indices) {
        super(scene);
        this.vertices = vertices;
        this.indices = indices;

        this.initBuffers();
    }

    initBuffers() {
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

}