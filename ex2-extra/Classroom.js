class Classroom extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        this.room = new Room(this.scene);
        this.initTables();
        this.initChairs();
    }

    initTables() {
        // various tables to get random placement
        this.tables1 = new TableGroup(this.scene);
        this.tables2 = new TableGroup(this.scene);
        this.tables3 = new TableGroup(this.scene);
        this.tables4 = new TableGroup(this.scene);
    }

    initChairs() {
        var MAX_ANGLE = Math.PI / 8 // abs, i.e., angle in [-Math.PI / 6, Math.PI / 6]

        this.chair = new Chair(this.scene);
        
        this.angle1 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        this.angle2 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        this.angle3 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        this.angle4 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        
        this.angle5 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        this.angle6 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        this.angle7 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        this.angle8 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        
        this.angle9 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        this.angle10 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        this.angle11 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        this.angle12 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        
        this.angle13 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        this.angle14 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        this.angle15 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
        this.angle16 = Math.random() * (2 * MAX_ANGLE) - MAX_ANGLE;
    }

    display() {
        this.displayWallsAndEnv();
        this.displayTables();
        this.displayChairs();
    }

    displayWallsAndEnv() {
        this.scene.pushMatrix();
        this.room.display();
        this.scene.popMatrix();
    }

    displayTables() {
        this.scene.pushMatrix();
        this.scene.translate(20, 0, 15);
        this.tables1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(20, 0, -10);
        this.tables2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-15, 0, 15);
        this.tables1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-15, 0, -10);
        this.tables2.display();
        this.scene.popMatrix();
    }

    displayChairs() {
        this.scene.pushMatrix();
        this.scene.translate(14, 0, -20);
        this.scene.rotate(this.angle1, 0 , 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(25, 0, -17);
        this.scene.rotate(this.angle2, 0 , 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(15, 0, -1);
        this.scene.rotate(this.angle3, 0 , 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(25, 0, -2);
        this.scene.rotate(this.angle4, 0 , 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(26, 0, 5);
        this.scene.rotate(this.angle5, 0 , 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(14, 0, 8);
        this.scene.rotate(this.angle6, 0 , 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(14, 0, 25);
        this.scene.rotate(this.angle7, 0 , 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(25, 0, 22);
        this.scene.rotate(this.angle8, 0 , 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-21, 0, 5);
        this.scene.rotate(this.angle9, 0 , 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-8, 0, 8);
        this.scene.rotate(this.angle10, 0 , 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-9, 0, 25);
        this.scene.rotate(this.angle11, 0 , 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-20, 0, 22);
        this.scene.rotate(this.angle12, 0 , 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-9, 0, -20);
        this.scene.rotate(this.angle13, 0 , 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-20, 0, -17);
        this.scene.rotate(this.angle14, 0 , 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-10, 0, -1);
        this.scene.rotate(this.angle15, 0 , 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-19, 0, -2);
        this.scene.rotate(this.angle16, 0 , 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.chair.display();
        this.scene.popMatrix();

    }
}