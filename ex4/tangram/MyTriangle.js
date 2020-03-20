/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
    constructor(scene, texCoords) {
        super(scene);
        this.initBuffers(texCoords);
    }

    initBuffers(texCoords) {
        this.vertices = [
            -1, 1, 0,
            -1, -1, 0,
            1, -1, 0,
            // repetition
            -1, 1, 0,
            -1, -1, 0,
            1, -1, 0
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 1, 2,
            5, 4, 3
        ];

        this.normals = [];
        for (let i = 0; i < 3; ++i)
            this.normals.push(0, 0, 1);

        for (let i = 0; i < 3; ++i)
            this.normals.push(0, 0, -1);

        this.texCoords = texCoords;    

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}