/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
    constructor(scene, texCoords) {
        super(scene);
        this.initBuffers(texCoords);
    }

    initBuffers(texCoords) {
        // every vertice repeated to have both sides
        this.vertices = [
            -1, 0, 0,
            1, 0, 0,
            0, 1, 0,
            -1, 0, 0,
            1, 0, 0,
            0, 1, 0
        ];

        this.indices = [
            2, 0, 1,
            4, 3, 5
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