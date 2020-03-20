/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
    constructor(scene, texCoords) {
        super(scene);
        this.initBuffers(texCoords);
    }

    initBuffers(texCoords) {
        this.vertices = [
            -2, 0, 0,
            2, 0, 0,
            0, 2, 0,
            // repetition
            -2, 0, 0,
            2, 0, 0,
            0, 2, 0
        ];

        this.indices = [
            0, 1, 2,
            5, 4, 3
        ];


        this.normals = [];
        for (let i = 0; i < 4; ++i)
            this.normals.push(0, 0, 1);

        for (let i = 0; i < 3; ++i)
            this.normals.push(0, 0, -1);

        this.texCoords = texCoords;    

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}