/**
 * A representation of a unit cube
 * 
 * @constructor
 * @param scene the running MyScene
 */
class MyUnitCube extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        let d = 0.5;

        this.vertices = [];
        this.indices = [];
        this.normals = [];

        // lower face
        this.vertices.push(d, -d, d,
            d, -d, -d,
            -d, -d, -d,
            -d, -d, d);
        this.indices.push(2, 1, 0,
            0, 3, 2);
        for (let i = 0; i < 4; ++i)
            this.normals.push(0, -1, 0);

        // side +x face
        this.vertices.push(d, -d, d,
            d, -d, -d,
            d, d, -d,
            d, d, d);
        this.indices.push(4, 5, 6,
            6, 7, 4);
        for (let i = 0; i < 4; ++i)
            this.normals.push(1, 0, 0);

        // side -z face
        this.vertices.push(d, -d, -d,
            -d, -d, -d,
            -d, d, -d,
            d, d, -d);
        this.indices.push(8, 9, 10,
            10, 11, 8);
        for (let i = 0; i < 4; ++i)
            this.normals.push(0, 0, -1);

        // side -x face
        this.vertices.push(-d, -d, -d,
            -d, -d, d,
            -d, d, d,
            -d, d, -d);
        this.indices.push(12, 13, 14,
            14, 15, 12);
        for (let i = 0; i < 4; ++i)
            this.normals.push(-1, 0, 0);

        // side +z face
        this.vertices.push(d, -d, d,
            d, d, d,
            -d, d, d,
            -d, -d, d);
        this.indices.push(16, 17, 18,
            18, 19, 16);
        for (let i = 0; i < 4; ++i)
            this.normals.push(0, 0, 1);

        // upper face
        this.vertices.push(d, d, d,
            d, d, -d,
            -d, d, -d,
            -d, d, d);
        this.indices.push(20, 21, 22,
            22, 23, 20);
        for (let i = 0; i < 4; ++i)
            this.normals.push(0, 1, 0);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers() {
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}