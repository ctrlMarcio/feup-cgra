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
        this.vertices = [
            // vertices with negative y (below center) starting with the 1st quadrant of the xz plan and going anti-clockwise
            0.5, -0.5, 0.5,
            0.5, -0.5, -0.5,
            -0.5, -0.5, -0.5,
            -0.5, -0.5, 0.5,
            // vertices with positive y (above center)
            0.5, 0.5, 0.5,
            0.5, 0.5, -0.5,
            -0.5, 0.5, -0.5,
            -0.5, 0.5, 0.5
        ]

        this.indices = [
            // face that intersects x
            0, 1, 5,
            5, 4, 0,
            // face that intersects -x
            3, 7, 6,
            6, 2, 3,
            // face that intersects y
            4, 5, 6,
            6, 7, 4,
            // face that intersects -y
            2, 1, 0,
            0, 3, 2,
            // face that intersects z
            0, 4, 7,
            7, 3, 0,
            // face that intersects -z
            6, 5, 1,
            1, 2, 6
        ]

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}